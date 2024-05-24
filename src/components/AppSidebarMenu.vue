<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import useSidebar from "@/composables/useSidebar";
import { useRoute } from "vue-router";
import SportsEntityIcon from "@/components/SportsEntityIcon.vue";

const store = useSidebar();

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  heading: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  height: {
    type: Number,
    default: 218,
  },
});

const route = useRoute();
</script>
<template>
  <div class="app-sidebar-menu overflow-hidden">
    <div
      v-if="loading"
      :style="{ height: height + 'px' }"
      class="animate-pulse bg-[#273646]"
    >
      &nbsp;
    </div>
    <div v-else>
      <div v-if="store.open && heading" class="border-b border-[#202932] mb-1">
        <p class="px-4 font-medium pt-[10px] text-brand-lightGrey text- mb-2">
          {{ heading }}
        </p>
      </div>
      <ul class="list-none">
        <li v-for="item in items" :key="item.id">
          <div v-if="store.open && item.children">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="flex w-full relative items-center justify-between px-4 py-2.5 text-left text-brand-lightGrey font-medium focus:outline-none focus-visible:ring app-sidebar-menu-item"
              >
                <div class="flex items-center">
                  <SportsEntityIcon
                    entity="sport"
                    :name="item.title"
                    :class="[store.open ? 'mr-4' : '']"
                  />
                  <span v-if="store.open">{{ item.title }}</span>
                </div>

                <div
                  :class="[
                    'app-sidebar-menu-icon flex justify-end text-xs ',
                    open ? '' : 'absolute right-2 top-[12px]',
                  ]"
                >
                  <svg
                    v-if="open"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="7" fill="#07111B" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70711 10.2929C9.31658 9.90237 8.68342 9.90237 8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L12 12.5858L9.70711 10.2929Z"
                      fill="url(#paint0_linear_186_739)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_186_739"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#68D763" />
                        <stop offset="1" stop-color="#3AAA35" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="mr-2"
                  >
                    <circle cx="12" cy="12" r="7" fill="#A4ADBD" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM10.2929 14.2929C9.90237 14.6834 9.90237 15.3166 10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289C9.90237 8.68342 9.90237 9.31658 10.2929 9.70711L12.5858 12L10.2929 14.2929Z"
                      fill="#182330"
                    />
                  </svg>
                </div>
              </DisclosureButton>
              <transition
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <DisclosurePanel
                  class="py-2 font-medium text-md text-gray-500 bg-brand-darkBg"
                >
                  <RouterLink
                    v-for="child in item.children"
                    :to="child.to"
                    :class="[
                      'text-brand-lightGrey app-sidebar-menu-item py-[8px] cursor-pointer flex items-center  px-[16px] ',
                      child.to && child.to === child.path
                        ? 'app-sidebar-menu-item-active'
                        : '',
                    ]"
                  >
                    <span class="truncate inline-block">
                      <SportsEntityIcon
                        class="mx-2"
                        entity="sport"
                        :name="child.title"
                      />
                      {{ child.title }}
                    </span>
                  </RouterLink>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
          <RouterLink
            v-else
            :to="
              item.children
                ? item.children[item.children.length - 1].to
                : item.to
            "
            v-tippy="{
              content: !store.open ? item.title : null,
              placement: 'right',
            }"
            :class="[
              'text-brand-lightGrey app-sidebar-menu-item py-2.5 relative cursor-pointer flex items-center',
              item.to === route.path ? 'app-sidebar-menu-item-active' : '',
              store.open ? 'px-[16px]' : ' justify-center',
            ]"
          >
            <SportsEntityIcon
              entity="sport"
              :name="item.title"
              :class="[store.open ? 'mr-4' : '']"
            />
            <span v-if="store.open">{{ item.title }}</span>
            <span
              v-if="item.count && store.open"
              class="absolute top-[11px] right-[15px] app-sidebar-menu-count font-semibold py-[1px] text-sm px-2"
              >{{ item.count }}</span
            >
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.app-sidebar-menu {
  border-radius: 10px;
  background: #182330;
}

.app-sidebar-menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
}
.app-sidebar-menu-item-active,
.app-sidebar-menu-item-active:hover {
  background: rgba(255, 255, 255, 0.1);
}
.app-sidebar-menu-icon {
  fill: linear-gradient(180deg, #68d763 0%, #3aaa35 100%);
}
.app-sidebar-menu-count {
  border-radius: 75px;
  background: linear-gradient(180deg, #68d763 0%, #3aaa35 100%);
  color: #07111b;
}
</style>

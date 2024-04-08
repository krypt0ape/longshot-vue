<script setup>
defineProps({
  tab: {},
});
</script>
<template>
  <div :class="[
    'secondary-tab cursor-pointer h-[100px] w-[110px] flex items-center justify-center p-[16px] relative',
    tab.active ? 'secondary-tab-active' : '',
  ]">
    <div>
      <div class="relative mt-[5px]">
        <div :class="[
    'secondary-tab-icon font-semibold absolute left-[40px] -top-[15px] h-[28px] px-[6px] text-center flex items-center justify-center border-2 border-solid border-[#182330] rounded-full',
    tab.active ? 'secondary-tab-icon-active' : '',
  ]">
          {{ tab.total }}
        </div>
        <div class="flex justify-center">
          <i v-if="tab.icon" :class="tab.icon" class=" mb-[5px] mx-auto text-2xl" />
        </div>
      </div>
      <p :class="[
    'truncate  mx-4 text-brand-darkerGrey w-[75px] mx-auto text-center',
    tab.active ? 'font-bold !text-white' : 'font-medium',
  ]">
        {{ tab.title }}
      </p>
    </div>
  </div>
</template>
<style>
.secondary-tab {
  border-radius: 5px;
  border: 1px solid #182330;
}

.secondary-tab:hover {
  background: #182330;
}

.secondary-tab-active {
  border-radius: 5px;
  border: 1px solid var(--Pre-Title, #68d763);
  background: #182330;
}

.secondary-tab-icon {
  border-radius: 75px;
  background: #182330;
}

.secondary-tab-icon-active {
  background: linear-gradient(180deg, #ff2525 0%, #aa3535 100%) !important;
}
</style>

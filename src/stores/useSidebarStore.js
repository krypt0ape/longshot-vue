import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

export default defineStore('sidebar', () => {
		const open = ref(true);
		const main = ref();
		let tl;
		let ctx;

		const toggle = () => {
			tl.reversed(!tl.reversed());
			setTimeout(() => {
				open.value = !open.value;
			}, 500);
		}

		onMounted(() => {
			ctx = gsap.context((self) => {
			  const wrapper = document.getElementById('sidebar-wrapper');
			  const menu = document.getElementById('sidebar');
			  const page = document.getElementById('page');
			  tl = gsap
				.timeline()
				.to(menu, { y: -20, opacity: 0 })
				.to(wrapper, { width: 70, ease: "none", delay: 0.4, duration: 0.1}, 0)
				.to(page, {marginLeft: 70, ease: "none", delay: 0.4, duration: 0.1}, 0)
				.to(menu, { y: 0, opacity: 1,  })
				.reverse();
			}, main.value); // <- Scope!
		  });

		return {
			open,
			toggle
		}
  })
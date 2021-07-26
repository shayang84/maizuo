const top = { // 定义全局指令
  mounted (el, binding) {
    // console.log(el);

    window.onscroll = () => {
      if (document.documentElement.scrollTop || document.body.scrollTop >= binding.value) {
        el.style.display = 'block'
        // console.log('fixed')
      } else {
        // console.log('unfixed')
        el.style.display = 'none'
      }
    }
  },
  unmounted () {
    //   console.log('unmounted');
    window.onscroll = null
  }
}
export default top

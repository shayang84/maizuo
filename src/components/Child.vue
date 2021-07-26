<template>
    <div>
        child 组件--{{mytitle}}
        <slot></slot>
    </div>
</template>
<script>
export default {
//   components: { navbar, sidebar },
  props: ['mytitle']
}
</script>

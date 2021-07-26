<template>
    <div>
        search
    </div>
</template>
<script>
export default {
    created(){
        if (this.$store.state.cinemaList.length === 0) {
            this.$store.dispatch('getCinemaList', this.$store.state.cityId)
        }else{
            console.log("缓存");
        }
    }
}
</script>
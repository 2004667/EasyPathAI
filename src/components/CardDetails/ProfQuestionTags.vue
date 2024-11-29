<script>
export default {
    props: {
        name: String,
    }
}
</script>

<template>
    <div class="flex items-center">
        <div class="rounded-full bg-[#B1B0B0] w-[8px] h-[8px] mr-[2px]"></div>
        <h1 class="text-[#B1B0B0] md:text-[10px]">{{ name }}</h1>
    </div>
</template>

<style scoped>
</style>
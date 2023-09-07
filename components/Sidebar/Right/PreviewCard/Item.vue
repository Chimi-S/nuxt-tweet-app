<template>
    <div class="p-3 cursor-pointer hover:bg-gray-100 border-b dark:hover:bg-dim-300" :class="wrapperClasses">
        <slot/>
    </div>
</template>

<script setup>
    
    const { twitterBorderColor, defaultTransition } = useTailwindConfig();

    const wrapperClasses = computed(() => `${twitterBorderColor} ${defaultTransition}`);

</script>

<style scoped>

</style>
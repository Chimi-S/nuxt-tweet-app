<template>
    <div>
        <NuxtLink to="#" class="flex items-center p-4 w-min text-black hover:bg-gray-200 dark:text-white rounded-full dark:hover:bg-dim-200" :class="defaultTransition">
            <div class="w-6 h-6 text-dark">
                <slot name="icon"></slot>
            </div>
            <div class="hidden ml-2 text-xl xl:block" :class="textClasses">
                <slot name="title"></slot>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { defaultTransition } = useTailwindConfig();

    const props = defineProps({
        active: {
            type: Boolean,
            default: false
        }
    });

    const textClasses = computed(()=> props.active ? 'font-semibold' : 'font-normal');
</script>

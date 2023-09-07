<template>
    <div class="flex flex-col h-screen">
        <div class="p-2 my-2 hover:bg-blue-100 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <NuxtLink to="/">
                <div class="w-8 h-8">
                    <LogoTwitter/>
                </div>
            </NuxtLink>
        </div>

        <div class="mt-2 space-y-2">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon/>
                </template>
                <template v-slot:title>
                    Home
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <MagnifyingGlassIcon/>
                </template>
                <template v-slot:title>
                    Explore
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon/>
                </template>
                <template v-slot:title>
                    Notifications
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <EnvelopeIcon/>
                </template>
                <template v-slot:title>
                    Messages
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon/>
                </template>
                <template v-slot:title>
                    Bookmarks
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon/>
                </template>
                <template v-slot:title>
                    Lists
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon/>
                </template>
                <template v-slot:title>
                    Profile
                </template>
            </SidebarLeftTab> 

            <SidebarLeftTab>
                <template v-slot:icon>
                    <EllipsisHorizontalCircleIcon/>
                </template>
                <template v-slot:title>
                    More
                </template>
            </SidebarLeftTab> 

            <div class="hidden xl:block">
                <UIButton liquid size="lg" @on-click="emits('onTweet')">
                    <span class="font-bold">
                        Tweet
                    </span>
                </UIButton>
            </div>
            <div class="block xl:hidden">
                <UIButton @on-click="emits('onTweet')">
                    <div class="w-6 h-6 font-bold">
                        <PencilIcon/>
                    </div>
                </UIButton>
            </div>
        </div>

        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto rounded-full
            cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800" :class="defaultTransition" @click="emits('onLogout')">
            <div class="flex flex-row ">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ user.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        {{ user.handle }}
                    </p>
                </div>
            </div>
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { HomeIcon,MagnifyingGlassIcon} from '@heroicons/vue/24/solid';
    import { BellIcon,EnvelopeIcon,BookmarkIcon,DocumentTextIcon,UserIcon, EllipsisHorizontalCircleIcon, PencilIcon, ChevronDownIcon} from '@heroicons/vue/24/outline'
    const { defaultTransition } = useTailwindConfig();
    const emits = defineEmits(['onTweet', 'onLogout'])

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    });
</script>

<style scoped>

</style>
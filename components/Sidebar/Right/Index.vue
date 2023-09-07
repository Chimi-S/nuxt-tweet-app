<template>
    <div class="flex flex-col">

        <div class="relative m-2">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <MagnifyingGlassIcon @click="handleSearch" />
                </div>
            </div>
            <input v-model="search"
                class="flex items-center w-full pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
                placeholder="Search tweet" type="text">
        </div>

        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="item in items" :key="item">
                <div>
                    <h1 class="font-bold text-gray-800 text-md dark:text-white">{{ item.title }}</h1>
                    <p class="text-xs text-gray-400"> {{ item.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
            
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="item2 in items2" :key="item2">
                <div class="flex flex-row justify-between p-2 items-center">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="item2.image" :alt="item2.handle"/>
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white"> {{ item2.name }} </h1>
                            <p class="text-xs text-gray-400">{{ item2.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">
                            Follow
                        </button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-4 text-xs text-gray-500">
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline" @click.prevent="handleToggleDarkMode">Dark mode</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline">Cookie Policy</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline">Accessability</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline">Ads info</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="#" class="hover:underline">More</a>
                </li>
                <li class="inline-block mx-2">
                    © 2022 Twitter, Inc.
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
    const emitter = useEmiter()
    const search = ref('')

    function handleSearch() {
        useRouter().push({
            path: '/search',
            query: {
                q: search.value
            }
        })
    }
    const items = ref([
        { 
            title: 'SpaceX', 
            count: '18.8k Tweets'
        },
        { 
            title: '#CodingIsFun', 
            count: '13.8k Tweets'
        },
        { 
            title: '#SoftwareEngineering', 
            count: '50.25k Tweets'
        }
    ]);

    const items2 = ref([
        { 
            name : 'Joe Biden',
            handle: '@JoeBiden',
            image: 'https://picsum.photos/200/200'
        },
        { 
            name : 'Joe Biden',
            handle: '@JoeBiden',
            image: 'https://picsum.photos/200/200'
        },
        { 
            name : 'Joe Biden',
            handle: '@JoeBiden',
            image: 'https://picsum.photos/200/200'
        },
        { 
            name : 'Joe Biden',
            handle: '@JoeBiden',
            image: 'https://picsum.photos/200/200'
        }
    ]);

    function handleToggleDarkMode() {
        emitter.$emit('toggleDarkMode')
    }
</script>

<style scoped>

</style>
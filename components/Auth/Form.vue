<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="w-10 h-10">
                <LogoTwitter/>
            </div>
        </div>

        <div class="p-5 space-y-6">
            <UIInput label="Username" placeholder="@username" v-model="data.username"/>

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password"/>

            <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
                Login
            </UIButton>
        </div>
    </div>
</template>

<script setup>

const data = reactive({
    username:'',
    password:'',
    loading: false
});

    async function handleLogin(){
        const { login } = useAuth()
        data.loading = true
        try {
            await login({
                username: data.username,
                password: data.password
            })
        } catch (error) {
            console.error(error)
        } finally {
            data.loading = false
        }
    }

    const isButtonDisabled = computed(() => {
        return (!data.username || !data.password) || data.loading
    })


</script>

<style scoped>

</style>
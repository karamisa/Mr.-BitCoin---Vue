<script>
import AppHeader from '@/cmps/app-header.vue'
import AppFooter from '@/cmps/app-footer.vue'
export default {
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
    <AppHeader />
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>

<style scoped>
main {
    min-height: calc(100vh - 11.50rem );
    padding-bottom: 1rem;
}
</style>

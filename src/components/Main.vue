<template>
    <main class="main">
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'Main',
};
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    background: radial-gradient(circle at center, #fff 0%, #fff 88%, #a29990 100%);
    background-size: 10px 10px;
}
</style>

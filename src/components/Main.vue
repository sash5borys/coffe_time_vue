<template>
    <main class="main col-container">
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
    /*height: 100vh;*/
    padding: map_get($padding_container, 'small');
    background: radial-gradient(circle at center, #fff 0%, #fff 88%, #a29990 100%);
    background-size: 10px 10px;
}
</style>

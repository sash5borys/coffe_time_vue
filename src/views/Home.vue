<template>
    <div class="home">
        <Header />
        <Navbar />
        <Main />
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Navbar from '@/components/Header/Navbar';
import Main from '@/components/Main';

export default {
    name: 'Home',
    components: {
        Header,
        Main,
        Navbar,
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <div id="app">
        <Header />
        <Navbar />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Navbar from '@/components/Header/Navbar';
import Main from '@/components/Main';
import Footer from '@/components/Footer/Footer';

export default {
    name: 'App',
    components: {
        Header,
        Navbar,
        Main,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>

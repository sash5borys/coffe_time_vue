<template>
    <header class="header col-container" ref="header">
        <Title />
        <Basket />
    </header>
</template>

<script>
import { mapMutations } from 'vuex';
import Title from './Title';
import Basket from './Basket';

export default {
    name: 'Header',
    components: {
        Title,
        Basket,
    },
    methods: {
        ...mapMutations(['CHANGE_NAV_LOGO']),
        showNavLogo(e) {
            if (e[0].isIntersecting) {
                this.CHANGE_NAV_LOGO(false);
            } else {
                this.CHANGE_NAV_LOGO(true);
            }
        },
    },
    mounted() {
        const header = this.$refs.header;
        const io = new IntersectionObserver(this.showNavLogo, {});
        io.observe(header);
    },
};
</script>

<style lang="scss" scoped>
header {
}
</style>

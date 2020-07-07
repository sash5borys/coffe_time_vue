<template>
    <footer class="footer col-container">
        <div class="footer_top">
            <FooterContacts />
        </div>
        <div class="footer_bottom">
            <FooterСopyright />
        </div>
    </footer>
</template>

<script>
import FooterContacts from './FooterContacts';
import FooterСopyright from './FooterСopyright';

export default {
    name: 'Footer',
    components: {
        FooterContacts,
        FooterСopyright,
    },
};
</script>

<style lang="scss" scoped>
.footer {
    padding: map_get($padding_container, 'small');
    box-shadow: 0px -4px 4px #222;
    background: url('~@/assets/images/wood.jpg') center;
    .footer_top {
        justify-content: space-evenly;
    }
}
</style>

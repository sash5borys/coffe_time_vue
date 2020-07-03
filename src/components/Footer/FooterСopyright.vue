<template>
    <div class="footer_copyright">
        © Coffe Time. All rights reserved.
    </div>
</template>

<script>
export default {
    name: 'FooterСopyright',
};
</script>

<style lang="scss" scoped>
.footer_copyright {
    padding: map_get($padding_container, 'small');
    @include centered;
    color: #000;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #4b352f, 0 0 0.5em #4b352f, 0 0 0.1em #4b352f, 0 10px 3px #000;
}
</style>

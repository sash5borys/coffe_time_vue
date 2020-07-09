<template>
    <div class="buy-page">
        <section class="buy-list col-container">
            <div class="title-wrapper">
                <h2 class="title-content">Оформлення замовлення</h2>
            </div>
            <div class="buy-wrapper col-container">
                <StepsForm />
            </div>
        </section>
    </div>
</template>

<script>
import StepsForm from '@/components/Buy/StepsForm';

export default {
    name: 'BuyPage',
    components: {
        StepsForm,
    },
};
</script>

<style lang="scss" scoped></style>

<template>
    <div class="product-coffee row-container">
        <div class="product-info row-container">
            <h4 class="product-name">{{ productName }}</h4>
            <input name="product-name" type="text" :value="productName" disabled hidden />
            <div class="dotted"></div>
        </div>
        <div class="product-buy col-container">
            <span class="product-price">{{ productPrice }}</span>
            <input name="product-price" type="text" :value="productPrice" disabled hidden />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasketProduct',
    props: {
        product: Object,
    },
    computed: {
        productImage() {
            let imageUrl = this.product.image;
            if (!imageUrl.startsWith('/')) {
                imageUrl = '/' + String(imageUrl);
            }
            return imageUrl;
        },
        productName() {
            return this.product.name.charAt(0).toUpperCase() + this.product.name.slice(1);
        },
        productComposition() {
            return this.product.composition.join(', ').toLowerCase();
        },
        productPrice() {
            return Number(this.product.price);
        },
    },
};
</script>

<style lang="scss" scoped>
.product-coffee {
    padding: map_get($padding_container, 'small');
    @include centered;
    input {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background: none;
    }
    .product-info {
        flex: 2;
        .product-name {
            font: map_get($font_weigth, 'medium') map_get($font_size, 'small') * 1.5 $font_product;
        }
        .dotted {
            flex: 1;
            min-width: 20px;
            border-bottom: 2px dotted #000;
        }
    }
    .product-buy {
        .product-price {
            font: map_get($font_weigth, 'medium') map_get($font_size, 'small') * 1.5 $font_product;
            &::before {
                content: '(';
            }
            &::after {
                content: ')';
            }
        }
    }
}

// Tablet version
@include tabletVersion {
    .product-coffee {
        .product-info .product-name h4 {
            font-size: map_get($font_size, 'medium') * 1.5;
        }

        .product-buy .product-price {
            font-size: map_get($font_size, 'medium') * 1.5;
        }
    }
}

// Desktop version
@include desktopVersion {
}
</style>

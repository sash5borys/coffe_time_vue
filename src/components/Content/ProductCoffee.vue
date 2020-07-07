<template>
    <div class="product-coffee row-container">
        <div class="product-image">
            <img :src="require(`@/assets/images${productImage}`)" />
        </div>
        <div class="product-wrapper">
            <div class="product-info col-container">
                <div class="product-name row-container">
                    <h4>{{ productName }}</h4>
                    <div class="dotted"></div>
                </div>
                <div class="product-description">
                    <p>{{ productComposition }}</p>
                </div>
            </div>
            <div class="product-buy col-container">
                <span class="product-price">{{ productPrice }}</span>
                <button class="product-buy-button">
                    <img
                        class="product-buy-icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFwklEQVR4nO1aS4wUVRQ993XT1d0z8jOKfESE4Ad/EWIkhvjZwU4SMxoXfvi4caUYjG5kY9AoK0wMQkyMJKIBEhMT3bgAxaiJ3ygCMQgJRozJCCNd7xVWveNieib9q6pX/ZsZ0yepXlTde9+5t+67771bDQwwwAADDDBAz6Cp7zORvysI/YenmkvfoUO9yUR+ZCKf45d+i6RMNa++QIeVLfXOT15vpAWBpApCf6MOK1vI0Tn94tw1JDifGgSSQ8bqj2pkT2vqZX12oX00p33c1Twdxjh2ZRD6x1rInzU0y3vBV3XTmA4rW0S4t4Xdb5qluTWwevdEEAzNDQWb/5qCe1qYXgprP+1FJnQtADrUm0RkT6NNAu97qrQWwLMt1J4OrNnj018Laz8HkPSWl4nlkW5nQlcq8vibb3ZegP0FVXpCRCIAMJG/DcDrLUzYRl0CowIYAIsaZM9QyQMlKZ3pBveOMyDpzRdU6ckJ5wGgmCvvQutMaORxRqncOih1P4DfG571JBPaQlzB05F/gGQ+Ts9E/jMJxfFHn/6SSVmalSbyz/WzMDpBh3pzK+eDyH+XZC5N30T+tpgAvNm4OiQE4bdOC2OmGlBhZWHOqh2AXQfIza315SJA62hybgYbJQDFFjYMAA3wD0B9Fqpox7AMn3cc3z0AhmYlrP0KwDxXnakAgVFR6u6iFH91kXcugozsfkxz5wFAgPmI7NsZ5NOhqa8Xy9Pt0+o7GCq7yGUqOGWAhLKyc059heTD/G0ugk4BoHBxZ3z6D1fOsWt1LZRgEd3HDggcAnhaRK0BucFdtQmEyMek/RaQ5QI8BKDgoqgE3QsA4WYM4JhSvLcgwz9M3AlCf4SCA8i+7aYQI16udHDixmVees1adRTAFd3i7LYKOKaTQO2sdR4AvHz5AwgOO41Tb+yQly8frL1VkOHvBbLTTd+Ns1sNsE0HkpawFl+2NoBjLvoNOl9kGqNR3ZGz2yrgOJ+UcGEMnYqLvpOOuDnmzDmVxvihZoGLMQqeI1lykW0HJMsi3OYoviDpQDaB1ABo6IUuclWsNpE+YmhWOMo7w9CsCKw+CuBORxVV5Z4s5GAo0x5ABHdJZFdn0XGyO25zTUa11OmSGoBclC0A0wku3NNrgGMxqYWF1K3TQvknqw2hXGywOTurDRfuLlPAqerWGRXUzT3J8WRWG5KzdTqNNh3ReQAkYw0AAAvWHURmofwdAKfzeRWnZmGobkNF4e1Zebhw78kUEHADyck9u4hQiOcd1SnkdhGZPH6Q9ECsz8qjO1OA7RRBmW0iU/c12MuXDwtkR6om5CUvP/Rh7T0TmUfgsP9vggP31AOKifxLAIYyDw6c9VTpJhExtTeD0N9IwasAGnsMp4Tc3ug8yVJg9QkAS9vgUCnmysNJAilfaUfnBLZ4oY2BJ8zvLeZKTzXbpfyLyh2McqsAUnL2eOMhagImquwDZHO7DDxl5orMvxj3PDEAAYNVtNHP7Q4+PoC84OVKr7SjG0T6RYIvdzS+yt3iiXc87nliDWDYeSeI4M7ql+BWLe3WOmTRRJV9nToPpPuQHICutcK4NbD6hA71YyS9WCnS06F+PLD6ZCdpX2czxYfE05ISLM7QCkvDdSJ8J7D+bh35nyjIT5Y4Vx3nWgpvDaxeL9JGtU9AWmssMQAEliQ9bw8yW4ARgiMik+NUf7qPtNZY8j5gBnaDm5DiQ3IAmP0cMN2Q1hpL2wnO+AxIa43FBqDaTrqq64z6j8TWWGwAqu2k1O/8MwBKQ18T+zBBccanfw1ifYkNwExuhTUiyZf4GtBGH2C6IsmXpCkw45fAGrQVgHIPiEwVYg9iCQHgL71gMjWI9yW2H0D+PTew3kkAV/eEU/9w3lOlG0VkrNXD2AwQmXfBKjwI4K+eUes9/rQKG+OcBxx6guOZUHh0/H+B4vTvjKkHLwM87qnL74nM66ClN8AAAwwwwP8b/wGaS13+n6Z8dAAAAABJRU5ErkJggg=="
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCoffee',
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
    .product-wrapper {
        flex: 1;
        @include centered;
        align-items: flex-start;
    }
    .product-image {
        flex: 0 1 120px;
        margin-right: map-get($margin_container, small);
        img {
            height: 100%;
            width: 100%;
            filter: drop-shadow(2px 10px 0.1em #222);
        }
    }
    .product-info {
        flex: 2;
        .product-name h4 {
            font: map_get($font_weigth, 'medium') map_get($font_size, 'small') * 1.5 $font_product;
        }
        .dotted {
            flex: 1;
            border-bottom: 2px dotted #000;
        }
        .product-description p {
            white-space: pre-wrap;
        }
    }
    .product-buy {
        .product-price {
            font: map_get($font_weigth, 'medium') map_get($font_size, 'small') * 1.5 $font_product;
            &::after {
                content: '\20B4';
            }
        }
        .product-buy-button {
            height: map_get($icon_size, 'small');
            .product-buy-icon {
                height: map_get($icon_size, 'small');
                filter: grayscale(100%) brightness(110%) contrast(0.6);
            }
            &:hover {
                color: #f8fdf6;
                text-shadow: 0 -40px 100px, 0 0 2px, 0 0 0 #47ff44, 0 0 0.5em #47ff44, 0 0 0.1em #47ff44, 0 6px 3px #000;
                filter: drop-shadow(1px 6px 0.1em #222);

                .product-buy-icon {
                    filter: drop-shadow(1px 1px 0.5em #47ff44);
                }
            }
        }
    }
}

// Tablet version
@include tabletVersion {
    .product-coffee {
        .product-image {
            flex: 0 1 140px;
        }
        .product-info {
            .product-name h4 {
                font-size: map_get($font_size, 'medium') * 1.5;
            }
        }
        .product-buy {
            .product-price {
                font-size: map_get($font_size, 'medium') * 1.5;
            }
            .product-buy-button {
                height: map_get($icon_size, 'medium');
                .product-buy-icon {
                    height: map_get($icon_size, 'medium');
                }
            }
        }
    }
}

// Desktop version
@include desktopVersion {
}
</style>

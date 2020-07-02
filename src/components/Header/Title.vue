<template>
    <div class="title col-container">
        <div class="title-top logo" id="logo">
            <a href="#">-Co<span>f</span>fe T<span>i</span>m<span>e</span>-</a>
        </div>
        <div class="title-bottom description">
            <h2>
                "Знайди хвилинку для чашечки кави!"
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
};
</script>

<style lang="scss" scoped>
.title {
    padding: map_get($padding_container, 'small');
    @include centered;
    background: url('~@/assets/images/wood.jpg') center;
}
.description h2 {
    font-size: map_get($font_size, 'small');
    font-weight: 400;
    color: #fff;
    font-family: $font_title, sans-serif;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #fff, 0 0 0.5em #fff, 0 0 0.1em #fff, 0 10px 3px #000;
}

// Tablet version
@include tabletVersion {
    #logo {
        a,
        span {
            font-size: map_get($icon_size, 'medium') * 2;
        }
    }
    .description h2 {
        font-size: map_get($font_size, 'medium');
    }
}

// Desktop version
@include desktopVersion {
    #logo {
        a,
        span {
            font-size: map_get($icon_size, 'big') * 2;
        }
    }
    .description h2 {
        font-size: map_get($font_size, 'big');
    }
}
</style>

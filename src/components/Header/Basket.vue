<template>
    <div class="basket row-container" id="basket">
        <img
            class="icon"
            src="data:image/png;base64,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"
        />
        <span class="count">1</span>
    </div>
</template>

<script>
export default {
    name: 'Basket',
};
</script>

<style lang="scss" scoped>
#basket {
    justify-content: center;
    align-items: center;
}

// Tablet version
@include tabletVersion {
    #basket {
        height: map_get($icon_size, 'medium') * 1.5;
        .count {
            font-size: map_get($font_size, 'medium');
        }
        .icon {
            height: map_get($icon_size, 'medium') * 1.5;
        }
    }
}

// Desktop version
@include desktopVersion {
    #basket {
        height: map_get($icon_size, 'big') * 1.5;
        .count {
            font-size: map_get($font_size, 'big');
        }
        .icon {
            height: map_get($icon_size, 'big') * 1.5;
        }
    }
}
</style>

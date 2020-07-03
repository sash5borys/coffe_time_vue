<template>
    <nav class="navbar">
        <div class="navbar-start">
            <ul class="navbar-links nav-items row-container">
                <li><a href="#" class="active">Меню</a></li>
                <li><a href="#">Як замовити</a></li>
            </ul>
        </div>
        <div :class="['navbar-center', 'logo', { visible: isVisibleNavLogo }]" id="logo">
            <a href="#">-Co<span>f</span>fe T<span>i</span>m<span>e</span>-</a>
        </div>
        <div class="navbar-end">
            <ul class="navbar-links nav-items row-container">
                <li><a href="#">Про нас</a></li>
                <li><a href="#">Відгуки</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
// import 'animate.compat.css';
import { mapGetters } from 'vuex';
export default {
    name: 'Navbar',
    computed: {
        ...mapGetters(['isVisibleNavLogo']),
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 998;
    padding: map_get($padding_container, 'small');
    box-shadow: 0px 4px 4px #888888;
    @include centered;
    background: url('~@/assets/images/wood.jpg') center;
    #logo {
        display: none;
    }
    .navbar-links {
        a {
            font-size: map_get($font_size, 'small');
            font-weight: 600;
            color: #afa8a8;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #4b352f, 0 0 0.5em #4b352f, 0 0 0.1em #4b352f, 0 10px 3px #000;
            font-family: $font_link, sans-serif;
            text-decoration: none;
            &.active {
                color: #fffeed;
                text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #f0ff76, 0 0 0.5em #f0ff76, 0 0 0.1em #f0ff76,
                    0 10px 3px #000;
            }
        }
    }
}

// Tablet version
@include tabletVersion {
    .navbar {
        #logo {
            a,
            span {
                font-size: map_get($icon_size, 'medium');
            }
            &.visible {
                display: flex;
            }
        }
        .navbar-links {
            a {
                font-size: map_get($font_size, 'medium');
            }
        }
    }
}

// Desktop version
@include desktopVersion {
    .navbar {
        #logo {
            a,
            span {
                font-size: map_get($icon_size, 'big');
            }
        }
    }
}
</style>

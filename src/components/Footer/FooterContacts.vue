<template>
    <div class="footer_contacts col-container">
        <div class="footer_contacts_top col-container">
            <h3 class="footer_category_title">Адреса</h3>
            <p class="footer_address">
                м.Володимир-Волинський<br />
                Луцька, 1000<br />
            </p>
        </div>
        <div class="footer_contacts_bottom">
            <a class="footer_phone" href="tel:+1234567890">+380 (12) 34 25 789</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterContacts',
};
</script>

<style lang="scss" scoped>
.footer_contacts {
    align-items: center;
}

.footer_contacts_top,
.footer_contacts_bottom {
    align-items: center;
}

.footer_contacts_top h3 {
    font-size: map_get($font_size, 'small') * 1.1;
    color: #fffeed;
    font-weight: 600;
    font-family: $font_link, sans-serif;
    text-decoration: none;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #f0ff76, 0 0 0.5em #f0ff76, 0 0 0.1em #f0ff76, 0 10px 3px #000;
}

.footer_address {
    margin: map_get($margin_container, 'medium') 0;
    color: #afa8a8;
    font-size: map_get($font_size, 'small');
    font-weight: 400;
    font-family: $font_title, sans-serif;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #4b352f, 0 0 0.5em #4b352f, 0 0 0.1em #4b352f, 0 10px 3px #000;
}

.footer_phone {
    margin: map_get($margin_container, 'medium') 0;
    color: #fff;
    font-size: map_get($font_size, 'small') * 1.5;
    font-weight: 400;
    font-family: $font_logo, sans-serif;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
}

// Tablet version
@include tabletVersion {
    .footer_contacts_top h3 {
        font-size: map_get($font_size, 'medium') * 1.1;
    }
    .footer_address {
        font-size: map_get($font_size, 'medium');
    }
    .footer_phone {
        font-size: map_get($font_size, 'medium') * 1.5;
    }
}

// Desktop version
@include desktopVersion {
}
</style>

new WOW().init();

document.querySelectorAll('.l-menubar__link[aria-haspopup="true"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const isExpanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', !isExpanded);

        const submenu = link.nextElementSibling;
        if (submenu) {
            submenu.style.visibility = !isExpanded ? 'visible' : 'hidden';
            submenu.style.opacity = !isExpanded ? '1' : '0';
        }
    });
});

const topswiperContainer = document.querySelector('.topswiper');
if (topswiperContainer) {
    const topswiper = new Swiper('.topswiper', {
        // Optional parameters
        loop: true, // スライダーをループさせる
        autoplay: {
            delay: 3000, // 自動再生の遅延時間
            disableOnInteraction: false, // ユーザー操作後も再生を継続
        },

        // Fade effect
        effect: 'fade', // フェード効果を適用
        fadeEffect: {
            crossFade: true, // スライド間のクロスフェードを有効化
        },

        // Speed of transition
        speed: 3000, // スライド切り替えのアニメーション速度
    });
}


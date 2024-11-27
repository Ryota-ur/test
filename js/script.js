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

document.querySelector('.p-drawer__toggle').addEventListener('click', function (e) {
    e.preventDefault();

    const toggleButton = document.querySelector('.p-drawer__toggle');
    const drawerContent = document.querySelector('.p-drawer__content');
    const drawerBackground = document.querySelector('.p-drawer__background');

    // クラスの切り替え
    toggleButton.classList.toggle('is-active');
    drawerContent.classList.toggle('is-active');
    drawerBackground.classList.toggle('is-active');

    // aria-expanded の値を切り替え
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
});

// 背景クリックで閉じる
document.querySelector('.p-drawer__background').addEventListener('click', function () {
    const toggleButton = document.querySelector('.p-drawer__toggle');
    const drawerContent = document.querySelector('.p-drawer__content');
    const drawerBackground = document.querySelector('.p-drawer__background');

    // クラスをリセット
    toggleButton.classList.remove('is-active');
    drawerContent.classList.remove('is-active');
    drawerBackground.classList.remove('is-active');

    // aria-expanded をリセット
    toggleButton.setAttribute('aria-expanded', false);
});

// スマホ用サブメニューの開閉
document.querySelectorAll('.p-drawer__linkToggle').forEach(function (toggleLink) {
    toggleLink.addEventListener('click', function (e) {
        e.preventDefault(); // デフォルトのリンク動作を無効化

        const submenu = this.nextElementSibling; // 次の兄弟要素（サブメニュー）
        const isActive = submenu.classList.contains('is-active');

        // 現在のサブメニューが開いている場合
        if (isActive) {
            submenu.style.height = `${submenu.scrollHeight}px`; // 現在の高さを設定
            requestAnimationFrame(() => {
                submenu.style.height = '0'; // 高さを0に設定してアニメーション開始
            });
            submenu.addEventListener(
                'transitionend',
                () => {
                    submenu.classList.remove('is-active');
                    submenu.style.height = ''; // 高さをリセット
                    this.classList.remove('is-active'); // アニメーションを戻す
                },
                { once: true }
            );
        } else {
            // 他のすべてのサブメニューを閉じる
            document.querySelectorAll('.p-drawer__submenu.is-active').forEach(menu => {
                menu.style.height = '0';
                menu.classList.remove('is-active');
            });
            document.querySelectorAll('.p-drawer__linkToggle.is-active').forEach(link => {
                link.classList.remove('is-active');
            });

            // 現在のサブメニューを開く
            submenu.classList.add('is-active');
            submenu.style.height = '0'; // 初期状態
            requestAnimationFrame(() => {
                submenu.style.height = `${submenu.scrollHeight}px`; // 高さを設定
            });
            submenu.addEventListener(
                'transitionend',
                () => {
                    submenu.style.height = ''; // 高さをリセット
                },
                { once: true }
            );
            this.classList.add('is-active'); // アニメーションを適用
        }
    });
});





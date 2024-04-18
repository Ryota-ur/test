new WOW().init();

const btn = document.querySelector('.drawer-icon');
const content = document.querySelector('.drawer-content');
const drawerBg = document.querySelector('.drawer-background');
const contentLink = document.querySelectorAll('.drawer-content__link');
const drawerLink = document.querySelector('.drawer-logo--link');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    content.classList.toggle('slide');
    drawerBg.classList.toggle('overlay');
    });

drawerBg.addEventListener('click', () => {
    btn.classList.remove('open');
    content.classList.remove('slide');
    drawerBg.classList.remove('overlay');
    });

    contentLink.forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('open');
            content.classList.remove('slide');
            drawerBg.classList.remove('overlay');
        });
    });

    drawerLink.addEventListener('click', () => {
        btn.classList.remove('open');
        content.classList.remove('slide');
        drawerBg.classList.remove('overlay');
        });


// スムーススクロール
jQuery('a[href^="#"]').on('click',function(){

var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
if ( id != '#'){
    position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
500);
});

// スクロール検知
jQuery(window).on("scroll", function() {

    // トップから300px以上スクロールしたら
     if (300 < jQuery(this).scrollTop()) {
    
    // is-showクラスをつける
     jQuery('.to-top').addClass( 'is-show' );
     } else {
    
    // 300pxを下回ったらis-showクラスを削除
     jQuery('.to-top').removeClass( 'is-show' );
     }
     });

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; 

  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( 'open' ) ) {
      $nav.addClass( 'open' );
    } else {
      $nav.removeClass( 'open' );
    }
  });

  $mask.on('click', function() {
    $nav.removeClass( 'open' );
  });
} )(jQuery);

var _window = $(window),
  _header = $('header'),
  heroBottom;
 
_window.on('scroll',function(){     
  heroBottom = $('.top-wrapper').height();
  if(_window.scrollTop() > heroBottom){
    _header.addClass('fixed');   
  }
  else{
    _header.removeClass('fixed');   
  }
});
 
_window.trigger('scroll');

function showElementAnimation() {
                    
  var element = document.getElementsByClassName('js-fadein');
  if(!element) return; // 要素がなかったら処理をキャンセル
                      
  var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset; //スクロール量を取得
  var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                    
  for(var i=0;i<element.length;i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
    // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
$(window).scroll(function() {
  var heroBlur = 10 - Math.floor($(this).scrollTop() / 100);
  if (heroBlur < 0) { heroBlur = 0; }
  $('.alignfull').css({
    '-webkit-filter': 'blur('+heroBlur+'px)'
  });
});

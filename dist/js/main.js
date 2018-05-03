// Как только страничка загрузилась
window.onload = function () {
  // проверяем поддерживает ли браузер FormData
  if(!window.FormData) {
    /* * если не поддерживает, то выводим
     * то выводим предупреждение вместо формы */
    var div = ge('content');
    div.innerHTML = "Ваш браузер не поддерживает объект FormData";
    div.className = 'notSupport';
  }
}



$(document).ready(function(){
  // =validation
  var errorTxt = 'Ошибка отправки';

  $("#sendform").validate({
    submitHandler: function(form){
      var form = document.forms.sendform,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "send.php");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#sendform").html('<div class="thank">Заявка успешно отправлена!<div>');
          }
        }
      };
      xhr.send(formData);
    },
    rules:{

      name:{
        required: true,


      },
      email:{
        required: true,
        email:true,

      },
      message:{
        required: true,

      },

      tel:{
        required: true,

      },
    },

    messages:{

      name:{
        required: "Это поле обязательно для заполнения",

      },

      tel:{
        required: "Это поле обязательно для заполнения",

      },
      email:{
        required: "Это поле обязательно для заполнения",
        email:"Введите корректный email",

      },
      message:{
        required: "Это поле обязательно для заполнения",

      },

    }
  });
  $("#sendformpopup").validate({
    submitHandler: function(form){
      var form = document.forms.sendformpopup,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "sendpopup.php");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 2) {
          if(xhr.status == 200) {
            $("#sendformpopup")[0].reset();
            $(".modal-title").html('Заявка успешно отправлена!').css({'color':'#333399'});
          }
        }
      };
      xhr.send(formData);
    },
    rules:{

      name:{
        required: true,


      },
      tel:{
        required: true,

      },
    },

    messages:{

      name:{
        required: "Это поле обязательно для заполнения",

      },

      tel:{
        required: "Это поле обязательно для заполнения",

      },

    }
  });
  //
});


function sendSuccess(callback){
  $(callback).find("form fieldset").html(thank);
}


$( function() {

  $(".input9").inputmask("+7(999)9999999");
  /* Slick.js http://kenwheeler.github.io/slick/
   ========================*/

  $('#js-testimonials-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $(".js-slider-prev").on("click", function() {
    $('#js-testimonials-slider').slick("slickPrev");
  });

  $(".js-slider-next").on("click", function() {
    $('#js-testimonials-slider').slick("slickNext");
  });


  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

  /* left elem*/
  var Emblem = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };

  Emblem.init('.emblem');
  $('.emblem').show(10);
  /* end left elem*/
  /* right elem*/
  var Emblem = {
    init: function(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
  };
  Emblem.init('.emblem-right');
  $('.emblem-right').show(10);
  /* end right elem*/

  $(window).scroll(function () {

    scroll_top = window.pageYOffset || document.documentElement.scrollTop;
    if(scroll_top > 30){
      $('#arrow-left, #arrow-right').fadeOut(500);
    } else {
      $('#arrow-left, #arrow-right').fadeIn(300);
    }
  });

  $(document).on('click', '#arrow-left, #arrow-right', function(){
    $(this).fadeOut(300);
  })


  // Tooltip only Text
  $('.masterTooltip').hover(function(){
    // Hover over code
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<p class="tooltip"></p>')
      .text(title)
      .appendTo('body')
      .fadeIn(300);
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e) {
    var mousex = e.pageX + 20; //Get X coordinates
    var mousey = e.pageY - 5; //Get Y coordinates
    $('.tooltip')
      .css({ top: mousey, left: mousex })
  });

  $("#header-menu, #btn-application-slider, .logo").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);

  });


  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');

  });
  /* When user clicks a link */
  $('.header-nav li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');

  });

  /*******inputfile******/

  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
    var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
  });

  /*************/



  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('section.navigation').addClass('fixed');
        $('header').css({
          "border-bottom": "none",
          "padding": "10px 0"
        });
        $('header .member-actions').css({
          "top": "15px",
        });
        $('header .navicon').css({
          "top": "24px"
        });
        $('.header-icon-phone').css({
          'background': '#FF0030'
        });
        $('.logo img').attr('src', 'dist/images/new-logo.png');
        /*$('header ul.primary-nav li a').css({
         "color" : '#333399'
         });
         $('.phone-header').css({
         'color' : '#FF0030'
         });
         $('.nav-toggle span, .nav-toggle span:before, .nav-toggle span:after').css({
         'background' : '#FF0030'
         });*/
      } else {
        $('section.navigation').removeClass('fixed');
        $('header').css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          "padding": "28px 0"
        });
        $('header .member-actions').css({
          "top": "32px",
        });
        $('header .navicon').css({
          "top": "40px",
        });
        $('.header-icon-phone').css({
          'background': '#333399'
        });
        $('.logo img').attr('src', 'dist/images/new-logo-white.png');
        /*
         $('header ul.primary-nav li a').css({
         "color" : '#fff'
         });
         $('.phone-header').css({
         'color' : '#FFF'
         });*/
      }
    });
  });

  var modalVerticalCenterClass = ".modal";
  function centerModals($element) {
    var $modals;
    if ($element.length) {
      $modals = $element;
    } else {
      $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each( function(i) {
      var $clone = $(this).clone().css('display', 'block').appendTo('body');
      var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
      top = top > 0 ? top : 0;
      $clone.remove();
      $(this).find('.modal-content').css("margin-top", top);
    });
  }
  $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
    centerModals($(this));
  });
  $(window).on('resize', centerModals);

  /*preload img*/

  function preloadImages() {
    for (var i = 0; i < arguments.length; i++) {
      new Image().src = arguments[i];
    }
  }

  preloadImages(
    "dist/images/new-logo-white.png",
    "dist/images/new-logo.png"
  );

} );

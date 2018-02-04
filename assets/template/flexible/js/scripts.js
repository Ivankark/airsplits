//скрипт от блока верхнего меню на всех страницах
        $(function() {
            var pull = $('#pull');
                menu = $('nav ul');
                menuHeight = menu.height();

            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });
/*
            $(window).resize(function(){
                var w = $(window).width();
                if(w > 767 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });*/
        });


//скрипт от блока "услуги"
//<![CDATA[
jQuery(document).ready(function($)
    { $(".multitab-widget-content-widget-id").hide();
    $("ul.multitab-widget-content-tabs-id li:first a").addClass("multitab-widget-current").show(); 
    $(".multitab-widget-content-widget-id:first").show(); 
    $("ul.multitab-widget-content-tabs-id li a").click(function() { $("ul.multitab-widget-content-tabs-id li a").removeClass("multitab-widget-current a"); 
    $(this).addClass("multitab-widget-current"); 
    $(".multitab-widget-content-widget-id").hide(); 
    var activeTab = $(this).attr("href"); 
    $(activeTab).fadeIn(); return false; }); 
});
//]]>
//конец



//скрипт от блока вкладок (серии) на страницах товаров

$(document).ready(function(){
    $('#anchor-link-1 .tabsPages li').click(function(){
        $('#anchor-link-1 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-1 .tabsPages').find('.activePages').index();
        $('#anchor-link-1 section').removeClass('activePages');
        $('#anchor-link-1 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-2 .tabsPages li').click(function(){
        $('#anchor-link-2 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-2 .tabsPages').find('.activePages').index();
        $('#anchor-link-2 section').removeClass('activePages');
        $('#anchor-link-2 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-3 .tabsPages li').click(function(){
        $('#anchor-link-3 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-3 .tabsPages').find('.activePages').index();
        $('#anchor-link-3 section').removeClass('activePages');
        $('#anchor-link-3 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-4 .tabsPages li').click(function(){
        $('#anchor-link-4 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-4 .tabsPages').find('.activePages').index();
        $('#anchor-link-4 section').removeClass('activePages');
        $('#anchor-link-4 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-5 .tabsPages li').click(function(){
        $('#anchor-link-5 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-5 .tabsPages').find('.activePages').index();
        $('#anchor-link-5 section').removeClass('activePages');
        $('#anchor-link-5 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-6 .tabsPages li').click(function(){
        $('#anchor-link-6 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-6 .tabsPages').find('.activePages').index();
        $('#anchor-link-6 section').removeClass('activePages');
        $('#anchor-link-6 section').eq(num_active).addClass('activePages');
    }); 
});

$(document).ready(function(){
    $('#anchor-link-7 .tabsPages li').click(function(){
        $('#anchor-link-7 .tabsPages li').removeClass('activePages');
        $(this).addClass('activePages');
         
        var num_active = $('#anchor-link-7 .tabsPages').find('.activePages').index();
        $('#anchor-link-7 section').removeClass('activePages');
        $('#anchor-link-7 section').eq(num_active).addClass('activePages');
    }); 
});
//конец



//скрипт от блоков с раскрывающимся контентом на страницах товаров и главной
function initSpoilers(context)
{
    var context = context || 'body';
    $('a.spoiler', $(context))
        .click(function(){
            $(this).toggleClass('unfolded');
            $(this).prev('p.spoiler-box').slideToggle('normal');
        });
}

$(document).ready(function(){
    initSpoilers('body');
});



//скрипт от блока "почему мы"

$(document).ready(function(){
    $('.kiptab li').click(function(){
        $('.kiptab li').removeClass('active');
        $(this).addClass('active');
         
        var num_active = $('.kiptab').find('.active').index();
        $('.kiptab_divs div.tab-main-content').removeClass('active');
        $('.kiptab_divs div.tab-main-content').eq(num_active).addClass('active');
    }); 
});

//скрипт от блока категорий. Фиксирует заливку активной вкладки.
jQuery(document).ready(function($) {
  $(".category-content").hide();

  $(".category li:first a").addClass("active-link").show();
  $(".category-content:first").show();
  
  $('.category').on('click', 'a', function(event) {
    event.preventDefault();
    var activeTab = $(this).attr("href");
    $('.category a').removeClass('active-link');
    $(".category-content").hide();
    $(this).addClass('active-link');
    $(activeTab).fadeIn();
  });
});

//скрипт от первого блока "для вашей квартиры и дома" на главной странице
$(document).ready(function(){
    $('.js-tabs li').click(function(){
        $('.js-tabs li').removeClass('activesplits');
        $(this).addClass('activesplits');
         
        var num_active = $('.js-tabs').find('.activesplits').index();
        $('.js-tabs_divs .main-block').removeClass('activesplits');
        $('.js-tabs_divs .main-block').eq(num_active).addClass('activesplits');
    }); 
});

//анимация элементов
/*$(function() {
    $('div.test').on('click',function() {  
    $('#test').addClass('animated bounceOutLeft');
    });
});*/
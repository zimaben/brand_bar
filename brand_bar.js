
var DOM_target = "site-header"; //SET THE TARGET ELEMENT TO APPEND THE BRAND BAR TO HERE!!
var header = document.getElementsByClassName( DOM_target )[0];
var section = document.createElement("section");
section.classList.add("gh-global-header");
var inner = '<div class="widget widget-brand-bar brand-bar wrapper-outer handheld"><ul class="wrapper-inner wrapper-padding"><li class="greenheart"><a href="https://www.greenheart.org/" target="_blank" title="Greenheart">Greenheart</a></li><li class="cci-greenheart"><a href="https://www.cci-exchange.com/" target="_blank" title="Exchange">Exchange</a></li><li class="greenheart-travel"><a href="https://www.greenhearttravel.org" target="_blank" title="Travel">Travel</a></li><li class="greenheart-shop"><a href="http://www.greenheartshop.org" target="_blank" title="Shop">Shop</a></li><li class="greenheart-transforms"><a href="http://www.greenhearttransforms.org" target="_blank" title="Transforms">Transforms</a></li><li class="donate"><a href="https://greenheart.org/donate" target="_blank" title="Donate">Donate</a></li></ul><ul class="branches-open"><div class="branches-close"></div><li class="greenheart"><a href="https://www.greenheart.org/" target="_blank" title="Greenheart">Greenheart</a></li><li class="cci-greenheart"><a href="https://www.cci-exchange.com/" target="_blank" title="CCI Greenheart">CCI Greenheart</a></li><li class="greenheart-travel"><a href="https://www.greenhearttravel.org" target="_blank" title="Travel">Travel</a></li><li class="greenheart-shop"><a href="http://www.greenheartshop.org" target="_blank" title="Shop">Shop</a></li><li class="greenheart-transforms"><a href="http://www.greenhearttransforms.org" target="_blank" title="Transforms">Transforms</a></li><li class="donate"><a href="https://greenheart.org/donate" target="_blank" title="Donate">Donate</a></li><li class="greenheart"><a href="https://www.greenheart.org" target="_blank" title="Greenheart International"></a></li></ul></div><div class="widget widget-brand-bar brand-bar wrapper-outer desktop"><ul class="wrapper-inner wrapper-padding"><li class="greenheart"><a href="https://www.greenheart.org/" target="_blank" title="Greenheart">Greenheart</a></li><li class="cci-greenheart"><a href="https://www.cci-exchange.com/" target="_blank" title="CCI Greenheart">CCI Greenheart</a></li><li class="greenheart-travel"><a href="https://www.greenhearttravel.org" target="_blank" title="Travel">Travel</a></li><li class="greenheart-shop"><a href="http://www.greenheartshop.org" target="_blank" title="Shop">Shop</a></li><li class="greenheart-transforms"><a href="http://www.greenhearttransforms.org" target="_blank" title="Transforms">Transforms</a></li><li class="donate"><a href="https://greenheart.org/donate" target="_blank" title="Donate">Donate</a></li></ul></div>';
section.innerHTML = inner;
header.appendChild( section );

function brandbar_insertCSS( styles ) {
    var style = document.createElement('style');
    style.type = 'text/css';
	document.getElementsByTagName("head")[0].appendChild( style );
    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = styles;
    } else {
        // Other browsers
        style.innerHTML = styles;
    }
}

var css = '@font-face{font-family:VAGRounded;src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Light.eot);src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Bold.ttf);src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Light.otf);font-weight:300}@font-face{font-family:VAGRounded;src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Bold.eot);src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Bold.ttf);src:url(https://cdn.rawgit.com/qstudio/q-gh-brand-bar/6e942673/fonts/VAGRoundedStd-Bold.otf);font-weight:700}div.brand-bar.handheld{display:none}div.widget{width:100%;float:left;clear:both}.brand-bar{box-sizing:border-box;float:none;position:absolute;top:0;left:0;padding:0 15px;background:#fff;z-index:998;border-bottom:1px solid #dfe5ea}.brand-bar li,.brand-bar ul{list-style:none}.brand-bar ul{margin-left:0}body.logged-in .brand-bar{top:32px}body.logged-in.device-mobile .brand-bar{top:46px}.brand-bar .wrapper-inner li{float:left}.brand-bar .wrapper-inner li.donate{float:right}.brand-bar .wrapper-inner li a{display:block;font:normal 300 12px/20px VAGRounded,sans-serif;color:#a2a2a2;padding:8px 15px;text-decoration:none}.brand-bar .wrapper-inner li.greenheart a{font-weight:700}.brand-bar .wrapper-inner li.donate a{box-sizing:border-box;padding:0 10px;margin:7px 15px;border-radius:100px;border:1px solid #dfe5ea;height:22px}body.device-mobile{margin-top:30px!important}.device-mobile .brand-bar.desktop{display:none}.device-mobile .brand-bar.handheld{display:block}.device-mobile .brand-bar .wrapper-inner{padding:0!important}.device-mobile .brand-bar .wrapper-inner li{display:none}.device-mobile .brand-bar .wrapper-inner li.donate,.device-mobile .brand-bar .wrapper-inner li.greenheart{display:block}.device-mobile .brand-bar .wrapper-inner li.greenheart{position:relative}.device-mobile .brand-bar .wrapper-inner li.greenheart:after{content:"";width:0;height:0;position:absolute;right:0;top:14px;border-style:solid;border-width:3px 3px 0;border-color:#a2a2a2 transparent transparent}.device-mobile .brand-bar .wrapper-inner li a{line-height:28px;padding:2px 0 0}.device-mobile .brand-bar .wrapper-inner li.greenheart a{padding-right:11px}.device-mobile .brand-bar .wrapper-inner li.donate a{border:0;margin:0}html.popup-open,html.popup-open body{margin-top:0!important}html.popup-open body{overflow:hidden}.device-mobile .brand-bar .branches-open .branches-close{position:absolute;top:10px;right:10px;width:24px;height:24px;background:url("https://greenheart.org/wp-content/plugins/q-gh-brand-bar/img/close.png/img/close.png") center no-repeat;cursor:pointer}.device-mobile .brand-bar .branches-open{display:none;position:absolute;top:30px;left:0;width:100%;background:#000;z-index:99998;padding:53px 0 35px;text-align:center;margin-top:-30px}.device-mobile .brand-bar .branches-open li a{display:block;width:100%;height:62px;font:normal 300 28px/62px VAGRounded,sans-serif;color:#fff;text-decoration:none}.device-mobile .brand-bar .branches-open li.donate a{width:120px;height:40px;line-height:38px;border-radius:100px;border:1px solid #fff;font-size:20px;padding:0 30px;margin:23px auto 53px}.device-mobile .brand-bar .branches-open li:last-child a{width:52px;height:53px;margin:0 auto;background:url("https://greenheart.org/wp-content/plugins/q-gh-brand-bar/img/logo.png") center no-repeat}.top-bar,body{margin-top:28px!important}'; //MINIFIED CSS
brandbar_insertCSS( css );
//AFTER WE HAVE HTML AND STYLES INSERTED WE ADD THE CONTROL SCRIPT

if ( typeof jQuery !== 'undefined' ) {

    (function ($) {
        
        var isMobile = window.matchMedia("only screen and (max-width: 640px)");//CUSTOM ADDED FOR BC BRAND BAR INTEGRATION
        if(!isMobile.matches){
            isMobile = true; 
        } else {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                isMobile = true;
            } else { isMobile = false; }
        }
        // clone body classes ##
        if ( isMobile ) {
            $('body').addClass("device-mobile");
        } else {
            $('body').addClass("device-desktop");
        }

        $(document).on('click', '.device-mobile .brand-bar .wrapper-inner .greenheart a', function(e){
            e.preventDefault();
            var popup = $('.device-mobile .brand-bar .branches-open');
            var popupHeight = popup.height() + 200;
            popup.css('min-height', window.innerHeight + 'px');
            popup.css('margin-top', '0px');
            $('body').height(popupHeight - 30);
            if( $('html').hasClass('popup-open') ){
                popup.hide();
                $('html').removeClass('popup-open');  
            } else {    
                popup.show();
                $('html').addClass('popup-open');
                
            }
        });

        $(window).on("load resize", function(e){
            
                var windowWidth = window.innerWidth;
                if (windowWidth > 640) {
                    $('body').addClass('device-desktop');
                    $('body').removeClass('device-mobile');
                } else {
                    $('body').addClass('device-mobile');
                    $('body').removeClass('device-desktop');
                }
            
        });


    })(jQuery);
}   

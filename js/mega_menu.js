!function(m){var e={logo_align:"left",links_align:"left",socialBar_align:"left",searchBar_align:"right",trigger:"hover",effect:"fade",effect_speed:400,sibling:!0,outside_click_close:!0,top_fixed:!1,sticky_header:!1,sticky_header_height:200,menu_position:"horizontal",full_width:!0,mobile_settings:{collapse:!1,sibling:!0,scrollBar:!0,scrollBar_height:400,top_fixed:!1,sticky_header:!1,sticky_header_height:200}};m.fn.megaMenu=function(u){return u=m.extend({},e,u||{}),this.each(function(){var n=m(this),t="ul",a="li",l="a",e=n.find(".menu-logo"),i=e.children(a),s=n.find(".menu-links"),r=(s.children(a),n.find(".menu-social-bar")),o=n.find(".menu-search-bar"),d="active",c="activeTrigger",f="activeTriggerMobile",g=".drop-down-multilevel, .drop-down, .drop-down-tab-bar",_="desktopTopFixed",h="mobileTopFixed",p={menu_full_width:function(){!0===u.full_width&&n.addClass("menuFullWidth")},logo_Align:function(){"right"===u.logo_align&&e.addClass("menu-logo-align-right")},links_Align:function(){"right"===u.links_align&&s.addClass("menu-links-align-right")},social_bar_Align:function(){"right"===u.socialBar_align&&r.addClass("menu-social-bar-right")},search_bar_Align:function(){"left"===u.searchBar_align&&o.addClass("menu-search-bar-left")},collapse_trigger_button:function(){var e;!0===u.mobile_settings.collapse&&(i.append('<div class="menu-mobile-collapse-trigger"><span></span></div>'),(e=s.add(r)).hide(0),o.addClass(d),n.find(".menu-mobile-collapse-trigger").on("click",function(){return e.is(":hidden")?(m(this).addClass(d),e.show(0)):(m(this).removeClass(d),e.hide(0)),!1}))},switch_effects:function(){switch(u.effect){case"fade":n.find(g).addClass("effect-fade");break;case"scale":n.find(g).addClass("effect-scale");break;case"expand-top":n.find(g).addClass("effect-expand-top");break;case"expand-bottom":n.find(g).addClass("effect-expand-bottom");break;case"expand-left":n.find(g).addClass("effect-expand-left");break;case"expand-right":n.find(g).addClass("effect-expand-right")}},transition_delay:function(){n.find(g).css({webkitTransition:"all "+u.effect_speed+"ms ease ",transition:"all "+u.effect_speed+"ms ease "})},hover_trigger:function(){"hover"===u.trigger&&(p.transition_delay(),n.find(g).parents(a).addClass("hoverTrigger"),p.switch_effects())},mobile_trigger:function(){n.find(g).prev(l).append('<div class="mobileTriggerButton"></div>'),n.find(".mobileTriggerButton").on("click",function(){var e=m(this),i=e.parents(l),s=i.next(g);return s.is(":hidden")?(!0===u.mobile_settings.sibling&&(e.parents(n).siblings("ul,li").find(g).hide(0),e.parents(n).siblings(a).removeClass(f),e.parents(n).siblings(t).find(a).removeClass(f)),i.parent(a).addClass(f),s.show(0)):(i.parent(a).removeClass(f),s.hide(0)),!1}),n.find("i.fa.fa-indicator").on("click",function(){return!1})},click_trigger:function(){"click"===u.trigger&&(n.find(g).prev(l).append('<div class="desktopTriggerButton"></div>'),n.find(g).parents(a).addClass("ClickTrigger"),p.switch_effects(),p.transition_delay(),n.find(".desktopTriggerButton").on("click",function(e){e.stopPropagation(),e.stopImmediatePropagation();var i=m(this),s=i.parents(l),e=s.next(g);e.hasClass(d)?(s.parent(a).removeClass(c),e.removeClass(d)):(!0===u.sibling&&(i.parents(n).siblings("ul,li").find(g).removeClass(d),i.parents(n).siblings(a).removeClass(c),i.parents(n).siblings(t).find(a).removeClass(c)),s.parent(a).addClass(c),e.addClass(d))}))},scroll_bar:function(){!0===u.mobile_settings.scrollBar&&s.css({maxHeight:u.mobile_settings.scrollBar_height+"px",overflow:"auto"})},top_Fixed:function(){!0===u.top_fixed&&n.addClass(_),u.mobile_settings.top_fixed&&n.addClass(h)},sticky_Header:function(){var e=m(window),i=!0,s=!0;n.find(g).is(":hidden")?!0===u.mobile_settings.sticky_header&&!1===u.top_fixed&&e.on("scroll",function(){e.scrollTop()>u.mobile_settings.sticky_header_height?!0===s&&(n.addClass(h),s=!1):!1===s&&(n.removeClass(h),s=!0)}):!0===u.sticky_header&&"horizontal"===u.menu_position&&!1===u.top_fixed&&e.on("scroll",function(){e.scrollTop()+200>u.sticky_header_height?!0===i&&(n.fadeOut(200,function(){m(this).addClass(_).fadeIn(200)}),i=!1):!1===i&&(n.fadeOut(200,function(){m(this).removeClass(_).fadeIn(200)}),i=!0)})},position:function(){"vertical-left"===u.menu_position?n.addClass("vertical-left"):"vertical-right"===u.menu_position&&n.addClass("vertical-right")}};p.menu_full_width(),p.logo_Align(),p.links_Align(),p.social_bar_Align(),p.search_bar_Align(),p.collapse_trigger_button(),p.hover_trigger(),p.mobile_trigger(),p.click_trigger(),p.scroll_bar(),p.top_Fixed(),p.sticky_Header(),p.position(),m(window).resize(function(){p.sticky_Header()})})}}(jQuery);
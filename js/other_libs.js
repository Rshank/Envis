/* jquery.nicescroll 3.5.4 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var y=!1,C=!1,J=5E3,K=2E3,x=0,F=["ms","moz","webkit","o"],s=window.requestAnimationFrame||!1,v=window.cancelAnimationFrame||!1;if(!s)for(var L in F){var D=F[L];s||(s=window[D+"RequestAnimationFrame"]);v||(v=window[D+"CancelAnimationFrame"]||window[D+"CancelRequestAnimationFrame"])}var z=window.MutationObserver||window.WebKitMutationObserver||!1,G={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",
cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,
enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}()},E=!1,M=function(){if(E)return E;
var e=document.createElement("DIV"),b={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};b.isopera="opera"in window;b.isopera12=b.isopera&&"getUserMedia"in navigator;b.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);b.isie="all"in document&&"attachEvent"in e&&!b.isopera;b.isieold=b.isie&&!("msInterpolationMode"in e.style);b.isie7=b.isie&&!b.isieold&&(!("documentMode"in document)||7==document.documentMode);
b.isie8=b.isie&&"documentMode"in document&&8==document.documentMode;b.isie9=b.isie&&"performance"in window&&9<=document.documentMode;b.isie10=b.isie&&"performance"in window&&10<=document.documentMode;b.isie9mobile=/iemobile.9/i.test(navigator.userAgent);b.isie9mobile&&(b.isie9=!1);b.isie7mobile=!b.isie9mobile&&b.isie7&&/iemobile/i.test(navigator.userAgent);b.ismozilla="MozAppearance"in e.style;b.iswebkit="WebkitAppearance"in e.style;b.ischrome="chrome"in window;b.ischrome22=b.ischrome&&b.haspointerlock;
b.ischrome26=b.ischrome&&"transition"in e.style;b.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;b.hasmstouch=window.navigator.msPointerEnabled||!1;b.ismac=/^mac$/i.test(navigator.platform);b.isios=b.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);b.isios4=b.isios&&!("seal"in Object);b.isandroid=/android/i.test(navigator.userAgent);b.trstyle=!1;b.hastransform=!1;b.hastranslate3d=!1;b.transitionstyle=!1;b.hastransition=!1;b.transitionend=!1;for(var h=["transform",
"msTransform","webkitTransform","MozTransform","OTransform"],k=0;k<h.length;k++)if("undefined"!=typeof e.style[h[k]]){b.trstyle=h[k];break}b.hastransform=!1!=b.trstyle;b.hastransform&&(e.style[b.trstyle]="translate3d(1px,2px,3px)",b.hastranslate3d=/translate3d/.test(e.style[b.trstyle]));b.transitionstyle=!1;b.prefixstyle="";b.transitionend=!1;for(var h="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),l=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),
q="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),k=0;k<h.length;k++)if(h[k]in e.style){b.transitionstyle=h[k];b.prefixstyle=l[k];b.transitionend=q[k];break}b.ischrome26&&(b.prefixstyle=l[1]);b.hastransition=b.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(b.ischrome&&!b.ischrome22||b.isie)h=[];for(k=0;k<h.length;k++)if(l=h[k],e.style.cursor=l,e.style.cursor==l){h=l;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}b.cursorgrabvalue=
h;b.hasmousecapture="setCapture"in e;b.hasMutationObserver=!1!==z;return E=b},N=function(g,b){function h(){var c=a.win;if("zIndex"in c)return c.zIndex();for(;0<c.length&&9!=c[0].nodeType;){var b=c.css("zIndex");if(!isNaN(b)&&0!=b)return parseInt(b);c=c.parent()}return!1}function k(c,b,f){b=c.css(b);c=parseFloat(b);return isNaN(c)?(c=w[b]||0,f=3==c?f?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1,a.isie8&&c&&(c+=1),f?c:0):c}function l(c,b,f,e){a._bind(c,b,function(a){a=
a?a:window.event;var e={original:a,target:a.target||a.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==a.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){a.preventDefault?a.preventDefault():a.returnValue=!1;return!1},stopImmediatePropagation:function(){a.stopImmediatePropagation?a.stopImmediatePropagation():a.cancelBubble=!0}};"mousewheel"==b?(e.deltaY=-0.025*a.wheelDelta,a.wheelDeltaX&&(e.deltaX=-0.025*a.wheelDeltaX)):e.deltaY=a.detail;return f.call(c,e)},e)}function q(c,b,f){var e,d;
0==c.deltaMode?(e=-Math.floor(c.deltaX*(a.opt.mousescrollstep/54)),d=-Math.floor(c.deltaY*(a.opt.mousescrollstep/54))):1==c.deltaMode&&(e=-Math.floor(c.deltaX*a.opt.mousescrollstep),d=-Math.floor(c.deltaY*a.opt.mousescrollstep));b&&(a.opt.oneaxismousemode&&0==e&&d)&&(e=d,d=0);e&&(a.scrollmom&&a.scrollmom.stop(),a.lastdeltax+=e,a.debounced("mousewheelx",function(){var c=a.lastdeltax;a.lastdeltax=0;a.rail.drag||a.doScrollLeftBy(c)},15));if(d){if(a.opt.nativeparentscrolling&&f&&!a.ispage&&!a.zoomactive)if(0>
d){if(a.getScrollTop()>=a.page.maxh)return!0}else if(0>=a.getScrollTop())return!0;a.scrollmom&&a.scrollmom.stop();a.lastdeltay+=d;a.debounced("mousewheely",function(){var c=a.lastdeltay;a.lastdeltay=0;a.rail.drag||a.doScrollBy(c)},15)}c.stopImmediatePropagation();return c.preventDefault()}var a=this;this.version="3.5.4";this.name="nicescroll";this.me=b;this.opt={doc:e("body"),win:!1};e.extend(this.opt,G);this.opt.snapbackspeed=80;if(g)for(var p in a.opt)"undefined"!=typeof g[p]&&(a.opt[p]=g[p]);this.iddoc=
(this.doc=a.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==a.opt.win;this.win=a.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent=
"scroll"!=a.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.isrtlmode=!1;do this.id="ascrail"+K++;while(document.getElementById(this.id));this.hasmousefocus=
this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.wheelprevented=!1;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=M();var d=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=d.hastransform&&a.opt.hwacceleration)&&
a.haswrapper;this.istouchcapable=!1;d.cantouch&&(d.ischrome&&!d.isios&&!d.isandroid)&&(this.istouchcapable=!0,d.cantouch=!1);d.cantouch&&(d.ismozilla&&!d.isios&&!d.isandroid)&&(this.istouchcapable=!0,d.cantouch=!1);a.opt.enablemouselockapi||(d.hasmousecapture=!1,d.haspointerlock=!1);this.delayed=function(c,b,f,e){var d=a.delaylist[c],h=(new Date).getTime();if(!e&&d&&d.tt)return!1;d&&d.tt&&clearTimeout(d.tt);if(d&&d.last+f>h&&!d.tt)a.delaylist[c]={last:h+f,tt:setTimeout(function(){a&&(a.delaylist[c].tt=
0,b.call())},f)};else if(!d||!d.tt)a.delaylist[c]={last:h,tt:0},setTimeout(function(){b.call()},0)};this.debounced=function(c,b,f){var d=a.delaylist[c];(new Date).getTime();a.delaylist[c]=b;d||setTimeout(function(){var b=a.delaylist[c];a.delaylist[c]=!1;b.call()},f)};var r=!1;this.synched=function(c,b){a.synclist[c]=b;(function(){r||(s(function(){r=!1;for(c in a.synclist){var b=a.synclist[c];b&&b.call(a);a.synclist[c]=!1}}),r=!0)})();return c};this.unsynched=function(c){a.synclist[c]&&(a.synclist[c]=
!1)};this.css=function(c,b){for(var f in b)a.saved.css.push([c,f,c.css(f)]),c.css(f,b[f])};this.scrollTop=function(c){return"undefined"==typeof c?a.getScrollTop():a.setScrollTop(c)};this.scrollLeft=function(c){return"undefined"==typeof c?a.getScrollLeft():a.setScrollLeft(c)};BezierClass=function(a,b,f,d,e,h,k){this.st=a;this.ed=b;this.spd=f;this.p1=d||0;this.p2=e||1;this.p3=h||0;this.p4=k||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(a){return 3*a*a*(1-
a)},B3:function(a){return 3*a*(1-a)*(1-a)},B4:function(a){return(1-a)*(1-a)*(1-a)},getNow:function(){var a=1-((new Date).getTime()-this.ts)/this.spd,b=this.B2(a)+this.B3(a)+this.B4(a);return 0>a?this.ed:this.st+Math.round(this.df*b)},update:function(a,b){this.st=this.getNow();this.ed=a;this.spd=b;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};d.hastranslate3d&&d.isios&&this.doc.css("-webkit-backface-visibility",
"hidden");var t=function(){var c=a.doc.css(d.trstyle);return c&&"matrix"==c.substr(0,6)?c.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(c){if(!c){if(c=t())return 16==c.length?-c[13]:-c[5];if(a.timerscroll&&a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(c){if(!c){if(c=t())return 16==c.length?-c[12]:-c[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};
this.notifyScrollEvent=document.createEvent?function(a){var b=document.createEvent("UIEvents");b.initUIEvent("scroll",!1,!0,window,1);a.dispatchEvent(b)}:document.fireEvent?function(a){var b=document.createEventObject();a.fireEvent("onscroll");b.cancelBubble=!0}:function(a,b){};d.hastranslate3d&&a.opt.enabletranslate3d?(this.setScrollTop=function(c,b){a.doc.translate.y=c;a.doc.translate.ty=-1*c+"px";a.doc.css(d.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");b||a.notifyScrollEvent(a.win[0])},
this.setScrollLeft=function(c,b){a.doc.translate.x=c;a.doc.translate.tx=-1*c+"px";a.doc.css(d.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");b||a.notifyScrollEvent(a.win[0])}):(this.setScrollTop=function(c,b){a.doc.translate.y=c;a.doc.translate.ty=-1*c+"px";a.doc.css(d.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");b||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(c,b){a.doc.translate.x=c;a.doc.translate.tx=-1*c+"px";a.doc.css(d.trstyle,
"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");b||a.notifyScrollEvent(a.win[0])})}else this.getScrollTop=function(){return a.docscroll.scrollTop()},this.setScrollTop=function(c){return a.docscroll.scrollTop(c)},this.getScrollLeft=function(){return a.docscroll.scrollLeft()},this.setScrollLeft=function(c){return a.docscroll.scrollLeft(c)};this.getTarget=function(a){return!a?!1:a.target?a.target:a.srcElement?a.srcElement:!1};this.hasParent=function(a,b){if(!a)return!1;for(var f=a.target||
a.srcElement||a||!1;f&&f.id!=b;)f=f.parentNode||!1;return!1!==f};var w={thin:1,medium:3,thick:5};this.getOffset=function(){if(a.isfixed)return{top:parseFloat(a.win.css("top")),left:parseFloat(a.win.css("left"))};if(!a.viewport)return a.win.offset();var c=a.win.offset(),b=a.viewport.offset();return{top:c.top-b.top+a.viewport.scrollTop(),left:c.left-b.left+a.viewport.scrollLeft()}};this.updateScrollBar=function(c){if(a.ishwscroll)a.rail.css({height:a.win.innerHeight()}),a.railh&&a.railh.css({width:a.win.innerWidth()});
else{var b=a.getOffset(),f=b.top,d=b.left,f=f+k(a.win,"border-top-width",!0);a.win.outerWidth();a.win.innerWidth();var d=d+(a.rail.align?a.win.outerWidth()-k(a.win,"border-right-width")-a.rail.width:k(a.win,"border-left-width")),e=a.opt.railoffset;e&&(e.top&&(f+=e.top),a.rail.align&&e.left&&(d+=e.left));a.locked||a.rail.css({top:f,left:d,height:c?c.h:a.win.innerHeight()});a.zoom&&a.zoom.css({top:f+1,left:1==a.rail.align?d-20:d+a.rail.width+4});a.railh&&!a.locked&&(f=b.top,d=b.left,c=a.railh.align?
f+k(a.win,"border-top-width",!0)+a.win.innerHeight()-a.railh.height:f+k(a.win,"border-top-width",!0),d+=k(a.win,"border-left-width"),a.railh.css({top:c,left:d,width:a.railh.width}))}};this.doRailClick=function(c,b,f){var d;a.locked||(a.cancelEvent(c),b?(b=f?a.doScrollLeft:a.doScrollTop,d=f?(c.pageX-a.railh.offset().left-a.cursorwidth/2)*a.scrollratio.x:(c.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y,b(d)):(b=f?a.doScrollLeftBy:a.doScrollBy,d=f?a.scroll.x:a.scroll.y,c=f?c.pageX-a.railh.offset().left:
c.pageY-a.rail.offset().top,f=f?a.view.w:a.view.h,d>=c?b(f):b(-f)))};a.hasanimationframe=s;a.hascancelanimationframe=v;a.hasanimationframe?a.hascancelanimationframe||(v=function(){a.cancelAnimationFrame=!0}):(s=function(a){return setTimeout(a,15-Math.floor(+new Date/1E3)%16)},v=clearInterval);this.init=function(){a.saved.css=[];if(d.isie7mobile||d.isoperamini)return!0;d.hasmstouch&&a.css(a.ispage?e("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";a.zindex=!a.ispage&&"auto"==a.opt.zindex?
h()||"auto":a.opt.zindex;!a.ispage&&"auto"!=a.zindex&&a.zindex>x&&(x=a.zindex);a.isie&&(0==a.zindex&&"auto"==a.opt.zindex)&&(a.zindex="auto");if(!a.ispage||!d.cantouch&&!d.isieold&&!d.isie9mobile){var c=a.docscroll;a.ispage&&(c=a.haswrapper?a.win:a.doc);d.isie9mobile||a.css(c,{"overflow-y":"hidden"});a.ispage&&d.isie7&&("BODY"==a.doc[0].nodeName?a.css(e("html"),{"overflow-y":"hidden"}):"HTML"==a.doc[0].nodeName&&a.css(e("body"),{"overflow-y":"hidden"}));d.isios&&(!a.ispage&&!a.haswrapper)&&a.css(e("body"),
{"-webkit-overflow-scrolling":"touch"});var b=e(document.createElement("div"));b.css({position:"relative",top:0,"float":"right",width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});b.hborder=parseFloat(b.outerHeight()-b.innerHeight());a.cursor=b;var f=e(document.createElement("div"));
f.attr("id",a.id);f.addClass("nicescroll-rails");var u,k,g=["left","right"],l;for(l in g)k=g[l],(u=a.opt.railpadding[k])?f.css("padding-"+k,u+"px"):a.opt.railpadding[k]=0;f.append(b);f.width=Math.max(parseFloat(a.opt.cursorwidth),b.outerWidth())+a.opt.railpadding.left+a.opt.railpadding.right;f.css({width:f.width+"px",zIndex:a.zindex,background:a.opt.background,cursor:"default"});f.visibility=!0;f.scrollable=!0;f.align="left"==a.opt.railalign?0:1;a.rail=f;b=a.rail.drag=!1;a.opt.boxzoom&&(!a.ispage&&
!d.isieold)&&(b=document.createElement("div"),a.bind(b,"click",a.doZoom),a.zoom=e(b),a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),a.opt.dblclickzoom&&a.bind(a.win,"dblclick",a.doZoom),d.cantouch&&a.opt.gesturezoom&&(a.ongesturezoom=function(c){1.5<c.scale&&a.doZoomIn(c);0.8>c.scale&&a.doZoomOut(c);return a.cancelEvent(c)},a.bind(a.win,"gestureend",a.ongesturezoom)));a.railh=!1;if(a.opt.horizrailenabled){a.css(c,
{"overflow-x":"hidden"});b=e(document.createElement("div"));b.css({position:"relative",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});b.wborder=parseFloat(b.outerWidth()-b.innerWidth());a.cursorh=b;var m=e(document.createElement("div"));m.attr("id",a.id+"-hr");m.addClass("nicescroll-rails");
m.height=Math.max(parseFloat(a.opt.cursorwidth),b.outerHeight());m.css({height:m.height+"px",zIndex:a.zindex,background:a.opt.background});m.append(b);m.visibility=!0;m.scrollable=!0;m.align="top"==a.opt.railvalign?0:1;a.railh=m;a.railh.drag=!1}a.ispage?(f.css({position:"fixed",top:"0px",height:"100%"}),f.align?f.css({right:"0px"}):f.css({left:"0px"}),a.body.append(f),a.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),a.body.append(m))):(a.ishwscroll?
("static"==a.win.css("position")&&a.css(a.win,{position:"relative"}),c="HTML"==a.win[0].nodeName?a.body:a.win,a.zoom&&(a.zoom.css({position:"absolute",top:1,right:0,"margin-right":f.width+4}),c.append(a.zoom)),f.css({position:"absolute",top:0}),f.align?f.css({right:0}):f.css({left:0}),c.append(f),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),c.append(m))):(a.isfixed="fixed"==a.win.css("position"),c=a.isfixed?"fixed":"absolute",a.isfixed||(a.viewport=a.getViewport(a.win[0])),
a.viewport&&(a.body=a.viewport,!1==/fixed|relative|absolute/.test(a.viewport.css("position"))&&a.css(a.viewport,{position:"relative"})),f.css({position:c}),a.zoom&&a.zoom.css({position:c}),a.updateScrollBar(),a.body.append(f),a.zoom&&a.body.append(a.zoom),a.railh&&(m.css({position:c}),a.body.append(m))),d.isios&&a.css(a.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),d.isie&&a.opt.disableoutline&&a.win.attr("hideFocus","true"),d.iswebkit&&a.opt.disableoutline&&
a.win.css({outline:"none"}));!1===a.opt.autohidemode?(a.autohidedom=!1,a.rail.css({opacity:a.opt.cursoropacitymax}),a.railh&&a.railh.css({opacity:a.opt.cursoropacitymax})):!0===a.opt.autohidemode||"leave"===a.opt.autohidemode?(a.autohidedom=e().add(a.rail),d.isie8&&(a.autohidedom=a.autohidedom.add(a.cursor)),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh)),a.railh&&d.isie8&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"scroll"==a.opt.autohidemode?(a.autohidedom=e().add(a.rail),a.railh&&(a.autohidedom=
a.autohidedom.add(a.railh))):"cursor"==a.opt.autohidemode?(a.autohidedom=e().add(a.cursor),a.railh&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"hidden"==a.opt.autohidemode&&(a.autohidedom=!1,a.hide(),a.locked=!1);if(d.isie9mobile)a.scrollmom=new H(a),a.onmangotouch=function(c){c=a.getScrollTop();var b=a.getScrollLeft();if(c==a.scrollmom.lastscrolly&&b==a.scrollmom.lastscrollx)return!0;var f=c-a.mangotouch.sy,d=b-a.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(f,2)))){var n=0>
f?-1:1,e=0>d?-1:1,h=+new Date;a.mangotouch.lazy&&clearTimeout(a.mangotouch.lazy);80<h-a.mangotouch.tm||a.mangotouch.dry!=n||a.mangotouch.drx!=e?(a.scrollmom.stop(),a.scrollmom.reset(b,c),a.mangotouch.sy=c,a.mangotouch.ly=c,a.mangotouch.sx=b,a.mangotouch.lx=b,a.mangotouch.dry=n,a.mangotouch.drx=e,a.mangotouch.tm=h):(a.scrollmom.stop(),a.scrollmom.update(a.mangotouch.sx-d,a.mangotouch.sy-f),a.mangotouch.tm=h,f=Math.max(Math.abs(a.mangotouch.ly-c),Math.abs(a.mangotouch.lx-b)),a.mangotouch.ly=c,a.mangotouch.lx=
b,2<f&&(a.mangotouch.lazy=setTimeout(function(){a.mangotouch.lazy=!1;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)))}},f=a.getScrollTop(),m=a.getScrollLeft(),a.mangotouch={sy:f,ly:f,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},a.bind(a.docscroll,"scroll",a.onmangotouch);else{if(d.cantouch||a.istouchcapable||a.opt.touchbehavior||d.hasmstouch){a.scrollmom=new H(a);a.ontouchstart=function(c){if(c.pointerType&&2!=c.pointerType)return!1;a.hasmoving=!1;if(!a.locked){if(d.hasmstouch)for(var b=
c.target?c.target:!1;b;){var f=e(b).getNiceScroll();if(0<f.length&&f[0].me==a.me)break;if(0<f.length)return!1;if("DIV"==b.nodeName&&b.id==a.id)break;b=b.parentNode?b.parentNode:!1}a.cancelScroll();if((b=a.getTarget(c))&&/INPUT/i.test(b.nodeName)&&/range/i.test(b.type))return a.stopPropagation(c);!("clientX"in c)&&"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);a.forcescreen&&(f=c,c={original:c.original?c.original:c},c.clientX=f.screenX,c.clientY=
f.screenY);a.rail.drag={x:c.clientX,y:c.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:!1};if(a.ispage||!a.opt.directionlockdeadzone)a.rail.drag.dl="f";else{var f=e(window).width(),n=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),n=Math.max(0,k-n),f=Math.max(0,h-f);a.rail.drag.ck=!a.rail.scrollable&&a.railh.scrollable?0<n?"v":!1:a.rail.scrollable&&
!a.railh.scrollable?0<f?"h":!1:!1;a.rail.drag.ck||(a.rail.drag.dl="f")}a.opt.touchbehavior&&(a.isiframe&&d.isie)&&(f=a.win.position(),a.rail.drag.x+=f.left,a.rail.drag.y+=f.top);a.hasmoving=!1;a.lastmouseup=!1;a.scrollmom.reset(c.clientX,c.clientY);if(!d.cantouch&&!this.istouchcapable&&!d.hasmstouch){if(!b||!/INPUT|SELECT|TEXTAREA/i.test(b.nodeName))return!a.ispage&&d.hasmousecapture&&b.setCapture(),a.opt.touchbehavior?(b.onclick&&!b._onclick&&(b._onclick=b.onclick,b.onclick=function(c){if(a.hasmoving)return!1;
b._onclick.call(this,c)}),a.cancelEvent(c)):a.stopPropagation(c);/SUBMIT|CANCEL|BUTTON/i.test(e(b).attr("type"))&&(pc={tg:b,click:!1},a.preventclick=pc)}}};a.ontouchend=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(a.rail.drag&&2==a.rail.drag.pt&&(a.scrollmom.doMomentum(),a.rail.drag=!1,a.hasmoving&&(a.lastmouseup=!0,a.hideCursor(),d.hasmousecapture&&document.releaseCapture(),!d.cantouch)))return a.cancelEvent(c)};var q=a.opt.touchbehavior&&a.isiframe&&!d.hasmousecapture;a.ontouchmove=
function(c,b){if(c.pointerType&&2!=c.pointerType)return!1;if(a.rail.drag&&2==a.rail.drag.pt){if(d.cantouch&&"undefined"==typeof c.original)return!0;a.hasmoving=!0;a.preventclick&&!a.preventclick.click&&(a.preventclick.click=a.preventclick.tg.onclick||!1,a.preventclick.tg.onclick=a.onpreventclick);c=e.extend({original:c},c);"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);if(a.forcescreen){var f=c;c={original:c.original?c.original:c};c.clientX=f.screenX;
c.clientY=f.screenY}f=ofy=0;if(q&&!b){var n=a.win.position(),f=-n.left;ofy=-n.top}var h=c.clientY+ofy,n=h-a.rail.drag.y,k=c.clientX+f,u=k-a.rail.drag.x,g=a.rail.drag.st-n;a.ishwscroll&&a.opt.bouncescroll?0>g?g=Math.round(g/2):g>a.page.maxh&&(g=a.page.maxh+Math.round((g-a.page.maxh)/2)):(0>g&&(h=g=0),g>a.page.maxh&&(g=a.page.maxh,h=0));if(a.railh&&a.railh.scrollable){var l=a.rail.drag.sl-u;a.ishwscroll&&a.opt.bouncescroll?0>l?l=Math.round(l/2):l>a.page.maxw&&(l=a.page.maxw+Math.round((l-a.page.maxw)/
2)):(0>l&&(k=l=0),l>a.page.maxw&&(l=a.page.maxw,k=0))}f=!1;if(a.rail.drag.dl)f=!0,"v"==a.rail.drag.dl?l=a.rail.drag.sl:"h"==a.rail.drag.dl&&(g=a.rail.drag.st);else{var n=Math.abs(n),u=Math.abs(u),m=a.opt.directionlockdeadzone;if("v"==a.rail.drag.ck){if(n>m&&u<=0.3*n)return a.rail.drag=!1,!0;u>m&&(a.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==a.rail.drag.ck){if(u>m&&n<=0.3*u)return a.rail.drag=!1,!0;n>m&&(a.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}a.synched("touchmove",
function(){a.rail.drag&&2==a.rail.drag.pt&&(a.prepareTransition&&a.prepareTransition(0),a.rail.scrollable&&a.setScrollTop(g),a.scrollmom.update(k,h),a.railh&&a.railh.scrollable?(a.setScrollLeft(l),a.showCursor(g,l)):a.showCursor(g),d.isie10&&document.selection.clear())});d.ischrome&&a.istouchcapable&&(f=!1);if(f)return a.cancelEvent(c)}}}a.onmousedown=function(c,b){if(!(a.rail.drag&&1!=a.rail.drag.pt)){if(a.locked)return a.cancelEvent(c);a.cancelScroll();a.rail.drag={x:c.clientX,y:c.clientY,sx:a.scroll.x,
sy:a.scroll.y,pt:1,hr:!!b};var f=a.getTarget(c);!a.ispage&&d.hasmousecapture&&f.setCapture();a.isiframe&&!d.hasmousecapture&&(a.saved.csspointerevents=a.doc.css("pointer-events"),a.css(a.doc,{"pointer-events":"none"}));a.hasmoving=!1;return a.cancelEvent(c)}};a.onmouseup=function(c){if(a.rail.drag&&(d.hasmousecapture&&document.releaseCapture(),a.isiframe&&!d.hasmousecapture&&a.doc.css("pointer-events",a.saved.csspointerevents),1==a.rail.drag.pt))return a.rail.drag=!1,a.hasmoving&&a.triggerScrollEnd(),
a.cancelEvent(c)};a.onmousemove=function(c){if(a.rail.drag&&1==a.rail.drag.pt){if(d.ischrome&&0==c.which)return a.onmouseup(c);a.cursorfreezed=!0;a.hasmoving=!0;if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(c.clientX-a.rail.drag.x);0>a.scroll.x&&(a.scroll.x=0);var b=a.scrollvaluemaxw;a.scroll.x>b&&(a.scroll.x=b)}else a.scroll.y=a.rail.drag.sy+(c.clientY-a.rail.drag.y),0>a.scroll.y&&(a.scroll.y=0),b=a.scrollvaluemax,a.scroll.y>b&&(a.scroll.y=b);a.synched("mousemove",function(){a.rail.drag&&1==a.rail.drag.pt&&
(a.showCursor(),a.rail.drag.hr?a.doScrollLeft(Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed))});return a.cancelEvent(c)}};if(d.cantouch||a.opt.touchbehavior)a.onpreventclick=function(c){if(a.preventclick)return a.preventclick.tg.onclick=a.preventclick.click,a.preventclick=!1,a.cancelEvent(c)},a.bind(a.win,"mousedown",a.ontouchstart),a.onclick=d.isios?!1:function(c){return a.lastmouseup?(a.lastmouseup=!1,a.cancelEvent(c)):
!0},a.opt.grabcursorenabled&&d.cursorgrabvalue&&(a.css(a.ispage?a.doc:a.win,{cursor:d.cursorgrabvalue}),a.css(a.rail,{cursor:d.cursorgrabvalue}));else{var p=function(c){if(a.selectiondrag){if(c){var b=a.win.outerHeight();c=c.pageY-a.selectiondrag.top;0<c&&c<b&&(c=0);c>=b&&(c-=b);a.selectiondrag.df=c}0!=a.selectiondrag.df&&(a.doScrollBy(2*-Math.floor(a.selectiondrag.df/6)),a.debounced("doselectionscroll",function(){p()},50))}};a.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:
"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};a.onselectionstart=function(c){a.ispage||(a.selectiondrag=a.win.offset())};a.onselectionend=function(c){a.selectiondrag=!1};a.onselectiondrag=function(c){a.selectiondrag&&a.hasTextSelected()&&a.debounced("selectionscroll",function(){p(c)},250)}}d.hasmstouch&&(a.css(a.rail,{"-ms-touch-action":"none"}),a.css(a.cursor,{"-ms-touch-action":"none"}),a.bind(a.win,"MSPointerDown",a.ontouchstart),a.bind(document,
"MSPointerUp",a.ontouchend),a.bind(document,"MSPointerMove",a.ontouchmove),a.bind(a.cursor,"MSGestureHold",function(a){a.preventDefault()}),a.bind(a.cursor,"contextmenu",function(a){a.preventDefault()}));this.istouchcapable&&(a.bind(a.win,"touchstart",a.ontouchstart),a.bind(document,"touchend",a.ontouchend),a.bind(document,"touchcancel",a.ontouchend),a.bind(document,"touchmove",a.ontouchmove));a.bind(a.cursor,"mousedown",a.onmousedown);a.bind(a.cursor,"mouseup",a.onmouseup);a.railh&&(a.bind(a.cursorh,
"mousedown",function(c){a.onmousedown(c,!0)}),a.bind(a.cursorh,"mouseup",a.onmouseup));if(a.opt.cursordragontouch||!d.cantouch&&!a.opt.touchbehavior)a.rail.css({cursor:"default"}),a.railh&&a.railh.css({cursor:"default"}),a.jqbind(a.rail,"mouseenter",function(){if(!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.rail,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.rail,"click",function(c){a.doRailClick(c,
!1,!1)}),a.bind(a.rail,"dblclick",function(c){a.doRailClick(c,!0,!1)}),a.bind(a.cursor,"click",function(c){a.cancelEvent(c)}),a.bind(a.cursor,"dblclick",function(c){a.cancelEvent(c)})),a.railh&&(a.jqbind(a.railh,"mouseenter",function(){if(!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.railh,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.railh,"click",function(c){a.doRailClick(c,!1,!0)}),a.bind(a.railh,
"dblclick",function(c){a.doRailClick(c,!0,!0)}),a.bind(a.cursorh,"click",function(c){a.cancelEvent(c)}),a.bind(a.cursorh,"dblclick",function(c){a.cancelEvent(c)})));!d.cantouch&&!a.opt.touchbehavior?(a.bind(d.hasmousecapture?a.win:document,"mouseup",a.onmouseup),a.bind(document,"mousemove",a.onmousemove),a.onclick&&a.bind(document,"click",a.onclick),!a.ispage&&a.opt.enablescrollonselection&&(a.bind(a.win[0],"mousedown",a.onselectionstart),a.bind(document,"mouseup",a.onselectionend),a.bind(a.cursor,
"mouseup",a.onselectionend),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onselectionend),a.bind(document,"mousemove",a.onselectiondrag)),a.zoom&&(a.jqbind(a.zoom,"mouseenter",function(){a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.zoom,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}))):(a.bind(d.hasmousecapture?a.win:document,"mouseup",a.ontouchend),a.bind(document,"mousemove",a.ontouchmove),a.onclick&&a.bind(document,"click",a.onclick),a.opt.cursordragontouch&&
(a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mousemove",a.onmousemove),a.cursorh&&a.bind(a.cursorh,"mousedown",function(c){a.onmousedown(c,!0)}),a.cursorh&&a.bind(a.cursorh,"mousemove",a.onmousemove)));a.opt.enablemousewheel&&(a.isiframe||a.bind(d.isie&&a.ispage?document:a.win,"mousewheel",a.onmousewheel),a.bind(a.rail,"mousewheel",a.onmousewheel),a.railh&&a.bind(a.railh,"mousewheel",a.onmousewheelhr));!a.ispage&&(!d.cantouch&&!/HTML|^BODY/.test(a.win[0].nodeName))&&(a.win.attr("tabindex")||
a.win.attr({tabindex:J++}),a.jqbind(a.win,"focus",function(c){y=a.getTarget(c).id||!0;a.hasfocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"blur",function(c){y=!1;a.hasfocus=!1}),a.jqbind(a.win,"mouseenter",function(c){C=a.getTarget(c).id||!0;a.hasmousefocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"mouseleave",function(){C=!1;a.hasmousefocus=!1;a.rail.drag||a.hideCursor()}))}a.onkeypress=function(c){if(a.locked&&0==a.page.maxh)return!0;c=c?c:window.e;var b=a.getTarget(c);
if(b&&/INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName)&&(!b.getAttribute("type")&&!b.type||!/submit|button|cancel/i.tp)||e(b).attr("contenteditable"))return!0;if(a.hasfocus||a.hasmousefocus&&!y||a.ispage&&!y&&!C){b=c.keyCode;if(a.locked&&27!=b)return a.cancelEvent(c);var f=c.ctrlKey||!1,n=c.shiftKey||!1,d=!1;switch(b){case 38:case 63233:a.doScrollBy(72);d=!0;break;case 40:case 63235:a.doScrollBy(-72);d=!0;break;case 37:case 63232:a.railh&&(f?a.doScrollLeft(0):a.doScrollLeftBy(72),d=!0);break;case 39:case 63234:a.railh&&
(f?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-72),d=!0);break;case 33:case 63276:a.doScrollBy(a.view.h);d=!0;break;case 34:case 63277:a.doScrollBy(-a.view.h);d=!0;break;case 36:case 63273:a.railh&&f?a.doScrollPos(0,0):a.doScrollTo(0);d=!0;break;case 35:case 63275:a.railh&&f?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);d=!0;break;case 32:a.opt.spacebarenabled&&(n?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h),d=!0);break;case 27:a.zoomactive&&(a.doZoom(),d=!0)}if(d)return a.cancelEvent(c)}};
a.opt.enablekeyboard&&a.bind(document,d.isopera&&!d.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(c){c.ctrlKey&&(a.wheelprevented=!0)});a.bind(document,"keyup",function(c){c.ctrlKey||(a.wheelprevented=!1)});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(d.ischrome&&!a.ispage&&!a.haswrapper){var r=a.win.attr("style"),f=parseFloat(a.win.css("width"))+1;a.win.css("width",f);a.synched("chromefix",
function(){a.win.attr("style",r)})}a.onAttributeChange=function(c){a.lazyResize(250)};!a.ispage&&!a.haswrapper&&(!1!==z?(a.observer=new z(function(c){c.forEach(a.onAttributeChange)}),a.observer.observe(a.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),a.observerremover=new z(function(c){c.forEach(function(c){if(0<c.removedNodes.length)for(var b in c.removedNodes)if(c.removedNodes[b]==a.win[0])return a.remove()})}),a.observerremover.observe(a.win[0].parentNode,{childList:!0,characterData:!1,
attributes:!1,subtree:!1})):(a.bind(a.win,d.isie&&!d.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange),d.isie9&&a.win[0].attachEvent("onpropertychange",a.onAttributeChange),a.bind(a.win,"DOMNodeRemoved",function(c){c.target==a.win[0]&&a.remove()})));!a.ispage&&a.opt.boxzoom&&a.bind(window,"resize",a.resizeZoom);a.istextarea&&a.bind(a.win,"mouseup",a.lazyResize);a.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var I=function(c){a.iframexd=!1;try{var b="contentDocument"in this?this.contentDocument:
this.contentWindow.document}catch(f){a.iframexd=!0,b=!1}if(a.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;a.forcescreen=!0;a.isiframe&&(a.iframe={doc:e(b),html:a.doc.contents().find("html")[0],body:a.doc.contents().find("body")[0]},a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}},a.docscroll=e(a.iframe.body));!d.isios&&(a.opt.iframeautoresize&&
!a.isiframe)&&(a.win.scrollTop(0),a.doc.height(""),c=Math.max(b.getElementsByTagName("html")[0].scrollHeight,b.body.scrollHeight),a.doc.height(c));a.lazyResize(30);d.isie7&&a.css(e(a.iframe.html),{"overflow-y":"hidden"});a.css(e(a.iframe.body),{"overflow-y":"hidden"});d.isios&&a.haswrapper&&a.css(e(b.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in this?a.bind(this.contentWindow,"scroll",a.onscroll):a.bind(b,"scroll",a.onscroll);a.opt.enablemousewheel&&a.bind(b,"mousewheel",a.onmousewheel);
a.opt.enablekeyboard&&a.bind(b,d.isopera?"keypress":"keydown",a.onkeypress);if(d.cantouch||a.opt.touchbehavior)a.bind(b,"mousedown",a.ontouchstart),a.bind(b,"mousemove",function(c){a.ontouchmove(c,!0)}),a.opt.grabcursorenabled&&d.cursorgrabvalue&&a.css(e(b.body),{cursor:d.cursorgrabvalue});a.bind(b,"mouseup",a.ontouchend);a.zoom&&(a.opt.dblclickzoom&&a.bind(b,"dblclick",a.doZoom),a.ongesturezoom&&a.bind(b,"gestureend",a.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&
setTimeout(function(){I.call(a.doc[0],!1)},500);a.bind(this.doc,"load",I)}};this.showCursor=function(c,b){a.cursortimeout&&(clearTimeout(a.cursortimeout),a.cursortimeout=0);if(a.rail){a.autohidedom&&(a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax}),a.cursoractive=!0);if(!a.rail.drag||1!=a.rail.drag.pt)"undefined"!=typeof c&&!1!==c&&(a.scroll.y=Math.round(1*c/a.scrollratio.y)),"undefined"!=typeof b&&(a.scroll.x=Math.round(1*b/a.scrollratio.x));a.cursor.css({height:a.cursorheight,top:a.scroll.y});
a.cursorh&&(!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:a.scroll.x+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:a.scroll.x}),a.cursoractive=!0);a.zoom&&a.zoom.stop().css({opacity:a.opt.cursoropacitymax})}};this.hideCursor=function(c){!a.cursortimeout&&(a.rail&&a.autohidedom&&!(a.hasmousefocus&&"leave"==a.opt.autohidemode))&&(a.cursortimeout=setTimeout(function(){if(!a.rail.active||!a.showonmouseevent)a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin}),
a.zoom&&a.zoom.stop().animate({opacity:a.opt.cursoropacitymin}),a.cursoractive=!1;a.cursortimeout=0},c||a.opt.hidecursordelay))};this.noticeCursor=function(c,b,f){a.showCursor(b,f);a.rail.active||a.hideCursor(c)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+
parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(c,b){if(!a||!a.win)return!1;if(!a.haswrapper&&!a.ispage){if("none"==a.win.css("display"))return a.visibility&&a.hideRail().hideRailHr(),!1;!a.hidden&&!a.visibility&&a.showRail().showRailHr()}var f=a.page.maxh,d=a.page.maxw,e=a.view.w;a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),
h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=b?b:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==f&&a.page.maxw==d&&a.view.w==e){if(a.ispage)return a;f=a.win.offset();if(a.lastposition&&(d=a.lastposition,d.top==f.top&&d.left==f.left))return a;a.lastposition=f}0==a.page.maxh?(a.hideRail(),a.scrollvaluemax=0,a.scroll.y=0,a.scrollratio.y=0,a.cursorheight=0,a.setScrollTop(0),a.rail.scrollable=!1):a.rail.scrollable=
!0;0==a.page.maxw?(a.hideRailHr(),a.scrollvaluemaxw=0,a.scroll.x=0,a.scrollratio.x=0,a.cursorwidth=0,a.setScrollLeft(0),a.railh.scrollable=!1):a.railh.scrollable=!0;a.locked=0==a.page.maxh&&0==a.page.maxw;if(a.locked)return a.ispage||a.updateScrollBar(a.view),!1;!a.hidden&&!a.visibility?a.showRail().showRailHr():!a.hidden&&!a.railh.visibility&&a.showRailHr();a.istextarea&&(a.win.css("resize")&&"none"!=a.win.css("resize"))&&(a.view.h-=20);a.cursorheight=Math.min(a.view.h,Math.round(a.view.h*(a.view.h/
a.page.h)));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=Math.min(a.view.w,Math.round(a.view.w*(a.view.w/a.page.w)));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder;a.railh&&(a.railh.width=0<a.page.maxh?a.view.w-a.rail.width:a.view.w,a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder);a.ispage||
a.updateScrollBar(a.view);a.scrollratio={x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};a.getScrollTop()>a.page.maxh?a.doScrollTop(a.page.maxh):(a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y)),a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)),a.cursoractive&&a.noticeCursor());a.scroll.y&&0==a.getScrollTop()&&a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(c){c=isNaN(c)?30:c;a.delayed("resize",a.resize,
c);return a};this._bind=function(c,b,f,d){a.events.push({e:c,n:b,f:f,b:d,q:!1});c.addEventListener?c.addEventListener(b,f,d||!1):c.attachEvent?c.attachEvent("on"+b,f):c["on"+b]=f};this.jqbind=function(c,b,f){a.events.push({e:c,n:b,f:f,q:!0});e(c).bind(b,f)};this.bind=function(c,b,f,e){var h="jquery"in c?c[0]:c;"mousewheel"==b?"onwheel"in a.win?a._bind(h,"wheel",f,e||!1):(c="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",l(h,c,f,e||!1),"DOMMouseScroll"==c&&l(h,"MozMousePixelScroll",
f,e||!1)):h.addEventListener?(d.cantouch&&/mouseup|mousedown|mousemove/.test(b)&&a._bind(h,"mousedown"==b?"touchstart":"mouseup"==b?"touchend":"touchmove",function(a){if(a.touches){if(2>a.touches.length){var c=a.touches.length?a.touches[0]:a;c.original=a;f.call(this,c)}}else a.changedTouches&&(c=a.changedTouches[0],c.original=a,f.call(this,c))},e||!1),a._bind(h,b,f,e||!1),d.cantouch&&"mouseup"==b&&a._bind(h,"touchcancel",f,e||!1)):a._bind(h,b,function(c){if((c=c||window.event||!1)&&c.srcElement)c.target=
c.srcElement;"pageY"in c||(c.pageX=c.clientX+document.documentElement.scrollLeft,c.pageY=c.clientY+document.documentElement.scrollTop);return!1===f.call(h,c)||!1===e?a.cancelEvent(c):!0})};this._unbind=function(a,b,f,d){a.removeEventListener?a.removeEventListener(b,f,d):a.detachEvent?a.detachEvent("on"+b,f):a["on"+b]=!1};this.unbindAll=function(){for(var c=0;c<a.events.length;c++){var b=a.events[c];b.q?b.e.unbind(b.n,b.f):a._unbind(b.e,b.n,b.f,b.b)}};this.cancelEvent=function(a){a=a.original?a.original:
a?a:window.event||!1;if(!a)return!1;a.preventDefault&&a.preventDefault();a.stopPropagation&&a.stopPropagation();a.preventManipulation&&a.preventManipulation();a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1};this.stopPropagation=function(a){a=a.original?a.original:a?a:window.event||!1;if(!a)return!1;if(a.stopPropagation)return a.stopPropagation();a.cancelBubble&&(a.cancelBubble=!0);return!1};this.showRail=function(){if(0!=a.page.maxh&&(a.ispage||"none"!=a.win.css("display")))a.visibility=!0,
a.rail.visibility=!0,a.rail.css("display","block");return a};this.showRailHr=function(){if(!a.railh)return a;if(0!=a.page.maxw&&(a.ispage||"none"!=a.win.css("display")))a.railh.visibility=!0,a.railh.css("display","block");return a};this.hideRail=function(){a.visibility=!1;a.rail.visibility=!1;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=!1;a.railh.css("display","none");return a};this.show=function(){a.hidden=!1;a.locked=!1;return a.showRail().showRailHr()};
this.hide=function(){a.hidden=!0;a.locked=!0;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();a.cursortimeout&&clearTimeout(a.cursortimeout);a.doZoomOut();a.unbindAll();d.isie9&&a.win[0].detachEvent("onpropertychange",a.onAttributeChange);!1!==a.observer&&a.observer.disconnect();!1!==a.observerremover&&a.observerremover.disconnect();a.events=null;a.cursor&&a.cursor.remove();a.cursorh&&a.cursorh.remove();a.rail&&a.rail.remove();
a.railh&&a.railh.remove();a.zoom&&a.zoom.remove();for(var c=0;c<a.saved.css.length;c++){var b=a.saved.css[c];b[0].css(b[1],"undefined"==typeof b[2]?"":b[2])}a.saved=!1;a.me.data("__nicescroll","");var f=e.nicescroll;f.each(function(c){if(this&&this.id===a.id){delete f[c];for(var b=++c;b<f.length;b++,c++)f[c]=f[b];f.length--;f.length&&delete f[f.length]}});for(var h in a)a[h]=null,delete a[h];a=null};this.scrollstart=function(c){this.onscrollstart=c;return a};this.scrollend=function(c){this.onscrollend=
c;return a};this.scrollcancel=function(c){this.onscrollcancel=c;return a};this.zoomin=function(c){this.onzoomin=c;return a};this.zoomout=function(c){this.onzoomout=c;return a};this.isScrollable=function(a){a=a.target?a.target:a;if("OPTION"==a.nodeName)return!0;for(;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var b=e(a),b=b.css("overflowY")||b.css("overflowX")||b.css("overflow")||"";if(/scroll|auto/.test(b))return a.clientHeight!=a.scrollHeight;a=a.parentNode?a.parentNode:!1}return!1};this.getViewport=
function(a){for(a=a&&a.parentNode?a.parentNode:!1;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var b=e(a);if(/fixed|absolute/.test(b.css("position")))return b;var f=b.css("overflowY")||b.css("overflowX")||b.css("overflow")||"";if(/scroll|auto/.test(f)&&a.clientHeight!=a.scrollHeight||0<b.getNiceScroll().length)return b;a=a.parentNode?a.parentNode:!1}return a?e(a):!1};this.triggerScrollEnd=function(){if(a.onscrollend){var c=a.getScrollLeft(),b=a.getScrollTop();a.onscrollend.call(a,{type:"scrollend",
current:{x:c,y:b},end:{x:c,y:b}})}};this.onmousewheel=function(c){if(!a.wheelprevented){if(a.locked)return a.debounced("checkunlock",a.resize,250),!0;if(a.rail.drag)return a.cancelEvent(c);"auto"==a.opt.oneaxismousemode&&0!=c.deltaX&&(a.opt.oneaxismousemode=!1);if(a.opt.oneaxismousemode&&0==c.deltaX&&!a.rail.scrollable)return a.railh&&a.railh.scrollable?a.onmousewheelhr(c):!0;var b=+new Date,f=!1;a.opt.preservenativescrolling&&a.checkarea+600<b&&(a.nativescrollingarea=a.isScrollable(c),f=!0);a.checkarea=
b;if(a.nativescrollingarea)return!0;if(c=q(c,!1,f))a.checkarea=0;return c}};this.onmousewheelhr=function(c){if(!a.wheelprevented){if(a.locked||!a.railh.scrollable)return!0;if(a.rail.drag)return a.cancelEvent(c);var b=+new Date,f=!1;a.opt.preservenativescrolling&&a.checkarea+600<b&&(a.nativescrollingarea=a.isScrollable(c),f=!0);a.checkarea=b;return a.nativescrollingarea?!0:a.locked?a.cancelEvent(c):q(c,!0,f)}};this.stop=function(){a.cancelScroll();a.scrollmon&&a.scrollmon.stop();a.cursorfreezed=!1;
a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(b){var d=Math.round(10*a.opt.scrollspeed);b=Math.min(d,Math.round(b/20*a.opt.scrollspeed));return 20<b?b:0};a.opt.smoothscroll?a.ishwscroll&&d.hastransition&&a.opt.usetransition?(this.prepareTransition=function(b,e){var f=e?20<b?b:0:a.getTransitionSpeed(b),h=f?d.prefixstyle+"transform "+f+"ms ease-out":"";if(!a.lasttransitionstyle||a.lasttransitionstyle!=h)a.lasttransitionstyle=
h,a.doc.css(d.transitionstyle,h);return f},this.doScrollLeft=function(b,d){var f=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,e,f){var h=a.getScrollTop(),g=a.getScrollLeft();(0>(a.newscrolly-h)*(e-h)||0>(a.newscrollx-g)*(b-g))&&a.cancelScroll();!1==a.opt.bouncescroll&&(0>e?e=0:e>a.page.maxh&&(e=a.page.maxh),0>b?b=0:b>a.page.maxw&&(b=a.page.maxw));
if(a.scrollrunning&&b==a.newscrollx&&e==a.newscrolly)return!1;a.newscrolly=e;a.newscrollx=b;a.newscrollspeed=f||!1;if(a.timer)return!1;a.timer=setTimeout(function(){var f=a.getScrollTop(),h=a.getScrollLeft(),g,k;g=b-h;k=e-f;g=Math.round(Math.sqrt(Math.pow(g,2)+Math.pow(k,2)));g=a.newscrollspeed&&1<a.newscrollspeed?a.newscrollspeed:a.getTransitionSpeed(g);a.newscrollspeed&&1>=a.newscrollspeed&&(g*=a.newscrollspeed);a.prepareTransition(g,!0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);
0<g&&(!a.scrollrunning&&a.onscrollstart&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:h,y:f},request:{x:b,y:e},end:{x:a.newscrollx,y:a.newscrolly},speed:g}),d.transitionend?a.scrollendtrapped||(a.scrollendtrapped=!0,a.bind(a.doc,d.transitionend,a.onScrollTransitionEnd,!1)):(a.scrollendtrapped&&clearTimeout(a.scrollendtrapped),a.scrollendtrapped=setTimeout(a.onScrollTransitionEnd,g)),a.timerscroll={bz:new BezierClass(f,a.newscrolly,g,0,0,0.58,1),bh:new BezierClass(h,a.newscrollx,g,0,0,0.58,
1)},a.cursorfreezed||(a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)));a.synched("doScroll-set",function(){a.timer=0;a.scrollendtrapped&&(a.scrollrunning=!0);a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)},this.cancelScroll=function(){if(!a.scrollendtrapped)return!0;var b=a.getScrollTop(),e=a.getScrollLeft();a.scrollrunning=!1;d.transitionend||clearTimeout(d.transitionend);a.scrollendtrapped=
!1;a._unbind(a.doc,d.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(b);a.railh&&a.setScrollLeft(e);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;a.cursorfreezed=!1;a.showCursor(b,e);return a},this.onScrollTransitionEnd=function(){a.scrollendtrapped&&a._unbind(a.doc,d.transitionend,a.onScrollTransitionEnd);a.scrollendtrapped=!1;a.prepareTransition(0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;var b=
a.getScrollTop(),e=a.getScrollLeft();a.setScrollTop(b);a.railh&&a.setScrollLeft(e);a.noticeCursor(!1,b,e);a.cursorfreezed=!1;0>b?b=0:b>a.page.maxh&&(b=a.page.maxh);0>e?e=0:e>a.page.maxw&&(e=a.page.maxw);if(b!=a.newscrolly||e!=a.newscrollx)return a.doScrollPos(e,b,a.opt.snapbackspeed);a.onscrollend&&a.scrollrunning&&a.triggerScrollEnd();a.scrollrunning=!1}):(this.doScrollLeft=function(b,d){var f=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=
a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,d,f){function e(){if(a.cancelAnimationFrame)return!0;a.scrollrunning=!0;if(p=1-p)return a.timer=s(e)||1;var b=0,c=sy=a.getScrollTop();if(a.dst.ay){var c=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly,f=c-sy;if(0>f&&c<a.newscrolly||0<f&&c>a.newscrolly)c=a.newscrolly;a.setScrollTop(c);c==a.newscrolly&&(b=1)}else b=1;var d=sx=a.getScrollLeft();if(a.dst.ax){d=a.bzscroll?a.dst.px+a.bzscroll.getNow()*
a.dst.ax:a.newscrollx;f=d-sx;if(0>f&&d<a.newscrollx||0<f&&d>a.newscrollx)d=a.newscrollx;a.setScrollLeft(d);d==a.newscrollx&&(b+=1)}else b+=1;2==b?(a.timer=0,a.cursorfreezed=!1,a.bzscroll=!1,a.scrollrunning=!1,0>c?c=0:c>a.page.maxh&&(c=a.page.maxh),0>d?d=0:d>a.page.maxw&&(d=a.page.maxw),d!=a.newscrollx||c!=a.newscrolly?a.doScrollPos(d,c):a.onscrollend&&a.triggerScrollEnd()):a.timer=s(e)||1}d="undefined"==typeof d||!1===d?a.getScrollTop(!0):d;if(a.timer&&a.newscrolly==d&&a.newscrollx==b)return!0;a.timer&&
v(a.timer);a.timer=0;var h=a.getScrollTop(),g=a.getScrollLeft();(0>(a.newscrolly-h)*(d-h)||0>(a.newscrollx-g)*(b-g))&&a.cancelScroll();a.newscrolly=d;a.newscrollx=b;if(!a.bouncescroll||!a.rail.visibility)0>a.newscrolly?a.newscrolly=0:a.newscrolly>a.page.maxh&&(a.newscrolly=a.page.maxh);if(!a.bouncescroll||!a.railh.visibility)0>a.newscrollx?a.newscrollx=0:a.newscrollx>a.page.maxw&&(a.newscrollx=a.page.maxw);a.dst={};a.dst.x=b-g;a.dst.y=d-h;a.dst.px=g;a.dst.py=h;var k=Math.round(Math.sqrt(Math.pow(a.dst.x,
2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/k;a.dst.ay=a.dst.y/k;var l=0,q=k;0==a.dst.x?(l=h,q=d,a.dst.ay=1,a.dst.py=0):0==a.dst.y&&(l=g,q=b,a.dst.ax=1,a.dst.px=0);k=a.getTransitionSpeed(k);f&&1>=f&&(k*=f);a.bzscroll=0<k?a.bzscroll?a.bzscroll.update(q,k):new BezierClass(l,q,k,0,1,0,1):!1;if(!a.timer){(h==a.page.maxh&&d>=a.page.maxh||g==a.page.maxw&&b>=a.page.maxw)&&a.checkContentSize();var p=1;a.cancelAnimationFrame=!1;a.timer=1;a.onscrollstart&&!a.scrollrunning&&a.onscrollstart.call(a,{type:"scrollstart",
current:{x:g,y:h},request:{x:b,y:d},end:{x:a.newscrollx,y:a.newscrolly},speed:k});e();(h==a.page.maxh&&d>=h||g==a.page.maxw&&b>=g)&&a.checkContentSize();a.noticeCursor()}},this.cancelScroll=function(){a.timer&&v(a.timer);a.timer=0;a.bzscroll=!1;a.scrollrunning=!1;return a}):(this.doScrollLeft=function(b,d){var f=a.getScrollTop();a.doScrollPos(b,f,d)},this.doScrollTop=function(b,d){var f=a.getScrollLeft();a.doScrollPos(f,b,d)},this.doScrollPos=function(b,d,f){var e=b>a.page.maxw?a.page.maxw:b;0>e&&
(e=0);var h=d>a.page.maxh?a.page.maxh:d;0>h&&(h=0);a.synched("scroll",function(){a.setScrollTop(h);a.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(b,d){var f=0,f=d?Math.floor((a.scroll.y-b)*a.scrollratio.y):(a.timer?a.newscrolly:a.getScrollTop(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.h/2);f<-e?f=-e:f>a.page.maxh+e&&(f=a.page.maxh+e)}a.cursorfreezed=!1;py=a.getScrollTop(!0);if(0>f&&0>=py)return a.noticeCursor();if(f>a.page.maxh&&py>=a.page.maxh)return a.checkContentSize(),
a.noticeCursor();a.doScrollTop(f)};this.doScrollLeftBy=function(b,d){var f=0,f=d?Math.floor((a.scroll.x-b)*a.scrollratio.x):(a.timer?a.newscrollx:a.getScrollLeft(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.w/2);f<-e?f=-e:f>a.page.maxw+e&&(f=a.page.maxw+e)}a.cursorfreezed=!1;px=a.getScrollLeft(!0);if(0>f&&0>=px||f>a.page.maxw&&px>=a.page.maxw)return a.noticeCursor();a.doScrollLeft(f)};this.doScrollTo=function(b,d){d&&Math.round(b*a.scrollratio.y);a.cursorfreezed=!1;a.doScrollTop(b)};this.checkContentSize=
function(){var b=a.getContentSize();(b.h!=a.page.h||b.w!=a.page.w)&&a.resize(!1,b)};a.onscroll=function(b){a.rail.drag||a.cursorfreezed||a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.railh&&(a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)));a.noticeCursor()})};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(b){if(!a.zoomactive){a.zoomactive=!0;a.zoomrestore={style:{}};var h="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
f=a.win[0].style,g;for(g in h){var k=h[g];a.zoomrestore.style[k]="undefined"!=typeof f[k]?f[k]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};d.isios4&&(a.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));a.win.css({position:d.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});h=a.win.css("backgroundColor");(""==h||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&
a.win.css("backgroundColor","#fff");a.rail.css({"z-index":x+101});a.zoom.css({"z-index":x+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();a.onzoomin&&a.onzoomin.call(a);return a.cancelEvent(b)}};this.doZoomOut=function(b){if(a.zoomactive)return a.zoomactive=!1,a.win.css("margin",""),a.win.css(a.zoomrestore.style),d.isios4&&e(window).scrollTop(a.zoomrestore.scrollTop),a.rail.css({"z-index":a.zindex}),a.zoom.css({"z-index":a.zindex}),a.zoomrestore=!1,a.zoom.css("backgroundPosition",
"0px 0px"),a.onResize(),a.onzoomout&&a.onzoomout.call(a),a.cancelEvent(b)};this.doZoom=function(b){return a.zoomactive?a.doZoomOut(b):a.doZoomIn(b)};this.resizeZoom=function(){if(a.zoomactive){var b=a.getScrollTop();a.win.css({width:e(window).width()-a.zoomrestore.padding.w+"px",height:e(window).height()-a.zoomrestore.padding.h+"px"});a.onResize();a.setScrollTop(Math.min(a.page.maxh,b))}};this.init();e.nicescroll.push(this)},H=function(e){var b=this;this.nc=e;this.steptime=this.lasttime=this.speedy=
this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,g){b.stop();var l=b.time();b.steptime=0;b.lasttime=l;b.speedx=0;b.speedy=0;b.lastx=e;b.lasty=g;b.lastscrollx=-1;b.lastscrolly=-1};this.update=function(e,g){var l=b.time();b.steptime=l-b.lasttime;b.lasttime=l;var l=g-b.lasty,q=e-b.lastx,a=b.nc.getScrollTop(),p=b.nc.getScrollLeft(),a=a+
l,p=p+q;b.snapx=0>p||p>b.nc.page.maxw;b.snapy=0>a||a>b.nc.page.maxh;b.speedx=q;b.speedy=l;b.lastx=e;b.lasty=g};this.stop=function(){b.nc.unsynched("domomentum2d");b.timer&&clearTimeout(b.timer);b.timer=0;b.lastscrollx=-1;b.lastscrolly=-1};this.doSnapy=function(e,g){var l=!1;0>g?(g=0,l=!0):g>b.nc.page.maxh&&(g=b.nc.page.maxh,l=!0);0>e?(e=0,l=!0):e>b.nc.page.maxw&&(e=b.nc.page.maxw,l=!0);l?b.nc.doScrollPos(e,g,b.nc.opt.snapbackspeed):b.nc.triggerScrollEnd()};this.doMomentum=function(e){var g=b.time(),
l=e?g+e:b.lasttime;e=b.nc.getScrollLeft();var q=b.nc.getScrollTop(),a=b.nc.page.maxh,p=b.nc.page.maxw;b.speedx=0<p?Math.min(60,b.speedx):0;b.speedy=0<a?Math.min(60,b.speedy):0;l=l&&60>=g-l;if(0>q||q>a||0>e||e>p)l=!1;e=b.speedx&&l?b.speedx:!1;if(b.speedy&&l&&b.speedy||e){var d=Math.max(16,b.steptime);50<d&&(e=d/50,b.speedx*=e,b.speedy*=e,d=50);b.demulxy=0;b.lastscrollx=b.nc.getScrollLeft();b.chkx=b.lastscrollx;b.lastscrolly=b.nc.getScrollTop();b.chky=b.lastscrolly;var r=b.lastscrollx,t=b.lastscrolly,
s=function(){var c=600<b.time()-g?0.04:0.02;if(b.speedx&&(r=Math.floor(b.lastscrollx-b.speedx*(1-b.demulxy)),b.lastscrollx=r,0>r||r>p))c=0.1;if(b.speedy&&(t=Math.floor(b.lastscrolly-b.speedy*(1-b.demulxy)),b.lastscrolly=t,0>t||t>a))c=0.1;b.demulxy=Math.min(1,b.demulxy+c);b.nc.synched("domomentum2d",function(){b.speedx&&(b.nc.getScrollLeft()!=b.chkx&&b.stop(),b.chkx=r,b.nc.setScrollLeft(r));b.speedy&&(b.nc.getScrollTop()!=b.chky&&b.stop(),b.chky=t,b.nc.setScrollTop(t));b.timer||(b.nc.hideCursor(),
b.doSnapy(r,t))});1>b.demulxy?b.timer=setTimeout(s,d):(b.stop(),b.nc.hideCursor(),b.doSnapy(r,t))};s()}else b.doSnapy(b.nc.getScrollLeft(),b.nc.getScrollTop())}},w=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(g,b,h){return(b=e.data(g,"__nicescroll")||!1)&&b.ishwscroll?b.getScrollTop():w.call(g)},set:function(g,b){var h=e.data(g,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollTop(parseInt(b)):w.call(g,b);return this}};e.fn.scrollTop=function(g){if("undefined"==typeof g){var b=this[0]?e.data(this[0],
"__nicescroll")||!1:!1;return b&&b.ishwscroll?b.getScrollTop():w.call(this)}return this.each(function(){var b=e.data(this,"__nicescroll")||!1;b&&b.ishwscroll?b.setScrollTop(parseInt(g)):w.call(e(this),g)})};var A=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(g,b,h){return(b=e.data(g,"__nicescroll")||!1)&&b.ishwscroll?b.getScrollLeft():A.call(g)},set:function(g,b){var h=e.data(g,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(b)):A.call(g,b);return this}};e.fn.scrollLeft=function(g){if("undefined"==
typeof g){var b=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return b&&b.ishwscroll?b.getScrollLeft():A.call(this)}return this.each(function(){var b=e.data(this,"__nicescroll")||!1;b&&b.ishwscroll?b.setScrollLeft(parseInt(g)):A.call(e(this),g)})};var B=function(g){var b=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var g=0,a=0;g<b.length;g++)e.call(b[g],a++);return b};this.push=function(e){b[b.length]=e;b.length++};this.eq=function(e){return b[e]};if(g)for(var h=0;h<g.length;h++){var k=
e.data(g[h],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this};(function(e,b,h){for(var k=0;k<b.length;k++)h(e,b[k])})(B.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,b){e[b]=function(){var e=arguments;return this.each(function(){this[b].apply(this,e)})}});e.fn.getNiceScroll=function(g){return"undefined"==typeof g?new B(this):this[g]&&e.data(this[g],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(g){return e.data(g,"__nicescroll")?
!0:!1}});e.fn.niceScroll=function(g,b){"undefined"==typeof b&&("object"==typeof g&&!("jquery"in g))&&(b=g,g=!1);var h=new B;"undefined"==typeof b&&(b={});g&&(b.doc=e(g),b.win=e(this));var k=!("doc"in b);!k&&!("win"in b)&&(b.win=e(this));this.each(function(){var g=e(this).data("__nicescroll")||!1;g||(b.doc=k?e(this):b.doc,g=new N(b,e(this)),e(this).data("__nicescroll",g));h.push(g)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new B,e.nicescroll.options=
G)});


/* Nailthumb Js */

/*	jQuery NailThumb Plugin - any image to any thumbnail
 *  Examples and documentation at: http://www.garralab.com/nailthumb.php
 *  Copyright (C) 2012  garralab@gmail.com
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function($) {
    var DEBUG = false;
    var version = '1.1';
    $.fn.nailthumb = function(options) {
        var opts = $.extend({}, $.fn.nailthumb.defaults, options);
        return this.each(function() {
            var $this = $(this);
            var o = $.metadata ? $.extend({}, opts, $this.metadata()) : opts;
            thumbize($this,o)
        });
    };
    function thumbize(element,options) {
        var image = setImage(element,options);
        var container = setContainer(element,options);
        if (options.serverSideParams) {
            $.fn.nailthumb.setServerSideParams(image,container,options);
        }
        debugObject('image',image);
        debugObject('container',container);
        if (options.onStart) options.onStart(container,options);
        if (options.loadingClass) container.addClass(options.loadingClass);

        if (options.preload || image.data('nailthumb.replaceto')) {
            debug('wait on load');
            image.one('load',function() {
                debugObject('before check',image);
                if(!image.data('nailthumb.working') && !image.data('nailthumb.replacing')) {
                    image.data('nailthumb.working',true);
                    debugObject('inside check',image);
                    doThumb(image,container,options);
                }
            });
            var src = image.attr('src');
            image.attr('src',null).attr('src',src);
        } else {
            debug('nail thumb directly');
            image.data('nailthumb.working',true);
            doThumb(image,container,options);
        }
    };
    function doThumb(image,container,options) {
        resetImage(image,options);
        resetContainer(container,options);
        var imageDims = getImageDims(image,options);
        debugObject('image',image);
        debugObject('imageDims',imageDims);
        if (imageDims.width==0 || imageDims.height==0) {
            imageDims = getHiddenCloneDims(image);
            debugObject('imageCloneDims',imageDims);
        }
        var containerDims = getContainerDims(container,options);
        debugObject('container',container);
        debugObject('containerDims',containerDims);
        var prop = getProportion(containerDims,imageDims,options);
        debug('proportions',prop);
        resize(image, imageDims, container, containerDims, prop, options);
        
    };
    function setImage(element,options) {
        var image = element.find('img').first();
        var finder = options.imageCustomFinder;
        if (!finder && options.imageUrl) {
            finder = imageUrlFinder;
        } else if(!finder && options.imageFromWrappingLink) {
            finder = imageFromWrappingLinkFinder;
        }
        if (finder) {
            var img = finder(element,options);
            debugObject('finder',img);
            if (!img) img = [];
            if (img.length>0) {
                image = img;
                image.css('display','none');
                if(!image.data('nailthumb.replaceto')) image.data('nailthumb.replaceto',element);
                image.data('nailthumb.originalImageDims',null);
            }
        }
        if (image.length==0) {
            if (element.is('img')) image = element;
        }
        
        return image;
    };
    function imageUrlFinder(element,options) {
        var image = $('<img />').attr('src',options.imageUrl).css('display','none').data('nailthumb.replaceto',element);
        element.append(image);
        return image;
    };
    function imageFromWrappingLinkFinder(element,options) {
        var image;
        var link = element.find('a').first();
        if (link.length==0 && element.is('a')) {
            link = element;
        }
        if (link.attr('href')) {
            image = $('<img />').attr('src',link.attr('href')).css('display','none').data('nailthumb.replaceto',link);
            if (link.attr('title')) image.attr('title',link.attr('title'));
            link.append(image);
        }
        return image;
    };
    function resetImage(image,options) {
        if (!options.nostyle) {
            image.css({
                'position':'relative'
            });
        }
        if (!image.data('nailthumb.originalImageDims')) {
            image.css({
                'width':'auto',
                'height':'auto',
                'top':0,
                'left':0
            }).removeAttr('width')
            .removeAttr('height');
        }
    };
    function setContainer(element,options) {
        var container = element;
        if (element.is('img')) {
            if (options.ifImageAddContainer) {
                var c = $('<div></div>');
                element.wrap(c);
            } 
            container = element.parent();
        }
        return container;
    };
    function resetContainer(container,options) {
        if (options.containerClass) container.addClass(options.containerClass);
        if (!options.nostyle) {
            container.css({
                'overflow':'hidden',
                'padding':'0px'
            });
        }
        
        if (options.replaceAnimation == 'animate') {
            if (options.width || options.height) {
                container.animate({
                    'width':options.width,
                    'height':options.height
                },options.animationTime,options.animation);
            }
        } else {
            if (options.width) container.width(options.width);
            if (options.height) container.height(options.height);
        }
        
        container.find('span.'+options.titleClass).remove();
    };
    function resize(image, imageDims, container, containerDims, prop, options) {
        var iw = imageDims.width * prop;
        var ih = imageDims.height * prop;
        var top = 0, left = 0, diff;
        var direction = getDirections(options.fitDirection);
        if (ih<containerDims.innerHeight) {
            switch (direction.v) {
                case 'center':
                    top=-(ih-containerDims.innerHeight)/2;
                    break;
                case 'bottom':
                    top=-(ih-containerDims.innerHeight);
                    diff='bottom';
                    break;
                case 'top':
                    top=0;
                    diff='top';
                    break;
                default:
                    break;
            }
        } else if (ih>containerDims.innerHeight) {
            switch (direction.v) {
                case 'center':
                    top=-(ih-containerDims.innerHeight)/2;
                    break;
                case 'bottom':
                    top=-(ih-containerDims.innerHeight);
                    break;
                default:
                    break;
            }
        }
        if (iw<containerDims.innerWidth) {
            switch (direction.h) {
                case 'center':
                    left=-(iw-containerDims.innerWidth)/2;
                    break;
                case 'right':
                    left=-(iw-containerDims.innerWidth);
                    break;
                default:
                    break;
            }
        } else if (iw>containerDims.innerWidth) {
            switch (direction.h) {
                case 'center':
                    left=-(iw-containerDims.innerWidth)/2;
                    break;
                case 'right':
                    left=-(iw-containerDims.innerWidth);
                    break;
                default:
                    break;
            }
        }
        image.addClass(options.imageClass);
        if (image.data('nailthumb.replaceto')) {
            replaceImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
        } else {
            showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
        }
    };
    function replaceImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        var element = image.data('nailthumb.replaceto');
        var replaceto = findReplaceTo(element,options);
        image.data('nailthumb.replacing',true);
        image.load(function() {
            image.data('nailthumb.replacing',null);
        });
        if (replaceto) {
            replaceto.replaceWith(image);
        } else {
            element.append(image);
        }
        if (options.afterReplace) options.afterReplace(container, image, options);
        showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
    };
    function showImage(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        
        if (options.replaceAnimation == 'animate') {
            image.css('display','inline');
            container.animate({
                'width':containerDims.innerWidth,
                'height':containerDims.innerHeight
            },options.animationTime,options.animation);
            image.animate({
                'width':iw,
                'height':ih,
                'top':top,
                'left':left
            },options.animationTime,options.animation,function(){
                afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
            });
        } else {
            container.css({
                'width':containerDims.innerWidth,
                'height':containerDims.innerHeight
            });
            if (options.replaceAnimation) image.css('display','none');
            image.css({
                'width':iw,
                'height':ih,
                'top':top,
                'left':left
            });
            if (options.replaceAnimation == 'fade') {
                image.fadeIn(options.animationTime,options.animation,function(){
                    afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                });
            } else if (options.replaceAnimation == 'slide') {
                image.slideDown(options.animationTime,options.animation,function(){
                    afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                });
            } else if (options.replaceAnimation && options.replaceAnimation instanceof Function) {
                options.replaceAnimation(image,function(){
                    afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                },options);
                if (!options.selfStartAfterAppear) {
                    afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
                }
            } else {
                image.css('display','inline');
                afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
            }
        }
    };
    function afterAppear(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        if (options.afterAppear) options.afterAppear(container, image, options);
        image.data('nailthumb.replaceto',null);
        decorate(image, imageDims, container, containerDims, ih, iw, left, top, diff, options);
    };
    function findReplaceTo(element,options) {
        var rep = null; 
        element.find('img').each(function() {
            if (!rep && !$(this).data('nailthumb.replaceto')) {
                rep = $(this);
            }
        });
        return rep;
    };
    function decorate(image, imageDims, container, containerDims, ih, iw, left, top, diff, options) {
        if (options.title || (options.titleAttr && image.attr(options.titleAttr)) ) {
            var title = options.title?options.title:image.attr(options.titleAttr);
            if (title) {
                var span = $('<span class="'+options.titleClass+'">'+title+'</span>');
                if (containerDims.innerHeight>ih) span.css('top',containerDims.innerHeight-ih);
                else span.css('top','0px');
                container.append(span);
                var tit = getHiddenDims(span);
                var im = getHiddenDims(image);
                debugObject('decorate containerDims',containerDims);
                debugObject('decorate imageDims',imageDims);
                debugObject('decorate imageDims',im);
                debugObject('decorate tit',tit);
                var outbound = containerDims.offsetTop+containerDims.innerHeight-tit.offsetTop;
                if (containerDims.height>containerDims.innerHeight) {
                    outbound+=(containerDims.height-containerDims.innerHeight)/2
                }
                span.css('top','+='+outbound);
                
                if (iw < tit.width) span.css('width',iw);
                if (left > 0) span.css('left',left);
                
                var delta = tit.height;
                if (containerDims.innerHeight>ih && diff!='bottom') {
                    delta += (containerDims.innerHeight-ih)/((diff=='top')?1:2);
                }
                
                var clone = span.clone();
                clone.css('width','auto').css('display','none').css('position','absolute');
                container.append(clone);
                var cloneDims = getHiddenDims(clone);
                clone.remove();
                debugObject('decorate cloneDims',cloneDims);
                
                if (options.titleWhen=='hover') {
                    container.unbind('mouseenter mouseleave').hover(function(){
                        span.find('span.'+options.titleScrollerClass).css('left',0);
                        containerDims = getHiddenDims(container);
                        tit = getHiddenDims(span);
                        outbound = containerDims.offsetTop+containerDims.innerHeight-tit.offsetTop;
                        if (containerDims.height>containerDims.innerHeight) {
                            outbound+=(containerDims.height-containerDims.innerHeight)/2
                        }
                        debugObject('decorate hover tit',tit);
                        debug('decorate hover outbound',tit);
                        var doubleDelta = 0;
                        if (outbound<0) {
                            span.css('top','+='+outbound);
                            doubleDelta = delta;
                        } else {
                            doubleDelta = delta-outbound;
                        }
                        if(options.animateTitle) {
                            resetScrollTitle(span,options);
                            span.stop(true).animate({
                                top:'-='+doubleDelta
                            },options.titleAnimationTime,options.titleAnimation,function(){
                                scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                            });
                        } else {
                            span.css({
                                top:'-='+doubleDelta
                            });
                            scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                        }
                    },function(){
                        if(options.animateTitle) {
                            resetScrollTitle(span,options);
                            span.animate({
                                top:'+='+delta
                            },options.titleAnimationTime,options.titleAnimation,function(){
                                resetScrollTitle(span,options);
                            });
                        } else {
                            resetScrollTitle(span,options);
                            span.css({
                                top:'+='+delta
                            });
                        }
                    });
                } else {
                    if(options.animateTitle) {
                        span.animate({
                            top:'-='+delta
                        },options.titleAnimationTime,options.titleAnimation,function(){
                            scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                        });
                    } else {
                        span.css({
                            top:'-='+delta
                        });
                        scrollTitle(span, cloneDims.width, containerDims.innerWidth, options);
                    }
                }
            }
        }
        if (options.onFinish) options.onFinish(container,options);
        if (options.loadingClass) container.removeClass(options.loadingClass);
        image.data('nailthumb.working',null);
    };
    function resetScrollTitle(span,options) {
        span.find('span.'+options.titleScrollerClass).stop();
    };
    function scrollTitle(span, width, visibleWidth, options) {
        if (width > visibleWidth && options.titleScrolling) {
            if (span.find('span.'+options.titleScrollerClass).length==0) {
                span.wrapInner('<span class="'+options.titleScrollerClass+'" />');
                span.find('span.'+options.titleScrollerClass).width(width).css('position','relative').css('white-space','nowrap');
            }
            span.find('span.'+options.titleScrollerClass).css('left',0);
            setTimeout(scrollFunction(span, width, visibleWidth, options),1000);
        }
    };
    function scrollFunction(span, width, visibleWidth, options) {
        return function() {
            var indent = Number(span.find('span.'+options.titleScrollerClass).css('left').replace(/[^-\d]/g,''));
            debug('indent',indent);
            debug('width',width);
            debug('visibleWidth',visibleWidth);
            debug('width <= -indent',(width <= -indent));
            var delta = width + indent;
            if (delta <= 0) {
                span.find('span.'+options.titleScrollerClass).css('left',visibleWidth);
                delta = width + visibleWidth;
            }
            delta += 10;
            span.find('span.'+options.titleScrollerClass).animate({
                'left':'-='+delta
            },width*1000/30,'linear',scrollFunction(span, width, visibleWidth, options));
        };
    };
    function getProportion(containerDims, imageDims, options) {
        if (options.proportions != null && options.proportions > 0) {
            return options.proportions;
        } else {
            var prop = containerDims.innerWidth/imageDims.width;
            if (options.method && options.method=='resize') {
                if (containerDims.innerHeight/imageDims.height < prop) {
                    prop = containerDims.innerHeight/imageDims.height;
                }
            } else {
                if (containerDims.innerHeight/imageDims.height > prop) {
                    prop = containerDims.innerHeight/imageDims.height;
                }
            }
            if (options.maxEnlargement && options.maxEnlargement < prop) prop = options.maxEnlargement;
            if (options.maxShrink && options.maxShrink > prop) prop = options.maxShrink;
            return prop;
        }
    };
    function getDirections(option) {
        var dir = {
            h:'center',
            v:'center'
        };
        if (option) {
            var opts = option.split(' ');
            if (opts.length > 0) {
                dir = getDirection(opts[0],dir);
            }
            if (opts.length > 1) {
                dir = getDirection(opts[1],dir);
            }
        }
        return dir;
    };
    function getDirection(str,d) {
        switch (str) {
            case 'top':
                d.v = 'top';
                break;
            case 'bottom':
                d.v = 'bottom';
                break;
            case 'left':
                d.h = 'left';
                break;
            case 'right':
                d.h = 'right';
                break;
            default:
                break;
        }
        return d;
    };
    function getImageDims(image,options) {
        var imageDims;
        if (!image.data('nailthumb.originalImageDims') ) {
            imageDims = getHiddenDims(image);
            image.data('nailthumb.originalImageDims',imageDims);
            if (!options.keepImageDimensions) {
                image.one('load',function(){
                    image.data('nailthumb.originalImageDims',null);
                });
            }
        } else {
            imageDims = image.data('nailthumb.originalImageDims');
        }
        return imageDims;
    };
    function getContainerDims(container,options) {
        var containerDims = getHiddenDims(container)
        if (options.width) containerDims.innerWidth = options.width;
        if (options.height) containerDims.innerHeight = options.height;
        return containerDims;
    };
    function getDims(elem) {
        var offset = $(elem).offset();
        return {
            offsetTop: offset.top,
            offsetLeft: offset.left,
            width: $(elem).outerWidth(),
            height: $(elem).outerHeight(),
            innerWidth: $(elem).innerWidth(),
            innerHeight: $(elem).innerHeight()
        };
    };
    function getHiddenDims(elems) {
        var dims = null, i = 0, offset, elem;

        while ((elem = elems[i++])) {
            var hiddenElems = $(elem).parents().andSelf().filter(':hidden');
            if ( ! hiddenElems.length ) {
                dims = getDims(elem);
            } else {
                var backupStyle = [];
                hiddenElems.each( function() {
                    var style = $(this).attr('style');
                    style = typeof style == 'undefined'? '': style;
                    backupStyle.push( style );
                    $(this).attr( 'style', style + ' display: block !important;' );
                });

                hiddenElems.eq(0).css( 'left', -10000 );

                dims = getDims(elem);

                hiddenElems.each( function() {
                    $(this).attr( 'style', backupStyle.shift() );
                });
            }
            
        }

        return dims;
    };
    function getHiddenCloneDims(elems) {
        var dims = null, i = 0, offset, elem;

        while ((elem = elems[i++])) {
            var hiddenElems = $(elem).parents().andSelf().filter(':hidden');
            if ( ! hiddenElems.length ) {
                dims = getDims(elem);
            } else {
                var backupStyle = [];
                hiddenElems.each( function() {
                    var style = $(this).attr('style');
                    style = typeof style == 'undefined'? '': style;
                    backupStyle.push( style );
                    $(this).attr( 'style', style + ' display: block !important;' );
                });

                hiddenElems.eq(0).css( 'left', -10000 );
                
                var clone = hiddenElems.eq(0).clone();
                $('body').append(clone);

                dims = getDims(clone);

                hiddenElems.each( function() {
                    $(this).attr( 'style', backupStyle.shift() );
                });
                clone.remove();
            }
            
        }

        return dims;
    };
    $.fn.nailthumb.evalServerSideParams = function(image,container,options) {
        if (options.serverSideParams) {
            var params = {};
            if (!options.serverSideParams.noServerResize) {
                var w = null, h = null;
                if (options.serverSideParams.width) w = options.serverSideParams.width;
                else if (options.width) w = options.width;
                if (options.serverSideParams.height) h = options.serverSideParams.height;
                else if (options.height) h = options.height;
                if (!(w && h)) {
                    resetContainer(container,options);
                    var containerDims = getContainerDims(container,options);
                    w = containerDims.innerWidth;
                    h = containerDims.innerHeight;
                }
                if (w && h) {
                    params.w = w;
                    params.h = h;
                    if (options.serverSideParams.mode!='resize') {
                        if (options.method=='crop') params.mode = 'crop';
                        if (options.serverSideParams.mode) params.mode = options.serverSideParams.mode;
                    }
                }
            }
            
            $.each(options.serverSideParams, function(key,val) {
                if (key!='width' && key!='height' && key!='mode' && key!='noServerResize' && val) {
                    params[key]=val;
                }
            });
            var pars = "";
            $.each(params, function(key,val) {
                pars+=";"+key+"="+val;
            });
            debug(pars,params);
            return pars;
        } else {
            return "";
        }
    };
    $.fn.nailthumb.setServerSideParams = function(image,container,options) {
        if (options.serverSideParams) {
            var url = image.attr("src");
            if (image.data('nailthumb.originalImageUrl')) {
                url = image.data('nailthumb.originalImageUrl');
            }
            image.data('nailthumb.originalImageUrl',url);
            var pars = $.fn.nailthumb.evalServerSideParams(image,container,options);
            url += pars;
            image.attr("src",url);
        }
    };
    $.fn.nailthumb.toggleDebug = function() {
        DEBUG = !DEBUG;
    };
    $.fn.nailthumb.doThumb = function(image,container,options) {
        doThumb(image,container,options);
    };
    $.fn.nailthumb.defaults = {
        onStart: null,
        onFinish: null,
        loadingClass: 'nailthumb-loading',
        imageUrl: null,
        imageFromWrappingLink: false,
        imageCustomFinder: null/*function(element,options){
            return null;
        }*/,
        imageClass:'nailthumb-image',
        afterReplace: null,
        afterAppear: null,
        replaceAnimation: 'fade',
        selfStartAfterAppear: false,
        animationTime: 1000,
        animation: 'swing',
        keepImageDimensions: false,
        method: 'crop',
        fitDirection: null,
        proportions: null,
        ifImageAddContainer: true,
        containerClass: 'nailthumb-container',
        maxEnlargement: null,
        maxShrink: null,
        preload: true,
        nostyle: false,
        width: null,
        height: null,
        title: null,
        titleClass: 'nailthumb-title',
        titleAttr: 'title',
        titleWhen: 'hover',
        titleScrolling: true,
        titleScrollerClass: 'nailthumb-title-scroller',
        animateTitle: true,
        titleAnimationTime: 500,
        titleAnimation: 'swing',
        serverSideParams: null
    };
    function log(log, jQueryobj) {
        try {
            debug(log, jQueryobj, true);
        } catch(ex) {}
    };
    function debug(log, jQueryobj, force) {
        try {
            if ((DEBUG && window.console && window.console.log) || force)
                window.console.log(log + ': ' + jQueryobj);
        } catch(ex) {}
    };
    function debugObject(log, jQueryobj, force) {
        try {
            if (!jQueryobj) jQueryobj=log;
            debug(log, jQueryobj);
            if ((DEBUG && window.console && window.console.log) || force)
                window.console.debug(jQueryobj);
        } catch(ex) {}
    };
})(jQuery);
/*!
 * bootstrap-select v1.5.4
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */

!function($) {

    'use strict';

    $.expr[':'].icontains = function(obj, index, meta) {
        return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
    };

    var Selectpicker = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;
        this.$lis = null;

        //Merge defaults, options and data-attributes to make our options
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

        //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
        if (this.options.title === null) {
            this.options.title = this.$element.attr('title');
        }

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function() {
            var that = this,
                id = this.$element.attr('id');

            this.$element.hide();
            this.multiple = this.$element.prop('multiple');
            this.autofocus = this.$element.prop('autofocus');
            this.$newElement = this.createView();
            this.$element.after(this.$newElement);
            this.$menu = this.$newElement.find('> .dropdown-menu');
            this.$button = this.$newElement.find('> button');
            this.$searchbox = this.$newElement.find('input');

            if (id !== undefined) {
                this.$button.attr('data-id', id);
                $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault();
                    that.$button.focus();
                });
            }

            this.checkDisabled();
            this.clickListener();
            if (this.options.liveSearch) this.liveSearchListener();
            this.render();
            this.liHeight();
            this.setStyle();
            this.setWidth();
            if (this.options.container) this.selectPosition();
            this.$menu.data('this', this);
            this.$newElement.data('this', this);
        },

        createDropdown: function() {
            //If we are multiple, then add the show-tick class by default
            var multiple = this.multiple ? ' show-tick' : '';
            var inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '';
            var autofocus = this.autofocus ? ' autofocus' : '';
            var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
            var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : '';
            var actionsbox = this.options.actionsBox ? '<div class="bs-actionsbox">' +
                                '<div class="btn-group btn-block">' +
                                    '<button class="actions-btn bs-select-all btn btn-sm btn-default">' +
                                        'Select All' +
                                    '</button>' +
                                    '<button class="actions-btn bs-deselect-all btn btn-sm btn-default">' +
                                        'Deselect All' +
                                    '</button>' +
                                  '</div>' +
                            '</div>' : '';
            var drop =
                '<div class="btn-group bootstrap-select' + multiple + inputGroup + '">' +
                    '<button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"'+ autofocus +'>' +
                        '<span class="filter-option pull-left"></span>&nbsp;' +
                        '<span class="caret"></span>' +
                    '</button>' +
                    '<div class="dropdown-menu open">' +
                        header +
                        searchbox +
                        actionsbox +
                        '<ul class="dropdown-menu inner selectpicker" role="menu">' +
                        '</ul>' +
                    '</div>' +
                '</div>';

            return $(drop);
        },

        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find('ul').append($li);
            return $drop;
        },

        reloadLi: function() {
            //Remove all children.
            this.destroyLi();
            //Re build
            var $li = this.createLi();
            this.$menu.find('ul').append( $li );
        },

        destroyLi: function() {
            this.$menu.find('li').remove();
        },

        createLi: function() {
            var that = this,
                _liA = [],
                _liHtml = '';

            this.$element.find('option').each(function() {
                var $this = $(this);

                //Get the class and text for the option
                var optionClass = $this.attr('class') || '';
                var inline = $this.attr('style') || '';
                var text =  $this.data('content') ? $this.data('content') : $this.html();
                var subtext = $this.data('subtext') !== undefined ? '<small class="muted text-muted">' + $this.data('subtext') + '</small>' : '';
                var icon = $this.data('icon') !== undefined ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
                if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    icon = '<span>'+icon+'</span>';
                }

                if (!$this.data('content')) {
                    //Prepend any icon and append any subtext to the main text.
                    text = icon + '<span class="text">' + text + subtext + '</span>';
                }

                if (that.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    _liA.push('<a style="min-height: 0; padding: 0"></a>');
                } else if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
                    if ($this.index() === 0) {
                        //Get the opt group label
                        var label = $this.parent().attr('label');
                        var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted text-muted">'+$this.parent().data('subtext')+'</small>' : '';
                        var labelIcon = $this.parent().data('icon') ? '<i class="'+$this.parent().data('icon')+'"></i> ' : '';
                        label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

                        if ($this[0].index !== 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+label+'</dt>'+
                                that.createA(text, 'opt ' + optionClass, inline )
                                );
                        } else {
                            _liA.push(
                                '<dt>'+label+'</dt>'+
                                that.createA(text, 'opt ' + optionClass, inline ));
                        }
                    } else {
                         _liA.push(that.createA(text, 'opt ' + optionClass, inline ));
                    }
                } else if ($this.data('divider') === true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else if ($(this).data('hidden') === true) {
                    _liA.push('<a></a>');
                } else {
                    _liA.push(that.createA(text, optionClass, inline ));
                }
            });

            $.each(_liA, function(i, item) {
                var hide = item === '<a></a>' ? 'class="hide is-hidden"' : '';
                _liHtml += '<li rel="' + i + '"' + hide + '>' + item + '</li>';
            });

            //If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if (!this.multiple && this.$element.find('option:selected').length===0 && !this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return $(_liHtml);
        },

        createA: function(text, classes, inline) {
            return '<a tabindex="0" class="'+classes+'" style="'+inline+'">' +
                 text +
                 '<i class="' + this.options.iconBase + ' ' + this.options.tickIcon + ' icon-ok check-mark"></i>' +
                 '</a>';
        },

        render: function(updateLi) {
            var that = this;

            //Update the LI to match the SELECT
            if (updateLi !== false) {
                this.$element.find('option').each(function(index) {
                   that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
                   that.setSelected(index, $(this).is(':selected') );
                });
            }

            this.tabIndex();

            var selectedItems = this.$element.find('option:selected').map(function() {
                var $this = $(this);
                var icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '';
                var subtext;
                if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
                    subtext = ' <small class="muted text-muted">'+$this.data('subtext') +'</small>';
                } else {
                    subtext = '';
                }
                if ($this.data('content') && that.options.showContent) {
                    return $this.data('content');
                } else if ($this.attr('title') !== undefined) {
                    return $this.attr('title');
                } else {
                    return icon + $this.html() + subtext;
                }
            }).toArray();

            //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
            //Convert all the values into a comma delimited string
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
            if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = this.options.selectedTextFormat.split('>');
                var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
                if ( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length);
                }
             }
            
            this.options.title = this.$element.attr('title');

            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if (!title) {
                title = this.options.title !== undefined ? this.options.title : this.options.noneSelectedText;
            }

            this.$button.attr('title', $.trim(title));
            this.$newElement.find('.filter-option').html(title);
        },

        setStyle: function(style, status) {
            if (this.$element.attr('class')) {
                this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device/gi, ''));
            }

            var buttonClass = style ? style : this.options.style;

            if (status == 'add') {
                this.$button.addClass(buttonClass);
            } else if (status == 'remove') {
                this.$button.removeClass(buttonClass);
            } else {
                this.$button.removeClass(this.options.style);
                this.$button.addClass(buttonClass);
            }
        },

        liHeight: function() {
            if (this.options.size === false) return;
            
            var $selectClone = this.$menu.parent().clone().find('> .dropdown-toggle').prop('autofocus', false).end().appendTo('body'),
                $menuClone = $selectClone.addClass('open').find('> .dropdown-menu'),
                liHeight = $menuClone.find('li > a').outerHeight(),
                headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0,
                searchHeight = this.options.liveSearch ? $menuClone.find('.bootstrap-select-searchbox').outerHeight() : 0,
                actionsHeight = this.options.actionsBox ? $menuClone.find('.bs-actionsbox').outerHeight() : 0;
            
            $selectClone.remove();
            
            this.$newElement
                .data('liHeight', liHeight)
                .data('headerHeight', headerHeight)
                .data('searchHeight', searchHeight)
                .data('actionsHeight', actionsHeight);
        },

        setSize: function() {
            var that = this,
                menu = this.$menu,
                menuInner = menu.find('.inner'),
                selectHeight = this.$newElement.outerHeight(),
                liHeight = this.$newElement.data('liHeight'),
                headerHeight = this.$newElement.data('headerHeight'),
                searchHeight = this.$newElement.data('searchHeight'),
                actionsHeight = this.$newElement.data('actionsHeight'),
                divHeight = menu.find('li .divider').outerHeight(true),
                menuPadding = parseInt(menu.css('padding-top')) +
                              parseInt(menu.css('padding-bottom')) +
                              parseInt(menu.css('border-top-width')) +
                              parseInt(menu.css('border-bottom-width')),
                notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '',
                $window = $(window),
                menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
                menuHeight,
                selectOffsetTop,
                selectOffsetBot,
                posVert = function() {
                    selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
                    selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
                };
                posVert();
                if (this.options.header) menu.css('padding-top', 0);

            if (this.options.size == 'auto') {
                var getSize = function() {
                    var minHeight,
                        lisVis = that.$lis.not('.hide');
                    
                    posVert();
                    menuHeight = selectOffsetBot - menuExtras;

                    if (that.options.dropupAuto) {
                        that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && ((menuHeight - menuExtras) < menu.height()));
                    }
                    if (that.$newElement.hasClass('dropup')) {
                        menuHeight = selectOffsetTop - menuExtras;
                    }
                    
                    if ((lisVis.length + lisVis.find('dt').length) > 3) {
                        minHeight = liHeight*3 + menuExtras - 2;
                    } else {
                        minHeight = 0;
                    }
                    
                    menu.css({'max-height' : menuHeight + 'px', 'overflow' : 'hidden', 'min-height' : minHeight + headerHeight + searchHeight + actionsHeight + 'px'});
                    menuInner.css({'max-height' : menuHeight - headerHeight - searchHeight - actionsHeight - menuPadding + 'px', 'overflow-y' : 'auto', 'min-height' : Math.max(minHeight - menuPadding, 0) + 'px'});
                };
                getSize();
                this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
                $(window).off('resize.getSize').on('resize.getSize', getSize);
                $(window).off('scroll.getSize').on('scroll.getSize', getSize);
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li'+notDisabled).length > this.options.size) {
                var optIndex = menu.find('li'+notDisabled+' > *').filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
                var divLength = menu.find('li').slice(0,optIndex + 1).find('.div-contain').length;
                menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
                if (that.options.dropupAuto) {
                    this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight < menu.height()));
                }
                menu.css({'max-height' : menuHeight + headerHeight + searchHeight + actionsHeight + 'px', 'overflow' : 'hidden'});
                menuInner.css({'max-height' : menuHeight - menuPadding + 'px', 'overflow-y' : 'auto'});
            }
        },

        setWidth: function() {
            if (this.options.width == 'auto') {
                this.$menu.css('min-width', '0');

                // Get correct width if element hidden
                var selectClone = this.$newElement.clone().appendTo('body');
                var ulWidth = selectClone.find('> .dropdown-menu').css('width');
                var btnWidth = selectClone.css('width', 'auto').find('> button').css('width');
                selectClone.remove();
                
                // Set width to whatever's larger, button title or longest option
                this.$newElement.css('width', Math.max(parseInt(ulWidth), parseInt(btnWidth)) + 'px');
            } else if (this.options.width == 'fit') {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '').addClass('fit-width');
            } else if (this.options.width) {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', this.options.width);
            } else {
                // Remove inline min-width/width so width can be changed
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '');
            }
            // Remove fit-width class if width is changed programmatically
            if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
                this.$newElement.removeClass('fit-width');
            }
        },

        selectPosition: function() {
            var that = this,
                drop = '<div />',
                $drop = $(drop),
                pos,
                actualHeight,
                getPlacement = function($element) {
                    $drop.addClass($element.attr('class').replace(/form-control/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
                    pos = $element.offset();
                    actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
                    $drop.css({'top' : pos.top + actualHeight, 'left' : pos.left, 'width' : $element[0].offsetWidth, 'position' : 'absolute'});
                };
            this.$newElement.on('click', function() {
                if (that.isDisabled()) {
                    return;
                }
                getPlacement($(this));
                $drop.appendTo(that.options.container);
                $drop.toggleClass('open', !$(this).hasClass('open'));
                $drop.append(that.$menu);
            });
            $(window).resize(function() {
                getPlacement(that.$newElement);
            });
            $(window).on('scroll', function() {
                getPlacement(that.$newElement);
            });
            $('html').on('click', function(e) {
                if ($(e.target).closest(that.$newElement).length < 1) {
                    $drop.removeClass('open');
                }
            });
        },

        mobile: function() {
            this.$element.addClass('mobile-device').appendTo(this.$newElement);
            if (this.options.container) this.$menu.hide();
        },

        refresh: function() {
            this.$lis = null;
            this.reloadLi();
            this.render();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },
        
        update: function() {
            this.reloadLi();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },

        setSelected: function(index, selected) {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            $(this.$lis[index]).toggleClass('selected', selected);
        },

        setDisabled: function(index, disabled) {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            if (disabled) {
                $(this.$lis[index]).addClass('disabled').find('a').attr('href', '#').attr('tabindex', -1);
            } else {
                $(this.$lis[index]).removeClass('disabled').find('a').removeAttr('href').attr('tabindex', 0);
            }
        },

        isDisabled: function() {
            return this.$element.is(':disabled');
        },

        checkDisabled: function() {
            var that = this;

            if (this.isDisabled()) {
                this.$button.addClass('disabled').attr('tabindex', -1);
            } else {
                if (this.$button.hasClass('disabled')) {
                    this.$button.removeClass('disabled');
                }

                if (this.$button.attr('tabindex') == -1) {
                    if (!this.$element.data('tabindex')) this.$button.removeAttr('tabindex');
                }
            }

            this.$button.click(function() {
                return !that.isDisabled();
            });
        },

        tabIndex: function() {
            if (this.$element.is('[tabindex]')) {
                this.$element.data('tabindex', this.$element.attr('tabindex'));
                this.$button.attr('tabindex', this.$element.data('tabindex'));
            }
        },

        clickListener: function() {
            var that = this;

            $('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
                e.stopPropagation();
            });

            this.$newElement.on('click', function() {
                that.setSize();
                if (!that.options.liveSearch && !that.multiple) {
                    setTimeout(function() {
                        that.$menu.find('.selected a').focus();
                    }, 10);
                }
            });

            this.$menu.on('click', 'li a', function(e) {
                var clickedIndex = $(this).parent().index(),
                    prevValue = that.$element.val(),
                    prevIndex = that.$element.prop('selectedIndex');

                //Dont close on multi choice menu
                if (that.multiple) {
                    e.stopPropagation();
                }

                e.preventDefault();

                //Dont run if we have been disabled
                if (!that.isDisabled() && !$(this).parent().hasClass('disabled')) {
                    var $options = that.$element.find('option'),
                        $option = $options.eq(clickedIndex),
                        state = $option.prop('selected'),
                        $optgroup = $option.parent('optgroup'),
                        maxOptions = that.options.maxOptions,
                        maxOptionsGrp = $optgroup.data('maxOptions') || false;

                    //Deselect all others if not multi select box
                    if (!that.multiple) {
                        $options.prop('selected', false);
                        $option.prop('selected', true);
                        that.$menu.find('.selected').removeClass('selected');
                        that.setSelected(clickedIndex, true);
                    }
                    //Else toggle the one we have chosen if we are multi select.
                    else {                        
                        $option.prop('selected', !state);
                        that.setSelected(clickedIndex, !state);
                        
                        if ((maxOptions !== false) || (maxOptionsGrp !== false)) {
                            var maxReached = maxOptions < $options.filter(':selected').length,
                                maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length,
                                maxOptionsArr = that.options.maxOptionsText,
                                maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                                maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                                $notify = $('<div class="notify"></div>');
                            
                            if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {                                
                                // If {var} is set in array, replace it
                                if (maxOptionsArr[2]) {
                                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                                }
    
                                $option.prop('selected', false);
                                
                                that.$menu.append($notify);
                                
                                if (maxOptions && maxReached) {
                                    $notify.append($('<div>' + maxTxt + '</div>'));
                                    that.$element.trigger('maxReached.bs.select');
                                }
                                
                                if (maxOptionsGrp && maxReachedGrp) {
                                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                                    that.$element.trigger('maxReachedGrp.bs.select');
                                }
                                
                                setTimeout(function() {
                                    that.setSelected(clickedIndex, false);
                                }, 10);
                                
                                $notify.delay(750).fadeOut(300, function() { $(this).remove(); });
                            }
                        }
                    }

                    if (!that.multiple) {
                        that.$button.focus();
                    } else if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    }

                    // Trigger select 'change'
                    if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
                        that.$element.change();
                    }
                }
            });

            this.$menu.on('click', 'li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)', function(e) {
                if (e.target == this) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!that.options.liveSearch) {
                        that.$button.focus();
                    } else {
                        that.$searchbox.focus();
                    }
                }
            });
            
            this.$menu.on('click', '.popover-title .close', function() {
                that.$button.focus();
            });

            this.$searchbox.on('click', function(e) {
                e.stopPropagation();
            });
            

            this.$menu.on('click', '.actions-btn', function(e) {
                if (that.options.liveSearch) {
                    that.$searchbox.focus();
                } else {
                    that.$button.focus();
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                if ($(this).is('.bs-select-all')) {
                    that.selectAll();
                } else {
                    that.deselectAll();
                }
                that.$element.change();
            });

            this.$element.change(function() {
                that.render(false);
            });
        },

        liveSearchListener: function() {
            var that = this,
                no_results = $('<li class="no-results"></li>');

            this.$newElement.on('click.dropdown.data-api', function() {
                that.$menu.find('.active').removeClass('active');
                if (!!that.$searchbox.val()) {
                    that.$searchbox.val('');
                    that.$lis.not('.is-hidden').removeClass('hide');
                    if (!!no_results.parent().length) no_results.remove();
                }
                if (!that.multiple) that.$menu.find('.selected').addClass('active');
                setTimeout(function() {
                    that.$searchbox.focus();
                }, 10);
            });

            this.$searchbox.on('input propertychange', function() {
                if (that.$searchbox.val()) {
                    that.$lis.not('.is-hidden').removeClass('hide').find('a').not(':icontains(' + that.$searchbox.val() + ')').parent().addClass('hide');
                    
                    if (!that.$menu.find('li').filter(':visible:not(.no-results)').length) {
                        if (!!no_results.parent().length) no_results.remove();
                        no_results.html(that.options.noneResultsText + ' "'+ that.$searchbox.val() + '"').show();
                        that.$menu.find('li').last().after(no_results);
                    } else if (!!no_results.parent().length) {
                        no_results.remove();
                    }
                    
                } else {
                    that.$lis.not('.is-hidden').removeClass('hide');
                    if (!!no_results.parent().length) no_results.remove();
                }

                that.$menu.find('li.active').removeClass('active');
                that.$menu.find('li').filter(':visible:not(.divider)').eq(0).addClass('active').find('a').focus();
                $(this).focus();
            });
            
            this.$menu.on('mouseenter', 'a', function(e) {
              that.$menu.find('.active').removeClass('active');
              $(e.currentTarget).parent().not('.disabled').addClass('active');
            });
            
            this.$menu.on('mouseleave', 'a', function() {
              that.$menu.find('.active').removeClass('active');
            });
        },

        val: function(value) {

            if (value !== undefined) {
                this.$element.val( value );

                this.$element.change();
                return this.$element;
            } else {
                return this.$element.val();
            }
        },

        selectAll: function() {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            this.$element.find('option:enabled').prop('selected', true);
            $(this.$lis).filter(':not(.disabled)').addClass('selected');
            this.render(false);
        },

        deselectAll: function() {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            this.$element.find('option:enabled').prop('selected', false);
            $(this.$lis).filter(':not(.disabled)').removeClass('selected');
            this.render(false);
        },

        keydown: function(e) {
            var $this,
                $items,
                $parent,
                index,
                next,
                first,
                last,
                prev,
                nextPrev,
                that,
                prevIndex,
                isActive,
                keyCodeMap = {
                    32:' ', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 59:';',
                    65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l',
                    77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x',
                    89:'y', 90:'z', 96:'0', 97:'1', 98:'2', 99:'3', 100:'4', 101:'5', 102:'6', 103:'7', 104:'8', 105:'9'
                };

            $this = $(this);

            $parent = $this.parent();
            
            if ($this.is('input')) $parent = $this.parent().parent();

            that = $parent.data('this');
            
            if (that.options.liveSearch) $parent = $this.parent().parent();

            if (that.options.container) $parent = that.$menu;

            $items = $('[role=menu] li:not(.divider) a', $parent);
            
            isActive = that.$menu.parent().hasClass('open');

            if (!isActive && /([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))) {
                if (!that.options.container) {
                    that.setSize();
                    that.$menu.parent().addClass('open');
                    isActive = that.$menu.parent().hasClass('open');
                } else {
                    that.$newElement.trigger('click');
                }
                that.$searchbox.focus();
            }
            
            if (that.options.liveSearch) {
                if (/(^9$|27)/.test(e.keyCode) && isActive && that.$menu.find('.active').length === 0) {
                    e.preventDefault();
                    that.$menu.parent().removeClass('open');
                    that.$button.focus();
                }
                $items = $('[role=menu] li:not(.divider):visible', $parent);
                if (!$this.val() && !/(38|40)/.test(e.keyCode)) {
                    if ($items.filter('.active').length === 0) {
                        $items = that.$newElement.find('li').filter(':icontains(' + keyCodeMap[e.keyCode] + ')');
                    }
                }
            }

            if (!$items.length) return;

            if (/(38|40)/.test(e.keyCode)) {
                
                index = $items.index($items.filter(':focus'));
                first = $items.parent(':not(.disabled):visible').first().index();
                last = $items.parent(':not(.disabled):visible').last().index();
                next = $items.eq(index).parent().nextAll(':not(.disabled):visible').eq(0).index();
                prev = $items.eq(index).parent().prevAll(':not(.disabled):visible').eq(0).index();
                nextPrev = $items.eq(next).parent().prevAll(':not(.disabled):visible').eq(0).index();
                
                if (that.options.liveSearch) {
                    $items.each(function(i) {
                        if ($(this).is(':not(.disabled)')) {
                            $(this).data('index', i);
                        }
                    });
                    index = $items.index($items.filter('.active'));
                    first = $items.filter(':not(.disabled):visible').first().data('index');
                    last = $items.filter(':not(.disabled):visible').last().data('index');
                    next = $items.eq(index).nextAll(':not(.disabled):visible').eq(0).data('index');
                    prev = $items.eq(index).prevAll(':not(.disabled):visible').eq(0).data('index');
                    nextPrev = $items.eq(next).prevAll(':not(.disabled):visible').eq(0).data('index');
                }
                
                prevIndex = $this.data('prevIndex');
                
                if (e.keyCode == 38) {
                    if (that.options.liveSearch) index -= 1;
                    if (index != nextPrev && index > prev) index = prev;
                    if (index < first) index = first;
                    if (index == prevIndex) index = last;
                }

                if (e.keyCode == 40) {
                    if (that.options.liveSearch) index += 1;
                    if (index == -1) index = 0;
                    if (index != nextPrev && index < next) index = next;
                    if (index > last) index = last;
                    if (index == prevIndex) index = first;
                }

                $this.data('prevIndex', index);
                
                if (!that.options.liveSearch) {
                    $items.eq(index).focus();
                } else {
                    e.preventDefault();
                    if (!$this.is('.dropdown-toggle')) {
                        $items.removeClass('active');
                        $items.eq(index).addClass('active').find('a').focus();
                        $this.focus();
                    }
                }
                
            } else if (!$this.is('input')) {

                var keyIndex = [],
                    count,
                    prevKey;

                $items.each(function() {
                    if ($(this).parent().is(':not(.disabled)')) {
                        if ($.trim($(this).text().toLowerCase()).substring(0,1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push($(this).parent().index());
                        }
                    }
                });

                count = $(document).data('keycount');
                count++;
                $(document).data('keycount',count);

                prevKey = $.trim($(':focus').text().toLowerCase()).substring(0,1);

                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data('keycount', count);
                } else if (count >= keyIndex.length) {
                    $(document).data('keycount', 0);
                    if (count > keyIndex.length) count = 1;
                }

                $items.eq(keyIndex[count - 1]).focus();
            }

            // Select focused option if "Enter", "Spacebar", "Tab" are pressed inside the menu.
            if (/(13|32|^9$)/.test(e.keyCode) && isActive) {
                if (!/(32)/.test(e.keyCode)) e.preventDefault();
                if (!that.options.liveSearch) {
                    $(':focus').click();
                } else if (!/(32)/.test(e.keyCode)) {
                    that.$menu.find('.active a').click();
                    $this.focus();
                }
                $(document).data('keycount',0);
            }
            
            if ((/(^9$|27)/.test(e.keyCode) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode) && !isActive)) {
                that.$menu.parent().removeClass('open');
                that.$button.focus();
            }

        },

        hide: function() {
            this.$newElement.hide();
        },

        show: function() {
            this.$newElement.show();
        },

        destroy: function() {
            this.$newElement.remove();
            this.$element.remove();
        }
    };

    $.fn.selectpicker = function(option, event) {
       //get the args of the outer function..
       var args = arguments;
       var value;
       var chain = this.each(function() {
            if ($(this).is('select')) {
                var $this = $(this),
                    data = $this.data('selectpicker'),
                    options = typeof option == 'object' && option;

                if (!data) {
                    $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
                } else if (options) {
                    for(var i in options) {
                       data.options[i] = options[i];
                    }
                }

                if (typeof option == 'string') {
                    //Copy the value of option, as once we shift the arguments
                    //it also shifts the value of option.
                    var property = option;
                    if (data[property] instanceof Function) {
                        [].shift.apply(args);
                        value = data[property].apply(data, args);
                    } else {
                        value = data.options[property];
                    }
                }
            }
        });

        if (value !== undefined) {
            return value;
        } else {
            return chain;
        }
    };

    $.fn.selectpicker.defaults = {
        style: 'btn-default',
        size: 'auto',
        title: null,
        selectedTextFormat : 'values',
        noneSelectedText : 'Select',
        noneResultsText : 'No results match',
        countSelectedText: '{0} of {1} selected',
        maxOptionsText: ['Limit reached ({n} {var} max)', 'Group limit reached ({n} {var} max)', ['items','item']],
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false,
        actionsBox: false,
        multipleSeparator: ', ',
        iconBase: 'glyphicon',
        tickIcon: 'glyphicon-ok',
        maxOptions: false
    };

    $(document)
        .data('keycount', 0)
        .on('keydown', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', Selectpicker.prototype.keydown)
        .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input', function (e) { e.stopPropagation(); });

}(window.jQuery);

// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: false,
  });
});
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#carousel-handymen').carousel({
    pause: true,
    interval: false,
  });
});

$(document).ready(function(){
    $(".social-links").tooltip();   
});
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

	



/* Defunctr 1.1.0 | MIT & BSD | Copyright 2013 Victoria French |  http://github.com/victoriafrench/defunctr */
window.Defunctr=(function(d,a,e){var b="1.1.0",c={};docElement=a.documentElement,docHead=a.head||a.getElementsByTagName("head")[0],defunctr="defunctr";prefix="",gtoff=docElement.className.indexOf("defunctr-gt-off")>0,ltoff=docElement.className.indexOf("defunctr-lt-off")>0,voff=docElement.className.indexOf("defunctr-version-off")>0,onlyie=docElement.className.indexOf("defunctr-ie-only")>0,tests=[];c.detective=(function(h,f,i){var g={};g.isOpera=(function(j,k){return !!(j.opera&&j.opera.version);})(h);g.isIE=(function(k,j,l,m){return"ActiveXObject" in l;})(g,f,h);g.isFirefox=(function(j,k){return"MozBoxSizing" in j.documentElement.style;})(f);g.isSafari=(function(j,k){return Object.prototype.toString.call(j.HTMLElement).indexOf("Constructor")>0;})(h);g.isChrome=(function(k,j,l){return !g.isSafari&&"WebkitTransform" in j.documentElement.style;})(g,f);g.isKhtml=(function(j,k){return"KhtmlMarquee" in j.documentElement.style;})(f);g.ieBelowVersion6=(function(k,j,l){return g.isIE&&!(j.compatMode!=l);})(g,f);g.ieBelowVersion7=(function(j,k,l){return g.isIE&&!(k.XMLHttpRequest!=l);})(g,h);g.ieBelowVersion8=(function(k,j,l){return g.isIE&&!(j.querySelector!=l);})(g,f);g.ieBelowVersion9=(function(k,j,l){return g.isIE&&!(j.addEventListener!=l);})(g,f);g.ieBelowVersion10=(function(j,k,l){return g.isIE&&!(k.atob!=l);})(g,h);g.ieAboveVersion5=(function(j,k,l){return g.isIE&&(f.compatMode!=l);})(g,h);g.ieAboveVersion6=(function(j,k,l){return g.isIE&&(k.XMLHttpRequest!=l);})(g,h);g.ieAboveVersion7=(function(k,j,l){return g.isIE&&(j.querySelector!=l);})(g,f);g.ieAboveVersion8=(function(j,k,l){return g.isIE&&(f.addEventListener!=l);})(g,h);g.ieAboveVersion9=(function(j,k,l){return g.isIE&&(k.atob!=l);})(g,h);g.ieIsVersion6=(function(j,k){return g.ieAboveVersion5&&g.ieBelowVersion7;})(g);g.ieIsVersion7=(function(j,k){return g.ieAboveVersion6&&g.ieBelowVersion8;})(g);g.ieIsVersion8=(function(j,k){return g.ieAboveVersion7&&g.ieBelowVersion9;})(g);g.ieIsVersion9=(function(j,k){return g.ieAboveVersion8&&g.ieBelowVersion10;})(g);g.chromeIsAbove15=(function(j,k){return !!(j.chrome&&j.chrome.webstore&&j.chrome.webstore.install);})(h);g.standardsCompliant=(function(j,k){return g.ieAboveVersion9;})(g);return g;})(d,a);tests[prefix+"ie"]=function(){return c.detective.isIE;};if(!onlyie){tests[prefix+"webkit"]=function(){return c.detective.isChrome||c.detective.isSafari;};tests[prefix+"chrome"]=function(){return c.detective.isChrome;};tests[prefix+"safari"]=function(){return c.detective.isSafari;};tests[prefix+"opera"]=function(){return c.detective.isOpera;};tests[prefix+"firefox"]=function(){return c.detective.isFirefox;};tests[prefix+"khtml"]=function(){return c.detective.isKhtml;};}if(!ltoff){tests[prefix+"ie-lt-7"]=function(){return c.detective.ieBelowVersion7;};tests[prefix+"ie-lt-8"]=function(){return c.detective.ieBelowVersion8;};tests[prefix+"ie-lt-9"]=function(){return c.detective.ieBelowVersion9;};tests[prefix+"ie-lt-10"]=function(){return c.detective.ieBelowVersion10;};}if(!gtoff){tests[prefix+"ie-gt-6"]=function(){return c.detective.ieAboveVersion6;};tests[prefix+"ie-gt-7"]=function(){return c.detective.ieAboveVersion7;};tests[prefix+"ie-gt-8"]=function(){return c.detective.ieAboveVersion8;};tests[prefix+"ie-gt-9"]=function(){return c.detective.ieAboveVersion9;};}if(!voff){tests[prefix+"ie-version-7"]=function(){return c.detective.ieIsVersion7;};tests[prefix+"ie-version-8"]=function(){return c.detective.ieIsVersion8;};tests[prefix+"ie-version-9"]=function(){return c.detective.ieIsVersion9;};}c.version=b;for(key in tests){d.Modernizr.addTest(key,tests[key]);}docElement.className=docElement.className.replace(/\bdefunctr-gt-off\b/,"");docElement.className=docElement.className.replace(/\bdefunctr-lt-off\b/,"");docElement.className=docElement.className.replace(/\bdefunctr-version-off\b/,"");docElement.className=docElement.className.replace(/\bdefunctr-ie-only\b/,"");return c;})(this,this.document);
// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn'];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.NProgress=e()}(this,function(){var t,e,n={version:"0.2.0"},i=n.settings={minimum:.08,easing:"linear",positionUsing:"",speed:350,trickle:!0,trickleSpeed:250,showSpinner:!1,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function r(t,e,n){return t<e?e:t>n?n:t}function s(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(i[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=r(t,i.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(i.barSelector),h=i.speed,l=i.easing;return o(function(e){""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),a(c,function(t,e,n){var r;return(r="translate3d"===i.positionUsing?{transform:"translate3d("+s(t)+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+s(t)+"%,0)"}:{"margin-left":s(t)+"%"}).transition="all "+e+"ms "+n,r}(t,h,l)),1===t?(a(u,{transition:"none",opacity:1}),setTimeout(function(){a(u,{transition:"all "+h+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},h)},h)):setTimeout(e,h)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},i.trickleSpeed)};return i.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?e>1?void 0:("number"!=typeof t&&(t=e>=0&&e<.25?(3*Math.random()+3)/100:e>=.25&&e<.65?3*Math.random()/100:e>=.65&&e<.9?2*Math.random()/100:e>=.9&&e<.99?.005:0),e=r(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc()},t=0,e=0,n.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&n.start(),t++,e++,i.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var r,o=e.querySelector(i.barSelector),u=t?"-100":s(n.status||0),h=document.querySelector(i.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),i.showSpinner||(r=e.querySelector(i.spinnerSelector))&&p(r),h!=document.body&&c(h,"nprogress-custom-parent"),h.appendChild(e),e},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(i.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&p(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n,i,r){var s;s=(s=i).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),i=e[s]||(e[s]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+s)in n)return i;return e}(s)),n.style[i]=r}return function(t,e){var i,r,s=arguments;if(2==s.length)for(i in e)void 0!==(r=e[i])&&e.hasOwnProperty(i)&&n(t,i,r);else n(t,s[1],s[2])}}();function u(t,e){return("string"==typeof t?t:l(t)).indexOf(" "+e+" ")>=0}function c(t,e){var n=l(t),i=n+e;u(n,e)||(t.className=i.substring(1))}function h(t,e){var n,i=l(t);u(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function l(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function p(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n}),function(t,e,n,i){"use strict";function r(t,e,n){return setTimeout(c(t,n),e)}function s(t,e,n){return!!Array.isArray(t)&&(o(t,n[e],n),!0)}function o(t,e,n){var r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==i)for(r=0;r<t.length;)e.call(n,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)}function a(e,n,i){var r="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,i),e.apply(this,arguments)}}function u(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&Q(i,n)}function c(t,e){return function(){return t.apply(e,arguments)}}function h(t,e){return typeof t==nt?t.apply(e&&e[0]||i,e):t}function l(t,e){return t===i?e:t}function p(t,e,n){o(m(e),function(e){t.addEventListener(e,n,!1)})}function f(t,e,n){o(m(e),function(e){t.removeEventListener(e,n,!1)})}function d(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function v(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function g(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function y(t){return Array.prototype.slice.call(t,0)}function T(t,e,n){for(var i=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];g(r,o)<0&&i.push(t[s]),r[s]=o,s++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function E(t,e){for(var n,r,s=e[0].toUpperCase()+e.slice(1),o=0;o<tt.length;){if((r=(n=tt[o])?n+s:e)in t)return r;o++}return i}function S(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow||t}function b(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){h(t.options.enable,[t])&&n.handler(e)},this.init()}function I(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,s=e&vt&&i-r==0,o=e&(mt|gt)&&i-r==0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=C(e)),r>1&&!n.firstMultiple?n.firstMultiple=C(e):1===r&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,a=o?o.center:s.center,u=e.center=P(i);e.timeStamp=st(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=D(a,u),e.distance=x(a,u),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==vt&&s.eventType!==mt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=w(e.deltaX,e.deltaY);var c=_(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=rt(c.x)>rt(c.y)?c.x:c.y,e.scale=o?function(t,e){return x(i[0],i[1],_t)/x(t[0],t[1],_t)}(o.pointers):1,e.rotation=o?function(t,e){return D(i[1],i[0],_t)+D(t[1],t[0],_t)}(o.pointers):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,A(n,e);var h=t.element;d(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function A(t,e){var n,r,s,o,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=gt&&(u>dt||a.velocity===i)){var c=e.deltaX-a.deltaX,h=e.deltaY-a.deltaY,l=_(u,c,h);r=l.x,s=l.y,n=rt(l.x)>rt(l.y)?l.x:l.y,o=w(c,h),t.lastInterval=e}else n=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=n,e.velocityX=r,e.velocityY=s,e.direction=o}function C(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:it(t.pointers[n].clientX),clientY:it(t.pointers[n].clientY)},n++;return{timeStamp:st(),pointers:e,center:P(e),deltaX:t.deltaX,deltaY:t.deltaY}}function P(t){var e=t.length;if(1===e)return{x:it(t[0].clientX),y:it(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:it(n/e),y:it(i/e)}}function _(t,e,n){return{x:e/t||0,y:n/t||0}}function w(t,e){return t===e?yt:rt(t)>=rt(e)?0>t?Tt:Et:0>e?St:bt}function x(t,e,n){n||(n=Pt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function D(t,e,n){return n||(n=Pt),180*Math.atan2(e[n[1]]-t[n[1]],e[n[0]]-t[n[0]])/Math.PI}function M(){this.evEl=xt,this.evWin=Dt,this.pressed=!1,b.apply(this,arguments)}function O(){this.evEl=zt,this.evWin=Nt,b.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function z(){this.evTarget=Xt,this.evWin=Yt,this.started=!1,b.apply(this,arguments)}function N(){this.evTarget=qt,this.targetIds={},b.apply(this,arguments)}function R(){b.apply(this,arguments);var t=c(this.handler,this);this.touch=new N(this.manager,t),this.mouse=new M(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function X(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)},Ft)}}function Y(t,e){this.manager=t,this.set(e)}function k(t){this.options=Q({},this.defaults,t||{}),this.id=ut++,this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=Zt,this.simultaneous={},this.requireFail=[]}function q(t){return t&te?"cancel":t&Kt?"end":t&Jt?"move":t&$t?"start":""}function F(t){return t==bt?"down":t==St?"up":t==Tt?"left":t==Et?"right":""}function W(t,e){var n=e.manager;return n?n.get(t):t}function U(){k.apply(this,arguments)}function H(){U.apply(this,arguments),this.pX=null,this.pY=null}function L(){U.apply(this,arguments)}function V(){k.apply(this,arguments),this._timer=null,this._input=null}function j(){U.apply(this,arguments)}function B(){U.apply(this,arguments)}function G(){k.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Z(t,e){return(e=e||{}).recognizers=l(e.recognizers,Z.defaults.preset),new $(t,e)}function $(t,e){this.options=Q({},Z.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=function(t){return new(t.options.inputClass||(ht?O:lt?N:ct?R:M))(t,I)}(this),this.touchAction=new Y(this,this.options.touchAction),J(this,!0),o(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function J(t,e){var n,i=t.element;i.style&&(o(t.options.cssProps,function(r,s){n=E(i.style,s),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}function K(t,n){var i=e.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n,n.target.dispatchEvent(i)}var Q,tt=["","webkit","Moz","MS","ms","o"],et=e.createElement("div"),nt="function",it=Math.round,rt=Math.abs,st=Date.now;Q="function"!=typeof Object.assign?function(t){if(t===i||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==i&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var ot=a(function(t,e,n){for(var r=Object.keys(e),s=0;s<r.length;)(!n||n&&t[r[s]]===i)&&(t[r[s]]=e[r[s]]),s++;return t},"extend","Use `assign`."),at=a(function(t,e){return ot(t,e,!0)},"merge","Use `assign`."),ut=1,ct="ontouchstart"in t,ht=E(t,"PointerEvent")!==i,lt=ct&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),pt="touch",ft="mouse",dt=25,vt=1,mt=4,gt=8,yt=1,Tt=2,Et=4,St=8,bt=16,It=Tt|Et,At=St|bt,Ct=It|At,Pt=["x","y"],_t=["clientX","clientY"];b.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(S(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(S(this.element),this.evWin,this.domHandler)}};var wt={mousedown:vt,mousemove:2,mouseup:mt},xt="mousedown",Dt="mousemove mouseup";u(M,b,{handler:function(t){var e=wt[t.type];e&vt&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=mt),this.pressed&&(e&mt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:ft,srcEvent:t}))}});var Mt={pointerdown:vt,pointermove:2,pointerup:mt,pointercancel:gt,pointerout:gt},Ot={2:pt,3:"pen",4:ft,5:"kinect"},zt="pointerdown",Nt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(zt="MSPointerDown",Nt="MSPointerMove MSPointerUp MSPointerCancel"),u(O,b,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Mt[i],s=Ot[t.pointerType]||t.pointerType,o=s==pt,a=g(e,t.pointerId,"pointerId");r&vt&&(0===t.button||o)?0>a&&(e.push(t),a=e.length-1):r&(mt|gt)&&(n=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),n&&e.splice(a,1))}});var Rt={touchstart:vt,touchmove:2,touchend:mt,touchcancel:gt},Xt="touchstart",Yt="touchstart touchmove touchend touchcancel";u(z,b,{handler:function(t){var e=Rt[t.type];if(e===vt&&(this.started=!0),this.started){var n=(function(t,e){var n=y(t.touches),i=y(t.changedTouches);return e&(mt|gt)&&(n=T(n.concat(i),"identifier",!0)),[n,i]}).call(this,t,e);e&(mt|gt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:pt,srcEvent:t})}}});var kt={touchstart:vt,touchmove:2,touchend:mt,touchcancel:gt},qt="touchstart touchmove touchend touchcancel";u(N,b,{handler:function(t){var e=kt[t.type],n=(function(t,e){var n=y(t.touches),i=this.targetIds;if(e&(2|vt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,s,o=y(t.changedTouches),a=[],u=this.target;if(s=n.filter(function(t){return d(t.target,u)}),e===vt)for(r=0;r<s.length;)i[s[r].identifier]=!0,r++;for(r=0;r<o.length;)i[o[r].identifier]&&a.push(o[r]),e&(mt|gt)&&delete i[o[r].identifier],r++;return a.length?[T(s.concat(a),"identifier",!0),a]:void 0}).call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:pt,srcEvent:t})}});var Ft=2500;u(R,b,{handler:function(t,e,n){var i=n.pointerType==ft;if(!(i&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(n.pointerType==pt)(function(t,e){t&vt?(this.primaryTouch=e.changedPointers[0].identifier,X.call(this,e)):t&(mt|gt)&&X.call(this,e)}).call(this,e,n);else if(i&&(function(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],s=Math.abs(e-r.x),o=Math.abs(n-r.y);if(25>=s&&25>=o)return!0}return!1}).call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Wt=E(et.style,"touchAction"),Ut=Wt!==i,Ht="compute",Lt="manipulation",Vt="none",jt="pan-x",Bt="pan-y",Gt=function(){if(!Ut)return!1;var e={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=!n||t.CSS.supports("touch-action",i)}),e}();Y.prototype={set:function(t){t==Ht&&(t=this.compute()),Ut&&this.manager.element.style&&Gt[t]&&(this.manager.element.style[Wt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){h(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(v(t,Vt))return Vt;var e=v(t,jt),n=v(t,Bt);return e&&n?Vt:e||n?e?jt:Bt:v(t,Lt)?Lt:"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(!this.manager.session.prevented){var i=this.actions,r=v(i,Vt)&&!Gt[Vt],s=v(i,Bt)&&!Gt[Bt],o=v(i,jt)&&!Gt[jt];if(r&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;return o&&s?void 0:r||s&&n&It||o&&n&At?this.preventSrc(e):void 0}e.preventDefault()},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Zt=1,$t=2,Jt=4,Kt=8,Qt=Kt,te=16;k.prototype={defaults:{},set:function(t){return Q(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=W(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=W(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return-1===g(e,t=W(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=W(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;Kt>i&&e(n.options.event+q(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=Kt&&e(n.options.event+q(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Zt)))return!1;t++}return!0},recognize:function(t){var e=Q({},t);return h(this.options.enable,[this,e])?(this.state&(Qt|te|32)&&(this.state=Zt),this.state=this.process(e),void(this.state&($t|Jt|Kt|te)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},u(U,k,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&($t|Jt),r=this.attrTest(t);return i&&(n&gt||!r)?e|te:i||r?n&mt?e|Kt:e&$t?e|Jt:$t:32}}),u(H,U,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ct},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(Bt),t&At&&e.push(jt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&It?(r=0===s?yt:0>s?Tt:Et,n=s!=this.pX,i=Math.abs(t.deltaX)):(r=0===o?yt:0>o?St:bt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return U.prototype.attrTest.call(this,t)&&(this.state&$t||!(this.state&$t)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=F(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),u(L,U,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Vt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&$t)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),u(V,k,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(mt|gt)&&!s)this.reset();else if(t.eventType&vt)this.reset(),this._timer=r(function(){this.state=Qt,this.tryEmit()},e.time,this);else if(t.eventType&mt)return Qt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Qt&&(t&&t.eventType&mt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=st(),this.manager.emit(this.options.event,this._input)))}}),u(j,U,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Vt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&$t)}}),u(B,U,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:It|At,pointers:1},getTouchAction:function(){return H.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(It|At)?e=t.overallVelocity:n&It?e=t.overallVelocityX:n&At&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&rt(e)>this.options.velocity&&t.eventType&mt},emit:function(t){var e=F(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),u(G,k,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Lt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&vt&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=mt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||x(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=r(function(){this.state=Qt,this.tryEmit()},e.interval,this),$t):Qt}return 32},failTimeout:function(){return this._timer=r(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Qt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Z.VERSION="2.0.7",Z.defaults={domEvents:!1,touchAction:Ht,enable:!0,inputTarget:null,inputClass:null,preset:[[j,{enable:!1}],[L,{enable:!1},["rotate"]],[B,{direction:It}],[H,{direction:It},["swipe"]],[G],[G,{event:"doubletap",taps:2},["tap"]],[V]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},$.prototype={set:function(t){return Q(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Qt)&&(r=e.curRecognizer=null);for(var s=0;s<i.length;)n=i[s],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&($t|Jt|Kt)&&(r=e.curRecognizer=n),s++}},get:function(t){if(t instanceof k)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=g(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==i&&e!==i){var n=this.handlers;return o(m(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==i){var n=this.handlers;return o(m(t),function(t){e?n[t]&&n[t].splice(g(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&K(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&J(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},Q(Z,{INPUT_START:vt,INPUT_MOVE:2,INPUT_END:mt,INPUT_CANCEL:gt,STATE_POSSIBLE:Zt,STATE_BEGAN:$t,STATE_CHANGED:Jt,STATE_ENDED:Kt,STATE_RECOGNIZED:Qt,STATE_CANCELLED:te,STATE_FAILED:32,DIRECTION_NONE:yt,DIRECTION_LEFT:Tt,DIRECTION_RIGHT:Et,DIRECTION_UP:St,DIRECTION_DOWN:bt,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:At,DIRECTION_ALL:Ct,Manager:$,Input:b,TouchAction:Y,TouchInput:N,MouseInput:M,PointerEventInput:O,TouchMouseInput:R,SingleTouchInput:z,Recognizer:k,AttrRecognizer:U,Tap:G,Pan:H,Swipe:B,Pinch:L,Rotate:j,Press:V,on:p,off:f,each:o,merge:at,extend:ot,assign:Q,inherit:u,bindFn:c,prefixed:E}),("undefined"!=typeof t?t:"undefined"!=typeof self?self:{}).Hammer=Z,"function"==typeof define&&define.amd?define(function(){return Z}):"undefined"!=typeof module&&module.exports?module.exports=Z:t.Hammer=Z}(window,document);
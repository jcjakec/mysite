(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8325:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{UF:function(){return we},ZP:function(){return Ze},ih:function(){return Xe}});var i=r(7294),l=r.t(i,2),c=r(178),s=r.n(c),u=r(3935);const f={prefix:Math.round(1e10*Math.random()),current:0},d=i.createContext(f);function p(e){let t=(0,i.useContext)(d),r=(0,i.useMemo)((()=>({prefix:t===f?0:++t.prefix,current:0})),[t]);return i.createElement(d.Provider,{value:r},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let _=new Map,m=new Set;function y(){if("undefined"===typeof window)return;let e=t=>{let r=_.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),_.delete(t.target)),0===_.size)){for(let e of m)e();m.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=_.get(t.target);r||(r=new Set,_.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?y():document.addEventListener("DOMContentLoaded",y));"undefined"!==typeof window&&window.visualViewport;new Map;function v(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function h(){return v(/^Mac/)}function b(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const g=i.createContext(null);g.displayName="PressResponderContext";let w=null,x=new Set,j=!1,O=!1,P=!1;function k(e,t){for(let r of x)r(e,t)}function E(e){O=!0,function(e){return!(e.metaKey||!h()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(w="keyboard",k("keyboard",e))}function S(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(O=!0,k("pointer",e))}function A(e){b(e)&&(O=!0,w="virtual")}function N(e){e.target!==window&&e.target!==document&&(O||P||(w="virtual",k("virtual",e)),O=!1,P=!1)}function B(){O=!1,P=!0}function M(){if("undefined"===typeof window||j)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){O=!0,e.apply(this,arguments)},document.addEventListener("keydown",E,!0),document.addEventListener("keyup",E,!0),document.addEventListener("click",A,!0),window.addEventListener("focus",N,!0),window.addEventListener("blur",B,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),j=!0}"undefined"!==typeof document&&("loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M));new Set;const C=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];C.join(":not([hidden]),");C.push('[tabindex]:not([tabindex="-1"]):not([disabled])');C.join(':not([hidden]):not([tabindex="-1"]),');function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function R(e){return null!=e}function T(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++){var l=i[o];l in e&&(t[l]=e[l])}return t}function W(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var l=i[o];n.includes(l)||(t[l]=e[l])}return t}function V(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,a=H(t);!(r=a()).done;){n=(0,r.value)(n)}return n}}var U="undefined"!==typeof window,J=Symbol("NONE"),q=U?i.useLayoutEffect:i.useEffect;function F(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function G(e){for(var t=I({},e),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++)for(var l=i[o],c=0,s=Object.keys(l);c<s.length;c++){var u=s[c];t[u]=X(u,t[u],l[u])}return t}function Y(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function Q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=H(t);!(r=n()).done;){Y(r.value,e)}}}function X(e,t,r){return t===J||r===J?null:null==t?r:null==r?t:"className"===e?s()(t,r):"style"===e?I({},t,r):"ref"===e?Q(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function z(e,t,r,n){var a=t.children,o=L(t,["children"]),i=re(a,null!=r&&r);return F(e,I({ref:n},o),i)}function K(e,t){var r=e.as,n=e.hasGap;return z(null!=r?r:"div",L(e,["as","hasGap"]),n,t)}var Z=(0,i.forwardRef)(K),$=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,a=L(t,["hasGap"]);return z(e,a,n,r)}))},ee=Object.assign(Z,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function te(e,t,r){if(null==e)return!1;var n=e[t];return null!=n&&(!0===n?r===t:!1!==n&&(Array.isArray(n)?n.includes(r):"string"===typeof n?n===r:void 0!==n[r]&&!1!==n[r]))}function re(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(l,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function ne(e,t,r,n){var a=se(e),o=ce(r,a.props);if("render"===a.type)return a.render(o,t);var l=t;"as"===a.type&&a.as&&(t===ee?o.as=a.as:l=a.as);var c=o.children;a.wrapChildren&&(c=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(c))),n&&(c=re(c,!0));var s=F(l,o,c);return a.wrap&&(s=a.wrap(s)),s}var ae=new Map;function oe(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],a=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),l=2;l<o;l++)i[l-2]=arguments[l];var c=ie.apply(void 0,[e,t].concat(i));if(r&&ae.set(r,c),n){var s,u=a?null!=(s=ae.get(a))?s:null:c;return ae.clear(),u}return c}function ie(e,t){var r,n=t["data-plasmic-override"],a=t["data-plasmic-wrap-flex-child"],o=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];return ne(n,e,G.apply(void 0,[t,0===l.length?{}:{children:1===l.length?l[0]:l}].concat(o)),a)}var le=Symbol("UNSET");function ce(e,t){if(!t)return e;for(var r=I({},e),n=0,a=Object.keys(t);n<a.length;n++){var o=a[n],i=e[o],l=t[o];l===le?delete r[o]:(null!=l||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(l=J),r[o]=X(o,i,l))}return r}function se(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?I({},e,{props:e.props||{},type:"as"}):"render"in e?I({},e,{type:"render"}):"props"in e?I({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?I({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function ue(e,t){for(var r={},n=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<a.length;n++){var o=a[n];r[o]=fe(e[o],t[o])}return r}function fe(e,t){var r,n;if(!e)return t;if(!t)return e;var a=se(e),o=se(t),i=V.apply(void 0,[a.wrap,o.wrap].filter(R)),l=V.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(R)),c=ce(null!=(r=a.props)?r:{},o.props);if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:l};if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:l};var s=null!=(n="as"===o.type?o.as:void 0)?n:"as"===a.type?a.as:void 0;return I({props:c,wrap:i,wrapChildren:l},s?{as:s}:{})}function de(e,t){var r,n,a,o,i,l,c,s,u=t.name,f=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,_=["variants","args","overrides"],m=(o=W.apply(void 0,[T.apply(void 0,[e].concat(d))].concat(_)),i=null!=(r=e.variants)?r:{},I({},o,i)),y=(l=W.apply(void 0,[T.apply(void 0,[e].concat(p))].concat(_)),c=null!=(n=e.args)?n:{},I({},l,c)),v=ue(W.apply(void 0,[T.apply(void 0,[e].concat(f))].concat(p,d,_)),null!=(a=e.overrides)?a:{}),h=W.apply(void 0,[e,"variants","args","overrides"].concat(f,d,p));Object.keys(h).length>0&&(v=ue(v,((s={})[u]={props:h},s)));return{variants:m,args:y,overrides:v}}var pe={};function _e(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var r=t[0];e[r]=void 0,pe[r]})),e}function me(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return i.createElement(e.component,T.apply(void 0,[e].concat(t)),i.createElement("a",Object.assign({},W.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(r=e.href,/^\/(?!\/)/.test(r))?i.createElement(e.component,I({},W(e,"component","platform","href"),{to:e.href})):i.createElement("a",Object.assign({},W(e,"component","platform")));var r}var ye=[],ve={};function he(){return U?Object.entries(ve).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var be=void 0;U&&window.addEventListener("resize",(function(){var e=he();be&&e.join("")===be.join("")||(be=e,u.unstable_batchedUpdates((function(){return ye.forEach((function(e){return e()}))})))}));var ge=(0,i.createContext)(void 0);function we(e){var t=e.platform,r=e.children,n=(0,i.useMemo)((function(){return{platform:t}}),[t]);return(0,i.createElement)(ge.Provider,{value:n},(0,i.createElement)(p,null,r))}var xe=s();function je(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Oe=r(9008),Pe=r(1664);function ke(e){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),e.children}var Ee,Se,Ae=(Ee=!0,Se={mobileOnly:"(min-width:0px) and (max-width:768px)"},Object.assign(ve,Se),be=void 0,function(){var e=(0,i.useState)()[1],t=(0,i.useRef)(be||[]);return q((function(){var r=function(){be&&t.current.join("")!==be.join("")&&(t.current=be,e({}))};return ye.push(r),void 0===be&&(be=he()),r(),function(){ye.splice(ye.indexOf(r),1)}}),[]),Ee?be||[]:be?be[be.length-1]:void 0}),Ne=(r(3179),r(172)),Be=r(4591),Me=r(4322),Ce=new Array,Ie=new Array;var Le={root:["root","img"],img:["img"]};function De(e){var t=function(t){var r=de(t,{name:e,descendantNames:je(Le[e]),internalArgPropNames:Ie,internalVariantPropNames:Ce});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode,n=(e.dataFetches,_e({screen:Ae()}));return oe(i.Fragment,null,oe(Oe.default,null,oe("title",{key:"title"},"jcjakec - home"),oe("meta",{key:"og:title",property:"og:title",content:"jcjakec - home"}),oe("meta",{key:"description",name:"description",property:"og:description",content:""})),oe("style",null,"\n        body {\n          margin: 0;\n        }\n      "),oe("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:xe(Ne.all,Be.root_reset,Me.root)},oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox___1Rhc)},"jcjakec"),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox__tWnId)},"haha 69 lol funny number\n420 hahahaha lol funny xD")),te(n,"screen","mobileOnly")?oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox__sSQxx)},te(n,"screen","mobileOnly")?"Semi - \nDeveloped site":"jcjakec"):null,oe("div",{className:xe(Ne.all,Me.freeBox__wuD4X)},oe("img",{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:xe(Ne.img,Me.img),role:"img",src:"/plasmic/blank_project/images/wetcatgif.gif"}),oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox__blGyg)},te(n,"screen","mobileOnly")?'Made this site pretty quickly. Hopefully in the future it\'ll look a bit nicer, with a blog, my projects uploaded, etc. For now this super simple "site" will have to do.':'Made this pretty quickly. Hopefully in the future it\'ll look a bit nicer, with a blog, my projects uploaded, etc. For now this super simple "site" will have to do.'),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox__iVeGd)},te(n,"screen","mobileOnly")?"Nothing\nhere \nright now":"Semi Developed Site"))),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Me.freeBox__q7Ekm)},oe(me,{className:xe(Ne.all,Ne.__wab_text,Me.link__yrExA),component:Pe.default,href:"/-2",platform:"nextjs",target:void 0},"Projects & Stuff"),oe(me,{className:xe(Ne.all,Ne.__wab_text,Me.link__rIBeo),component:Pe.default,href:"https://discord.gg/JYB3xt6UKc",platform:"nextjs",target:"_blank"},te(n,"screen","mobileOnly")?"Discord ":"Discord Server"),oe(me,{className:xe(Ne.all,Me.link__sb35),component:Pe.default,href:"https://www.youtube.com/channel/UCXAb6NcqATVqDHOd1TOShLg",platform:"nextjs",target:"_blank"},oe("div",{className:xe(Ne.all,Ne.__wab_text,Me.freeBox__pstbt)},te(n,"screen","mobileOnly")?"Youtube ":"Youtube Channel")))),te(n,"screen","mobileOnly")?oe("div",{className:xe(Ne.all,Me.freeBox__ohIZd)}):null))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicHome":"PlasmicHome.".concat(e),t}var He=Object.assign(De("root"),{img:De("img"),internalVariantProps:Ce,internalArgProps:Ie}),Re=r(5573),Te=new Array,We=new Array;var Ve={root:["root","img"],img:["img"]};function Ue(e){var t=function(t){var r=de(t,{name:e,descendantNames:je(Ve[e]),internalArgPropNames:We,internalVariantPropNames:Te});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode,n=(e.dataFetches,_e({screen:Ae()}));return oe(i.Fragment,null,oe(Oe.default,null,oe("title",{key:"title"},"jcjakec - projects"),oe("meta",{key:"og:title",property:"og:title",content:"jcjakec - projects"}),oe("meta",{key:"description",name:"description",property:"og:description",content:""})),oe("style",null,"\n        body {\n          margin: 0;\n        }\n      "),oe("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:xe(Ne.all,Be.root_reset,Re.root)},oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox__ehpBo)},"jcjakec"),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox__dbBxp)},"haha 69 lol funny number\n420 hahahaha lol funny xD")),te(n,"screen","mobileOnly")?oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox__hxYof)},te(n,"screen","mobileOnly")?"Semi - \nDeveloped site":"jcjakec"):null,oe("div",{className:xe(Ne.all,Re.freeBox__gMJdM)},oe("img",{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:xe(Ne.img,Re.img),role:"img",src:"/plasmic/blank_project/images/vibecat2Gif.gif"}),oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox__mcIkA)},te(n,"screen","mobileOnly")?"I havent uploaded any projects here yet, though when I next make/finish making something I'll put it on here for download.":"I havent uploaded any projects here\nyet, though when I next make/finish making something I'll put it on here for download."),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox___7RS24)},te(n,"screen","mobileOnly")?"Nothing\nhere \nright now":"Semi Developed Site"))),(te(n,"screen","mobileOnly"),oe("div",{className:xe(Ne.all,Re.freeBox__qe3Ww)},oe(me,{className:xe(Ne.all,Ne.__wab_text,Re.link__ekrAl),component:Pe.default,href:"/",platform:"nextjs",target:void 0},"Return to Home"),oe(me,{className:xe(Ne.all,Ne.__wab_text,Re.link__nPgl0),component:Pe.default,href:"https://discord.gg/JYB3xt6UKc",platform:"nextjs",target:"_blank"},te(n,"screen","mobileOnly")?"Discord ":"Discord Server"),oe(me,{className:xe(Ne.all,Re.link__dCdL),component:Pe.default,href:"https://www.youtube.com/channel/UCXAb6NcqATVqDHOd1TOShLg",platform:"nextjs",target:"_blank"},oe("div",{className:xe(Ne.all,Ne.__wab_text,Re.freeBox__xNi)},te(n,"screen","mobileOnly")?"Youtube ":"Youtube Channel")))),te(n,"screen","mobileOnly")?oe("div",{className:xe(Ne.all,Re.freeBox__ksalp)}):null))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicProjects":"PlasmicProjects.".concat(e),t}var Je=Object.assign(Ue("root"),{img:Ue("img"),internalVariantProps:Te,internalArgProps:We}),qe={Home:He,Projects:Je},Fe={Screen:{component:ke,isContext:!Boolean("ScreenVariantProvider")}},Ge={Home:{tDhov2QnJWaLYdnrtgu4NV:He},Projects:{tDhov2QnJWaLYdnrtgu4NV:Je}},Ye={Screen:{tDhov2QnJWaLYdnrtgu4NV:{component:ke,isContext:!Boolean(void 0)}}},Qe={"/":{name:"Home",projectId:"tDhov2QnJWaLYdnrtgu4NV"},"/-2":{name:"Projects",projectId:"tDhov2QnJWaLYdnrtgu4NV"}};function Xe(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),Qe[e]}function ze(e,t){if(qe[t])return qe[t];if(!Ge[t])throw new Error("The component ".concat(t," could not be found."));if(!Ge[t][e])throw new Error("The component ".concat(t," requires a valid projectId. Passed: ").concat(e,". Options: ").concat(Object.keys(Ge[t])));return Ge[t][e]}function Ke(e,t,r){var n=Object.entries(r||{}).map((function(e){var r=o(e,2),n=r[0],a=r[1];if(Fe[n]){var i=Fe[n],l=i.component;return[i.isContext?l.Provider:l,a]}if(!Ye[n])throw new Error("The provider ".concat(n," could not be found."));if(!Ye[n][t])throw new Error("The provider ".concat(n," requires a valid projectId. Passed: ").concat(t,". Options: ").concat(Object.keys(Ye[n])));var c=Ye[n][t],s=c.component;return[c.isContext?s.Provider:s,a]}));return n.length?n.reduce((function(e,t){var r=o(t,2),n=r[0],a=r[1];return i.createElement(n,{value:a},e)}),e):e}function Ze(e){var t=e.projectId,r=e.component,n=e.componentProps,a=void 0===n?{}:n,o=e.providerProps,l=void 0===o?{}:o,c=ze(t,r);return Ke(i.createElement(c,a),t,l)}Ze.getPlumeType=function(e){return ze(e.projectId,e.component).__plumeType}},2167:function(e,t,r){"use strict";var n=r(3848),a=r(9448);t.default=void 0;var o=a(r(7294)),i=r(9414),l=r(4651),c=r(7426),s={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=(0,l.useRouter)(),f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],l=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,p=f.as,_=e.children,m=e.replace,y=e.shallow,v=e.scroll,h=e.locale;"string"===typeof _&&(_=o.default.createElement("a",null,_));var b=(t=o.Children.only(_))&&"object"===typeof t&&t.ref,g=(0,c.useIntersection)({rootMargin:"200px"}),w=n(g,2),x=w[0],j=w[1],O=o.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);(0,o.useEffect)((function(){var e=j&&r&&(0,i.isLocalURL)(d),t="undefined"!==typeof h?h:a&&a.locale,n=s[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(a,d,p,{locale:t})}),[p,d,j,h,r,a]);var P={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:l}))}(e,a,d,p,m,y,v,h)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof h?h:a&&a.locale,E=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(p,k,a&&a.locales,a&&a.domainLocales);P.href=E||(0,i.addBasePath)((0,i.addLocale)(p,k,a&&a.defaultLocale))}return o.default.cloneElement(t,P)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=(0,a.useRef)(),s=(0,a.useState)(!1),u=n(s,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(7294),o=r(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),l=(o=r(3244))&&o.__esModule?o:{default:o},c=r(3398),s=r(1165),u=r(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var _=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=_.length;c<s;c++){var u=_[c];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var f=a.props[u],d=n[u]||new Set;"name"===u&&i||!d.has(f)?(d.add(f),n[u]=d):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,i.default.cloneElement(e,l)}return i.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};t.default=y},3244:function(e,t,r){"use strict";var n=r(3115),a=r(2553),o=r(2012),i=(r(450),r(9807)),l=r(7690),c=r(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),f=function(e){i(r,e);var t=s(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=f},9795:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return c}});var a=r(5893),o=(r(2702),r(8325));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(o.UF,{children:(0,a.jsx)(t,l({},r))})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9795)}])},4322:function(e){e.exports={root:"PlasmicHome_root__9JswI",freeBox___1Rhc:"PlasmicHome_freeBox___1Rhc__3vdjJ",freeBox__tWnId:"PlasmicHome_freeBox__tWnId__27ezR",freeBox__sSQxx:"PlasmicHome_freeBox__sSQxx__1K5B9",freeBox__wuD4X:"PlasmicHome_freeBox__wuD4X__3IdeZ",img:"PlasmicHome_img__NCSAN",freeBox__blGyg:"PlasmicHome_freeBox__blGyg__3MWnG",freeBox__iVeGd:"PlasmicHome_freeBox__iVeGd__W6G3j",freeBox__q7Ekm:"PlasmicHome_freeBox__q7Ekm__2LICC",link__yrExA:"PlasmicHome_link__yrExA__3Ur0v",link__rIBeo:"PlasmicHome_link__rIBeo__NQzbe",link__sb35:"PlasmicHome_link__sb35__27FKZ",freeBox__pstbt:"PlasmicHome_freeBox__pstbt__3bxxo",freeBox__ohIZd:"PlasmicHome_freeBox__ohIZd__17Ep1"}},5573:function(e){e.exports={root:"PlasmicProjects_root__2VTrG",freeBox__ehpBo:"PlasmicProjects_freeBox__ehpBo__1Wj30",freeBox__dbBxp:"PlasmicProjects_freeBox__dbBxp__2GjjA",freeBox__hxYof:"PlasmicProjects_freeBox__hxYof__f9s-z",freeBox__gMJdM:"PlasmicProjects_freeBox__gMJdM__3J1ga",img:"PlasmicProjects_img__3BQuz",freeBox__mcIkA:"PlasmicProjects_freeBox__mcIkA__3W9Bv",freeBox___7RS24:"PlasmicProjects_freeBox___7RS24__2QJtB",freeBox__qe3Ww:"PlasmicProjects_freeBox__qe3Ww__2b4Dg",link__ekrAl:"PlasmicProjects_link__ekrAl__3JIfM",link__nPgl0:"PlasmicProjects_link__nPgl0__8jUID",link__dCdL:"PlasmicProjects_link__dCdL__10TI7",freeBox__xNi:"PlasmicProjects_freeBox__xNi__v6EVs",freeBox__ksalp:"PlasmicProjects_freeBox__ksalp__2_CW0"}},4591:function(e){e.exports={root_reset:"plasmic_blank_project_root_reset__sqeOM"}},172:function(e){e.exports={all:"plasmic__default_style_all__208hu",img:"plasmic__default_style_img__23ccE plasmic__default_style_all__208hu",input:"plasmic__default_style_input__25_Su plasmic__default_style_all__208hu",textarea:"plasmic__default_style_textarea__2c9Ua plasmic__default_style_all__208hu",button:"plasmic__default_style_button__3nItH plasmic__default_style_all__208hu",code:"plasmic__default_style_code__3DJfb plasmic__default_style_all__208hu",pre:"plasmic__default_style_pre__3MJN8 plasmic__default_style_all__208hu",h1:"plasmic__default_style_h1__eQpTj plasmic__default_style_all__208hu",h2:"plasmic__default_style_h2__2bvJx plasmic__default_style_all__208hu",h3:"plasmic__default_style_h3__3ZEPj plasmic__default_style_all__208hu",h4:"plasmic__default_style_h4__1M-X7 plasmic__default_style_all__208hu",h5:"plasmic__default_style_h5__22BiX plasmic__default_style_all__208hu",h6:"plasmic__default_style_h6__367TL plasmic__default_style_all__208hu",address:"plasmic__default_style_address__mWNXW plasmic__default_style_all__208hu",ol:"plasmic__default_style_ol__2pXAy plasmic__default_style_all__208hu",ul:"plasmic__default_style_ul__iAncp plasmic__default_style_all__208hu",select:"plasmic__default_style_select__3HQ-o plasmic__default_style_all__208hu",li:"plasmic__default_style_li__2xWy3 plasmic__default_style_all__208hu",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__39rWm",__wab_text:"plasmic__default_style___wab_text__1tCIX",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__rvRY-"}},3179:function(){},2702:function(){},9008:function(e,t,r){e.exports=r(2775)},1664:function(e,t,r){e.exports=r(2167)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),a=r(7381),o=r(3585),i=r(5725);e.exports=function(e){return n(e)||a(e)||o(e)||i()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c6a287b5-a952-4316-98b0-5a304b24827f",e._sentryDebugIdIdentifier="sentry-dbid-c6a287b5-a952-4316-98b0-5a304b24827f")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"8af3776a86627a2cf5c1fe045b836037564cbfb3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[4430],{7822:function(e,t,n){var i=n(9526);t.Z=(e,t,n)=>{(0,i.useEffect)((()=>{const n=t.current;if(e&&n){const e=n.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)');if(!e)return;const t=e[0],i=e[e.length-1],l=e=>{"Tab"===e.key&&(e.shiftKey&&document.activeElement===t?(e.preventDefault(),i.focus()):e.shiftKey||document.activeElement!==i||(e.preventDefault(),t.focus()))};return n.addEventListener("keydown",l),()=>{n.removeEventListener("keydown",l)}}}),[e,t,n])}},5171:function(e,t,n){var i=n(9526);t.Z=function(e,t){const n=(0,i.useRef)(e);(0,i.useLayoutEffect)((()=>{n.current=e}),[e]),(0,i.useEffect)((()=>{if(!t&&0!==t)return;const e=setTimeout((()=>n.current()),t);return()=>clearTimeout(e)}),[t])}},8661:function(e,t,n){var i=n(9526),l=n(90);t.Z=()=>{const[e,t]=(0,i.useState)({winHeight:window.innerHeight,winWidth:window.innerWidth});return(0,i.useEffect)((()=>{const e=(0,l.Ds)((()=>{t({winHeight:window.innerHeight,winWidth:window.innerWidth})}),50);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}},9002:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(9526),l=n(4403),o=n.n(l),d=n(4237),a=n(7822),s=n(2058),r=n(6470),u=e=>i.createElement("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("circle",{cx:"13",cy:"13",r:"13",fill:"#121212"}),e&&i.createElement("text",{x:"50%",y:"55%",dominantBaseline:"middle",textAnchor:"middle",fill:"white","aria-hidden":"true"},e),!e&&i.createElement("path",{d:"M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998",stroke:"white",strokeWidth:"1.5"})),c="Skip-module_skipInfo__ZI2vt",v=e=>{let{timeUntilEnabled:t,onClick:n,copy:l="Continue to Game",className:d,backgroundColor:a,focusOnInterstitial:s}=e;const r=(0,i.useRef)(null),v=(0,i.useRef)(null),[f,m]=(0,i.useState)(!1);if((0,i.useEffect)((()=>{if(null===t&&s(),t&&!f)return r.current&&r.current.focus(),void m(!0);0===t&&v.current&&v.current.focus()}),[t,f]),null===t)return i.createElement("div",{style:Object.assign(a?{backgroundColor:a}:{}),className:"Skip-module_skipButtonPlaceholder__j1_60"});const p=Math.round(Math.max(0,t)),w=o()("Skip-module_fadeInContainer__wgLXT",d),b=o()(c),h=o()(c,"Skip-module_skipButton__m8KJ8");return i.createElement("div",{className:w,style:Object.assign(a?{backgroundColor:a}:{})},!!p&&i.createElement("div",{className:b,ref:r,tabIndex:-1,"aria-live":"polite"},i.createElement("span",{className:"visually-hidden"},"Skip ad in 5 seconds"),i.createElement("p",{"aria-hidden":"true"},"Skip ad in"),u(p)),!p&&i.createElement("button",{type:"button",className:h,ref:v,onClick:n,style:Object.assign(a?{backgroundColor:a}:{})},l,u(p)))},f=n(1319),m=n(1586),p=(e,t)=>{var n,i,l,o;((null===(n=window)||void 0===n||null===(n=n.AdSlot4)||void 0===n||null===(i=n.getAdReq)||void 0===i?void 0:i.call(n))||{})[e]!==t&&(null===(l=window)||void 0===l||null===(l=l.AdSlot4)||void 0===l||null===(o=l.updateAdReq)||void 0===o||o.call(l,{[e]:t}))},w=n(5489),b=(e,t)=>{let{lineItemId:n,creativeId:i,position:l,slotId:o,pageType:d}=e;(0,w.j)("impression",{eventData:{type:"TimerShown",trigger:"ad",success:t},ad:{slotId:o,position:l,lineItemId:"".concat(n),creativeId:"".concat(i),pageType:d}})};const h=[11876058,11940568,11981216,11951533];var g=e=>{const[t,n]=(0,i.useState)(null),[l,o]=(0,i.useState)(!1),d=(0,i.useRef)(null),a=(0,f.Z)(window),{hasPaused:s}=function(){const[e,t]=(0,i.useState)(!1),n=n=>{var i,l,o;if((null===(i=window.location)||void 0===i?void 0:i.origin)===origin||null!==(l=(o=origin).match)&&void 0!==l&&l.call(o,/(safeframe|tpc)\.googlesyndication\.com$/)){var d,a,s,r;const i=(null===(d=n.data)||void 0===d||null===(d=d.dataToSend)||void 0===d?void 0:d["video-event"])||(null===(a=n.data)||void 0===a?void 0:a.flexVideoEvent);(null===(s=n.data)||void 0===s||null===(s=s.dataToSend)||void 0===s?void 0:s["video-play-time"])||null===(r=n.data)||void 0===r||r.flexVideoPlayTime,"pause"===i&&t(!0),"playing"===i&&e&&t(!1)}};return(0,i.useEffect)((()=>(window&&window.addEventListener&&window.addEventListener("message",n,!1),()=>{var e;e=n,window.removeEventListener("message",e,!1)})),[e]),{hasPaused:e}}(),{hasAdLoaded:r,isVideoAd:u,lineItemId:c,creativeId:v,position:m,slotId:p}=function(){const[e,t]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1),[o,d]=(0,i.useState)(null),a=(0,i.useRef)(0),s=(0,i.useRef)(0),r=(0,i.useRef)(""),u=(0,i.useRef)(""),c=e=>{const{creativeTemplateId:t,lineItemId:n,creativeId:i,position:l,id:o}=e;n&&(a.current=n),i&&(s.current=i),r.current=null!=l?l:"",u.current=null!=o?o:"",t&&h.includes(t)?d(!0):d(!1)},v=()=>{l(!0)};return(0,i.useEffect)((()=>{if(e)return;const n=[];return window.AdSlot4&&(t(!0),window.AdSlot4.cmd.push((()=>{var e;const t=null===(e=window)||void 0===e||null===(e=e.AdSlot4)||void 0===e?void 0:e.events;n.push(null==t?void 0:t.subscribe({name:"AdRendered",callback:c,scope:"intsl"})),n.push(null==t?void 0:t.subscribe({name:"AdLoaded",callback:v,scope:"intsl"}))}))),()=>{for(;n.length;){var e;null===(e=n.pop())||void 0===e||e.remove()}}}),[]),{hasAdLoaded:n,isVideoAd:o,lineItemId:a,creativeId:s,position:r,slotId:u}}(),{shouldHaveDisplayedTimer:w}=function(){const[e,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),2e3);return()=>{clearTimeout(e)}}),[]),{shouldHaveDisplayedTimer:e}}();return(0,i.useEffect)((()=>{if(!u||!r||s)return;const e=setInterval((()=>{n((t=>null===t?5:(0===t&&clearInterval(e),0===t?t:t-1)))}),1e3);return()=>{clearInterval(e)}}),[u,r,s,w]),(0,i.useEffect)((()=>{if(!e||l)return;const t={lineItemId:"".concat(c.current?c.current:""),creativeId:"".concat(v.current?v.current:""),position:m.current,slotId:p.current,pageType:a};!1===u?(o(!0),n(0)):w?(o(!0),n(0),b(t,!1),d.current=!1):!w&&u&&r&&(o(!0),n(5),d.current=!0,b(t,!0))}),[l,u,w,r]),{secondsUntilSkippable:t,timerShown:d}};function E(e,t){return e?t-e:null}var y=e=>{let{id:t,position:n,className:l,adClassName:u,onClose:c,ctaCopy:w,skipButtonClassName:b,isSpecialAdUnit:h,enableCountdown:y=!1,backgroundColor:A}=e;const{isFluid:S,hasIntAdError:_,hasIntAd:I,isAdReady:k}=(()=>{const[e,t]=(0,i.useState)(void 0),[n,l]=(0,i.useState)(!1),[o,d]=(0,i.useState)(!1),[a,s]=(0,i.useState)(!1),[u,c]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=e=>n=>{const{slot:i,id:l,type:o,isEmpty:d}=n;(0===e||d)&&(t(!1),s(!0))},n=e=>n=>{const{slot:i,id:o,size:a}=n;(o||i)&&t("AdEmpty"!==e),e===r.hg.AD_LOADED&&l(!0),e===r.hg.AD_RENDERED&&d(!0),"AdRendered"===e&&a&&0===a[1]&&c(!0)};let i=[];return window.AdSlot4&&window.AdSlot4.cmd.push((()=>{var t;const l=null===(t=window.AdSlot4)||void 0===t?void 0:t.events;i=[null==l?void 0:l.subscribe({name:"script_loader_error",callback:e(0),scope:"all"}),null==l?void 0:l.subscribe({name:"BidderError",callback:e(0),scope:"all"}),null==l?void 0:l.subscribe({name:"AdEmpty",callback:e(1),scope:"all"}),null==l?void 0:l.subscribe({name:"AdRendered",callback:n("AdRendered"),scope:"all"}),null==l?void 0:l.subscribe({name:r.hg.AD_LOADED,callback:n(r.hg.AD_LOADED),scope:"all"})]})),()=>{for(;i.length;){var e;null===(e=i.pop())||void 0===e||e.remove()}}}),[]),{hasIntAd:e,hasIntAdError:a,isFluid:u,isAdReady:o&&n}})(),{secondsUntilSkippable:D,timerShown:R}=g(y),{userType:T}=(0,d.aF)(),L=(0,i.useRef)(null),C=(0,i.useRef)(null),x=(0,i.useRef)(null);(0,a.Z)(!0,C);const N=()=>{var e,i,l;const o="".concat(null===(e=window)||void 0===e||null===(e=e.AdSlot4)||void 0===e||null===(e=e.props)||void 0===e?void 0:e.adUnitPath).concat(h?"/special":"");null===(i=window)||void 0===i||null===(i=i.AdSlot4)||void 0===i||null===(l=i.initializeAd)||void 0===l||l.call(i,L.current,{id:t,position:n,adUnitPath:o})};(0,i.useEffect)((()=>{var e,t;p("sub",T.entitlement),p("page_view_id",s.Z.current),null!==(e=window)&&void 0!==e&&null!==(e=e.AdSlot4)&&void 0!==e&&null!==(e=e.props)&&void 0!==e&&e.adUnitPath?N():null===(t=window.AdSlot4)||void 0===t||t.events.subscribe({name:"AdSlotReady",scope:"all",callback:N})}),[]);const O=()=>{x.current=Date.now()};(0,i.useEffect)((()=>{var e;const t=null===(e=window.AdSlot4)||void 0===e?void 0:e.events.subscribe({name:"AdLoaded",scope:"intsl",callback:O});return()=>{null==t||t.remove()}}),[]),(0,i.useEffect)((()=>{_&&c()}),[_]);const Z=o()(l,"AdInterstitial-module_modalOverlay__LZ_UW",{"AdInterstitial-module_interstitialPlaceholder__t7Hqq":!k}),U=o()("AdInterstitial-module_adSlug__lH065",{"AdInterstitial-module_adSlugVisible__rYpip":k}),H=o()("AdInterstitial-module_ad__BAtlW",u,{"AdInterstitial-module_fluid__yLAYp":S});return i.createElement("div",{className:Z,style:Object.assign(A?{backgroundColor:A}:{}),ref:C,role:"dialog","aria-label":"Advertisement"},i.createElement("div",{className:U},i.createElement("h3",{style:{visibility:k?"visible":"hidden"}},"advertisement"),i.createElement("div",{ref:L,className:H,id:t,"data-position":n})),i.createElement(v,{backgroundColor:A,onClick:()=>{c(),(e=>{const{loadToSkip:t,timerShown:n}=e;(0,m.j)("moduleInteraction",{eventData:{type:"click_skip",trigger:"ad"},ad:{loadToSkip:t,timerShown:n,pageType:(0,f.Z)(window)}})})({loadToSkip:E(x.current,Date.now()),timerShown:R.current})},timeUntilEnabled:y?D:0,focusOnInterstitial:()=>{C.current&&C.current.focus()},copy:w,className:b}))}}}]);
//# sourceMappingURL=4430.0365c75e96ea479b79d4.js.map
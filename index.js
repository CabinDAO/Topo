'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var e$3="colors",t$4="sizes",r$4="space",n$4={gap:r$4,gridGap:r$4,columnGap:r$4,gridColumnGap:r$4,rowGap:r$4,gridRowGap:r$4,inset:r$4,insetBlock:r$4,insetBlockEnd:r$4,insetBlockStart:r$4,insetInline:r$4,insetInlineEnd:r$4,insetInlineStart:r$4,margin:r$4,marginTop:r$4,marginRight:r$4,marginBottom:r$4,marginLeft:r$4,marginBlock:r$4,marginBlockEnd:r$4,marginBlockStart:r$4,marginInline:r$4,marginInlineEnd:r$4,marginInlineStart:r$4,padding:r$4,paddingTop:r$4,paddingRight:r$4,paddingBottom:r$4,paddingLeft:r$4,paddingBlock:r$4,paddingBlockEnd:r$4,paddingBlockStart:r$4,paddingInline:r$4,paddingInlineEnd:r$4,paddingInlineStart:r$4,top:r$4,right:r$4,bottom:r$4,left:r$4,scrollMargin:r$4,scrollMarginTop:r$4,scrollMarginRight:r$4,scrollMarginBottom:r$4,scrollMarginLeft:r$4,scrollMarginX:r$4,scrollMarginY:r$4,scrollMarginBlock:r$4,scrollMarginBlockEnd:r$4,scrollMarginBlockStart:r$4,scrollMarginInline:r$4,scrollMarginInlineEnd:r$4,scrollMarginInlineStart:r$4,scrollPadding:r$4,scrollPaddingTop:r$4,scrollPaddingRight:r$4,scrollPaddingBottom:r$4,scrollPaddingLeft:r$4,scrollPaddingX:r$4,scrollPaddingY:r$4,scrollPaddingBlock:r$4,scrollPaddingBlockEnd:r$4,scrollPaddingBlockStart:r$4,scrollPaddingInline:r$4,scrollPaddingInlineEnd:r$4,scrollPaddingInlineStart:r$4,fontSize:"fontSizes",background:e$3,backgroundColor:e$3,backgroundImage:e$3,borderImage:e$3,border:e$3,borderBlock:e$3,borderBlockEnd:e$3,borderBlockStart:e$3,borderBottom:e$3,borderBottomColor:e$3,borderColor:e$3,borderInline:e$3,borderInlineEnd:e$3,borderInlineStart:e$3,borderLeft:e$3,borderLeftColor:e$3,borderRight:e$3,borderRightColor:e$3,borderTop:e$3,borderTopColor:e$3,caretColor:e$3,color:e$3,columnRuleColor:e$3,fill:e$3,outline:e$3,outlineColor:e$3,stroke:e$3,textDecorationColor:e$3,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:t$4,minBlockSize:t$4,maxBlockSize:t$4,inlineSize:t$4,minInlineSize:t$4,maxInlineSize:t$4,width:t$4,minWidth:t$4,maxWidth:t$4,height:t$4,minHeight:t$4,maxHeight:t$4,flexBasis:t$4,gridTemplateColumns:t$4,gridTemplateRows:t$4,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i$2=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,o$2=()=>{const e=Object.create(null);return (t,r,...n)=>{const o=(e=>JSON.stringify(e,i$2))(t);return o in e?e[o]:e[o]=r(t,...n)}},l$4=Symbol.for("sxs.internal"),s$1=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),a$2=e=>{for(const t in e)return !0;return !1},{hasOwnProperty:c$3}=Object.prototype,d$3=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),g$4=/\s+(?![^()]*\))/,p$4=e=>t=>e(..."string"==typeof t?String(t).split(g$4):[t]),u$2={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p$4(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:p$4(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:p$4(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:p$4(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:p$4(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:p$4(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},h$4=/([\d.]+)([^]*)/,f$5=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,m$5=(e,t)=>e in b$5&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${d$3(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${d$3(e)}:${r}fit-content`)+i)):String(t),b$5={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",k$3=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?S(t)+(l.includes("$")?"":S(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":""))),y$3=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,$=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,g;const p=e=>{for(c in e){const R=64===c.charCodeAt(0),z=R&&Array.isArray(e[c])?e[c]:[e[c]];for(g of z){const e=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,(e=>e[1].toUpperCase())),z="object"==typeof g&&g&&g.toString===B&&(!n.utils[e]||!t.length);if(e in n.utils&&!z){const t=n.utils[e];if(t!==l){l=t,p(t(g)),l=null;continue}}else if(e in u$2){const t=u$2[e];if(t!==s){s=t,p(t(g)),s=null;continue}}if(R&&(b=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=h$4.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return "("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(h$4,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(h$4,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),z){const e=R?r.concat(c):[...r],n=R?[...t]:f$5(t,c.split(y$3));void 0!==o&&i(x$4(...o)),o=void 0,a(g,n,e);}else void 0===o&&(o=[[],t,r]),c=R||36!==c.charCodeAt(0)?c:`--${S(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=z?g:"number"==typeof g?g&&e in I$1?String(g)+"px":String(g):k$3(m$5(e,null==g?"":g),n.prefix,n.themeMap[e]),o[0].push(`${R?`${c} `:`${d$3(c)}:`}${g}`);}}var b,$;};p(e),void 0!==o&&i(x$4(...o)),o=void 0;};a(e,t,r);},x$4=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,I$1={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R$2=e=>String.fromCharCode(e+(e>25?39:97)),z$1=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=R$2(t%52)+r;return R$2(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),W=["themed","global","styled","onevar","resonevar","allvar","inline"],j=e=>{if(e.href&&!e.href.startsWith(location.origin))return !1;try{return !!e.cssRules}catch(e){return !1}},E$2=e=>{let t;const r=()=>{const{cssRules:e}=t.sheet;return [].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--sxs"))return "";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return "";for(const e in t.rules)if(t.rules[e].group===r)return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")},n=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[];}for(const t in e)delete e[t];}const i=Object(e).styleSheets||[];for(const e of i)if(j(e)){for(let i=0,o=e.cssRules;o[i];++i){const l=Object(o[i]);if(1!==l.type)continue;const s=Object(o[i+1]);if(4!==s.type)continue;++i;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=W[c[0]];d&&(t||(t={sheet:e,reset:n,rules:{},toString:r}),t.rules[d]={group:s,index:i,cache:new Set(c)});}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4));},get cssText(){return "@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r};}const{sheet:o,rules:l}=t;for(let e=W.length-1;e>=0;--e){const t=W[e];if(!l[t]){const r=W[e+1],n=l[r]?l[r].index:o.cssRules.length;o.insertRule("@media{}",n),o.insertRule(`--sxs{--sxs:${e}}`,n),l[t]={group:o.cssRules[n+1],index:n,cache:new Set([e])};}v$4(l[t]);}};return n(),t},v$4=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r;}catch(e){}};},T=Symbol(),w$4=o$2(),M=(e,t)=>w$4(e,(()=>(...r)=>{let n={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[l$4]){null==n.type&&(n.type=t[l$4].type);for(const e of t[l$4].composers)n.composers.add(e);}else t.constructor!==Object||t.$$typeof?null==n.type&&(n.type=t):n.composers.add(C$1(t,e));return null==n.type&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),P(e,n,t)})),C$1=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${S(i.prefix)}c-${z$1(n)}`,l=[],s=[],d=Object.create(null),g=[];for(const e in r)d[e]=String(r[e]);if("object"==typeof e&&e)for(const t in e){p=d,u=t,c$3.call(p,u)||(d[t]="undefined");const r=e[t];for(const e in r){const n={[t]:String(e)};"undefined"===String(e)&&g.push(t);const i=r[e],o=[n,i,!a$2(i)];l.push(o);}}var p,u;if("object"==typeof t&&t)for(const e of t){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!a$2(t)];s.push(n);}return [o,n,l,s,d,g]},P=(e,t,r)=>{const[n,i,o,a]=L(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[T].length;r++){const[n,i]=t[T][r];e.rules[n].apply(i);}return t[T]=[],null}return t[T]=[],t.rules={},W.forEach((e=>t.rules[e]={apply:r=>t[T].push([e,r])})),t})(r):null,d=(c||r).rules,g=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=l=>{l="object"==typeof l&&l||A$1;const{css:s,...p}=l,u={};for(const e in o)if(delete p[e],e in l){let t=l[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||a.has(e)?t:o[e]);}else u[e]=o[e];const h=new Set([...i]);for(const[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),$(i,[`.${n}`],[],e,(e=>{d.styled.apply(e);})));const t=O(o,u,e.media),s=O(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${n}-${z$1(o)}-${t}`;h.add(i);const s=(l?r.rules.resonevar:r.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),$(o,[`.${i}`],[],e,(e=>{a.apply(e);})));}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${n}-${z$1(o)}-${i}`;h.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),$(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e);})));}}if("object"==typeof s&&s){const t=`${n}-i${z$1(s)}-css`;h.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),$(s,[`.${t}`],[],e,(e=>{d.inline.apply(e);})));}for(const e of String(l.className||"").trim().split(/\s+/))e&&h.add(e);const f=p.className=[...h].join(" ");return {type:t.type,className:f,selector:g,props:p,toString:()=>f,deferredInjector:c}};return s$1(p,{className:n,selector:g,[l$4]:t,toString:()=>(r.rules.styled.cache.has(n)||p(),n)})},L=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t);}}return [t,r,n,new Set(i)]},O=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(n===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),c=!0;}a+=o,e=!0;}++o;}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,c]);}return i},A$1={},N=o$2(),D=(e,t)=>N(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=z$1(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of [].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"];}$(n,[],[],e,(e=>{t.rules.global.apply(e);}));}}return ""};return s$1(n,{toString:n})})),H=o$2(),V=(e,t)=>H(e,(()=>r=>{const n=`${S(e.prefix)}k-${z$1(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];$(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o);}return n};return s$1(i,{get name(){return i()},toString:i})})),G$1=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n);}get computedValue(){return "var("+this.variable+")"}get variable(){return "--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},F$1=o$2(),J=(e,t)=>F$1(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${S(e.prefix)}t-${z$1(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${S(e.prefix)}${t}-${r}`,s=k$3(String(n[t][r]),e.prefix,t);o[t][r]=new G$1(r,s,t,e.prefix),l.push(`${i}:${s}`);}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i);}return r};return {...o,get className(){return s()},selector:i,toString:s}})),U=o$2();var X,Y=o$2(),q$1=e=>{const t=(e=>{let t=!1;const r=U(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",i="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...n$4},utils:"object"==typeof e.utils&&e.utils||{}},a=E$2(o),c={css:M(s,a),globalCss:D(s,a),keyframes:V(s,a),createTheme:J(s,a),reset(){a.reset(),c.theme.toString();},theme:{},sheet:a,config:s,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>Y(e,(()=>{const r=M(e,t);return (...e)=>{const t=r(...e),n=t[l$4].type,i=React__default["default"].forwardRef(((e,r)=>{const i=e&&e.as||n,{props:o,deferredInjector:l}=t(e);return delete o.as,o.ref=r,l?React__default["default"].createElement(React__default["default"].Fragment,null,React__default["default"].createElement(i,o),React__default["default"].createElement(l,null)):React__default["default"].createElement(i,o)}));return i.className=t.className,i.displayName=`Styled.${n.displayName||n.name||n}`,i.selector=t.selector,i.toString=()=>t.selector,i[l$4]=t[l$4],i}})))(t),t},K=()=>X||(X=q$1()),re=(...e)=>K().styled(...e);//# sourceMappingUrl=index.map

var _a$1;
var spacing = {
    px: "1px",
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
};
var green = {
    green100: "#E0FFE5",
    green200: "#A2FFB3",
    green300: "#4FFF79",
    green400: "#00FF47",
    green500: "#06DF59",
    green600: "#03AB5B",
    green700: "#06774C",
    green800: "#324841",
    green900: "#1D2B2A",
};
var blue = {
    blue100: "#ECF9FF",
    blue200: "#D0EFFF",
    blue300: "#ACE1FF",
    blue400: "#90C5E3",
    blue500: "#77A9C7",
    blue600: "#507996",
    blue700: "#324E65",
    blue800: "#263A4D",
    blue900: "#192634",
};
var yellow = {
    yellow100: "#FDF3E7",
    yellow200: "#FEE9CB",
    yellow300: "#FED7A2",
    yellow400: "#FDC67B",
    yellow500: "#DEAE6A",
    yellow600: "#AD844C",
    yellow700: "#7B5E35",
    yellow800: "#493922",
    yellow900: "#17120B",
};
var red = {
    red100: "#FBEDE6",
    red200: "#F6DACD",
    red300: "#EBB5A6",
    red400: "#E0907E",
    red500: "#D97763",
    red600: "#CE523C",
    red700: "#A43725",
    red800: "#6B2115",
    red900: "#310B05",
};
var theme = {
    colors: __assign(__assign(__assign(__assign({ forest: green["green800"], sprout: green["green400"], night: green["green900"], sky: blue["blue300"], sand: yellow["yellow100"], wheat: yellow["yellow400"] }, green), blue), yellow), red),
    space: __assign({}, spacing),
    sizes: __assign({}, spacing),
    fonts: {
        sans: "Poppins, -apple-system, system-ui, sans-serif",
        mono: "IBM Plex Mono, menlo, monospace",
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "1.5rem",
        xxxl: "2rem",
    },
    fontWeights: {
        lighest: 200,
        lighter: 300,
        light: 400,
        regular: 500,
        bold: 600,
        bolder: 700,
        boldest: 800,
    },
    borderWidths: {
        px: "1px",
    },
    radii: {
        1: "0.325rem",
        2: "1.5rem",
        3: "3rem",
        pill: "9999px",
    },
    zIndices: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        max: "999",
    },
};
var utils = {
    pt: function (value) { return ({
        paddingTop: value,
    }); },
    pr: function (value) { return ({
        paddingRight: value,
    }); },
    pb: function (value) { return ({
        paddingBottom: value,
    }); },
    pl: function (value) { return ({
        paddingLeft: value,
    }); },
    px: function (value) { return ({
        paddingLeft: value,
        paddingRight: value,
    }); },
    py: function (value) { return ({
        paddingTop: value,
        paddingBottom: value,
    }); },
    m: function (value) { return ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
    }); },
    mt: function (value) { return ({
        marginTop: value,
    }); },
    mr: function (value) { return ({
        marginRight: value,
    }); },
    mb: function (value) { return ({
        marginBottom: value,
    }); },
    ml: function (value) { return ({
        marginLeft: value,
    }); },
    mx: function (value) { return ({
        marginLeft: value,
        marginRight: value,
    }); },
    my: function (value) { return ({
        marginTop: value,
        marginBottom: value,
    }); },
    ta: function (value) { return ({ textAlign: value }); },
    fd: function (value) { return ({ flexDirection: value }); },
    fw: function (value) { return ({ flexWrap: value }); },
    ai: function (value) { return ({ alignItems: value }); },
    ac: function (value) { return ({ alignContent: value }); },
    jc: function (value) { return ({ justifyContent: value }); },
    as: function (value) { return ({ alignSelf: value }); },
    fg: function (value) { return ({ flexGrow: value }); },
    fs: function (value) { return ({ flexShrink: value }); },
    fb: function (value) { return ({ flexBasis: value }); },
    bc: function (value) { return ({
        backgroundColor: value,
    }); },
    br: function (value) { return ({
        borderRadius: value,
    }); },
    btrr: function (value) { return ({
        borderTopRightRadius: value,
    }); },
    bbrr: function (value) { return ({
        borderBottomRightRadius: value,
    }); },
    bblr: function (value) { return ({
        borderBottomLeftRadius: value,
    }); },
    btlr: function (value) { return ({
        borderTopLeftRadius: value,
    }); },
    bs: function (value) { return ({ boxShadow: value }); },
    lh: function (value) { return ({ lineHeight: value }); },
    ox: function (value) { return ({ overflowX: value }); },
    oy: function (value) { return ({ overflowY: value }); },
    pe: function (value) { return ({ pointerEvents: value }); },
    us: function (value) { return ({ userSelect: value }); },
    linearGradient: function () { return ({
        backgroundImage: "linear-gradient({value})",
    }); },
};
var media = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1536px)",
};
var styled = (_a$1 = q$1({
    theme: theme,
    utils: utils,
    media: media,
}), _a$1.styled), css = _a$1.css, getCssText = _a$1.getCssText, keyframes = _a$1.keyframes, globalCss = _a$1.globalCss;

console.log(theme);
var Indicator$2 = styled("span", {
    display: "inline-block",
    height: "$2",
    width: "$2",
    mr: "$1",
    lineHeight: 0,
    borderRadius: 99999,
    backgroundColor: "currentColor",
});
var Tag = styled("div", {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "$1 $4",
    borderRadius: 99999,
    fontFamily: "$sans",
    variants: {
        tone: {
            forest: {
                backgroundColor: "$forest",
                color: "$wheat",
            },
            wheat: {
                backgroundColor: "$wheat",
                color: "$forest",
            },
            sprout: {
                backgroundColor: "$forest",
                color: "$sprout",
            },
            danger: {
                backgroundColor: theme.colors.red200,
                color: theme.colors.red900,
            },
            warning: {
                backgroundColor: theme.colors.yellow200,
                color: theme.colors.yellow900,
            },
            success: {
                backgroundColor: theme.colors.green200,
                color: theme.colors.green900,
            },
            normal: {
                backgroundColor: theme.colors.blue200,
                color: theme.colors.blue900,
            },
        },
    },
    defaultVariants: {
        tone: "forest",
    },
});

var Box = styled("div", {});

var Container$9 = styled(Box, {
    width: "90%",
    maxWidth: "60 rem",
    marginLeft: "auto",
    marginRight: "auto",
    variants: {
        size: {
            tight: {
                maxWidth: "60rem", // 60 rem * 16px = 960px
            },
            normal: {
                maxWidth: "75rem", // 75 rem * 16px = 1200px
            },
            wide: {
                maxWidth: "100rem", // 100 rem * 16px = 1600px
            },
        },
    },
    defaultVariants: {
        size: "normal",
    },
});

var fontSizes = {
    xs: {
        fontSize: "$xs",
    },
    sm: {
        fontSize: "$sm",
    },
    md: {
        fontSize: "$base",
    },
    lg: {
        fontSize: "$lg",
    },
    xl: {
        fontSize: "$xl",
    },
    xxl: {
        fontSize: "$xxl",
    },
    xxxl: {
        fontSize: "$xxxl",
    },
};
var fontStyles = {
    primary: {
        color: "$primary",
    },
    secondary: {
        color: "$secondary",
    },
    tertiary: {
        color: "$tertiary",
    },
    accent: {
        color: "$accent1",
    },
};
var commonTextVariants = {
    uppercase: {
        true: {
            textTransform: "uppercase",
        },
    },
    weight: {
        bold: {
            fontWeight: "$bolder",
        },
        light: {
            fontWeight: "$light",
        },
    },
    bold: {
        true: {
            fontWeight: 600,
        },
    },
    tight: {
        true: {
            margin: 0,
        },
    },
    mono: {
        true: {
            fontFamily: "$mono",
        },
    },
    sans: {
        true: {
            fontFamily: "$sans",
        },
    },
    background: {
        primary: {
            backgroundColor: "$primary",
            padding: "$2 $4"
        },
        secondary: {
            backgroundColor: "$secondary",
            padding: "$2 $4"
        },
        tertiary: {
            backgroundColor: "$tertiary",
            padding: "$2 $4"
        },
        accent1: {
            backgroundColor: "$accent1",
            padding: "$2 $4"
        },
        accent2: {
            backgroundColor: "$accent2",
            padding: "$2 $4"
        },
    },
};

var Heading = styled("h1", {
    fontFamily: "$mono",
    defaultVariants: {
        type: "primary",
        weight: "bold",
    },
    variants: __assign({ type: fontStyles }, commonTextVariants)
});

var Text$1 = styled("p", {
    fontFamily: "$sans",
    fontWeight: "$regular",
    defaultVariants: {
        size: "md",
        type: "primary",
    },
    variants: __assign({ size: fontSizes, type: fontStyles }, commonTextVariants)
});

var _a;
var Card = styled(Box, {
    boxShadow: "0 4px 15px rgb(0 0 0 / 0.25)",
});
var CardHeader = styled(Box, (_a = {
        background: "$forest",
        color: "$sand",
        padding: "$3 $5"
    },
    _a["& ".concat(Heading, ", & ").concat(Text$1)] = {
        color: "$sand",
        textTransform: "capitalize",
        fontFamily: "$mono",
        fontSize: "$base",
        fontWeight: "$light",
        m: 0,
    },
    _a));
var CardBody = styled(Box, { padding: "$5" });

var Divider = styled("hr", {
    margin: "16px 0",
    height: "1px",
    border: 0,
    defaultVariants: {
        color: "sprout"
    },
    variants: {
        color: {
            sprout: {
                background: "$sprout"
            },
            forest: {
                background: "$forest"
            },
            sand: {
                background: "$sand"
            }
        }
    }
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$g = ["color"];
var ArrowRightIcon = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$g);

  return React.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

var _excluded$1q = ["color"];
var Cross1Icon = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1q);

  return React.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

var _excluded$2s = ["color"];
var HamburgerMenuIcon = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2s);

  return React.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    ref: forwardedRef
  }), React.createElement("path", {
    d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
    fill: color,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});

var Button = React.forwardRef(function (_a, ref) {
    var leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, _b = _a.as, as = _b === void 0 ? "button" : _b, onClick = _a.onClick, props = __rest(_a, ["leftIcon", "rightIcon", "children", "as", "onClick"]);
    return (React__default["default"].createElement(ButtonContainer, __assign({ as: as, ref: ref, onClick: function (e) { return !props.disabled && onClick && onClick(e); } }, props),
        leftIcon && React__default["default"].createElement(Icon, { left: true }, leftIcon),
        children,
        rightIcon && React__default["default"].createElement(Icon, { right: true }, rightIcon)));
});
var ButtonContainer = styled("button", {
    display: "inline-flex",
    flexGrow: 0,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "$sans",
    fontWeight: 600,
    border: "none",
    fontSize: "$sm",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    boxSizing: "border-box",
    cursor: "pointer",
    defaultVariants: {
        type: "primary",
        tone: "forest",
    },
    variants: {
        type: {
            primary: {
                border: "none",
                height: "$10",
                py: 0,
                px: "$4",
            },
            secondary: {
                borderStyle: "solid",
                borderWidth: "1px",
                height: "$10",
                py: 0,
                px: "$4",
            },
            link: {
                borderStyle: "solid",
                borderWidth: "1px",
                background: "transparent",
                border: "none",
                p: 0,
            },
            icon: {
                border: "none",
                p: 0,
                height: "$8",
                width: "$8",
            },
        },
        tone: {
            forest: {},
            wheat: {},
        },
        disabled: {
            true: {
                opacity: "0.75",
                cursor: "not-allowed",
                "&:hover": {
                    boxShadow: "none",
                },
            },
        },
    },
    compoundVariants: [
        {
            type: "primary",
            tone: "forest",
            css: {
                backgroundColor: "$forest",
                color: "$sand",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$forest",
                },
            },
        },
        {
            type: "primary",
            tone: "wheat",
            css: {
                backgroundColor: "$wheat",
                color: "$forest",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$wheat",
                },
            },
        },
        {
            type: "secondary",
            tone: "forest",
            css: {
                color: "$forest",
                borderColor: "$forest",
                backgroundColor: "transparent",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$forest",
                },
            },
        },
        {
            type: "secondary",
            tone: "wheat",
            css: {
                color: "$wheat",
                borderColor: "$wheat",
                backgroundColor: "transparent",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$wheat",
                },
            },
        },
        {
            type: "link",
            tone: "forest",
            css: {
                color: "$forest",
            },
        },
        {
            type: "link",
            tone: "wheat",
            css: {
                color: "$wheat",
            },
        },
        {
            type: "icon",
            tone: "forest",
            css: {
                backgroundColor: "$forest",
                color: "$sand",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$forest",
                },
            },
        },
        {
            type: "icon",
            tone: "wheat",
            css: {
                backgroundColor: "$wheat",
                color: "$forest",
                "&:hover": {
                    boxShadow: "0px 0px 0px 1px $colors$wheat",
                },
            },
        },
    ],
});
var Icon = styled("div", {
    height: "$5",
    svg: {
        height: "$5",
        width: "$5",
    },
    variants: {
        left: {
            true: {
                mr: "$2",
            },
        },
        right: {
            true: {
                ml: "$2",
            },
        },
    },
});

var Container$8 = styled("div", {
    width: "100%",
    maxWidth: "64rem",
    mx: "auto",
    px: "$5",
});
var Wrapper = function (_a) {
    var children = _a.children;
    return React__default["default"].createElement(Container$8, null, children);
};

var NavLink = styled("a");

var Nav = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "$mono",
    fontSize: "$sm",
    textTransform: "uppercase",
    a: {
        display: "flex",
        height: "$10",
        px: "$4",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    "@md": {
        ml: "$6",
        mb: "0",
        flexDirection: "row",
    },
});

function Navigation(_a) {
    var links = _a.links;
    var _b = React.useState(false), mobileMenuOpen = _b[0], setMobileMenuOpen = _b[1];
    var nav = links ? (React__default["default"].createElement(Nav, null, links.map(function (_a, i) {
        var label = _a.label, href = _a.href;
        return (React__default["default"].createElement(NavLink, { href: href, key: i }, label));
    }))) : null;
    var joinButton = (React__default["default"].createElement(Button, { tone: "wheat", as: "a", href: "https://discord.gg/N6hVmFygjR" }, "Join the community"));
    var toggle = (React__default["default"].createElement(MenuToggle, { onClick: function () { return setMobileMenuOpen(!mobileMenuOpen); } }, mobileMenuOpen ? React__default["default"].createElement(Cross1Icon, null) : React__default["default"].createElement(HamburgerMenuIcon, null)));
    var mobileNav = (React__default["default"].createElement(MobileNav, null,
        React__default["default"].createElement(Container$7, null,
            React__default["default"].createElement(Wordmark, null,
                React__default["default"].createElement("a", { href: "/" }, "Cabin")),
            toggle),
        React__default["default"].createElement(MobileMenu, { open: mobileMenuOpen },
            nav,
            joinButton)));
    var desktopNav = (React__default["default"].createElement(DesktopNav, null,
        React__default["default"].createElement(Container$7, null,
            React__default["default"].createElement(Wordmark, null,
                React__default["default"].createElement("a", { href: "/" }, "Cabin")),
            links && React__default["default"].createElement(Links, null, nav),
            joinButton)));
    return (React__default["default"].createElement(Bar, null,
        React__default["default"].createElement(Wrapper, null,
            mobileNav,
            desktopNav)));
}
var Bar = styled("header", {
    display: "flex",
    alignItems: "center",
    backgroundColor: "$sand",
    borderBottom: "1px solid $sprout",
    "@md": {
        border: "none",
    },
});
var MobileNav = styled("nav", {
    display: "flex",
    flexDirection: "column",
    "@md": {
        display: "none",
    },
});
var DesktopNav = styled("div", {
    display: "none",
    "@md": {
        display: "flex",
    },
});
var Container$7 = styled("div", {
    height: "4rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@md": {
        height: "$20",
    },
});
var Wordmark = styled("div", {
    fontSize: "$xxl",
    m: "0",
    a: {
        color: "inherit",
        textDecoration: "none",
        fontFamily: "$sans",
        fontWeight: 600,
    },
    "@md": {
        fontSize: "$xxxl",
        justifyContent: "center",
    },
});
var Links = styled("div", {
    display: "flex",
    alignItems: "center",
});
var MenuToggle = styled("button", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "$10",
    width: "$10",
    border: "none",
    background: "none",
    svg: {
        height: "$6",
        width: "$6",
        color: "$forest",
    },
    "@md": {
        display: "none",
    },
});
var MobileMenu = styled("div", {
    display: "none",
    flexDirection: "column",
    alignItems: "center",
    mb: "$6",
    variants: {
        open: {
            true: {
                display: "flex",
            },
        },
    },
});

function Blurb(_a) {
    var heading = _a.heading, body = _a.body, link = _a.link;
    return (React__default["default"].createElement(Container$6, { id: "about" },
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(Content$5, null,
                React__default["default"].createElement("h2", null, heading),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("p", null, body),
                    link && link.href &&
                        React__default["default"].createElement(Button, { as: "a", type: "link", href: "https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4", leftIcon: React__default["default"].createElement(ArrowRightIcon, null) }, link.label || "Learn more"))))));
}
var Container$6 = styled('section', {
    pt: '$10',
    pb: '$20',
    '@md': {
        pt: '$20',
        pb: '$24',
    },
});
var Content$5 = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    px: '$10',
    py: '$8',
    border: '1px solid $sprout',
    br: '$2',
    h2: {
        mt: '$1',
        mb: '$0',
        fontFamily: '$mono',
        fontSize: '$xl',
        fontWeight: 600,
        lineHeight: 1.6,
        maxWidth: '28rem',
        flex: '1',
    },
    a: {
        mt: '$2',
    },
    div: {
        flex: '2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    '@md': {
        flexDirection: 'row',
        br: '$3',
        h2: {
            fontSize: '$xxl',
            maxWidth: '40rem',
        },
    },
});

function CallToAction(_a) {
    var heading = _a.heading, primaryLink = _a.primaryLink, secondaryLink = _a.secondaryLink;
    return (React__default["default"].createElement(Wrapper, null,
        React__default["default"].createElement(Container$5, null,
            React__default["default"].createElement("h2", null, heading),
            React__default["default"].createElement(Actions, null,
                React__default["default"].createElement(Button, { tone: "wheat", as: "a", href: primaryLink.href }, primaryLink.label),
                secondaryLink &&
                    React__default["default"].createElement(Button, { tone: "forest", type: "link", as: "a", href: secondaryLink.href }, secondaryLink.label)))));
}
var Container$5 = styled('div', {
    mb: '$24',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    px: '$10',
    pt: '$10',
    pb: '$1',
    border: '1px solid $sprout',
    br: '$2',
    h2: {
        fontFamily: '$mono',
        fontSize: '$xxl',
        fontWeight: 600,
        lineHeight: 1.6,
        mt: '0',
    },
    '@md': {
        br: '$3',
        mb: '$32',
        py: '$12',
        h2: {
            fontSize: '$xxxl',
            maxWidth: '40rem',
        },
    },
});
var Actions = styled('div', {
    mt: '$2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '> *': {
        mb: '$6',
    },
    '@md': {
        flexDirection: 'row',
        '> *': {
            mb: '$0',
            ml: '$6',
            '&:first-child': {
                ml: '$0',
            },
        },
    },
});

function composeRefs(...o){return e=>o.forEach((o=>function(o,e){"function"==typeof o?o(e):null!=o&&(o.current=e);}(o,e)))}function useComposedRefs(...e){return React__namespace.useCallback(composeRefs(...e),e)}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

const Slot=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>{const{children:a,...s}=e;return React__namespace.Children.toArray(a).some(l$3)?/*#__PURE__*/React__namespace.createElement(React__namespace.Fragment,null,React__namespace.Children.map(a,(e=>l$3(e)?/*#__PURE__*/React__namespace.createElement(n$3,_extends$3({},s,{ref:o}),e.props.children):e))):/*#__PURE__*/React__namespace.createElement(n$3,_extends$3({},s,{ref:o}),a)}));Slot.displayName="Slot";const n$3=/*#__PURE__*/React__namespace.forwardRef(((r,n)=>{const{children:l,...a}=r;return React__namespace.isValidElement(l)?/*#__PURE__*/React__namespace.cloneElement(l,{...o$1(a,l.props),ref:composeRefs(n,l.ref)}):React__namespace.Children.count(l)>1?React__namespace.Children.only(null):null}));n$3.displayName="SlotClone";const Slottable=({children:e})=>/*#__PURE__*/React__namespace.createElement(React__namespace.Fragment,null,e);function l$3(e){return React__namespace.isValidElement(e)&&e.type===Slottable}function o$1(e,t){const r={...t};for(const n in t){const l=e[n],o=t[n];/^on[A-Z]/.test(n)?r[n]=(...e)=>{null==o||o(...e),null==l||l(...e);}:"style"===n?r[n]={...l,...o}:"className"===n&&(r[n]=[l,o].filter(Boolean).join(" "));}return {...e,...r}}

const Primitive=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce(((o,i)=>({...o,[i]:/*#__PURE__*/React__namespace.forwardRef(((o,m)=>{const{asChild:a,...s}=o,n=a?Slot:i;return React__namespace.useEffect((()=>{window[Symbol.for("radix-ui")]=!0;}),[]),/*#__PURE__*/React__namespace.createElement(n,_extends$3({},s,{ref:m}))}))})),{});

const useLayoutEffect=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?React__namespace.useLayoutEffect:()=>{};

const Presence=u=>{const{present:o,children:i}=u,s=function(n){const[u,o]=React__namespace.useState(),i=React__namespace.useRef({}),s=React__namespace.useRef(n),c=React__namespace.useRef("none"),a=n?"mounted":"unmounted",[d,m]=function(e,n){return React__namespace.useReducer(((e,t)=>{const r=n[e][t];return null!=r?r:e}),e)}(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return React__namespace.useEffect((()=>{const e=r$3(i.current);c.current="mounted"===d?e:"none";}),[d]),useLayoutEffect((()=>{const e=i.current,t=s.current;if(t!==n){const u=c.current,o=r$3(e);if(n)m("MOUNT");else if("none"===o||"none"===(null==e?void 0:e.display))m("UNMOUNT");else {const e=u!==o;m(t&&e?"ANIMATION_OUT":"UNMOUNT");}s.current=n;}}),[n,m]),useLayoutEffect((()=>{if(u){const e=e=>{const n=r$3(i.current).includes(e.animationName);e.target===u&&n&&m("ANIMATION_END");},n=e=>{e.target===u&&(c.current=r$3(i.current));};return u.addEventListener("animationstart",n),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",n),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e);}}m("ANIMATION_END");}),[u,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:React__namespace.useCallback((e=>{e&&(i.current=getComputedStyle(e)),o(e);}),[])}}(o),c="function"==typeof i?i({present:s.isPresent}):React__namespace.Children.only(i),a=useComposedRefs(s.ref,c.ref);return "function"==typeof i||s.isPresent?/*#__PURE__*/React__namespace.cloneElement(c,{ref:a}):null};function r$3(e){return (null==e?void 0:e.animationName)||"none"}Presence.displayName="Presence";

const r$2=React__namespace["useId".toString()]||(()=>{});let n$2=0;function useId(o){const[u,i]=React__namespace.useState(r$2());return useLayoutEffect((()=>{o||i((t=>null!=t?t:String(n$2++)));}),[o]),o||(u?`radix-${u}`:"")}

function createContext(t,n){const o=/*#__PURE__*/React__namespace.createContext(n);function r(t){const{children:n,...r}=t,c=React__namespace.useMemo((()=>r),Object.values(r));return React__namespace.createElement(o.Provider,{value:c},n)}return r.displayName=t+"Provider",[r,function(r){const c=React__namespace.useContext(o);if(c)return c;if(void 0!==n)return n;throw new Error(`\`${r}\` must be used within \`${t}\``)}]}function createContextScope(n,o=[]){let r=[];const c=()=>{const t=r.map((t=>/*#__PURE__*/React__namespace.createContext(t)));return function(o){const r=(null==o?void 0:o[n])||t;return React__namespace.useMemo((()=>({[`__scope${n}`]:{...o,[n]:r}})),[o,r])}};return c.scopeName=n,[function(t,o){const c=/*#__PURE__*/React__namespace.createContext(o),u=r.length;function s(t){const{scope:o,children:r,...s}=t,i=(null==o?void 0:o[n][u])||c,a=React__namespace.useMemo((()=>s),Object.values(s));return React__namespace.createElement(i.Provider,{value:a},r)}return r=[...r,o],s.displayName=t+"Provider",[s,function(r,s){const i=(null==s?void 0:s[n][u])||c,a=React__namespace.useContext(i);if(a)return a;if(void 0!==o)return o;throw new Error(`\`${r}\` must be used within \`${t}\``)}]},t$3(c,...o)]}function t$3(...t){const n=t[0];if(1===t.length)return n;const o=()=>{const o=t.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(t){const r=o.reduce(((e,{useScope:n,scopeName:o})=>({...e,...n(t)[`__scope${o}`]})),{});return React__namespace.useMemo((()=>({[`__scope${n.scopeName}`]:r})),[r])}};return o.scopeName=n.scopeName,o}

const[i$1,a$1]=createContext("Label",{id:void 0,controlRef:{current:null}});const useLabelContext=e=>{const t=a$1("LabelConsumer"),{controlRef:r}=t;return React__namespace.useEffect((()=>{e&&(r.current=e);}),[e,r]),t.id};

function useSize(r){const[i,t]=React__namespace.useState(void 0);return React__namespace.useEffect((()=>{if(r){const e=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const i=e[0];let o,n;if("borderBoxSize"in i){const e=i.borderBoxSize,r=Array.isArray(e)?e[0]:e;o=r.inlineSize,n=r.blockSize;}else {const e=r.getBoundingClientRect();o=e.width,n=e.height;}t({width:o,height:n});}));return e.observe(r,{box:"border-box"}),()=>e.unobserve(r)}t(void 0);}),[r]),i}

function usePrevious(r){const u=React__namespace.useRef({value:r,previous:r});return React__namespace.useMemo((()=>(u.current.value!==r&&(u.current.previous=u.current.value,u.current.value=r),u.current.previous)),[r])}

function useCallbackRef(r){const t=React__namespace.useRef(r);return React__namespace.useEffect((()=>{t.current=r;})),React__namespace.useMemo((()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}

function useControllableState({prop:o,defaultProp:r,onChange:n=(()=>{})}){const[a,u]=function({defaultProp:o,onChange:r}){const n=React__namespace.useState(o),[a]=n,u=React__namespace.useRef(a),c=useCallbackRef(r);return React__namespace.useEffect((()=>{u.current!==a&&(c(a),u.current=a);}),[a,u,c]),n}({defaultProp:r,onChange:n}),c=void 0!==o,f=c?o:a,l=useCallbackRef(n);return [f,React__namespace.useCallback((e=>{if(c){const t=e,r="function"==typeof e?t(o):e;r!==o&&l(r);}else u(e);}),[c,o,u,l])]}

function composeEventHandlers(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}

const[u$1,p$3]=createContextScope("Checkbox");const[m$4,b$4]=u$1("Checkbox");const Checkbox$1=/*#__PURE__*/React__namespace.forwardRef(((t,o)=>{const{__scopeCheckbox:a,"aria-labelledby":i,name:u,checked:p,defaultChecked:b,required:k,disabled:C,value:y="on",onCheckedChange:v,...E}=t,[w,g]=React__namespace.useState(null),I=useComposedRefs(o,(e=>g(e))),R=useLabelContext(w),D=i||R,P=React__namespace.useRef(!1),_=!w||Boolean(w.closest("form")),[q=!1,K]=useControllableState({prop:p,defaultProp:b,onChange:v});return React__namespace.createElement(m$4,{scope:a,state:q,disabled:C},/*#__PURE__*/React__namespace.createElement(Primitive.button,_extends$3({type:"button",role:"checkbox","aria-checked":x$3(q)?"mixed":q,"aria-labelledby":D,"aria-required":k,"data-state":h$3(q),"data-disabled":C?"":void 0,disabled:C,value:y},E,{ref:I,onKeyDown:composeEventHandlers(t.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault();})),onClick:composeEventHandlers(t.onClick,(e=>{K((e=>!!x$3(e)||!e)),_&&(P.current=e.isPropagationStopped(),P.current||e.stopPropagation());}))})),_&&/*#__PURE__*/React__namespace.createElement(f$4,{control:w,bubbles:!P.current,name:u,value:y,checked:q,required:k,disabled:C,style:{transform:"translateX(-100%)"}}))}));const CheckboxIndicator=/*#__PURE__*/React__namespace.forwardRef(((r,o)=>{const{__scopeCheckbox:a,forceMount:n,...c}=r,i=b$4("CheckboxIndicator",a);return React__namespace.createElement(Presence,{present:n||x$3(i.state)||!0===i.state},/*#__PURE__*/React__namespace.createElement(Primitive.span,_extends$3({"data-state":h$3(i.state),"data-disabled":i.disabled?"":void 0},c,{ref:o,style:{pointerEvents:"none",...r.style}})))}));const f$4=e=>{const{control:t,checked:r,bubbles:n=!0,...c}=e,i=React__namespace.useRef(null),s=usePrevious(r),u=useSize(t);return React__namespace.useEffect((()=>{const e=i.current,t=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==r&&o){const t=new Event("click",{bubbles:n});e.indeterminate=x$3(r),o.call(e,!x$3(r)&&r),e.dispatchEvent(t);}}),[s,r,n]),/*#__PURE__*/React__namespace.createElement("input",_extends$3({type:"checkbox","aria-hidden":!0,defaultChecked:!x$3(r)&&r},c,{tabIndex:-1,ref:i,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x$3(e){return "indeterminate"===e}function h$3(e){return x$3(e)?"indeterminate":e?"checked":"unchecked"}const Root$6=Checkbox$1;const Indicator$1=CheckboxIndicator;

var StyledBox = styled(Root$6, {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "$wheat",
    borderStyle: "solid",
    padding: 0,
    width: 24,
    height: 24,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "&[disabled]": {
        backgroundColor: "#FFEED9",
    },
    "&[data-state=checked]": {
        backgroundColor: "$forest",
        borderColor: "$forest",
        color: "$sand",
    },
    "&[data-state=checked][disabled]": {
        backgroundColor: "$wheat",
        borderColor: "$wheat",
        color: "$sand",
    },
});
var Check$1 = styled(Indicator$1, {
    width: 14,
    height: 14,
});
var Checkbox = function (props) {
    return (React__default["default"].createElement(StyledBox, __assign({}, props),
        React__default["default"].createElement(Check$1, null,
            React__default["default"].createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.3468 0.963917C13.8091 1.26616 13.9388 1.8859 13.6366 2.34814L6.83659 12.7482C6.67633 12.9933 6.4167 13.1557 6.12624 13.1928C5.83576 13.2299 5.54363 13.1378 5.32694 12.9408L0.92694 8.94083C0.518284 8.56932 0.488172 7.93687 0.859676 7.52822C1.23118 7.11956 1.86363 7.08944 2.27228 7.46096L5.80448 10.672L11.9627 1.25364C12.2649 0.791404 12.8846 0.661693 13.3468 0.963917Z", fill: "currentColor" })))));
};

var ConvertKit = function (_a) {
    var id = _a.id;
    React.useEffect(function () {
        if (!document.getElementById(id)) {
            var script = document.createElement("script");
            script.async = true;
            script.src = "https://prodigious-trader-7332.ck.page/".concat(id, "/index.js");
            script.id = id;
            document.head.appendChild(script);
        }
        return function () {
            var _a, _b;
            (_b = (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
    }, [id]);
    return React__default["default"].createElement("script", { "data-uid": id });
};

function FeatureHighlight(_a) {
    var heading = _a.heading, body = _a.body, link = _a.link, BackgroundImageComponent = _a.BackgroundImageComponent, ImageComponent = _a.ImageComponent, _b = _a.reversed, reversed = _b === void 0 ? false : _b;
    return (React__default["default"].createElement(Container$4, null,
        BackgroundImageComponent && React__default["default"].createElement(BackgroundImageComponent, { className: "background-image" }),
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(Content$4, { reversed: reversed },
                React__default["default"].createElement(Text, { reversed: reversed },
                    React__default["default"].createElement("h2", null, heading),
                    React__default["default"].createElement("p", null, body),
                    link && link.href &&
                        React__default["default"].createElement(Button, { as: "a", type: "link", href: "https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4", leftIcon: React__default["default"].createElement(ArrowRightIcon, null) }, link.label || "Learn more")),
                React__default["default"].createElement(Frame$2, null,
                    React__default["default"].createElement(ImageComponent, { className: "image" }))))));
}
var Container$4 = styled('section', {
    position: 'relative',
    bc: '$forest',
    '& > span > img': {
        filter: 'grayscale(0.75) contrast(0.75) brightness(0.25)',
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '$forest',
        opacity: '0.50',
    },
    '& img.background-image': {
        position: "absolute",
        inset: "0px",
        boxSizing: "border-box",
        padding: "0px",
        border: "none",
        margin: "auto",
        display: "block",
        width: "0px",
        height: "0px",
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        objectFit: "cover"
    },
});
var Content$4 = styled('div', {
    position: 'relative',
    zIndex: '$1',
    color: '$sand',
    py: '$20',
    display: 'flex',
    flexDirection: 'column-reverse',
    h2: {
        fontSize: '$xxl',
        fontFamily: '$mono',
        fontWeight: '$600',
    },
    p: {
        lineHeight: 1.6,
        marginBottom: 0,
    },
    a: {
        mt: '$2',
    },
    '@md': {
        py: '$32',
        flexDirection: 'row',
        alignItems: 'center',
        '> div': {
            width: '50%',
        },
        h2: {
            fontSize: '$xxxl',
        },
    },
    variants: {
        reversed: {
            true: {
                '@md': {
                    flexDirection: 'row-reverse',
                },
            },
        },
    },
});
var Text = styled('div', {
    mt: '$12',
    textAlign: 'center',
    '@md': {
        mt: '0',
        pr: '$20',
        textAlign: 'start',
    },
    variants: {
        reversed: {
            true: {
                '@md': {
                    pr: '0',
                    pl: '$20',
                },
            },
        },
    },
});
var Frame$2 = styled('div', {
    br: '$2',
    boxShadow: '0 0 0 $sizes$px $colors$sprout',
    overflow: 'hidden',
    lineHeight: '0',
    bc: '$forest',
    '@md': {
        br: '$3',
    },
    '& img.image': {
        objectFit: 'cover',
    },
});

var ColorSvg = re("svg", {
    color: "currentColor",
    display: "inline-block",
    variants: {
        color: {
            sand: {
                color: "$sand",
            },
            sprout: {
                color: "$sprout",
            },
            wheat: {
                color: "$wheat",
            },
            forest: {
                color: "$forest",
            },
        },
    },
});
var iconSizes = {
    sm: {
        height: 17,
    },
    md: {
        height: 42,
    },
    lg: {
        height: 194,
    },
    xl: {
        height: 312,
    },
};
var BoxTreeIcon = function (_a) {
    var size = _a.size, color = _a.color;
    var dimensions = iconSizes[size];
    return (React__default["default"].createElement(ColorSvg, __assign({ viewBox: "0 0 194 194", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: color }, dimensions),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M194 0H0V194H194V0ZM96.8232 35.1344L41.6592 75.1283V145.462L90.081 145.462V128.905H66.483L96.8233 59.9583L127.163 128.905H103.566V145.462L151.987 145.462V75.1283L96.8232 35.1344Z", fill: "currentColor" })));
};
var TreeIcon = function (_a) {
    var size = _a.size, color = _a.color;
    var dimensions = iconSizes[size];
    return (React__default["default"].createElement(ColorSvg, __assign({ viewBox: "0 0 194 194", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: color }, dimensions),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 70.341L97.022 0L194.044 70.341V194.044L108.88 194.044V164.923H150.384L97.0221 43.6599L43.6599 164.923H85.1638V194.044L0 194.044V70.341Z", fill: "currentColor" })));
};
var wordmarkSizes = {
    sm: {
        height: 14,
    },
    md: {
        height: 42,
    },
    lg: {
        height: 88,
    },
    xl: {
        height: 120,
    },
};
var WordIcon = function (_a) {
    var size = _a.size, color = _a.color;
    var dimensions = wordmarkSizes[size];
    return (React__default["default"].createElement(ColorSvg, __assign({ viewBox: "0 0 327 88", color: color }, dimensions),
        React__default["default"].createElement("path", { d: "M0.85 48.5C0.85 40.9467 2.53667 34.2 5.91 28.26C9.35667 22.2467 14.0133 17.59 19.88 14.29C25.82 10.9167 32.4567 9.23 39.79 9.23C48.37 9.23 55.8867 11.43 62.34 15.83C68.7933 20.23 73.3033 26.3167 75.87 34.09H58.16C56.4 30.4233 53.9067 27.6733 50.68 25.84C47.5267 24.0067 43.86 23.09 39.68 23.09C35.2067 23.09 31.21 24.1533 27.69 26.28C24.2433 28.3333 21.53 31.2667 19.55 35.08C17.6433 38.8933 16.69 43.3667 16.69 48.5C16.69 53.56 17.6433 58.0333 19.55 61.92C21.53 65.7333 24.2433 68.7033 27.69 70.83C31.21 72.8833 35.2067 73.91 39.68 73.91C43.86 73.91 47.5267 72.9933 50.68 71.16C53.9067 69.2533 56.4 66.4667 58.16 62.8H75.87C73.3033 70.6467 68.7933 76.77 62.34 81.17C55.96 85.4967 48.4433 87.66 39.79 87.66C32.4567 87.66 25.82 86.01 19.88 82.71C14.0133 79.3367 9.35667 74.68 5.91 68.74C2.53667 62.8 0.85 56.0533 0.85 48.5ZM85.0636 56.31C85.0636 50.15 86.2736 44.6867 88.6936 39.92C91.1869 35.1533 94.5236 31.4867 98.7036 28.92C102.957 26.3533 107.687 25.07 112.894 25.07C117.44 25.07 121.4 25.9867 124.774 27.82C128.22 29.6533 130.97 31.9633 133.024 34.75V26.06H148.534V87H133.024V78.09C131.044 80.95 128.294 83.3333 124.774 85.24C121.327 87.0733 117.33 87.99 112.784 87.99C107.65 87.99 102.957 86.67 98.7036 84.03C94.5236 81.39 91.1869 77.6867 88.6936 72.92C86.2736 68.08 85.0636 62.5433 85.0636 56.31ZM133.024 56.53C133.024 52.79 132.29 49.6 130.824 46.96C129.357 44.2467 127.377 42.1933 124.884 40.8C122.39 39.3333 119.714 38.6 116.854 38.6C113.994 38.6 111.354 39.2967 108.934 40.69C106.514 42.0833 104.534 44.1367 102.994 46.85C101.527 49.49 100.794 52.6433 100.794 56.31C100.794 59.9767 101.527 63.2033 102.994 65.99C104.534 68.7033 106.514 70.7933 108.934 72.26C111.427 73.7267 114.067 74.46 116.854 74.46C119.714 74.46 122.39 73.7633 124.884 72.37C127.377 70.9033 129.357 68.85 130.824 66.21C132.29 63.4967 133.024 60.27 133.024 56.53ZM178.974 34.97C180.954 32.0367 183.668 29.6533 187.114 27.82C190.634 25.9867 194.631 25.07 199.104 25.07C204.311 25.07 209.004 26.3533 213.184 28.92C217.438 31.4867 220.774 35.1533 223.194 39.92C225.688 44.6133 226.934 50.0767 226.934 56.31C226.934 62.5433 225.688 68.08 223.194 72.92C220.774 77.6867 217.438 81.39 213.184 84.03C209.004 86.67 204.311 87.99 199.104 87.99C194.558 87.99 190.561 87.11 187.114 85.35C183.741 83.5167 181.028 81.17 178.974 78.31V87H163.574V5.6H178.974V34.97ZM211.204 56.31C211.204 52.6433 210.434 49.49 208.894 46.85C207.428 44.1367 205.448 42.0833 202.954 40.69C200.534 39.2967 197.894 38.6 195.034 38.6C192.248 38.6 189.608 39.3333 187.114 40.8C184.694 42.1933 182.714 44.2467 181.174 46.96C179.708 49.6733 178.974 52.8633 178.974 56.53C178.974 60.1967 179.708 63.3867 181.174 66.1C182.714 68.8133 184.694 70.9033 187.114 72.37C189.608 73.7633 192.248 74.46 195.034 74.46C197.894 74.46 200.534 73.7267 202.954 72.26C205.448 70.7933 207.428 68.7033 208.894 65.99C210.434 63.2767 211.204 60.05 211.204 56.31ZM245.935 18.8C243.222 18.8 240.948 17.9567 239.115 16.27C237.355 14.51 236.475 12.3467 236.475 9.78C236.475 7.21333 237.355 5.08666 239.115 3.39999C240.948 1.64 243.222 0.759996 245.935 0.759996C248.648 0.759996 250.885 1.64 252.645 3.39999C254.478 5.08666 255.395 7.21333 255.395 9.78C255.395 12.3467 254.478 14.51 252.645 16.27C250.885 17.9567 248.648 18.8 245.935 18.8ZM253.525 26.06V87H238.125V26.06H253.525ZM302.51 25.18C309.77 25.18 315.637 27.49 320.11 32.11C324.584 36.6567 326.82 43.0367 326.82 51.25V87H311.42V53.34C311.42 48.5 310.21 44.7967 307.79 42.23C305.37 39.59 302.07 38.27 297.89 38.27C293.637 38.27 290.264 39.59 287.77 42.23C285.35 44.7967 284.14 48.5 284.14 53.34V87H268.74V26.06H284.14V33.65C286.194 31.01 288.797 28.9567 291.95 27.49C295.177 25.95 298.697 25.18 302.51 25.18Z", fill: "currentColor" })));
};
var TokenIcon = function (_a) {
    var size = _a.size, color = _a.color;
    var dimensions = wordmarkSizes[size];
    return (React__default["default"].createElement(ColorSvg, __assign({ viewBox: "0 0 317 91", color: color }, dimensions),
        React__default["default"].createElement("path", { d: "M32.75 81.69C30.0367 81.6167 27.47 81.2133 25.05 80.48L23.07 90.38H15.04L17.57 77.84C11.9233 74.9067 7.74333 70.6167 5.03 64.97C2.31667 59.3233 0.96 52.6133 0.96 44.84C0.96 38.3867 2.13333 32.63 4.48 27.57C6.82667 22.4367 10.2733 18.2567 14.82 15.03C19.44 11.73 25.0133 9.67666 31.54 8.87L33.3 0.509993H41.33L39.68 8.43C42.3933 8.57666 44.9967 8.90666 47.49 9.42L49.25 0.509993H57.28L55.08 11.4C56.1067 11.7667 57.0967 12.17 58.05 12.61C59.0767 12.9767 60.0667 13.38 61.02 13.82L55.74 27.02C55.1533 26.6533 54.5667 26.36 53.98 26.14C53.3933 25.92 52.8067 25.6633 52.22 25.37L43.53 68.05C45.8767 67.7567 48.2233 67.28 50.57 66.62C52.99 65.96 55.52 65.1533 58.16 64.2V77.73C52.66 80.0767 46.8667 81.3967 40.78 81.69L39.02 90.38H30.99L32.75 81.69ZM44.74 22.73C43.64 22.3633 42.54 22.1433 41.44 22.07C40.34 21.9233 39.3867 21.85 38.58 21.85H36.93L27.91 66.4C29.01 66.9133 30.1833 67.3167 31.43 67.61C32.75 67.9033 34.1067 68.1233 35.5 68.27L44.74 22.73ZM28.57 23.72C24.9767 25.4067 22.2267 28.0833 20.32 31.75C18.4133 35.3433 17.46 39.7433 17.46 44.95C17.46 48.25 17.7533 51.22 18.34 53.86C18.9267 56.4267 19.8433 58.6633 21.09 60.57L28.57 23.72ZM117.842 69.37H87.2619L82.2019 84H66.0319L93.6419 7.10999H111.572L139.182 84H122.902L117.842 69.37ZM113.662 57.05L102.552 24.93L91.4419 57.05H113.662ZM193.062 44.62C197.389 45.4267 200.945 47.59 203.732 51.11C206.519 54.63 207.912 58.6633 207.912 63.21C207.912 67.3167 206.885 70.9467 204.832 74.1C202.852 77.18 199.955 79.6 196.142 81.36C192.329 83.12 187.819 84 182.612 84H149.502V7.22H181.182C186.389 7.22 190.862 8.06333 194.602 9.75C198.415 11.4367 201.275 13.7833 203.182 16.79C205.162 19.7967 206.152 23.2067 206.152 27.02C206.152 31.4933 204.942 35.2333 202.522 38.24C200.175 41.2467 197.022 43.3733 193.062 44.62ZM164.902 38.9H178.982C182.649 38.9 185.472 38.0933 187.452 36.48C189.432 34.7933 190.422 32.41 190.422 29.33C190.422 26.25 189.432 23.8667 187.452 22.18C185.472 20.4933 182.649 19.65 178.982 19.65H164.902V38.9ZM180.412 71.46C184.152 71.46 187.049 70.58 189.102 68.82C191.229 67.06 192.292 64.5667 192.292 61.34C192.292 58.04 191.192 55.4733 188.992 53.64C186.792 51.7333 183.822 50.78 180.082 50.78H164.902V71.46H180.412ZM235.586 7.22V84H220.186V7.22H235.586ZM316.471 84H301.071L266.201 31.31V84H250.801V7.10999H266.201L301.071 59.91V7.10999H316.471V84Z", fill: "currentColor" })));
};
var Logo = function (_a) {
    var box = _a.box, color = _a.color, _b = _a.size, size = _b === void 0 ? "lg" : _b, _c = _a.variant, variant = _c === void 0 ? "logomark" : _c; _a.className; _a.style; var props = __rest(_a, ["box", "color", "size", "variant", "className", "style"]);
    if (variant === "token") {
        return React__default["default"].createElement(TokenIcon, __assign({ size: size, color: color }, props));
    }
    if (variant === "wordmark") {
        return React__default["default"].createElement(WordIcon, __assign({ size: size, color: color }, props));
    }
    if (box) {
        return React__default["default"].createElement(BoxTreeIcon, __assign({ size: size, color: color }, props));
    }
    return React__default["default"].createElement(TreeIcon, __assign({ size: size, color: color }, props));
};
re("div", {
    display: "inline-flex",
    alignItems: "center",
    variants: {
        size: {
            sm: {
                fontSize: "$sm",
                gap: 12,
            },
            md: {
                fontSize: "$md",
                gap: 24,
            },
            lg: {
                fontSize: "$lg",
                gap: 32,
            },
            xl: {
                fontSize: "$xl",
                gap: 40,
            },
        },
        direction: {
            horizontal: {
                flexDirection: "row",
            },
            vertical: {
                flexDirection: "column",
            },
        },
    },
});

function Footer(_a) {
    var links = _a.links, children = _a.children;
    return (React__default["default"].createElement(Container$3, null,
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(Content$3, null,
                React__default["default"].createElement(Logo, { size: "md", color: "sprout" }),
                children ? React__default["default"].createElement(ChildrenWrapper, null, children) : null,
                links && (React__default["default"].createElement(NavContainer, null,
                    React__default["default"].createElement(Nav, null, links.map(function (_a, i) {
                        var label = _a.label, href = _a.href;
                        return (React__default["default"].createElement(NavLink, { href: href, key: i }, label));
                    }))))))));
}
var Container$3 = styled("footer", {
    bc: "$forest",
    color: "$sand",
    pt: "$12",
    pb: "$6",
    "@md": {
        pb: "$8",
    },
});
var Content$3 = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
var ChildrenWrapper = styled("div", {
    marginTop: "$8",
    marginBottom: "$4",
});
var NavContainer = styled("div", {
    marginTop: "$6",
    display: "flex",
    alignItems: "center",
    flex: 2,
});

var HandleTag = function (_a) {
    var children = _a.children, AvatarImageComponent = _a.AvatarImageComponent, _b = _a.theme, theme = _b === void 0 ? "light" : _b;
    return (React__default["default"].createElement(Container$2, { theme: theme },
        React__default["default"].createElement(Frame$1, null,
            React__default["default"].createElement(AvatarImageComponent, null)),
        children));
};
var Container$2 = styled("div", {
    br: "$pill",
    borderWidth: "$px",
    borderStyle: "solid",
    padding: "$2 $4 $2 $2",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    defaultVariants: {
        theme: "light",
    },
    variants: {
        theme: {
            light: {
                borderColor: "rgba(0,0,0,0.25)",
                color: "$forest",
            },
            dark: {
                borderColor: "rgba(255,255,255,0.25)",
                color: "$sand",
            },
        },
    },
});
var Frame$1 = styled("div", {
    objectFit: "cover",
    width: "$6",
    height: "$6",
    backgroundColor: "$wheat",
    br: "$pill",
    mr: "$2",
    overflow: 'hidden',
    img: {
        objectFit: "cover",
    },
});

function Hero(_a) {
    var heading = _a.heading, ImageComponent = _a.ImageComponent;
    return (React__default["default"].createElement(Container$1, null,
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(Content$2, null,
                React__default["default"].createElement(Heading, null, heading),
                React__default["default"].createElement(Frame, null,
                    React__default["default"].createElement(ImageComponent, { width: 984, height: 464 }))))));
}
var Container$1 = styled("section", {
    pt: "$12",
});
var Content$2 = styled("div", {
    h1: {
        fontFamily: "$mono",
        fontSize: "$xxl",
        fontWeight: 600,
        lineHeight: 1.6,
        maxWidth: "24rem",
        mt: "0",
        mb: "$12",
    },
    "@md": {
        h1: {
            fontSize: "$xxxl",
            maxWidth: "32rem",
            mt: "$4",
            mb: "$24",
        },
    },
});
var Frame = styled("div", {
    boxShadow: "0 0 0 $sizes$px $colors$sprout",
    lineHeight: "0",
    br: "$2",
    overflow: "hidden",
    bc: "$forest",
    "@md": {
        br: "$3",
    },
    img: {
        width: "100%",
    },
});

var Input$1 = function (_a) {
    var label = _a.label, description = _a.description, required = _a.required, error = _a.error, children = _a.children, helpText = _a.helpText;
    return (React__default["default"].createElement(Container, null,
        React__default["default"].createElement(LabelRow, null,
            React__default["default"].createElement(Label$1, null, label),
            required && React__default["default"].createElement(Required, null, "(Required)")),
        description && React__default["default"].createElement(Description, null, description),
        React__default["default"].createElement(ChildContainer, null, children),
        helpText && React__default["default"].createElement(Help, null, helpText),
        error && React__default["default"].createElement(Error$1, null, error)));
};
var Container = styled("div", {
    display: "flex",
    flexDirection: "column",
});
var LabelRow = styled("div", {
    display: "flex",
    mb: "$1",
});
var Required = styled("div", {
    fontFamily: "$mono",
    fontSize: "$sm",
    textTransform: "uppercase",
    fontWeight: 400,
    fontStyle: "italic",
    ml: "$2",
});
var Label$1 = styled("div", {
    fontFamily: "$mono",
    fontWeight: 600,
    fontSize: "$sm",
    textTransform: "uppercase",
});
var Description = styled("div", {
    fontFamily: "$sans",
    fontSize: "$sm",
    mb: "$1",
});
var ChildContainer = styled("div", {
    fontFamily: "$sans",
    fontSize: "$sm",
    my: "$1",
    display: "flex",
});
var Help = styled("i", {
    fontSize: "$sm",
    fontFamily: "$mono",
    fontWeight: 400,
    opacity: "0.75"
});
var Error$1 = styled("div", {
    fontFamily: "$sans",
    fontSize: "$sm",
    color: "#FF0000",
    mt: "$1",
});

var Input = function (_a) {
    var label = _a.label, description = _a.description, required = _a.required, error = _a.error, helpText = _a.helpText, props = __rest(_a, ["label", "description", "required", "error", "helpText"]);
    return (React__default["default"].createElement(Input$1, { label: label, description: description, required: required, error: error, helpText: helpText },
        React__default["default"].createElement(InputContainer, __assign({}, props, { error: !!error }))));
};
var InputContainer = styled("input", {
    fontFamily: "$sans",
    display: "flex",
    flex: 1,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "$forest",
    height: "$10",
    py: 0,
    px: "$3",
    fontSize: "$base",
    color: "$forest",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    background: "transparent",
    "&:focus": {
        boxShadow: "0px 0px 0px 1px $colors$forest",
    },
    "&::placeholder": {
        color: "$forest",
        fontStyle: "italic",
        opacity: 0.75,
        fontWeight: 200,
    },
    variants: {
        disabled: {
            true: {
                borderColor: "$wheat",
                cursor: "not-allowed",
                backgroundColor: "#FFEED9",
                "&:focus": {
                    boxShadow: "none",
                },
            },
        },
        error: {
            true: {
                borderColor: "#FF0000",
                "&:focus": {
                    boxShadow: "0px 0px 0px 1px #FF0000",
                },
            },
        },
    },
});

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3="function"===typeof Symbol&&Symbol.for,c$2=b$3?Symbol.for("react.element"):60103,d$2=b$3?Symbol.for("react.portal"):60106,e$2=b$3?Symbol.for("react.fragment"):60107,f$3=b$3?Symbol.for("react.strict_mode"):60108,g$3=b$3?Symbol.for("react.profiler"):60114,h$2=b$3?Symbol.for("react.provider"):60109,k$2=b$3?Symbol.for("react.context"):60110,l$2=b$3?Symbol.for("react.async_mode"):60111,m$3=b$3?Symbol.for("react.concurrent_mode"):60111,n$1=b$3?Symbol.for("react.forward_ref"):60112,p$2=b$3?Symbol.for("react.suspense"):60113,q=b$3?
Symbol.for("react.suspense_list"):60120,r$1=b$3?Symbol.for("react.memo"):60115,t$2=b$3?Symbol.for("react.lazy"):60116,v$3=b$3?Symbol.for("react.block"):60121,w$3=b$3?Symbol.for("react.fundamental"):60117,x$2=b$3?Symbol.for("react.responder"):60118,y$2=b$3?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$2:switch(a=a.type,a){case l$2:case m$3:case e$2:case g$3:case f$3:case p$2:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$1:case t$2:case r$1:case h$2:return a;default:return u}}case d$2:return u}}}function A(a){return z(a)===m$3}reactIs_production_min.AsyncMode=l$2;reactIs_production_min.ConcurrentMode=m$3;reactIs_production_min.ContextConsumer=k$2;reactIs_production_min.ContextProvider=h$2;reactIs_production_min.Element=c$2;reactIs_production_min.ForwardRef=n$1;reactIs_production_min.Fragment=e$2;reactIs_production_min.Lazy=t$2;reactIs_production_min.Memo=r$1;reactIs_production_min.Portal=d$2;
reactIs_production_min.Profiler=g$3;reactIs_production_min.StrictMode=f$3;reactIs_production_min.Suspense=p$2;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l$2};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k$2};reactIs_production_min.isContextProvider=function(a){return z(a)===h$2};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$2};reactIs_production_min.isForwardRef=function(a){return z(a)===n$1};reactIs_production_min.isFragment=function(a){return z(a)===e$2};reactIs_production_min.isLazy=function(a){return z(a)===t$2};
reactIs_production_min.isMemo=function(a){return z(a)===r$1};reactIs_production_min.isPortal=function(a){return z(a)===d$2};reactIs_production_min.isProfiler=function(a){return z(a)===g$3};reactIs_production_min.isStrictMode=function(a){return z(a)===f$3};reactIs_production_min.isSuspense=function(a){return z(a)===p$2};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$2||a===m$3||a===g$3||a===f$3||a===p$2||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t$2||a.$$typeof===r$1||a.$$typeof===h$2||a.$$typeof===k$2||a.$$typeof===n$1||a.$$typeof===w$3||a.$$typeof===x$2||a.$$typeof===y$2||a.$$typeof===v$3)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$4 = function (_React$Component) {
  _inherits$1(Portal, _React$Component);

  function Portal() {
    _classCallCheck$1(this, Portal);

    return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$1(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React__default["default"].Component);

Portal$4.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portalv4 = Portal$4;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$3 = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM__default["default"].unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = React__default["default"].cloneElement(this.props.children);
      }

      this.portal = ReactDOM__default["default"].unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(React__default["default"].Component);

var LegacyPortal = Portal$3;


Portal$3.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portal$1 = void 0;

if (ReactDOM__default["default"].createPortal) {
  Portal$1 = Portalv4;
} else {
  Portal$1 = LegacyPortal;
}

var Portal$2 = Portal$1;

var CloseIcon = styled(Cross1Icon, {
    position: "absolute",
});
var ModalBackdrop = styled("div", {
    position: "fixed",
    backgroundColor: "#32484180",
    zIndex: -1,
    inset: 0,
});
var ModalRoot = styled("div", {
    position: "fixed",
    zIndex: 1300,
    inset: 0,
});
var ModalContainer = styled("div", {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
var ModalBody = styled("div", {
    maxWidth: 600,
    minWidth: 400,
    margin: 32,
    boxShadow: "0px 12px 50px -24px rgba(0, 0, 0, 0.24);",
    background: "$sand",
});
var ModalHeader = styled("div", {
    backgroundColor: "$forest",
    paddingTop: 12,
    paddingLeft: 40,
    paddingRight: 16,
    paddingBottom: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});
var ModalTitle = styled("span", {
    fontSize: "$lg",
    fontWeight: 600,
    fontFamily: "$mono",
    color: "$sand",
});
var ModalContent = styled("div", { padding: 40, fontFamily: "$sans" });
var ModalFooter = styled("div", { display: "flex", justifyContent: "right" });
var ConfirmButton = styled(Button, {
    marginLeft: 32,
});
var Loading = styled("span", { marginRight: "8px", fontFamily: "$sans" });
var ErrorMessage = styled("span", { color: "#6B2115", fontFamily: "$sans" });
var Modal = function (_a) {
    var title = _a.title, isOpen = _a.isOpen, setIsOpen = _a.setIsOpen, children = _a.children, _b = _a.confirmText, confirmText = _b === void 0 ? "Submit" : _b, _c = _a.cancelText, cancelText = _c === void 0 ? "Cancel" : _c, onConfirm = _a.onConfirm, onCancel = _a.onCancel, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.hideCloseIcon, hideCloseIcon = _e === void 0 ? false : _e, _f = _a.hideFooter, hideFooter = _f === void 0 ? false : _f;
    var _g = React.useState(false), loading = _g[0], setLoading = _g[1];
    var _h = React.useState(""), error = _h[0], setError = _h[1];
    var close = React.useCallback(function () { return setIsOpen(false); }, [setIsOpen]);
    var onContainerKeyDown = React.useCallback(function (e) {
        if (e.key === "Escape") {
            close();
        }
    }, [close]);
    var onConfirmClick = React.useCallback(function (e) {
        e.stopPropagation();
        setLoading(true);
        setError("");
        try {
            var result = onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
            if (typeof result === "object") {
                result
                    .then(function (keepAlive) { return !keepAlive && close(); })
                    .catch(function (e) {
                    console.error(e);
                    setError(e.message);
                })
                    .finally(function () {
                    setLoading(false);
                });
            }
            else {
                setLoading(false);
                if (!result) {
                    close();
                }
            }
        }
        catch (e) {
            console.error(e);
            setError(e.message);
            setLoading(false);
        }
    }, [onConfirm, close, setLoading, setError]);
    var onCancelClick = React.useCallback(function () {
        var result = onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        if (!result) {
            close();
        }
    }, [onCancel, close]);
    return isOpen ? (React__default["default"].createElement(Portal$2, null,
        React__default["default"].createElement(ModalRoot, null,
            React__default["default"].createElement(ModalBackdrop, { "aria-hidden": "true", onClick: close, tabIndex: -1 }),
            React__default["default"].createElement(ModalContainer, { onKeyDown: onContainerKeyDown, tabIndex: -1 },
                React__default["default"].createElement(ModalBody, null,
                    React__default["default"].createElement(ModalHeader, null,
                        React__default["default"].createElement(ModalTitle, null, title),
                        !hideCloseIcon && (React__default["default"].createElement(Button, { tone: "wheat", onClick: close, type: "icon" },
                            React__default["default"].createElement(CloseIcon, null)))),
                    React__default["default"].createElement(ModalContent, null,
                        children,
                        !hideFooter && (React__default["default"].createElement(ModalFooter, null,
                            error && React__default["default"].createElement(ErrorMessage, null, error),
                            loading && React__default["default"].createElement(Loading, null, "Loading..."),
                            cancelText && (React__default["default"].createElement(Button, { onClick: onCancelClick, type: "secondary", disabled: loading }, cancelText)),
                            React__default["default"].createElement(ConfirmButton, { onClick: onConfirmClick, type: "primary", tone: "wheat", disabled: disabled || loading }, confirmText))))))))) : null;
};

function createCollection(c){const n=c+"CollectionProvider",[l,i]=createContextScope(n),[f,a]=l(n,{collectionRef:{current:null},itemMap:new Map}),u=e=>{const{scope:r,children:t}=e,c=React__default["default"].useRef(null),n=React__default["default"].useRef(new Map).current;return React__default["default"].createElement(f,{scope:r,itemMap:n,collectionRef:c},t)},m=c+"CollectionSlot",s=/*#__PURE__*/React__default["default"].forwardRef(((t,c)=>{const{scope:n,children:l}=t,i=a(m,n),f=useComposedRefs(c,i.collectionRef);return React__default["default"].createElement(Slot,{ref:f},l)})),p=c+"CollectionItemSlot",d="data-radix-collection-item",R=/*#__PURE__*/React__default["default"].forwardRef(((t,c)=>{const{scope:n,children:l,...i}=t,f=React__default["default"].useRef(null),u=useComposedRefs(c,f),m=a(p,n);return React__default["default"].useEffect((()=>(m.itemMap.set(f,{ref:f,...i}),()=>{m.itemMap.delete(f);}))),/*#__PURE__*/React__default["default"].createElement(Slot,{[d]:"",ref:u},l)}));return [{Provider:u,Slot:s,ItemSlot:R},function(e){const r=a(c+"CollectionConsumer",e);return React__default["default"].useCallback((()=>{const e=r.collectionRef.current;if(!e)return [];const t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(r.itemMap.values()).sort(((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current)))}),[r.collectionRef,r.itemMap])},i]}

const f$2={bubbles:!1,cancelable:!0},[p$1,l$1,m$2]=createCollection("RovingFocusGroup"),[d$1,v$2]=createContextScope("RovingFocusGroup",[m$2]);const[g$2,F]=d$1("RovingFocusGroup");const RovingFocusGroup=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>/*#__PURE__*/React__namespace.createElement(p$1.Provider,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/React__namespace.createElement(p$1.Slot,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/React__namespace.createElement(w$2,_extends$3({},e,{ref:o}))))));const w$2=/*#__PURE__*/React__namespace.forwardRef(((t,n)=>{const{__scopeRovingFocusGroup:c,orientation:p,dir:m="ltr",loop:d=!1,currentTabStopId:v,defaultCurrentTabStopId:F,onCurrentTabStopIdChange:w,onEntryFocus:b,...x}=t,E=React__namespace.useRef(null),I=useComposedRefs(n,E),[G=null,h]=useControllableState({prop:v,defaultProp:F,onChange:w}),[T,A]=React__namespace.useState(!1),y=useCallbackRef(b),D=l$1(c),S=React__namespace.useRef(!1);return React__namespace.useEffect((()=>{const e=E.current;if(e)return e.addEventListener("rovingFocusGroup.onEntryFocus",y),()=>e.removeEventListener("rovingFocusGroup.onEntryFocus",y)}),[y]),/*#__PURE__*/React__namespace.createElement(g$2,{scope:c,orientation:p,dir:m,loop:d,currentTabStopId:G,onItemFocus:React__namespace.useCallback((e=>h(e)),[h]),onItemShiftTab:React__namespace.useCallback((()=>A(!0)),[])},/*#__PURE__*/React__namespace.createElement(Primitive.div,_extends$3({tabIndex:T?-1:0,"data-orientation":p},x,{ref:I,style:{outline:"none",...t.style},onMouseDown:composeEventHandlers(t.onMouseDown,(()=>{S.current=!0;})),onFocus:composeEventHandlers(t.onFocus,(e=>{const o=!S.current;if(e.target===e.currentTarget&&o&&!T){const o=new Event("rovingFocusGroup.onEntryFocus",f$2);if(e.currentTarget.dispatchEvent(o),!o.defaultPrevented){const e=D().filter((e=>e.focusable));R$1([e.find((e=>e.active)),e.find((e=>e.id===G)),...e].filter(Boolean).map((e=>e.ref.current)));}}S.current=!1;})),onBlur:composeEventHandlers(t.onBlur,(()=>A(!1)))})))}));const RovingFocusGroupItem=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>{const{__scopeRovingFocusGroup:n,focusable:i=!0,active:c=!1,...f}=e,m=useId(),d=F("RovingFocusGroupItem",n),v=d.currentTabStopId===m,g=l$1(n);return React__namespace.createElement(p$1.ItemSlot,{scope:n,id:m,focusable:i,active:c},/*#__PURE__*/React__namespace.createElement(Primitive.span,_extends$3({tabIndex:v?0:-1,"data-orientation":d.orientation},f,{ref:o,onMouseDown:composeEventHandlers(e.onMouseDown,(e=>{i?d.onItemFocus(m):e.preventDefault();})),onFocus:composeEventHandlers(e.onFocus,(()=>d.onItemFocus(m))),onKeyDown:composeEventHandlers(e.onKeyDown,(e=>{if("Tab"===e.key&&e.shiftKey)return void d.onItemShiftTab();if(e.target!==e.currentTarget)return;const o=function(e,o,r){const t=function(e,o){return "rtl"!==o?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}(e.key,r);return "vertical"===o&&["ArrowLeft","ArrowRight"].includes(t)||"horizontal"===o&&["ArrowUp","ArrowDown"].includes(t)?void 0:b$2[t]}(e,d.orientation,d.dir);if(void 0!==o){e.preventDefault();let n=g().filter((e=>e.focusable)).map((e=>e.ref.current));if("last"===o)n.reverse();else if("prev"===o||"next"===o){"prev"===o&&n.reverse();const i=n.indexOf(e.currentTarget);n=d.loop?(t=i+1,(r=n).map(((e,o)=>r[(t+o)%r.length]))):n.slice(i+1);}setTimeout((()=>R$1(n)));}var r,t;}))})))}));const b$2={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function R$1(e){const o=document.activeElement;for(const r of e){if(r===o)return;if(r.focus(),document.activeElement!==o)return}}const Root$5=RovingFocusGroup;const Item$1=RovingFocusGroupItem;

const[m$1,f$1]=createContextScope("Radio"),[b$1,v$1]=m$1("Radio"),R=/*#__PURE__*/React__namespace.forwardRef(((e,r)=>{const{__scopeRadio:o,"aria-labelledby":t,name:a,checked:n=!1,required:c,disabled:m,value:f="on",onCheck:v,...R}=e,[h,x]=React__namespace.useState(null),y=useComposedRefs(r,(e=>x(e))),w=useLabelContext(h),g=t||w,G=React__namespace.useRef(!1),C=!h||Boolean(h.closest("form"));return React__namespace.createElement(b$1,{scope:o,checked:n,disabled:m},/*#__PURE__*/React__namespace.createElement(Primitive.button,_extends$3({type:"button",role:"radio","aria-checked":n,"aria-labelledby":g,"data-state":E$1(n),"data-disabled":m?"":void 0,disabled:m,value:f},R,{ref:y,onClick:composeEventHandlers(e.onClick,(e=>{n||null==v||v(),C&&(G.current=e.isPropagationStopped(),G.current||e.stopPropagation());}))})),C&&/*#__PURE__*/React__namespace.createElement(k$1,{control:h,bubbles:!G.current,name:a,value:f,checked:n,required:c,disabled:m,style:{transform:"translateX(-100%)"}}))})),h$1=/*#__PURE__*/React__namespace.forwardRef(((r,o)=>{const{__scopeRadio:t,forceMount:a,...n}=r,c=v$1("RadioIndicator",t);return React__namespace.createElement(Presence,{present:a||c.checked},/*#__PURE__*/React__namespace.createElement(Primitive.span,_extends$3({"data-state":E$1(c.checked),"data-disabled":c.disabled?"":void 0},n,{ref:o})))})),k$1=e=>{const{control:t,checked:a,bubbles:n=!0,...i}=e,c=React__namespace.useRef(null),d=usePrevious(a),u=useSize(t);return React__namespace.useEffect((()=>{const e=c.current,r=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(r,"checked").set;if(d!==a&&o){const r=new Event("click",{bubbles:n});o.call(e,a),e.dispatchEvent(r);}}),[d,a,n]),/*#__PURE__*/React__namespace.createElement("input",_extends$3({type:"radio","aria-hidden":!0,defaultChecked:a},i,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E$1(e){return e?"checked":"unchecked"}const x$1=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],[y$1,w$1]=createContextScope("RadioGroup",[v$2,f$1]);const g$1=v$2(),G=f$1(),[C,I]=y$1("RadioGroup");const RadioGroup$1=/*#__PURE__*/React__namespace.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,name:n,"aria-labelledby":c,defaultValue:d,value:l,required:m=!1,orientation:f,dir:b="ltr",loop:v=!0,onValueChange:R,...h}=e,k=useLabelContext(),E=c||k,x=g$1(o),[y,w]=useControllableState({prop:l,defaultProp:d,onChange:R});return React__namespace.createElement(C,{scope:o,name:n,required:m,value:y,onValueChange:w},/*#__PURE__*/React__namespace.createElement(Root$5,_extends$3({asChild:!0},x,{orientation:f,dir:b,loop:v}),/*#__PURE__*/React__namespace.createElement(Primitive.div,_extends$3({role:"radiogroup","aria-orientation":f,"aria-labelledby":E,dir:b},h,{ref:r}))))}));const RadioGroupItem=/*#__PURE__*/React__namespace.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,disabled:t,...n}=e,i=I("RadioGroupItem",o),c=g$1(o),u=G(o),m=React__namespace.useRef(null),f=useComposedRefs(r,m),b=i.value===n.value,v=React__namespace.useRef(!1);return React__namespace.useEffect((()=>{const e=e=>{x$1.includes(e.key)&&(v.current=!0);},r=()=>v.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",r);}}),[]),/*#__PURE__*/React__namespace.createElement(Item$1,_extends$3({asChild:!0},c,{focusable:!t,active:b}),/*#__PURE__*/React__namespace.createElement(R,_extends$3({disabled:t,required:i.required,checked:b},u,n,{name:i.name,ref:f,onCheck:()=>i.onValueChange(n.value),onKeyDown:composeEventHandlers((e=>{"Enter"===e.key&&e.preventDefault();})),onFocus:composeEventHandlers(n.onFocus,(()=>{var e;v.current&&(null===(e=m.current)||void 0===e||e.click());}))})))}));const RadioGroupIndicator=/*#__PURE__*/React__namespace.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,...t}=e,a=G(o);return React__namespace.createElement(h$1,_extends$3({},a,t,{ref:r}))}));const Root$4=RadioGroup$1;const Item=RadioGroupItem;const Indicator=RadioGroupIndicator;

var StyledRadio = styled(Item, {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "$wheat",
    borderStyle: "solid",
    padding: 0,
    width: 24,
    height: 24,
    borderRadius: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "&[disabled]": {
        backgroundColor: "#FFEED9",
    },
    "&[data-state=checked]": {
        backgroundColor: "$sand",
        borderColor: "$forest",
        color: "$forest",
    },
    "&[data-state=checked][disabled]": {
        backgroundColor: "#FFEED9",
        borderColor: "$wheat",
        color: "$wheat",
    },
});
var Label = styled("label", {
    "&.radio-disabled": {
        color: "#b3b3b3",
    },
});
var Check = styled(Indicator, {
    width: 16,
    height: 16,
});
var InputRow = styled("div", {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    columnGap: "$3",
    marginBottom: "$1",
});
var Radio = function (_a) {
    var inputLabel = _a.inputLabel, props = __rest(_a, ["inputLabel"]);
    return (React__default["default"].createElement(InputRow, null,
        React__default["default"].createElement(StyledRadio, __assign({}, props),
            React__default["default"].createElement(Check, null,
                React__default["default"].createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "currentColor" })))),
        React__default["default"].createElement(Label, { className: props.disabled ? "radio-disabled" : "" }, inputLabel)));
};
var RadioGroup = function (props) { return (React__default["default"].createElement(Root$4, __assign({}, props),
    React__default["default"].createElement(React__default["default"].Fragment, null, props.children))); };

var Textarea = function (_a) {
    var label = _a.label, description = _a.description, required = _a.required, error = _a.error, props = __rest(_a, ["label", "description", "required", "error"]);
    return (React__default["default"].createElement(Input$1, { label: label, description: description, required: required, error: error },
        React__default["default"].createElement(TextareaContainer, __assign({}, props, { error: !!error }))));
};
var TextareaContainer = styled("textarea", {
    fontFamily: "$sans",
    display: "flex",
    flex: 1,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "$forest",
    minHeight: '$32',
    py: '$3',
    px: '$3',
    fontSize: "$base",
    color: "$forest",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    background: "transparent",
    "&:focus": {
        boxShadow: "0px 0px 0px 1px $colors$forest",
    },
    "&::placeholder": {
        color: "$forest",
        fontStyle: "italic",
        opacity: 0.75,
        fontWeight: 200,
    },
    variants: {
        disabled: {
            true: {
                borderColor: "$wheat",
                cursor: "not-allowed",
                backgroundColor: "#FFEED9",
                "&:focus": {
                    boxShadow: "none",
                },
            },
        },
        error: {
            true: {
                borderColor: "#FF0000",
                "&:focus": {
                    boxShadow: "0px 0px 0px 1px #FF0000",
                },
            },
        },
    },
});

// Container of dropdown UI elements.
var DropDownContainer = styled("div", {
    width: "100%",
});
// Topo Input element repurposed for the dropdown.
var SelectInput = styled(Input, {
    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\") !important",
    backgroundPosition: "99% !important",
    backgroundRepeat: "no-repeat !important",
});
// Container of dropdown list items.
var ListBox = styled(Box, {
    borderStyle: "solid",
    borderWidth: "0 1px 1px 1px",
    borderColor: "$forest",
    color: "$forest",
    fontSize: "$base",
    fontFamily: "$sans",
});
// Styled list item.
var ListItem = styled("li", {
    listStyle: "none",
    padding: "$1 $2 $1 $3",
    backgroundColor: "$sand",
    color: "$forest",
    borderStyle: "solid",
    borderWidth: "1px 0px 0px 0px",
    borderColor: "$forest",
    "&:hover": {
        backgroundColor: "$forest",
        color: "$sand",
    },
});
var Select = function (props) {
    var initialValue = props.value || props.defaultValue || "";
    var options = props.options;
    var displayValue = "";
    var _a = React.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    // If either value or defaultValue is provided, we search for the corresponding option.
    if (initialValue) {
        var selectedOptionObj = options.find(function (option) { return option.key === initialValue; });
        if (selectedOptionObj) {
            displayValue = selectedOptionObj.label;
        }
        options = options.filter(function (option) {
            return option.label.toLowerCase().startsWith(displayValue.toLowerCase());
        });
    }
    /*
     * When any dropdown option is clicked,
     * 1) Close the dropdown
     * 2) Show selected value in input container
     * 3) Call the client provided onChange prop
     */
    var onOptionClicked = function (val) { return function () {
        setIsOpen(false);
        setValue(val.label);
        if (props.onChange) {
            props.onChange(val.key);
        }
    }; };
    // Generate the list of ListItems corresponding to the valid options.
    var optionElems = options.map(function (option) { return (React__default["default"].createElement(ListItem, { onClick: onOptionClicked(option), key: option.key }, option.label)); });
    var _b = React.useState(displayValue), value = _b[0], setValue = _b[1];
    var _c = React.useState(optionElems), opts = _c[0], setOpts = _c[1];
    var toggling = function () {
        if (!props.disabled) {
            setIsOpen(!isOpen);
        }
    };
    /*
     * When value in the input box is changed, we filter the valid options.
     */
    var changeValue = function (e) {
        // If component is disabled, ignore value changes.
        if (props.disabled) {
            return;
        }
        setIsOpen(true);
        e.preventDefault();
        setValue(e.target.value);
        var options = props.options.filter(function (option) {
            return option.label.toLowerCase().startsWith(e.target.value.toLowerCase());
        });
        var optionElems = options.map(function (option) { return (React__default["default"].createElement(ListItem, { onClick: onOptionClicked(option), key: option.key }, option.label)); });
        setOpts(optionElems);
    };
    return (React__default["default"].createElement(Input$1, { label: props.label, description: props.description, required: props.required, 
        // If entered input doesnot correspond to any options, we show "No matching options!"" error message
        error: props.error || (opts.length === 0 ? "No matching options!" : undefined) },
        React__default["default"].createElement(DropDownContainer, { tabIndex: props.tabIndex },
            React__default["default"].createElement(SelectInput, { placeholder: props.placeholder, disabled: props.disabled, onClick: toggling, value: value, onChange: changeValue }),
            isOpen && opts.length > 0 && React__default["default"].createElement(ListBox, null, opts))));
};

var _path$2, _path2$1;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgSuccess = function SvgSuccess(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "m13.03 5.53-1.06-1.06L6.5 9.94 4.03 7.47 2.97 8.53l3.53 3.53 6.53-6.53Z",
    fill: "#06774C"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
    fill: "#06774C"
  })));
};

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgWarning = function SvgWarning(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.909 8A6.909 6.909 0 1 1 1.09 8a6.909 6.909 0 0 1 13.818 0Zm1.09 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.532 3.867H10V10.8H8.533v-4H6v1.067h1.467v4Zm1.066-6.534V4H7.467v1.333h1.066Z",
    fill: "#7B5E35"
  })));
};

var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgError = function SvgError(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 16,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "m7.3 7.05.49 2.55h.42l.49-2.55V5.02H7.3v2.03ZM7.29 11.9c.14.14.377.21.71.21.333 0 .567-.07.7-.21.14-.14.21-.31.21-.51v-.28c0-.2-.07-.37-.21-.51-.133-.14-.367-.21-.7-.21-.333 0-.57.07-.71.21-.133.14-.2.31-.2.51v.28c0 .2.067.37.2.51Z",
    fill: "#A43725"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8 0 8 14H0L8 0ZM1.723 13 8 2.016 14.277 13H1.723Z",
    fill: "#A43725"
  })));
};

var ToastRoot = styled("div", {
    zIndex: 1400,
    position: "fixed",
    display: "flex",
    left: "24px",
    right: "24px",
    justifyContent: "center",
    alignItems: "center",
    variants: {
        verticalPosition: {
            TOP: {
                top: "24px",
            },
            BOTTOM: {
                bottom: "24px",
            },
        },
        horizontalPosition: {
            LEFT: {
                justifyContent: "left",
            },
            RIGHT: {
                justifyContent: "right",
            },
        },
    },
});
var Icons = {
    success: SvgSuccess,
    warning: SvgWarning,
    error: SvgError,
};
var ToastContent = styled("div", {
    boxShadow: "0px 4px 12px rgba(123, 94, 53, 0.23)",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    width: "375px",
    variants: {
        intent: {
            success: {
                border: "1px solid #06DF59",
                backgroundColor: "#A2FFB3",
                color: "#324841",
            },
            warning: {
                borderColor: "1px solid #DEAE6A",
                backgroundColor: "#FEE9CB",
                color: "#493922",
            },
            error: {
                borderColor: "1px solid #D97763",
                backgroundColor: "#F6DACD",
                color: "#6B2115",
            },
        },
    },
});
var ToastMain = styled("div", {
    display: "flex",
});
var IconContainer = styled("div", {
    marginRight: "12px",
});
var CrossIconContainer = styled("div", {
    marginLeft: "12px",
    "& svg": {
        cursor: "pointer",
    },
});
var MessageContainer = styled("div", {
    flexGrow: 1,
});
var StatusTitle = styled("h1", {
    fontFamily: "$mono",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    marginBottom: "4px",
    marginTop: 0,
});
var StatusMessage = styled("span", {
    fontFamily: "$sans",
    fontSize: "12px",
    lineHeight: "18px",
    marginBottom: "8px",
});
var StatusFooter = styled("div", {
    display: "flex",
    flexDirection: "row-reverse",
    "& button": {
        marginLeft: "12px",
        fontFamily: "$mono",
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        background: "transparent",
        border: "none",
    },
    "& button:hover": {
        background: "#88888880",
        cursor: "pointer",
    },
});
var Toast = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b, _c = _a.autoHideDuration, autoHideDuration = _c === void 0 ? 5000 : _c, _d = _a.intent, intent = _d === void 0 ? "success" : _d, isOpen = _a.isOpen, message = _a.message, onClose = _a.onClose, _e = _a.position, position = _e === void 0 ? "BOTTOM" : _e, _f = _a.showCloseIcon, showCloseIcon = _f === void 0 ? false : _f, title = _a.title;
    // original inspiration: https://github.com/mui-org/material-ui/blob/bf78a4a212cb328c951a9f3590a9518c72168f5c/packages/mui-material/src/Snackbar/Snackbar.js
    var timerAutoHide = React.useRef(0);
    var nodeRef = React.useRef(null);
    var setAutoHideTimer = React.useCallback(function (autoHideDurationParam) {
        if (autoHideDurationParam == null) {
            return;
        }
        clearTimeout(timerAutoHide.current);
        timerAutoHide.current = window.setTimeout(onClose, autoHideDurationParam);
    }, [onClose, timerAutoHide]);
    React__namespace.useEffect(function () {
        if (isOpen) {
            setAutoHideTimer(autoHideDuration);
        }
        return function () {
            clearTimeout(timerAutoHide.current);
        };
    }, [isOpen, autoHideDuration, setAutoHideTimer]);
    // Pause the timer when the user is interacting with the Toast
    // or when the user hide the window.
    var handlePause = React.useCallback(function () {
        clearTimeout(timerAutoHide.current);
    }, [timerAutoHide]);
    // Restart the timer when the user is no longer interacting with the Toast
    // or when the window is shown back.
    var handleResume = React.useCallback(function () {
        if (autoHideDuration != null) {
            setAutoHideTimer(autoHideDuration * 0.5);
        }
    }, [autoHideDuration, setAutoHideTimer]);
    React.useEffect(function () {
        if (isOpen) {
            window.addEventListener("focus", handleResume);
            window.addEventListener("blur", handlePause);
            return function () {
                window.removeEventListener("focus", handleResume);
                window.removeEventListener("blur", handlePause);
            };
        }
        return undefined;
    }, [handleResume, isOpen]);
    var handleKeyDown = React.useCallback(function (nativeEvent) {
        if (!nativeEvent.defaultPrevented) {
            if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
                onClose();
            }
        }
    }, [onClose]);
    var handleClickAway = React.useCallback(function (event) {
        if (!nodeRef.current) {
            return;
        }
        var target = event.target;
        var insideDOM = event.composedPath
            ? event.composedPath().indexOf(nodeRef.current) > -1
            : document.contains(target) || nodeRef.current.contains(target);
        if (!insideDOM) {
            onClose();
        }
    }, [nodeRef, onClose]);
    React.useEffect(function () {
        if (!isOpen) {
            return undefined;
        }
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClickAway);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClickAway);
        };
    }, [isOpen, handleKeyDown]);
    if (!isOpen) {
        return null;
    }
    var Icon = Icons[intent];
    var _g = position.split("_"), verticalPosition = _g[0], horizontalPosition = _g[1];
    return (React__namespace.createElement(ToastRoot, { onBlur: handleResume, onFocus: handlePause, onMouseEnter: handlePause, onMouseLeave: handleResume, ref: nodeRef, verticalPosition: verticalPosition, horizontalPosition: horizontalPosition },
        React__namespace.createElement(ToastContent, { intent: intent },
            React__namespace.createElement(ToastMain, null,
                React__namespace.createElement(IconContainer, null,
                    React__namespace.createElement(Icon, null)),
                React__namespace.createElement(MessageContainer, null,
                    title && React__namespace.createElement(StatusTitle, null, title),
                    React__namespace.createElement(StatusMessage, null, message)),
                showCloseIcon && (React__namespace.createElement(CrossIconContainer, null,
                    React__namespace.createElement(Cross1Icon, { onClick: onClose })))),
            !!actions.length && (React__namespace.createElement(StatusFooter, null, actions.map(function (a, key) { return (React__namespace.createElement("button", { key: key, onClick: a.onClick }, a.text)); }))))));
};

const VisuallyHidden=/*#__PURE__*/React__namespace.forwardRef(((i,o)=>/*#__PURE__*/React__namespace.createElement(Primitive.span,_extends$3({},i,{ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...i.style}}))));const Root$3=VisuallyHidden;

const Portal=/*#__PURE__*/React__namespace.forwardRef(((a,i)=>{var n,d;const{containerRef:s,style:u,...c}=a,m=null!==(n=null==s?void 0:s.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(d=globalThis.document)||void 0===d?void 0:d.body,[,f]=React__namespace.useState({});return useLayoutEffect((()=>{f({});}),[]),m?/*#__PURE__*/ReactDOM__default["default"].createPortal(/*#__PURE__*/React__namespace.createElement(Primitive.div,_extends$3({"data-radix-portal":""},c,{ref:i,style:m===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...u}:void 0})),m):null}));

const Arrow$2=/*#__PURE__*/React__namespace.forwardRef(((o,i)=>{const{children:n,width:s=10,height:m=5,...p}=o;return React__namespace.createElement(Primitive.svg,_extends$3({},p,{ref:i,width:s,height:m,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),o.asChild?n:/*#__PURE__*/React__namespace.createElement("polygon",{points:"0,0 30,0 15,10"}))}));const Root$2=Arrow$2;

function observeElementRect(n,o){const i=e$1.get(n);return void 0===i?(e$1.set(n,{rect:{},callbacks:[o]}),1===e$1.size&&(t$1=requestAnimationFrame(c$1))):(i.callbacks.push(o),o(n.getBoundingClientRect())),()=>{const c=e$1.get(n);if(void 0===c)return;const i=c.callbacks.indexOf(o);i>-1&&c.callbacks.splice(i,1),0===c.callbacks.length&&(e$1.delete(n),0===e$1.size&&cancelAnimationFrame(t$1));}}let t$1;const e$1=new Map;function c$1(){const n=[];e$1.forEach(((t,e)=>{const c=e.getBoundingClientRect();var o,i;o=t.rect,i=c,(o.width!==i.width||o.height!==i.height||o.top!==i.top||o.right!==i.right||o.bottom!==i.bottom||o.left!==i.left)&&(t.rect=c,n.push(t));})),n.forEach((t=>{t.callbacks.forEach((e=>e(t.rect)));})),t$1=requestAnimationFrame(c$1);}

function useRect(e){const[o,c]=React__namespace.useState();return React__namespace.useEffect((()=>{if(e){const r=observeElementRect(e,c);return ()=>{c(void 0),r();}}}),[e]),o}

function getPlacementData({anchorRect:p,popperSize:c,arrowSize:f,arrowOffset:l=0,side:d,sideOffset:h=0,align:x,alignOffset:g=0,shouldAvoidCollisions:u=!0,collisionBoundariesRect:w,collisionTolerance:m=0}){if(!p||!c||!w)return {popperStyles:o,arrowStyles:n};const y=function(e,r,o=0,n=0,i){const p=i?i.height:0,a=t(r,e,"x"),s=t(r,e,"y"),c=s.before-o-p,f=s.after+o+p,l=a.before-o-p,d=a.after+o+p;return {top:{start:{x:a.start+n,y:c},center:{x:a.center,y:c},end:{x:a.end-n,y:c}},right:{start:{x:d,y:s.start+n},center:{x:d,y:s.center},end:{x:d,y:s.end-n}},bottom:{start:{x:a.start+n,y:f},center:{x:a.center,y:f},end:{x:a.end-n,y:f}},left:{start:{x:l,y:s.start+n},center:{x:l,y:s.center},end:{x:l,y:s.end-n}}}}(c,p,h,g,f),b=y[d][x];if(!1===u){const t=e(b);let o=n;f&&(o=i({popperSize:c,arrowSize:f,arrowOffset:l,side:d,align:x}));return {popperStyles:{...t,"--radix-popper-transform-origin":r(c,d,x,l,f)},arrowStyles:o,placedSide:d,placedAlign:x}}const S=DOMRect.fromRect({...c,...b}),$=(O=w,z=m,DOMRect.fromRect({width:O.width-2*z,height:O.height-2*z,x:O.left+z,y:O.top+z}));var O,z;const R=s(S,$),M=y[a(d)][x],D=function(t,e,r){const o=a(t);return e[t]&&!r[o]?o:t}(d,R,s(DOMRect.fromRect({...c,...M}),$)),A=function(t,e,r,o,n){const i="top"===r||"bottom"===r,p=i?"left":"top",a=i?"right":"bottom",s=i?"width":"height",c=e[s]>t[s];if(("start"===o||"center"===o)&&(n[p]&&c||n[a]&&!c))return "end";if(("end"===o||"center"===o)&&(n[a]&&c||n[p]&&!c))return "start";return o}(c,p,d,x,R),I=e(y[D][A]);let C=n;f&&(C=i({popperSize:c,arrowSize:f,arrowOffset:l,side:D,align:A}));return {popperStyles:{...I,"--radix-popper-transform-origin":r(c,D,A,l,f)},arrowStyles:C,placedSide:D,placedAlign:A}}function t(t,e,r){const o=t["x"===r?"left":"top"],n="x"===r?"width":"height",i=t[n],p=e[n];return {before:o-p,start:o,center:o+(i-p)/2,end:o+i-p,after:o+i}}function e(t){return {position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(t.x+window.scrollX)}px, ${Math.round(t.y+window.scrollY)}px, 0)`}}function r(t,e,r,o,n){const i="top"===e||"bottom"===e,p=n?n.width:0,a=n?n.height:0,s=p/2+o;let c="",f="";return i?(c={start:`${s}px`,center:"center",end:t.width-s+"px"}[r],f="top"===e?`${t.height+a}px`:-a+"px"):(c="left"===e?`${t.width+a}px`:-a+"px",f={start:`${s}px`,center:"center",end:t.height-s+"px"}[r]),`${c} ${f}`}const o={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},n={position:"absolute",opacity:0};function i({popperSize:t,arrowSize:e,arrowOffset:r,side:o,align:n}){const i=(t.width-e.width)/2,a=(t.height-e.width)/2,s={top:0,right:90,bottom:180,left:-90}[o],c=Math.max(e.width,e.height),f={width:`${c}px`,height:`${c}px`,transform:`rotate(${s}deg)`,willChange:"transform",position:"absolute",[o]:"100%",direction:p(o,n)};return "top"!==o&&"bottom"!==o||("start"===n&&(f.left=`${r}px`),"center"===n&&(f.left=`${i}px`),"end"===n&&(f.right=`${r}px`)),"left"!==o&&"right"!==o||("start"===n&&(f.top=`${r}px`),"center"===n&&(f.top=`${a}px`),"end"===n&&(f.bottom=`${r}px`)),f}function p(t,e){return ("top"!==t&&"right"!==t||"end"!==e)&&("bottom"!==t&&"left"!==t||"end"===e)?"ltr":"rtl"}function a(t){return {top:"bottom",right:"left",bottom:"top",left:"right"}[t]}function s(t,e){return {top:t.top<e.top,right:t.right>e.right,bottom:t.bottom>e.bottom,left:t.left<e.left}}

const[c,l]=createContextScope("Popper");const[f,d]=c("Popper");const Popper=e=>{const{__scopePopper:o,children:r}=e,[t,n]=React__namespace.useState(null);return React__namespace.createElement(f,{scope:o,anchor:t,onAnchorChange:n},r)};const PopperAnchor=/*#__PURE__*/React__namespace.forwardRef(((e,r)=>{const{__scopePopper:t,virtualRef:n,...p}=e,c=d("PopperAnchor",t),l=React__namespace.useRef(null),f=useComposedRefs(r,l);return React__namespace.useEffect((()=>{c.onAnchorChange((null==n?void 0:n.current)||l.current);})),n?null:/*#__PURE__*/React__namespace.createElement(Primitive.div,_extends$3({},p,{ref:f}))}));const[u,m]=c("PopperContent");const PopperContent=/*#__PURE__*/React__namespace.forwardRef(((e,n)=>{const{__scopePopper:c,side:l="bottom",sideOffset:f,align:m="center",alignOffset:w,collisionTolerance:h,avoidCollisions:x=!0,...v}=e,P=d("PopperContent",c),[A,g]=React__namespace.useState(),E=useRect(P.anchor),[y,C]=React__namespace.useState(null),S=useSize(y),[R,O]=React__namespace.useState(null),_=useSize(R),b=useComposedRefs(n,(e=>C(e))),z=function(){const[e,o]=React__namespace.useState(void 0);return React__namespace.useEffect((()=>{let e;function r(){o({width:window.innerWidth,height:window.innerHeight});}function t(){window.clearTimeout(e),e=window.setTimeout(r,100);}return r(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),e}(),T=z?DOMRect.fromRect({...z,x:0,y:0}):void 0,{popperStyles:k,arrowStyles:L,placedSide:B,placedAlign:D}=getPlacementData({anchorRect:E,popperSize:S,arrowSize:_,arrowOffset:A,side:l,sideOffset:f,align:m,alignOffset:w,shouldAvoidCollisions:x,collisionBoundariesRect:T,collisionTolerance:h}),H=void 0!==B;return React__namespace.createElement("div",{style:k,"data-radix-popper-content-wrapper":""},/*#__PURE__*/React__namespace.createElement(u,{scope:c,arrowStyles:L,onArrowChange:O,onArrowOffsetChange:g},/*#__PURE__*/React__namespace.createElement(Primitive.div,_extends$3({"data-side":B,"data-align":D},v,{style:{...v.style,animation:H?void 0:"none"},ref:b}))))}));const PopperArrow=/*#__PURE__*/React__namespace.forwardRef((function(o,r){const{__scopePopper:t,offset:n,...i}=o,p=m("PopperArrow",t),{onArrowOffsetChange:c}=p;return React__namespace.useEffect((()=>c(n)),[c,n]),/*#__PURE__*/React__namespace.createElement("span",{style:{...p.arrowStyles,pointerEvents:"none"}},/*#__PURE__*/React__namespace.createElement("span",{ref:p.onArrowChange,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},/*#__PURE__*/React__namespace.createElement(Root$2,_extends$3({},i,{ref:r,style:{...i.style,display:"block"}}))))}));const Root$1=Popper;const Anchor=PopperAnchor;const Content$1=PopperContent;const Arrow$1=PopperArrow;

function useEscapeKeydown(n){const o=useCallbackRef(n);React__namespace.useEffect((()=>{const e=e=>{"Escape"===e.key&&o(e);};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[o]);}

const[w,x]=createContextScope("Tooltip",[l]);const g=l(),E=700,[v,b]=w("TooltipProvider",{isOpenDelayed:!0,delayDuration:E,onOpen:()=>{},onClose:()=>{}});const TooltipProvider=e=>{const{__scopeTooltip:o,delayDuration:t=E,skipDelayDuration:r=300,children:n}=e,[i,a]=React__namespace.useState(!0),l=React__namespace.useRef(0);return React__namespace.useEffect((()=>{const e=l.current;return ()=>window.clearTimeout(e)}),[]),/*#__PURE__*/React__namespace.createElement(v,{scope:o,isOpenDelayed:i,delayDuration:t,onOpen:React__namespace.useCallback((()=>{window.clearTimeout(l.current),a(!1);}),[]),onClose:React__namespace.useCallback((()=>{window.clearTimeout(l.current),l.current=window.setTimeout((()=>a(!0)),r);}),[r])},n)};const[y,_]=w("Tooltip");const Tooltip$1=o=>{const{__scopeTooltip:t,children:r,open:i,defaultOpen:a=!1,onOpenChange:l,delayDuration:c}=o,s=b("Tooltip",t),u=g(t),[d,m]=React__namespace.useState(null),f=useId(),C=React__namespace.useRef(0),w=null!=c?c:s.delayDuration,x=React__namespace.useRef(!1),{onOpen:E,onClose:v}=s,[_=!1,h]=useControllableState({prop:i,defaultProp:a,onChange:e=>{e&&(document.dispatchEvent(new CustomEvent("tooltip.open")),E()),null==l||l(e);}}),k=React__namespace.useMemo((()=>_?x.current?"delayed-open":"instant-open":"closed"),[_]),D=React__namespace.useCallback((()=>{window.clearTimeout(C.current),x.current=!1,h(!0);}),[h]),O=React__namespace.useCallback((()=>{window.clearTimeout(C.current),C.current=window.setTimeout((()=>{x.current=!0,h(!0);}),w);}),[w,h]);return React__namespace.useEffect((()=>()=>window.clearTimeout(C.current)),[]),/*#__PURE__*/React__namespace.createElement(Root$1,u,/*#__PURE__*/React__namespace.createElement(y,{scope:t,contentId:f,open:_,stateAttribute:k,trigger:d,onTriggerChange:m,onTriggerEnter:React__namespace.useCallback((()=>{s.isOpenDelayed?O():D();}),[s.isOpenDelayed,O,D]),onOpen:React__namespace.useCallback(D,[D]),onClose:React__namespace.useCallback((()=>{window.clearTimeout(C.current),h(!1),v();}),[h,v])},r))};const TooltipTrigger=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>{const{__scopeTooltip:t,...r}=e,i=_("TooltipTrigger",t),l=g(t),c=useComposedRefs(o,i.onTriggerChange),s=React__namespace.useRef(!1),u=React__namespace.useCallback((()=>s.current=!1),[]);return React__namespace.useEffect((()=>()=>document.removeEventListener("mouseup",u)),[u]),/*#__PURE__*/React__namespace.createElement(Anchor,_extends$3({asChild:!0},l),/*#__PURE__*/React__namespace.createElement(Primitive.button,_extends$3({"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute},r,{ref:c,onMouseEnter:composeEventHandlers(e.onMouseEnter,i.onTriggerEnter),onMouseLeave:composeEventHandlers(e.onMouseLeave,i.onClose),onMouseDown:composeEventHandlers(e.onMouseDown,(()=>{i.onClose(),s.current=!0,document.addEventListener("mouseup",u,{once:!0});})),onFocus:composeEventHandlers(e.onFocus,(()=>{s.current||i.onOpen();})),onBlur:composeEventHandlers(e.onBlur,i.onClose),onClick:composeEventHandlers(e.onClick,(e=>{0===e.detail&&i.onClose();}))})))}));const TooltipContent$1=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>{const{forceMount:t,...r}=e,n=_("TooltipContent",e.__scopeTooltip);return React__namespace.createElement(Presence,{present:t||n.open},/*#__PURE__*/React__namespace.createElement(h,_extends$3({ref:o},r)))}));const h=/*#__PURE__*/React__namespace.forwardRef(((e,i)=>{const{__scopeTooltip:a,children:l,"aria-label":c,portalled:s=!0,...p}=e,d=_("TooltipContent",a),m=g(a),f=s?Portal:React__namespace.Fragment,{onClose:w}=d;return useEscapeKeydown((()=>w())),React__namespace.useEffect((()=>(document.addEventListener("tooltip.open",w),()=>document.removeEventListener("tooltip.open",w))),[w]),/*#__PURE__*/React__namespace.createElement(f,null,/*#__PURE__*/React__namespace.createElement(k,{__scopeTooltip:a}),/*#__PURE__*/React__namespace.createElement(Content$1,_extends$3({"data-state":d.stateAttribute},m,p,{ref:i,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)"}}),/*#__PURE__*/React__namespace.createElement(Slottable,null,l),/*#__PURE__*/React__namespace.createElement(Root$3,{id:d.contentId,role:"tooltip"},c||l)))}));const TooltipArrow$1=/*#__PURE__*/React__namespace.forwardRef(((e,o)=>{const{__scopeTooltip:t,...r}=e,i=g(t);return React__namespace.createElement(Arrow$1,_extends$3({},i,r,{ref:o}))}));function k(e){const{__scopeTooltip:o}=e,t=_("CheckTriggerMoved",o),r=useRect(t.trigger),n=null==r?void 0:r.left,i=usePrevious(n),a=null==r?void 0:r.top,l=usePrevious(a),u=t.onClose;return React__namespace.useEffect((()=>{(void 0!==i&&i!==n||void 0!==l&&l!==a)&&u();}),[u,i,l,n,a]),null}const Provider=TooltipProvider;const Root=Tooltip$1;const Trigger=TooltipTrigger;const Content=TooltipContent$1;const Arrow=TooltipArrow$1;

var TooltipContent = styled('div', {
    background: "$green200",
    border: "1px solid $green500",
    padding: "8px",
    borderRadius: '5px',
    fontFamily: "$sans",
    fontSize: 12,
});
var TooltipArrow = styled(Arrow, {
    fill: "$green200",
});
var Tooltip = function (_a) {
    var content = _a.content, children = _a.children;
    return (React__default["default"].createElement(Provider, { delayDuration: 250 },
        React__default["default"].createElement(Root, null,
            React__default["default"].createElement(Trigger, { asChild: true }, children),
            React__default["default"].createElement(Content, null,
                React__default["default"].createElement(TooltipContent, null, content),
                React__default["default"].createElement(TooltipArrow, null)))));
};

exports.Blurb = Blurb;
exports.Box = Box;
exports.Button = Button;
exports.CallToAction = CallToAction;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardHeader = CardHeader;
exports.Checkbox = Checkbox;
exports.Container = Container$9;
exports.ConvertKit = ConvertKit;
exports.Divider = Divider;
exports.FeatureHighlight = FeatureHighlight;
exports.Footer = Footer;
exports.HandleTag = HandleTag;
exports.Heading = Heading;
exports.Hero = Hero;
exports.Indicator = Indicator$2;
exports.Input = Input;
exports.Label = Input$1;
exports.Modal = Modal;
exports.Nav = Nav;
exports.NavLink = NavLink;
exports.Navigation = Navigation;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Select = Select;
exports.Tag = Tag;
exports.Text = Text$1;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.Wrapper = Wrapper;
exports.css = css;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.styled = styled;
exports.theme = theme;
//# sourceMappingURL=index.js.map

"use strict";(self.webpackChunksilkforest_web=self.webpackChunksilkforest_web||[]).push([[745],{6485:(e,n,t)=>{t.d(n,{f:()=>u});var r=t(3890),i=t(6990),c=t(3796);const u={name:"attention",resolveAll:function(e,n){let t,i,u,a,s,l,f,d,m=-1;for(;++m<e.length;)if("enter"===e[m][0]&&"attentionSequence"===e[m][1].type&&e[m][1]._close)for(t=m;t--;)if("exit"===e[t][0]&&"attentionSequence"===e[t][1].type&&e[t][1]._open&&n.sliceSerialize(e[t][1]).charCodeAt(0)===n.sliceSerialize(e[m][1]).charCodeAt(0)){if((e[t][1]._close||e[m][1]._open)&&(e[m][1].end.offset-e[m][1].start.offset)%3&&!((e[t][1].end.offset-e[t][1].start.offset+e[m][1].end.offset-e[m][1].start.offset)%3))continue;l=e[t][1].end.offset-e[t][1].start.offset>1&&e[m][1].end.offset-e[m][1].start.offset>1?2:1;const p={...e[t][1].end},x={...e[m][1].start};o(p,-l),o(x,l),a={type:l>1?"strongSequence":"emphasisSequence",start:p,end:{...e[t][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[m][1].start},end:x},u={type:l>1?"strongText":"emphasisText",start:{...e[t][1].end},end:{...e[m][1].start}},i={type:l>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[t][1].end={...a.start},e[m][1].start={...s.end},f=[],e[t][1].end.offset-e[t][1].start.offset&&(f=(0,r.V)(f,[["enter",e[t][1],n],["exit",e[t][1],n]])),f=(0,r.V)(f,[["enter",i,n],["enter",a,n],["exit",a,n],["enter",u,n]]),f=(0,r.V)(f,(0,c.W)(n.parser.constructs.insideSpan.null,e.slice(t+1,m),n)),f=(0,r.V)(f,[["exit",u,n],["enter",s,n],["exit",s,n],["exit",i,n]]),e[m][1].end.offset-e[m][1].start.offset?(d=2,f=(0,r.V)(f,[["enter",e[m][1],n],["exit",e[m][1],n]])):d=0,(0,r.m)(e,t-1,m-t+3,f),m=t+f.length-d-2;break}m=-1;for(;++m<e.length;)"attentionSequence"===e[m][1].type&&(e[m][1].type="data");return e},tokenize:function(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,c=(0,i.S)(r);let u;return function(n){return u=n,e.enter("attentionSequence"),o(n)};function o(a){if(a===u)return e.consume(a),o;const s=e.exit("attentionSequence"),l=(0,i.S)(a),f=!l||2===l&&c||t.includes(a),d=!c||2===c&&l||t.includes(r);return s._open=Boolean(42===u?f:f&&(c||!d)),s._close=Boolean(42===u?d:d&&(l||!f)),n(a)}}};function o(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}},3604:(e,n,t)=>{t.d(n,{m:()=>i});var r=t(7949);const i={name:"autolink",tokenize:function(e,n,t){let i=0;return function(n){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),c};function c(n){return(0,r.CW)(n)?(e.consume(n),u):64===n?t(n):s(n)}function u(e){return 43===e||45===e||46===e||(0,r.lV)(e)?(i=1,o(e)):s(e)}function o(n){return 58===n?(e.consume(n),i=0,a):(43===n||45===n||46===n||(0,r.lV)(n))&&i++<32?(e.consume(n),o):(i=0,s(n))}function a(i){return 62===i?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),n):null===i||32===i||60===i||(0,r.JQ)(i)?t(i):(e.consume(i),a)}function s(n){return 64===n?(e.consume(n),l):(0,r.cx)(n)?(e.consume(n),s):t(n)}function l(e){return(0,r.lV)(e)?f(e):t(e)}function f(t){return 46===t?(e.consume(t),i=0,l):62===t?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.exit("autolink"),n):d(t)}function d(n){if((45===n||(0,r.lV)(n))&&i++<63){const t=45===n?d:f;return e.consume(n),t}return t(n)}}}},5460:(e,n,t)=>{t.d(n,{B:()=>c});var r=t(7508),i=t(7949);const c={partial:!0,tokenize:function(e,n,t){return function(n){return(0,i.On)(n)?(0,r.N)(e,c,"linePrefix")(n):c(n)};function c(e){return null===e||(0,i.HP)(e)?n(e):t(e)}}}},4371:(e,n,t)=>{t.d(n,{i:()=>c});var r=t(7508),i=t(7949);const c={continuation:{tokenize:function(e,n,t){const u=this;return function(n){if((0,i.On)(n))return(0,r.N)(e,o,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n);return o(n)};function o(r){return e.attempt(c,n,t)(r)}}},exit:function(e){e.exit("blockQuote")},name:"blockQuote",tokenize:function(e,n,t){const r=this;return function(n){if(62===n){const t=r.containerState;return t.open||(e.enter("blockQuote",{_container:!0}),t.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(n),e.exit("blockQuoteMarker"),c}return t(n)};function c(t){return(0,i.On)(t)?(e.enter("blockQuotePrefixWhitespace"),e.consume(t),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(t))}}}},854:(e,n,t)=>{t.d(n,{L:()=>i});var r=t(7949);const i={name:"characterEscape",tokenize:function(e,n,t){return function(n){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(n),e.exit("escapeMarker"),i};function i(i){return(0,r.ol)(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(i)}}}},6716:(e,n,t)=>{t.d(n,{L:()=>c});var r=t(1157),i=t(7949);const c={name:"characterReference",tokenize:function(e,n,t){const c=this;let u,o,a=0;return function(n){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(n),e.exit("characterReferenceMarker"),s};function s(n){return 35===n?(e.enter("characterReferenceMarkerNumeric"),e.consume(n),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),u=31,o=i.lV,f(n))}function l(n){return 88===n||120===n?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(n),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),u=6,o=i.ok,f):(e.enter("characterReferenceValue"),u=7,o=i.BM,f(n))}function f(s){if(59===s&&a){const u=e.exit("characterReferenceValue");return o!==i.lV||(0,r.s)(c.sliceSerialize(u))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),n):t(s)}return o(s)&&a++<u?(e.consume(s),f):t(s)}}}},4544:(e,n,t)=>{t.d(n,{b:()=>u});var r=t(7508),i=t(7949);const c={partial:!0,tokenize:function(e,n,t){const r=this;return function(n){if(null===n)return t(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),i};function i(e){return r.parser.lazy[r.now().line]?t(e):n(e)}}},u={concrete:!0,name:"codeFenced",tokenize:function(e,n,t){const u=this,o={partial:!0,tokenize:function(e,n,t){let c=0;return o;function o(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),s}function s(n){return e.enter("codeFencedFence"),(0,i.On)(n)?(0,r.N)(e,f,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n):f(n)}function f(n){return n===a?(e.enter("codeFencedFenceSequence"),d(n)):t(n)}function d(n){return n===a?(c++,e.consume(n),d):c>=l?(e.exit("codeFencedFenceSequence"),(0,i.On)(n)?(0,r.N)(e,m,"whitespace")(n):m(n)):t(n)}function m(r){return null===r||(0,i.HP)(r)?(e.exit("codeFencedFence"),n(r)):t(r)}}};let a,s=0,l=0;return function(n){return function(n){const t=u.events[u.events.length-1];return s=t&&"linePrefix"===t[1].type?t[2].sliceSerialize(t[1],!0).length:0,a=n,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(n)}(n)};function f(n){return n===a?(l++,e.consume(n),f):l<3?t(n):(e.exit("codeFencedFenceSequence"),(0,i.On)(n)?(0,r.N)(e,d,"whitespace")(n):d(n))}function d(t){return null===t||(0,i.HP)(t)?(e.exit("codeFencedFence"),u.interrupt?n(t):e.check(c,k,y)(t)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(t))}function m(n){return null===n||(0,i.HP)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(n)):(0,i.On)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,r.N)(e,p,"whitespace")(n)):96===n&&n===a?t(n):(e.consume(n),m)}function p(n){return null===n||(0,i.HP)(n)?d(n):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(n))}function x(n){return null===n||(0,i.HP)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(n)):96===n&&n===a?t(n):(e.consume(n),x)}function k(n){return e.attempt(o,y,h)(n)}function h(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),g}function g(n){return s>0&&(0,i.On)(n)?(0,r.N)(e,S,"linePrefix",s+1)(n):S(n)}function S(n){return null===n||(0,i.HP)(n)?e.check(c,k,y)(n):(e.enter("codeFlowValue"),v(n))}function v(n){return null===n||(0,i.HP)(n)?(e.exit("codeFlowValue"),S(n)):(e.consume(n),v)}function y(t){return e.exit("codeFenced"),n(t)}}}},5040:(e,n,t)=>{t.d(n,{j:()=>c});var r=t(7508),i=t(7949);const c={name:"codeIndented",tokenize:function(e,n,t){const c=this;return function(n){return e.enter("codeIndented"),(0,r.N)(e,o,"linePrefix",5)(n)};function o(e){const n=c.events[c.events.length-1];return n&&"linePrefix"===n[1].type&&n[2].sliceSerialize(n[1],!0).length>=4?a(e):t(e)}function a(n){return null===n?l(n):(0,i.HP)(n)?e.attempt(u,a,l)(n):(e.enter("codeFlowValue"),s(n))}function s(n){return null===n||(0,i.HP)(n)?(e.exit("codeFlowValue"),a(n)):(e.consume(n),s)}function l(t){return e.exit("codeIndented"),n(t)}}},u={partial:!0,tokenize:function(e,n,t){const c=this;return u;function u(n){return c.parser.lazy[c.now().line]?t(n):(0,i.HP)(n)?(e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),u):(0,r.N)(e,o,"linePrefix",5)(n)}function o(e){const r=c.events[c.events.length-1];return r&&"linePrefix"===r[1].type&&r[2].sliceSerialize(r[1],!0).length>=4?n(e):(0,i.HP)(e)?u(e):t(e)}}}},5408:(e,n,t)=>{t.d(n,{p:()=>i});var r=t(7949);const i={name:"codeText",previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type},resolve:function(e){let n,t,r=e.length-4,i=3;if(!("lineEnding"!==e[i][1].type&&"space"!==e[i][1].type||"lineEnding"!==e[r][1].type&&"space"!==e[r][1].type))for(n=i;++n<r;)if("codeTextData"===e[n][1].type){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}n=i-1,r++;for(;++n<=r;)void 0===t?n!==r&&"lineEnding"!==e[n][1].type&&(t=n):n!==r&&"lineEnding"!==e[n][1].type||(e[t][1].type="codeTextData",n!==t+2&&(e[t][1].end=e[n-1][1].end,e.splice(t+2,n-t-2),r-=n-t-2,n=t+2),t=void 0);return e},tokenize:function(e,n,t){let i,c,u=0;return function(n){return e.enter("codeText"),e.enter("codeTextSequence"),o(n)};function o(n){return 96===n?(e.consume(n),u++,o):(e.exit("codeTextSequence"),a(n))}function a(n){return null===n?t(n):32===n?(e.enter("space"),e.consume(n),e.exit("space"),a):96===n?(c=e.enter("codeTextSequence"),i=0,l(n)):(0,r.HP)(n)?(e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),a):(e.enter("codeTextData"),s(n))}function s(n){return null===n||32===n||96===n||(0,r.HP)(n)?(e.exit("codeTextData"),a(n)):(e.consume(n),s)}function l(t){return 96===t?(e.consume(t),i++,l):i===u?(e.exit("codeTextSequence"),e.exit("codeText"),n(t)):(c.type="codeTextData",s(t))}}}},1626:(e,n,t)=>{t.d(n,{Q:()=>u});var r=t(7508),i=t(7949),c=t(2492);const u={resolve:function(e){return(0,c.w)(e),e},tokenize:function(e,n){let t;return function(n){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),r(n)};function r(n){return null===n?c(n):(0,i.HP)(n)?e.check(o,u,c)(n):(e.consume(n),r)}function c(t){return e.exit("chunkContent"),e.exit("content"),n(t)}function u(n){return e.consume(n),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,r}}},o={partial:!0,tokenize:function(e,n,t){const c=this;return function(n){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),(0,r.N)(e,u,"linePrefix")};function u(r){if(null===r||(0,i.HP)(r))return t(r);const u=c.events[c.events.length-1];return!c.parser.constructs.disable.null.includes("codeIndented")&&u&&"linePrefix"===u[1].type&&u[2].sliceSerialize(u[1],!0).length>=4?n(r):e.interrupt(c.parser.constructs.flow,t,n)(r)}}}},9326:(e,n,t)=>{t.d(n,{m:()=>l});var r=t(2514),i=t(187),c=t(7508),u=t(3108),o=t(3967),a=t(7949),s=t(6243);const l={name:"definition",tokenize:function(e,n,t){const u=this;let l;return function(n){return e.enter("definition"),function(n){return i.r.call(u,e,d,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(n)}(n)};function d(n){return l=(0,s.B)(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),58===n?(e.enter("definitionMarker"),e.consume(n),e.exit("definitionMarker"),m):t(n)}function m(n){return(0,a.Ee)(n)?(0,o.Y)(e,p)(n):p(n)}function p(n){return(0,r.v)(e,x,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(n)}function x(n){return e.attempt(f,k,k)(n)}function k(n){return(0,a.On)(n)?(0,c.N)(e,h,"whitespace")(n):h(n)}function h(r){return null===r||(0,a.HP)(r)?(e.exit("definition"),u.parser.defined.push(l),n(r)):t(r)}}},f={partial:!0,tokenize:function(e,n,t){return function(n){return(0,a.Ee)(n)?(0,o.Y)(e,r)(n):t(n)};function r(n){return(0,u.f)(e,i,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(n)}function i(n){return(0,a.On)(n)?(0,c.N)(e,s,"whitespace")(n):s(n)}function s(e){return null===e||(0,a.HP)(e)?n(e):t(e)}}}},9750:(e,n,t)=>{t.d(n,{G:()=>i});var r=t(7949);const i={name:"hardBreakEscape",tokenize:function(e,n,t){return function(n){return e.enter("hardBreakEscape"),e.consume(n),i};function i(i){return(0,r.HP)(i)?(e.exit("hardBreakEscape"),n(i)):t(i)}}}},9135:(e,n,t)=>{t.d(n,{O:()=>u});var r=t(7508),i=t(7949),c=t(3890);const u={name:"headingAtx",resolve:function(e,n){let t,r,i=e.length-2,u=3;"whitespace"===e[u][1].type&&(u+=2);i-2>u&&"whitespace"===e[i][1].type&&(i-=2);"atxHeadingSequence"===e[i][1].type&&(u===i-1||i-4>u&&"whitespace"===e[i-2][1].type)&&(i-=u+1===i?2:4);i>u&&(t={type:"atxHeadingText",start:e[u][1].start,end:e[i][1].end},r={type:"chunkText",start:e[u][1].start,end:e[i][1].end,contentType:"text"},(0,c.m)(e,u,i-u+1,[["enter",t,n],["enter",r,n],["exit",r,n],["exit",t,n]]));return e},tokenize:function(e,n,t){let c=0;return function(n){return e.enter("atxHeading"),function(n){return e.enter("atxHeadingSequence"),u(n)}(n)};function u(n){return 35===n&&c++<6?(e.consume(n),u):null===n||(0,i.Ee)(n)?(e.exit("atxHeadingSequence"),o(n)):t(n)}function o(t){return 35===t?(e.enter("atxHeadingSequence"),a(t)):null===t||(0,i.HP)(t)?(e.exit("atxHeading"),n(t)):(0,i.On)(t)?(0,r.N)(e,o,"whitespace")(t):(e.enter("atxHeadingText"),s(t))}function a(n){return 35===n?(e.consume(n),a):(e.exit("atxHeadingSequence"),o(n))}function s(n){return null===n||35===n||(0,i.Ee)(n)?(e.exit("atxHeadingText"),o(n)):(e.consume(n),s)}}}},963:(e,n,t)=>{t.d(n,{G:()=>u});var r=t(7949),i=t(1486),c=t(5460);const u={concrete:!0,name:"htmlFlow",resolveTo:function(e){let n=e.length;for(;n--&&("enter"!==e[n][0]||"htmlFlow"!==e[n][1].type););n>1&&"linePrefix"===e[n-2][1].type&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2));return e},tokenize:function(e,n,t){const c=this;let u,s,l,f,d;return function(n){return function(n){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(n),m}(n)};function m(i){return 33===i?(e.consume(i),p):47===i?(e.consume(i),s=!0,h):63===i?(e.consume(i),u=3,c.interrupt?n:D):(0,r.CW)(i)?(e.consume(i),l=String.fromCharCode(i),g):t(i)}function p(i){return 45===i?(e.consume(i),u=2,x):91===i?(e.consume(i),u=5,f=0,k):(0,r.CW)(i)?(e.consume(i),u=4,c.interrupt?n:D):t(i)}function x(r){return 45===r?(e.consume(r),c.interrupt?n:D):t(r)}function k(r){const i="CDATA[";return r===i.charCodeAt(f++)?(e.consume(r),6===f?c.interrupt?n:w:k):t(r)}function h(n){return(0,r.CW)(n)?(e.consume(n),l=String.fromCharCode(n),g):t(n)}function g(o){if(null===o||47===o||62===o||(0,r.Ee)(o)){const r=47===o,a=l.toLowerCase();return r||s||!i.y.includes(a)?i.T.includes(l.toLowerCase())?(u=6,r?(e.consume(o),S):c.interrupt?n(o):w(o)):(u=7,c.interrupt&&!c.parser.lazy[c.now().line]?t(o):s?v(o):y(o)):(u=1,c.interrupt?n(o):w(o))}return 45===o||(0,r.lV)(o)?(e.consume(o),l+=String.fromCharCode(o),g):t(o)}function S(r){return 62===r?(e.consume(r),c.interrupt?n:w):t(r)}function v(n){return(0,r.On)(n)?(e.consume(n),v):F(n)}function y(n){return 47===n?(e.consume(n),F):58===n||95===n||(0,r.CW)(n)?(e.consume(n),P):(0,r.On)(n)?(e.consume(n),y):F(n)}function P(n){return 45===n||46===n||58===n||95===n||(0,r.lV)(n)?(e.consume(n),P):b(n)}function b(n){return 61===n?(e.consume(n),z):(0,r.On)(n)?(e.consume(n),b):y(n)}function z(n){return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),d=n,E):(0,r.On)(n)?(e.consume(n),z):H(n)}function E(n){return n===d?(e.consume(n),d=null,M):null===n||(0,r.HP)(n)?t(n):(e.consume(n),E)}function H(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||(0,r.Ee)(n)?b(n):(e.consume(n),H)}function M(e){return 47===e||62===e||(0,r.On)(e)?y(e):t(e)}function F(n){return 62===n?(e.consume(n),T):t(n)}function T(n){return null===n||(0,r.HP)(n)?w(n):(0,r.On)(n)?(e.consume(n),T):t(n)}function w(n){return 45===n&&2===u?(e.consume(n),C):60===n&&1===u?(e.consume(n),B):62===n&&4===u?(e.consume(n),N):63===n&&3===u?(e.consume(n),D):93===n&&5===u?(e.consume(n),q):!(0,r.HP)(n)||6!==u&&7!==u?null===n||(0,r.HP)(n)?(e.exit("htmlFlowData"),I(n)):(e.consume(n),w):(e.exit("htmlFlowData"),e.check(o,_,I)(n))}function I(n){return e.check(a,V,_)(n)}function V(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),L}function L(n){return null===n||(0,r.HP)(n)?I(n):(e.enter("htmlFlowData"),w(n))}function C(n){return 45===n?(e.consume(n),D):w(n)}function B(n){return 47===n?(e.consume(n),l="",O):w(n)}function O(n){if(62===n){const t=l.toLowerCase();return i.y.includes(t)?(e.consume(n),N):w(n)}return(0,r.CW)(n)&&l.length<8?(e.consume(n),l+=String.fromCharCode(n),O):w(n)}function q(n){return 93===n?(e.consume(n),D):w(n)}function D(n){return 62===n?(e.consume(n),N):45===n&&2===u?(e.consume(n),D):w(n)}function N(n){return null===n||(0,r.HP)(n)?(e.exit("htmlFlowData"),_(n)):(e.consume(n),N)}function _(t){return e.exit("htmlFlow"),n(t)}}},o={partial:!0,tokenize:function(e,n,t){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(c.B,n,t)}}},a={partial:!0,tokenize:function(e,n,t){const i=this;return function(n){if((0,r.HP)(n))return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),c;return t(n)};function c(e){return i.parser.lazy[i.now().line]?t(e):n(e)}}}},2352:(e,n,t)=>{t.d(n,{j:()=>c});var r=t(7508),i=t(7949);const c={name:"htmlText",tokenize:function(e,n,t){const c=this;let u,o,a;return function(n){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(n),s};function s(n){return 33===n?(e.consume(n),l):47===n?(e.consume(n),P):63===n?(e.consume(n),v):(0,i.CW)(n)?(e.consume(n),E):t(n)}function l(n){return 45===n?(e.consume(n),f):91===n?(e.consume(n),o=0,x):(0,i.CW)(n)?(e.consume(n),S):t(n)}function f(n){return 45===n?(e.consume(n),p):t(n)}function d(n){return null===n?t(n):45===n?(e.consume(n),m):(0,i.HP)(n)?(a=d,C(n)):(e.consume(n),d)}function m(n){return 45===n?(e.consume(n),p):d(n)}function p(e){return 62===e?L(e):45===e?m(e):d(e)}function x(n){const r="CDATA[";return n===r.charCodeAt(o++)?(e.consume(n),6===o?k:x):t(n)}function k(n){return null===n?t(n):93===n?(e.consume(n),h):(0,i.HP)(n)?(a=k,C(n)):(e.consume(n),k)}function h(n){return 93===n?(e.consume(n),g):k(n)}function g(n){return 62===n?L(n):93===n?(e.consume(n),g):k(n)}function S(n){return null===n||62===n?L(n):(0,i.HP)(n)?(a=S,C(n)):(e.consume(n),S)}function v(n){return null===n?t(n):63===n?(e.consume(n),y):(0,i.HP)(n)?(a=v,C(n)):(e.consume(n),v)}function y(e){return 62===e?L(e):v(e)}function P(n){return(0,i.CW)(n)?(e.consume(n),b):t(n)}function b(n){return 45===n||(0,i.lV)(n)?(e.consume(n),b):z(n)}function z(n){return(0,i.HP)(n)?(a=z,C(n)):(0,i.On)(n)?(e.consume(n),z):L(n)}function E(n){return 45===n||(0,i.lV)(n)?(e.consume(n),E):47===n||62===n||(0,i.Ee)(n)?H(n):t(n)}function H(n){return 47===n?(e.consume(n),L):58===n||95===n||(0,i.CW)(n)?(e.consume(n),M):(0,i.HP)(n)?(a=H,C(n)):(0,i.On)(n)?(e.consume(n),H):L(n)}function M(n){return 45===n||46===n||58===n||95===n||(0,i.lV)(n)?(e.consume(n),M):F(n)}function F(n){return 61===n?(e.consume(n),T):(0,i.HP)(n)?(a=F,C(n)):(0,i.On)(n)?(e.consume(n),F):H(n)}function T(n){return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),u=n,w):(0,i.HP)(n)?(a=T,C(n)):(0,i.On)(n)?(e.consume(n),T):(e.consume(n),I)}function w(n){return n===u?(e.consume(n),u=void 0,V):null===n?t(n):(0,i.HP)(n)?(a=w,C(n)):(e.consume(n),w)}function I(n){return null===n||34===n||39===n||60===n||61===n||96===n?t(n):47===n||62===n||(0,i.Ee)(n)?H(n):(e.consume(n),I)}function V(e){return 47===e||62===e||(0,i.Ee)(e)?H(e):t(e)}function L(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),n):t(r)}function C(n){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),B}function B(n){return(0,i.On)(n)?(0,r.N)(e,O,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n):O(n)}function O(n){return e.enter("htmlTextData"),a(n)}}}},5725:(e,n,t)=>{t.d(n,{o:()=>f});var r=t(2514),i=t(187),c=t(3108),u=t(3967),o=t(7949),a=t(3890),s=t(6243),l=t(3796);const f={name:"labelEnd",resolveAll:function(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),"labelImage"===r.type||"labelLink"===r.type||"labelEnd"===r.type){const e="labelImage"===r.type?4:2;r.type="data",n+=e}}e.length!==t.length&&(0,a.m)(e,0,e.length,t);return e},resolveTo:function(e,n){let t,r,i,c,u=e.length,o=0;for(;u--;)if(t=e[u][1],r){if("link"===t.type||"labelLink"===t.type&&t._inactive)break;"enter"===e[u][0]&&"labelLink"===t.type&&(t._inactive=!0)}else if(i){if("enter"===e[u][0]&&("labelImage"===t.type||"labelLink"===t.type)&&!t._balanced&&(r=u,"labelLink"!==t.type)){o=2;break}}else"labelEnd"===t.type&&(i=u);const s={type:"labelLink"===e[r][1].type?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},f={type:"label",start:{...e[r][1].start},end:{...e[i][1].end}},d={type:"labelText",start:{...e[r+o+2][1].end},end:{...e[i-2][1].start}};return c=[["enter",s,n],["enter",f,n]],c=(0,a.V)(c,e.slice(r+1,r+o+3)),c=(0,a.V)(c,[["enter",d,n]]),c=(0,a.V)(c,(0,l.W)(n.parser.constructs.insideSpan.null,e.slice(r+o+4,i-3),n)),c=(0,a.V)(c,[["exit",d,n],e[i-2],e[i-1],["exit",f,n]]),c=(0,a.V)(c,e.slice(i+1)),c=(0,a.V)(c,[["exit",s,n]]),(0,a.m)(e,r,e.length,c),e},tokenize:function(e,n,t){const r=this;let i,c,u=r.events.length;for(;u--;)if(("labelImage"===r.events[u][1].type||"labelLink"===r.events[u][1].type)&&!r.events[u][1]._balanced){i=r.events[u][1];break}return function(n){if(!i)return t(n);if(i._inactive)return f(n);return c=r.parser.defined.includes((0,s.B)(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelEnd"),o};function o(n){return 40===n?e.attempt(d,l,c?l:f)(n):91===n?e.attempt(m,l,c?a:f)(n):c?l(n):f(n)}function a(n){return e.attempt(p,l,f)(n)}function l(e){return n(e)}function f(e){return i._balanced=!0,t(e)}}},d={tokenize:function(e,n,t){return function(n){return e.enter("resource"),e.enter("resourceMarker"),e.consume(n),e.exit("resourceMarker"),i};function i(n){return(0,o.Ee)(n)?(0,u.Y)(e,a)(n):a(n)}function a(n){return 41===n?m(n):(0,r.v)(e,s,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(n)}function s(n){return(0,o.Ee)(n)?(0,u.Y)(e,f)(n):m(n)}function l(e){return t(e)}function f(n){return 34===n||39===n||40===n?(0,c.f)(e,d,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(n):m(n)}function d(n){return(0,o.Ee)(n)?(0,u.Y)(e,m)(n):m(n)}function m(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),n):t(r)}}},m={tokenize:function(e,n,t){const r=this;return function(n){return i.r.call(r,e,c,u,"reference","referenceMarker","referenceString")(n)};function c(e){return r.parser.defined.includes((0,s.B)(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(e):t(e)}function u(e){return t(e)}}},p={tokenize:function(e,n,t){return function(n){return e.enter("reference"),e.enter("referenceMarker"),e.consume(n),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),n):t(r)}}}},6136:(e,n,t)=>{t.d(n,{u:()=>r});const r={name:"labelStartImage",resolveAll:t(5725).o.resolveAll,tokenize:function(e,n,t){const r=this;return function(n){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(n),e.exit("labelImageMarker"),i};function i(n){return 91===n?(e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelImage"),c):t(n)}function c(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?t(e):n(e)}}}},385:(e,n,t)=>{t.d(n,{J:()=>r});const r={name:"labelStartLink",resolveAll:t(5725).o.resolveAll,tokenize:function(e,n,t){const r=this;return function(n){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelLink"),i};function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?t(e):n(e)}}}},4229:(e,n,t)=>{t.d(n,{E:()=>i});var r=t(7508);const i={name:"lineEnding",tokenize:function(e,n){return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,r.N)(e,n,"linePrefix")}}}},6027:(e,n,t)=>{t.d(n,{p:()=>o});var r=t(7508),i=t(7949),c=t(5460),u=t(1590);const o={continuation:{tokenize:function(e,n,t){const u=this;return u.containerState._closeFlow=void 0,e.check(c.B,(function(t){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,(0,r.N)(e,n,"listItemIndent",u.containerState.size+1)(t)}),(function(t){if(u.containerState.furtherBlankLines||!(0,i.On)(t))return u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,a(t);return u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,e.attempt(s,n,a)(t)}));function a(i){return u.containerState._closeFlow=!0,u.interrupt=void 0,(0,r.N)(e,e.attempt(o,n,t),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i)}}},exit:function(e){e.exit(this.containerState.type)},name:"list",tokenize:function(e,n,t){const r=this,o=r.events[r.events.length-1];let s=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,l=0;return function(n){const c=r.containerState.type||(42===n||43===n||45===n?"listUnordered":"listOrdered");if("listUnordered"===c?!r.containerState.marker||n===r.containerState.marker:(0,i.BM)(n)){if(r.containerState.type||(r.containerState.type=c,e.enter(c,{_container:!0})),"listUnordered"===c)return e.enter("listItemPrefix"),42===n||45===n?e.check(u.V,t,d)(n):d(n);if(!r.interrupt||49===n)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(n)}return t(n)};function f(n){return(0,i.BM)(n)&&++l<10?(e.consume(n),f):(!r.interrupt||l<2)&&(r.containerState.marker?n===r.containerState.marker:41===n||46===n)?(e.exit("listItemValue"),d(n)):t(n)}function d(n){return e.enter("listItemMarker"),e.consume(n),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||n,e.check(c.B,r.interrupt?t:m,e.attempt(a,x,p))}function m(e){return r.containerState.initialBlankLine=!0,s++,x(e)}function p(n){return(0,i.On)(n)?(e.enter("listItemPrefixWhitespace"),e.consume(n),e.exit("listItemPrefixWhitespace"),x):t(n)}function x(t){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(t)}}},a={partial:!0,tokenize:function(e,n,t){const c=this;return(0,r.N)(e,(function(e){const r=c.events[c.events.length-1];return!(0,i.On)(e)&&r&&"listItemPrefixWhitespace"===r[1].type?n(e):t(e)}),"listItemPrefixWhitespace",c.parser.constructs.disable.null.includes("codeIndented")?void 0:5)}},s={partial:!0,tokenize:function(e,n,t){const i=this;return(0,r.N)(e,(function(e){const r=i.events[i.events.length-1];return r&&"listItemIndent"===r[1].type&&r[2].sliceSerialize(r[1],!0).length===i.containerState.size?n(e):t(e)}),"listItemIndent",i.containerState.size+1)}}},5789:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(7508),i=t(7949);const c={name:"setextUnderline",resolveTo:function(e,n){let t,r,i,c=e.length;for(;c--;)if("enter"===e[c][0]){if("content"===e[c][1].type){t=c;break}"paragraph"===e[c][1].type&&(r=c)}else"content"===e[c][1].type&&e.splice(c,1),i||"definition"!==e[c][1].type||(i=c);const u={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};e[r][1].type="setextHeadingText",i?(e.splice(r,0,["enter",u,n]),e.splice(i+1,0,["exit",e[t][1],n]),e[t][1].end={...e[i][1].end}):e[t][1]=u;return e.push(["exit",u,n]),e},tokenize:function(e,n,t){const c=this;let u;return function(n){let r,i=c.events.length;for(;i--;)if("lineEnding"!==c.events[i][1].type&&"linePrefix"!==c.events[i][1].type&&"content"!==c.events[i][1].type){r="paragraph"===c.events[i][1].type;break}if(!c.parser.lazy[c.now().line]&&(c.interrupt||r))return e.enter("setextHeadingLine"),u=n,function(n){return e.enter("setextHeadingLineSequence"),o(n)}(n);return t(n)};function o(n){return n===u?(e.consume(n),o):(e.exit("setextHeadingLineSequence"),(0,i.On)(n)?(0,r.N)(e,a,"lineSuffix")(n):a(n))}function a(r){return null===r||(0,i.HP)(r)?(e.exit("setextHeadingLine"),n(r)):t(r)}}}},1590:(e,n,t)=>{t.d(n,{V:()=>c});var r=t(7508),i=t(7949);const c={name:"thematicBreak",tokenize:function(e,n,t){let c,u=0;return function(n){return e.enter("thematicBreak"),function(e){return c=e,o(e)}(n)};function o(r){return r===c?(e.enter("thematicBreakSequence"),a(r)):u>=3&&(null===r||(0,i.HP)(r))?(e.exit("thematicBreak"),n(r)):t(r)}function a(n){return n===c?(e.consume(n),u++,a):(e.exit("thematicBreakSequence"),(0,i.On)(n)?(0,r.N)(e,o,"whitespace")(n):o(n))}}}}}]);
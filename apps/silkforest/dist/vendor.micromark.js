"use strict";(self.webpackChunksilkforest_web=self.webpackChunksilkforest_web||[]).push([[7288],{9743:(e,n,t)=>{t.d(n,{q:()=>Y});var r={};t.r(r),t.d(r,{attentionMarkers:()=>K,contentInitial:()=>G,disable:()=>R,document:()=>D,flow:()=>q,flowInitial:()=>M,insideSpan:()=>W,string:()=>J,text:()=>Q});var i=t(660),o=t(7508),u=t(7949);const s={tokenize:function(e){const n=e.attempt(this.parser.constructs.contentInitial,(function(t){if(null===t)return void e.consume(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,o.N)(e,n,"linePrefix")}),(function(n){return e.enter("paragraph"),r(n)}));let t;return n;function r(n){const r=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=r),t=r,i(n)}function i(n){return null===n?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(n)):(0,u.HP)(n)?(e.consume(n),e.exit("chunkText"),r):(e.consume(n),i)}}};var c=t(3890);const l={tokenize:function(e){const n=this,t=[];let r,i,o,s=0;return l;function l(r){if(s<t.length){const i=t[s];return n.containerState=i[1],e.attempt(i[0].continuation,a,d)(r)}return d(r)}function a(e){if(s++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,r&&_();const t=n.events.length;let i,o=t;for(;o--;)if("exit"===n.events[o][0]&&"chunkFlow"===n.events[o][1].type){i=n.events[o][1].end;break}b(s);let u=t;for(;u<n.events.length;)n.events[u][1].end={...i},u++;return(0,c.m)(n.events,o+1,0,n.events.slice(t)),n.events.length=u,d(e)}return l(e)}function d(i){if(s===t.length){if(!r)return v(i);if(r.currentConstruct&&r.currentConstruct.concrete)return m(i);n.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(f,p,h)(i)}function p(e){return r&&_(),b(s),v(e)}function h(e){return n.parser.lazy[n.now().line]=s!==t.length,o=n.now().offset,m(e)}function v(t){return n.containerState={},e.attempt(f,x,m)(t)}function x(e){return s++,t.push([n.currentConstruct,n.containerState]),v(e)}function m(t){return null===t?(r&&_(),b(0),void e.consume(t)):(r=r||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:i}),g(t))}function g(t){return null===t?(k(e.exit("chunkFlow"),!0),b(0),void e.consume(t)):(0,u.HP)(t)?(e.consume(t),k(e.exit("chunkFlow")),s=0,n.interrupt=void 0,l):(e.consume(t),g)}function k(e,t){const u=n.sliceStream(e);if(t&&u.push(null),e.previous=i,i&&(i.next=e),i=e,r.defineSkip(e.start),r.write(u),n.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<o&&(!r.events[e][1].end||r.events[e][1].end.offset>o))return;const t=n.events.length;let i,u,l=t;for(;l--;)if("exit"===n.events[l][0]&&"chunkFlow"===n.events[l][1].type){if(i){u=n.events[l][1].end;break}i=!0}for(b(s),e=t;e<n.events.length;)n.events[e][1].end={...u},e++;(0,c.m)(n.events,l+1,0,n.events.slice(t)),n.events.length=e}}function b(r){let i=t.length;for(;i-- >r;){const r=t[i];n.containerState=r[1],r[0].exit.call(n,e)}t.length=r}function _(){r.write([null]),i=void 0,r=void 0,n.containerState._closeFlow=void 0}}},f={tokenize:function(e,n,t){return(0,o.N)(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};var a=t(5460),d=t(1626);const p={tokenize:function(e){const n=this,t=e.attempt(a.B,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}),e.attempt(this.parser.constructs.flowInitial,r,(0,o.N)(e,e.attempt(this.parser.constructs.flow,r,e.attempt(d.Q,r)),"linePrefix")));return t;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n.currentConstruct=void 0,t;e.consume(r)}}};const h={resolveAll:g()},v=m("string"),x=m("text");function m(e){return{resolveAll:g("text"===e?k:void 0),tokenize:function(n){const t=this,r=this.parser.constructs[e],i=n.attempt(r,o,u);return o;function o(e){return c(e)?i(e):u(e)}function u(e){if(null!==e)return n.enter("data"),n.consume(e),s;n.consume(e)}function s(e){return c(e)?(n.exit("data"),i(e)):(n.consume(e),s)}function c(e){if(null===e)return!0;const n=r[e];let i=-1;if(n)for(;++i<n.length;){const e=n[i];if(!e.previous||e.previous.call(t,t.previous))return!0}return!1}}}}function g(e){return function(n,t){let r,i=-1;for(;++i<=n.length;)void 0===r?n[i]&&"data"===n[i][1].type&&(r=i,i++):n[i]&&"data"===n[i][1].type||(i!==r+2&&(n[r][1].end=n[i-1][1].end,n.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(n,t):n}}function k(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||"lineEnding"===e[t][1].type)&&"data"===e[t-1][1].type){const r=e[t-1][1],i=n.sliceStream(r);let o,u=i.length,s=-1,c=0;for(;u--;){const e=i[u];if("string"==typeof e){for(s=e.length;32===e.charCodeAt(s-1);)c++,s--;if(s)break;s=-1}else if(-2===e)o=!0,c++;else if(-1!==e){u++;break}}if(c){const i={type:t===e.length||o||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?s:r.start._bufferIndex+s,_index:r.start._index+u,line:r.end.line,column:r.end.column-c,offset:r.end.offset-c},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(t,0,["enter",i,n],["exit",i,n]),t+=2)}t++}return e}var b=t(6027),_=t(4371),w=t(9326),y=t(5040),I=t(9135),S=t(1590),A=t(5789),C=t(963),z=t(4544),E=t(6716),T=t(854),j=t(4229),F=t(6136),P=t(6485),B=t(3604),H=t(2352),L=t(385),O=t(9750),V=t(5725),N=t(5408);const D={42:b.p,43:b.p,45:b.p,48:b.p,49:b.p,50:b.p,51:b.p,52:b.p,53:b.p,54:b.p,55:b.p,56:b.p,57:b.p,62:_.i},G={91:w.m},M={[-2]:y.j,[-1]:y.j,32:y.j},q={35:I.O,42:S.V,45:[A.A,S.V],60:C.G,61:A.A,95:S.V,96:z.b,126:z.b},J={38:E.L,92:T.L},Q={[-5]:j.E,[-4]:j.E,[-3]:j.E,33:F.u,38:E.L,42:P.f,60:[B.m,H.j],91:L.J,92:[O.G,T.L],93:V.o,95:P.f,96:N.p},W={null:[P.f,h]},K={null:[42,95]},R={null:[]};var U=t(3796);function X(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},o=[];let s=[],l=[],f=!0;const a={attempt:b((function(e,n){_(e,n.from)})),check:b(k),consume:function(e){(0,u.HP)(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,w()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++));d.previous=e,f=!0},enter:function(e,n){const t=n||{};return t.type=e,t.start=x(),d.events.push(["enter",t,d]),l.push(t),t},exit:function(e){const n=l.pop();return n.end=x(),d.events.push(["exit",n,d]),n},interrupt:b(k,{interrupt:!0})},d={code:null,containerState:{},defineSkip:function(e){i[e.line]=e.column,w()},events:[],now:x,parser:e,previous:null,sliceSerialize:function(e,n){return function(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const o=e[t];let u;if("string"==typeof o)u=o;else switch(o){case-5:u="\r";break;case-4:u="\n";break;case-3:u="\r\n";break;case-2:u=n?" ":"\t";break;case-1:if(!n&&i)continue;u=" ";break;default:u=String.fromCharCode(o)}i=-2===o,r.push(u)}return r.join("")}(v(e),n)},sliceStream:v,write:function(e){if(s=(0,c.V)(s,e),m(),null!==s[s.length-1])return[];return _(n,0),d.events=(0,U.W)(o,d.events,d),d.events}};let p,h=n.tokenize.call(d,a);return n.resolveAll&&o.push(n),d;function v(e){return function(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex;let u;if(t===i)u=[e[t].slice(r,o)];else{if(u=e.slice(t,i),r>-1){const e=u[0];"string"==typeof e?u[0]=e.slice(r):u.shift()}o>0&&u.push(e[i].slice(0,o))}return u}(s,e)}function x(){const{_bufferIndex:e,_index:n,line:t,column:i,offset:o}=r;return{_bufferIndex:e,_index:n,line:t,column:i,offset:o}}function m(){let e;for(;r._index<s.length;){const n=s[r._index];if("string"==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;)g(n.charCodeAt(r._bufferIndex));else g(n)}}function g(e){f=void 0,p=e,h=h(e)}function k(e,n){n.restore()}function b(e,n){return function(t,i,o){let u,s,c,p;return Array.isArray(t)?h(t):"tokenize"in t?h([t]):function(e){return n;function n(n){const t=null!==n&&e[n],r=null!==n&&e.null;return h([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(n)}}(t);function h(e){return u=e,s=0,0===e.length?o:v(e[s])}function v(e){return function(t){p=function(){const e=x(),n=d.previous,t=d.currentConstruct,i=d.events.length,o=Array.from(l);return{from:i,restore:u};function u(){r=e,d.previous=n,d.currentConstruct=t,d.events.length=i,l=o,w()}}(),c=e,e.partial||(d.currentConstruct=e);if(e.name&&d.parser.constructs.disable.null.includes(e.name))return g(t);return e.tokenize.call(n?Object.assign(Object.create(d),n):d,a,m,g)(t)}}function m(n){return f=!0,e(c,p),i}function g(e){return f=!0,p.restore(),++s<u.length?v(u[s]):o}}}function _(e,n){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&(0,c.m)(d.events,n,d.events.length-n,e.resolve(d.events.slice(n),d)),e.resolveTo&&(d.events=e.resolveTo(d.events,d))}function w(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Y(e){const n=e||{},t={constructs:(0,i.y)([r,...n.extensions||[]]),content:o(s),defined:[],document:o(l),flow:o(p),lazy:{},string:o(v),text:o(x)};return t;function o(e){return function(n){return X(t,e,n)}}}},8975:(e,n,t)=>{t.d(n,{_:()=>i});var r=t(2492);function i(e){for(;!(0,r.w)(e););return e}},2964:(e,n,t)=>{t.d(n,{v:()=>i});const r=/[\0\t\n\r]/g;function i(){let e,n=1,t="",i=!0;return function(o,u,s){const c=[];let l,f,a,d,p;o=t+("string"==typeof o?o.toString():new TextDecoder(u||void 0).decode(o)),a=0,t="",i&&(65279===o.charCodeAt(0)&&a++,i=void 0);for(;a<o.length;){if(r.lastIndex=a,l=r.exec(o),d=l&&void 0!==l.index?l.index:o.length,p=o.charCodeAt(d),!l){t=o.slice(a);break}if(10===p&&a===d&&e)c.push(-3),e=void 0;else switch(e&&(c.push(-5),e=void 0),a<d&&(c.push(o.slice(a,d)),n+=d-a),p){case 0:c.push(65533),n++;break;case 9:for(f=4*Math.ceil(n/4),c.push(-2);n++<f;)c.push(-1);break;case 10:c.push(-4),n=1;break;default:e=!0,n=1}a=d+1}s&&(e&&c.push(-5),t&&c.push(t),c.push(null));return c}}}}]);
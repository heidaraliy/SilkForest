"use strict";(self.webpackChunksilkforest_web=self.webpackChunksilkforest_web||[]).push([[643],{4785:(e,t,n)=>{n.d(t,{c:()=>i,d:()=>d});var a=n(9820),l=n(7395),r=n(4339);function i(){return{enter:{table:c,tableData:h,tableHeader:h,tableRow:s},exit:{codeText:b,table:o,tableData:u,tableHeader:u,tableRow:u}}}function c(e){const t=e._align;(0,a.ok)(t,"expected `_align` on table"),this.enter({type:"table",align:t.map((function(e){return"none"===e?null:e})),children:[]},e),this.data.inTable=!0}function o(e){this.exit(e),this.data.inTable=void 0}function s(e){this.enter({type:"tableRow",children:[]},e)}function u(e){this.exit(e)}function h(e){this.enter({type:"tableCell",children:[]},e)}function b(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,f));const n=this.stack[this.stack.length-1];(0,a.ok)("inlineCode"===n.type),n.value=t,this.exit(e)}function f(e,t){return"|"===t?t:e}function d(e){const t=e||{},n=t.tableCellPadding,a=t.tablePipeAlign,i=t.stringLength,c=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:function(e,t,n){let a=r.p.inlineCode(e,t,n);n.stack.includes("tableCell")&&(a=a.replace(/\|/g,"\\$&"));return a},table:function(e,t,n,a){return s(function(e,t,n){const a=e.children;let l=-1;const r=[],i=t.enter("table");for(;++l<a.length;)r[l]=u(a[l],t,n);return i(),r}(e,n,a),e.align)},tableCell:o,tableRow:function(e,t,n,a){const l=s([u(e,n,a)]);return l.slice(0,l.indexOf("\n"))}}};function o(e,t,n,a){const l=n.enter("tableCell"),r=n.enter("phrasing"),i=n.containerPhrasing(e,{...a,before:c,after:c});return r(),l(),i}function s(e,t){return(0,l.Q)(e,{align:t,alignDelimiters:a,padding:n,stringLength:i})}function u(e,t,n){const a=e.children;let l=-1;const r=[],i=t.enter("tableRow");for(;++l<a.length;)r[l]=o(a[l],0,t,n);return i(),r}}}}]);
"use strict";(self.webpackChunksilkforest_web=self.webpackChunksilkforest_web||[]).push([[3060],{3709:(e,t,s)=>{s.d(t,{Ay:()=>l});const r="object"==typeof self?self:globalThis,n=e=>((e,t)=>{const s=(t,s)=>(e.set(s,t),t),n=c=>{if(e.has(c))return e.get(c);const[o,u]=t[c];switch(o){case 0:case-1:return s(u,c);case 1:{const e=s([],c);for(const t of u)e.push(n(t));return e}case 2:{const e=s({},c);for(const[t,s]of u)e[n(t)]=n(s);return e}case 3:return s(new Date(u),c);case 4:{const{source:e,flags:t}=u;return s(new RegExp(e,t),c)}case 5:{const e=s(new Map,c);for(const[t,s]of u)e.set(n(t),n(s));return e}case 6:{const e=s(new Set,c);for(const t of u)e.add(n(t));return e}case 7:{const{name:e,message:t}=u;return s(new r[e](t),c)}case 8:return s(BigInt(u),c);case"BigInt":return s(Object(BigInt(u)),c)}return s(new r[o](u),c)};return n})(new Map,e)(0),c="",{toString:o}={},{keys:u}=Object,a=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=o.call(e).slice(8,-1);switch(s){case"Array":return[1,c];case"Object":return[2,c];case"Date":return[3,c];case"RegExp":return[4,c];case"Map":return[5,c];case"Set":return[6,c]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},f=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:s}={})=>{const r=[];return((e,t,s,r)=>{const n=(e,t)=>{const n=r.push(e)-1;return s.set(t,n),n},c=r=>{if(s.has(r))return s.get(r);let[o,i]=a(r);switch(o){case 0:{let t=r;switch(i){case"bigint":o=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+i);t=null;break;case"undefined":return n([-1],r)}return n([o,t],r)}case 1:{if(i)return n([i,[...r]],r);const e=[],t=n([o,e],r);for(const t of r)e.push(c(t));return t}case 2:{if(i)switch(i){case"BigInt":return n([i,r.toString()],r);case"Boolean":case"Number":case"String":return n([i,r.valueOf()],r)}if(t&&"toJSON"in r)return c(r.toJSON());const s=[],l=n([o,s],r);for(const t of u(r))!e&&f(a(r[t]))||s.push([c(t),c(r[t])]);return l}case 3:return n([o,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return n([o,{source:e,flags:t}],r)}case 5:{const t=[],s=n([o,t],r);for(const[s,n]of r)(e||!f(a(s))&&!f(a(n)))&&t.push([c(s),c(n)]);return s}case 6:{const t=[],s=n([o,t],r);for(const s of r)!e&&f(a(s))||t.push(c(s));return s}}const{message:l}=r;return n([o,{name:i,message:l}],r)};return c})(!(t||s),!!t,new Map,r)(e),r},l="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?n(i(e,t)):structuredClone(e):(e,t)=>n(i(e,t))}}]);
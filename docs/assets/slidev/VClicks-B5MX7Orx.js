import{aj as x,_ as C,aF as G,aG as $}from"../index-CJbOLs0M.js";import{d as k,a9 as z,aA as V,F as I,o as B,c as F,az as w,v as o,aF as h,aG as M,l as D,ae as T}from"../modules/vue-AU5P7adB.js";import{u as j}from"./context-Cbtxpv1X.js";const E=k({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(d,{expose:a}){a();const i=d,{$clicksContext:l}=j(),c=x();let n=+i.size;Number.isNaN(n)&&(console.warn(`[slidev] Invalid size for VClickGap: ${i.size}`),n=1),z(()=>{const u=l.currentOffset+n-1;l.register(c,{max:u,delta:n})}),V(()=>{l.unregister(c)});const t={props:i,clicks:l,id:c,get delta(){return n},set delta(u){n=u},Fragment:I};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function L(d,a,i,l,c,n){return B(),F(l.Fragment)}const O=C(E,[["render",L],["__file","/Users/lukastaegert/TNG/btd-rollup-2024/node_modules/@slidev/client/builtin/VClickGap.vue"]]),b=["ul","ol"],q=k({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var N,A;const d=+this.every,a=G(this.at),i=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const l=w("click"),c=(s,e)=>T(s,[[l,e,"",{hide:this.hide,fade:this.fade}]]),n=s=>s.flatMap(e=>h(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?n(e.children):[e]);let t=(A=(N=this.$slots).default)==null?void 0:A.call(N);if(!t)return;t=n($(t));const u=(s,e=1)=>n(s).map(r=>{if(!h(r))return r;if(b.includes(r.type)&&Array.isArray(r.children)){const p=f(r.children,e+1);return o(r,{},p)}return o(r)});let g=1,m=0;const f=(s,e=1)=>n(s).map(r=>{if(!h(r)||r.type===M)return r;const p=+a+Math.ceil(g++/d)-1;let _;e<+this.depth&&Array.isArray(r.children)?_=o(r,{},u(r.children,e)):_=o(r);const v=p-m;return m=p,c(_,i?v>=0?`+${v}`:`${v}`:p)}),y=()=>D(O,{size:+a+Math.ceil((g-1)/d)-1-m});if(this.handleSpecialElements){if(t.length===1&&b.includes(t[0].type)&&Array.isArray(t[0].children))return o(t[0],{},[...f(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const s=t[0];if(Array.isArray(s.children))return o(s,{},s.children.map(e=>h(e)?e.type==="tbody"&&Array.isArray(e.children)?o(e,{},[...f(e.children),y()]):o(e):e))}}return[...f(t),y()]}});export{q as _};

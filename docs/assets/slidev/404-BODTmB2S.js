import{N as _,y as p,r as x,b as S,e as s,a8 as n,x as f,c as m,k as g,g as h,o as d,p as k,a as N}from"../modules/vue-AU5P7adB.js";import{_ as y,a as v}from"../index-CJbOLs0M.js";import"../modules/shiki-CWjzht_g.js";const R={__name:"404",setup(t,{expose:l}){l();const{currentRoute:o}=_(),{total:e}=v(),u=p(()=>{const i=o.value.path.match(/\d+/);if(i){const r=+i[0];if(r>0&&r<=e.value)return r}return null}),a={currentRoute:o,total:e,guessedSlide:u,computed:p,get useRouter(){return _},get useNav(){return v}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},b=t=>(k("data-v-498aedf6"),t=t(),N(),t),B={class:"grid justify-center pt-15%"},I=b(()=>s("h1",{class:"text-9xl font-bold"}," 404 ",-1)),C={class:"text-2xl"},G={class:"op-70"},V={class:"mt-3 flex flex-col gap-2"};function j(t,l,o,e,u,a){const c=x("RouterLink");return d(),S("div",B,[s("div",null,[I,s("p",C,[n(" Page not found"),s("code",G,":"+f(e.currentRoute.path),1)]),s("div",V,[e.guessedSlide!==1?(d(),m(c,{key:0,to:"/",class:"page-link"},{default:g(()=>[n(" Go Home ")]),_:1})):h("v-if",!0),e.guessedSlide?(d(),m(c,{key:1,to:`/${e.guessedSlide}`,class:"page-link"},{default:g(()=>[n(" Go to Slide "+f(e.guessedSlide),1)]),_:1},8,["to"])):h("v-if",!0)])])])}const T=y(R,[["render",j],["__scopeId","data-v-498aedf6"],["__file","/Users/lukastaegert/TNG/btd-rollup-2024/node_modules/@slidev/client/pages/404.vue"]]);export{T as default};

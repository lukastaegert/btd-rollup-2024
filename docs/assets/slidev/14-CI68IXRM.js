import{_ as g}from"./VClicks-Bqojq1_j.js";import{I as h}from"../default-B3KpuSkb.js";import{_ as k,ao as u}from"../index-DWnbp1Uk.js";import{p as c,u as p,f as x}from"./context-Ck9knKu7.js";import{o as v,c as b,k as d,l as y,q as P,s as $,e,a9 as t}from"../modules/vue-DOp_BVzA.js";import"../BaseGrid-CDyRnrUA.js";import"../modules/shiki-DAFps8ir.js";const S={__name:"14",setup(_,{expose:s}){s(),c(u);const{$slidev:n,$nav:l,$clicksContext:a,$clicks:r,$page:o,$renderContext:f,$frontmatter:m}=p(),i={$slidev:n,$nav:l,$clicksContext:a,$clicks:r,$page:o,$renderContext:f,$frontmatter:m,InjectedLayout:h,get frontmatter(){return u},get useSlideContext(){return p},get _provideFrontmatter(){return c},get _frontmatterToProps(){return x}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},C=e("h1",null,"How to publish across platforms",-1),I=e("h2",null,"Set up by NAPI-RS CLI tool",-1),N=e("ul",null,[e("li",null,[t("separate packages for every target"),e("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"@rollup/rollup-win32-x64-msvc")]),t(`
`),e("span",{class:"line"},[e("span",null,"@rollup/rollup-darwin-arm64")]),t(`
`),e("span",{class:"line"},[e("span",null,"...")])])]),e("ul",null,[e("li",null,[t("contain "),e("code",null,".node"),t(" file as entry point")]),e("li",null,[t("list "),e("code",null,"os"),t(" and "),e("code",null,"cpu"),t(" in their "),e("code",null,"package.json"),t(" file")])])]),e("li",null,[e("code",null,"rollup"),t(" package has "),e("strong",null,"all"),t(" platform packages as "),e("code",null,"optionalDependencies"),e("ul",null,[e("li",null,"Node only installs suitable packages")])]),e("li",null,[t("NAPI-RS scaffolds GitHub Actions to build for many platforms "),e("ul",null,[e("li",null,"Rollup supports 16 targets: 3 Windows, 2 Mac, 2 Android, 9 Linux")])])],-1);function w(_,s,n,l,a,r){const o=g;return v(),b(l.InjectedLayout,P($(l._frontmatterToProps(l.frontmatter,13))),{default:d(()=>[C,I,y(o,null,{default:d(()=>[N]),_:1})]),_:1},16)}const D=k(S,[["render",w],["__file","/@slidev/slides/14.md"]]);export{D as default};
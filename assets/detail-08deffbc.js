import{i as S,o as f,e as w,f as i,g as d,O as p,h as O,k as N,l as D,m as E,n as P,p as L,q as T,s as j,t as $,v as F,w as G,x as q,r as l,u as z,d as C,y as H,z as m,A as M,j as h,a,N as W,c as _}from"./index-d980c401.js";function J(e){return e[e.length-1]}function k(e){return S(J(e))?e.pop():void 0}function B(e,n){return n===void 0&&(n=0),f(function(r,t){r.subscribe(w(t,function(o){return i(t,e,function(){return t.next(o)},n)},function(){return i(t,e,function(){return t.complete()},n)},function(o){return i(t,e,function(){return t.error(o)},n)}))})}function x(e,n){return n===void 0&&(n=0),f(function(r,t){t.add(e.schedule(function(){return r.subscribe(t)},n))})}function K(e,n){return d(e).pipe(x(n),B(n))}function Q(e,n){return d(e).pipe(x(n),B(n))}function U(e,n){return new p(function(r){var t=0;return n.schedule(function(){t===e.length?r.complete():(r.next(e[t++]),r.closed||this.schedule())})})}function V(e,n){return new p(function(r){var t;return i(r,n,function(){t=e[O](),i(r,n,function(){var o,c,u;try{o=t.next(),c=o.value,u=o.done}catch(v){r.error(v);return}u?r.complete():r.next(c)},0,!0)}),function(){return N(t==null?void 0:t.return)&&t.return()}})}function I(e,n){if(!e)throw new Error("Iterable cannot be null");return new p(function(r){i(r,n,function(){var t=e[Symbol.asyncIterator]();i(r,n,function(){t.next().then(function(o){o.done?r.complete():r.next(o.value)})},0,!0)})})}function X(e,n){return I(D(e),n)}function Y(e,n){if(e!=null){if(E(e))return K(e,n);if(P(e))return U(e,n);if(L(e))return Q(e,n);if(T(e))return I(e,n);if(j(e))return V(e,n);if($(e))return X(e,n)}throw F(e)}function Z(e,n){return n?Y(e,n):d(e)}function ee(e){return e===void 0&&(e=1/0),G(q,e)}function ne(){return ee(1)}function b(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return ne()(Z(e,k(e)))}function te(){return f(function(e,n){var r,t=!1;e.subscribe(w(n,function(o){var c=r;r=o,t&&n.next([c,o]),t=!0}))})}function re(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=k(e);return f(function(t,o){(r?b(e,t,r):b(e,t)).subscribe(o)})}const oe="_container_1mpn5_1",ae="_subbar_1mpn5_5",R={container:oe,subbar:ae},ie=()=>{console.log("BookDetail");const{bookID:e}=z(),n=C(),r=l.useRef(null),t=l.useRef(null),o=()=>{n("/books")};return l.useEffect(()=>{var g;const c=(g=r==null?void 0:r.current)==null?void 0:g.parentNode,u=t==null?void 0:t.current,y=H(c,"scroll").pipe(m(s=>s.target.scrollTop),re(0),te(),m(([s,A])=>A-s),M(50)).subscribe(s=>{s>=0?u.style.opacity=1:u.style.opacity=0});return()=>{y.unsubscribe()}},[]),h("div",{className:R.container,ref:r,children:[a(W,{back:!0,title:"BookDetail"}),a("div",{className:_(R.subbar),ref:t,children:a("div",{className:"border-b",children:"这是一个小标题栏"})}),h("main",{children:[a("h2",{children:"BookDetail"}),h("span",{children:["bookID: ",e]}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("button",{children:a("p",{children:"切忌不能刷新，因为github page找不到对应的位置资源"})}),a("button",{onClick:o,children:"进入SPA主页，不要再刷新了哦！"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"}),a("p",{children:"因为 github page只能按照目录结构去访问静态资源，跟React Browser Router是无法匹配的，因此第一次渲染一定会跳到一个奇怪的位置上，点击下面的按钮可以回归正常路由"})]})]})},ue=l.memo(ie);export{ue as default};

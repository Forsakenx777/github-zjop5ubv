import{c as f,j as e,u as A,B as y,T as q,U as P,a as V,C as w,b as B}from"./index-C3lVqZXi.js";import{r as m}from"./vendor-CGJkDKdD.js";import{m as p}from"./proxy-DKV5Fp1w.js";import{C as E}from"./Card-DYB_fwiI.js";import{T as H,t as F}from"./tournaments-K44o8kS3.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=f("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=f("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=f("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=f("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=f("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=f("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=f("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),z=["https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop","https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"];function _(){const[t,a]=m.useState(0);return m.useEffect(()=>{const s=setInterval(()=>{a(n=>(n+1)%z.length)},5e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"relative w-full h-[60vh] overflow-hidden",children:[z.map((s,n)=>e.jsx("div",{className:`absolute inset-0 transition-opacity duration-1000 ease-in-out ${n===t?"opacity-100":"opacity-0"}`,children:e.jsx("div",{className:"w-full h-full bg-cover bg-center",style:{backgroundImage:`url(${s})`}})},n)),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2",children:z.map((s,n)=>e.jsx("button",{className:`w-2 h-2 rounded-full transition-all ${n===t?"bg-white w-4":"bg-white/50"}`,onClick:()=>a(n)},n))})]})}function J(){return e.jsx("div",{className:"absolute inset-0 bg-black",children:e.jsx(_,{})})}function Q(){const t=A(),a=[{icon:q,label:"Tournaments",value:"10+"},{icon:P,label:"Players",value:"1000+"},{icon:L,label:"Prize Pool",value:"₹100K+"}];return e.jsx("div",{className:"relative z-10 text-center px-4 max-w-5xl mx-auto pt-20",children:e.jsxs(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"flex flex-col items-center justify-center gap-8",children:[e.jsxs("div",{className:"relative perspective-1000",children:[e.jsx(p.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white transform-style-3d hover:rotate-x-10 transition-transform duration-500",children:"Future of Esports"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl -z-10"})]}),e.jsx(p.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto",children:"Where Passion Becomes Profession"}),e.jsx(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",children:a.map((s,n)=>e.jsxs(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.8+n*.1},className:"flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm",children:[e.jsx(s.icon,{className:"w-8 h-8 text-white/80 mb-2"}),e.jsx("span",{className:"text-3xl font-bold text-white mb-1",children:s.value}),e.jsx("span",{className:"text-white/60",children:s.label})]},n))}),e.jsxs(p.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},className:"flex flex-col sm:flex-row gap-6 justify-center",children:[e.jsx(y,{variant:"primary",size:"lg",onClick:()=>t("/tournaments"),className:"group",children:e.jsxs("span",{className:"flex items-center gap-2",children:["Explore Tournaments",e.jsx(O,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})}),e.jsx(y,{variant:"secondary",size:"lg",onClick:()=>{const s=document.getElementById("about");s==null||s.scrollIntoView({behavior:"smooth"})},children:"Learn More"})]})]})})}function X(){const t=m.useRef(null);return m.useEffect(()=>{const a=t.current;if(!a)return;const s=a.getContext("2d");if(!s)return;a.width=window.innerWidth,a.height=window.innerHeight;const n=[],d=["#ffffff","#8b5cf6","#6366f1"];for(let r=0;r<100;r++)n.push({x:Math.random()*a.width,y:Math.random()*a.height,size:Math.random()*2+.5,speedX:Math.random()*.5-.25,speedY:Math.random()*.5-.25,opacity:Math.random()*.5+.3,color:d[Math.floor(Math.random()*d.length)]});function l(){for(let r=0;r<n.length;r++)for(let c=r+1;c<n.length;c++){const u=n[r].x-n[c].x,h=n[r].y-n[c].y,b=Math.sqrt(u*u+h*h);b<100&&(s.beginPath(),s.strokeStyle=`rgba(255, 255, 255, ${.1*(1-b/100)})`,s.lineWidth=.5,s.moveTo(n[r].x,n[r].y),s.lineTo(n[c].x,n[c].y),s.stroke())}}function o(){a&&s&&(s.clearRect(0,0,a.width,a.height),n.forEach(r=>{r.x+=r.speedX,r.y+=r.speedY,r.x>a.width&&(r.x=0),r.x<0&&(r.x=a.width),r.y>a.height&&(r.y=0),r.y<0&&(r.y=a.height),s.beginPath(),s.arc(r.x,r.y,r.size,0,Math.PI*2),s.fillStyle=r.color.replace(")",`,${r.opacity})`),s.fill()}),l(),requestAnimationFrame(o))}o();const i=()=>{a.width=window.innerWidth,a.height=window.innerHeight};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),e.jsx("canvas",{ref:t,className:"absolute inset-0 pointer-events-none",style:{opacity:.3}})}function K(){return e.jsxs("div",{className:"relative min-h-[90vh] flex items-center justify-center overflow-hidden",children:[e.jsx(J,{}),e.jsx(X,{}),e.jsx(Q,{})]})}var I=new Map,v=new WeakMap,R=0,Z=void 0;function ee(t){return t?(v.has(t)||(R+=1,v.set(t,R.toString())),v.get(t)):"0"}function te(t){return Object.keys(t).sort().filter(a=>t[a]!==void 0).map(a=>`${a}_${a==="root"?ee(t.root):t[a]}`).toString()}function se(t){const a=te(t);let s=I.get(a);if(!s){const n=new Map;let d;const l=new IntersectionObserver(o=>{o.forEach(i=>{var r;const c=i.isIntersecting&&d.some(u=>i.intersectionRatio>=u);t.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=c),(r=n.get(i.target))==null||r.forEach(u=>{u(c,i)})})},t);d=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:a,observer:l,elements:n},I.set(a,s)}return s}function ae(t,a,s={},n=Z){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const r=t.getBoundingClientRect();return a(n,{isIntersecting:n,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:d,observer:l,elements:o}=se(s),i=o.get(t)||[];return o.has(t)||o.set(t,i),i.push(a),l.observe(t),function(){i.splice(i.indexOf(a),1),i.length===0&&(o.delete(t),l.unobserve(t)),o.size===0&&(l.disconnect(),I.delete(d))}}function W({threshold:t,delay:a,trackVisibility:s,rootMargin:n,root:d,triggerOnce:l,skip:o,initialInView:i,fallbackInView:r,onChange:c}={}){var u;const[h,b]=m.useState(null),j=m.useRef(c),[N,M]=m.useState({inView:!!i,entry:void 0});j.current=c,m.useEffect(()=>{if(o||!h)return;let g;return g=ae(h,(T,C)=>{M({inView:T,entry:C}),j.current&&j.current(T,C),C.isIntersecting&&l&&g&&(g(),g=void 0)},{root:d,rootMargin:n,threshold:t,trackVisibility:s,delay:a},r),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,h,d,n,l,o,s,r,a]);const k=(u=N.entry)==null?void 0:u.target,S=m.useRef(void 0);!h&&k&&!l&&!o&&S.current!==k&&(S.current=k,M({inView:!!i,entry:void 0}));const x=[b,N.inView,N.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}function ne({icon:t,title:a,description:s}){return e.jsxs(E,{className:"p-8 hover:bg-white/10 transition-colors duration-300",hover:!0,children:[e.jsx(t,{className:"w-12 h-12 text-white mb-6"}),e.jsx("h3",{className:"text-xl font-semibold text-white mb-4",children:a}),e.jsx("p",{className:"text-gray-400",children:s})]})}function re({children:t}){return e.jsxs("div",{className:"relative mb-6",children:[e.jsx("div",{className:"absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"}),t]})}const ie={getClassName:t=>V("transform transition-all duration-700 hover:scale-105",t?"opacity-100 translate-y-0":"opacity-0 translate-y-10")},oe=[{icon:q,title:"Premier Tournaments",description:"Experience top-tier esports competitions with professional organization, substantial prize pools, and nationwide recognition."},{icon:Y,title:"Skill Development",description:"Access coaching, workshops, and training programs designed to elevate your gaming skills to professional standards."},{icon:P,title:"Vibrant Community",description:"Join a thriving network of players, teams, and enthusiasts who share your passion for competitive gaming."},{icon:D,title:"Professional Standards",description:"Experience tournaments organized following international esports standards and best practices."},{icon:G,title:"Fair Play",description:"Compete in a regulated environment with strict anti-cheat measures and professional referees."},{icon:U,title:"Growth Opportunities",description:"Get exposure to professional teams, sponsors, and opportunities in the esports industry."}];function le(){const[t,a]=W({triggerOnce:!0,threshold:.1});return e.jsx("section",{id:"about",className:"py-24 bg-gradient-to-b from-black via-gray-900 to-black",children:e.jsxs(w,{children:[e.jsxs("div",{className:"text-center mb-16 px-4",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300",children:"Why Choose ESLN?"}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto",children:"We're building the future of Nepali esports, providing a comprehensive platform for gamers to compete, grow, and succeed."})]}),e.jsx("div",{ref:t,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4",children:oe.map((s,n)=>e.jsx("div",{className:ie.getClassName(a),style:{transitionDelay:`${n*200}ms`},children:e.jsx(ne,{icon:s.icon,title:s.title,description:s.description,IconWrapper:re})},n))})]})})}function ce(){const t=A(),a=F.slice(0,2);return e.jsx("section",{id:"tournaments",className:"py-24 bg-black",children:e.jsxs(w,{children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Upcoming Tournaments"}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto mb-8",children:"Compete in Nepal's most prestigious esports tournaments and make your mark in gaming history"}),e.jsx(y,{variant:"secondary",onClick:()=>t("/tournaments"),className:"hover:scale-105 transition-transform duration-300",children:"See All Tournaments"})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:a.map(s=>e.jsx(H,{...s},s.id))})]})})}function de(){const[t,a]=W({triggerOnce:!0,threshold:.1});return e.jsxs("section",{className:"py-16 md:py-24 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:"url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')"},children:e.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"})}),e.jsx(w,{className:"relative z-10 px-4 md:px-6",children:e.jsx(p.div,{ref:t,initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{},transition:{duration:.6},children:e.jsxs(E,{className:"max-w-4xl mx-auto text-center p-8 md:p-12",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6",children:"Your Esports Journey Starts Here"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto",children:"Join Nepal's fastest-growing esports community and take your first step towards becoming a gaming legend."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 md:gap-6 justify-center",children:[e.jsx(y,{variant:"primary",size:"lg",className:"w-full sm:w-auto",children:"Register Now"}),e.jsx(y,{variant:"secondary",size:"lg",className:"w-full sm:w-auto",onClick:()=>{const s=document.getElementById("tournaments");s==null||s.scrollIntoView({behavior:"smooth"})},children:"View Tournaments"})]})]})})})]})}function me({question:t,answer:a}){const[s,n]=m.useState(!1);return e.jsxs("div",{className:"border-b border-white/10 last:border-none",children:[e.jsxs("button",{onClick:()=>n(!s),className:"w-full py-6 flex items-center justify-between text-left focus:outline-none group",children:[e.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-white/90",children:t}),s?e.jsx($,{className:"w-5 h-5 text-white/60 group-hover:text-white/90"}):e.jsx(B,{className:"w-5 h-5 text-white/60 group-hover:text-white/90"})]}),e.jsx("div",{className:V("overflow-hidden transition-all duration-300",s?"max-h-96 pb-6":"max-h-0"),children:e.jsx("p",{className:"text-gray-400 leading-relaxed",children:a})})]})}const ue=[{question:"How do I register for tournaments?",answer:"Registration is simple! Navigate to the Tournaments section. Choose your preferred tournament and follow the registration steps. Make sure to read the tournament rules and requirements before registering."},{question:"What games do you currently support?",answer:"We currently support major esports titles including DOTA 2, PUBG Mobile, Valorant, and Counter-Strike. We're constantly expanding our game roster based on community feedback and tournament demand."},{question:"Are there entry fees for tournaments?",answer:"Entry fees vary by tournament tier. All fee details are clearly listed on each tournament's registration page."},{question:"How are prize pools distributed?",answer:"Prize pool distribution varies by tournament and is always clearly outlined in the tournament rules. Typically, prizes are distributed among top performers, with the majority going to the champion team/player."},{question:"Can I stream my tournament matches?",answer:"Yes, players can stream their matches unless specifically prohibited by tournament rules. ESLN also has official tournament streams where featured matches are broadcast."}];function he(){return e.jsx("section",{id:"faq",className:"py-24 bg-gradient-to-b from-black to-gray-900",children:e.jsxs(w,{children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Frequently Asked Questions"}),e.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Everything you need to know about participating in ESLN tournaments"})]}),e.jsx(E,{className:"max-w-3xl mx-auto divide-y divide-white/10",children:ue.map((t,a)=>e.jsx(me,{...t},a))})]})})}function be(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(le,{}),e.jsx(ce,{}),e.jsx(de,{}),e.jsx(he,{})]})}export{be as default};
//# sourceMappingURL=Home-D0AyKQzm.js.map

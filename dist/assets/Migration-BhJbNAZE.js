import{r as a,j as t}from"./index-_JUgB5wR.js";const m=()=>{const[s,l]=a.useState(()=>{const r=1745001e3-Math.floor(Date.now()/1e3);return Math.max(r,0)});a.useEffect(()=>{const e=setInterval(()=>{l(r=>r<=0?(clearInterval(e),0):r-1)},1e3);return()=>clearInterval(e)},[]);const n=e=>{const r=Math.floor(e/3600),o=Math.floor(e%3600/60),i=e%60;return`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`};return t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900",children:t.jsxs("div",{className:"relative bg-white/10 backdrop-blur-lg p-12 rounded-2xl shadow-2xl border border-white/20 animate-fadeIn",children:[t.jsx("div",{className:"absolute -z-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float top-0 -left-16"}),t.jsx("div",{className:"absolute -z-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float-delayed -bottom-16 -right-16"}),t.jsxs("div",{className:"space-y-8 text-white",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse",children:"Migration is in Progress"}),t.jsx("p",{className:"text-lg text-gray-300",children:"Our system is currently undergoing migration"})]}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"text-6xl font-mono font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text animate-gradient",children:n(s)}),t.jsx("div",{className:"absolute -inset-4 border-2 border-white/20 rounded-lg animate-pulse"})]})]})]})})};export{m as default};

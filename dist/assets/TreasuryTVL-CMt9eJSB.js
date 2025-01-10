import{c as U,j as a,s as F,C as v,G as M,a as B,T as G}from"./index-CATiC4f0.js";import{u as m,f as i,a as I,h as R,C as $,L as H}from"./moment-1QzQFXpc.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=U("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);function Q({type:o}){var h,g,x,u,p,b,f,N,j,y,L,T,w,k,D,P,_,C,A;const{loading:c,error:d,data:n}=m(M),{data:t}=m(B),e=m(G);if(c)return a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:Array.from({length:4}).map((r,l)=>a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md animate-pulse",children:[a.jsx("div",{className:"h-4 bg-gray-200 rounded w-24 mb-4"}),a.jsx("div",{className:"h-6 bg-gray-200 rounded w-32"})]},`skeleton-${l}`))});const s=((x=(g=n==null?void 0:n.getFilteredTokenData)==null?void 0:g[((h=n==null?void 0:n.getFilteredTokenData)==null?void 0:h.length)-1])==null?void 0:x.tokenBalance)||[],O=((u=t==null?void 0:t.userCountAndTotalStack)==null?void 0:u.totalUsers)||0;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${o==="dashboard"?"4":"3"} gap-4 mb-4 animate-[fadeIn_0.5s_ease-in-out]`,children:[a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg",children:[a.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"LP Treasure"}),a.jsxs("div",{className:" flex mt-2 space-y-1",children:[a.jsx("p",{className:"text-2xl font-semibold ",style:{color:"#066fd2"},children:(s==null?void 0:s.length)>0?i(parseFloat((p=s==null?void 0:s.map(function(r){return r.balance}))==null?void 0:p.reduce(function(r,l){return Number(r)+Number(l)}))):0}),a.jsx("a",{href:F+"tx/"+v,target:"_blank",rel:"noopener noreferrer",className:" ml-3 text-[#066fd2] hover:text-blue-600","aria-label":"Go to Contract",children:a.jsx(E,{})})]})]}),a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg relative",children:[a.jsxs("h3",{className:"text-sm font-medium text-gray-500",children:["LP"," ",(b=e==null?void 0:e.data)!=null&&b.getLpPairData[0].name?(f=e==null?void 0:e.data)==null?void 0:f.getLpPairData[0].name:"DAI","/",(N=e==null?void 0:e.data)!=null&&N.getLpPairData[1].name?(j=e==null?void 0:e.data)==null?void 0:j.getLpPairData[1].name:"USDX"]}),a.jsxs("div",{className:"mt-2 space-y-1 flex",children:[a.jsx("p",{className:"text-2xl font-semibold",style:{color:"#066fd2"},children:((L=(y=e==null?void 0:e.data)==null?void 0:y.getLpPairData)==null?void 0:L.length)>0?i(parseFloat(((T=e==null?void 0:e.data)==null?void 0:T.getLpPairData[0].balance)+((w=e==null?void 0:e.data)==null?void 0:w.getLpPairData[1].balance))):0}),a.jsx("a",{href:F+"tx/"+v,target:"_blank",rel:"noopener noreferrer",className:" ml-3 text-[#066fd2] hover:text-blue-600","aria-label":"Go to Contract",children:a.jsx(E,{})})]})]}),a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg",children:[a.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Total LP TVL"}),a.jsx("div",{className:"mt-2 space-y-1",children:a.jsx("p",{className:"text-2xl font-semibold ",style:{color:"#066fd2"},children:((D=(k=e==null?void 0:e.data)==null?void 0:k.getLpPairData)==null?void 0:D.length)>0&&(s==null?void 0:s.length)>0?i(parseFloat(((P=e==null?void 0:e.data)==null?void 0:P.getLpPairData[0].balance)+((_=e==null?void 0:e.data)==null?void 0:_.getLpPairData[1].balance)+Number(s.map(function(r){return r.balance}).reduce(function(r,l){return Number(r)+Number(l)})))):0})})]}),o==="dashboard"&&a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg",children:[a.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Total Users"}),a.jsx("div",{className:"mt-2 space-y-1",children:a.jsx("p",{className:"text-2xl font-semibold ",style:{color:"#066fd2"},children:((A=(C=e==null?void 0:e.data)==null?void 0:C.getLpPairData)==null?void 0:A.length)>0&&(s==null?void 0:s.length)>0?I(O.toString()):0})})]})]}),o!=="dashboard"&&a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 animate-[fadeIn_0.5s_ease-in-out]",children:s.map((r,l)=>a.jsxs("div",{className:"bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg",children:[a.jsxs("h3",{className:"text-sm font-medium text-gray-500",children:["Current ",r.tokenName," TVL"]}),a.jsx("div",{className:"mt-2 space-y-1",children:a.jsx("p",{className:"text-2xl font-semibold",style:{color:"#066fd2"},children:i(parseFloat(r.balance))})})]},`${r.tokenSymbol}-${l}`))})]})}const V=["#6366f1","#f59e0b","#10b981","#ec4899","#8b5cf6"];function q(o){const c=[...o].sort((e,s)=>new Date(e.timestamp).getTime()-new Date(s.timestamp).getTime()),d=new Set(o.flatMap(e=>e.tokenBalance.map(s=>s.tokenSymbol))),n=c.map(e=>({date:R(Number(e.timestamp)).format("MM/DD/yyyy"),...Object.fromEntries(e.tokenBalance.map(s=>[s.tokenSymbol,parseFloat(s.balance)]))})),t=Array.from(d).map((e,s)=>({key:e,label:e,color:V[s%V.length]}));return{chartData:n,series:t}}function X(){const{loading:o,error:c,data:d}=m(M),{chartData:n,series:t}=q((d==null?void 0:d.getFilteredTokenData)||[]);return a.jsx("div",{className:"transform transition-all duration-500 hover:scale-[1.02]",children:a.jsx($,{title:"Treasury TVL",children:a.jsx(H,{data:n,series:t,yAxisLabel:"Balance",formatValue:i})})})}export{Q as T,X as a};

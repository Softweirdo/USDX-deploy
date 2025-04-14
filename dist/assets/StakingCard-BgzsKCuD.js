import{r as l,j as e}from"./index-DcR7dgUS.js";import{s as T,f as C}from"./Staking-BROqbwZu.js";import{C as I}from"./coins-CdeCfH6g.js";import{c as z}from"./createLucideIcon-DQ2C0pqJ.js";import"./allowance-T3lDd9zi.js";import"./TypedData-CsuUkuQs.js";import"./Address-BWbYURjL.js";import"./arweave-CAGvOb64.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),F=({targetDate:i,onClick:b,isClaiming:x,claimOption:y,claimAmount:h,accumulatedRewards:s})=>{const u=()=>{const d=new Date,o=new Date(i)-d;if(o>0){const g=Math.floor(o/864e5),j=Math.floor(o/(1e3*60*60)%24),n=Math.floor(o/(1e3*60)%60),m=Math.floor(o/1e3%60);return{days:g,hours:j,minutes:n,seconds:m}}return null},[r,c]=l.useState(u());return l.useEffect(()=>{const d=setInterval(()=>{c(u())},1e3);return()=>clearInterval(d)},[i]),e.jsx("div",{children:e.jsxs("button",{onClick:b,disabled:x||r,className:"w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:[e.jsx(I,{className:"w-5 h-5"}),e.jsx("span",{children:x?"Withdrawing...":r?e.jsxs("div",{children:[" ",r.days,"d ",r.hours,"h ",r.minutes,"m"," ",r.seconds,"s"]}):"Withdraw Rewards"})]})})};function L({activePool:i,onPoolChange:b,onDeposit:x,userSelectedBalance:y,tokenAddress:h,userStakingList:s,handelStakingSelect:u,selectedStaking:r,userPending:c,handleClaimTokens:d,handlewithdrawTokens:o,setTokenAddress:g,fetchLpDetails:j}){var D,E;const[n,m]=l.useState(""),[A,p]=l.useState(!1),[w,M]=l.useState(!1),[N,V]=l.useState("partial"),[S,Y]=l.useState(""),v=[{id:"1",name:"6 Months",apy:"24% APY",icon:f,description:"6 months lock period",minStake:"500",lockPeriod:"6 months"},{id:"2",name:"12 Months",apy:"36% APY",icon:f,description:"1 year lock period",minStake:"500",lockPeriod:"12 months"},{id:"3",name:"36 Months",apy:"48% APY",icon:f,description:"3 years lock period",minStake:"500",lockPeriod:"36 months"},{id:"4",name:"60 Months",apy:"60% APY",icon:f,description:"5 years lock period",minStake:"500",lockPeriod:"60 months"}],k=v.find(t=>t.id===i)||v[0];n&&((t,a)=>{const P=t*(a/100)/365,X=P*30,$=t*(a/100);return{daily:P,monthly:X,yearly:$}})(Number(n),Number(k.apy.replace("%","")));const R=156.75,O=async()=>{p(!0);try{await x(n),m(""),j()}catch(t){console.error("Error depositing tokens:",t)}finally{p(!1)}},W=async()=>{var t;p(!0);try{await o(C((t=s[r])==null?void 0:t.amount,18)),Y("")}catch(a){console.error("Error withdrawing tokens:",a)}finally{p(!1)}},U=async()=>{M(!0);try{await d()}catch(t){console.error("Error claiming dividends:",t)}finally{M(!1)}};return e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:v.map(t=>{const a=t.icon;return e.jsx("button",{onClick:()=>b(t.id),className:`p-4 rounded-lg border-2 transition-all ${i===t.id?"border-[#066fd2] bg-blue-50":"border-gray-200 hover:border-[#066fd2]"}`,children:e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx(a,{className:"w-6 h-6 text-[#066fd2] mb-2"}),e.jsx("span",{className:"font-semibold text-sm",children:t.name}),e.jsx("span",{className:"text-lg font-bold text-[#066fd2]",children:t.apy}),e.jsx("span",{className:"text-xs text-gray-500 mt-1",children:t.description})]})},t.id)})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Stake APY"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center w-full py-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Stake Amount"}),e.jsx("div",{children:e.jsx("select",{className:"w-full p-1 text-sm text-gray-600 rounded-lg border border-gray-300",onChange:t=>{g(t.target.value)},value:h,children:T.length>0&&T.map((t,a)=>e.jsxs("option",{value:t==null?void 0:t.name,children:[t==null?void 0:t.name," "]},a))})})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"number",value:n,onChange:t=>m(t.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300",placeholder:"Enter amount to stake"}),e.jsx("button",{className:"absolute right-2 top-2 px-3 py-1 bg-gray-100 rounded text-sm text-gray-600 hover:bg-gray-200",onClick:()=>m(y),children:"MAX"})]})]}),e.jsxs("div",{className:"flex justify-between text-sm text-gray-600",children:[e.jsxs("span",{children:["Minimum Stake: ",k.minStake," ",h]}),e.jsxs("span",{children:["Balance: ",(+y).toFixed(3)," ",h]})]}),e.jsx("button",{onClick:O,disabled:A||!n||Number(n)<Number(k.minStake.split(" ")[0]),className:"w-full py-3 px-4 bg-[#066fd2] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:A?"Staking...":"Stake Now"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center w-full py-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Claim Rewards"}),e.jsx("div",{children:e.jsx("select",{className:"w-full text-sm p-1 text-gray-600 rounded-lg border border-gray-300",onChange:t=>{u(t.target.value)},children:s&&(s==null?void 0:s.length)>0&&(s==null?void 0:s.map((t,a)=>Number(C(t==null?void 0:t.amount,18))!==0&&e.jsxs("option",{value:a,children:[C(t==null?void 0:t.amount,18)," ",new Date(Number(t==null?void 0:t.depositTime)*1e3).toDateString()]},a)))})})]}),e.jsx("div",{className:"bg-blue-50 rounded-lg p-4 border border-blue-100",children:e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Available Rewards"}),e.jsxs("span",{className:"text-lg font-bold text-[#066fd2]",children:[c," USDX"]})]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{onClick:U,disabled:w||N==="partial"&&(!c||Number(c)>R),className:"w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:[e.jsx(I,{className:"w-5 h-5"}),e.jsx("span",{children:w?"Claiming...":`Claim ${N==="all"?"All":""} Rewards`})]}),e.jsx(F,{onClick:W,isClaiming:w,claimOption:N,claimAmount:S,accumulatedRewards:R,targetDate:new Date(Number(((D=s[+r])==null?void 0:D.cliffTime)+((E=s[+r])==null?void 0:E.depositTime))*1e3)})]})]})]})]})}export{L as StakingCard};

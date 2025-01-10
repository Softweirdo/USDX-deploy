import{c as s,j as e}from"./index-CATiC4f0.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=s("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);function d(){const a=[{id:1,type:"stake",amount:"1,000 USDX",timestamp:"2024-03-14 15:30",status:"completed",pool:"Premium Pool",rewards:"2.5 USDX"},{id:2,type:"unstake",amount:"500 USDX",timestamp:"2024-03-13 12:45",status:"completed",pool:"Flexible",rewards:"0.8 USDX"}];return e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-6",children:"Staking History"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pool"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Rewards"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Time"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:a.map(t=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[t.type==="stake"?e.jsx(r,{className:"w-5 h-5 text-green-500 mr-2"}):e.jsx(i,{className:"w-5 h-5 text-red-500 mr-2"}),e.jsx("span",{className:"capitalize",children:t.type})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap font-medium",children:t.amount}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-gray-600",children:t.pool}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-[#066fd2] font-medium",children:t.rewards}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-gray-600",children:t.timestamp}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:t.status})})]},t.id))})]})})]})}export{d as StakingHistory};

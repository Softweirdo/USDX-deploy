import{c as s,j as e}from"./index-FZjAev1K.js";import{f as i}from"./Staking-BZSlLrMF.js";import"./allowance-D02z0OhG.js";import"./TypedData-BKSvvHeZ.js";import"./Address-BVqhsuI7.js";import"./arweave-CAGvOb64.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=s("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);function h({transactions:a}){return e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6",children:[e.jsx("h3",{className:"text-xl font-bold mb-6",children:"Staking History"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Time"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:a.map((t,r)=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[t.tp==="STK"?e.jsx(c,{className:"w-5 h-5 text-green-500 mr-2"}):e.jsx(n,{className:"w-5 h-5 text-red-500 mr-2"}),e.jsx("span",{className:"capitalize",children:t.tp})]})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap font-medium",children:[i(`${t==null?void 0:t.amt}`,18)," "]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-gray-600",children:new Date(Number(t.ts)*1e3).toDateString()})]},r))})]})})]})}export{h as StakingHistory};

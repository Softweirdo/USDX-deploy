import{c as t,j as e,I as c}from"./index-B-oaT4VU.js";import{T as l}from"./trending-up-C65FQ-YM.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=t("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function x(){const i=[{title:"Total Value Locked",value:"$12.5M",change:"+15.3%",icon:c,positive:!0},{title:"Total Stakers",value:"2,847",change:"+23.5%",icon:r,positive:!0},{title:"APY Range",value:"12-36%",change:"+2.1%",icon:l,positive:!0},{title:"Avg. Lock Time",value:"45 days",change:"+5.2%",icon:n,positive:!0}];return e.jsx("div",{className:"grid grid-cols-2 gap-4",children:i.map((s,a)=>e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600",children:s.title}),e.jsx("p",{className:"text-2xl font-bold text-[#066fd2] mt-1",children:s.value})]}),e.jsx("div",{className:`p-3 rounded-full ${s.positive?"bg-blue-50":"bg-red-50"}`,children:e.jsx(s.icon,{className:`w-6 h-6 ${s.positive?"text-[#066fd2]":"text-red-500"}`})})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("span",{className:`text-sm font-medium ${s.positive?"text-green-600":"text-red-600"}`,children:s.change}),e.jsx("span",{className:"text-sm text-gray-500 ml-2",children:"vs last month"})]})]},a))})}export{x as StakingStats};

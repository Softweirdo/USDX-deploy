import{t as e}from"./allowance-CkC3v96T.js";import{b9 as o}from"./Staking-Be_ibF3H.js";import{getCurrencyMetadata as i}from"./getCurrencyMetadata-Os3KcXE3.js";import"./index-Dhkg18n_.js";import"./TypedData-DSaBoitM.js";import"./Address-DNfsXJRa.js";import"./arweave-CAGvOb64.js";import"./decimals-Cpi5ukzg.js";async function d(a){const[t,r]=await Promise.all([o(a),i(a)]);return{...r,value:t,displayValue:e(t,r.decimals)}}export{d as getBalance};

import{t as e}from"./allowance-DrMl_tzM.js";import{b9 as o}from"./Staking-dHOZGlxL.js";import{getCurrencyMetadata as i}from"./getCurrencyMetadata-Du1Q2tEH.js";import"./index-BWQdot80.js";import"./TypedData-B6upPBaR.js";import"./Address-WdVq8DMS.js";import"./arweave-CAGvOb64.js";import"./decimals-DWQX6Jpo.js";async function d(a){const[t,r]=await Promise.all([o(a),i(a)]);return{...r,value:t,displayValue:e(t,r.decimals)}}export{d as getBalance};

import{ab as n,a7 as r}from"./index-DcR7dgUS.js";async function c(t,o){const e=await t({method:"eth_getTransactionCount",params:[o.address,o.blockNumber?n(o.blockNumber):o.blockTag||"pending"]});return r(e)}export{c as eth_getTransactionCount};

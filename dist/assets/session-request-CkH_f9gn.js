const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/switch-chain-Ct8pa4JC.js","assets/index-DcR7dgUS.js","assets/index-BlzjMJWX.css"])))=>i.map(i=>d[i]);
import{bK as l,aC as p,$ as T,a7 as y,Z as C}from"./index-DcR7dgUS.js";import{q as b}from"./Staking-BROqbwZu.js";import{q as v}from"./allowance-T3lDd9zi.js";import"./TypedData-CsuUkuQs.js";import"./Address-BWbYURjL.js";import"./arweave-CAGvOb64.js";async function E(i){const{account:t,chainId:e,params:[d]}=i;if(!t.sendRawTransaction)throw new Error("The current account does not support sending raw transactions");return(await t.sendRawTransaction({rawTransaction:d,chainId:e})).transactionHash}function u(i,t){if(l(i.address)!==l(t))throw new Error(`Failed to validate account address (${i.address}), differs from ${t}`)}function w(i){const t=i.split(":"),e=Number.parseInt(t[1]??"0");if(t.length!==2||t[0]!=="eip155"||e===0||!e)throw new Error(`Invalid chainId ${i}, should have the format 'eip155:1'`);return e}async function R(i){const{account:t,chainId:e,thirdwebClient:d,params:[c]}=i;c.from!==void 0&&u(t,c.from);const h=v({gas:c.gas?p(c.gas):void 0,gasPrice:c.gasPrice?p(c.gasPrice):void 0,value:c.value?p(c.value):void 0,to:c.to,data:c.data,chain:T(e),client:d});return(await b({transaction:h,account:t})).transactionHash}async function I(i){const{account:t,params:[e]}=i;if(!t.signTransaction)throw new Error("The current account does not support signing transactions");return e.from!==void 0&&u(t,e.from),t.signTransaction({gas:e.gas?p(e.gas):void 0,gasPrice:e.gasPrice?p(e.gasPrice):void 0,value:e.value?p(e.value):void 0,nonce:e.nonce?y(e.nonce):void 0,to:e.to,data:e.data})}async function f(i){const{account:t,params:e}=i;return u(t,e[0]),t.signTypedData(typeof e[1]=="string"?JSON.parse(e[1]):e[1])}async function g(i){const{account:t,params:e}=i;return u(t,e[1]),t.signMessage({message:{raw:e[0]}})}async function A(i){const{wallet:t,walletConnectClient:e,thirdwebClient:d,event:{topic:c,id:h,params:{chainId:m,request:n}},handlers:a}=i,o=t.getAccount();if(!o)throw new Error("No account connected to provided wallet");let s;try{switch(n.method){case"personal_sign":{a!=null&&a.personal_sign?s=await a.personal_sign({account:o,params:n.params}):s=await g({account:o,params:n.params});break}case"eth_sign":{a!=null&&a.eth_sign?s=await a.eth_sign({account:o,params:n.params}):s=await g({account:o,params:n.params});break}case"eth_signTypedData":{a!=null&&a.eth_signTypedData?s=await a.eth_signTypedData({account:o,params:n.params}):s=await f({account:o,params:n.params});break}case"eth_signTypedData_v4":{a!=null&&a.eth_signTypedData_v4?s=await a.eth_signTypedData_v4({account:o,params:n.params}):s=await f({account:o,params:n.params});break}case"eth_signTransaction":{a!=null&&a.eth_signTransaction?s=await a.eth_signTransaction({account:o,params:n.params}):s=await I({account:o,params:n.params});break}case"eth_sendTransaction":{const r=w(m);a!=null&&a.eth_sendTransaction?s=await a.eth_sendTransaction({account:o,chainId:r,params:n.params}):s=await R({account:o,chainId:r,thirdwebClient:d,params:n.params});break}case"eth_sendRawTransaction":{const r=w(m);a!=null&&a.eth_sendRawTransaction?s=await a.eth_sendRawTransaction({account:o,chainId:r,params:n.params}):s=await E({account:o,chainId:r,params:n.params});break}case"wallet_addEthereumChain":{if(a!=null&&a.wallet_addEthereumChain)s=await a.wallet_addEthereumChain({wallet:t,params:n.params});else throw new Error("Unsupported request method: wallet_addEthereumChain");break}case"wallet_switchEthereumChain":{if(a!=null&&a.wallet_switchEthereumChain)s=await a.wallet_switchEthereumChain({wallet:t,params:n.params});else{const{handleSwitchChain:r}=await C(async()=>{const{handleSwitchChain:_}=await import("./switch-chain-Ct8pa4JC.js");return{handleSwitchChain:_}},__vite__mapDeps([0,1,2]));s=await r({wallet:t,params:n.params})}break}default:{const r=a==null?void 0:a[n.method];if(r)s=await r({account:o,chainId:w(m),params:n.params});else throw new Error(`Unsupported request method: ${n.method}`)}}}catch(r){s={code:typeof r=="object"&&r!==null&&"code"in r?r.code:500,message:typeof r=="object"&&r!==null&&"message"in r?r.message:"Unknown error"}}e.respond({topic:c,response:{id:h,jsonrpc:"2.0",result:s}})}export{A as fulfillRequest};

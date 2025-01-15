const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/eth_getTransactionCount-E7qpwqUa.js","assets/index-CzTMIYai.js","assets/index-CHIcPt2L.css","assets/Staking-B7_TsThk.js","assets/allowance-CN36WWrq.js","assets/TypedData-s72ZuoBf.js","assets/Address-Cb4NlrhT.js","assets/arweave-CAGvOb64.js"])))=>i.map(i=>d[i]);
import{aj as w,az as d,ab as h,ac as I,aF as k,a1 as T,aD as m,a0 as j,bs as y,ao as A,bt as z,aJ as E}from"./index-CzTMIYai.js";import{g as v,C as L,r as R,b as P,t as D,I as Q,l as G,c as q}from"./Staking-B7_TsThk.js";import{signLoginPayload as V}from"./sign-login-payload-BS5pcbMU.js";import{e as _}from"./eth_sendRawTransaction-DPdnXbFR.js";import{b as H,p as $}from"./allowance-CN36WWrq.js";import"./TypedData-s72ZuoBf.js";import"./Address-Cb4NlrhT.js";import"./arweave-CAGvOb64.js";async function W({authToken:a,client:e,ecosystem:t}){const r=await d(e,t)(`${w("inAppWallet")}/api/2024-05-05/accounts`,{method:"GET",headers:{"Content-Type":"application/json","x-thirdweb-client-id":e.clientId,Authorization:`Bearer embedded-wallet-token:${a}`}});if(!r.ok){if(r.status===401)return;const o=await r.json();throw new Error(`Failed to get user status: ${o.message}`)}return await r.json()}const J=w("inAppWallet"),x=`${J}/`,F=`${x}api/2023-10-20`,Y=`${F}/embedded-wallet/validate-custom-jwt`,K=`${F}/embedded-wallet/validate-custom-auth-endpoint`,U=(a,e)=>e instanceof Error?`${a}: ${e.message}`:`${a}: ${h(e)}`;async function X(a){const t=await d(a.client,a.ecosystem)(K,{method:"POST",headers:{"Content-Type":"application/json"},body:h({payload:a.payload,developerClientId:a.client.clientId})});if(!t.ok){const n=await t.json();throw new Error(`Custom auth endpoint authentication error: ${n.message}`)}try{const{verifiedToken:n}=await t.json();return{storedToken:n}}catch(n){throw new Error(U("Malformed response from post auth_endpoint authentication",n))}}async function Z(a){const e=d(a.client,a.ecosystem),t=v({authOption:"backend",client:a.client,ecosystem:a.ecosystem}),n=await e(`${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:h({walletSecret:a.walletSecret})});if(!n.ok)throw new Error("Failed to generate backend account");return await n.json()}async function ee(a){const e=new L({storage:a.storage,clientId:a.client.clientId,ecosystem:a.ecosystem});let t=await e.getGuestSessionId();t||(t=R(32),e.saveGuestSessionId(t));const n=d(a.client,a.ecosystem),r=P({authOption:"guest",client:a.client,ecosystem:a.ecosystem}),o=await n(`${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:h({sessionId:t})});if(!o.ok)throw new Error("Failed to generate guest account");return await o.json()}async function te(a){const t=await d(a.client,a.ecosystem)(Y,{method:"POST",headers:{"Content-Type":"application/json"},body:h({jwt:a.jwt,developerClientId:a.client.clientId})});if(!t.ok){const n=await t.json();throw new Error(`JWT authentication error: ${n.message}`)}try{const{verifiedToken:n}=await t.json();return{storedToken:n}}catch(n){throw new Error(U("Malformed response from post jwt authentication",n))}}async function ne({client:a,ecosystem:e,tokenToLink:t,storage:n}){const r=d(a,e),o=w("inAppWallet"),i=await n.getAuthCookie();if(!i)throw new Error("Failed to link account, no user logged in");const s={Authorization:`Bearer iaw-auth-token:${i}`,"Content-Type":"application/json"},l=await r(`${o}/api/2024-05-05/account/connect`,{method:"POST",headers:s,body:h({accountAuthTokenToConnect:t})});if(!l.ok){const u=await l.json();throw new Error(u.message||"Failed to link account.")}const{linkedAccounts:c}=await l.json();return c??[]}async function ae({client:a,ecosystem:e,profileToUnlink:t,storage:n}){const r=d(a,e),o=w("inAppWallet"),i=await n.getAuthCookie();if(!i)throw new Error("Failed to unlink account, no user logged in");const s={Authorization:`Bearer iaw-auth-token:${i}`,"Content-Type":"application/json"},l=await r(`${o}/api/2024-05-05/account/disconnect`,{method:"POST",headers:s,body:h(t)});if(!l.ok){const u=await l.json();throw new Error(u.message||"Failed to unlink account.")}const{linkedAccounts:c}=await l.json();return c??[]}async function ie({client:a,ecosystem:e,storage:t}){const n=d(a,e),r=w("inAppWallet"),o=await t.getAuthCookie();if(!o)throw new Error("Failed to get linked accounts, no user logged in");const i={Authorization:`Bearer iaw-auth-token:${o}`,"Content-Type":"application/json"},s=await n(`${r}/api/2024-05-05/accounts`,{method:"GET",headers:i});if(!s.ok){const c=await s.json();throw new Error(c.message||"Failed to get linked accounts.")}const{linkedAccounts:l}=await s.json();return l??[]}function N(){return`${w("inAppWallet")}/api/2024-05-05/login/passkey/callback`}function B(a,e){return`${w("inAppWallet")}/api/2024-05-05/login/passkey?type=${a}${e?`&username=${e}`:""}`}async function re(a){var u,g,p;if(!a.passkeyClient.isAvailable())throw new Error("Passkeys are not available on this device");const e=d(a.client,a.ecosystem),t=a.username??oe(a.ecosystem),r=await(await e(B("sign-up",t))).json();if(!r.challenge)throw new Error("No challenge received");const o=r.challenge,i=await a.passkeyClient.register({name:t,challenge:o,rp:a.rp}),s={};(u=a.ecosystem)!=null&&u.partnerId&&(s["x-ecosystem-partner-id"]=a.ecosystem.partnerId),(g=a.ecosystem)!=null&&g.id&&(s["x-ecosystem-id"]=a.ecosystem.id);const c=await(await e(N(),{method:"POST",headers:{"Content-Type":"application/json",...s},body:h({type:"sign-up",authenticatorData:i.authenticatorData,credentialId:i.credentialId,serverVerificationId:r.serverVerificationId,clientData:i.clientData,username:t,credential:{publicKey:i.credential.publicKey,algorithm:i.credential.algorithm},origin:i.origin,rpId:a.rp.id})})).json();if(!c||!c.storedToken)throw new Error(`Error verifying passkey: ${c.message??"unknown error"}`);return await((p=a.storage)==null?void 0:p.savePasskeyCredentialId(i.credentialId)),c}async function se(a){var c,u,g,p;if(!a.passkeyClient.isAvailable())throw new Error("Passkeys are not available on this device");const e=d(a.client,a.ecosystem),[t,n]=await Promise.all([e(B("sign-in")).then(f=>f.json()),(c=a.storage)==null?void 0:c.getPasskeyCredentialId()]);if(!t.challenge)throw new Error("No challenge received");const r=t.challenge,o=await a.passkeyClient.authenticate({credentialId:n??void 0,challenge:r,rp:a.rp}),i={};(u=a.ecosystem)!=null&&u.partnerId&&(i["x-ecosystem-partner-id"]=a.ecosystem.partnerId),(g=a.ecosystem)!=null&&g.id&&(i["x-ecosystem-id"]=a.ecosystem.id);const l=await(await e(N(),{method:"POST",headers:{"Content-Type":"application/json",...i},body:h({type:"sign-in",authenticatorData:o.authenticatorData,credentialId:o.credentialId,serverVerificationId:t.serverVerificationId,clientData:o.clientData,signature:o.signature,origin:o.origin,rpId:a.rp.id})})).json();if(!l||!l.storedToken)throw new Error(`Error verifying passkey: ${l.message??"unknown error"}`);return await((p=a.storage)==null?void 0:p.savePasskeyCredentialId(o.credentialId)),l}function oe(a){return`${(a==null?void 0:a.id)??"wallet"}-${new Date().toISOString()}`}async function ce(a){const{wallet:e,chain:t}=a,n=e.getAccount()||await e.connect({client:a.client}),r=d(a.client,a.ecosystem),o=await(async()=>{const l=v({authOption:"wallet",client:a.client,ecosystem:a.ecosystem}),c=await r(`${l}&address=${n.address}&chainId=${t.id}`);if(!c.ok)throw new Error("Failed to generate SIWE login payload");return await c.json()})(),{signature:i}=await V({payload:o,account:n});return await(async()=>{const l=P({authOption:"wallet",client:a.client,ecosystem:a.ecosystem}),c=await r(`${l}&signature=${i}&payload=${encodeURIComponent(o)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:h({signature:i,payload:o})});if(!c.ok)throw new Error("Failed to verify SIWE signature");return await c.json()})()}async function le({client:a,payload:{message:e,isRaw:t},storage:n}){const r=await n.getAuthCookie(),o=n.ecosystem,i=d(a,o);if(!r)throw new Error("No auth token found when signing message");const s=await i(`${w("inAppWallet")}/api/v1/enclave-wallet/sign-message`,{method:"POST",headers:{"Content-Type":"application/json","x-thirdweb-client-id":a.clientId,Authorization:`Bearer embedded-wallet-token:${r}`},body:h({messagePayload:{message:e,isRaw:t}})});if(!s.ok)throw new Error(`Failed to sign message - ${s.status} ${s.statusText}`);return await s.json()}async function ue({client:a,payload:e,storage:t}){const n=await t.getAuthCookie(),r=t.ecosystem,o=d(a,r);if(!n)throw new Error("No auth token found when signing transaction");const i=await o(`${w("inAppWallet")}/api/v1/enclave-wallet/sign-transaction`,{method:"POST",headers:{"Content-Type":"application/json","x-thirdweb-client-id":a.clientId,Authorization:`Bearer embedded-wallet-token:${n}`},body:h({transactionPayload:e})});if(!i.ok)throw new Error(`Failed to sign transaction - ${i.status} ${i.statusText}`);return(await i.json()).signature}async function de({client:a,payload:e,storage:t}){const n=await t.getAuthCookie(),r=t.ecosystem,o=d(a,r);if(!n)throw new Error("No auth token found when signing typed data");const i=await o(`${w("inAppWallet")}/api/v1/enclave-wallet/sign-typed-data`,{method:"POST",headers:{"Content-Type":"application/json","x-thirdweb-client-id":a.clientId,Authorization:`Bearer embedded-wallet-token:${n}`},body:h({...e})});if(!i.ok)throw new Error(`Failed to sign typed data - ${i.status} ${i.statusText}`);return await i.json()}class he{constructor({client:e,ecosystem:t,address:n,storage:r}){Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"address",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"localStorage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.client=e,this.ecosystem=t,this.address=n,this.localStorage=r}async postWalletSetUp(e){await this.localStorage.saveAuthCookie(e.storedToken.cookieString)}async getUserWalletStatus(){var o,i;const e=await this.localStorage.getAuthCookie();if(!e)return{status:"Logged Out"};const t=await W({authToken:e,client:this.client,ecosystem:this.ecosystem});if(!t)return{status:"Logged Out"};const n=t.wallets[0],r={email:(o=t.linkedAccounts.find(s=>s.details.email!==void 0))==null?void 0:o.details.email,phoneNumber:(i=t.linkedAccounts.find(s=>s.details.phone!==void 0))==null?void 0:i.details.phone,userWalletId:t.id||"",recoveryShareManagement:"ENCLAVE"};return n?{status:"Logged In, Wallet Initialized",walletAddress:n.address,authDetails:r,account:await this.getAccount()}:{status:"Logged In, Wallet Uninitialized",authDetails:r}}async getAccount(){const e=this.client,t=this.localStorage,n=this.address,r=this.ecosystem,o=async i=>{const s=k({client:e,chain:T(i.chainId)}),l={to:i.to?I(i.to):void 0,data:i.data,value:typeof i.value=="bigint"?m(i.value):void 0,gas:typeof i.gas=="bigint"?m(i.gas+i.gas/BigInt(10)):void 0,nonce:typeof i.nonce=="number"?m(i.nonce):m(await j(async()=>{const{eth_getTransactionCount:c}=await import("./eth_getTransactionCount-E7qpwqUa.js");return{eth_getTransactionCount:c}},__vite__mapDeps([0,1,2])).then(({eth_getTransactionCount:c})=>c(s,{address:this.address,blockTag:"pending"}))),chainId:m(i.chainId)};return typeof i.maxFeePerGas=="bigint"?(l.maxFeePerGas=m(i.maxFeePerGas),l.maxPriorityFeePerGas=typeof i.maxPriorityFeePerGas=="bigint"?m(i.maxPriorityFeePerGas):void 0,l.type=2):(l.gasPrice=typeof i.gasPrice=="bigint"?m(i.gasPrice):void 0,l.type=0),ue({client:e,storage:t,payload:l})};return{address:I(n),async signTransaction(i){if(!i.chainId)throw new Error("chainId required in tx to sign");return o({chainId:i.chainId,...i})},async sendTransaction(i){const s=k({client:e,chain:T(i.chainId)}),l=await o(i),c=await _(s,l);return D({client:e,ecosystem:r,chainId:i.chainId,walletAddress:n,walletType:"inApp",transactionHash:c,contractAddress:i.to??void 0,gasPrice:i.gasPrice}),{transactionHash:c}},async signMessage({message:i}){const s=typeof i=="string"?{message:i,isRaw:!1}:{message:typeof i.raw=="string"?i.raw:H(i.raw),isRaw:!0},{signature:l}=await le({client:e,payload:s,storage:t});return l},async signTypedData(i){const s=$(i),{signature:l}=await de({client:e,payload:s,storage:t});return l}}}}const we={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none",pointerEvents:"all"},b=new Map;class pe{constructor({link:e,baseUrl:t,iframeId:n,container:r=document.body,onIframeInitialize:o,localStorage:i,clientId:s,ecosystem:l}){Object.defineProperty(this,"iframe",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"POLLING_INTERVAL_SECONDS",{enumerable:!0,configurable:!0,writable:!0,value:1.4}),Object.defineProperty(this,"iframeBaseUrl",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"localStorage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clientId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.localStorage=i,this.clientId=s,this.ecosystem=l,this.iframeBaseUrl=t;let c=document.getElementById(n);const u=new URL(e);if(!c||c.src!==u.href){c=document.createElement("iframe");const g={...we};Object.assign(c.style,g),c.setAttribute("id",n),c.setAttribute("fetchpriority","high"),r.appendChild(c),c.src=u.href;const p=f=>{if(f.data.eventType==="ewsIframeLoaded"){if(window.removeEventListener("message",p),!c){console.warn("thirdweb iFrame not found");return}this.onIframeLoadHandler(c,o)()}};window.addEventListener("message",p)}this.iframe=c}async onIframeLoadedInitVariables(){var e,t;return{authCookie:await this.localStorage.getAuthCookie(),deviceShareStored:await this.localStorage.getDeviceShare(),walletUserId:await this.localStorage.getWalletUserId(),clientId:this.clientId,partnerId:(e=this.ecosystem)==null?void 0:e.partnerId,ecosystemId:(t=this.ecosystem)==null?void 0:t.id}}onIframeLoadHandler(e,t){return async()=>{var o;const n=new MessageChannel,r=new Promise((i,s)=>{n.port1.onmessage=l=>{const{data:c}=l;n.port1.close(),c.success||s(new Error(c.error)),b.set(e.src,!0),t&&t(),i(!0)}});(o=e==null?void 0:e.contentWindow)==null||o.postMessage({eventType:"initIframe",data:await this.onIframeLoadedInitVariables()},this.iframeBaseUrl,[n.port2]),await r}}async call({procedureName:e,params:t,showIframe:n=!1}){var i;for(;!b.get(this.iframe.src);)await y(this.POLLING_INTERVAL_SECONDS*1e3);n&&(this.iframe.style.display="block",await y(.005*1e3));const r=new MessageChannel,o=new Promise((s,l)=>{r.port1.onmessage=async c=>{const{data:u}=c;r.port1.close(),n&&(await y(.1*1e3),this.iframe.style.display="none"),u.success?s(u.data):l(new Error(u.error))}});return(i=this.iframe.contentWindow)==null||i.postMessage({eventType:e,data:{...t,...await this.onIframeLoadedInitVariables()}},this.iframeBaseUrl,[r.port2]),o}destroy(){b.delete(this.iframe.src)}}class ge extends pe{constructor({clientId:e,baseUrl:t,ecosystem:n}){super({iframeId:fe+((n==null?void 0:n.id)||""),link:me({clientId:e,path:Q,ecosystem:n,baseUrl:t}).href,baseUrl:t,container:document.body,localStorage:new L({storage:A,clientId:e,ecosystem:n}),clientId:e,ecosystem:n}),this.clientId=e,this.ecosystem=n}}function me({clientId:a,baseUrl:e,path:t,ecosystem:n,queryParams:r}){var i;const o=new URL(`${t}`,e);if(r)for(const s of Object.keys(r))o.searchParams.set(s,((i=r[s])==null?void 0:i.toString())||"");return o.searchParams.set("clientId",a),(n==null?void 0:n.partnerId)!==void 0&&o.searchParams.set("partnerId",n.partnerId),(n==null?void 0:n.id)!==void 0&&o.searchParams.set("ecosystemId",n.id),o}const fe="thirdweb-in-app-wallet-iframe";async function ye({client:a,ecosystem:e,authToken:t}){const r=await d(a,e)(`${w("inAppWallet")}/api/v1/enclave-wallet/generate`,{method:"POST",headers:{"Content-Type":"application/json","x-thirdweb-client-id":a.clientId,Authorization:`Bearer embedded-wallet-token:${t}`}});if(!r.ok)throw new Error(`Failed to generate wallet - ${r.status} ${r.statusText}`);const{wallet:o}=await r.json();return o}class be{constructor({baseUrl:e,querier:t,preLogin:n,postLogin:r,client:o,ecosystem:i}){Object.defineProperty(this,"LoginQuerier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"preLogin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"postLogin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"baseUrl",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.baseUrl=e,this.LoginQuerier=t,this.preLogin=n,this.postLogin=r,this.client=o,this.ecosystem=i}async sendEmailLoginOtp({email:e}){return await this.LoginQuerier.call({procedureName:"sendThirdwebEmailLoginOtp",params:{email:e}})}async sendSmsLoginOtp({phoneNumber:e}){return await this.LoginQuerier.call({procedureName:"sendThirdwebSmsLoginOtp",params:{phoneNumber:e}})}}class Ie extends be{async authenticateWithModal(){return this.LoginQuerier.call({procedureName:"loginWithThirdwebModal",params:void 0,showIframe:!0})}async loginWithModal(){await this.preLogin();const e=await this.authenticateWithModal();return this.postLogin(e)}async authenticateWithIframe({email:e}){return this.LoginQuerier.call({procedureName:"loginWithThirdwebModal",params:{email:e},showIframe:!0})}async loginWithIframe({email:e}){await this.preLogin();const t=await this.authenticateWithIframe({email:e});return this.postLogin(t)}async authenticateWithCustomJwt({encryptionKey:e,jwt:t}){if(!e||e.length===0)throw new Error("Encryption key is required for custom jwt auth");return this.LoginQuerier.call({procedureName:"loginWithCustomJwt",params:{encryptionKey:e,jwt:t}})}async loginWithCustomJwt({encryptionKey:e,jwt:t}){if(!e||e.length===0)throw new Error("Encryption key is required for custom jwt auth");await this.preLogin();const n=await this.authenticateWithCustomJwt({encryptionKey:e,jwt:t});return this.postLogin(n)}async authenticateWithCustomAuthEndpoint({encryptionKey:e,payload:t}){return this.LoginQuerier.call({procedureName:"loginWithCustomAuthEndpoint",params:{encryptionKey:e,payload:t}})}async loginWithCustomAuthEndpoint({encryptionKey:e,payload:t}){if(!e||e.length===0)throw new Error("Encryption key is required for custom auth");await this.preLogin();const n=await this.authenticateWithCustomAuthEndpoint({encryptionKey:e,payload:t});return this.postLogin(n)}async authenticateWithEmailOtp({email:e,otp:t,recoveryCode:n}){return this.LoginQuerier.call({procedureName:"verifyThirdwebEmailLoginOtp",params:{email:e,otp:t,recoveryCode:n}})}async loginWithEmailOtp({email:e,otp:t,recoveryCode:n}){const r=await this.authenticateWithEmailOtp({email:e,otp:t,recoveryCode:n});return this.postLogin(r)}async authenticateWithSmsOtp({phoneNumber:e,otp:t,recoveryCode:n}){return this.LoginQuerier.call({procedureName:"verifyThirdwebSmsLoginOtp",params:{phoneNumber:e,otp:t,recoveryCode:n}})}async loginWithSmsOtp({phoneNumber:e,otp:t,recoveryCode:n}){const r=await this.authenticateWithSmsOtp({phoneNumber:e,otp:t,recoveryCode:n});return this.postLogin(r)}}class ke{constructor({client:e,querier:t,onAuthSuccess:n,ecosystem:r,baseUrl:o,localStorage:i}){Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"AuthQuerier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"localStorage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onAuthSuccess",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"BaseLogin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.client=e,this.ecosystem=r,this.AuthQuerier=t,this.localStorage=i,this.onAuthSuccess=n,this.BaseLogin=new Ie({postLogin:async s=>this.postLogin(s),preLogin:async()=>{await this.preLogin()},ecosystem:r,querier:t,client:e,baseUrl:o})}async preLogin(){await this.logout()}async postLogin({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&await this.localStorage.saveAuthCookie(e.cookieString),await this.onAuthSuccess({storedToken:e,walletDetails:t})}async loginWithAuthToken(e,t){var o;await this.preLogin();const n=await W({authToken:e.storedToken.cookieString,client:this.client,ecosystem:this.ecosystem});if(!n)throw new Error("Cannot login, no user found for auth token");if(n.wallets.length>0&&((o=n.wallets[0])==null?void 0:o.type)==="enclave")return this.postLogin({storedToken:e.storedToken,walletDetails:{walletAddress:n.wallets[0].address}});if(n.wallets.length===0){const i=await ye({authToken:e.storedToken.cookieString,client:this.client,ecosystem:this.ecosystem});return this.postLogin({storedToken:e.storedToken,walletDetails:{walletAddress:i.address}})}const r=await this.AuthQuerier.call({procedureName:"loginWithStoredTokenDetails",params:{storedToken:e.storedToken,recoveryCode:t}});return this.postLogin(r)}async loginWithModal(){return this.BaseLogin.loginWithModal()}async authenticateWithModal(){return this.BaseLogin.authenticateWithModal()}async loginWithIframe(e){return this.BaseLogin.loginWithIframe(e)}async authenticateWithIframe(e){return this.BaseLogin.authenticateWithIframe(e)}async loginWithCustomJwt(e){return this.BaseLogin.loginWithCustomJwt(e)}async authenticateWithCustomJwt(e){return this.BaseLogin.authenticateWithCustomJwt(e)}async loginWithCustomAuthEndpoint(e){return this.BaseLogin.loginWithCustomAuthEndpoint(e)}async authenticateWithCustomAuthEndpoint(e){return this.BaseLogin.authenticateWithCustomAuthEndpoint(e)}async sendEmailLoginOtp({email:e}){return this.BaseLogin.sendEmailLoginOtp({email:e})}async sendSmsLoginOtp({phoneNumber:e}){return this.BaseLogin.sendSmsLoginOtp({phoneNumber:e})}async loginWithEmailOtp(e){return await this.preLogin(),this.BaseLogin.loginWithEmailOtp(e)}async authenticateWithEmailOtp(e){return this.BaseLogin.authenticateWithEmailOtp(e)}async loginWithSmsOtp(e){return await this.preLogin(),this.BaseLogin.loginWithSmsOtp(e)}async authenticateWithSmsOtp(e){return this.BaseLogin.authenticateWithSmsOtp(e)}async logout(){this.AuthQuerier&&await this.AuthQuerier.call({procedureName:"logout",params:void 0});const e=await this.localStorage.removeAuthCookie(),t=await this.localStorage.removeWalletUserId();return{success:e||t}}}const Te=async a=>{const{client:e,ecosystem:t}=a,n=v({client:e,ecosystem:t,authOption:a.strategy}),r={"Content-Type":"application/json","x-client-id":e.clientId};t!=null&&t.id&&(r["x-ecosystem-id"]=t.id),t!=null&&t.partnerId&&(r["x-ecosystem-partner-id"]=t.partnerId);const o=(()=>{switch(a.strategy){case"email":return{email:a.email};case"phone":return{phone:a.phoneNumber}}})(),i=await fetch(n,{method:"POST",headers:r,body:h(o)});if(!i.ok)throw new Error("Failed to send verification code");return await i.json()},O=async a=>{const{client:e,ecosystem:t}=a,n=P({authOption:a.strategy,client:a.client,ecosystem:a.ecosystem}),r={"Content-Type":"application/json","x-client-id":e.clientId};t!=null&&t.id&&(r["x-ecosystem-id"]=t.id),t!=null&&t.partnerId&&(r["x-ecosystem-partner-id"]=t.partnerId);const o=(()=>{switch(a.strategy){case"email":return{email:a.email,code:a.verificationCode};case"phone":return{phone:a.phoneNumber,code:a.verificationCode}}})(),i=await fetch(n,{method:"POST",headers:r,body:h(o)});if(!i.ok)throw new Error("Failed to verify verification code");return await i.json()};class C{constructor({client:e,ecosystem:t,querier:n,localStorage:r}){Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"walletManagerQuerier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"localStorage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.client=e,this.ecosystem=t,this.walletManagerQuerier=n,this.localStorage=r}async postWalletSetUp(e){e.deviceShareStored&&await this.localStorage.saveDeviceShare(e.deviceShareStored,e.storedToken.authDetails.userWalletId)}async getUserWalletStatus(){const e=await this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return e.status==="Logged In, Wallet Initialized"?{status:"Logged In, Wallet Initialized",...e.user,account:await this.getAccount()}:e.status==="Logged In, New Device"?{status:"Logged In, New Device",...e.user}:e.status==="Logged In, Wallet Uninitialized"?{status:"Logged In, Wallet Uninitialized",...e.user}:{status:e.status}}async getAccount(){var i;const e=this.walletManagerQuerier,t=this.client,n=(i=this.ecosystem)==null?void 0:i.partnerId,{address:r}=await e.call({procedureName:"getAddress",params:void 0}),o=async s=>{const l={to:s.to??void 0,data:s.data,value:s.value,gasLimit:s.gas,nonce:s.nonce,chainId:s.chainId};s.maxFeePerGas?(l.accessList=s.accessList,l.maxFeePerGas=s.maxFeePerGas,l.maxPriorityFeePerGas=s.maxPriorityFeePerGas,l.type=2):(l.gasPrice=s.gasPrice,l.type=0);const c=E().rpc,{signedTransaction:u}=await e.call({procedureName:"signTransaction",params:{transaction:l,chainId:s.chainId,partnerId:n,rpcEndpoint:`https://${s.chainId}.${c}`}});return u};return{address:I(r),async signTransaction(s){if(!s.chainId)throw new Error("chainId required in tx to sign");return o({...s,chainId:s.chainId})},async sendTransaction(s){const l=k({client:t,chain:T(s.chainId)}),c=await o(s),u=await _(l,c);return D({client:t,chainId:s.chainId,walletAddress:r,walletType:"inApp",transactionHash:u,contractAddress:s.to??void 0,gasPrice:s.gasPrice}),{transactionHash:u}},async signMessage({message:s}){const l=typeof s=="string"?s:s.raw instanceof Uint8Array?s.raw:z(s.raw),{signedMessage:c}=await e.call({procedureName:"signMessage",params:{message:l,partnerId:n,chainId:1}});return c},async signTypedData(s){var S;const l=$(s);(S=l.types)!=null&&S.EIP712Domain&&(l.types.EIP712Domain=void 0);const c=l.domain,u=c==null?void 0:c.chainId,p={...c!=null&&c.verifyingContract?{verifyingContract:c==null?void 0:c.verifyingContract}:{},name:c==null?void 0:c.name,version:c==null?void 0:c.version};u&&(p.chainId=u);const f=E().rpc,{signedTypedData:M}=await e.call({procedureName:"signTypedDataV4",params:{domain:p,types:l.types,message:l.message,chainId:Number.parseInt(BigInt(u||1).toString()),partnerId:n,rpcEndpoint:`https://${u}.${f}`}});return M}}}}class je{isClientIdLegacyPaper(e){return e.indexOf("-")>0&&e.length===36}constructor({client:e,onAuthSuccess:t,ecosystem:n,passkeyDomain:r}){if(Object.defineProperty(this,"client",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ecosystem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"querier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"storage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"wallet",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"auth",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"passkeyDomain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.isClientIdLegacyPaper(e.clientId))throw new Error("You are using a legacy clientId. Please use the clientId found on the thirdweb dashboard settings page");const o=w("inAppWallet");this.client=e,this.ecosystem=n,this.passkeyDomain=r,this.storage=new L({storage:A,clientId:e.clientId,ecosystem:n}),this.querier=new ge({clientId:e.clientId,ecosystem:n,baseUrl:o}),this.auth=new ke({client:e,querier:this.querier,baseUrl:o,localStorage:this.storage,ecosystem:n,onAuthSuccess:async i=>{if(t==null||t(i),i.storedToken.authDetails.walletType==="sharded"&&(await this.querier.call({procedureName:"migrateFromShardToEnclave",params:{storedToken:i.storedToken}})||console.warn("Failed to migrate from sharded to enclave wallet, continuing with sharded wallet")),this.wallet=await this.initializeWallet(i.storedToken.cookieString),!this.wallet)throw new Error("Failed to initialize wallet");const s="deviceShareStored"in i.walletDetails?i.walletDetails.deviceShareStored:void 0;return await this.wallet.postWalletSetUp({storedToken:i.storedToken,deviceShareStored:s}),this.wallet instanceof C&&await this.querier.call({procedureName:"initIframe",params:{partnerId:n==null?void 0:n.partnerId,ecosystemId:n==null?void 0:n.id,clientId:this.client.clientId,deviceShareStored:"deviceShareStored"in i.walletDetails?i.walletDetails.deviceShareStored:null,walletUserId:i.storedToken.authDetails.userWalletId,authCookie:i.storedToken.cookieString}}),{user:{status:"Logged In, Wallet Initialized",authDetails:i.storedToken.authDetails,account:await this.wallet.getAccount(),walletAddress:i.walletDetails.walletAddress}}}})}async initializeWallet(e){var r;const t=await this.storage.getAuthCookie();if(!e&&t===null)throw new Error("No auth token provided and no stored auth token found to initialize the wallet");const n=await W({authToken:e||t,client:this.client,ecosystem:this.ecosystem});if(!n)throw new Error("Cannot initialize wallet, no user logged in");if(n.wallets.length===0)throw new Error("Cannot initialize wallet, this user does not have a wallet generated yet");return((r=n.wallets[0])==null?void 0:r.type)==="enclave"?new he({client:this.client,ecosystem:this.ecosystem,address:n.wallets[0].address,storage:this.storage}):new C({client:this.client,ecosystem:this.ecosystem,querier:this.querier,localStorage:this.storage})}async getUser(){if(!this.wallet){const e=await this.storage.getAuthCookie();if(!e)return{status:"Logged Out"};this.wallet=await this.initializeWallet(e)}if(!this.wallet)throw new Error("Wallet not initialized");return await this.wallet.getUserWalletStatus()}getAccount(){if(!this.wallet)throw new Error("Wallet not initialized");return this.wallet.getAccount()}async preAuthenticate(e){return Te({...e,client:this.client,ecosystem:this.ecosystem})}authenticateWithRedirect(e,t,n){G({authOption:e,client:this.client,ecosystem:this.ecosystem,redirectUrl:n,mode:t})}async loginWithAuthToken(e,t){return this.auth.loginWithAuthToken(e,t)}async authenticate(e){const t=e.strategy;switch(t){case"email":return O({...e,client:this.client,ecosystem:this.ecosystem});case"phone":return O({...e,client:this.client,ecosystem:this.ecosystem});case"auth_endpoint":return X({payload:e.payload,client:this.client,ecosystem:this.ecosystem});case"jwt":return te({jwt:e.jwt,client:this.client,ecosystem:this.ecosystem});case"passkey":return this.passkeyAuth(e);case"iframe_email_verification":return this.auth.authenticateWithIframe({email:e.email});case"iframe":return this.auth.authenticateWithModal();case"apple":case"facebook":case"google":case"telegram":case"github":case"twitch":case"farcaster":case"line":case"x":case"steam":case"coinbase":case"discord":return q({authOption:t,client:this.client,ecosystem:this.ecosystem,closeOpenedWindow:e.closeOpenedWindow,openedWindow:e.openedWindow});case"guest":return ee({client:this.client,ecosystem:this.ecosystem,storage:A});case"backend":return Z({client:this.client,walletSecret:e.walletSecret,ecosystem:this.ecosystem});case"wallet":return ce({ecosystem:this.ecosystem,client:this.client,wallet:e.wallet,chain:e.chain})}}async connect(e){const t=e.strategy;switch(t){case"auth_endpoint":case"jwt":{const n=await this.authenticate(e);return await this.loginWithAuthToken(n,e.encryptionKey)}case"iframe_email_verification":return this.auth.loginWithIframe({email:e.email});case"iframe":return this.auth.loginWithModal();case"passkey":{const n=await this.passkeyAuth(e);return this.loginWithAuthToken(n)}case"backend":case"phone":case"email":case"wallet":case"apple":case"facebook":case"google":case"farcaster":case"telegram":case"github":case"line":case"x":case"guest":case"coinbase":case"twitch":case"steam":case"discord":{const n=await this.authenticate(e);return await this.auth.loginWithAuthToken(n)}default:Ae(t)}}async logout(){return await this.auth.logout()}async passkeyAuth(e){const{PasskeyWebClient:t}=await j(async()=>{const{PasskeyWebClient:s}=await import("./Staking-B7_TsThk.js").then(l=>l.bC);return{PasskeyWebClient:s}},__vite__mapDeps([3,1,2,4,5,6,7])),{passkeyName:n,storeLastUsedPasskey:r=!0}=e,o=new t,i=this.storage;return e.type==="sign-up"?re({client:this.client,ecosystem:this.ecosystem,username:n,passkeyClient:o,storage:r?i:void 0,rp:{id:this.passkeyDomain??window.location.hostname,name:this.passkeyDomain??window.document.title}}):se({client:this.client,ecosystem:this.ecosystem,passkeyClient:o,storage:r?i:void 0,rp:{id:this.passkeyDomain??window.location.hostname,name:this.passkeyDomain??window.document.title}})}async linkProfile(e){const{storedToken:t}=await this.authenticate(e);return await ne({client:e.client,tokenToLink:t.cookieString,storage:this.storage,ecosystem:e.ecosystem||this.ecosystem})}async unlinkProfile(e){return await ae({client:this.client,storage:this.storage,ecosystem:this.ecosystem,profileToUnlink:e})}async getProfiles(){return ie({client:this.client,ecosystem:this.ecosystem,storage:this.storage})}}function Ae(a,e){throw new Error(`Invalid param: ${a}`)}export{je as InAppWebConnector};

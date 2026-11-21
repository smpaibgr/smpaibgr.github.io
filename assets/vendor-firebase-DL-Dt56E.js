const Hs=()=>{};var lr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qs=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,a=i+2<n.length,f=a?n[i+2]:0,_=s>>2,v=(s&3)<<4|c>>4;let y=(c&15)<<2|f>>6,b=f&63;a||(b=64,o||(y=64)),r.push(t[_],t[v],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qs(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||f==null||v==null)throw new zs;const y=s<<2|c>>4;if(r.push(y),f!==64){const b=c<<4&240|f>>2;if(r.push(b),v!==64){const T=f<<6&192|v;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ws=function(n){const e=hi(n);return di.encodeByteArray(e,!0)},Ft=function(n){return Ws(n).replace(/\./g,"")},fi=function(n){try{return di.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=()=>Gs().__FIREBASE_DEFAULTS__,Js=()=>{if(typeof process>"u"||typeof lr>"u")return;const n=lr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fi(n[1]);return e&&JSON.parse(e)},Mn=()=>{try{return Hs()||Ks()||Js()||Qs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pi=n=>{var e,t;return(t=(e=Mn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ys=n=>{const e=pi(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mi=()=>{var n;return(n=Mn())===null||n===void 0?void 0:n.config},gi=n=>{var e;return(e=Mn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _i(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ft(JSON.stringify(t)),Ft(JSON.stringify(o)),""].join(".")}const rt={};function eo(){const n={prod:[],emulator:[]};for(const e of Object.keys(rt))rt[e]?n.emulator.push(e):n.prod.push(e);return n}function to(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ur=!1;function yi(n,e){if(typeof window>"u"||typeof document>"u"||!Je(window.location.host)||rt[n]===e||rt[n]||ur)return;rt[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=eo().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function a(y,b){y.setAttribute("width","24"),y.setAttribute("id",b),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function f(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{ur=!0,o()},y}function _(y,b){y.setAttribute("id",b),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function v(){const y=to(r),b=t("text"),T=document.getElementById(b)||document.createElement("span"),R=t("learnmore"),P=document.getElementById(R)||document.createElement("a"),W=t("preprendIcon"),F=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const j=y.element;c(j),_(P,R);const $=f();a(F,W),j.append(F,T,P,$),document.body.appendChild(j)}s?(T.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function no(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function ro(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function io(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function so(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oo(){const n=B();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ao(){try{return typeof indexedDB=="object"}catch{return!1}}function co(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="FirebaseError";class me extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lo,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_t.prototype.create)}}class _t{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uo(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new me(i,c,r)}}function uo(n,e){return n.replace(ho,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ho=/\{\$([^}]+)}/g;function fo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oe(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(hr(s)&&hr(o)){if(!Oe(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function hr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function nt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function po(n,e){const t=new mo(n,e);return t.subscribe.bind(t)}class mo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");go(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=cn),i.error===void 0&&(i.error=cn),i.complete===void 0&&(i.complete=cn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function go(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(n){return n&&n._delegate?n._delegate:n}class Ne{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vo(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yo(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yo(n){return n===Ce?void 0:n}function vo(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const wo={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Eo=S.INFO,To={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},bo=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=To[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fn{constructor(e){this.name=e,this._logLevel=Eo,this._logHandler=bo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Ao=(n,e)=>e.some(t=>n instanceof t);let dr,fr;function So(){return dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Po(){return fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vi=new WeakMap,yn=new WeakMap,Ii=new WeakMap,ln=new WeakMap,Un=new WeakMap;function Ro(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Te(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&vi.set(t,n)}).catch(()=>{}),Un.set(e,n),e}function ko(n){if(yn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});yn.set(n,e)}let vn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ii.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Co(n){vn=n(vn)}function Oo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(un(this),e,...t);return Ii.set(r,e.sort?e.sort():[e]),Te(r)}:Po().includes(n)?function(...e){return n.apply(un(this),e),Te(vi.get(this))}:function(...e){return Te(n.apply(un(this),e))}}function No(n){return typeof n=="function"?Oo(n):(n instanceof IDBTransaction&&ko(n),Ao(n,So())?new Proxy(n,vn):n)}function Te(n){if(n instanceof IDBRequest)return Ro(n);if(ln.has(n))return ln.get(n);const e=No(n);return e!==n&&(ln.set(n,e),Un.set(e,n)),e}const un=n=>Un.get(n);function Vo(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Te(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Te(o.result),a.oldVersion,a.newVersion,Te(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Do=["get","getKey","getAll","getAllKeys","count"],Lo=["put","add","delete","clear"],hn=new Map;function pr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hn.get(e))return hn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Lo.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Do.includes(t)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let f=a.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),i&&a.done]))[0]};return hn.set(e,s),s}Co(n=>({...n,get:(e,t,r)=>pr(e,t)||n.get(e,t,r),has:(e,t)=>!!pr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fo(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Fo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const In="@firebase/app",mr="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Fn("@firebase/app"),Uo="@firebase/app-compat",xo="@firebase/analytics-compat",$o="@firebase/analytics",jo="@firebase/app-check-compat",Bo="@firebase/app-check",Ho="@firebase/auth",qo="@firebase/auth-compat",zo="@firebase/database",Wo="@firebase/data-connect",Go="@firebase/database-compat",Ko="@firebase/functions",Jo="@firebase/functions-compat",Qo="@firebase/installations",Yo="@firebase/installations-compat",Xo="@firebase/messaging",Zo="@firebase/messaging-compat",ea="@firebase/performance",ta="@firebase/performance-compat",na="@firebase/remote-config",ra="@firebase/remote-config-compat",ia="@firebase/storage",sa="@firebase/storage-compat",oa="@firebase/firestore",aa="@firebase/ai",ca="@firebase/firestore-compat",la="firebase",ua="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]",ha={[In]:"fire-core",[Uo]:"fire-core-compat",[$o]:"fire-analytics",[xo]:"fire-analytics-compat",[Bo]:"fire-app-check",[jo]:"fire-app-check-compat",[Ho]:"fire-auth",[qo]:"fire-auth-compat",[zo]:"fire-rtdb",[Wo]:"fire-data-connect",[Go]:"fire-rtdb-compat",[Ko]:"fire-fn",[Jo]:"fire-fn-compat",[Qo]:"fire-iid",[Yo]:"fire-iid-compat",[Xo]:"fire-fcm",[Zo]:"fire-fcm-compat",[ea]:"fire-perf",[ta]:"fire-perf-compat",[na]:"fire-rc",[ra]:"fire-rc-compat",[ia]:"fire-gcs",[sa]:"fire-gcs-compat",[oa]:"fire-fst",[ca]:"fire-fst-compat",[aa]:"fire-vertex","fire-js":"fire-js",[la]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map,da=new Map,En=new Map;function gr(n,e){try{n.container.addComponent(e)}catch(t){de.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function We(n){const e=n.name;if(En.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;En.set(e,n);for(const t of lt.values())gr(t,n);for(const t of da.values())gr(t,n);return!0}function xn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function K(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new _t("app","Firebase",fa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=ua;function ma(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wn,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw be.create("bad-app-name",{appName:String(i)});if(t||(t=mi()),!t)throw be.create("no-options");const s=lt.get(i);if(s){if(Oe(t,s.options)&&Oe(r,s.config))return s;throw be.create("duplicate-app",{appName:i})}const o=new Io(i);for(const a of En.values())o.addComponent(a);const c=new pa(t,r,o);return lt.set(i,c),c}function wi(n=wn){const e=lt.get(n);if(!e&&n===wn&&mi())return ma();if(!e)throw be.create("no-app",{appName:n});return e}function lh(){return Array.from(lt.values())}function Ae(n,e,t){var r;let i=(r=ha[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(c.join(" "));return}We(new Ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="firebase-heartbeat-database",_a=1,ut="firebase-heartbeat-store";let dn=null;function Ei(){return dn||(dn=Vo(ga,_a,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ut)}catch(t){console.warn(t)}}}}).catch(n=>{throw be.create("idb-open",{originalErrorMessage:n.message})})),dn}async function ya(n){try{const t=(await Ei()).transaction(ut),r=await t.objectStore(ut).get(Ti(n));return await t.done,r}catch(e){if(e instanceof me)de.warn(e.message);else{const t=be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(t.message)}}}async function _r(n,e){try{const r=(await Ei()).transaction(ut,"readwrite");await r.objectStore(ut).put(e,Ti(n)),await r.done}catch(t){if(t instanceof me)de.warn(t.message);else{const r=be.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});de.warn(r.message)}}}function Ti(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=1024,Ia=30;class wa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ta(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ia){const o=ba(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){de.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yr(),{heartbeatsToSend:r,unsentEntries:i}=Ea(this._heartbeatsCache.heartbeats),s=Ft(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return de.warn(t),""}}}function yr(){return new Date().toISOString().substring(0,10)}function Ea(n,e=va){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ta{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ao()?co().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ya(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vr(n){return Ft(JSON.stringify({version:2,heartbeats:n})).length}function ba(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){We(new Ne("platform-logger",e=>new Mo(e),"PRIVATE")),We(new Ne("heartbeat",e=>new wa(e),"PRIVATE")),Ae(In,mr,n),Ae(In,mr,"esm2017"),Ae("fire-js","")}Aa("");function $n(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function bi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sa=bi,Ai=new _t("auth","Firebase",bi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Fn("@firebase/auth");function Pa(n,...e){Ut.logLevel<=S.WARN&&Ut.warn(`Auth (${Qe}): ${n}`,...e)}function Vt(n,...e){Ut.logLevel<=S.ERROR&&Ut.error(`Auth (${Qe}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,...e){throw jn(n,...e)}function ie(n,...e){return jn(n,...e)}function Si(n,e,t){const r=Object.assign(Object.assign({},Sa()),{[e]:t});return new _t("auth","Firebase",r).create(e,{appName:n.name})}function he(n){return Si(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ai.create(n,...e)}function w(n,e,...t){if(!n)throw jn(e,...t)}function le(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vt(e),new Error(e)}function fe(n,e){n||le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ra(){return Ir()==="http:"||Ir()==="https:"}function Ir(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ra()||io()||"connection"in navigator)?navigator.onLine:!0}function Ca(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.shortDelay=e,this.longDelay=t,fe(t>e,"Short delay should be less than long delay!"),this.isMobile=no()||so()}get(){return ka()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,e){fe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Va=new vt(3e4,6e4);function Pe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ge(n,e,t,r,i={}){return Ri(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=yt(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:a},s);return ro()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Je(n.emulatorConfig.host)&&(f.credentials="include"),Pi.fetch()(await ki(n,n.config.apiHost,t,c),f)})}async function Ri(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Oa),e);try{const i=new La(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,f]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw kt(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw kt(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw kt(n,"user-disabled",o);const _=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Si(n,_,f);X(n,_)}}catch(i){if(i instanceof me)throw i;X(n,"network-request-failed",{message:String(i)})}}async function It(n,e,t,r,i={}){const s=await ge(n,e,t,r,i);return"mfaPendingCredential"in s&&X(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function ki(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Bn(n.config,i):`${n.config.apiScheme}://${i}`;return Na.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Da(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class La{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ie(this.auth,"network-request-failed")),Va.get())})}}function kt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ie(n,e,r);return i.customData._tokenResponse=t,i}function wr(n){return n!==void 0&&n.enterprise!==void 0}class Ma{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Da(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fa(n,e){return ge(n,"GET","/v2/recaptchaConfig",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(n,e){return ge(n,"POST","/v1/accounts:delete",e)}async function xt(n,e){return ge(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xa(n,e=!1){const t=N(n),r=await t.getIdToken(e),i=Hn(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:it(fn(i.auth_time)),issuedAtTime:it(fn(i.iat)),expirationTime:it(fn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fn(n){return Number(n)*1e3}function Hn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vt("JWT malformed, contained fewer than 3 sections"),null;try{const i=fi(t);return i?JSON.parse(i):(Vt("Failed to decode base64 JWT payload"),null)}catch(i){return Vt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Er(n){const e=Hn(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof me&&$a(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $a({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=it(this.lastLoginAt),this.creationTime=it(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ge(n,xt(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ci(s.providerUserInfo):[],c=Ha(n.providerData,o),a=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),_=a?f:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new bn(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function Ba(n){const e=N(n);await $t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ha(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ci(n){return n.map(e=>{var{providerId:t}=e,r=$n(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(n,e){const t=await Ri(n,{},async()=>{const r=yt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await ki(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:c,body:r};return n.emulatorConfig&&Je(n.emulatorConfig.host)&&(a.credentials="include"),Pi.fetch()(o,a)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function za(n,e){return ge(n,"POST","/v2/accounts:revokeToken",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Er(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(e.length!==0,"internal-error");const t=Er(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await qa(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new He;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new He,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Y{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=$n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ja(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ge(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xa(this,e)}reload(){return Ba(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $t(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await Ge(this,Ua(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,a,f,_;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,W=(f=t.createdAt)!==null&&f!==void 0?f:void 0,F=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:j,emailVerified:$,isAnonymous:ee,providerData:te,stsTokenManager:m}=t;w(j&&m,e,"internal-error");const l=He.fromJSON(this.name,m);w(typeof j=="string",e,"internal-error"),_e(v,e.name),_e(y,e.name),w(typeof $=="boolean",e,"internal-error"),w(typeof ee=="boolean",e,"internal-error"),_e(b,e.name),_e(T,e.name),_e(R,e.name),_e(P,e.name),_e(W,e.name),_e(F,e.name);const h=new Y({uid:j,auth:e,email:y,emailVerified:$,displayName:v,isAnonymous:ee,photoURL:T,phoneNumber:b,tenantId:R,stsTokenManager:l,createdAt:W,lastLoginAt:F});return te&&Array.isArray(te)&&(h.providerData=te.map(d=>Object.assign({},d))),P&&(h._redirectEventId=P),h}static async _fromIdTokenResponse(e,t,r=!1){const i=new He;i.updateFromServerResponse(t);const s=new Y({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $t(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];w(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ci(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new He;c.updateFromIdToken(r);const a=new Y({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,f),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function ue(n){fe(n instanceof Function,"Expected a class definition");let e=Tr.get(n);return e?(fe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Tr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Oi.type="NONE";const br=Oi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,e,t){return`firebase:${n}:${e}:${t}`}class qe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xt(this.auth,{idToken:e}).catch(()=>{});return t?Y._fromGetAccountInfoResponse(this.auth,t,e):null}return Y._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qe(ue(br),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||ue(br);const o=Dt(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const _=await f._get(o);if(_){let v;if(typeof _=="string"){const y=await xt(e,{idToken:_}).catch(()=>{});if(!y)break;v=await Y._fromGetAccountInfoResponse(e,y,_)}else v=Y._fromJSON(e,_);f!==s&&(c=v),s=f;break}}catch{}const a=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new qe(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(o)}catch{}})),new qe(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Li(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ni(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fi(e))return"Blackberry";if(Ui(e))return"Webos";if(Vi(e))return"Safari";if((e.includes("chrome/")||Di(e))&&!e.includes("edge/"))return"Chrome";if(Mi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ni(n=B()){return/firefox\//i.test(n)}function Vi(n=B()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Di(n=B()){return/crios\//i.test(n)}function Li(n=B()){return/iemobile/i.test(n)}function Mi(n=B()){return/android/i.test(n)}function Fi(n=B()){return/blackberry/i.test(n)}function Ui(n=B()){return/webos/i.test(n)}function qn(n=B()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wa(n=B()){var e;return qn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ga(){return oo()&&document.documentMode===10}function xi(n=B()){return qn(n)||Mi(n)||Ui(n)||Fi(n)||/windows phone/i.test(n)||Li(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e=[]){let t;switch(n){case"Browser":t=Ar(B());break;case"Worker":t=`${Ar(B())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qe}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(n,e={}){return ge(n,"GET","/v2/passwordPolicy",Pe(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=6;class Ya{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Qa,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(t=a.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sr(this),this.idTokenSubscription=new Sr(this),this.beforeStateQueue=new Ka(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ai,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await qe.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xt(this,{idToken:e}),r=await Y._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(K(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $t(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ca()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(he(this));const t=e?N(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ja(this),t=new Ya(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _t("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await za(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await qe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const a=e.addObserver(t,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(t);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$i(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(K(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Pa(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $e(n){return N(n)}class Sr{constructor(e){this.auth=e,this.observer=null,this.addObserver=po(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Za(n){Xt=n}function ji(n){return Xt.loadJS(n)}function ec(){return Xt.recaptchaEnterpriseScript}function tc(){return Xt.gapiScript}function nc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class rc{constructor(){this.enterprise=new ic}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ic{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const sc="recaptcha-enterprise",Bi="NO_RECAPTCHA";class oc{constructor(e){this.type=sc,this.auth=$e(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Fa(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Ma(a);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,o(f.siteKey)}}).catch(a=>{c(a)})})}function i(s,o,c){const a=window.grecaptcha;wr(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(f=>{o(f)}).catch(()=>{o(Bi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rc().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&wr(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=ec();a.length!==0&&(a+=c),ji(a).then(()=>{i(c,s,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function Pr(n,e,t,r=!1,i=!1){const s=new oc(n);let o;if(i)o=Bi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function An(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pr(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Pr(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e){const t=xn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Oe(s,e??{}))return i;X(i,"already-initialized")}return t.initialize({options:e})}function cc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ue);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lc(n,e,t){const r=$e(n);w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Hi(e),{host:o,port:c}=uc(e),a=c===null?"":`:${c}`,f={url:`${s}//${o}${a}/`},_=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){w(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),w(Oe(f,r.config.emulator)&&Oe(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Je(o)?(_i(`${s}//${o}${a}`),yi("Auth",!0)):hc()}function Hi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uc(n){const e=Hi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rr(o)}}}function Rr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function hc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,t){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}}async function dc(n,e){return ge(n,"POST","/v1/accounts:update",e)}async function fc(n,e){return ge(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n,e){return It(n,"POST","/v1/accounts:signInWithPassword",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(n,e){return It(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))}async function gc(n,e){return It(n,"POST","/v1/accounts:signInWithEmailLink",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends zn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ht(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ht(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return An(e,t,"signInWithPassword",pc);case"emailLink":return mc(e,{email:this._email,oobCode:this._password});default:X(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return An(e,r,"signUpPassword",fc);case"emailLink":return gc(e,{idToken:t,email:this._email,oobCode:this._password});default:X(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(n,e){return It(n,"POST","/v1/accounts:signInWithIdp",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="http://localhost";class Ve extends zn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):X("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=$n(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ve(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ze(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ze(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ze(e,t)}buildRequest(){const e={requestUri:_c,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vc(n){const e=tt(nt(n)).link,t=e?tt(nt(e)).deep_link_id:null,r=tt(nt(n)).deep_link_id;return(r?tt(nt(r)).link:null)||r||t||e||n}class Wn{constructor(e){var t,r,i,s,o,c;const a=tt(nt(e)),f=(t=a.apiKey)!==null&&t!==void 0?t:null,_=(r=a.oobCode)!==null&&r!==void 0?r:null,v=yc((i=a.mode)!==null&&i!==void 0?i:null);w(f&&_&&v,"argument-error"),this.apiKey=f,this.operation=v,this.code=_,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=vc(e);try{return new Wn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wn.parseLink(t);return w(r,"argument-error"),ht._fromEmailAndCode(e,r.code,r.tenantId)}}Ye.PROVIDER_ID="password";Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends qi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends wt{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";ye.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ve.credential(t,r)}catch{return null}}}ve.GOOGLE_SIGN_IN_METHOD="google.com";ve.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends wt{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends wt{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return we.credential(t,r)}catch{return null}}}we.TWITTER_SIGN_IN_METHOD="twitter.com";we.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(n,e){return It(n,"POST","/v1/accounts:signUp",Pe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Y._fromIdTokenResponse(e,r,i),o=kr(r);return new De({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=kr(r);return new De({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function kr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends me{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new jt(e,t,r,i)}}function zi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jt._fromErrorAndOperation(n,s,e,r):s})}async function wc(n,e,t=!1){const r=await Ge(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return De._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n,e,t=!1){const{auth:r}=n;if(K(r.app))return Promise.reject(he(r));const i="reauthenticate";try{const s=await Ge(n,zi(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=Hn(s.idToken);w(o,r,"internal-error");const{sub:c}=o;return w(n.uid===c,r,"user-mismatch"),De._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&X(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n,e,t=!1){if(K(n.app))return Promise.reject(he(n));const r="signIn",i=await zi(n,r,e),s=await De._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ec(n,e){return Gi($e(n),e)}async function uh(n,e){return Wi(N(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n){const e=$e(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hh(n,e,t){if(K(n.app))return Promise.reject(he(n));const r=$e(n),o=await An(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ic).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Ki(n),a}),c=await De._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function dh(n,e,t){return K(n.app)?Promise.reject(he(n)):Ec(N(n),Ye.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ki(n),r})}function fh(n,e){return Tc(N(n),null,e)}async function Tc(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await Ge(n,dc(r,s));await n._updateTokensIfNecessary(o,!0)}function bc(n,e,t,r){return N(n).onIdTokenChanged(e,t,r)}function Ac(n,e,t){return N(n).beforeAuthStateChanged(e,t)}function ph(n,e,t,r){return N(n).onAuthStateChanged(e,t,r)}function mh(n){return N(n).signOut()}const Bt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1e3,Pc=10;class Qi extends Ji{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ga()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pc):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Sc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qi.type="LOCAL";const Rc=Qi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Ji{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yi.type="SESSION";const Xi=Yi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async f=>f(t.origin,s)),a=await kc(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,a)=>{const f=Gn("",20);i.port1.start();const _=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(v){const y=v;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(_),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(y.data.response);break;default:clearTimeout(_),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Oc(n){se().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Nc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dc(){return Zi()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="firebaseLocalStorageDb",Lc=1,Ht="firebaseLocalStorage",ts="fbase_key";class Et{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function en(n,e){return n.transaction([Ht],e?"readwrite":"readonly").objectStore(Ht)}function Mc(){const n=indexedDB.deleteDatabase(es);return new Et(n).toPromise()}function Sn(){const n=indexedDB.open(es,Lc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ht,{keyPath:ts})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ht)?e(r):(r.close(),await Mc(),e(await Sn()))})})}async function Cr(n,e,t){const r=en(n,!0).put({[ts]:e,value:t});return new Et(r).toPromise()}async function Fc(n,e){const t=en(n,!1).get(e),r=await new Et(t).toPromise();return r===void 0?null:r.value}function Or(n,e){const t=en(n,!0).delete(e);return new Et(t).toPromise()}const Uc=800,xc=3;class ns{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(Dc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nc(),!this.activeServiceWorker)return;this.sender=new Cc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sn();return await Cr(e,Bt,"1"),await Or(e,Bt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Or(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=en(i,!1).getAll();return new Et(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ns.type="LOCAL";const $c=ns;new vt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){return e?ue(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends zn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Bc(n){return Gi(n.auth,new Kn(n),n.bypassAuthState)}function Hc(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Wi(t,new Kn(n),n.bypassAuthState)}async function qc(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),wc(t,new Kn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bc;case"linkViaPopup":case"linkViaRedirect":return qc;case"reauthViaPopup":case"reauthViaRedirect":return Hc;default:X(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new vt(2e3,1e4);class Be extends rs{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Be.currentPopupAction&&Be.currentPopupAction.cancel(),Be.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=Gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Be.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zc.get())};e()}}Be.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="pendingRedirect",Lt=new Map;class Gc extends rs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Lt.get(this.auth._key());if(!e){try{const r=await Kc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Lt.set(this.auth._key(),e)}return this.bypassAuthState||Lt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kc(n,e){const t=Yc(e),r=Qc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jc(n,e){Lt.set(n._key(),e)}function Qc(n){return ue(n._redirectPersistence)}function Yc(n){return Dt(Wc,n.config.apiKey,n.name)}async function Xc(n,e,t=!1){if(K(n.app))return Promise.reject(he(n));const r=$e(n),i=jc(r,e),o=await new Gc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=600*1e3;class el{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!is(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nr(e))}saveEventToCache(e){this.cachedEventUids.add(Nr(e)),this.lastProcessedEventTime=Date.now()}}function Nr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function is({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return is(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e={}){return ge(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,il=/^https?/;async function sl(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nl(n);for(const t of e)try{if(ol(t))return}catch{}X(n,"unauthorized-domain")}function ol(n){const e=Tn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!il.test(t))return!1;if(rl.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new vt(3e4,6e4);function Vr(){const n=se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cl(n){return new Promise((e,t)=>{var r,i,s;function o(){Vr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vr(),t(ie(n,"network-request-failed"))},timeout:al.get()})}if(!((i=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=se().gapi)===null||s===void 0)&&s.load)o();else{const c=nc("iframefcb");return se()[c]=()=>{gapi.load?o():t(ie(n,"network-request-failed"))},ji(`${tc()}?onload=${c}`).catch(a=>t(a))}}).catch(e=>{throw Mt=null,e})}let Mt=null;function ll(n){return Mt=Mt||cl(n),Mt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new vt(5e3,15e3),hl="__/auth/iframe",dl="emulator/auth/iframe",fl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ml(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bn(e,dl):`https://${n.config.authDomain}/${hl}`,r={apiKey:e.apiKey,appName:n.name,v:Qe},i=pl.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${yt(r).slice(1)}`}async function gl(n){const e=await ll(n),t=se().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:ml(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ie(n,"network-request-failed"),c=se().setTimeout(()=>{s(o)},ul.get());function a(){se().clearTimeout(c),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yl=500,vl=600,Il="_blank",wl="http://localhost";class Dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function El(n,e,t,r=yl,i=vl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},_l),{width:r.toString(),height:i.toString(),top:s,left:o}),f=B().toLowerCase();t&&(c=Di(f)?Il:t),Ni(f)&&(e=e||wl,a.scrollbars="yes");const _=Object.entries(a).reduce((y,[b,T])=>`${y}${b}=${T},`,"");if(Wa(f)&&c!=="_self")return Tl(e||"",c),new Dr(null);const v=window.open(e||"",c,_);w(v,n,"popup-blocked");try{v.focus()}catch{}return new Dr(v)}function Tl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="__/auth/handler",Al="emulator/auth/handler",Sl=encodeURIComponent("fac");async function Lr(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qe,eventId:i};if(e instanceof qi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",fo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))o[_]=v}if(e instanceof wt){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(o.scopes=_.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const _ of Object.keys(c))c[_]===void 0&&delete c[_];const a=await n._getAppCheckToken(),f=a?`#${Sl}=${encodeURIComponent(a)}`:"";return`${Pl(n)}?${yt(c).slice(1)}${f}`}function Pl({config:n}){return n.emulator?Bn(n,Al):`https://${n.authDomain}/${bl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="webStorageSupport";class Rl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xi,this._completeRedirectFn=Xc,this._overrideRedirectResult=Jc}async _openPopup(e,t,r,i){var s;fe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lr(e,t,r,Tn(),i);return El(e,o,Gn())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Lr(e,t,r,Tn(),i);return Oc(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(fe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await gl(e),r=new el(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pn,{type:pn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[pn];o!==void 0&&t(!!o),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xi()||Vi()||qn()}}const kl=Rl;var Mr="@firebase/auth",Fr="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nl(n){We(new Ne("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$i(n)},f=new Xa(r,i,s,a);return cc(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),We(new Ne("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(r=>new Cl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Mr,Fr,Ol(n)),Ae(Mr,Fr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=300,Dl=gi("authIdTokenMaxAge")||Vl;let Ur=null;const Ll=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dl)return;const i=t==null?void 0:t.token;Ur!==i&&(Ur=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gh(n=wi()){const e=xn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ac(n,{popupRedirectResolver:kl,persistence:[$c,Rc,Xi]}),r=gi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ll(s.toString());Ac(t,o,()=>o(t.currentUser)),bc(t,c=>o(c))}}const i=pi("auth");return i&&lc(t,`http://${i}`),t}function Ml(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Za({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ie("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Ml().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nl("Browser");var Fl="firebase",Ul="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae(Fl,Ul,"app");var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,l){function h(){}h.prototype=l.prototype,m.D=l.prototype,m.prototype=new h,m.prototype.constructor=m,m.C=function(d,p,g){for(var u=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)u[ke-2]=arguments[ke];return l.prototype[p].apply(d,u)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,l,h){h||(h=0);var d=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)d[p]=l.charCodeAt(h++)|l.charCodeAt(h++)<<8|l.charCodeAt(h++)<<16|l.charCodeAt(h++)<<24;else for(p=0;16>p;++p)d[p]=l[h++]|l[h++]<<8|l[h++]<<16|l[h++]<<24;l=m.g[0],h=m.g[1],p=m.g[2];var g=m.g[3],u=l+(g^h&(p^g))+d[0]+3614090360&4294967295;l=h+(u<<7&4294967295|u>>>25),u=g+(p^l&(h^p))+d[1]+3905402710&4294967295,g=l+(u<<12&4294967295|u>>>20),u=p+(h^g&(l^h))+d[2]+606105819&4294967295,p=g+(u<<17&4294967295|u>>>15),u=h+(l^p&(g^l))+d[3]+3250441966&4294967295,h=p+(u<<22&4294967295|u>>>10),u=l+(g^h&(p^g))+d[4]+4118548399&4294967295,l=h+(u<<7&4294967295|u>>>25),u=g+(p^l&(h^p))+d[5]+1200080426&4294967295,g=l+(u<<12&4294967295|u>>>20),u=p+(h^g&(l^h))+d[6]+2821735955&4294967295,p=g+(u<<17&4294967295|u>>>15),u=h+(l^p&(g^l))+d[7]+4249261313&4294967295,h=p+(u<<22&4294967295|u>>>10),u=l+(g^h&(p^g))+d[8]+1770035416&4294967295,l=h+(u<<7&4294967295|u>>>25),u=g+(p^l&(h^p))+d[9]+2336552879&4294967295,g=l+(u<<12&4294967295|u>>>20),u=p+(h^g&(l^h))+d[10]+4294925233&4294967295,p=g+(u<<17&4294967295|u>>>15),u=h+(l^p&(g^l))+d[11]+2304563134&4294967295,h=p+(u<<22&4294967295|u>>>10),u=l+(g^h&(p^g))+d[12]+1804603682&4294967295,l=h+(u<<7&4294967295|u>>>25),u=g+(p^l&(h^p))+d[13]+4254626195&4294967295,g=l+(u<<12&4294967295|u>>>20),u=p+(h^g&(l^h))+d[14]+2792965006&4294967295,p=g+(u<<17&4294967295|u>>>15),u=h+(l^p&(g^l))+d[15]+1236535329&4294967295,h=p+(u<<22&4294967295|u>>>10),u=l+(p^g&(h^p))+d[1]+4129170786&4294967295,l=h+(u<<5&4294967295|u>>>27),u=g+(h^p&(l^h))+d[6]+3225465664&4294967295,g=l+(u<<9&4294967295|u>>>23),u=p+(l^h&(g^l))+d[11]+643717713&4294967295,p=g+(u<<14&4294967295|u>>>18),u=h+(g^l&(p^g))+d[0]+3921069994&4294967295,h=p+(u<<20&4294967295|u>>>12),u=l+(p^g&(h^p))+d[5]+3593408605&4294967295,l=h+(u<<5&4294967295|u>>>27),u=g+(h^p&(l^h))+d[10]+38016083&4294967295,g=l+(u<<9&4294967295|u>>>23),u=p+(l^h&(g^l))+d[15]+3634488961&4294967295,p=g+(u<<14&4294967295|u>>>18),u=h+(g^l&(p^g))+d[4]+3889429448&4294967295,h=p+(u<<20&4294967295|u>>>12),u=l+(p^g&(h^p))+d[9]+568446438&4294967295,l=h+(u<<5&4294967295|u>>>27),u=g+(h^p&(l^h))+d[14]+3275163606&4294967295,g=l+(u<<9&4294967295|u>>>23),u=p+(l^h&(g^l))+d[3]+4107603335&4294967295,p=g+(u<<14&4294967295|u>>>18),u=h+(g^l&(p^g))+d[8]+1163531501&4294967295,h=p+(u<<20&4294967295|u>>>12),u=l+(p^g&(h^p))+d[13]+2850285829&4294967295,l=h+(u<<5&4294967295|u>>>27),u=g+(h^p&(l^h))+d[2]+4243563512&4294967295,g=l+(u<<9&4294967295|u>>>23),u=p+(l^h&(g^l))+d[7]+1735328473&4294967295,p=g+(u<<14&4294967295|u>>>18),u=h+(g^l&(p^g))+d[12]+2368359562&4294967295,h=p+(u<<20&4294967295|u>>>12),u=l+(h^p^g)+d[5]+4294588738&4294967295,l=h+(u<<4&4294967295|u>>>28),u=g+(l^h^p)+d[8]+2272392833&4294967295,g=l+(u<<11&4294967295|u>>>21),u=p+(g^l^h)+d[11]+1839030562&4294967295,p=g+(u<<16&4294967295|u>>>16),u=h+(p^g^l)+d[14]+4259657740&4294967295,h=p+(u<<23&4294967295|u>>>9),u=l+(h^p^g)+d[1]+2763975236&4294967295,l=h+(u<<4&4294967295|u>>>28),u=g+(l^h^p)+d[4]+1272893353&4294967295,g=l+(u<<11&4294967295|u>>>21),u=p+(g^l^h)+d[7]+4139469664&4294967295,p=g+(u<<16&4294967295|u>>>16),u=h+(p^g^l)+d[10]+3200236656&4294967295,h=p+(u<<23&4294967295|u>>>9),u=l+(h^p^g)+d[13]+681279174&4294967295,l=h+(u<<4&4294967295|u>>>28),u=g+(l^h^p)+d[0]+3936430074&4294967295,g=l+(u<<11&4294967295|u>>>21),u=p+(g^l^h)+d[3]+3572445317&4294967295,p=g+(u<<16&4294967295|u>>>16),u=h+(p^g^l)+d[6]+76029189&4294967295,h=p+(u<<23&4294967295|u>>>9),u=l+(h^p^g)+d[9]+3654602809&4294967295,l=h+(u<<4&4294967295|u>>>28),u=g+(l^h^p)+d[12]+3873151461&4294967295,g=l+(u<<11&4294967295|u>>>21),u=p+(g^l^h)+d[15]+530742520&4294967295,p=g+(u<<16&4294967295|u>>>16),u=h+(p^g^l)+d[2]+3299628645&4294967295,h=p+(u<<23&4294967295|u>>>9),u=l+(p^(h|~g))+d[0]+4096336452&4294967295,l=h+(u<<6&4294967295|u>>>26),u=g+(h^(l|~p))+d[7]+1126891415&4294967295,g=l+(u<<10&4294967295|u>>>22),u=p+(l^(g|~h))+d[14]+2878612391&4294967295,p=g+(u<<15&4294967295|u>>>17),u=h+(g^(p|~l))+d[5]+4237533241&4294967295,h=p+(u<<21&4294967295|u>>>11),u=l+(p^(h|~g))+d[12]+1700485571&4294967295,l=h+(u<<6&4294967295|u>>>26),u=g+(h^(l|~p))+d[3]+2399980690&4294967295,g=l+(u<<10&4294967295|u>>>22),u=p+(l^(g|~h))+d[10]+4293915773&4294967295,p=g+(u<<15&4294967295|u>>>17),u=h+(g^(p|~l))+d[1]+2240044497&4294967295,h=p+(u<<21&4294967295|u>>>11),u=l+(p^(h|~g))+d[8]+1873313359&4294967295,l=h+(u<<6&4294967295|u>>>26),u=g+(h^(l|~p))+d[15]+4264355552&4294967295,g=l+(u<<10&4294967295|u>>>22),u=p+(l^(g|~h))+d[6]+2734768916&4294967295,p=g+(u<<15&4294967295|u>>>17),u=h+(g^(p|~l))+d[13]+1309151649&4294967295,h=p+(u<<21&4294967295|u>>>11),u=l+(p^(h|~g))+d[4]+4149444226&4294967295,l=h+(u<<6&4294967295|u>>>26),u=g+(h^(l|~p))+d[11]+3174756917&4294967295,g=l+(u<<10&4294967295|u>>>22),u=p+(l^(g|~h))+d[2]+718787259&4294967295,p=g+(u<<15&4294967295|u>>>17),u=h+(g^(p|~l))+d[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(p+(u<<21&4294967295|u>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+g&4294967295}r.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var h=l-this.blockSize,d=this.B,p=this.h,g=0;g<l;){if(p==0)for(;g<=h;)i(this,m,g),g+=this.blockSize;if(typeof m=="string"){for(;g<l;)if(d[p++]=m.charCodeAt(g++),p==this.blockSize){i(this,d),p=0;break}}else for(;g<l;)if(d[p++]=m[g++],p==this.blockSize){i(this,d),p=0;break}}this.h=p,this.o+=l},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var h=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=h&255,h/=256;for(this.u(m),m=Array(16),l=h=0;4>l;++l)for(var d=0;32>d;d+=8)m[h++]=this.g[l]>>>d&255;return m};function s(m,l){var h=c;return Object.prototype.hasOwnProperty.call(h,m)?h[m]:h[m]=l(m)}function o(m,l){this.h=l;for(var h=[],d=!0,p=m.length-1;0<=p;p--){var g=m[p]|0;d&&g==l||(h[p]=g,d=!1)}this.g=h}var c={};function a(m){return-128<=m&&128>m?s(m,function(l){return new o([l|0],0>l?-1:0)}):new o([m|0],0>m?-1:0)}function f(m){if(isNaN(m)||!isFinite(m))return v;if(0>m)return P(f(-m));for(var l=[],h=1,d=0;m>=h;d++)l[d]=m/h|0,h*=4294967296;return new o(l,0)}function _(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return P(_(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var h=f(Math.pow(l,8)),d=v,p=0;p<m.length;p+=8){var g=Math.min(8,m.length-p),u=parseInt(m.substring(p,p+g),l);8>g?(g=f(Math.pow(l,g)),d=d.j(g).add(f(u))):(d=d.j(h),d=d.add(f(u)))}return d}var v=a(0),y=a(1),b=a(16777216);n=o.prototype,n.m=function(){if(R(this))return-P(this).m();for(var m=0,l=1,h=0;h<this.g.length;h++){var d=this.i(h);m+=(0<=d?d:4294967296+d)*l,l*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T(this))return"0";if(R(this))return"-"+P(this).toString(m);for(var l=f(Math.pow(m,6)),h=this,d="";;){var p=$(h,l).g;h=W(h,p.j(l));var g=((0<h.g.length?h.g[0]:h.h)>>>0).toString(m);if(h=p,T(h))return g+d;for(;6>g.length;)g="0"+g;d=g+d}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function T(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function R(m){return m.h==-1}n.l=function(m){return m=W(this,m),R(m)?-1:T(m)?0:1};function P(m){for(var l=m.g.length,h=[],d=0;d<l;d++)h[d]=~m.g[d];return new o(h,~m.h).add(y)}n.abs=function(){return R(this)?P(this):this},n.add=function(m){for(var l=Math.max(this.g.length,m.g.length),h=[],d=0,p=0;p<=l;p++){var g=d+(this.i(p)&65535)+(m.i(p)&65535),u=(g>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);d=u>>>16,g&=65535,u&=65535,h[p]=u<<16|g}return new o(h,h[h.length-1]&-2147483648?-1:0)};function W(m,l){return m.add(P(l))}n.j=function(m){if(T(this)||T(m))return v;if(R(this))return R(m)?P(this).j(P(m)):P(P(this).j(m));if(R(m))return P(this.j(P(m)));if(0>this.l(b)&&0>m.l(b))return f(this.m()*m.m());for(var l=this.g.length+m.g.length,h=[],d=0;d<2*l;d++)h[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<m.g.length;p++){var g=this.i(d)>>>16,u=this.i(d)&65535,ke=m.i(p)>>>16,cr=m.i(p)&65535;h[2*d+2*p]+=u*cr,F(h,2*d+2*p),h[2*d+2*p+1]+=g*cr,F(h,2*d+2*p+1),h[2*d+2*p+1]+=u*ke,F(h,2*d+2*p+1),h[2*d+2*p+2]+=g*ke,F(h,2*d+2*p+2)}for(d=0;d<l;d++)h[d]=h[2*d+1]<<16|h[2*d];for(d=l;d<2*l;d++)h[d]=0;return new o(h,0)};function F(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function j(m,l){this.g=m,this.h=l}function $(m,l){if(T(l))throw Error("division by zero");if(T(m))return new j(v,v);if(R(m))return l=$(P(m),l),new j(P(l.g),P(l.h));if(R(l))return l=$(m,P(l)),new j(P(l.g),l.h);if(30<m.g.length){if(R(m)||R(l))throw Error("slowDivide_ only works with positive integers.");for(var h=y,d=l;0>=d.l(m);)h=ee(h),d=ee(d);var p=te(h,1),g=te(d,1);for(d=te(d,2),h=te(h,2);!T(d);){var u=g.add(d);0>=u.l(m)&&(p=p.add(h),g=u),d=te(d,1),h=te(h,1)}return l=W(m,p.j(l)),new j(p,l)}for(p=v;0<=m.l(l);){for(h=Math.max(1,Math.floor(m.m()/l.m())),d=Math.ceil(Math.log(h)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),g=f(h),u=g.j(l);R(u)||0<u.l(m);)h-=d,g=f(h),u=g.j(l);T(g)&&(g=y),p=p.add(g),m=W(m,u)}return new j(p,m)}n.A=function(m){return $(this,m).h},n.and=function(m){for(var l=Math.max(this.g.length,m.g.length),h=[],d=0;d<l;d++)h[d]=this.i(d)&m.i(d);return new o(h,this.h&m.h)},n.or=function(m){for(var l=Math.max(this.g.length,m.g.length),h=[],d=0;d<l;d++)h[d]=this.i(d)|m.i(d);return new o(h,this.h|m.h)},n.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),h=[],d=0;d<l;d++)h[d]=this.i(d)^m.i(d);return new o(h,this.h^m.h)};function ee(m){for(var l=m.g.length+1,h=[],d=0;d<l;d++)h[d]=m.i(d)<<1|m.i(d-1)>>>31;return new o(h,m.h)}function te(m,l){var h=l>>5;l%=32;for(var d=m.g.length-h,p=[],g=0;g<d;g++)p[g]=0<l?m.i(g+h)>>>l|m.i(g+h+1)<<32-l:m.i(g+h);return new o(p,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=_,ss=o}).apply(typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{});const $r="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new Fn("@firebase/firestore");function qt(n,...e){if(Ke.logLevel<=S.DEBUG){const t=e.map(Qn);Ke.debug(`Firestore (${Xe}): ${n}`,...t)}}function Jn(n,...e){if(Ke.logLevel<=S.ERROR){const t=e.map(Qn);Ke.error(`Firestore (${Xe}): ${n}`,...t)}}function os(n,...e){if(Ke.logLevel<=S.WARN){const t=e.map(Qn);Ke.warn(`Firestore (${Xe}): ${n}`,...t)}}function Qn(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,as(n,r,t)}function as(n,e,t){let r=`FIRESTORE (${Xe}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Jn(r),new Error(r)}function z(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||as(e,i,r)}function Le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="ok",xl="cancelled",st="unknown",E="invalid-argument",$l="deadline-exceeded",jl="not-found",Bl="permission-denied",Pn="unauthenticated",Hl="resource-exhausted",Me="failed-precondition",ql="aborted",zl="out-of-range",cs="unimplemented",Wl="internal",Gl="unavailable";class I extends me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(H.UNAUTHENTICATED)))}shutdown(){}}class Jl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ql{constructor(e){this.auth=null,e.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(z(typeof e.accessToken=="string",42297,{t:e}),new ls(e.accessToken,new H(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Yl{constructor(e,t,r){this.i=e,this.o=t,this.u=r,this.type="FirstParty",this.user=H.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const e=this.h();return e&&this.l.set("Authorization",e),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class Xl{constructor(e,t,r){this.i=e,this.o=t,this.u=r}getToken(){return Promise.resolve(new Yl(this.i,this.o,this.u))}start(e,t){e.enqueueRetryable((()=>t(H.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Br{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zl{constructor(e,t){this.m=t,this.appCheck=null,this.T=null,K(e)&&e.settings.appCheckToken&&(this.T=e.settings.appCheckToken),t.onInit((r=>{this.appCheck=r}))}getToken(){return this.T?Promise.resolve(new Br(this.T)):this.appCheck?this.appCheck.getToken().then((e=>e?(z(typeof e.token=="string",3470,{tokenResult:e}),new Br(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,r,i,s,o,c,a,f,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=a,this.useFetchStreams=f,this.isUsingEmulator=_}}const Rn="(default)";class dt{constructor(e,t){this.projectId=e,this.database=t||Rn}static empty(){return new dt("","")}get isDefaultDatabase(){return this.database===Rn}isEqual(e){return e instanceof dt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=tu(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function k(n,e){return n<e?-1:n>e?1:0}function kn(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return k(r,i);{const s=new TextEncoder,o=ru(s.encode(Hr(n,t)),s.encode(Hr(e,t)));return o!==0?o:k(r,i)}}t+=r>65535?2:1}return k(n.length,e.length)}function Hr(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ru(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return k(n[t],e[t]);return k(n.length,e.length)}function us(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="__name__";class ne{constructor(e,t,r){t===void 0?t=0:t>e.length&&C(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&C(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ne.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ne?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=ne.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return k(e.length,t.length)}static compareSegments(e,t){const r=ne.isNumericId(e),i=ne.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?ne.extractNumericId(e).compare(ne.extractNumericId(t)):kn(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class V extends ne{construct(e,t,r){return new V(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new I(E,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new V(t)}static emptyPath(){return new V([])}}const iu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends ne{construct(e,t,r){return new q(e,t,r)}static isValidIdentifier(e){return iu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qr}static keyField(){return new q([qr])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(E,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new I(E,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new I(E,"Path has invalid escape sequence: "+e);r+=a,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new I(E,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(V.fromString(e))}static fromName(e){return new M(V.fromString(e).popFirst(5))}static empty(){return new M(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new V(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e,t){if(!t)throw new I(E,`Function ${n}() cannot be called with an empty ${e}.`)}function zr(n){if(!M.isDocumentKey(n))throw new I(E,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wr(n){if(M.isDocumentKey(n))throw new I(E,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ds(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function tn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":C(12329,{type:typeof n})}function Re(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(E,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tn(n);throw new I(E,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct=null;function su(){return Ct===null?Ct=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ct++,"0x"+Ct.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n){return n==null}function zt(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="RestConnection",au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class cu{get P(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.A=t+"://"+e.host,this.R=`projects/${r}/databases/${i}`,this.V=this.databaseId.database===Rn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}I(e,t,r,i,s){const o=su(),c=this.p(e,t.toUriEncodedString());qt(mn,`Sending RPC '${e}' ${o}:`,c,r);const a={"google-cloud-resource-prefix":this.R,"x-goog-request-params":this.V};this.v(a,i,s);const{host:f}=new URL(c),_=Je(f);return this.F(e,c,a,r,_).then((v=>(qt(mn,`Received RPC '${e}' ${o}: `,v),v)),(v=>{throw os(mn,`RPC '${e}' ${o} failed with error: `,v,"url: ",c,"request:",r),v}))}D(e,t,r,i,s,o){return this.I(e,t,r,i,s)}v(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xe})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}p(e,t){const r=au[e];return`${this.A}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr,A;function Kr(n){if(n===void 0)return Jn("RPC_ERROR","HTTP error has no status"),st;switch(n){case 200:return jr;case 400:return Me;case 401:return Pn;case 403:return Bl;case 404:return jl;case 409:return ql;case 416:return zl;case 429:return Hl;case 499:return xl;case 500:return st;case 501:return cs;case 503:return Gl;case 504:return $l;default:return n>=200&&n<300?jr:n>=400&&n<500?Me:n>=500&&n<600?Wl:st}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A=Gr||(Gr={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class lu extends cu{S(e,t){throw new Error("Not supported by FetchConnection")}async F(e,t,r,i,s){var o;const c=JSON.stringify(i);let a;try{const f={method:"POST",headers:r,body:c};s&&(f.credentials="include"),a=await fetch(t,f)}catch(f){const _=f;throw new I(Kr(_.status),"Request failed with error: "+_.statusText)}if(!a.ok){let f=await a.json();Array.isArray(f)&&(f=f[0]);const _=(o=f==null?void 0:f.error)===null||o===void 0?void 0:o.message;throw new I(Kr(a.status),`Request failed with error: ${_??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hu("Invalid base64 string: "+s):s}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return k(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const du=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(n){if(z(!!n,39018),typeof n=="string"){let e=0;const t=du.exec(n);if(z(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:D(n.seconds),nanos:D(n.nanos)}}function D(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ft(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e){const t={typeString:n};return e&&(t.value=e),t}function bt(n,e){if(!ds(n))throw new I(E,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new I(E,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=-62135596800,Yr=1e6;class L{static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yr);return new L(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(E,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(E,"Timestamp nanoseconds out of range: "+t);if(e<Qr)throw new I(E,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(E,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yr}_compareTo(e){return this.seconds===e.seconds?k(this.nanoseconds,e.nanoseconds):k(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:L._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bt(e,L._jsonSchema))return new L(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}L._jsonSchemaVersion="firestore/timestamp/1.0",L._jsonSchema={type:Q("string",L._jsonSchemaVersion),seconds:Q("number"),nanoseconds:Q("number")};function ps(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ms(n){const e=n.mapValue.fields.__previous_value__;return ps(e)?ms(e):e}function pt(n){const e=Fe(n.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="__type__",fu="__max__",Ot={},_s="__vector__",Wt="value";function Ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ps(n)?4:(function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===fu})(n)?9007199254740991:(function(t){var r,i;return((i=(((r=t==null?void 0:t.mapValue)===null||r===void 0?void 0:r.fields)||{})[gs])===null||i===void 0?void 0:i.stringValue)===_s})(n)?10:11:C(28295,{value:n})}function Gt(n,e){if(n===e)return!0;const t=Ue(n);if(t!==Ue(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pt(n).isEqual(pt(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fe(i.timestampValue),c=Fe(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return ft(i.bytesValue).isEqual(ft(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return D(i.geoPointValue.latitude)===D(s.geoPointValue.latitude)&&D(i.geoPointValue.longitude)===D(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return D(i.integerValue)===D(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=D(i.doubleValue),c=D(s.doubleValue);return o===c?zt(o)===zt(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return us(n.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Jr(o)!==Jr(c))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(c[a]===void 0||!Gt(o[a],c[a])))return!1;return!0})(n,e);default:return C(52216,{left:n})}}function mt(n,e){return(n.values||[]).find((t=>Gt(t,e)))!==void 0}function Kt(n,e){if(n===e)return 0;const t=Ue(n),r=Ue(e);if(t!==r)return k(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return k(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=D(s.integerValue||s.doubleValue),a=D(o.integerValue||o.doubleValue);return c<a?-1:c>a?1:c===a?0:isNaN(c)?isNaN(a)?0:-1:1})(n,e);case 3:return Xr(n.timestampValue,e.timestampValue);case 4:return Xr(pt(n),pt(e));case 5:return kn(n.stringValue,e.stringValue);case 6:return(function(s,o){const c=ft(s),a=ft(o);return c.compareTo(a)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),a=o.split("/");for(let f=0;f<c.length&&f<a.length;f++){const _=k(c[f],a[f]);if(_!==0)return _}return k(c.length,a.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=k(D(s.latitude),D(o.latitude));return c!==0?c:k(D(s.longitude),D(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Zr(n.arrayValue,e.arrayValue);case 10:return(function(s,o){var c,a,f,_;const v=s.fields||{},y=o.fields||{},b=(c=v[Wt])===null||c===void 0?void 0:c.arrayValue,T=(a=y[Wt])===null||a===void 0?void 0:a.arrayValue,R=k(((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0,((_=T==null?void 0:T.values)===null||_===void 0?void 0:_.length)||0);return R!==0?R:Zr(b,T)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Ot&&o===Ot)return 0;if(s===Ot)return 1;if(o===Ot)return-1;const c=s.fields||{},a=Object.keys(c),f=o.fields||{},_=Object.keys(f);a.sort(),_.sort();for(let v=0;v<a.length&&v<_.length;++v){const y=kn(a[v],_[v]);if(y!==0)return y;const b=Kt(c[a[v]],f[_[v]]);if(b!==0)return b}return k(a.length,_.length)})(n.mapValue,e.mapValue);default:throw C(23264,{C:t})}}function Xr(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return k(n,e);const t=Fe(n),r=Fe(e),i=k(t.seconds,r.seconds);return i!==0?i:k(t.nanos,r.nanos)}function Zr(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Kt(t[i],r[i]);if(s)return s}return k(t.length,r.length)}function ei(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ys(n){return!!n&&"arrayValue"in n}function ti(n){return!!n&&"nullValue"in n}function ni(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gn(n){return!!n&&"mapValue"in n}function ot(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ot(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ot(n.arrayValue.values[t]);return e}return Object.assign({},n)}class ri{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{}class Z extends vs{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new pu(e,t,r):t==="array-contains"?new _u(e,r):t==="in"?new yu(e,r):t==="not-in"?new vu(e,r):t==="array-contains-any"?new Iu(e,r):new Z(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new mu(e,r):new gu(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kt(t,this.value)):t!==null&&Ue(this.value)===Ue(t)&&this.matchesComparison(Kt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends vs{constructor(e,t){super(),this.filters=e,this.op=t,this.N=null}static create(e,t){return new At(e,t)}matches(e){return(function(r){return r.op==="and"})(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class pu extends Z{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class mu extends Z{constructor(e,t){super(e,"in",t),this.keys=Is("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class gu extends Z{constructor(e,t){super(e,"not-in",t),this.keys=Is("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Is(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>M.fromName(r.referenceValue)))}class _u extends Z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ys(t)&&mt(t.arrayValue,this.value)}}class yu extends Z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mt(this.value.arrayValue,t)}}class vu extends Z{constructor(e,t){super(e,"not-in",t)}matches(e){if(mt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mt(this.value.arrayValue,t)}}class Iu extends Z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ys(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>mt(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new L(0,0))}static max(){return new U(new L(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.comparator=e,this.root=t||x.EMPTY}insert(e,t){return new Jt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,x.BLACK,null,null))}remove(e){return new Jt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,x.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nt(this.root,e,this.comparator,!0)}}class Nt{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class x{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??x.RED,this.left=i??x.EMPTY,this.right=s??x.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new x(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return x.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return x.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw C(43730,{key:this.key,value:this.value});if(this.right.isRed())throw C(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw C(27949);return e+(this.isRed()?0:1)}}x.EMPTY=null,x.RED=!0,x.BLACK=!1;x.EMPTY=new class{constructor(){this.size=0}get key(){throw C(57766)}get value(){throw C(16141)}get color(){throw C(16727)}get left(){throw C(29726)}get right(){throw C(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new x(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new Jt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ii(this.data.getIterator())}getIteratorFrom(e){return new ii(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class ii{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new xe([])}unionWith(e){let t=new gt(q.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.value=e}static empty(){return new G({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!gn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ot(t)}setAll(e){let t=q.emptyPath(),r={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const a=this.getFieldsMap(t);this.applyChanges(a,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=ot(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());gn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tt(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new G(ot(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new re(e,0,U.min(),U.min(),U.min(),G.empty(),0)}static newFoundDocument(e,t,r,i){return new re(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new re(e,2,t,U.min(),U.min(),G.empty(),0)}static newUnknownDocument(e,t){return new re(e,3,t,U.min(),U.min(),G.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=G.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=G.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.O=null}}function si(n,e=null,t=[],r=[],i=null,s=null,o=null){return new wu(n,e,t,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=a,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function Eu(n){return n.collectionGroup!==null}function Tu(n){const e=Le(n);if(e.q===null){e.q=[];const t=new Set;for(const s of e.explicitOrderBy)e.q.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new gt(q.comparator);return o.filters.forEach((a=>{a.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.q.push(new Cn(s,r))})),t.has(q.keyField().canonicalString())||e.q.push(new Cn(q.keyField(),r))}return e.q}function bu(n){const e=Le(n);return e.B||(e.B=Es(e,Tu(n))),e.B}function Es(n,e){if(n.limitType==="F")return si(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Cn(i.field,s)}));const t=n.endAt?new ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ri(n.startAt.position,n.startAt.inclusive):null;return si(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function On(n,e){const t=n.filters.concat([e]);return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zt(e)?"-0":e}}function Au(n,e){return(function(r){return typeof r=="number"&&Number.isInteger(r)&&!zt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER})(e)?(function(r){return{integerValue:""+r}})(e):Ts(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this._=void 0}}class Su extends nn{}class Pu extends nn{constructor(e){super(),this.elements=e}}class Ru extends nn{constructor(e){super(),this.elements=e}}class ku extends nn{constructor(e,t){super(),this.serializer=e,this.k=t}}class oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new oe}static exists(e){return new oe(void 0,e)}static updateTime(e){return new oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class rn{}class bs extends rn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yn extends rn{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Xn extends rn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cu extends rn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={asc:"ASCENDING",desc:"DESCENDING"},Nu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vu={and:"AND",or:"OR"};class Du{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Mu(n,e){return Nn(n,e.toTimestamp())}function at(n){return z(!!n,49232),U.fromTimestamp((function(t){const r=Fe(t);return new L(r.seconds,r.nanos)})(n))}function Zn(n,e){return Vn(n,e).canonicalString()}function Vn(n,e){const t=(function(i){return new V(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Qt(n,e){return Zn(n.databaseId,e.path)}function Dn(n,e){const t=(function(i){const s=V.fromString(i);return z(Ps(s),10190,{key:s.toString()}),s})(e);if(t.get(1)!==n.databaseId.projectId)throw new I(E,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(E,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M((function(i){return z(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(t))}function oi(n,e,t){return{name:Qt(n,e),fields:t.value.mapValue.fields}}function Fu(n,e){return"found"in e?(function(r,i){z(!!i.found,43571),i.found.name,i.found.updateTime;const s=Dn(r,i.found.name),o=at(i.found.updateTime),c=i.found.createTime?at(i.found.createTime):U.min(),a=new G({mapValue:{fields:i.found.fields}});return re.newFoundDocument(s,o,c,a)})(n,e):"missing"in e?(function(r,i){z(!!i.missing,3894),z(!!i.readTime,22933);const s=Dn(r,i.missing),o=at(i.readTime);return re.newNoDocument(s,o)})(n,e):C(7234,{result:e})}function Uu(n,e){let t;if(e instanceof bs)t={update:oi(n,e.key,e.value)};else if(e instanceof Xn)t={delete:Qt(n,e.key)};else if(e instanceof Yn)t={update:oi(n,e.key,e.data),updateMask:Bu(e.fieldMask)};else{if(!(e instanceof Cu))return C(16599,{L:e.type});t={verify:Qt(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const c=o.transform;if(c instanceof Su)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Pu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ru)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ku)return{fieldPath:o.field.canonicalString(),increment:c.k};throw C(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Mu(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:C(27497)})(n,e.precondition)),t}function As(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=(function(f,_){return Zn(f.databaseId,_)})(n,i);const s=(function(f){if(f.length!==0)return Ss(At.create(f,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(f){if(f.length!==0)return f.map((_=>(function(y){return{field:Ee(y.field),direction:xu(y.dir)}})(_)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=(function(f,_){return f.useProto3Json||ou(_)?_:{value:_}})(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{M:t,parent:i}}function xu(n){return Ou[n]}function $u(n){return Nu[n]}function ju(n){return Vu[n]}function Ee(n){return{fieldPath:n.canonicalString()}}function Ss(n){return n instanceof Z?(function(t){if(t.op==="=="){if(ni(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NAN"}};if(ti(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ni(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NOT_NAN"}};if(ti(t.value))return{unaryFilter:{field:Ee(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(t.field),op:$u(t.op),value:t.value}}})(n):n instanceof At?(function(t){const r=t.getFilters().map((i=>Ss(i)));return r.length===1?r[0]:{compositeFilter:{op:ju(t.op),filters:r}}})(n):C(54877,{filter:n})}function Bu(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ps(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){return new Du(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{}class qu extends Hu{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.et=!1}rt(){if(this.et)throw new I(Me,"The client has already been terminated.")}I(e,t,r,i){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.I(e,Vn(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===Pn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(st,s.toString())}))}D(e,t,r,i,s){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.D(e,Vn(t,r),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===Pn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(st,o.toString())}))}terminate(){this.et=!0,this.connection.terminate()}}async function sn(n,e){const t=Le(n),r={writes:e.map((i=>Uu(t.serializer,i)))};await t.I("Commit",t.serializer.databaseId,V.emptyPath(),r)}async function zu(n,e){const t=Le(n),r={documents:e.map((c=>Qt(t.serializer,c)))},i=await t.D("BatchGetDocuments",t.serializer.databaseId,V.emptyPath(),r,e.length),s=new Map;i.forEach((c=>{const a=Fu(t.serializer,c);s.set(a.key.toString(),a)}));const o=[];return e.forEach((c=>{const a=s.get(c.toString());z(!!a,55234,{key:c}),o.push(a)})),o}async function Wu(n,e){const t=Le(n),{M:r,parent:i}=As(t.serializer,bu(e));return(await t.D("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((s=>!!s.document)).map((s=>(function(c,a,f){const _=Dn(c,a.name),v=at(a.updateTime),y=a.createTime?at(a.createTime):U.min(),b=new G({mapValue:{fields:a.fields}}),T=re.newFoundDocument(_,v,y,b);return f?T.setHasCommittedMutations():T})(t.serializer,s.document,void 0)))}async function Gu(n,e,t){var r;const i=Le(n),{request:s,nt:o,parent:c}=(function(v,y,b,T){const{M:R,parent:P}=As(v,y),W={},F=[];let j=0;return b.forEach(($=>{const ee="aggregate_"+j++;W[ee]=$.alias,$.aggregateType==="count"?F.push({alias:ee,count:{}}):$.aggregateType==="avg"?F.push({alias:ee,avg:{field:Ee($.fieldPath)}}):$.aggregateType==="sum"&&F.push({alias:ee,sum:{field:Ee($.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:F,structuredQuery:R.structuredQuery},parent:R.parent},nt:W,parent:P}})(i.serializer,(function(v){const y=Le(v);return y.$||(y.$=Es(y,v.explicitOrderBy)),y.$})(e),t);i.connection.P||delete s.parent;const a=(await i.D("RunAggregationQuery",i.serializer.databaseId,c,s,1)).filter((_=>!!_.result));z(a.length===1,64727);const f=(r=a[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(f).reduce(((_,v)=>(_[o[v]]=f[v],_)),{})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="ComponentProvider",ct=new Map;function je(n){if(n._terminated)throw new I(Me,"The client has already been terminated.");if(!ct.has(n)){qt(Rs,"Initializing Datastore");const e=(function(s){return new lu(s)})((function(s,o,c,a){return new eu(s,o,c,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,fs(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=er(n._databaseId),r=(function(s,o,c,a){return new qu(s,o,c,a)})(n._authCredentials,n._appCheckCredentials,e,t);ct.set(n,r)}return ct.get(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=1048576,ks="firestore.googleapis.com",ai=!0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new I(E,"Can't provide ssl option if host option is not set");this.host=ks,this.ssl=ai}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ai;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ku)throw new I(E,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,c,a){if(o===!0&&a===!0)throw new I(E,`${s} and ${c} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fs((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(E,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(E,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(E,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ze{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ci({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new I(Me,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new I(Me,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ci(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Kl;switch(r.type){case"firstParty":return new Xl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(E,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ct.get(t);r&&(qt(Rs,"Removing Datastore"),ct.delete(t),r.terminate())})(this),Promise.resolve()}}function yh(n,e){const t=typeof n=="object"?n:wi(),r=typeof n=="string"?n:"(default)",i=xn(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Ys("firestore");s&&Ju(i,...s)}return i}function Ju(n,e,t,r={}){var i;n=Re(n,Ze);const s=Je(e),o=n._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),a=`${e}:${t}`;s&&(_i(`https://${a}`),yi("Firestore",!0)),o.host!==ks&&o.host!==a&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:a,ssl:s,emulatorOptions:r});if(!Oe(f,c)&&(n._setSettings(f),r.mockUserToken)){let _,v;if(typeof r.mockUserToken=="string")_=r.mockUserToken,v=H.MOCK_USER;else{_=Zs(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new I(E,"mockUserToken must contain 'sub' or 'user_id' field!");v=new H(y)}n._authCredentials=new Jl(new ls(_,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Yu{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new et(this.firestore,e,this._query)}}class O{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Se(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new O(this.firestore,e,this._key)}toJSON(){return{type:O._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bt(t,O._jsonSchema))return new O(e,r||null,new M(V.fromString(t.referencePath)))}}O._jsonSchemaVersion="firestore/documentReference/1.0",O._jsonSchema={type:Q("string",O._jsonSchemaVersion),referencePath:Q("string")};class Se extends et{constructor(e,t,r){super(e,t,(function(s){return new ws(s)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new O(this.firestore,null,new M(e))}withConverter(e){return new Se(this.firestore,e,this._path)}}function vh(n,e,...t){if(n=N(n),hs("collection","path",e),n instanceof Ze){const r=V.fromString(e,...t);return Wr(r),new Se(n,null,r)}{if(!(n instanceof O||n instanceof Se))throw new I(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(V.fromString(e,...t));return Wr(r),new Se(n.firestore,null,r)}}function Ih(n,e,...t){if(n=N(n),arguments.length===1&&(e=nu.newId()),hs("doc","path",e),n instanceof Ze){const r=V.fromString(e,...t);return zr(r),new O(n,null,new M(r))}{if(!(n instanceof O||n instanceof Se))throw new I(E,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(V.fromString(e,...t));return zr(r),new O(n.firestore,n instanceof Se?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this._byteString=e}static fromBase64String(e){try{return new J(pe.fromBase64String(e))}catch(t){throw new I(E,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new J(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:J._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bt(e,J._jsonSchema))return J.fromBase64String(e.bytes)}}J._jsonSchemaVersion="firestore/bytes/1.0",J._jsonSchema={type:Q("string",J._jsonSchemaVersion),bytes:Q("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(E,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(E,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(E,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return k(this._lat,e._lat)||k(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ae._jsonSchemaVersion}}static fromJSON(e){if(bt(e,ae._jsonSchema))return new ae(e.latitude,e.longitude)}}ae._jsonSchemaVersion="firestore/geoPoint/1.0",ae._jsonSchema={type:Q("string",ae._jsonSchemaVersion),latitude:Q("number"),longitude:Q("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ce._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bt(e,ce._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ce(e.vectorValues);throw new I(E,"Expected 'vectorValues' field to be a number array")}}}ce._jsonSchemaVersion="firestore/vectorValue/1.0",ce._jsonSchema={type:Q("string",ce._jsonSchemaVersion),vectorValues:Q("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=/^__.*__$/;class Zu{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new bs(e,this.data,t,this.fieldTransforms)}}class Cs{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Yn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Os(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C(40011,{it:n})}}class nr{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.st(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get it(){return this.settings.it}ot(e){return new nr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ot({path:r,_t:!1});return i.ct(e),i}lt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ot({path:r,_t:!1});return i.st(),i}ht(e){return this.ot({path:void 0,_t:!0})}ft(e){return Yt(e,this.settings.methodName,this.settings.dt||!1,this.path,this.settings.Et)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}st(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(e.length===0)throw this.ft("Document fields must not be empty");if(Os(this.it)&&Xu.test(e))throw this.ft('Document fields cannot begin and end with "__"')}}class eh{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||er(e)}Tt(e,t,r,i=!1){return new nr({it:e,methodName:t,Et:r,path:q.emptyPath(),_t:!1,dt:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function on(n){const e=n._freezeSettings(),t=er(n._databaseId);return new eh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ns(n,e,t,r,i,s={}){const o=n.Tt(s.merge||s.mergeFields?2:0,e,t,i);rr("Data must be an object, but it was:",o,r);const c=Ls(r,o);let a,f;if(s.merge)a=new xe(o.fieldMask),f=o.fieldTransforms;else if(s.mergeFields){const _=[];for(const v of s.mergeFields){const y=Ln(e,v,t);if(!o.contains(y))throw new I(E,`Field '${y}' is specified in your field mask but missing from your input data.`);Fs(_,y)||_.push(y)}a=new xe(_),f=o.fieldTransforms.filter((v=>a.covers(v.field)))}else a=null,f=o.fieldTransforms;return new Zu(new G(c),a,f)}class Pt extends tr{_toFieldTransform(e){if(e.it!==2)throw e.it===1?e.ft(`${this._methodName}() can only appear at the top level of your update data`):e.ft(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pt}}function Vs(n,e,t,r){const i=n.Tt(1,e,t);rr("Data must be an object, but it was:",i,r);const s=[],o=G.empty();Tt(r,((a,f)=>{const _=ir(e,a,t);f=N(f);const v=i.lt(_);if(f instanceof Pt)s.push(_);else{const y=Rt(f,v);y!=null&&(s.push(_),o.set(_,y))}}));const c=new xe(s);return new Cs(o,c,i.fieldTransforms)}function Ds(n,e,t,r,i,s){const o=n.Tt(1,e,t),c=[Ln(e,r,t)],a=[i];if(s.length%2!=0)throw new I(E,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)c.push(Ln(e,s[y])),a.push(s[y+1]);const f=[],_=G.empty();for(let y=c.length-1;y>=0;--y)if(!Fs(f,c[y])){const b=c[y];let T=a[y];T=N(T);const R=o.lt(b);if(T instanceof Pt)f.push(b);else{const P=Rt(T,R);P!=null&&(f.push(b),_.set(b,P))}}const v=new xe(f);return new Cs(_,v,o.fieldTransforms)}function th(n,e,t,r=!1){return Rt(t,n.Tt(r?4:3,e))}function Rt(n,e){if(Ms(n=N(n)))return rr("Unsupported field value:",e,n),Ls(n,e);if(n instanceof tr)return(function(r,i){if(!Os(i.it))throw i.ft(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ft(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings._t&&e.it!==4)throw e.ft("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const c of r){let a=Rt(c,i.ht(o));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=N(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Au(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=L.fromDate(r);return{timestampValue:Nn(i.serializer,s)}}if(r instanceof L){const s=new L(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nn(i.serializer,s)}}if(r instanceof ae)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof J)return{bytesValue:Lu(i.serializer,r._byteString)};if(r instanceof O){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ft(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zn(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ce)return(function(o,c){return{mapValue:{fields:{[gs]:{stringValue:_s},[Wt]:{arrayValue:{values:o.toArray().map((f=>{if(typeof f!="number")throw c.ft("VectorValues must only contain numeric values.");return Ts(c.serializer,f)}))}}}}}})(r,i);throw i.ft(`Unsupported field value: ${tn(r)}`)})(n,e)}function Ls(n,e){const t={};return(function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0})(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(n,((r,i)=>{const s=Rt(i,e.ut(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Ms(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof L||n instanceof ae||n instanceof J||n instanceof O||n instanceof tr||n instanceof ce)}function rr(n,e,t){if(!Ms(t)||!ds(t)){const r=tn(t);throw r==="an object"?e.ft(n+" a custom object"):e.ft(n+" "+r)}}function Ln(n,e,t){if((e=N(e))instanceof St)return e._internalPath;if(typeof e=="string")return ir(n,e);throw Yt("Field path arguments must be of type string or ",n,!1,void 0,t)}const nh=new RegExp("[~\\*/\\[\\]]");function ir(n,e,t){if(e.search(nh)>=0)throw Yt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new St(...e.split("."))._internalPath}catch{throw Yt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yt(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new I(E,c+n+a)}function Fs(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new O(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($s("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xs extends Us{data(){return super.data()}}class rh{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function $s(n,e){return typeof e=="string"?ir(n,e):e instanceof St?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{}class ih extends sr{}function wh(n,e,...t){let r=[];e instanceof sr&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((a=>a instanceof or)).length,c=s.filter((a=>a instanceof an)).length;if(o>1||o>0&&c>0)throw new I(E,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class an extends ih{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new an(e,t,r)}_apply(e){const t=this._parse(e);return js(e._query,t),new et(e.firestore,e.converter,On(e._query,t))}_parse(e){const t=on(e.firestore);return(function(s,o,c,a,f,_,v){let y;if(f.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new I(E,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){ui(v,_);const T=[];for(const R of v)T.push(li(a,s,R));y={arrayValue:{values:T}}}else y=li(a,s,v)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||ui(v,_),y=th(c,o,v,_==="in"||_==="not-in");return Z.create(f,_,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Eh(n,e,t){const r=e,i=$s("where",n);return an._create(i,r,t)}class or extends sr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new or(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:At.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const a of c)js(o,a),o=On(o,a)})(e._query,t),new et(e.firestore,e.converter,On(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function li(n,e,t){if(typeof(t=N(t))=="string"){if(t==="")throw new I(E,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eu(e)&&t.indexOf("/")!==-1)throw new I(E,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(V.fromString(t));if(!M.isDocumentKey(r))throw new I(E,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ei(n,new M(r))}if(t instanceof O)return ei(n,t._key);throw new I(E,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tn(t)}.`)}function ui(n,e){if(!Array.isArray(n)||n.length===0)throw new I(E,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function js(n,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new I(E,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(E,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class sh{convertValue(e,t="none"){switch(Ue(e)){case 0:return null;case 1:return e.booleanValue;case 2:return D(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tt(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Wt].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((o=>D(o.doubleValue)));return new ce(s)}convertGeoPoint(e){return new ae(D(e.latitude),D(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ms(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pt(e));default:return null}}convertTimestamp(e){const t=Fe(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=V.fromString(e);z(Ps(r),9688,{name:e});const i=new dt(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(t)||Jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ar extends sh{constructor(e){super(),this.firestore=e}convertBytes(e){return new J(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new O(this.firestore,null,t)}}function Th(n){const e=je((n=Re(n,O)).firestore),t=new ar(n.firestore);return zu(e,[n._key]).then((r=>{z(r.length===1,15618);const i=r[0];return new Us(n.firestore,t,n._key,i.isFoundDocument()?i:null,n.converter)}))}function bh(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new I(cs,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Re(n,et))._query);const e=je(n.firestore),t=new ar(n.firestore);return Wu(e,n._query).then((r=>{const i=r.map((s=>new xs(n.firestore,t,s.key,s,n.converter)));return n._query.limitType==="L"&&i.reverse(),new rh(n,i)}))}function Ah(n,e,t){const r=Bs((n=Re(n,O)).converter,e,t),i=Ns(on(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return sn(je(n.firestore),[i.toMutation(n._key,oe.none())])}function Sh(n,e,t,...r){const i=on((n=Re(n,O)).firestore);let s;return s=typeof(e=N(e))=="string"||e instanceof St?Ds(i,"updateDoc",n._key,e,t,r):Vs(i,"updateDoc",n._key,e),sn(je(n.firestore),[s.toMutation(n._key,oe.exists(!0))])}function Ph(n){return sn(je((n=Re(n,O)).firestore),[new Xn(n._key,oe.none())])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n){return oh(n,{count:ah()})}function oh(n,e){const t=Re(n.firestore,Ze),r=je(t),i=(function(o,c){const a=[];for(const f in o)Object.prototype.hasOwnProperty.call(o,f)&&a.push(c(o[f],f,o));return a})(e,((s,o)=>new uu(o,s.aggregateType,s._internalFieldPath)));return Gu(r,n._query,i).then((s=>(function(c,a,f){const _=new ar(c);return new Yu(a,_,f)})(t,n,s)))}function ah(){return new Qu("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){return new Pt("deleteField")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=on(e)}set(e,t,r){this._verifyNotCommitted();const i=_n(e,this._firestore),s=Bs(i.converter,t,r),o=Ns(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,oe.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=_n(e,this._firestore);let o;return o=typeof(t=N(t))=="string"||t instanceof St?Ds(this._dataReader,"WriteBatch.update",s._key,t,r,i):Vs(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_n(e,this._firestore);return this._mutations=this._mutations.concat(new Xn(t._key,oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(Me,"A write batch can no longer be used after commit() has been called.")}}function _n(n,e){if((n=N(n)).firestore!==e)throw new I(E,"Provided document reference is from a different Firestore instance.");return n}function Ch(n){const e=je(n=Re(n,Ze));return new ch(n,(t=>sn(e,t)))}(function(){(function(t){Xe=t})(`${Qe}_lite`),We(new Ne("firestore/lite",((e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ze(new Ql(e.getProvider("auth-internal")),new Zl(i,e.getProvider("app-check-internal")),(function(c,a){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new I(E,'"projectId" not provided in firebase.initializeApp.');return new dt(c.options.projectId,a)})(i,t),i);return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ae("firestore-lite",$r,""),Ae("firestore-lite",$r,"esm2017")})();export{Ye as E,wi as a,gh as b,yh as c,Ih as d,Th as e,vh as f,lh as g,Eh as h,ma as i,bh as j,Ph as k,dh as l,mh as m,hh as n,ph as o,Rh as p,wh as q,uh as r,Ah as s,Sh as t,fh as u,kh as v,Ch as w};

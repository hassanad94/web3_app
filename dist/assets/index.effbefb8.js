var D=Object.defineProperty;var L=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var B=(a,e,s)=>e in a?D(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,I=(a,e)=>{for(var s in e||(e={}))G.call(e,s)&&B(a,s,e[s]);if(L)for(var s of L(e))H.call(e,s)&&B(a,s,e[s]);return a};import{j as S,R as A,H as K,A as $,B as O,a as U,b as Y,r as o,p as J,W as X,C as Q,S as V,c as Z,d as f0}from"./vendor.0fc05699.js";const e0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};e0();var _="/web3_app/assets/logo.60ecbcf0.png";const f=S.exports.jsx,t=S.exports.jsxs,t0=S.exports.Fragment,a0=()=>t("div",{className:"2-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[t("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:_,alt:"logo"})}),t("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center cursor-pointer",children:"Market"}),f("p",{className:"text-white text-base text-center cursor-pointer",children:"Excange"}),f("p",{className:"text-white text-base text-center cursor-pointer",children:"Tutorial"}),f("p",{className:"text-white text-base text-center cursor-pointer",children:"Wallets"})]})]}),t("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Come Joint Us"}),f("p",{className:"text-white text-sm text-center",children:"hassanad94@gmail.com"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"}),t("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-sm text-center",children:"add me Instagram @hassand94"}),f("p",{className:"text-white text-sm text-center",children:"All rights reserved"})]})]}),s0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})}),W=({title:a,classprops:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:a}),n0=()=>{const[a,e]=A.useState(!1);return t("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:f("img",{src:_,alt:"logo",className:"w-32 cursor-pointer"})}),t("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[["Market","Exchange","Tutorials","Wallets"].map((s,c)=>f(W,{title:s},s+c)),f("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:"Login"})]}),t("div",{className:"flex relative",children:[!a&&f(K,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),a&&f($,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}),a&&t("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none\r flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f($,{onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((s,c)=>f(W,{title:s,classprops:"my-2 text-lg"},s+c))]})]})]})},j=({color:a,title:e,icon:s,subtitle:c})=>t("div",{className:"flex service-card flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-x",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${a}`,children:s}),t("div",{className:"ml-5 flex flex-col flex-1",children:[f("h1",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-2 text-white text-lg text-sm md:w-9/12",children:c})]})]}),r0=()=>t("div",{className:"flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services",children:[f("div",{className:"flex mf:flex-row flex-col items-center items-center justify-between md:p-20 py-12 px-4",children:f("div",{className:"flex-1 flex flex-col justify-start items-start",children:t("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient",children:["Services that we ",f("br",{}),"continue to improve"]})})}),t("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(j,{color:"bg-[#2952E3]",title:"Security is Guarenteed",icon:f(O,{fontSize:21,className:"text-white"}),subtitle:"Security is Guarenteed. We always maintain privacy and mainting the quality of our products"}),f(j,{color:"bg-[#8945F8]",title:"Best exchange rates",icon:f(U,{fontSize:21,className:"text-white"}),subtitle:"You can find the best exchange rate with low fee. Best platform if you want to change your currence"}),f(j,{color:"bg-[#F84550]",title:"Fastest transactions",icon:f(Y,{fontSize:21,className:"text-white"}),subtitle:"Great Networkspeed which. You dont have to wait for days to confirm your transactions."})]})]}),c0="hh-sol-artifact-1",l0="Transactions",i0="contracts/Transactions.sol",o0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],b0="0x608060405234801561001057600080fd5b50610bfe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f5314610046578063578cb8f914610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b7565b60405180910390f35b61006c6102e1565b60405161007991906108d9565b60405180910390f35b61009c600480360381019061009791906105df565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610a81565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610a81565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610a81565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610a81565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b6000808154809291906102fc90610ab3565b919050555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906104399291906104aa565b506080820151816004015560a08201518160050190805190602001906104609291906104aa565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049c96959493929190610848565b60405180910390a150505050565b8280546104b690610a81565b90600052602060002090601f0160209004810192826104d8576000855561051f565b82601f106104f157805160ff191683800117855561051f565b8280016001018555821561051f579182015b8281111561051e578251825591602001919060010190610503565b5b50905061052c9190610530565b5090565b5b80821115610549576000816000905550600101610531565b5090565b600061056061055b84610925565b6108f4565b90508281526020810184848401111561057857600080fd5b610583848285610a3f565b509392505050565b60008135905061059a81610b9a565b92915050565b600082601f8301126105b157600080fd5b81356105c184826020860161054d565b91505092915050565b6000813590506105d981610bb1565b92915050565b600080600080608085870312156105f557600080fd5b60006106038782880161058b565b9450506020610614878288016105ca565b935050604085013567ffffffffffffffff81111561063157600080fd5b61063d878288016105a0565b925050606085013567ffffffffffffffff81111561065a57600080fd5b610666878288016105a0565b91505092959194509250565b600061067e838361079a565b905092915050565b61068f81610a09565b82525050565b61069e816109bb565b82525050565b6106ad816109bb565b82525050565b60006106be82610965565b6106c88185610988565b9350836020820285016106da85610955565b8060005b8581101561071657848403895281516106f78582610672565b94506107028361097b565b925060208a019950506001810190506106de565b50829750879550505050505092915050565b600061073382610970565b61073d8185610999565b935061074d818560208601610a4e565b61075681610b89565b840191505092915050565b600061076c82610970565b61077681856109aa565b9350610786818560208601610a4e565b61078f81610b89565b840191505092915050565b600060c0830160008301516107b26000860182610695565b5060208301516107c56020860182610695565b5060408301516107d8604086018261082a565b50606083015184820360608601526107f08282610728565b9150506080830151610805608086018261082a565b5060a083015184820360a086015261081d8282610728565b9150508091505092915050565b610833816109ff565b82525050565b610842816109ff565b82525050565b600060c08201905061085d60008301896106a4565b61086a6020830188610686565b6108776040830187610839565b81810360608301526108898186610761565b90506108986080830185610839565b81810360a08301526108aa8184610761565b9050979650505050505050565b600060208201905081810360008301526108d181846106b3565b905092915050565b60006020820190506108ee6000830184610839565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091b5761091a610b5a565b5b8060405250919050565b600067ffffffffffffffff8211156109405761093f610b5a565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c6826109df565b9050919050565b60006109d8826109df565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a1482610a1b565b9050919050565b6000610a2682610a2d565b9050919050565b6000610a38826109df565b9050919050565b82818337600083830152505050565b60005b83811015610a6c578082015181840152602081019050610a51565b83811115610a7b576000848401525b50505050565b60006002820490506001821680610a9957607f821691505b60208210811415610aad57610aac610b2b565b5b50919050565b6000610abe826109ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610af157610af0610afc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ba3816109cd565b8114610bae57600080fd5b50565b610bba816109ff565b8114610bc557600080fd5b5056fea26469706673582212209406156b8db2dbdca1d64fd6b4f97c932dcf994c2b0919bd8c090a68ea1961e564736f6c63430008000033",d0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f5314610046578063578cb8f914610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b7565b60405180910390f35b61006c6102e1565b60405161007991906108d9565b60405180910390f35b61009c600480360381019061009791906105df565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610a81565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610a81565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610a81565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610a81565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b6000808154809291906102fc90610ab3565b919050555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030190805190602001906104399291906104aa565b506080820151816004015560a08201518160050190805190602001906104609291906104aa565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049c96959493929190610848565b60405180910390a150505050565b8280546104b690610a81565b90600052602060002090601f0160209004810192826104d8576000855561051f565b82601f106104f157805160ff191683800117855561051f565b8280016001018555821561051f579182015b8281111561051e578251825591602001919060010190610503565b5b50905061052c9190610530565b5090565b5b80821115610549576000816000905550600101610531565b5090565b600061056061055b84610925565b6108f4565b90508281526020810184848401111561057857600080fd5b610583848285610a3f565b509392505050565b60008135905061059a81610b9a565b92915050565b600082601f8301126105b157600080fd5b81356105c184826020860161054d565b91505092915050565b6000813590506105d981610bb1565b92915050565b600080600080608085870312156105f557600080fd5b60006106038782880161058b565b9450506020610614878288016105ca565b935050604085013567ffffffffffffffff81111561063157600080fd5b61063d878288016105a0565b925050606085013567ffffffffffffffff81111561065a57600080fd5b610666878288016105a0565b91505092959194509250565b600061067e838361079a565b905092915050565b61068f81610a09565b82525050565b61069e816109bb565b82525050565b6106ad816109bb565b82525050565b60006106be82610965565b6106c88185610988565b9350836020820285016106da85610955565b8060005b8581101561071657848403895281516106f78582610672565b94506107028361097b565b925060208a019950506001810190506106de565b50829750879550505050505092915050565b600061073382610970565b61073d8185610999565b935061074d818560208601610a4e565b61075681610b89565b840191505092915050565b600061076c82610970565b61077681856109aa565b9350610786818560208601610a4e565b61078f81610b89565b840191505092915050565b600060c0830160008301516107b26000860182610695565b5060208301516107c56020860182610695565b5060408301516107d8604086018261082a565b50606083015184820360608601526107f08282610728565b9150506080830151610805608086018261082a565b5060a083015184820360a086015261081d8282610728565b9150508091505092915050565b610833816109ff565b82525050565b610842816109ff565b82525050565b600060c08201905061085d60008301896106a4565b61086a6020830188610686565b6108776040830187610839565b81810360608301526108898186610761565b90506108986080830185610839565b81810360a08301526108aa8184610761565b9050979650505050505050565b600060208201905081810360008301526108d181846106b3565b905092915050565b60006020820190506108ee6000830184610839565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091b5761091a610b5a565b5b8060405250919050565b600067ffffffffffffffff8211156109405761093f610b5a565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c6826109df565b9050919050565b60006109d8826109df565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a1482610a1b565b9050919050565b6000610a2682610a2d565b9050919050565b6000610a38826109df565b9050919050565b82818337600083830152505050565b60005b83811015610a6c578082015181840152602081019050610a51565b83811115610a7b576000848401525b50505050565b60006002820490506001821680610a9957607f821691505b60208210811415610aad57610aac610b2b565b5b50919050565b6000610abe826109ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610af157610af0610afc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ba3816109cd565b8114610bae57600080fd5b50565b610bba816109ff565b8114610bc557600080fd5b5056fea26469706673582212209406156b8db2dbdca1d64fd6b4f97c932dcf994c2b0919bd8c090a68ea1961e564736f6c63430008000033",m0={},u0={};var h0={_format:c0,contractName:l0,sourceName:i0,abi:o0,bytecode:b0,deployedBytecode:d0,linkReferences:m0,deployedLinkReferences:u0};const x0="0x40E522dad924c5ba024787DD78A72F2034FCeD83",p0=h0.abi,E=A.createContext(),{ethereum:d}=window,C=()=>{const e=new X(d).getSigner();return new Q(x0,p0,e)},y0=({children:a})=>{const[e,s]=o.exports.useState(""),[c,n]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[l,i]=o.exports.useState(!1),[m,u]=o.exports.useState(localStorage.getItem("transactionCount")),[p,y]=o.exports.useState([]),w=async()=>{try{if(!d)return alert("Please install metamask");const N=(await C().getAllTransactions()).map(b=>({addressTo:b.receiver,addressFrom:b.from,timestamp:new Date(b.timestamp.toNumber()*1e3).toLocaleString(),message:b.message,keyword:b.keyword,amount:parseInt(b.amount._hex)/10**18}));y(N),console.log(N)}catch(r){console.log(r)}},g=(r,h)=>{c[h]=r.target.value},v=async()=>{try{if(!d)return alert("PLS install metamask");const r=await d.request({method:"eth_requestAccounts"});r.length?(s(r[0]),w()):console.log("No accounts Found"),console.log(r)}catch(r){throw console.log(r),new Error("No ethereum object")}},R=async()=>{try{const h=await C().getTransactionsCount();window.localStorage.setItem("transactionCount",h)}catch(r){throw console.log(r),new Error("No ethereum object")}},z=async()=>{try{if(!d)return alert("Please install MetaMask.");const r=await d.request({method:"eth_requestAccounts"});s(r[0]),window.location.reload()}catch(r){throw console.log(r),new Error("No ethereum object")}},P=async()=>{try{if(!d)return alert("Please install MetaMask.");const{addressTo:r,amount:h,keyword:N,message:b}=c,M=C(),F=J(h);await d.request({method:"eth_sendTransaction",params:[{from:e,to:r,gas:"0x5208",value:F._hex}]});const T=await M.addToBlockchain(r,F,b,N);i(!0),console.log(`Loading - ${T.hash}`),await T.wait(),i(!1),console.log(`Succes - ${T.hash}`);const q=await M.getTransactionsCount();u(q.toNumber()),window.reload()}catch(r){throw console.log(r),new Error("No ethereum object")}};return o.exports.useEffect(()=>{v(),R()},[]),f(E.Provider,{value:{transactions:p,connectWallet:z,currentAccount:e,formData:c,setFormData:n,handleChange:g,sendTransaction:P,isLoading:l},children:a})},k=a=>`${a.slice(0,5)}...${a.slice(a.length-4)}`,w0="XegwKa9RkhW1eUhx3InJkFBFKXWbQM0d",g0=({keyword:a})=>{const[e,s]=o.exports.useState(""),c=async()=>{var n,l,i;try{const m=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${w0}&q=${a.split(" ").join("")}&limit=1`),{data:u}=await m.json();s((i=(l=(n=u[0])==null?void 0:n.images)==null?void 0:l.downsized_medium)==null?void 0:i.url)}catch{s("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return o.exports.useEffect(()=>{a&&c()},[a]),e},N0=({addressTo:a,addressFrom:e,timestamp:s,message:c,keyword:n,url:l,amount:i})=>{const m=g0({keyword:n});return f("div",{className:"bg-[#181918] m-4 flex flex-1\r 2xl:min-w-[450px]\r 2xl:max-w-[500px]\r sm:min-w-[270px]\r sm:max-w-[300px]\r flex-col p-3 rounded-md hover:shadow-2xl\r ",children:t("div",{className:"flex flex-col items-center w-full mt-3",children:[t("div",{className:"w-full mb-6 p-2",children:[f("a",{href:`https://rinkeby.etherscan.io/address/${e}`,target:"_blank",rel:"noopener noreferrer",children:t("p",{className:"text-white text-base ",children:[" From: ",k(e)," "]})}),f("a",{href:`https://rinkeby.etherscan.io/address/${a}`,target:"_blank",rel:"noopener noreferrer",children:t("p",{className:"text-white text-base ",children:[" To: ",k(a)," "]})}),t("p",{className:"text-white text-base",children:["Amount: ",i," ETH"]}),c&&t(t0,{children:[f("br",{}),t("p",{className:"text-white text-base",children:[" Message: ",c," "]})]})]}),f("img",{src:m||l,alt:"gif",className:"w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:t("p",{className:"text-[#37c7da] font-bold",children:[" ",s," "]})})]})})},v0=()=>{const{currentAccount:a,transactions:e}=o.exports.useContext(E);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:t("div",{className:"flex flex-col md:p-12 px-12 px-4",children:[a?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions "}):f("h3",{className:"text-white text-3xl text-center my-2"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:e.reverse().map((s,c)=>f(N0,I({},s),c))})]})})},x="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",T0=()=>{const{connectWallet:a,currentAccount:e,formData:s,sendTransaction:c,handleChange:n,isLoading:l}=o.exports.useContext(E),i=({placeholder:u,name:p,type:y,value:w,handleChange:g})=>f("input",{placeholder:u,type:y,step:"0.0001",value:w,onChange:v=>g(v,p),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),m=u=>{const{addressTo:p,amount:y,keyword:w,message:g}=s;u.preventDefault(),!(!p||!y||!w||!g)&&c()};return f("div",{className:"flex w-full justify-center",children:t("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-10 px-12 py-4",children:[t("div",{className:"flex flex-1 justify-start flex-col mf:mr-10 ",children:[t("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto ",f("br",{})," across the world"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore the crypto world. Buy and sell cryptocurrencies easly on Krypto."}),!e&&f("button",{type:"button",onClick:a,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),t("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${x}`,children:"Reliability"}),f("div",{className:x,children:"Security"}),f("div",{className:`rounded-tr-2xl ${x}`,children:"Ethereum"}),f("div",{className:`rounded-bl-2xl ${x}`,children:"Web 3.0"}),f("div",{className:x,children:"Low-Fees"}),f("div",{className:`rounded-br-2xl ${x}`,children:"Blockchain"})]})]}),t("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 justify-end items-sart flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmopism",children:t("div",{className:"flex justify-between flex-col w-full h-full",children:[t("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(V,{fontSize:21,color:"#fff"})}),f(Z,{fontSize:17,color:"#fff"})]}),t("div",{children:[t("p",{className:"text-white font-light text-sm",children:["Address : ",k(e)]}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),t("div",{className:"ethereum-form p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(i,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:n}),f(i,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:n}),f(i,{placeholder:"Keyword (Gif)",name:"keyword",type:"text",handleChange:n}),f(i,{placeholder:"Enter Message",name:"message",type:"text",handleChange:n}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),l?f(s0,{}):f("button",{className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",type:"button",onClick:m,children:"Send Now"})]})]})]})})};function j0(){return t("div",{className:"min-h-screen",children:[t("div",{className:"gradient-bg-welcome",children:[f(n0,{}),f(T0,{})]}),f(r0,{}),f(v0,{}),f(a0,{})]})}f0.render(t(y0,{children:[f(A.StrictMode,{children:f(j0,{})}),","]}),document.getElementById("root"));
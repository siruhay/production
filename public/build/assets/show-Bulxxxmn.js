import{_ as f,b as h,w as a,e as l,j as e,V,g as d,h as u,i,a2 as w,k as x,a6 as r,a7 as g,R as b,d as v,o as n,$ as y,az as m}from"./App-CGl17uA2.js";const k={name:"system-role-show"},C={class:"py-0"},$={class:"v-plain-table with-border-bottom w-100",style:{"border-spacing":"0px"}},B={class:"text-caption font-weight-bold"},U={class:"text-caption"};function N(z,s,D,F,R,T){const c=v("form-show");return n(),h(c,{"with-helpdesk":"","with-activity-logs":""},{default:a(({record:o,theme:p})=>[l(i,null,{default:a(()=>[l(V,{dense:""},{default:a(()=>[l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Page",modelValue:o.page_name,"onUpdate:modelValue":t=>o.page_name=t,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(d,{cols:"12"},{default:a(()=>[l(u,{label:"Name",modelValue:o.name,"onUpdate:modelValue":t=>o.name=t,readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e("div",C,[l(x,null,{default:a(()=>[l(w,{color:`${p}`,size:"small",variant:"flat"},{default:a(()=>s[0]||(s[0]=[e("div",{class:"font-weight-medium text-lowercase"}," permissions ",-1)])),_:2},1032,["color"])]),_:2},1024)]),l(i,null,{default:a(()=>[e("table",$,[s[1]||(s[1]=e("colgroup",null,[e("col",{width:"48px"}),e("col",{width:"70px"}),e("col",{width:"auto"})],-1)),e("tbody",null,[(n(!0),r(b,null,g(o.permissions,(t,_)=>(n(),r("tr",{key:_},[e("td",null,[l(y,{"model-value":t.value,readonly:""},null,8,["model-value"])]),e("td",B,m(t.name),1),e("td",U,m(t.slug),1)]))),128))])])]),_:2},1024)]),_:1})}const E=f(k,[["render",N]]);export{E as default};

import{_ as d,ay as p,c as f,w as r,a as c,f as h,r as _,o as i}from"./desktop-DoxntJqb.js";import{V}from"./VAutocomplete-D1u9TUw-.js";const b={name:"system-role-create",methods:{searchUser:p(function(e,t){e&&this.$http("system/api/user/search",{method:"GET",params:{search:e.trim()}}).then(s=>{t.combos.users=s})},300)}};function U(e,t,s,x,$,n){const m=_("form-create");return i(),f(m,{"with-helpdesk":""},{default:r(({combos:{users:l},record:o,store:u})=>[c(h,null,{default:r(()=>[c(V,{items:l,"return-object":!1,label:"Pengguna",modelValue:o.name,"onUpdate:modelValue":a=>o.name=a,"onUpdate:search":a=>n.searchUser(a,u),clearable:""},null,8,["items","modelValue","onUpdate:modelValue","onUpdate:search"])]),_:2},1024)]),_:1})}const y=d(b,[["render",U]]);export{y as default};

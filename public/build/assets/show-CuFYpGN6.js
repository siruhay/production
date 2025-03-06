import{_ as g,b as f,w as l,j as b,e,k as U,f as k,g as o,l as u,m as i,V as p,az as $,a2 as h,h as r,n as y,i as w,d as T,o as V}from"./App-CGl17uA2.js";import{V as v}from"./VCombobox-bRYiiTZ0.js";const S={name:"training-event-show",methods:{postSubmission:function(d){this.$http(`training/api/event/${d.id}/submission`,{method:"POST",params:d}).then(()=>{this.$router.push({name:"training-event"})})}}},c={class:"position-absolute",style:{top:"0",right:"0"}};function D(d,a,N,A,R,_){const C=T("form-show");return V(),f(C,{"with-helpdesk":""},{default:l(({combos:{subdistricts:n,villages:m},record:t})=>[b("div",c,[e(h,{class:"mt-3 mr-4",color:"blue",size:"small"},{default:l(()=>[i($(t.status),1)]),_:2},1024)]),e(w,null,{default:l(()=>[e(p,{dense:""},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(r,{label:"Name",modelValue:t.name,"onUpdate:modelValue":s=>t.name=s,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:l(()=>[e(r,{label:"Mulai",type:"date",modelValue:t.startdate,"onUpdate:modelValue":s=>t.startdate=s,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:l(()=>[e(r,{label:"Selesai",type:"date",modelValue:t.finishdate,"onUpdate:modelValue":s=>t.finishdate=s,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"4"},{default:l(()=>[e(y,{items:["LKD","DESA"],label:"Target",modelValue:t.mode,"onUpdate:modelValue":s=>t.mode=s,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:l(()=>[e(v,{items:n,"return-object":!1,label:"Kecamatan",modelValue:t.subdistrict_id,"onUpdate:modelValue":s=>t.subdistrict_id=s,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(o,{cols:"6"},{default:l(()=>[e(v,{items:m,"return-object":!1,label:"Kelurahan/Desa",modelValue:t.village_id,"onUpdate:modelValue":s=>t.village_id=s,"hide-details":"",readonly:""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),info:l(({record:n,theme:m})=>[a[9]||(a[9]=b("div",{class:"text-overline mt-4"},"Aksi",-1)),e(U,{class:"mb-3"}),e(p,{dense:""},{default:l(()=>[e(o,{cols:"4"},{default:l(()=>[e(u,{color:m,variant:"flat",block:"",onClick:a[0]||(a[0]=t=>d.$router.push({name:"training-committee"}))},{default:l(()=>a[3]||(a[3]=[i("komite")])),_:2},1032,["color"])]),_:2},1024),e(o,{cols:"4"},{default:l(()=>[e(u,{color:m,variant:"flat",block:"",onClick:a[1]||(a[1]=t=>d.$router.push({name:"training-participant"}))},{default:l(()=>a[4]||(a[4]=[i("Peserta")])),_:2},1032,["color"])]),_:2},1024),e(o,{cols:"4"},{default:l(()=>[e(u,{color:m,variant:"flat",block:"",onClick:a[2]||(a[2]=t=>d.$router.push({name:"training-rundown"}))},{default:l(()=>a[5]||(a[5]=[i("rundown")])),_:2},1032,["color"])]),_:2},1024),n.status==="DRAFTED"?(V(),f(o,{key:0,cols:"12"},{default:l(()=>[e(u,{disabled:!(n.hasCommittee&&n.hasParticipant&&n.hasRundown),color:"deep-orange",variant:"flat",block:"",onClick:t=>_.postSubmission(n)},{default:l(()=>a[6]||(a[6]=[i("KIRIM PERMOHONAN")])),_:2},1032,["disabled","onClick"])]),_:2},1024)):k("",!0),n.status==="SUBMITTED"?(V(),f(o,{key:1,cols:"12"},{default:l(()=>[e(p,{dense:""},{default:l(()=>[e(o,{cols:"6"},{default:l(()=>[e(u,{color:"deep-orange",variant:"flat",block:"",onClick:t=>d.postRejected(n)},{default:l(()=>a[7]||(a[7]=[i("TOLAK")])),_:2},1032,["onClick"])]),_:2},1024),e(o,{cols:"6"},{default:l(()=>[e(u,{color:"green",variant:"flat",block:"",onClick:t=>d.postAssigned(n)},{default:l(()=>a[8]||(a[8]=[i("SETUJUI")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)):k("",!0)]),_:2},1024)]),_:1})}const K=g(S,[["render",D]]);export{K as default};

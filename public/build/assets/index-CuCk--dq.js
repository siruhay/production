import{p as aa,q as ea,z as fa,s as X,x as N,K as ta,l as b,e,W as R,aV as la,L as ca,N as pa,aW as ma,aX as ga,aY as ba,R as G,v as va,aZ as ha,a_ as ka,a$ as x,b0 as wa,aO as _a,b1 as Y,aj as ya,b2 as na,b3 as D,b4 as Va,b5 as xa,b6 as Ca,b7 as Sa,_ as Ta,b as C,w as n,d as q,o as u,j as d,a2 as $a,a8 as B,S as y,k as I,ab as M,i as h,V as L,g as S,h as F,n as J,aG as O,m as g,a9 as k,f as j,aa as Z,aI as Pa,a6 as Aa,a7 as Ua}from"./App-BBQ8l9BG.js";import{V as Ba}from"./VOtpInput-cqNIVuAE.js";const ja=ea({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...pa(ma({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),z=aa()({name:"VTab",props:ja(),setup(a,t){let{slots:c,attrs:s}=t;const{textColorClasses:V,textColorStyles:r}=fa(a,"sliderColor"),w=X(),T=X(),p=N(()=>a.direction==="horizontal"),o=N(()=>{var m,l;return((l=(m=w.value)==null?void 0:m.group)==null?void 0:l.isSelected.value)??!1});function f(m){var i,_;let{value:l}=m;if(l){const v=(_=(i=w.value)==null?void 0:i.$el.parentElement)==null?void 0:_.querySelector(".v-tab--selected .v-tab__slider"),K=T.value;if(!v||!K)return;const oa=getComputedStyle(v).color,$=v.getBoundingClientRect(),P=K.getBoundingClientRect(),E=p.value?"x":"y",H=p.value?"X":"Y",W=p.value?"right":"bottom",A=p.value?"width":"height",sa=$[E],ia=P[E],U=sa>ia?$[W]-P[W]:$[E]-P[E],da=Math.sign(U)>0?p.value?"right":"bottom":Math.sign(U)<0?p.value?"left":"top":"center",ua=(Math.abs(U)+(Math.sign(U)<0?$[A]:P[A]))/Math.max($[A],P[A])||0,ra=$[A]/P[A]||0,Q=1.5;ga(K,{backgroundColor:[oa,"currentcolor"],transform:[`translate${H}(${U}px) scale${H}(${ra})`,`translate${H}(${U/Q}px) scale${H}(${(ua-1)/Q+1})`,"none"],transformOrigin:Array(3).fill(da)},{duration:225,easing:ba})}}return ta(()=>{const m=b.filterProps(a);return e(b,R({symbol:la,ref:w,class:["v-tab",a.class],style:a.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},m,s,{block:a.fixed,maxWidth:a.fixed?300:void 0,"onGroup:selected":f}),{...c,default:()=>{var l;return e(G,null,[((l=c.default)==null?void 0:l.call(c))??a.text,!a.hideSlider&&e("div",{ref:T,class:["v-tab__slider",V.value],style:r.value},null)])}})}),ca({},w)}});function Ia(a){return a?a.map(t=>Sa(t)?t:{text:t,value:t}):[]}const Fa=ea({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ca({mandatory:"force",selectedClass:"v-tab-item--selected"}),...xa(),...Va()},"VTabs"),Oa=aa()({name:"VTabs",props:Fa(),emits:{"update:modelValue":a=>!0},setup(a,t){let{attrs:c,slots:s}=t;const V=va(a,"modelValue"),r=N(()=>Ia(a.items)),{densityClasses:w}=ha(a),{backgroundColorClasses:T,backgroundColorStyles:p}=ka(x(a,"bgColor")),{scopeId:o}=wa();return _a({VTab:{color:x(a,"color"),direction:x(a,"direction"),stacked:x(a,"stacked"),fixed:x(a,"fixedTabs"),sliderColor:x(a,"sliderColor"),hideSlider:x(a,"hideSlider")}}),ta(()=>{const f=Y.filterProps(a),m=!!(s.window||a.items.length>0);return e(G,null,[e(Y,R(f,{modelValue:V.value,"onUpdate:modelValue":l=>V.value=l,class:["v-tabs",`v-tabs--${a.direction}`,`v-tabs--align-tabs-${a.alignTabs}`,{"v-tabs--fixed-tabs":a.fixedTabs,"v-tabs--grow":a.grow,"v-tabs--stacked":a.stacked},w.value,T.value,a.class],style:[{"--v-tabs-height":ya(a.height)},p.value,a.style],role:"tablist",symbol:la},o,c),{default:()=>{var l;return[((l=s.default)==null?void 0:l.call(s))??r.value.map(i=>{var _;return((_=s.tab)==null?void 0:_.call(s,{item:i}))??e(z,R(i,{key:i.text,value:i.value}),{default:s[`tab.${i.value}`]?()=>{var v;return(v=s[`tab.${i.value}`])==null?void 0:v.call(s,{item:i})}:void 0})})]}}),m&&e(na,R({modelValue:V.value,"onUpdate:modelValue":l=>V.value=l,key:"tabs-window"},o),{default:()=>{var l;return[r.value.map(i=>{var _;return((_=s.item)==null?void 0:_.call(s,{item:i}))??e(D,{value:i.value},{default:()=>{var v;return(v=s[`item.${i.value}`])==null?void 0:v.call(s,{item:i})}})}),(l=s.window)==null?void 0:l.call(s)]}})])}),{}}}),Da={name:"account-setting",computed:{tabTitle:function(){switch(this.tabSelected){case"password":return"Katasandi";case"twofactor":return"Dua Faktor Otentikasi";case"sessions":return"Sesi Browser";default:return"Pengguna"}}},data:()=>({tabSelected:"account",svgQrCode:null,visible:!1,show1:!1,show2:!1,show3:!1}),methods:{confirmTwoFactorAuthentication:function(a){this.$http("account/api/setting/confirmed-factor-authentication",{method:"POST",params:{code:a.otp_two_factor}}).then(()=>{a.confirmed_two_factor=!0}).catch(()=>{a.otp_two_factor=null})},disableTwoFactorAuthentication:function(a){this.$http("account/api/setting/two-factor-authentication",{method:"DELETE"}).then(()=>{a.svg_two_factor=null,a.enabled_two_factor=!1,a.confirmed_two_factor=!1,a.url_two_factor=null})},enableTwoFactorAuthentication:function(a){this.$http("account/api/setting/two-factor-authentication",{method:"POST"}).then(({recovery:t,svg:c,url:s})=>{a.svg_two_factor=c,a.enabled_two_factor=!0,a.recovery_code_two_factor=t,a.url_two_factor=s})},logoutOtherDevices:function(a,t){typeof a=="function"&&a(),this.$http("account/api/setting/logout-other-devices",{method:"POST",params:{password:t.password}}).then(({sessions:c})=>{t.sessions=c})},updateHighlight:function(a,t){t.highlight=a},updatePassword:function(a){this.$http("account/api/setting/update-password",{method:"POST",params:{current_password:a.current_password,password:a.password,password_confirmation:a.password_confirmation}})},updateProfile:function(a){this.$http("account/api/setting/update-profile",{method:"POST",params:a}).then(({auth:t})=>{this.auth=t,this.$storage.setItem("auth",t),this.theme="theme"in this.auth?this.auth.theme:"teal"})},updateTheme:function(a,t){t.theme=a}}},za={class:"d-flex align-center my-4"},Ea={class:"font-weight-medium text-caption text-uppercase"},Ha={key:0,class:"text-grey-darken-1"},Ma={key:1,class:"text-grey-darken-1"},Ra=["innerHTML"],Ga={key:2,class:"text-grey-darken-1"},Ka={class:"d-flex mt-4 justify-center bg-yellow-lighten-5 py-4 rounded-lg"},La={class:"text-center"},Na={class:"d-flex align-center w-100 pb-2"},Wa={class:"d-block flex-grow-1 mx-2"},Qa={class:"text-caption font-weight-bold"},Xa={class:"text-caption",style:{"font-size":"10px !important"}},Ya={key:0,class:"text-green"},qa={key:1},Ja={class:"d-flex px-6 pb-6"};function Za(a,t,c,s,V,r){const w=q("page-paper"),T=q("page-blank");return u(),C(T,{"page-name":"account-setting","page-key":"setting",title:"setting","show-sidenav":""},{default:n(({combos:{colors:p},record:o,theme:f,store:m})=>[e(w,null,{default:n(()=>[d("div",za,[e($a,{color:`${f}`,class:"mx-auto",size:"small",variant:"flat"},{default:n(()=>[d("div",Ea,B(r.tabTitle),1)]),_:2},1032,["color"])]),e(Oa,{"align-tabs":"center",color:"primary",modelValue:a.tabSelected,"onUpdate:modelValue":t[0]||(t[0]=l=>a.tabSelected=l),stacked:""},{default:n(()=>[e(z,{value:"account"},{default:n(()=>[e(y,{icon:"person"})]),_:1}),e(z,{value:"password"},{default:n(()=>[e(y,{icon:"lock"})]),_:1}),e(z,{value:"twofactor"},{default:n(()=>[e(y,{icon:"encrypted"})]),_:1}),e(z,{value:"sessions"},{default:n(()=>[e(y,{icon:"settings_cinematic_blur"})]),_:1})]),_:1},8,["modelValue"]),e(I),e(na,{modelValue:a.tabSelected,"onUpdate:modelValue":t[5]||(t[5]=l=>a.tabSelected=l)},{default:n(()=>[e(D,{value:"account"},{default:n(()=>[e(M,{class:"mx-auto","max-width":"400"},{default:n(()=>[e(h,null,{default:n(()=>[e(L,null,{default:n(()=>[e(S,{cols:"12"},{default:n(()=>[e(F,{label:"Nama Pengguna",modelValue:o.username,"onUpdate:modelValue":l=>o.username=l,"hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(S,{cols:"12"},{default:n(()=>[e(J,{items:p,label:"Thema",modelValue:o.theme,"onUpdate:modelValue":[l=>o.theme=l,l=>r.updateTheme(l,m)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),e(S,{cols:"12"},{default:n(()=>[e(J,{items:p,label:"Highlight",modelValue:o.highlight,"onUpdate:modelValue":[l=>o.highlight=l,l=>r.updateHighlight(l,m)],"hide-details":""},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(I),e(h,{class:"d-flex"},{default:n(()=>[e(O),e(b,{color:f,variant:"flat",onClick:l=>r.updateProfile(o)},{default:n(()=>t[6]||(t[6]=[g("update profile")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(D,{value:"password"},{default:n(()=>[e(M,{class:"mx-auto","max-width":"400"},{default:n(()=>[e(h,null,{default:n(()=>[e(L,null,{default:n(()=>[e(S,{cols:"12"},{default:n(()=>[e(F,{type:a.show1?"text":"password","append-inner-icon":a.show1?"visibility":"visibility_off",label:"Saat ini",modelValue:o.current_password,"onUpdate:modelValue":l=>o.current_password=l,"hide-details":"","onClick:appendInner":t[1]||(t[1]=l=>a.show1=!a.show1)},null,8,["type","append-inner-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),e(S,{cols:"12"},{default:n(()=>[e(F,{type:a.show2?"text":"password","append-inner-icon":a.show2?"visibility":"visibility_off",label:"Sandi Baru",modelValue:o.password,"onUpdate:modelValue":l=>o.password=l,"hide-details":"","onClick:appendInner":t[2]||(t[2]=l=>a.show2=!a.show2)},null,8,["type","append-inner-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),e(S,{cols:"12"},{default:n(()=>[e(F,{type:a.show3?"text":"password","append-inner-icon":a.show3?"visibility":"visibility_off",label:"Konfirmasi",modelValue:o.password_confirmation,"onUpdate:modelValue":l=>o.password_confirmation=l,"hide-details":"","onClick:appendInner":t[3]||(t[3]=l=>a.show3=!a.show3)},null,8,["type","append-inner-icon","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(I),e(h,{class:"d-flex"},{default:n(()=>[e(O),e(b,{color:f,variant:"flat",onClick:l=>r.updatePassword(o)},{default:n(()=>t[7]||(t[7]=[g("update katasandi")])),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(D,{value:"twofactor"},{default:n(()=>[e(M,{class:"mx-auto","max-width":"400"},{default:n(()=>[e(h,null,{default:n(()=>[!o.enabled_two_factor&&!o.confirmed_two_factor?(u(),k("div",Ha,t[8]||(t[8]=[d("p",{class:"text-justify"}," Anda belum mengaktifkan fitur otentifikasi dua langkah ",-1),d("p",{class:"mt-3 text-justify"}," Saat fitur otentifikasi dua langkah di aktifkan, Anda akan di minta untuk scan kode QR dan meng-input token keamanan. Anda akan mendapatkan token ini melalui aplikasi Google Authenticator di handphone. ",-1)]))):j("",!0),o.enabled_two_factor&&!o.confirmed_two_factor?(u(),k("div",Ma,[t[9]||(t[9]=d("p",{class:"text-justify"}," Silahkan scan QR code di bawah menggunakan aplikasi Google Authenticator di handphone Anda. ",-1)),d("div",{class:"d-flex align-center justify-center py-4",innerHTML:o.svg_two_factor},null,8,Ra),t[10]||(t[10]=d("p",{class:"text-justify"}," Silahkan masukan token dari aplikasi Google Authenticator untuk konfirmasi aktivasi fitur ini. ",-1)),t[11]||(t[11]=d("div",{class:"text-overline text-center"}," token konfirmasi ",-1)),e(Ba,{label:"Konfirmasi",length:"6",modelValue:o.otp_two_factor,"onUpdate:modelValue":l=>o.otp_two_factor=l},null,8,["modelValue","onUpdate:modelValue"])])):j("",!0),o.enabled_two_factor&&o.confirmed_two_factor?(u(),k("div",Ga,[t[12]||(t[12]=d("p",null," Fitur otentifikasi dua langkah sekarang telah aktif. ",-1)),t[13]||(t[13]=d("p",{class:"mt-3 text-justify"}," Simpan kode pemulihan dibawah ini pada tempat yang aman. Kode ini dapat di gunakan untuk memulihkan kembali akses dua langkah otentifikasi akun Anda jika perangkat hilang. ",-1)),d("div",Ka,[d("code",La,[(u(!0),k(G,null,Z(o.recovery_code_two_factor,(l,i)=>(u(),k("p",{key:i},B(l),1))),128))])])])):j("",!0)]),_:2},1024),e(I),e(h,{class:"d-flex"},{default:n(()=>[e(O),o.enabled_two_factor&&!o.confirmed_two_factor?(u(),C(b,{key:0,color:f,variant:"flat",onClick:l=>r.confirmTwoFactorAuthentication(o)},{default:n(()=>t[14]||(t[14]=[g("konfirmasi")])),_:2},1032,["color","onClick"])):j("",!0),o.enabled_two_factor?(u(),C(b,{key:1,color:"deep-orange",class:"ml-2",variant:"flat",onClick:l=>r.disableTwoFactorAuthentication(o)},{default:n(()=>t[15]||(t[15]=[g("hapus")])),_:2},1032,["onClick"])):j("",!0),o.enabled_two_factor?j("",!0):(u(),C(b,{key:2,color:f,variant:"flat",onClick:l=>r.enableTwoFactorAuthentication(o)},{default:n(()=>t[16]||(t[16]=[g("Aktifkan Fitur")])),_:2},1032,["color","onClick"]))]),_:2},1024)]),_:2},1024)]),_:2},1024),e(D,{value:"sessions"},{default:n(()=>[e(M,{class:"mx-auto","max-width":"400"},{default:n(()=>[e(h,null,{default:n(()=>[t[21]||(t[21]=d("div",{class:"text-grey-darken-1 mb-4"},[d("p",null," Jika diperlukan, Anda dapat keluar dari semua sesi di semua device yang pernah terhubung. "),d("p",{class:"mt-3"}," list dibawah ini adalah beberapa sesi terbaru Anda. Daftar ini mungkin tidak lengkap, jika Anda merasa bahwa akun Anda telah disusupi. Anda juga harus meng-update Katasandi. ")],-1)),(u(!0),k(G,null,Z(o.sessions,(l,i)=>(u(),k("div",{key:i,class:Pa([{"mt-2":i>0},"d-block text-grey-darken-1"])},[d("div",Na,[l.agent.is_mobile?(u(),C(y,{key:0},{default:n(()=>t[17]||(t[17]=[g("phone_iphone")])),_:1})):l.agent.is_tablet?(u(),C(y,{key:1},{default:n(()=>t[18]||(t[18]=[g("tablet_mac")])),_:1})):(u(),C(y,{key:2},{default:n(()=>t[19]||(t[19]=[g("computer")])),_:1})),d("div",Wa,[d("div",Qa,B(l.agent.platform)+" - "+B(l.agent.browser),1),d("div",Xa,[g(" IP: "+B(l.ip_address)+", ",1),l.is_current_device?(u(),k("span",Ya,"This device")):(u(),k("span",qa,"Last activity: "+B(l.last_active),1))])]),e(b,{color:f,density:"compact",variant:"flat",rounded:"lg",icon:""},{default:n(()=>[e(y,{size:"small"},{default:n(()=>t[20]||(t[20]=[g("map")])),_:1})]),_:2},1032,["color"])]),e(I)],2))),128))]),_:2},1024),e(h,{class:"d-flex pt-1"},{default:n(()=>[e(O),e(b,{color:f,variant:"flat"},{default:n(()=>[t[23]||(t[23]=g(" Hapus Sesi Lainnya ")),e(Aa,{activator:"parent","max-width":"340"},{default:n(({isActive:l})=>[e(Ua,{"prepend-icon":"delete",title:"Hapus Sesi Lainnya?"},{default:n(()=>[e(h,null,{default:n(()=>[t[22]||(t[22]=d("p",{class:"text-caption text-justify mb-4"}," Untuk menghapus sesi browser yang lain, silahkan masukan katasandi Anda pada input di bawah ini. ",-1)),e(L,null,{default:n(()=>[e(S,{cols:"12"},{default:n(()=>[e(F,{"append-inner-icon":a.visible?"visibility":"visibility_off",type:a.visible?"text":"password",label:"Katasandi",placeholder:"Masukan Katasandi",modelValue:o.password,"onUpdate:modelValue":i=>o.password=i,"hide-details":"","onClick:appendInner":t[4]||(t[4]=i=>a.visible=!a.visible)},null,8,["append-inner-icon","type","modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),d("div",Ja,[e(O),e(b,{color:f,text:"Batal",onClick:i=>l.value=!1},null,8,["color","onClick"]),e(b,{color:"deep-orange",class:"ml-2",text:"Hapus",variant:"flat",onClick:i=>r.logoutOtherDevices(()=>l.value=!1,o)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1024)]),_:1})}const le=Ta(Da,[["render",Za]]);export{le as default};

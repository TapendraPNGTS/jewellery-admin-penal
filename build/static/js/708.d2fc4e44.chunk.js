"use strict";(self.webpackChunkpolity_admin_panel=self.webpackChunkpolity_admin_panel||[]).push([[708],{5257:function(e,t,i){var r=i(8833),s=i(8559),n=i(1493);class a extends n.Z{constructor(){super("https://polity-api.ankitchawda.in/api/"),this._initializeRequestInterceptor=()=>{this.instance.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${(0,r.aO)()}`,e)))},this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use((e=>e),(e=>Promise.resolve(e)))},this.AllMemberListConfig=s.Z.MemberList.All,this.MemberListByIdConfig=s.Z.MemberList.MemberById,this.FamilyMemberListByIdConfig=s.Z.MemberList.FamilyMemberById,this.AddMemberListConfig=s.Z.MemberList.AddMember,this.EditMemberListConfig=s.Z.MemberList.EditMember,this.DeleteMemberListConfig=s.Z.MemberList.DeleteMember,this.getAllMember=async()=>this.instance({method:this.AllMemberListConfig.Method,url:this.AllMemberListConfig.Endpoint,headers:{},data:null}),this.getMemberById=async e=>this.instance({method:this.MemberListByIdConfig.Method,url:this.MemberListByIdConfig.Endpoint,headers:{},data:e}),this.getFamilyMemberById=async e=>this.instance({method:this.FamilyMemberListByIdConfig.Method,url:this.FamilyMemberListByIdConfig.Endpoint,headers:{},data:e}),this.addMember=async e=>this.instance({method:this.AddMemberListConfig.Method,url:this.AddMemberListConfig.Endpoint,headers:{},data:e}),this.editMember=async e=>this.instance({method:this.EditMemberListConfig.Method,url:this.EditMemberListConfig.Endpoint,headers:{},data:e}),this.deleteMember=async e=>this.instance({method:this.DeleteMemberListConfig.Method,url:this.DeleteMemberListConfig.Endpoint,headers:{},data:e}),this._initializeRequestInterceptor(),this._initializeResponseInterceptor()}}t.Z=a},7708:function(e,t,i){i.r(t),i.d(t,{default:function(){return A}});var r=i(2791),s=i(1889),n=i(7621),a=i(5527),d=i(3746),l=i(7247),o=i(1286),h=i(3400),c=i(3504),m=i(3735),b=i(1923),g=i(9836),u=i(3382),x=i(3994),Z=i(9281),M=i(6890),j=i(6812),f=i(5855),p=i(6871),y=i(8550),v=i(5218),C=i(9434),L=i(5257),w=i(4341),I=i(184);function A(){(0,p.s0)();const e=(0,C.I0)(),t=new L.Z,i=(0,C.v9)((e=>e.member.Voters)),[A,z]=r.useState(""),[B,S]=r.useState(0),[E,k]=(0,r.useState)(10),P=(0,r.useCallback)((async()=>{try{const i=await t.getAllMember();return i&&i.data.data?void e((0,w.RN)(i.data.data)):v.Am.error("no latest member available")}catch(i){throw console.error(i),v.Am.error("Something went wrong"),i}}));return(0,r.useEffect)((()=>{P()}),[]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(m.Z,{title:(0,I.jsx)(s.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:b.dv,children:(0,I.jsx)(s.ZP,{item:!0,xs:12,md:12,children:(0,I.jsx)(y.Z,{fullWidth:!0,id:"outlined-search",label:"Search field",type:"search",onChange:e=>{z(e.target.value)}})})}),content:!1,children:i?(0,I.jsx)(n.Z,{children:(0,I.jsxs)(a.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,I.jsx)(Z.Z,{sx:{maxHeight:540},children:(0,I.jsxs)(g.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,I.jsx)(M.Z,{children:(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(x.Z,{sx:{pl:3},children:"S No."}),(0,I.jsx)(x.Z,{children:"Date Time"}),(0,I.jsx)(x.Z,{children:"Name"}),(0,I.jsx)(x.Z,{children:"Father Name"}),(0,I.jsx)(x.Z,{children:"Gender"}),(0,I.jsx)(x.Z,{children:"Voter ID"}),(0,I.jsx)(x.Z,{children:"Booth"}),(0,I.jsx)(x.Z,{children:"Action"})]})}),(0,I.jsx)(u.Z,{children:i.filter((e=>""===A.toLowerCase()?e:e.title.toLowerCase().includes(A))).slice(B*E,B*E+E).map(((e,i)=>{return(0,I.jsxs)(f.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,I.jsx)(x.Z,{align:"start",children:i+1}),(0,I.jsx)(x.Z,{align:"start",children:e.createdAt?(r=e.createdAt,new Date(r).toLocaleString("en-us",{day:"numeric",month:"short",year:"numeric"})):"-"}),(0,I.jsx)(x.Z,{align:"start",children:e.name}),(0,I.jsx)(x.Z,{align:"start",children:e.fatherName}),(0,I.jsx)(x.Z,{align:"start",children:e.voterId}),(0,I.jsx)(x.Z,{align:"start",children:e.boothId.title}),(0,I.jsx)(x.Z,{align:"start",children:e.gender}),(0,I.jsxs)(x.Z,{children:[(0,I.jsx)(c.rU,{to:`/view-member/${e.voterId}`,children:(0,I.jsx)(h.Z,{color:"primary","aria-label":"view",size:"large",children:(0,I.jsx)(d.Z,{sx:{fontSize:"1.1rem"}})})}),(0,I.jsx)(c.rU,{to:`/edit-member/${e.voterId}`,children:(0,I.jsx)(h.Z,{color:"primary","aria-label":"view",size:"large",children:(0,I.jsx)(o.Z,{sx:{fontSize:"1.1rem"}})})}),(0,I.jsx)(h.Z,{onClick:i=>{(async e=>{try{var i;const s=await t.deleteMember({voterId:e});return s&&200===(null===s||void 0===s||null===(i=s.data)||void 0===i?void 0:i.code)?(P(),v.Am.success("Deleted Successfully")):v.Am.error(null===(r=s.data)||void 0===r?void 0:r.message);var r}catch(s){throw console.error(s),v.Am.error("Something went wrong"),s}})(e.voterId)},color:"primary","aria-label":"view",size:"large",children:(0,I.jsx)(l.Z,{sx:{fontSize:"1.1rem"}})})]})]},i);var r}))})]})}),(0,I.jsx)(j.Z,{rowsPerPageOptions:[10,20,100],component:"div",count:i.length,rowsPerPage:E,page:B,onPageChange:(e,t)=>{S(t)},onRowsPerPageChange:e=>{k(+e.target.value),S(0)}})]})}):(0,I.jsx)("h6",{children:"Loading..."})})})}},3746:function(e,t,i){var r=i(4836);t.Z=void 0;var s=r(i(5649)),n=i(184),a=(0,s.default)((0,n.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=a}}]);
//# sourceMappingURL=708.d2fc4e44.chunk.js.map
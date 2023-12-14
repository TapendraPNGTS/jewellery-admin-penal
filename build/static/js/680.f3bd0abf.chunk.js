"use strict";(self.webpackChunkpolity_admin_panel=self.webpackChunkpolity_admin_panel||[]).push([[680],{9680:function(e,n,s){s.r(n),s.d(n,{default:function(){return V}});var t=s(3504),r=s(3967),i=s(5193),o=s(1889),a=s(1582),l=s(890),d=s(4721);var c=(0,s(6934).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}})),u=s(4554),h=s(3735),m=s(184);var x=e=>{let{children:n,...s}=e;return(0,m.jsx)(h.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...s,children:(0,m.jsx)(u.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})},p=s(2791),g=s(6871),j=s(8096),Z=s(4925),b=s(8029),w=s(7071),f=s(3466),y=s(3400),v=s(5523),C=s(4454),P=s(6151),k=s(4209),I=s(2506);var S=()=>{const e=(0,p.useRef)(!0);return(0,p.useEffect)((()=>()=>{e.current=!1}),[]),e},_=s(4535),q=s(3746),B=s(165),z=s(8833),R=s(8559),A=s(1493);class W extends A.Z{constructor(){super("https://polity-api.ankitchawda.in/api/"),this._initializeRequestInterceptor=()=>{this.instance.interceptors.request.use((e=>(e.headers.Authorization=`Bearer ${(0,z.aO)()}`,e)))},this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use((e=>e),(e=>Promise.resolve(e)))},this.loginConfig=R.Z.Auth.Login,this.login=async e=>this.instance({method:this.loginConfig.Method,url:this.loginConfig.Endpoint,headers:{},data:e}),this._initializeRequestInterceptor(),this._initializeResponseInterceptor()}}var E=W,F=s(2813),H=s(9434),N=s(7173),M=s(5218);var D=e=>{let{...n}=e;const s=(0,g.s0)(),t=(0,H.I0)(),i=new E,o=(0,F.b)(),l=((0,z.qp)(),(0,r.Z)()),d=S(),[c,h]=(0,p.useState)(!0),[x,R]=(0,p.useState)(!1),A=()=>{R(!x)},W=e=>{e.preventDefault()};return o?(0,m.jsx)(g.Fg,{to:"/dashboard"}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(I.J9,{initialValues:{number:"",password:"",submit:null},validationSchema:k.Ry().shape({number:k.Z_().max(10).required("Number is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:r,setStatus:o,setSubmitting:a}=n;try{if(d.current){var l;const n=await i.login({number:e.number,password:e.password,type:"Admin"});if(console.log(n),!n||200!==(null===n||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code))return M.Am.error("Something went wrong!");t((0,N.jM)(n.data.data.token)),t((0,N.Nq)(n.data.data.user)),M.Am.success("Login successsfully"),s("/dashboard",{replace:!0}),o({success:!0}),a(!1)}}catch(c){console.error(c),d.current&&(o({success:!1}),r({submit:c.message}),a(!1))}},children:e=>{let{errors:s,handleBlur:t,handleChange:r,handleSubmit:i,isSubmitting:o,touched:d,values:p}=e;return(0,m.jsxs)("form",{noValidate:!0,onSubmit:i,...n,children:[(0,m.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.number&&s.number),sx:{...l.typography.customInput},children:[(0,m.jsx)(Z.Z,{htmlFor:"outlined-adornment-email-login",children:"Contact Number"}),(0,m.jsx)(b.Z,{id:"outlined-adornment-email-login",type:"number",value:p.number,name:"number",onBlur:t,onChange:r,label:"Contact Number",inputProps:{}}),d.number&&s.number&&(0,m.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:s.number})]}),(0,m.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.password&&s.password),sx:{...l.typography.customInput},children:[(0,m.jsx)(Z.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,m.jsx)(b.Z,{id:"outlined-adornment-password-login",type:x?"text":"password",value:p.password,name:"password",onBlur:t,onChange:r,endAdornment:(0,m.jsx)(f.Z,{position:"end",children:(0,m.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:A,onMouseDown:W,edge:"end",size:"large",children:x?(0,m.jsx)(q.Z,{}):(0,m.jsx)(B.Z,{})})}),label:"Password",inputProps:{}}),d.password&&s.password&&(0,m.jsx)(w.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),(0,m.jsx)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:(0,m.jsx)(v.Z,{control:(0,m.jsx)(C.Z,{checked:c,onChange:e=>h(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"})}),s.submit&&(0,m.jsx)(u.Z,{sx:{mt:3},children:(0,m.jsx)(w.Z,{error:!0,children:s.submit})}),(0,m.jsx)(u.Z,{sx:{mt:2},children:(0,m.jsx)(_.Z,{children:(0,m.jsx)(P.Z,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})})},L=s(8342);var V=()=>{const e=(0,r.Z)(),n=(0,i.Z)(e.breakpoints.down("md"));return(0,m.jsx)(c,{children:(0,m.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,m.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,m.jsx)(x,{children:(0,m.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,m.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,m.jsx)(t.rU,{to:"#",children:(0,m.jsx)("img",{src:L,width:150,height:120})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,m.jsx)(o.ZP,{item:!0,children:(0,m.jsx)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:(0,m.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"})})})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(D,{})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(d.Z,{})})]})})})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1}})]})})}}}]);
//# sourceMappingURL=680.f3bd0abf.chunk.js.map
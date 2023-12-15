"use strict";(self.webpackChunkERJ_admin_panel=self.webpackChunkERJ_admin_panel||[]).push([[500],{3500:function(t,e,a){a.r(e),a.d(e,{default:function(){return K}});var i=a(2791),n=a(1889),r=a(6934),s=a(3967),o=a(4554),d=a(3044),l=a(890),h=a(3735),c=a(7621),u=a(9504),m=a(3366),g=a(7462),p=a(3733),x=a(2554),v=a(4419);function b(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function j(t){return parseFloat(t)}var f=a(2065),Z=a(1402),w=a(5878),C=a(1217);function y(t){return(0,C.Z)("MuiSkeleton",t)}(0,w.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var P=a(184);const k=["animation","className","component","height","style","variant","width"];let S,R,T,A,_=t=>t;const z=(0,x.F4)(S||(S=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),L=(0,x.F4)(R||(R=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),D=(0,r.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((t=>{let{theme:e,ownerState:a}=t;const i=b(e.shape.borderRadius)||"px",n=j(e.shape.borderRadius);return(0,g.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,f.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${i}/${Math.round(n/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(t=>{let{ownerState:e}=t;return"pulse"===e.animation&&(0,x.iv)(T||(T=_`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),z)}),(t=>{let{ownerState:e,theme:a}=t;return"wave"===e.animation&&(0,x.iv)(A||(A=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),L,(a.vars||a).palette.action.hover)}));var $=i.forwardRef((function(t,e){const a=(0,Z.Z)({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:n,component:r="span",height:s,style:o,variant:d="text",width:l}=a,h=(0,m.Z)(a,k),c=(0,g.Z)({},a,{animation:i,component:r,variant:d,hasChildren:Boolean(h.children)}),u=(t=>{const{classes:e,variant:a,animation:i,hasChildren:n,width:r,height:s}=t,o={root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!s&&"heightAuto"]};return(0,v.Z)(o,y,e)})(c);return(0,P.jsx)(D,(0,g.Z)({as:r,ref:e,className:(0,p.Z)(u.root,n),ownerState:c},h,{style:(0,g.Z)({width:l,height:s},o)}))}));var M=()=>(0,P.jsx)(c.Z,{children:(0,P.jsx)(u.Z,{children:(0,P.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsxs)(n.ZP,{container:!0,justifyContent:"space-between",children:[(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)($,{variant:"rectangular",width:44,height:44})}),(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)($,{variant:"rectangular",width:34,height:34})})]})}),(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)($,{variant:"rectangular",sx:{my:2},height:40})}),(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)($,{variant:"rectangular",height:30})})]})})});var N=a.p+"static/media/earning.b019e86a7ee117bd6bb2e8cab90c0db5.svg",V=a(9861),F=a(8956);F.VUf,F.R0R,F.KNp,F.OQ8,F.kYC,F.SrG,F.k_6,F.jKT,F.PUC,F.ihu;const I=(0,r.ZP)(h.Z)((t=>{let{theme:e}=t;return{backgroundColor:e.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:e.palette.secondary[800],borderRadius:"50%",top:-85,right:-95,[e.breakpoints.down("sm")]:{top:-105,right:-140}},"&:before":{content:'""',position:"absolute",width:210,height:210,background:e.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5,[e.breakpoints.down("sm")]:{top:-155,right:-70}}}}));var q=t=>{let{isLoading:e,isCount:a,isTitle:i}=t;const r=(0,s.Z)();return(0,P.jsx)(P.Fragment,{children:e?(0,P.jsx)(M,{}):(0,P.jsx)(I,{border:!1,content:!1,children:(0,P.jsx)(o.Z,{sx:{p:2.25},children:(0,P.jsxs)(n.ZP,{container:!0,direction:"column",children:[(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)(n.ZP,{container:!0,justifyContent:"space-between",children:(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)(d.Z,{variant:"rounded",sx:{...r.typography.commonAvatar,...r.typography.largeAvatar,backgroundColor:r.palette.secondary[800],mt:1},children:(0,P.jsx)("img",{src:N,alt:"Notification"})})})})}),(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsxs)(n.ZP,{container:!0,alignItems:"center",children:[(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)(l.Z,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:a})}),(0,P.jsx)(n.ZP,{item:!0,children:(0,P.jsx)(d.Z,{sx:{cursor:"pointer",...r.typography.smallAvatar,backgroundColor:r.palette.secondary[200],color:r.palette.secondary.dark},children:(0,P.jsx)(V.Z,{fontSize:"inherit",sx:{transform:"rotate3d(1, 1, 1, 45deg)"}})})})]})}),(0,P.jsx)(n.ZP,{item:!0,sx:{mb:1.25},children:(0,P.jsx)(l.Z,{sx:{fontSize:"1rem",fontWeight:500,color:r.palette.secondary[200]},children:i})})]})})})})},E=a(1923),W=a(8833),X=a(8559),B=a(1493);class O extends B.Z{constructor(){super("https://api.eastridgejewelers.com/api/v1/"),this._initializeRequestInterceptor=()=>{this.instance.interceptors.request.use((t=>(t.headers.Authorization=`Bearer ${(0,W.aO)()}`,t)))},this._initializeResponseInterceptor=()=>{this.instance.interceptors.response.use((t=>t),(t=>Promise.resolve(t)))},this.DashboardConfig=X.Z.Dashboard.Data,this.getDashboard=async()=>this.instance({method:this.DashboardConfig.Method,url:this.DashboardConfig.Endpoint,headers:{},data:null}),this._initializeRequestInterceptor(),this._initializeResponseInterceptor()}}var U=O,J=a(5218);var K=()=>{const[t,e]=(0,i.useState)(!0),a=new U,[r,s]=(0,i.useState)(0),[o,d]=(0,i.useState)(0),[l,h]=(0,i.useState)(0),[c,u]=(0,i.useState)(0),[m,g]=(0,i.useState)(0),[p,x]=(0,i.useState)(0),[v,b]=(0,i.useState)([]),[j,f]=(0,i.useState)([]),Z=(0,i.useCallback)((async()=>{try{const r=await a.getDashboard();var t,i,n;return r&&r.data.data?(s(r.data.data.volunteer),d(r.data.data.booth),h(r.data.data.voter.allVoter),u(null===(t=r.data.data)||void 0===t?void 0:t.news),g(null===(i=r.data.data)||void 0===i?void 0:i.task),x(null===(n=r.data.data)||void 0===n?void 0:n.post),b([r.data.data.percentages.percentageMen,r.data.data.percentages.percentageWomen]),f(r.data.data.voterView),void e(!1)):J.Am.error("No Data  available")}catch(r){throw console.error(r),J.Am.error("Something went wrong"),r}}));return(0,i.useEffect)((()=>{Z()}),[]),(0,P.jsx)(n.ZP,{container:!0,spacing:E.dv,children:(0,P.jsx)(n.ZP,{item:!0,xs:12,children:(0,P.jsxs)(n.ZP,{container:!0,spacing:E.dv,children:[(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:r,isTitle:"Total Volunter"})}),(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:o,isTitle:"Total booth"})}),(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:l,isTitle:"Total Voters"})}),(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:c,isTitle:"Total News"})}),(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:m,isTitle:"Total Task"})}),(0,P.jsx)(n.ZP,{item:!0,lg:4,md:6,sm:6,xs:12,children:(0,P.jsx)(q,{isLoading:t,isCount:p,isTitle:"Total Post"})}),(0,P.jsx)(n.ZP,{item:!0,lg:6,md:6,sm:12,xs:12}),(0,P.jsx)(n.ZP,{item:!0,lg:6,md:6,sm:12,xs:12})]})})})}},9861:function(t,e,a){var i=a(4836);e.Z=void 0;var n=i(a(5649)),r=a(184),s=(0,n.default)((0,r.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");e.Z=s}}]);
//# sourceMappingURL=500.59972c9b.chunk.js.map
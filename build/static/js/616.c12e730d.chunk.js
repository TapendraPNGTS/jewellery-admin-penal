"use strict";(self.webpackChunkERJ_admin_panel=self.webpackChunkERJ_admin_panel||[]).push([[616],{2248:function(e,t,a){var o=a(6934),n=a(4925),r=a(184);const i=(0,o.ZP)((e=>(0,r.jsx)(n.Z,{...e})),{shouldForwardProp:e=>"horizontal"!==e})((e=>{let{theme:t,horizontal:a}=e;return{color:t.palette.text.primary,fontWeight:500,marginBottom:a?0:8}})),l=e=>{let{children:t,horizontal:a,...o}=e;return(0,r.jsx)(i,{horizontal:a,...o,children:t})};l.defaultProps={horizontal:!1},t.Z=l},2616:function(e,t,a){a.r(t);var o=a(2791),n=a(3735),r=a(2248),i=a(1923),l=a(6871),s=a(5218),d=a(6413),c=a(1889),u=a(1582),p=a(3006),h=a(6151),m=a(184);t.default=function(){const e=(0,l.s0)(),t=new d.Z,[a,v]=o.useState(""),[x,b]=o.useState(""),[g,S]=o.useState(""),[f,Z]=o.useState(""),[z,y]=o.useState("");return(0,m.jsx)(n.Z,{children:(0,m.jsxs)("form",{onSubmit:async function(o){var n;o.preventDefault();const r=await t.addUser({firstName:a,lastName:x,email:g,number:f});if(!r||200!==(null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.code))return s.Am.error("Something went wrong!");s.Am.success("Added successsfully"),e("/user",{replace:!0})},action:"#",children:[(0,m.jsxs)(c.ZP,{container:!0,spacing:i.dv,children:[(0,m.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(r.Z,{required:!0,children:"First Name"}),(0,m.jsx)(p.Z,{fullWidth:!0,id:"fname",name:"fname",value:a,onChange:e=>{v(e.target.value)}})]})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(r.Z,{required:!0,children:"Last Name"}),(0,m.jsx)(p.Z,{fullWidth:!0,id:"lname",name:"lname",value:x,onChange:e=>{b(e.target.value)}})]})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(r.Z,{required:!0,children:"Email"}),(0,m.jsx)(p.Z,{fullWidth:!0,id:"email",name:"email",value:g,onChange:e=>{S(e.target.value)}})]})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(r.Z,{required:!0,children:"Number"}),(0,m.jsx)(p.Z,{fullWidth:!0,id:"number",name:"number",type:"number",value:f,onChange:e=>{Z(e.target.value)}})]})}),(0,m.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(r.Z,{required:!0,children:"Password"}),(0,m.jsx)(p.Z,{id:"password",name:"password",type:"password",value:z,onChange:e=>y(e.target.value)})]})}),(0,m.jsx)("br",{})]}),(0,m.jsx)("br",{}),(0,m.jsx)("center",{children:(0,m.jsx)(h.Z,{variant:"contained",type:"submit",children:"Submit"})})]})})}},6151:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(3366),n=a(7462),r=a(2791),i=a(3733),l=a(5735),s=a(4419),d=a(2065),c=a(6934),u=a(1402),p=a(533),h=a(4036),m=a(5878),v=a(1217);function x(e){return(0,v.Z)("MuiButton",e)}var b=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=r.createContext({}),S=a(184);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`${a.variant}${(0,h.Z)(a.color)}`],t[`size${(0,h.Z)(a.size)}`],t[`${a.variant}Size${(0,h.Z)(a.size)}`],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:a}=e;var o,r;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],l="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,n.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(t.vars||t).palette[a.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[a.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${b.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${b.disabled}`]:(0,n.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"contained"===a.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(t.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:t.vars?t.vars.palette.text.primary:null==(o=(r=t.palette).getContrastText)?void 0:o.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}})),y=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},Z(t))})),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(a.size)}`]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},Z(t))}));var C=r.forwardRef((function(e,t){const a=r.useContext(g),d=(0,l.Z)(a,e),c=(0,u.Z)({props:d,name:"MuiButton"}),{children:p,color:m="primary",component:v="button",className:b,disabled:Z=!1,disableElevation:C=!1,disableFocusRipple:j=!1,endIcon:$,focusVisibleClassName:I,fullWidth:R=!1,size:k="medium",startIcon:W,type:P,variant:E="text"}=c,N=(0,o.Z)(c,f),B=(0,n.Z)({},c,{color:m,component:v,disabled:Z,disableElevation:C,disableFocusRipple:j,fullWidth:R,size:k,type:P,variant:E}),F=(e=>{const{color:t,disableElevation:a,fullWidth:o,size:r,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(r)}`,`${i}Size${(0,h.Z)(r)}`,"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(r)}`]},c=(0,s.Z)(d,x,l);return(0,n.Z)({},l,c)})(B),M=W&&(0,S.jsx)(y,{className:F.startIcon,ownerState:B,children:W}),q=$&&(0,S.jsx)(w,{className:F.endIcon,ownerState:B,children:$});return(0,S.jsxs)(z,(0,n.Z)({ownerState:B,className:(0,i.Z)(a.className,F.root,b),component:v,disabled:Z,focusRipple:!j,focusVisibleClassName:(0,i.Z)(F.focusVisible,I),ref:t,type:P},N,{classes:F,children:[M,p,q]}))}))}}]);
//# sourceMappingURL=616.c12e730d.chunk.js.map
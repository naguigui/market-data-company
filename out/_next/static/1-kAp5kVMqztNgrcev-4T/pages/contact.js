(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ALdH:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),i=n.n(a),r=n("O40h"),c=n("vYYK"),o=n("zrwo"),l=n("doui"),s=n("q1tI"),m=n.n(s),u=n("e+cM"),d=n("rt45"),p=n("vOnD"),f=n("ewKk");function h(){var e=Object(d.a)(["\n    font-size: 36px;\n    line-height: 42px;\n  "]);return h=function(){return e},e}var g=p.d.div.withConfig({displayName:"Landingstyled__LandingWrapper",componentId:"sc-3mk9j5-0"})(["width:100%;background-color:",";"],function(e){return e.theme.colors.sbGrey}),b=p.d.div.withConfig({displayName:"Landingstyled__ContentWrapper",componentId:"sc-3mk9j5-1"})(["display:flex;flex-direction:column;flex:1;max-width:1200px;margin:0 auto;padding:0 20px;"]),y=p.d.div.withConfig({displayName:"Landingstyled__Content",componentId:"sc-3mk9j5-2"})(["min-height:480px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]),x=p.d.p.withConfig({displayName:"Landingstyled__Description",componentId:"sc-3mk9j5-3"})(["font-family:",";font-size:24px;line-height:30px;color:",";margin:0;text-align:center;",""],function(e){return e.theme.fonts.financier},function(e){return e.theme.colors.black},Object(f.a)("desktop")(h())),j=n("oQsg"),w=function(){return m.a.createElement(g,null,m.a.createElement(b,null,m.a.createElement(j.a,{barTheme:"dark"}),m.a.createElement(y,null,m.a.createElement(x,null,"Whether you'd like to request a consultation or have any questions for us, we'd love to hear from you. Write your message in the below form and we'll be in touch."))))},v=n("THFB"),O=n("y4cE"),k=n("k2H8"),_=n("W5CI"),E=p.d.div.withConfig({displayName:"contact__ContentWrapper",componentId:"sc-1jz255m-0"})(["padding:0 20px;margin-bottom:100px;margin-top:-80px;display:flex;flex-direction:column;align-items:center;flex:1;z-index:0;min-height:640px;"]),C=p.d.div.withConfig({displayName:"contact__ThankYouWrapper",componentId:"sc-1jz255m-1"})(["display:flex;flex-direction:column;flex:1;min-height:500px;margin:0 40px;"]);t.default=function(){var e=Object(s.useState)({firstName:"",company:"",email:"",message:""}),t=Object(l.default)(e,2),n=t[0],a=t[1],d=Object(s.useState)(!1),p=Object(l.default)(d,2),f=p[0],h=p[1],g=Object(s.useState)(!1),b=Object(l.default)(g,2),y=b[0],x=b[1],j=Object(s.useState)(!1),N=Object(l.default)(j,2),I=N[0],W=N[1],L=Object(O.b)().dispatch,z=Object(s.useCallback)(function(e){return L({type:k.a,payload:e})},[L]),q=!n.firstName||!n.email||!Object(v.a)(n.email);Object(s.useEffect)(function(){I&&!q&&W(!1)},[n]);var S=function(){var e=Object(r.default)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!q){e.next=3;break}return W(!0),e.abrupt("return");case 3:return e.prev=3,z({name:n.name,email:n.email,company:n.company}),e.next=7,Object(_.a)(n);case 7:e.sent.success&&h(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),x(!0);case 14:case"end":return e.stop()}},e,null,[[3,11]])}));return function(){return e.apply(this,arguments)}}();return m.a.createElement(u.d,null,!f&&!y&&m.a.createElement(m.a.Fragment,null,m.a.createElement(w,null),m.a.createElement(E,null,m.a.createElement(u.c,{firstName:n.firstName,company:n.company,email:n.email,message:n.message,onChange:function(e){a(Object(o.a)({},n,Object(c.a)({},e.target.name,e.target.value)))},onSubmit:S,isError:I}))),f&&!y&&m.a.createElement(C,null,m.a.createElement(u.h,{description:"We\u2019ll reply to you at ".concat(n.email," as soon as possible."),footerMessage:"Back to home",href:"/"})))}},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){var e=n("ALdH");return{page:e.default||e}}])}},[["lqnA",1,0]]]);
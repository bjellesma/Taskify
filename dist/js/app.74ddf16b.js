(function(t){function e(e){for(var a,r,i=e[0],l=e[1],u=e[2],c=0,m=[];c<i.length;c++)r=i[c],s[r]&&m.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"824b4a91"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t),o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}s[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"1d5e":function(t,e,n){},2895:function(t,e,n){},"2a32":function(t,e,n){"use strict";var a=n("2895"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=n("d00d"),o=n.n(s),r=n("5f5b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Header"),n("router-view")],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("h1",[t._v("Taskify, remembering things that you can't since 2019")]),n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[t.isLoggedIn?n("b-nav-item",{staticClass:"nav-item"},[t._v(" \n                    Hello "+t._s(t.user.username)+"\n                ")]):n("b-nav-item",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),n("b-nav-item",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home"),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),n("b-nav-item",[n("router-link",{staticClass:"nav-link",attrs:{to:"/lists"}},[t._v("Task Lists")])],1),n("b-nav-item",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),n("b-nav-item",{staticClass:"nav-item"},[t.isLoggedIn?n("span",[n("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])]):t._e()])],1)],1)],1)],1)},c=[],d={name:"Header",computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},user:function(){return this.$store.getters.user}},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})}}},m=d,p=n("2877"),f=Object(p["a"])(m,u,c,!1,null,null,null),v=f.exports,h={name:"App",components:{Header:v},created:function(){this.$http.interceptors.response.use(void 0,function(t){return new Promise(function(e,n){throw 401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch(logout),t})})}},g=h,b=(n("034f"),Object(p["a"])(g,i,l,!1,null,null,null)),_=b.exports,k=n("8c4f"),w=n("2f62"),y=n("bc3a"),C=n.n(y);a["default"].use(w["a"]);var T,O=new w["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:JSON.parse(localStorage.getItem("user"))||"failure"},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,n){console.log("setting state. Token: ".concat(e)),t.status="success",t.token=e,t.user=n},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token="",t.user={}}},actions:{login:function(t,e){var n=t.commit;return new Promise(function(t,a){n("auth_request"),C()({url:"https://evening-temple-48538.herokuapp.com/login",data:e,method:"POST"}).then(function(e){if(e.data.authenticated){console.log("login: ".concat(e.data.user));var s=e.data.token,o=JSON.stringify(e.data.user);console.log("user: ".concat(o.id)),localStorage.setItem("token",s),localStorage.setItem("user",o),C.a.defaults.headers.common["Authorization"]=s,n("auth_success",s,o),t(e)}else a(e.data.message)}).catch(function(t){n("auth_error"),localStorage.removeItem("token"),a(t)})})},register:function(t,e){var n=t.commit;return new Promise(function(t,a){n("auth_request"),C()({url:"http://localhost:3001/register",data:e,method:"POST"}).then(function(a){console.log("login 2 ".concat(JSON.stringify(e))),localStorage.setItem("token",token),localStorage.setItem("user",e),C.a.defaults.headers.common["Authorization"]=token,n("auth_success",token,e),t(a)}).catch(function(t){n("auth_error",t),localStorage.removeItem("token"),a(t)})})},logout:function(t){var e=t.commit;return new Promise(function(t,n){e("logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete C.a.defaults.headers.common["Authorization"],t()})}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},user:function(t){return console.log("has "+JSON.stringify(localStorage.getItem("user"))),t.user}}}),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-4"},[t._v("Hello, world!")]),n("p",{staticClass:"lead"},[t._v("Taskify is an app to remember all of your tasks.")]),n("hr",{staticClass:"my-4"}),n("p",[t._v("To get started, navigate to the button below and create a new task list.")]),n("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/lists"}},[t._v("Task Lists")])],1)])},x=[],S={name:"home"},j=S,P=Object(p["a"])(j,$,x,!1,null,null,null),I=P.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{classs:"lists"}},[n("flash-message"),n("Tasklists",{attrs:{lists:t.lists}})],1)},L=[],A=(n("7f7f"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.lists,function(e){return n("div",{key:e.uid,staticClass:"col-md-4 tasklist",attrs:{id:e.uid}},[n("h3",{staticClass:"title"},[n("router-link",{attrs:{to:"list/"+e.uid,list_name:e.list_name}},[t._v("\n                "+t._s(e.name)+"\n            ")])],1),n("div",{staticClass:"list"},[n("flash-message"),n("Tasklist",{staticClass:"tasklist",attrs:{"list-id":e.uid}})],1)])}),0)}),q=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AddTodo",{on:{"add-todo":t.addTodo}}),t._l(t.tasks,function(e){return n("div",{key:e.uid,attrs:{id:e.uid}},[n("div",{staticClass:"form-group",attrs:{task_id:e.id}},[n("input",{staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:e.completed},on:{change:function(n){return t.markComplete(e,n)}}}),n("label",[t._v(t._s(e.title))])])])})],2)},H=[],J=n("bd86"),M=n("75fc"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Task"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},D=[],R={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},B=R,F=(n("6053"),Object(p["a"])(B,z,D,!1,null,"2bcb0924",null)),G=F.exports,K=(T={name:"Tasklist",components:{Tasklist:V,AddTodo:G},props:["listId"],methods:{}},Object(J["a"])(T,"methods",{addTodo:function(t){var e=this,n=this.listId?this.listId:this.$route.params.uid,a=t.title,s=t.completed;C.a.post("https://evening-temple-48538.herokuapp.com/api/addtask",{title:a,completed:s,list_id:n}).then(function(t){e.tasks=[].concat(Object(M["a"])(e.tasks),[t.data])}).catch(function(t){return console.log(t)})},markComplete:function(t,e){var n=e.target.checked;C.a.put("https://evening-temple-48538.herokuapp.com/api/updatetaskcomplete",{task_id:t.uid,completed:n}).then().catch(function(t){return console.log(t)})}}),Object(J["a"])(T,"data",function(){var t=this.listId?this.listId:this.$route.params.uid,e=this,a=[],s=n("bc3a");return s.get("https://evening-temple-48538.herokuapp.com/api/gettasks?id=".concat(t)).then(function(t){t.data.forEach(function(t){a.push({uid:t["uid"],id:12,title:t["title"],completed:t["completed"]})})}).catch(function(t){e.flash("Oops, It looks like we could not connect to the server","error")}),{tasks:a}}),T),Q=K,U=(n("be1d"),Object(p["a"])(Q,N,H,!1,null,null,null)),V=U.exports,W={name:"Tasklists",components:{Tasklists:Z,Tasklist:V},props:["lists"]},X=W,Y=(n("2a32"),Object(p["a"])(X,A,q,!1,null,"572169f4",null)),Z=Y.exports,tt={name:"Lists",components:{Tasklists:Z},data:function(){var t=this,e=[],a=n("bc3a");return a.get("https://evening-temple-48538.herokuapp.com/api/getlists").then(function(t){t.data.forEach(function(t){e.push({uid:t["uid"],id:12,name:t["name"]})})}).catch(function(e){t.flash("Oops, It looks like we could not connect to the server","error")}),{lists:e}}},et=tt,nt=Object(p["a"])(et,E,L,!1,null,null,null),at=nt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("flash-message"),n("Tasklist")],1)},ot=[],rt={name:"list",components:{Tasklist:V,Tasklists:Z}},it=rt,lt=Object(p["a"])(it,st,ot,!1,null,null,null),ut=lt.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("flash-message"),n("Login")],1)},dt=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("h1",[t._v("Sign in")]),n("label",[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{required:"",type:"email",placeholder:"Name"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("hr"),n("button",{attrs:{type:"submit"}},[t._v("Login")])])])},pt=[];function ft(){document.querySelectorAll(".flash__message").forEach(function(t){return t.parentNode.removeChild(t)})}var vt={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this,e=this.email,n=this.password;this.$store.dispatch("login",{email:e,password:n}).then(function(){return t.$router.push("/")}).catch(function(e){ft(),t.flash(e,"error")})}}},ht=vt,gt=Object(p["a"])(ht,mt,pt,!1,null,null,null),bt=gt.exports,_t={name:"Login.Component",components:{Login:bt}},kt=_t,wt=Object(p["a"])(kt,ct,dt,!1,null,null,null),yt=wt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("Register")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("label",{attrs:{for:"email"}},[t._v("E-Mail Address")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("label",{attrs:{for:"password"}},[t._v("Password")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("label",{attrs:{for:"password-confirm"}},[t._v("Confirm Password")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],attrs:{id:"password-confirm",type:"password",required:""},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._m(0)])])},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{type:"submit"}},[t._v("Register")])])}],Ot={data:function(){return{name:"",email:"",password:"",password_confirmation:"",is_admin:null}},methods:{register:function(){var t=this,e={name:this.name,email:this.email,password:this.password,is_admin:this.is_admin};this.$store.dispatch("register",e).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},$t=Ot,xt=Object(p["a"])($t,Ct,Tt,!1,null,null,null),St=(xt.exports,function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),jt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This page is protected by auth")])])}],Pt={},It=Object(p["a"])(Pt,St,jt,!1,null,null,null),Et=It.exports;a["default"].use(k["a"]);var Lt=new k["a"]({routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/lists",name:"lists",component:at,meta:{requiresAuth:!0}},{path:"/list/:uid",name:"list",component:ut},{path:"/login",name:"login",component:yt},{path:"/secure",name:"secure",component:Et,meta:{requiresAuth:!0}}]});Lt.beforeEach(function(t,e,n){if(t.matched.some(function(t){return t.meta.requiresAuth})){if(O.getters.isLoggedIn)return void n();n("/login")}else n()});var At=Lt,qt=n("2b88"),Nt=n.n(qt);n("f9e3"),n("2dd8");n("f59c"),a["default"].prototype.$http=C.a,a["default"].config.productionTip=!1,a["default"].use(Nt.a),a["default"].use(o.a),a["default"].use(r["a"]);var Ht=localStorage.getItem("token");Ht&&(a["default"].prototype.$http.defaults.headers.common["Authorization"]=Ht),new a["default"]({store:O,router:At,render:function(t){return t(_)}}).$mount("#app")},6053:function(t,e,n){"use strict";var a=n("7d9d"),s=n.n(a);s.a},"64a9":function(t,e,n){},"7d9d":function(t,e,n){},be1d:function(t,e,n){"use strict";var a=n("1d5e"),s=n.n(a);s.a}});
//# sourceMappingURL=app.74ddf16b.js.map
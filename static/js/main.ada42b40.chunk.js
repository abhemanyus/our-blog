(this["webpackJsonpour-blog"]=this["webpackJsonpour-blog"]||[]).push([[0],{223:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n=a(1);t.default=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Notifications"}),Object(n.jsx)("p",{children:"WIP"})]})}},436:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(215),s=a.n(c),i=(a(223),a(29)),o=a(30),l=a(32),u=a(31),j=a(5),b=a(20),d=a(35),h=a(14),m=a(1),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.onChange=function(t){e.setState((function(e){return Object.assign({},e,Object(d.a)({},t.target.id,t.target.value))}))},e.onSubmit=function(t){t.preventDefault(),e.props.signin(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.firebase.auth.uid?Object(m.jsx)(j.a,{to:"/"}):Object(m.jsx)("main",{className:"form-signin",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("h1",{className:"h3 mb-3 fw-normal text-center",children:"Please sign in"}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.email,type:"email",className:"form-control",id:"email",placeholder:"name@example.com"}),Object(m.jsx)("label",{htmlFor:"email",children:"Email address"})]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.password,type:"password",className:"form-control",id:"password",placeholder:"Password"}),Object(m.jsx)("label",{htmlFor:"password",children:"Password"})]}),this.props.auth.authError?Object(m.jsx)("h2",{className:"text-danger text-center",children:"Login Failed"}):null,this.props.auth.authSuccess?Object(m.jsx)("h2",{className:"text-success text-center",children:"Login Successful"}):null,Object(m.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Log In"})]})})}}]),a}(n.Component),O=Object(h.b)((function(e){return{auth:e.auth,firebase:e.firebase}}),(function(e){return{signin:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",error:e})}))}}(t))}}}))(p),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.onChange=function(t){e.setState((function(e){return Object.assign({},e,Object(d.a)({},t.target.id,t.target.value))}))},e.onSubmit=function(t){t.preventDefault(),e.props.signup(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.uid?Object(m.jsx)(j.a,{to:"/login"}):Object(m.jsx)("main",{className:"form-signin",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("h1",{className:"h3 mb-3 fw-normal text-center",children:"Create An Account"}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.firstName,type:"name",className:"form-control",id:"firstName",placeholder:"First Name",required:!0}),Object(m.jsx)("label",{htmlFor:"firstName",children:"First Name"})]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.lastName,type:"name",className:"form-control",id:"lastName",placeholder:"Last Name",required:!0}),Object(m.jsx)("label",{htmlFor:"lastName",children:"Last Name"})]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.email,type:"email",className:"form-control",id:"email",placeholder:"name@example.com",required:!0}),Object(m.jsx)("label",{htmlFor:"email",children:"Email address"})]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.password,type:"password",className:"form-control",id:"password",placeholder:"Password",required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Password"})]}),this.props.auth.authError?Object(m.jsx)("h2",{className:"text-danger text-center",children:this.props.auth.authError}):null,Object(m.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign Up"})]})})}}]),a}(n.Component),g=Object(h.b)((function(e){return{auth:e.auth,uid:e.firebase.auth.uid}}),(function(e){return{signup:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,s=r(),i=c();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,email:e.email,initials:(e.firstName[0]+e.lastName[0]).toUpperCase()}).then((function(){return console.log("added user")})).catch((function(){return console.log("couldn't add user")}))})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",error:e})}))}}(t))}}}))(f),x=a(34),v=a(24),N=a(2).Component,C=a(438).default,S=a(383).default,y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?Object(m.jsxs)("div",{className:"container container-fluid p-4 p-md-5 mb-4 row",children:[Object(m.jsx)("div",{className:"col-12 col-md-7",children:Object(m.jsx)(C,{projects:this.props.projects})}),Object(m.jsx)("div",{className:"col-12 col-md-4 offset-md-1",children:Object(m.jsx)(S,{})})]}):Object(m.jsx)(j.a,{to:"/login"})}}]),a}(N),w=Object(v.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(x.firestoreConnect)([{collection:"projects"}]))(y),E=Object(h.b)((function(e){var t=e.firebase.auth.uid;return{user:e.firebase.profile,uid:t}}),(function(e){return{logout:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"LOGOUT_SUCCESS"})})).catch((function(t){e({type:"LOGOUT_ERROR",error:t})}))}))}}}))((function(e){return Object(m.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(b.c,{className:"nav-link active","aria-current":"page",to:"/create",children:"New Project"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(b.c,{onClick:function(){return e.logout()},className:"nav-link text-muted",to:"/",children:"Log Out"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(b.c,{className:"nav-link",to:"/user/"+e.uid,children:e.user?e.user.initials:null})})]})})),R=function(){return Object(m.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(b.c,{className:"nav-link active","aria-current":"page",to:"/signup",children:"Sign up"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(b.c,{className:"nav-link",to:"/login",children:"Log In"})})]})},F=Object(h.b)((function(e){return{auth:e.firebase.auth}}))((function(e){return Object(m.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark","aria-label":"Fourth navbar example",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(b.b,{className:"navbar-brand",to:"/",children:"Projects"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarMain","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarMain",children:e.auth.uid?Object(m.jsx)(E,{}):Object(m.jsx)(R,{})})]})})})),P=a(8),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",authorID:e.props.auth.uid},e.onChange=function(t){e.setState((function(e){return Object.assign({},e,Object(d.a)({},t.target.id,t.target.value))}))},e.onSubmit=function(t){t.preventDefault(),e.props.createProject(Object(P.a)(Object(P.a)({},e.state),{},{authorID:e.props.auth.uid})),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?Object(m.jsx)("main",{className:"form-CreateProject",children:Object(m.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(m.jsx)("h1",{className:"h3 mb-3 fw-normal text-center",children:"Create Project"}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("input",{onChange:this.onChange,value:this.state.title,type:"text",className:"form-control",id:"title",placeholder:"Toxoplasm Gondii",required:!0}),Object(m.jsx)("label",{htmlFor:"title",children:"Title"})]}),Object(m.jsxs)("div",{className:"form-floating",children:[Object(m.jsx)("textarea",{rows:"3",onChange:this.onChange,value:this.state.content,type:"text",className:"form-control",id:"content",placeholder:"Mind-controlling parasite spread by felines",required:!0}),Object(m.jsx)("label",{htmlFor:"content",children:"Start typing here"})]}),Object(m.jsx)("button",{className:"w-100 btn btn-lg btn-success",type:"submit",children:"Create"})]})}):Object(m.jsx)(j.a,{to:"/login"})}}]),a}(n.Component),A=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("projects").add(Object(P.a)(Object(P.a)({},e),{},{createdAt:new Date})).then((function(){return t({type:"CREATE_PROJECT",project:e})})).catch((function(e){return t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(I),_=a(217),L=a.n(_);var T=Object(v.d)(Object(h.b)((function(e,t){var a=t.match.params.project_id,n=e.firestore.data.projects;return{project:n?n[a]:e.project.projects[0],auth:e.firebase.profile}})),Object(x.firestoreConnect)([{collection:"projects"}]))((function(e){if(!e.auth.firstName)return Object(m.jsx)(j.a,{to:"/login"});var t=e.project,a=t.title,n=t.content,r=t.createdAt,c=t.authorID,s=e.auth.initials?e.auth:null,i=s.firstName,o=s.lastName;return Object(m.jsx)("div",{className:"p-3 p-md-5 m-md-3 text-center bg-light",children:Object(m.jsxs)("div",{className:"col-md-12 p-lg-5 mx-auto my-5",children:[Object(m.jsx)("h1",{className:"display-4 fw-normal",children:a}),Object(m.jsx)("pre",{className:"lead fw-normal text-wrap",children:n}),Object(m.jsx)("a",{className:"text-decoration-underline text-muted text-capitalize",href:"/user/"+c,children:i+" "+o}),Object(m.jsx)("p",{className:"footer text-muted",children:r&&L()(r.toDate()).calendar()})]})})})),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{className:"App container container-fluid",children:[Object(m.jsx)(F,{}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(m.jsx)(j.b,{exact:!0,path:"/project/:project_id",component:T}),Object(m.jsx)(j.b,{path:"/login",component:O}),Object(m.jsx)(j.b,{path:"/signup",component:g}),Object(m.jsx)(j.b,{path:"/create",component:A})]})]})})}}]),a}(n.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,441)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},G=(a(384),a(385),a(66)),D={authError:null,authSuccess:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login successful"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:"Login Successful",authError:null});case"LOGIN_ERROR":return console.log("login failed"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:null,authError:t.error.message});case"LOGOUT_SUCCESS":return console.log("logout successful"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:null,authError:null});case"LOGOUT_ERROR":return console.log("logout failed"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:null,authError:t.error.message});case"SIGNUP_SUCCESS":return console.log("signup successful"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:null,authError:null});case"SIGNUP_ERROR":return console.log("signup failed"),Object(P.a)(Object(P.a)({},e),{},{authSuccess:null,authError:t.error.message});default:return e}},J={projects:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log(t.error),e;default:return e}},z=Object(v.c)({auth:q,project:M,firestore:G.firestoreReducer,firebase:x.firebaseReducer}),B=a(218),K=a(95);a(437),a(433);K.a.initializeApp({apiKey:"AIzaSyDqbqQcvVxyTRUv1AyHjtg0fPaJ8sL2rr0",authDomain:"our-blog-30c68.firebaseapp.com",projectId:"our-blog-30c68",storageBucket:"our-blog-30c68.appspot.com",messagingSenderId:"987452810084",appId:"1:987452810084:web:0b72dfd76a7a65ae0f5071",measurementId:"G-51RNYKCPK5"}),K.a.firestore().settings({timestampsInSnapShots:!0});var W=K.a,H=Object(v.e)(z,Object(v.d)(Object(v.a)(B.a.withExtraArgument({getFirebase:x.getFirebase,getFirestore:G.getFirestore})),Object(G.reduxFirestore)(W),Object(x.reactReduxFirebase)(W,{attachAuthIsReady:!0,useFirestoreForProfile:!0,userProfile:"users"})));H.firebaseAuthIsReady.then((function(){s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(h.a,{store:H,children:Object(m.jsx)(U,{})})}),document.getElementById("root")),k()}))},438:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(1),c=function(e){var t=e.project,a=t.id,c=t.title,s=t.content;return Object(r.jsx)("li",{className:"list-unstyled",children:Object(r.jsx)("div",{className:"p-4 p-md-5 mb-4 text-white rounded bg-dark",children:Object(r.jsxs)("div",{className:"col-md-12 px-0",children:[Object(r.jsx)("h1",{className:"display-4 fst-italic",children:c}),Object(r.jsx)("p",{className:"lead my-3 text-truncate",children:s}),Object(r.jsx)("p",{className:"lead mb-0",children:Object(r.jsx)(n.b,{to:"/project/"+a,className:"text-white fw-bold",children:"Continue reading..."})})]})})},a)};t.default=function(e){var t=e.projects,a=t&&t.map((function(e){return Object(r.jsx)(c,{project:e},e.id)}));return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("ul",{children:a})})}}},[[436,1,2]]]);
//# sourceMappingURL=main.ada42b40.chunk.js.map
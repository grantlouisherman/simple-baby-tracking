(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,a,t){e.exports=t(363)},363:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(50),i=t.n(o),c=t(51),p=t(52),s=t(56),m=t(53),l=t(57),d=(t(86),function(e){return r.a.createElement("button",{type:"button",class:"btn btn-lg btn-primary",id:"".concat(e.name),onClick:function(){!function(e,a){var t=a.child(String(new Date));switch(e){case"poop-diaper":t.set({"poop-diaper":1});break;case"wet-diaper":t.set({"wet-diaper":1});break;case"fed":t.set({fed:1})}}(e.name,e.firebaseRef)}},e.name)}),u=t(16),f=[{name:"Page A",poop:4e3,pv:2400,amt:2400},{name:"Page B",pv:1398,amt:2210},{name:"Page C",poop:2e3,pv:9800,amt:2290},{name:"Page D",poop:2780,pv:3908,amt:2e3},{name:"Page E",poop:1890,pv:4800,amt:2181},{name:"Page F",pv:3800,amt:2500},{name:"Page G",poop:3490,pv:4300,amt:2100}];(function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(u.d,{width:500,height:300,data:f,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(u.a,{strokeDasharray:"3 3"}),r.a.createElement(u.f,{dataKey:"name"}),r.a.createElement(u.g,null),r.a.createElement(u.e,null),r.a.createElement(u.b,null),r.a.createElement(u.c,{type:"monotone",dataKey:"poop",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(u.c,{type:"monotone",dataKey:"wet",stroke:"#82ca9d"}))}}]),a}(n.PureComponent)).jsfiddleUrl="https://jsfiddle.net/alidingling/xqjtetw0/";var b=t(84);b.initializeApp({apiKey:"AIzaSyAc7uNDEHsEQlAM8D1-ybuhiVRsR69DTRM",authDomain:"amready-171619.firebaseapp.com",databaseURL:"https://amready-171619.firebaseio.com",projectId:"amready-171619",storageBucket:"amready-171619.appspot.com",messagingSenderId:"276606987301",appId:"1:276606987301:web:518f01630ac1d9a1"});var h=b.database().ref(),y=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).transformData=function(e){var a=[];return Object.keys(e).forEach(function(t){a.push({time:t,data:e[t]})}),a},e.state={firebaseLoaded:!1,firebaseData:[]},e}return Object(l.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.on("value",function(a){e.setState({firebaseLoaded:!0,firebaseData:e.transformData(a.val())})},function(e){console.log("The read failed: "+e.code)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{name:"poop-diaper",firebaseRef:h}),r.a.createElement(d,{name:"wet-diaper",firebaseRef:h}),r.a.createElement(d,{name:"fed",firebaseRef:h}),r.a.createElement("ul",null,this.state.firebaseLoaded?this.state.firebaseData.map(function(e){return r.a.createElement("li",null,JSON.stringify(e,null,4))}):null))}}]),a}(n.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))},86:function(e,a,t){}},[[170,1,2]]]);
//# sourceMappingURL=main.8f9d970a.chunk.js.map
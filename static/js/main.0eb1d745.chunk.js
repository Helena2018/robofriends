(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(17),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-purple  dib br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},p=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"p2"},r.a.createElement("input",{className:"pa3 b--pink",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"gray",height:"800px"}},e.children)},b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops, that is not good!!!"):this.props.children}}]),t}(a.Component),E=(n(18),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RobotsFriend"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(d,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component));n(19);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(E,null))},8:function(e,t,n){e.exports=n(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.0eb1d745.chunk.js.map
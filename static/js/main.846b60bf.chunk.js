(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=t(4),o=t(5),l=t(7),m=t(6),d=t(1),g=t(8),u=function(e){return c.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.info.name,src:e.info.img,id:e.info.id,onClick:e.onClick})))},E=function(e){var a=e.tiles.map(function(a){return c.a.createElement(u,{key:a.id,info:a,onClick:e.onClick})});return c.a.createElement("div",{className:"container row cardDeck"},a)},p=function(e){return!0===e.state.startOfGame?c.a.createElement("li",{className:"NavElements"},"Click an image to begin"):c.a.createElement("li",{className:"NavElements"},!0===e.state.correctGuess?c.a.createElement("h1",null,"You have Guessed Correctly"):c.a.createElement("h1",null,"You are INCORRECT"))},f=function(e){return c.a.createElement("nav",{id:"nav"},c.a.createElement("ul",{className:"container",id:"navContainer"},c.a.createElement("li",{className:"NavElements"},"Clicky Game"),c.a.createElement(p,{state:e.state}),c.a.createElement("li",{className:"NavElements"},"Score: ",e.state.score," | Top Score: ",e.state.topScore)))},k=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Click Bait"),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click something you've already clicked on!\""))))},C=[{id:1,img:"/images/arya.jpeg",name:"Arya"},{id:2,img:"/images/cersei.jpg",name:"Cersei"},{id:3,img:"/images/danny.jpg",name:"Danny"},{id:4,img:"/images/ed.jpg",name:"Eddard"},{id:5,img:"/images/joffrey.jpg",name:"Joffrey"},{id:6,img:"/images/jon.jpg",name:"Jon"},{id:7,img:"/images/nightKing.jpg",name:"Night King"},{id:8,img:"/images/oberyn.jpg",name:"Oberyn"},{id:9,img:"/images/rickon.jpg",name:"Rickon"},{id:10,img:"/images/robb.jpg",name:"Robb"},{id:11,img:"/images/sansa.jpg",name:"Sansa"},{id:12,img:"/images/tyrion.jpg",name:"Tyrion"}],j=(t(15),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).clickScore=function(a){console.log("THE KEY IS "+a.target.id);var t=e.state.CharData.sort(function(){return Math.random()-.5});if(e.state.clickedCards.includes(a.target.id))e.setState({score:0,clickedCards:[],correctGuess:!1});else{var n=e.state.clickedCards.concat(a.target.id);e.setState({clickedCards:n,score:e.state.score+1,correctGuess:!0,startOfGame:!1,topScore:e.state.score>=e.state.topScore?e.state.score+1:e.state.topScore})}e.setState({CharData:t})},e.state={score:0,topScore:0,correctGuess:!0,startOfGame:!0,clickedCards:[],CharData:C},e.clickScore=e.clickScore.bind(Object(d.a)(e)),e}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{state:this.state}),c.a.createElement(k,null),c.a.createElement(E,{onClick:this.clickScore,tiles:this.state.CharData}))}}]),a}(c.a.Component));r.a.render(c.a.createElement(j,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.846b60bf.chunk.js.map
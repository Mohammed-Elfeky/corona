(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{14:function(e,t,s){e.exports={flag:"popup_flag__2h-Nc"}},163:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),n=s.n(c),r=s(25),o=s.n(r),i=(s(60),s(2)),u=s.n(i),l=s(8),d=s(4);s(62);var j=function(e){var t=e.dropDownCountries,s=e.setDropDownValue,c=e.dropDownValue,n=e.setSingleCountry,r=e.setCenter,o=e.setZoom,i=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,c,i,l,d,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,s(a),c="worlwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(c);case 5:return i=e.sent,e.next=8,i.json();case 8:l=e.sent,d="worlwide"===a?[34.80746,-40.4098]:[l.countryInfo.lat,l.countryInfo.long],j="worlwide"===a?2:6,r(d),o(j),n(l);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("select",{value:c,onChange:i,children:[Object(a.jsx)("option",{value:"worlwide",children:"worlwide"}),t.map((function(e){return Object(a.jsx)("option",{value:e.country,children:e.country})}))]})})},p=s(17),h=s.n(p),f=s(3),b=s.n(f),v=s(168),x=s(165),O=s(14),m=s.n(O),y={cases:{hex:"#CC1034",multiplier:200},recovered:{hex:"#7dd71d",multiplier:300},deaths:{hex:"#fb4443",multiplier:2e3}},w=function(e,t){return e.map((function(e){return Object(a.jsx)(v.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.3,pathOptions:{color:y[t].hex,fillColor:y[t].hex},radius:Math.sqrt(e[t])*y[t].multiplier,children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")},className:m.a.flag}),Object(a.jsxs)("div",{className:m.a.name,children:["country :",e.country]}),Object(a.jsxs)("div",{className:m.a.cases,children:["cases:",b()(e.cases).format("0,0")]}),Object(a.jsxs)("div",{className:m.a.recovered,children:["recovered:",b()(e.recovered).format("0,0")]}),Object(a.jsxs)("div",{className:m.a.deaths,children:["deaths:",b()(e.deaths).format("0,0")]})]})})}))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",s=[],a=Object.keys(e[t]);return a.forEach((function(c){if(0!==a.indexOf(c)){var n=a.indexOf(c)-1,r=a[n];s.push({x:c,y:e[t][c]-e[t][r]})}})),s};var C=function(e){var t=e.title,s=e.total,c=e.today,n=e.setCasesType,r=e.setData,o=e.casesType,i={cases:h.a.cases,deaths:h.a.deaths,recovered:h.a.recoverd},d=function(){var e=Object(l.a)(u.a.mark((function e(){var s,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.next=3,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30");case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,c=g(a,t),r(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{onClick:d,className:"".concat(h.a.card," ").concat(o===t&&i[t]),children:[Object(a.jsx)("p",{children:t}),c>=1e3?Object(a.jsx)("h2",{children:b()(c).format("0 a")}):c>=1e6?Object(a.jsx)("h2",{children:b()(c).format("0.0a")}):Object(a.jsx)("h2",{children:c}),s>=1e3?Object(a.jsx)("p",{children:b()(s).format("0 a")}):s>=1e6?Object(a.jsx)("p",{children:b()(s).format("0.0a")}):Object(a.jsx)("p",{children:s})]})},_=(s(63),s(51)),D=s.n(_),N=s(166),S=s(167),k=s(169);var T=function(e){var t=e.center,s=e.zoom,c=e.countriesForCircles,n=e.casesType;function r(e){var t=e.center,s=e.zoom;return Object(N.a)().setView(t,s),null}return Object(a.jsx)("div",{className:D.a.mapp,children:Object(a.jsxs)(S.a,{center:t,zoom:s,style:{height:"100%"},children:[Object(a.jsx)(r,{center:t,zoom:s}),Object(a.jsx)(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),w(c,n)]})})},E=s(52),V=s.n(E);var z=function(e){var t=e.country,s=e.cases;return Object(a.jsxs)("div",{className:V.a.country,children:[Object(a.jsx)("h5",{children:t}),Object(a.jsx)("h5",{children:b()(s).format("0,0")})]})},I=s(53),M={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return b()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,s){return b()(e).format("0a")}}}]}};var F=function(e){var t=e.data,s=e.setData;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=g(a),s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{children:t&&t.length>0&&Object(a.jsx)(I.Line,{options:M,data:{datasets:[{data:t}]}})})};var L=function(){var e,t=Object(c.useState)([]),s=Object(d.a)(t,2),n=s[0],r=s[1],o=Object(c.useState)("worlwide"),i=Object(d.a)(o,2),p=i[0],h=i[1],f=Object(c.useState)([]),b=Object(d.a)(f,2),v=b[0],x=b[1],O=Object(c.useState)(2),m=Object(d.a)(O,2),y=m[0],w=m[1],g=Object(c.useState)([34.80746,-40.4098]),_=Object(d.a)(g,2),D=_[0],N=_[1],S=Object(c.useState)([]),k=Object(d.a)(S,2),E=k[0],V=k[1],I=Object(c.useState)("cases"),M=Object(d.a)(I,2),L=M[0],A=M[1],Y=Object(c.useState)({}),B=Object(d.a)(Y,2),J=B[0],P=B[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s),V(s),s=s.map((function(e){return{country:e.country,cases:e.cases}})),r(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,x(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"left-part-lay-out",children:Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{className:"header",children:["covid-19-tracker",Object(a.jsx)(j,{dropDownCountries:n,dropDownValue:p,setDropDownValue:h,setSingleCountry:x,setCenter:N,setZoom:w})]}),Object(a.jsxs)("div",{className:"cards-info",children:[Object(a.jsx)(C,{casesType:L,setData:P,setCasesType:A,dropDownValue:p,total:v.cases,today:v.todayCases,title:"cases"}),Object(a.jsx)(C,{casesType:L,setData:P,setCasesType:A,dropDownValue:p,total:v.recovered,today:v.todayRecovered,title:"recovered"}),Object(a.jsx)(C,{casesType:L,setData:P,setCasesType:A,dropDownValue:p,total:v.deaths,today:v.todayDeaths,title:"deaths"})]}),Object(a.jsx)("div",{className:"map",children:Object(a.jsx)(T,{casesType:L,countriesForCircles:E,center:D,zoom:y})})]})}),Object(a.jsx)("div",{className:"right-part-lay-out",children:Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h2",{children:"Live Cases by Country"}),Object(a.jsx)("div",{className:"countries-cases",children:(e=n,e.sort((function(e,t){return t.cases-e.cases}))).map((function(e){return Object(a.jsx)(z,{country:e.country,cases:e.cases})}))}),Object(a.jsx)("div",{className:"charts",children:Object(a.jsx)(F,{casesType:L,data:J,setData:P})})]})})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,170)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),A()},17:function(e,t,s){e.exports={card:"Card_card__3uzEE",cases:"Card_cases__1V8fl",recoverd:"Card_recoverd__1MNSu",deaths:"Card_deaths__3_9gE"}},51:function(e,t,s){e.exports={mapp:"Mapp_mapp__1Ooy2","leaflet-container":"Mapp_leaflet-container__2S2tf"}},52:function(e,t,s){e.exports={country:"Country_country__3YzrE"}},60:function(e,t,s){},62:function(e,t,s){}},[[163,1,2]]]);
//# sourceMappingURL=main.06d1b0cb.chunk.js.map
(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{51:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var i,c,r,a,s,d=t(24),l=t.n(d),j=t(28),o=t(6),b=t(1),h=t(13),u=t.n(h),p=t(3),x=t(4),O=x.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    border: 1px solid #4A6E82;\n    padding: 10px;\n    width: 80%;\n    margin: auto;\n    box-shadow: 0 0 10px rgba(0,0,0,0.25);\n    p {\n        margin: 0;\n        display: block;\n        padding-inline-start: 40px;\n        span {\n            font-weight: bold;\n        }\n    }\n    .langs {\n        margin-bottom: 1em;\n    }\n    h1, h2 {\n        text-align: center;\n        //margin-top: 1em;\n    }\n    h1:after {\n        content: '';\n        display:block;\n        border-bottom: 1px solid rgba(0,0,0,0.2); \n    }\n    h2:after {\n        content: '';\n        display:block;\n        width: 20%;\n        margin: auto;\n        border-bottom: 1px solid rgba(0,0,0,0.2); \n    }\n"]))),g=x.a.div(c||(c=Object(p.a)(['\n    display: grid;\n    align-items: center;\n    column-gap:10px;\n    grid-template-columns: 2fr 1fr;\n    grid-template-areas: \n        "temp pic"\n        "temp pic"\n        "wind pic"\n        "wind pic";\n    padding: 10px;\n']))),f=x.a.div(r||(r=Object(p.a)(["\n    //border: 1px solid hotpink;\n    //align-self: stretch;\n    grid-area: temp;\n"]))),m=x.a.div(a||(a=Object(p.a)(["\n    //border: 1px solid hotpink;\n    //align-self: stretch;\n    grid-area: wind;\n"]))),v=x.a.div(s||(s=Object(p.a)(["\n    //border: 1px solid red;\n    grid-area: pic;\n    align-self: stretch;\n    border: none;\n    box-shadow: 0 0 10px rgba(0,0,0,0.25);\n"]))),w=(t(51),t(0));t(53).config();var y=function(e){var n=e.weatherData,t="/countries/icons/"+n.weather.icon+".png";return console.log(t),Object(w.jsx)(g,{children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"temperature: "}),n.temp," Celcius ",Object(w.jsx)("br",{})]})}),Object(w.jsx)(v,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:t,alt:"weather icon",style:{margin:"10px"}})," ",Object(w.jsx)("br",{})]})}),Object(w.jsx)(m,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("b",{children:"wind: "})," ",n.wind_spd," mph direction ",n.wind_cdir," ",Object(w.jsx)("br",{})]})})]})})},C=function(e){var n=e.i,t=e.countries,i=e.disp,c=Object(b.useState)(null),r=Object(o.a)(c,2),a=r[0],s=r[1],d="https://api.weatherbit.io/v2.0/current?key=5f91eec673494107abe6678cb6fa52fe&city="+t[n].capital;return Object(b.useEffect)((function(){console.log("effect"),u.a.get(d).then((function(e){try{s(e.data.data[0])}catch(n){console.log(n)}}))}),[]),i?Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:t[n].name.common}),Object(w.jsxs)("p",{children:[Object(w.jsx)("span",{children:"capital:"})," ",t[n].capital]}),Object(w.jsx)("br",{}),Object(w.jsxs)("p",{children:[Object(w.jsx)("span",{children:"population:"})," ",t[n].population]}),Object(w.jsx)("h2",{children:"languages"}),Object(w.jsx)("ul",{class:"langs",children:Object.values(t[n].languages).map((function(e,n){return Object(w.jsx)("li",{children:e},n)}))}),Object(w.jsx)("img",{class:"flag",src:t[n].flags.png,alt:"flag"}),Object(w.jsxs)("h2",{children:["Weather in ",t[n].capital]}),a&&Object(w.jsx)(y,{weatherData:a}),!a&&Object(w.jsx)("p",{children:"Weather data is not avaliable for this location right now."})]})}):Object(w.jsx)(w.Fragment,{children:" "})},k=function(e){var n=e.countries,t=e.search,i=e.namesSearched,c=e.commonNames,r=e.handleChange,a=e.handleClick,s=e.displayCountry;if(0===t.length)return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:["find countries ",Object(w.jsx)("input",{value:t,onChange:r}),Object(w.jsx)("br",{}),"specify a filter"]})});if(i.length>10)return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:["find countries ",Object(w.jsx)("input",{value:t,onChange:r}),Object(w.jsx)("br",{}),"Too many matches, specify another filter"]})});if(1===i.length){var d=c.indexOf(i[0]);return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:["find countries ",Object(w.jsx)("input",{value:t,onChange:r}),Object(w.jsx)(C,{i:d,countries:n,disp:!0})]})})}return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{children:["find countries ",Object(w.jsx)("input",{value:t,onChange:r}),Object(w.jsx)("ul",{children:i.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("li",{ind:c.indexOf(e),children:[" ",e,Object(w.jsx)("button",{onClick:a,children:"show"},c.indexOf(e))]},c.indexOf(e)),Object(w.jsx)(C,{i:c.indexOf(e),countries:n,disp:s[c.indexOf(e)]},1+c.indexOf(e))]})}))})]})})};var E=function(){var e=Object(b.useState)(""),n=Object(o.a)(e,2),t=n[0],i=n[1],c=Object(b.useState)([]),r=Object(o.a)(c,2),a=r[0],s=r[1],d=Object(b.useState)([]),l=Object(o.a)(d,2),h=l[0],p=l[1];Object(b.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/all").then((function(e){return s(e.data)}))}),[]);var x=a.map((function(e){return e.name.common})),O=x.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())}));return Object(w.jsx)(k,{countries:a,search:t,namesSearched:O,commonNames:x,handleChange:function(e){i(e.target.value)},handleClick:function(e){var n=Object(j.a)(h);!0===h[e.target.parentElement.getAttribute("ind")]?n[e.target.parentElement.getAttribute("ind")]="":n[e.target.parentElement.getAttribute("ind")]=!0,p(n)},displayCountry:h})};l.a.render(Object(w.jsx)(E,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.50f32a34.chunk.js.map
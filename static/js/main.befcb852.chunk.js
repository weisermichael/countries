(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var c=n(19),r=n.n(c),i=n(20),a=n(4),s=n(2),j=n(10),u=n.n(j),b=n(0);n(43).config();var o=function(e){var t=e.weatherData,n=t.current.weather_icons[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("b",{children:"temperature: "}),t.current.temperature," Celcius ",Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:n})," ",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"wind: "})," ",t.current.wind_speed," mph direction ",t.current.wind_dir," ",Object(b.jsx)("br",{})]})},l=function(e){var t=e.i,n=e.countries,c=e.disp,r=Object(s.useState)(null),i=Object(a.a)(r,2),j=i[0],l=i[1],d="api.weatherstack.com/current?access_key=b44e356fa1eec40897e8e475526ba24c&query="+n[t].capital;return Object(s.useEffect)((function(){console.log("effect"),u.a.get(d).then((function(e){l(e.data)}))}),[]),c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:n[t].name.common}),Object(b.jsx)("br",{}),"capital: ",n[t].capital," ",Object(b.jsx)("br",{}),"population: ",n[t].population," ",Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"languages"}),Object(b.jsx)("ul",{children:Object.values(n[t].languages).map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))}),Object(b.jsx)("img",{src:n[t].flags.png,alt:"flag"}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:["Weather in ",n[t].capital]}),j&&Object(b.jsx)(o,{weatherData:j})]}):Object(b.jsx)(b.Fragment,{children:" "})},d=function(e){var t=e.countries,n=e.search,c=e.namesSearched,r=e.commonNames,i=e.handleChange,a=e.handleClick,s=e.displayCountry;if(0===n.length)return Object(b.jsxs)("div",{children:["find countries ",Object(b.jsx)("input",{value:n,onChange:i}),Object(b.jsx)("br",{}),"specify a filter"]});if(c.length>10)return Object(b.jsxs)("div",{children:["find countries ",Object(b.jsx)("input",{value:n,onChange:i}),Object(b.jsx)("br",{}),"Too many matches, specify another filter"]});if(1===c.length){var j=r.indexOf(c[0]);return Object(b.jsxs)("div",{children:["find countries ",Object(b.jsx)("input",{value:n,onChange:i}),Object(b.jsx)(l,{i:j,countries:t,disp:!0})]})}return Object(b.jsxs)("div",{children:["find countries ",Object(b.jsx)("input",{value:n,onChange:i}),Object(b.jsx)("ul",{children:c.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("li",{ind:r.indexOf(e),children:[" ",e,Object(b.jsx)("button",{onClick:a,children:"show"},r.indexOf(e))]},r.indexOf(e)),Object(b.jsx)(l,{i:r.indexOf(e),countries:t,disp:s[r.indexOf(e)]},1+r.indexOf(e))]})}))})]})};var O=function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),j=Object(a.a)(r,2),o=j[0],l=j[1],O=Object(s.useState)([]),h=Object(a.a)(O,2),x=h[0],f=h[1];Object(s.useEffect)((function(){u.a.get("https://restcountries.com/v3.1/all").then((function(e){return l(e.data)}))}),[]);var p=o.map((function(e){return e.name.common})),m=p.filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}));return Object(b.jsx)(d,{countries:o,search:n,namesSearched:m,commonNames:p,handleChange:function(e){c(e.target.value)},handleClick:function(e){var t=Object(i.a)(x);!0===x[e.target.parentElement.getAttribute("ind")]?t[e.target.parentElement.getAttribute("ind")]="":t[e.target.parentElement.getAttribute("ind")]=!0,f(t)},displayCountry:x})};r.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.befcb852.chunk.js.map
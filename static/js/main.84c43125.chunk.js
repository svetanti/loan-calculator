(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"a":[{"code":"unic","name":"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439","param":[{"period_from":1,"summs_and_rate":[{"summ_from":1000000,"rate":2},{"summ_from":100000000,"rate":2.75},{"summ_from":500000000,"rate":3}]},{"period_from":2,"summs_and_rate":[{"summ_from":1000000,"rate":3.25},{"summ_from":100000000,"rate":4},{"summ_from":500000000,"rate":4.25}]},{"period_from":7,"summs_and_rate":[{"summ_from":1000000,"rate":3.5},{"summ_from":100000000,"rate":4.05},{"summ_from":500000000,"rate":4.25}]},{"period_from":14,"summs_and_rate":[{"summ_from":1000000,"rate":3.75},{"summ_from":100000000,"rate":4.1},{"summ_from":500000000,"rate":4.25}]},{"period_from":21,"summs_and_rate":[{"summ_from":1000000,"rate":4},{"summ_from":100000000,"rate":4.15},{"summ_from":500000000,"rate":4.25}]},{"period_from":31,"summs_and_rate":[{"summ_from":500000,"rate":4.9},{"summ_from":10000000,"rate":5.15},{"summ_from":50000000,"rate":5.4}]},{"period_from":91,"summs_and_rate":[{"summ_from":500000,"rate":4.8},{"summ_from":10000000,"rate":5.05},{"summ_from":50000000,"rate":5.3}]}]},{"code":"standart","name":"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439","param":[{"period_from":1,"summs_and_rate":[{"summ_from":1000000,"rate":2},{"summ_from":100000000,"rate":2.75},{"summ_from":500000000,"rate":3}]},{"period_from":2,"summs_and_rate":[{"summ_from":1000000,"rate":3.25},{"summ_from":100000000,"rate":4},{"summ_from":500000000,"rate":4.25}]},{"period_from":7,"summs_and_rate":[{"summ_from":1000000,"rate":3.5},{"summ_from":100000000,"rate":4.05},{"summ_from":500000000,"rate":4.25}]},{"period_from":14,"summs_and_rate":[{"summ_from":1000000,"rate":3.75},{"summ_from":100000000,"rate":4.1},{"summ_from":500000000,"rate":4.25}]},{"period_from":21,"summs_and_rate":[{"summ_from":1000000,"rate":4},{"summ_from":100000000,"rate":4.15},{"summ_from":500000000,"rate":4.25}]},{"period_from":31,"summs_and_rate":[{"summ_from":500000,"rate":5},{"summ_from":10000000,"rate":5.25},{"summ_from":50000000,"rate":5.5}]},{"period_from":91,"summs_and_rate":[{"summ_from":500000,"rate":4.9},{"summ_from":10000000,"rate":5.15},{"summ_from":50000000,"rate":5.4}]}]},{"code":"replenish","name":"\u041f\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439","param":[{"period_from":91,"summs_and_rate":[{"summ_from":50000000,"rate":4.74}]},{"period_from":121,"summs_and_rate":[{"summ_from":50000000,"rate":4.75}]}]}]}')},,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),m=t.n(r),n=t(4),u=t.n(n),s=(t(10),t(1)),o=m.a.createContext(),l=m.a.createContext(),c=t(2),i=function(e){return e%400===0||e%100!==0&&e%4===0};function d(e,a,t){var r=(new Date).getFullYear(),m=+e+ +e*(a/100)*t/(i(r)?366:365);return Math.ceil(m).toLocaleString()}function _(e){var a=e.heading,t=e.param,r=e.min,n=e.max,u=e.userInput,s=e.disabled,o=e.onInputChange,l=e.onInputBlur;return m.a.createElement("label",{className:"input__heading",htmlFor:t},m.a.createElement("span",{className:"label"},a),m.a.createElement("input",{className:"input",id:"".concat(t,"Input"),name:t,type:"number",min:r,max:n,value:u<0?Math.abs(u):0!==u?u:"",disabled:s,onBlur:function(e){l(e)},onChange:function(e){o(e)}}))}function f(e){var a=e.param,t=e.min,r=e.max,n=e.value,u=e.disabled,s=e.onRangeChange;return m.a.createElement("label",{className:"range__label",htmlFor:a},m.a.createElement("input",{className:"range",id:a,name:a,type:"range",step:"1",min:t,max:r,value:n,disabled:u,onChange:function(e){s(e)}}),m.a.createElement("div",{className:"range__minmax"},m.a.createElement("span",null,t?"\u043e\u0442 ".concat(Number(t).toLocaleString()," ").concat("sum"===a?"\u20bd":"\u0434\u043d\u044f"):""),m.a.createElement("span",null,r?"\u0441\u0432\u044b\u0448\u0435 ".concat(Number(r).toLocaleString()," ").concat("sum"===a?"\u20bd":"\u0434\u043d\u044f"):"")))}function p(e){var a=e.deposits,t=e.selectedOption,r=e.onSelect;return m.a.createElement("label",{htmlFor:"select",className:"input__heading"},m.a.createElement("span",{className:"label"},"\u0412\u043a\u043b\u0430\u0434"),m.a.createElement("select",{className:"select input",id:"select",value:t,onChange:function(e){r(e)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444\u043d\u044b\u0439 \u043f\u043b\u0430\u043d"},m.a.createElement("option",{disabled:!0,value:""},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043b\u0430\u043d"),a.map((function(e){return m.a.createElement("option",{key:e.code,value:e.code},e.name)}))))}function b(){var e=Object(r.useContext)(o),a=e.selectedOption,t=e.onSelect,n=e.minSum,u=e.maxSum,s=e.minPeriod,c=e.maxPeriod,i=e.userSumInput,d=e.userPeriodInput,b=e.sumValue,g=e.periodValue,v=e.onInputBlur,E=e.onInputChange,h=e.onRangeChange,O=e.disabled,j=Object(r.useContext)(l);return m.a.createElement("form",{className:"form"},m.a.createElement(p,{deposits:j,selectedOption:a,onSelect:t}),m.a.createElement(_,{heading:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430",param:"sum",min:n,max:u,onInputBlur:v,onInputChange:E,userInput:i,disabled:O}),m.a.createElement(f,{heading:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430",param:"sum",min:n,max:u,onRangeChange:h,value:b,disabled:O}),m.a.createElement(_,{heading:"\u0421\u0440\u043e\u043a \u0432\u043a\u043b\u0430\u0434\u0430",param:"period",min:s,max:c,userInput:d,onInputBlur:v,onInputChange:E,disabled:O}),m.a.createElement(f,{heading:"\u0421\u0440\u043e\u043a \u0432\u043a\u043b\u0430\u0434\u0430",param:"period",min:s,max:c,value:g,onRangeChange:h,disabled:O}))}function g(e){var a,t=e.deposit,r=e.period,n=e.sum,u=e.rate;return m.a.createElement("div",{className:"result"},m.a.createElement("div",{className:"result__block"},m.a.createElement("p",{className:"label"},"\u0422\u0430\u0440\u0438\u0444\u043d\u044b\u0439 \u043f\u043b\u0430\u043d"),m.a.createElement("p",{className:"result__value"},t)),m.a.createElement("div",{className:"result__block"},m.a.createElement("p",{className:"label"},"\u0421\u0442\u0430\u0432\u043a\u0430"),m.a.createElement("p",{className:"result__value"},0!==u&&"".concat(u," %"))),m.a.createElement("div",{className:"result__block"},m.a.createElement("p",{className:"label"},"\u0421\u0440\u043e\u043a"),m.a.createElement("p",{className:"result__value"},0!==r&&"".concat(r," ").concat(["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"][(a=r)%10===1&&a%100!==11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2]))),m.a.createElement("div",{className:"result__block"},m.a.createElement("p",{className:"label"},"\u0421\u0443\u043c\u043c\u0430"),m.a.createElement("p",{className:"result__value"},0!==n&&"".concat(n," \t\u20bd"))))}function v(e){var a=e.initialSum,t=e.totalSum;return m.a.createElement("div",{className:"hdr"},m.a.createElement("div",null,m.a.createElement("span",{className:"hdr__text"},"\u0412\u044b \u0432\u043d\u043e\u0441\u0438\u0442\u0435"),m.a.createElement("div",{className:"hdr__heading hdr__heading_initial"},0!==a&&Number(a).toLocaleString())),m.a.createElement("div",null,m.a.createElement("span",{className:"hdr__text"},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435"),m.a.createElement("div",{className:"hdr__heading hdr__heading_total"},0!==t&&t)))}function E(){var e=Object(r.useContext)(o),a=e.sumValue,t=e.period,n=e.sum,u=e.rate,s=e.deposit;return m.a.createElement("div",{className:"calculator"},m.a.createElement(v,{initialSum:a,totalSum:n}),m.a.createElement(b,null),m.a.createElement(g,{deposit:s,period:t,sum:n,rate:u}))}function h(e){var a=e.onClick,t=e.btnDisabled;return m.a.createElement("button",{className:"button",type:"button",disabled:t,onClick:a},"\u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c")}var O=function(){var e=Object(r.useState)(0),a=Object(s.a)(e,2),t=a[0],n=a[1],u=Object(r.useState)(0),i=Object(s.a)(u,2),_=i[0],f=i[1],p=Object(r.useState)(""),b=Object(s.a)(p,2),g=b[0],v=b[1],O=Object(r.useState)([]),j=Object(s.a)(O,2),N=j[0],S=j[1],x=Object(r.useState)(0),C=Object(s.a)(x,2),I=C[0],k=C[1],w=Object(r.useState)(0),B=Object(s.a)(w,2),P=B[0],y=B[1],R=Object(r.useState)(0),V=Object(s.a)(R,2),F=V[0],L=V[1],D=Object(r.useState)(0),J=Object(s.a)(D,2),M=J[0],W=J[1],Y=Object(r.useState)(0),$=Object(s.a)(Y,2),q=$[0],z=$[1],A=Object(r.useState)(0),G=Object(s.a)(A,2),H=G[0],K=G[1],Q=Object(r.useState)(0),T=Object(s.a)(Q,2),U=T[0],X=T[1],Z=Object(r.useState)(0),ee=Object(s.a)(Z,2),ae=ee[0],te=ee[1],re=Object(r.useState)(0),me=Object(s.a)(re,2),ne=me[0],ue=me[1],se=Object(r.useState)(!0),oe=Object(s.a)(se,2),le=oe[0],ce=oe[1],ie=Object(r.useState)(!0),de=Object(s.a)(ie,2),_e=de[0],fe=de[1];return Object(r.useEffect)((function(){if(H&&N){var e=N.param.filter((function(e){return e.period_from<=+H})),a=e[e.length-1].summs_and_rate;X(a),k(a[0].summ_from),y(a[a.length-1].summ_from)}}),[H,N]),Object(r.useEffect)((function(){if(U&&q){var e=U.filter((function(e){return q<U[0].summ_from?U[0]:e.summ_from<=q})),a=e[e.length-1].rate;f(a),n(d(q,_,H))}}),[H,_,U,t,q]),Object(r.useEffect)((function(){q<I&&ae<I&&(z(I),te(I))}),[q,I,ae]),m.a.createElement(l.Provider,{value:c.a},m.a.createElement(o.Provider,{value:{deposit:N.name,selectedOption:g,onSelect:function(e){v(e.target.value);var a=c.a.find((function(a){return a.code===e.target.value}));S(a),function(e){var a=e.param,t=a[0],r=a[a.length-1];L(t.period_from),W(r.period_from),K(t.period_from),z(t.summs_and_rate[0].summ_from),te(t.summs_and_rate[0].summ_from),ue(t.period_from),f(t.summs_and_rate[0].rate)}(a),ce(!1),fe(!1)},minSum:I,maxSum:P,minPeriod:F,maxPeriod:M,userSumInput:ae,userPeriodInput:ne,sumValue:q,periodValue:H,onInputBlur:function(e){"sumInput"!==e.target.id?(ue(e.target.value),e.target.value<F?K(F):K(e.target.value)):ae<I?te(I):(te(e.target.value),z(e.target.value))},onInputChange:function(e){if("sumInput"===e.target.id)return te(e.target.value),void(e.target.value>I?z(e.target.value):z(I));ue(e.target.value),e.target.value<F?K(F):K(e.target.value)},onRangeChange:function(e){"sum"===e.target.id?(z(e.target.value),te(e.target.value)):(K(e.target.value),ue(e.target.value))},period:H,sum:t,rate:_,disabled:le}},m.a.createElement("div",{className:"page"},m.a.createElement(E,null),m.a.createElement(h,{onClick:function(){window.print()},btnDisabled:_e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.84c43125.chunk.js.map
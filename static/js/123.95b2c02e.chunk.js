"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{123:function(e,t,n){n.r(t);var r=n(439),c=n(689),o=n(791),u=n(414),a=n(14),i=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],h=(0,o.useState)(!1),l=(0,r.Z)(h,2),f=l[0],d=l[1],p=(0,c.UO)().movieId;return(0,o.useEffect)((function(){d(!0),(0,u.v)("movie/".concat(p,"/reviews?")).then((function(e){s(e.results)})).catch((function(e){console.log(e),a.Am.error("Something went wrong. We could not complete your request")})).finally((function(){return d(!1)}))}),[p]),(0,i.jsx)(i.Fragment,{children:!f&&(0,i.jsxs)(i.Fragment,{children:[0===n.length&&(0,i.jsx)("p",{children:"We do not have any reviews for this movie."}),(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",e.author]}),(0,i.jsx)("p",{children:e.content})]},e.id)}))})]})})}},414:function(e,t,n){n.d(t,{v:function(){return a}});var r=n(861),c=n(757),o=n.n(c),u=n(243),a=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat("https://api.themoviedb.org/3/").concat(t,"api_key=").concat("bf492d66596427c106e4ba61d2926d57"));case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=123.95b2c02e.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(t,e,n){n.r(e);var r=n(439),a=n(689),c=n(791),o=n(414),i=n(14),s=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1],h=(0,c.useState)(!1),f=(0,r.Z)(h,2),l=f[0],p=f[1],m=(0,a.UO)().movieId;return(0,c.useEffect)((function(){p(!0),(0,o.v)("movie/".concat(m,"/credits?")).then((function(t){if(u(t.cast),!t.cast)return i.Am.error("Sorry, there is no information on the cast.")})).catch((function(t){console.log(t),i.Am.error("Something went wrong. We could not complete your request")})).finally((function(){return p(!1)}))}),[m]),(0,s.jsxs)(s.Fragment,{children:[!l&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsxs)("li",{children:[t.profile_path&&(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(t.profile_path),alt:t.name}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}),!l&&0===n.length&&(0,s.jsx)("p",{children:"We do not have any information about the cast for this movie."})]})}},414:function(t,e,n){n.d(e,{v:function(){return i}});var r=n(861),a=n(757),c=n.n(a),o=n(243),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat("https://api.themoviedb.org/3/").concat(e,"api_key=").concat("bf492d66596427c106e4ba61d2926d57"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=115.5859cd51.chunk.js.map
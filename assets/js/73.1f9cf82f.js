(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{796:function(t,s,e){"use strict";e.r(s);var n=e(70),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"cross-origin-resource-sharing-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-js"}},[t._v("#")]),t._v(" Cross-Origin Resource Sharing js")]),t._v(" "),e("p",[e("strong",[t._v("Cross-Origin Resource Sharing (CORS)")]),t._v(" is a mechanism that allows restricted resources on a web page to be requested from "),e("strong",[t._v("another domain")]),t._v(" outside the domain from which the first resource was served.")]),t._v(" "),e("p",[t._v("By default, this behavior is not allowed for security reasons, but in the case of RESTful API, the idea is to let others use the server freely and get the provided data. After adding CORS to our API, anyone from tools like Postman and browsers (web pages) can send us a request and get the response.")]),t._v(" "),e("p",[t._v("Let's go to the app.js file and add the proper middleware which will handle this. We are going to write our own CORS, but it is possible to use packages to achieve the same result.")]),t._v(" "),e("p",[t._v("We are going to put it in right after the bodyParser and before the route handlers:")]),t._v(" "),e("div",{staticClass:"language-JS extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Origin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Access-Control-Allow-Headers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Origin, X-Requested-With, Content-Type, Accept, Authorization"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET, PUT, POST, DELETE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v('Here we are setting two headers. First, the "'),e("strong",[t._v("Access-Control-Allow-Origin")]),t._v('" header controls who is allowed to send a request. By giving it the * value, we give permission to anyone. To restrict permission to a specific domain, write the domain instead of the asterisk (*).')]),t._v(" "),e("blockquote",[e("p",[t._v("It is important to know that setting up a specific domain will only protect you from browsers. Tools like Postman and CURL ignore that data and can send a request in any condition of CORS.")])]),t._v(" "),e("p",[t._v('The next header is "'),e("strong",[t._v("Access-Control-Allow-Headers")]),t._v('", which allows us to set up different types of headers with the request. In this case, "'),e("strong",[t._v("Origin, X-Requested-With, Content-Type, Accept, Authorization")]),t._v('".')]),t._v(" "),e("p",[t._v('The "'),e("strong",[t._v("req.method === 'OPTIONS'")]),t._v('" condition is sent by default from browsers just before the request itself to check if it has the permission to send that type of request. In this case, we want to let the browser/client to send "GET, PUT, POST, DELETE" types of requests.')]),t._v(" "),e("p",[t._v('But this middleware will lock all the incoming requests. We need to call "return next()" at the end, so after setting up the headers (not sending back a method response, because it has its response/return), it will continue to our other middlewares and won\'t get stuck there.')]),t._v(" "),e("blockquote",[e("p",[t._v("In the first case, we are not returning a response (just setting up). But in the last case, where the browsers check for valid methods, we need to send a response. In this case, it is just an empty object.")])])])}),[],!1,null,null,null);s.default=a.exports}}]);
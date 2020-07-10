(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{722:function(s,a,t){s.exports=t.p+"assets/img/post.839e8cc4.png"},763:function(s,a,t){"use strict";t.r(a);var n=t(70),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ruta-de-usuarios-post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ruta-de-usuarios-post"}},[s._v("#")]),s._v(" Ruta de usuarios (POST)")]),s._v(" "),n("p",[s._v("Ahora que tenemos la configuración necesaria en el archivo app.js, podemos agregar tantas rutas como queramos en el archivo users.js. Entonces, escribamos el manejador de solicitud (handler) "),n("strong",[s._v("POST")]),s._v(".")]),s._v(" "),n("p",[s._v("Es similar a la solicitud GET con algunas diferencias menores:")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users.js")]),s._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        message"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Handling POST request of the /users'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),n("p",[s._v("No olvide exportar su ruta para que el archivo app.js pueda acceder a su archivo users.js:")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("p",[s._v("Ahora que tenemos nuestras rutas "),n("strong",[s._v("GET")]),s._v(" y "),n("strong",[s._v("POST")]),s._v(", intentemos enviar una solicitud en Postman.\nNo olvide reiniciar su servidor para aplicar los cambios. Para eso, puede matar el servidor presionando la combinación de teclas Ctrl+C e iniciarlo nuevamente con el comando:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("$ node server.js\n")])])]),n("p",[n("strong",[s._v("GET: localhost:3000/users")])]),s._v(" "),n("p",[n("img",{attrs:{src:"",alt:"PostmanGET"}})]),s._v(" "),n("p",[n("strong",[s._v("POST: localhost:3000/users")]),s._v(" "),n("img",{attrs:{src:t(722),alt:"PostmanGET"}})]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("Tenga en cuenta que ya no puede enviar una solicitud a la "),n("strong",[s._v("ruta raíz")]),s._v(" (localhost:3000) ya que no hay controladores para eso. Además, como se especifican las rutas de los usuarios, solo aceptará la solicitud GET y POST y fallará (devolverá un error) en cualquier otro tipo.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
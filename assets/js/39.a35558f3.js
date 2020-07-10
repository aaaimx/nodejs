(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{759:function(e,s,a){"use strict";a.r(s);var t=a(70),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nodemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[e._v("#")]),e._v(" nodemon")]),e._v(" "),a("p",[e._v("Ahora tenemos la ruta principal y podemos probar cada ruta con Postman. Sin embargo, después de cada cambio, necesitamos "),a("strong",[e._v("reiniciar")]),e._v(" el servidor donde generalmente lo olvidamos.")]),e._v(" "),a("p",[e._v('Hay un paquete npm llamado "'),a("strong",[e._v("nodemon")]),e._v('" que reinicia el servidor cada vez que hacemos algunos cambios. Instalemos este paquete y configurémoslo correctamente, para que no necesitemos reiniciar el servidor manualmente después de cada cambio. Para instalar el paquete, use el siguiente comando:')]),e._v(" "),a("p",[e._v("$ npm install --save-dev nodemon")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Tenga en cuenta que usamos "),a("strong",[e._v("--save-dev")]),e._v(" para la opción. La parte "),a("strong",[e._v("--save")]),e._v(" significa que agregará este paquete dentro de las dependencias del archivo "),a("strong",[e._v("package.json")]),e._v(" y la parte "),a("strong",[e._v("-dev")]),e._v(" indica que lo agregará dentro de devDependencies , porque no necesitamos dicha herramienta cuando publicamos u hospedamos nuestro servidor.")])]),e._v(" "),a("p",[e._v("Después de la instalación, puede verificar el archivo package.json para las siguientes líneas (la versión puede variar):")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nodemon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^1.18.3"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Pero solo instalarlo no es suficiente. Necesitamos configurarlo en nuestros scripts package.json. Por ahora, nuestro script es el siguiente:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"echo \\"Error: no test specified\\" && exit 1"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Esto no hace nada específico, así que eliminemos y reemplacemos con lo siguiente:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nodemon server.js"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Ahora necesita ejecutar el siguiente comando para iniciar el servidor:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ npm start\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("IMPORTANTE")]),e._v(" "),a("p",[e._v("Se iniciará el servidor de nodemon, que vigila constantemente todos los cambios (incluso los comentarios) y reinicia el servidor en cada cambio.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
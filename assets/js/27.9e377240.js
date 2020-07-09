(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{747:function(s,a,t){"use strict";t.r(a);var e=t(70),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"modelo-para-el-codigo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modelo-para-el-codigo"}},[s._v("#")]),s._v(" Modelo para el código")]),s._v(" "),t("p",[s._v("Necesitamos crear un nuevo modelo para el código, como el modelo que creamos para el usuario.\nEn general, Es similar excepto por el Schema en si.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//models/code.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mongoose "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mongoose'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" codeSchema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Schema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  _id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  language"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Striing\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("model")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" codeSchema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Esto funcionará bien por ahora. Sin embargo, necesitamos alguna relación en nuestro schema para vincular el documento a un usuario.\nEntonces, cómo sabremos que el código es creado por qué usuario ¿(el dueño del código)?")]),s._v(" "),t("p",[s._v("Para eso necesitamos agregar un nuevo campo en nuestro schema , el cual tomará el ID del usuario referenciado en el modelo de usuario.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v(" user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" mongoose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ObjectId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ref"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("Si estas usando demasiadas relaciones en tu schema, entonces debes cambiarte a bases de datos basados en SQL como MySQL ó PostgreSQL")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
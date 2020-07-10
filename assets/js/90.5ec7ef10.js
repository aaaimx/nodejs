(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{809:function(a,e,t){"use strict";t.r(e);var s=t(70),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"eventos-de-secuencia-de-lectura"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-secuencia-de-lectura"}},[a._v("#")]),a._v(" Eventos de secuencia de lectura")]),a._v(" "),t("p",[t("strong",[a._v("Las secuencias de lectura")]),a._v(" nos permiten leer datos de una fuente (la fuente puede ser un archivo, una conexión o cualquier proveedor de datos).")]),a._v(" "),t("p",[a._v("Las secuencias de lectura tienen dos modos, "),t("strong",[a._v("flowing")]),a._v(" y "),t("strong",[a._v("pause")]),a._v(", que afectan la forma en que podemos usarlos:")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("flowing")]),a._v(": En este modo, los datos se leen del sistema automáticamente y se proporcionan a una aplicación lo más rápido posible mediante eventos (EventEmitters).")]),a._v(" "),t("li",[t("strong",[a._v("paused")]),a._v(": En este modo, se debe de llamar explícitamente al método "),t("code",[a._v("read()")]),a._v(" para leer los datos de la secuencia (una porción de datos). Use el método "),t("code",[a._v("pause()")]),a._v(" para pausar la transmisión.")])]),a._v(" "),t("p",[a._v("La lectura no generará datos hasta que los datos proporcionados sean "),t("strong",[a._v("consumidos o ignorados")]),a._v(". Si el mecanismo de consumo está descativado o eliminado, la lectura intentará dejar de generear los datos.")]),a._v(" "),t("p",[a._v("Aquí cubriremos los eventos comunes de las secuencias de lectura:")]),a._v(" "),t("p",[a._v("'"),t("strong",[a._v("close")]),a._v("': Este evento indica que no se emitirán más eventos. Se emite cuando la secuencia y cualquiera de sus recursos se han cerrado.")]),a._v(" "),t("p",[a._v("'"),t("strong",[a._v("data")]),a._v("': Este evento se emite cuando la secuencia proporciona datos al consumidor. Esto suscede cuando hay un detector de eventos de 'data' disponible, el flujo se cambia a "),t("strong",[a._v("flowing mode")]),a._v(" ya sea por los métodos "),t("code",[a._v("pipe()")]),a._v(" o "),t("code",[a._v("resume()")]),a._v(", o cuando se llama al método "),t("code",[a._v("read()")]),a._v(" con los datos disponibles.")]),a._v(" "),t("p",[t("em",[a._v("supongamos que tenemos un archivo con tamaño de aproximadamente 150 MB")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" readable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createReadStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./file.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nreadable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'data'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("chunk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("Received ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("${")]),a._v("chunk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[a._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v(" bytes of data.")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[t("em",[a._v("readable")])]),a._v(" escuchará el evento 'data' y llamará a la devolución de llamada cuando se emita.")]),a._v(" "),t("ul",[t("li",[t("em",[a._v("Si se adjunta un detector de eventos de 'data' a una secuencia que no ha sido pausada manualmente, la secuencia cambiará al modo de flujo y los datos se pasarán cuando esté disponible")])])]),a._v(" "),t("p",[a._v("'"),t("strong",[a._v("end")]),a._v("': Este evento se emitirá cuando no haya más datos disponibles de la transmisión (totalmente consumidos).")]),a._v(" "),t("p",[t("em",[a._v("Por ejemplo, agreguemos la siguiente parte al último fragmento de código")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\nreadable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'end'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'There is no more data.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Además del oyente de 'data' anterior, este también escuchará el evento 'end' y activará la devolución de llamada cada vez que se emita el 'final'.")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("El evento 'error' se puede emitir en cualquier momento. Las razones de este evento son si el sistema no puede generar datos o si hay una porción de datos no válida.")])])}),[],!1,null,null,null);e.default=n.exports}}]);
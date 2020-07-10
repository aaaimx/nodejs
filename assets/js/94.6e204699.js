(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{812:function(e,t,a){"use strict";a.r(t);var s=a(70),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[e._v("#")]),e._v(" Streams")]),e._v(" "),a("p",[a("strong",[e._v("Streams")]),e._v(" are the most powerful tool to work with when you have a large amount of data. They are similar to strings or arrays, but the difference is that streams might "),a("strong",[e._v("not be available all at once")]),e._v(" (memory size or network bandwidth issues). So, streams load the data in "),a("strong",[e._v("chunks")]),e._v(" once at a time. But handling big data is not the only use case for them; you can also use them for "),a("strong",[e._v("piping")]),e._v(" the data into other commands (similar to piping in Linux).")]),e._v(" "),a("p",[e._v("Most of the Node.js applications, even a simple APIs such as the Creating Web Server, use streams in some way. For example, "),a("strong",[e._v("req")]),e._v(" and "),a("strong",[e._v("res")]),e._v(" are streams. "),a("strong",[e._v("req")]),e._v(" is an http.IncomingMessage, which is a "),a("strong",[e._v("Readable Stream")]),e._v("; "),a("strong",[e._v("res")]),e._v(" is an http.ServerResponse, which is a "),a("strong",[e._v("Writable Stream")]),e._v(".")]),e._v(" "),a("p",[e._v("An example of creating a Writable Stream is the "),a("strong",[e._v("fs.createWriteStream()")]),e._v(" method from the 'fs' module. Writable streams expose methods such as "),a("strong",[e._v("write()")]),e._v(" and "),a("strong",[e._v("end()")]),e._v(" that are used to write data onto the stream.")]),e._v(" "),a("p",[e._v("A good example of creating a Readable Stream is using the fs.createReadStream() method. Readable streams use the EventEmitter to notify application code when data is available to be read from the stream. That available data can be read from the stream in multiple ways, which will be discussed later.")]),e._v(" "),a("blockquote",[a("p",[e._v("Both "),a("strong",[e._v("Writable")]),e._v(" and "),a("strong",[e._v("Readable")]),e._v(" streams use the "),a("strong",[e._v("EventEmitter")]),e._v(" in various ways to communicate the current state of the "),a("strong",[e._v("stream")]),e._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
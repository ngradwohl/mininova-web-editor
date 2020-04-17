(this["webpackJsonpmininova-web-editor"]=this["webpackJsonpmininova-web-editor"]||[]).push([[0],{14:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),l=(n(19),n(4)),u=n(21),i=n(23),s=240,m=[0,32,41,3,1],d=function(e,t){return new Uint8Array([176,e,t])},p=function(e,t,n){return new Uint8Array([176,99,e,176,98,t,176,6,n])},f=function(e){return e>=0&&e<=127},v=function(e){if(!e.every(f))throw new RangeError("Sequence contains invalid sysex value");return new Uint8Array([s].concat(m).concat(e).concat([247]))},h=function(e,t){return e&&e.send(t)},E=[0,"Sine",1,"Triangle",2,"Sawtooth"];var b=function(e){var t=e.currentPatch,n=e.loadPatch,a=e.output;return c.a.createElement("div",null,c.a.createElement("h3",null,"Patch"),c.a.createElement("p",null,"Current patch: ",t),c.a.createElement("button",{onClick:function(){return h(a,p(63,0,0))}},"Prev patch"),c.a.createElement("button",{onClick:function(){return h(a,p(63,0,2))}},"Next patch"),c.a.createElement("button",{onClick:n},"Load patch"),c.a.createElement("h3",null,"Oct / Arp"),c.a.createElement("button",{onClick:function(){return h(a,d(13,0))}},"Change octave"),c.a.createElement("button",{onClick:function(){return h(a,p(0,122,47))}},"Arp ON"),c.a.createElement("button",{onClick:function(){return h(a,p(0,122,46))}},"Arp OFF"),c.a.createElement("h3",null,"Oscillators"),c.a.createElement("h4",null,"Oscillator 1"),c.a.createElement("select",{onClick:function(e){return h(a,d(19,e.target.value))}},u.a((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return c.a.createElement("option",{key:n,value:n},a)}),i.a(2,E))))},g=n(24),I=n(22);var O=function(){return c.a.createElement("div",null,c.a.createElement("p",null,"It looks like your browser does not support MIDI."),c.a.createElement("p",null,"MIDI access is an experimental technology. Check the list of compatible browsers in the ",c.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#Browser_compatibility"},"Browser compatibility table "),"."))};var w=function(e){var t=e.onIncomingMidiMessage,n=e.selectPatch,r=e.input,o=e.setInput,u=e.output,i=e.setOutput,s=Object(a.useState)(null),m=Object(l.a)(s,2),d=m[0],p=m[1],f=Object(a.useState)(null),v=Object(l.a)(f,2),h=v[0],E=v[1],b=Object(a.useState)(null),w=Object(l.a)(b,2),k=w[0],y=w[1];return Object(a.useEffect)((function(){var e=function(e){console.log("Detecting devices");for(var t=[],n=e.outputs.values(),a=n.next();a&&!a.done;a=n.next())t.push(a.value);y(t);for(var c=[],r=e.inputs.values(),o=r.next();o&&!o.done;o=r.next())c.push(o.value);E(c)};navigator.requestMIDIAccess?(p(!0),navigator.requestMIDIAccess({sysex:!0}).then((function(t){t.onstatechange=function(n){e(t)},e(t)}))):p(!1)}),[]),null===d?c.a.createElement("p",null,"Detecting MIDI support..."):d?null===h||null===k?c.a.createElement("div",null,"Detecting MIDI devices..."):c.a.createElement("div",null,c.a.createElement("p",null,"Available devices:"),c.a.createElement("ul",null,h.map((function(e){return c.a.createElement("li",{key:e.id},"IN ",e.name,r&&e.id===r.id?" (selected)":c.a.createElement("button",{onClick:function(){return function(e){r&&(r.onmidimessage=null);var n=g.a(I.a("id",e))(h);n.onmidimessage=t,o(n)}(e.id)}},"select"))})),k.map((function(e){return c.a.createElement("li",{key:e.id},"OUT ",e.name,u&&e.id===u.id?" (selected)":c.a.createElement("button",{onClick:function(){return function(e){var t=g.a(I.a("id",e))(k);i(t),n(t)}(e.id)}},"select"))})))):c.a.createElement(O,null)},k=[127,96,33,0,0,0,0],y=[127,98,1,0,0,0,0],j=[127,64,0,0,0,0,0];var C=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)(null),d=Object(l.a)(m,2),f=d[0],E=d[1],g=function(){return h(i,v(j))};return c.a.createElement("div",null,c.a.createElement(w,{onIncomingMidiMessage:function(e){192===e.data[0]?E(e.data[1]):console.log(e)},selectPatch:function(e){h(e,v(y)),setTimeout((function(){return h(e,v(k))}),1e3),setTimeout((function(){return h(e,p(63,0,1))}),2e3),setTimeout(g,3e3)},input:n,setInput:r,output:i,setOutput:s}),c.a.createElement(b,{currentPatch:f,loadPatch:g,input:n,output:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.feb95ad5.chunk.js.map
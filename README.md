<section style="background-color:LightSkyBlue;">
<a href="https://hll.nu"><img src="https://hll.nu/achieve/skyhigh1.jpg"></a>
<p><b>Achieve_rooms is a very efficient ultralight-weight rooms program for use with the Achieve server and WS Websockets.</b></p>
<h3>Requirements:</h3>
<ul>
<li><a href="https://nodejs.org/en/download/">Node.js</a> installed.</li>
<li><a href="https://www.npmjs.com/package/achieve">Install Achieve</a> for HTTP/S/2.</li>
  <li><a href="https://www.npmjs.com/package/ws">Install WS <i>globally</i></a> for Websockets.</li>
<li><a href="https://www.npmjs.com/package/achieve_rooms">Install achieve_rooms</a></li>
</ul>
<h2>Quick Start</h2>
<p>There is a quick start configuration / startup file available at <a href="https://github.com/highlevellogic/achieve_quick_start">Github: achieve_quick_start</a> 
The quick start is configured to use rooms with the WS websocket app and Achieve server. To learn to customize for other uses, visit the 
npm pages for each application.</p>
<h3>Using achieve_rooms</h3>
<p>Once you have installed the components, read comments in <i>achieve_quick_start.js</i> and set file paths appropriately. When ready, 
run <code>node achieve_quick_start</code>.</p>
<p>To join a room, add a room name to the URI that is used in the websocket connection request, for example:</p>
<blockquote>ws = new Websocket("ws://example.com:8440?room=myroom687");</blockquote>
<p>This works reguardless of language used. Your connection will join the room when the connection request is made. If the room does not yet 
exist, it will be created. When everyone in a room disconnects, the room is deleted. If you do not specify a room, you will be in the lobby.</p>
<p>Specifying the room with the connection request helps make achieve_rooms run faster. Identifying and registering in a room happens only 
once. The room is associated with the connection itself, where it is directly, quickly and easily accessed by achieve_rooms. 
Room information is never needed with any message you send.</p>
<h3>The other components</h3>
<p>Achieve is a modern, high-performance, developer-friendly HTTP/S/2 web server. WS is advertised as being the fastest websocket server 
available for node. The quick start file mentioned above uses the "noserver" option for WS, which means that Achieve and WS use the same 
port numbers. This avoids problems with CORS. I have been using this combination for years, with great satisfaction.</p>
<h3>Copyright and License</h3>
<p>copyright © 2022, Roger F. Gay, may be freely distributed with the MIT license</p>
</section>

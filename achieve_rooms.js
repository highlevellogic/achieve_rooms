
exports.theRooms = {lobby: []};

exports.joinRoom = function (ws,url) {
  let theRoom = "lobby";
  let getRoomPart = url.split('?');
  if (getRoomPart.length >= 2) {
    getRoomPart = getRoomPart[1].split('&');
    for (let i=0; i<getRoomPart.length; i++) {
      let temp = getRoomPart[i].split('=');
      if (temp[0] == "room") {
        if (temp[1] != "") theRoom = temp[1];
        break;
      }
    }
  }
  if (exports.theRooms[theRoom] === undefined) exports.theRooms[theRoom] = [];
  ws.room = theRoom;
  exports.theRooms[theRoom].push(ws);
}
exports.remove = function (ws) {
  try {
    let theRoom = ws.room;

    exports.theRooms[theRoom].splice(exports.theRooms[theRoom].indexOf(ws),1);
    if (exports.theRooms[theRoom].length == 0) delete exports.theRooms[theRoom];
    
  } catch (e) {
    console.log("rooms.delete error: " + e);
  }
}
exports.broadcast = function (ws,data) {
  let client;
  for (i=0; i<exports.theRooms[ws.room].length; i++) {
    client = exports.theRooms[ws.room][i];
    try {
      if (client !== ws) client.send(data);
    } catch (e) {
      console.log("rooms broadcast error: " + e);
      if (client === null || client === undefined || client == 1001 || client.readyState === WebSocket.CLOSE) {
        exports.theRooms[ws.room].splice(i,1);
        if (exports.theRooms[theRoom].length == 0) {
          delete exports.theRooms[theRoom];
          break;
        }
      }
    }
  }
}

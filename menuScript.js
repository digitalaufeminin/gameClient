var socket = io('http://digi2-romaindav.c9.io/');


//websocket event handlers
// socket.on('buttonClick',toDoOnButtonClick);
// socket.on('headerClick',toDoOnHeaderClick);
socket.on('stockUpdate',function(data){
    $('#ipads').text(data.ipads);
    $('#smartbands').text(data.smartbands);
    $('#rest').text(data.rest);
});


$("#reset").on("click",function(){
    socket.emit("reset");
});
$("#submit").on("click",function() {
    var i = $("#i").val();
    var s = $("#s").val();
    var r = $("#r").val();
    socket.emit("modify",{ipad:i,smartbands:s,rest:r});
})
//init
socket.emit('askStockStatus');

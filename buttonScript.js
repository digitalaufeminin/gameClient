var socket = io('http://digi2-romaindav.c9.io/');


function activateButton(){
    $("#button").on("click",onButtonClick);
    $("#button").fadeTo(0,1);
}
function activateHeader(){
    $("#button").fadeTo(0,0.5);
    $("header").on("click",onHeaderClick);
}

function onButtonClick(){
    console.log('click');
    socket.emit('buttonClick');
    activateHeader();
    $("#button").off("click");
}

function onHeaderClick(){
    console.log('head');
    socket.emit('headerClick');
    activateButton();
    $("header").off("click");
}

//websocket event handlers
// socket.on('buttonClick',toDoOnButtonClick);
// socket.on('headerClick',toDoOnHeaderClick);
socket.on('buttonStatusUpdate',function(pushed){
    if(pushed){
        activateHeader();
        $("#button").off("click");}
    else{
        activateButton();
        $("header").off("click");}
});

//init
socket.emit('askButtonStatus');

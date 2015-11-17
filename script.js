var socket = io('http://digi2-romaindav.c9.io/');


/*function hundredTimes(){
    var tab = [];
    for(var i=0;i<100;i++){
        tab.push(tireAuSort());
    }
    console.log(tab.reduce(function(pv, cv) { return pv + cv; }, 0));
    ipads=2;smartbands=20;rest = nbParticipantsInit - ipads - smartbands;
}*/


function toggleRotation(data){
    $('#roue').toggleClass('rotate_'+data.caseActuelle);
    $("#arrow_row").toggleClass("rotate_arrow")
    $("#result").toggleClass("blink");
    $("#result").html(data.texte);
}

//websocket event handlers
socket.on('switchCase',function(data){
    toggleRotation(data);
});

socket.on('resetWheel',function(){
    location.reload();
});

$('#roue').width($('#wheel_row').height());

socket.emit('askWheelStatus')
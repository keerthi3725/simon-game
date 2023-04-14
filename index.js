
var started=false;
var level=0;
var pos=0;
var i=0;
var color=["green","blue","yellow","red"];
var pattern = [];
$(document).keypress(function(){
    if(!started){
        pattern=[];
        level=0;
        //$("h1").text("Level 1");
        setTimeout(function () {
            st_game();
        }, 600);
        var pos=0;
    }
});
$(".start").click(function(){

    if(!started){
        $(".start").addClass("pressed");
        setTimeout(function () {
            $(".start").removeClass("pressed");
        }, 200);
        pattern=[];
        level=0;
        //$("h1").text("Level 1");

        setTimeout(function () {
            st_game();
        }, 600);
        var pos=0;
    }
});
function st_game(){
    started=true;
    level++;
    i=0;
    $("h1").text("Level "+level);
    var x= Math.floor(Math.random()*4);
    animatePress(color[x]);
    pattern.push(color[x]);
}
$(".btn").click(function() {
    if(i===pattern.length){
        return;
    }
    var chCol = $(this).attr("id");
    animatePress(chCol);
    var audio=new Audio("sounds/"+chCol+".mp3");
    audio.play();
    if(chCol!==pattern[i]){
        started=false;
        game_over();
        return;
    }
    i++;
    if(started&&i==(pattern.length)){
        setTimeout(function () {
            st_game();
        }, 600);
    }
    if(!started){
        return;
    }
});

function game_over(){
    started=false;
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $(".start").text("Restart");
    $("h1").text("Game Over at Level "+level+", Press Any Key to Restart");
    $("body").addClass("game-over");
     setTimeout(function () {
         $("body").removeClass("game-over");
    }, 600);

}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
}, 300);
}

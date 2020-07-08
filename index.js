var level = 1;
$(document).keypress(function (e) { 
    level = 1;
    var startSound = new Audio("sounds/game-begin.wav");
    startSound.play();
    $("h1").text("Level 1");
    var chk = 1;
    var keys = [];
    var i = 0;
    var j = 0;
    var k = randomKeyGenerator(e);
    keys.push(k);
    $("button").click(function (e) { 
        if (chk==0){
            return;
        }
        var btnSound = new Audio("sounds/sound"+this.textContent+".wav");
        btnSound.play();
        if (this.textContent!=keys[j]){
            $("h1").text("Game Over! Press A Key To Restart.");
            var overSound = new Audio("sounds/game-over.wav");
            overSound.play();
            chk = 0;
            return;
        }
        if (i == j) {
            setTimeout(function () {
                level++;
                $("h1").text("Level " + level);
                i++;
                j = 0;
                k = randomKeyGenerator(e);
                keys.push(k);
            }, 500);

        }
        else
            j++; 
    });    
});

function randomKeyGenerator(event){
    var rKey = Math.random()*4;
    rKey = Math.floor(rKey)+1;
    if (event.type=="click"){
        var btnSound = new Audio("sounds/sound"+rKey+".wav");
        btnSound.play();
    }
    $(".btn"+rKey).addClass("highlight");
    setTimeout(function(){
        $(".btn"+rKey).removeClass("highlight");
    }, 500);
    return rKey;
}
let _$kggif = new Image();
_$kggif.onload= null;
_$kggif.id = "kgcrsgif";
$(document).ready(function (){
    $("body").append(_$kggif);
    $("#kgcrsgif").css({
        "display":"none"
    });
    $(".KingCrimson").click(function (){
        let h = $(this).data("href");
        let b = $(this).data("blank");
        let boss = $(this).data("boss");
        _$Crimson(boss,b,h);
    });
});

function _$Crimson(boss,blank,href){
    if(boss == true){
        let kingbos = new Audio("sources/boss.mp3");
        kingbos.play();
        kingbos.onended=function (){
            _$Crimson(false, blank, href);
        };
    }else {
        _$kggif.src = "sources/KingCrimson.gif";
        $("#kgcrsgif").css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "width":"100%",
            "height":"100%",
            "display":"block"
        });
        let f = new Audio("sources/king.mp3");
        f.play();
        f.onended = function () {
            _$kggif.src = "sources/KingCrimson.gif";
            $("#kgcrsgif").css({
                "display":"none"
            });
            if(href!=null){
                if(blank == true){
                   window.open(href);
                }else {
                   location.href = href;
                }
            }
        }
    }
}
function KingCrimson(boss){
   _$Crimson(boss,false,null);
}
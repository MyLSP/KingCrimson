let _$KingCrimson_img = [];
for(let t = 0;t<9;t++){
    let c =[13,15,18,20,21,22,24,25,26]
    _$KingCrimson_img[c[t]] = new Image();
    _$KingCrimson_img[c[t]].onload =function (){
        $("#kgcs").append(_$KingCrimson_img[c[t]])
        $("#kgcs>img").css({
            "position":"absolute",
            "width": "100%",
            "height": "100%",
            "display":"none",
        })
    }
    _$KingCrimson_img[c[t]].src = "sources/"+c[t]+".webp"
}
$(document).ready(function (){

    $("body").append("<div id = 'kgcs'></div>");
    $("#kgcs").css({
        "position":"fixed",
        "top":"0",
        "left":"0",
        "width":"100%",
        "height":"100%",
        "display":"none",
    });
    $(".KingCrimson").click(function (){
        let h = $(this).data("href");
        let b = $(this).data("blank");
        let boss = $(this).data("boss")
        _$Crimson(boss,[13,15,18,20,21,22,24,25,26],b,h,_$KingCrimson_img)

    });
});

function _$Crimson(boss,c,blank,href,m){
    let i = 0
    let imgi=0
    if(boss == true){
        let kingbos = new Audio("sources/boss.mp3");
        kingbos.play();
        $("#kgcs").css({"display":"block"});
        kingbos.onended=function (){
            return _$Crimson(false, c, blank, href, m);
        };
    }else {
        $("#kgcs").css({"display":"block"});
        let f = new Audio("sources/king.mp3");
        f.play();
        let s = setInterval(function (){
            if(i==26){
                clearInterval(s);
                i = 0;
                $("#kgcs").css({
                    "display":"none"
                });
            }else {
                i++;
            }

            if($.inArray(i,c)!=-1){
                $("#kgcs>img:not(:eq("+imgi+"))").css({"display":"none"
                })
                $("#kgcs>img:eq("+imgi+")").css({
                    "display":"block"
                })
                imgi++
            }else {
                $("#kgcs>img").css("display","none")
            }
        },20);
        f.onended = function () {
            if(blank == true){
                window.open(href);
            }else {
                location.href = href;
            }
        }
    }
}
function KingCrimson(boss){
    let c = [13,15,18,20,21,22,24,25,26]
    _$Crimson(boss,c,false,null,_$KingCrimson_img)
}
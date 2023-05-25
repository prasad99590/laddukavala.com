function moveMouse()
{
    var t=Math.round(Math.random())*500;
    var l=Math.round(Math.random())*500;
    document.querySelector(".btn").style.top=""+t+"px";
    document.querySelector(".btn").style.left=""+l+"px";
}
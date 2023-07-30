zoom=2;
document.body.onmousemove=function(){
    loupe=document.getElementById("loupe");
    loupe.style.left=event.clientX+"px";
    loupe.style.top=event.clientY+"px";
    loupe.style.backgroundSize=(1000*zoom)+"px";
    loupe.style.backgroundPosition=(-loupe.offsetLeft*zoom-100)+"px"+(-loupe.offsetTop*zoom-75)+"px";
}




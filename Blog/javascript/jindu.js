/**
 * Created by yuzhe on 2016/5/11.
 */
function otherPage() {
    window.open("#","newPage");
    //这个地方应该用异步实现，我还没看Ajax;
}
function getHr() {
    var par=document.getElementsByTagName("p")[0];
    var hr=document.getElementsByTagName("hr")[0];
    var btn=document.getElementById("btn");
    var final_width=100;
    hr.style.position="absolute";
    hr.style.left="0";
    hr.style.top="0";
    hr.style.width="0px";
    var wth=parseInt(hr.style.width);
    btn.onclick=function () {
        console.log(parseInt(hr.style.left));
        console.log(parseInt(hr.style.top));
        console.log(parseInt(hr.style.width));


        if(wth>=final_width){
            otherPage();
        }
        if(wth<final_width){
            wth++;
            console.log(wth);

        }
        hr.style.width=wth+"px";
        par.innerText=wth+"%";
    }
}
window.onload=getHr;

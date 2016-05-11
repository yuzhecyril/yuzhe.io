/**
 * Created by yuzhe on 2016/5/10.
 */
var list=document.getElementById("mylist");
EventUtil.addHandler(list,"click",function (event) {
    event=EventUtil.getEvent(event);
    var target=EventUtil.getTarget(event);
    switch (target.id){
        case "one":
            this.firstElementChild.style.color="red";
            break;
        case "two":
            document.write("good");
            break;
        case "three":
            document.title="This is a demo";
            break;
    }
            
});
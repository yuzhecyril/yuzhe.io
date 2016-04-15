/**
 * Created by yuzhe on 2016/4/13.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
label=document.getElementById("aqi-city-input");
weather=document.getElementById("aqi-value-input");
dtc = document.getElementsByClassName("de");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=label.value.trim();  //原生trim()函数只能删除文本前后的空格，而不能删除中间的空格
    var city_weather=weather.value.trim();
    if(isNaN(city_weather||city_weather==null||city_weather=="")){
        alert("空气质量必须在0~100之间！");
        return false;
    }
    if(!city.match(/^[\u4e00-\u9fa5_ a-zA-Z]+$/)){
       alert("城市名必须为中文或者英文！");
        return false;
    }
    else {
        aqiData[city] = city_weather;  //js对象类型  类似于数组 可以用数组的形式表示 也可以使用apiData.city 但此处使用了数组的存储属性 所以之恩那个是用aqiData[city]

    }
    
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tab=document.getElementById("aqi-table");
    tab.innerHTML="";   //每提交一次覆盖一次
    /*
     *for-in遍历  得到aqiData中存储的所有值   
    */
    for (var x in aqiData){
        // 此处亦可使用dom添加 
        var item='<tr><td>'+x+'</td><td>'+aqiData[x]+'</td><td><button class="de">删除</button></td></tr>';
        tab.innerHTML+=item;
    }
        // alert(document.getElementsByClassName("de").length);


    }


/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
    
}
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
//
function delBtnHandle(target) {
    // do sth.
    var deleteTr = target.parentElement.parentElement.firstChild.innerHTML;
    delete aqiData[deleteTr];
    renderAqiList();
}

  

//}

function init() {

    //bot.onclick = function () {
    //    addBtnHandle();}
    //    for (var i = 0; i < dtc.length; i++) {
    //        dtc[i].onclick = function () {
    //            delBtnHandle(i);
    //            alert(i);
    //
    //        }
    //
    //    } }
        var bot=document.getElementById("add-btn");
    bot.addEventListener("click",addBtnHandle,false);
    var table=document.getElementById("aqi-table");
    table.addEventListener('click',function(e){
        if(e.target&&e.target.nodeName=="BUTTON"){
            delBtnHandle(e.target);
        }
    });

}
//addBtnHandle();
window.onload=init;
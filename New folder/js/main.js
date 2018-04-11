var L1=document.getElementsByClassName("l1");
var L2=document.getElementsByClassName("l2");
var L3=document.getElementsByClassName("l3");
var button=document.getElementById("buton");

document.addEventListener("click",function (e) {
    L3[0].style.width="0px";
    L3[0].style.transition="0.5s";
    L2[0].style.width="100%";
});
button.onclick= function () {
   var element=document.createElement('div');
   element.setAttribute('class','pppp1');
   document.body.appendChild("element");
   

    
};

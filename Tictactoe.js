var mark="X";
function fun(b_id){
    var d= document.getElementById(b_id);
    if(mark=="X"){
        d.innerText="O";
        mark="O";
    }
    else{
        d.innerText="X";
        mark="X";
    }
    d.disabled=true;
    checkwin();
}
function checkwin(){
    var b1=document.getElementById("a");
    var b2=document.getElementById("b");
    var b3=document.getElementById("c");
    var b4=document.getElementById("d");
    var b5=document.getElementById("e");
    var b6=document.getElementById("f");
    var b7=document.getElementById("g");
    var b8=document.getElementById("h");
    var b9=document.getElementById("i");
    if(b1.innerText==b2.innerText && b2.innerText==b3.innerText && b1.innerText!="")
    {
        document.getElementById("result").innerText=b1.innerText+" Wins ";
    }
    if(b4.innerText==b5.innerText && b5.innerText==b6.innerText && b4.innerText!="")
    {
        document.getElementById("result").innerText=b4.innerText+" Wins ";
    }
    if(b7.innerText==b8.innerText && b8.innerText==b9.innerText && b7.innerText!="")
    {
        document.getElementById("result").innerText=b7.innerText+" Wins ";
    }
    if(b1.innerText==b4.innerText && b4.innerText==b7.innerText && b1.innerText!="")
    {
        document.getElementById("result").innerText=b1.innerText+" Wins ";
    }
    if(b2.innerText==b5.innerText && b5.innerText==b8.innerText && b2.innerText!="")
    {
        document.getElementById("result").innerText=b2.innerText+" Wins ";
    }
    if(b3.innerText==b6.innerText && b6.innerText==b9.innerText && b3.innerText!="")
    {
        document.getElementById("result").innerText=b3.innerText+" Wins ";
    }
    if(b1.innerText==b5.innerText && b5.innerText==b9.innerText && b1.innerText!="")
    {
        document.getElementById("result").innerText=b1.innerText+" Wins ";
    }
    if(b3.innerText==b5.innerText && b5.innerText==b7.innerText && b3.innerText!="")
    {
        document.getElementById("result").innerText=b3.innerText+" Wins ";
    }
}
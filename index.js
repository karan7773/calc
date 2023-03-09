//creating container
var container=document.createElement('div');
container.setAttribute("class","container");
document.body.append(container);

//creating buttons
var con=document.createElement('div');
con.setAttribute("class","calculator");
container.appendChild(con);
var symbol=['+','-','*'];
var index=0;

//create input area
var input_box=document.createElement('input');
input_box.setAttribute("type","text");
input_box.placeholder="0";
input_box.setAttribute("id", "output");
con.appendChild(input_box);

//AC button
var ac=document.createElement('button');
ac.innerHTML="ac";
con.appendChild(ac);

//Del button
var del=document.createElement('button');
del.innerHTML="del";
con.appendChild(del);

//Modulo button
var mod=document.createElement('button');
mod.innerHTML="%";
con.appendChild(mod);

//divide button
var divide=document.createElement('button');
divide.innerHTML="/";
con.appendChild(divide);

//9-0,'.','+','-','*' buttons
for(var i=9;i>=-1;i--){
    let num=document.createElement('button');
    if(i==-1){
        num.innerHTML='.';
        num.setAttribute("id",".");
        con.appendChild(num);
    }
    else{
        num.innerHTML=i;
        if (i == 1) {
            num.setAttribute('id', "1");
            num.innerHTML=1;
            num.addEventListener('click', function() {
                display(1);
            });
        } else if (i == 4) {
            num.setAttribute('id', "4");
            num.innerHTML=4;
            num.addEventListener('click', function() {
                display(4);
            });
        } else if (i == 7) {
            num.setAttribute('id', "7");
            num.innerHTML=7;
            num.addEventListener('click', function() {
                display(7);
            });
        } else {
            num.setAttribute('id', i);
        }
        con.appendChild(num);
        if(i==7||i==4||i==1){
            num=document.createElement('button');
            num.setAttribute('id',i);
            num.innerHTML=symbol[index];
            index++;
            num.setAttribute("id",symbol[index]);
            con.appendChild(num);
        }
    }

    num.addEventListener('click', function() {
        display(this.innerHTML);
    });
}

// '=' button
var calc=document.createElement('button');
calc.setAttribute("class","calc");
calc.innerHTML="=";
con.appendChild(calc);

//adding event lister
ac.addEventListener("click",Ac);
del.addEventListener("click",Del);
mod.addEventListener("click",()=>{
    display('%');
})
divide.addEventListener('click',()=>{
    display('/');
});
calc.addEventListener("click",calculate);

//function definitions
let outputscreen = document.getElementById("output");

//display function for the text area container
function display(num){
    outputscreen.value += num;
}

//calculate 
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("invalid");
        Ac();
    }
}

function Del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
function Ac() {
    outputscreen.value = "";
}

var num = 0;
var end = 0;
var disp = 0;

function display(num) {

    $("#result").text(num);
    
  }



$(".numbers").click(function(){
    
    var immediate = document.getElementById(this.id).innerHTML;

    
    if (immediate === "=") {
        end = eval(disp);
        console.log(end);
        $("#result").text(end);
        disp = 0;
    }

    else if(immediate === "CE"){
        disp = 0;
        display(disp);
    }
    else{
        if (disp===0) {
            disp = immediate;
        }
        else{
            disp = disp + immediate;
        }
        display(disp);
    }
  });
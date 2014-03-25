/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var flag = true;
    if (flag) 
    {
        document.getElementById("panel").innerHTML = "Power is On";
    }    
    
    if (7 < 2)
    {
        document.getElementById("panel").innerHTML += "<br>Failure";
    }
    
    if (7 > 2)
    {
        document.getElementById("panel").innerHTML += "<br>Success";
    }
}

document.addEventListener("DOMContentLoaded", init, false);


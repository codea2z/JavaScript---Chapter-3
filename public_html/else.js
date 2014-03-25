/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var flag = false;
    var num = 10;
    
    if (flag)
    {
        panel.innerHTML = "Power is On";
    }
    else 
    {
        panel.innerHTML = "Power is Off";
    }
    
    if (num === 5)
    {
        panel.innerHTML += "<br>Number is Five";
    }    
    else if (num === 10) 
    {
        panel.innerHTML += "<br>Number is Ten";
    }
    else
    {
        panel.innerHTML += "<br>Number is neither Five or Ten";
    }
    
}  

document.addEventListener("DOMContentLoaded", init, false);


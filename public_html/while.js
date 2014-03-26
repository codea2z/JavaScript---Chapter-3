/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var num = 70;
    
    while (num > 10)
    {
        panel.innerHTML += "Countdown vale: " + num + "<br>";
        num -= 5;
    }
}  

document.addEventListener("DOMContentLoaded", init, false);


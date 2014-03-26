/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var num = 2;
    
    do
    {
        num *= 2;
        panel.innerHTML += "Multiplied value: " + num + "<br>";
    }
    while (num < 1000);
}  

document.addEventListener("DOMContentLoaded", init, false);


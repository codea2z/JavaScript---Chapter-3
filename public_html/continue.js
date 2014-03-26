/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var i;
    
    for (i = 1; i < 11; i++)        
    {
        if (i === 2 || i === 7)
        {
            continue; 
        }
        panel.innerHTML += "Loop iteration: " + i + "<br>";
            
    }
    
}  

document.addEventListener("DOMContentLoaded", init, false);


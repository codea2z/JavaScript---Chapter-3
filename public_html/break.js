/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var i, j;
    
    quitloop:
    for (i = 1; i < 4; i++)        
    {
        panel.innerHTML += "<dt>Outer loop: " + i;
        for (j = 1; j < 4; j++)
        {
            if (j === 2) 
            {
                break quitloop;
            }
            panel.innerHTML += "<dd>Inner loop: " + j;
        }    
    }
    
}  

document.addEventListener("DOMContentLoaded", init, false);


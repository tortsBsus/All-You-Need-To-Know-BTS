function nav(a)
{
            
    if(a!=0)document.getElementById("navbutton").innerHTML="All you need to know about BTS";
        else { document.getElementById("navbutton").innerHTML=`<ul>
                                                               <li onclick = Redirects(1)>In a Nutshell</li>
                                                               <li onclick = Redirects(2)>Deep Dive</li>
                                                               <li onclick = Redirects(3)>Music</li>
                                                               </ul>`;
                    count=-1;
            }

}
function Redirects(a)
{
  switch(a)
     {   
       
       case 1:  window.location.href="Level1.html"; break;
       case 2:  window.location.href="level2.html"; break;
       case 3:  window.location.href="music.html"; break;
       case 4:  window.location.href="RM.html"; break;
       case 5:  window.location.href="JIN.html"; break;
       case 6:  window.location.href="SUGA.html"; break;
       case 7:  window.location.href="J-HOPE.html"; break;
       case 8:  window.location.href="JIMIN.html"; break;
       case 9:  window.location.href="V.html"; break;
       case 10:  window.location.href="JUNG KOOK.html"; break;
      
    }
}
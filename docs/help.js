window.parent!=window&&(window.parent.document.getElementById("loading").style.display="table-cell",window.parent.document.getElementById("homeIcon").className="fa-solid fa-info-circle");var titleObj={},topTitleHome=(jQuery.ajax({url:"https://dbtfbs.trth.nl/"+passwdPathStr+"title.json",type:"GET",dataType:"text/plain",async:!1,complete:function(e){titleObj=JSON.parse(e.responseText)},error:function(){console.log("Unable to load title name (titleObj)")}}),document.getElementById("topTitle")),titleHome=document.getElementById("title");Object.keys(titleObj).includes("help")&&(topTitleHome.innerHTML="",titleHome.innerHTML="",$.each(titleObj.help,function(e,t){topTitleHome.innerText=e,titleHome.innerText=t,window.parent!=window&&(window.parent.document.getElementById("subTitle").innerHTML="<b>"+e+"</b>")}));
(x=document.getElementById("buttonBrief")).style.display="none";var detailArr=["TFn","ord","TFf","Pag","Con","Can","dtb"],briefArr=["TFn","TFf","dtb"],tailArr=["Coo","Not","ote"],cooccuStr="Coo",ourStudyStr="dtb",familyStr="TFf",downloadStr="dwld",exprStr="Not",recrStr="ote",tfNameStr="TFn",downloadNoteStr=fontawesome("fa-solid fa-file-download fa-fw")+"Download MEME file",querySecArr=(window.parent!=window&&(window.parent.document.getElementById("loading").style.display="table-cell",window.parent.document.getElementById("homeIcon").className="fa-solid fa-table-list",downloadNoteStr=fontawesome("fa-solid fa-cart-plus fa-fw")+" Add to download cart"),["wd","nr","opr","cstf","mtc"]),infoSecArr=["ord","sp","Pag","TFf"],noStr='<div class="naDiv">No result</div>',textSizeObj={"50%":"0.5rem","100%":"1rem","150%":"1.5rem","200%":"2rem","250%":"2.5rem","300%":"3rem","350%":"3.5rem","400%":"4rem"},defaultTextSizeStr="1rem",heightSizeObj={"50%":"3.125rem","100%":"6.25rem","150%":"9.375rem","200%":"12.5rem","250%":"15.625rem","300%":"18.75rem"},defaultHeightSizeStr="6.25rem",lock_int=5,titleObj={},topTitleHome=(jQuery.ajax({url:"https://dbtfbs.trth.nl/"+passwdPathStr+"title.json",type:"GET",dataType:"text/plain",async:!1,complete:function(e){titleObj=JSON.parse(e.responseText)},error:function(){console.log("Unable to load titleObj name")}}),document.getElementById("topTitle")),uniResult=(Object.keys(titleObj).includes("result")&&(topTitleHome.innerHTML="",$.each(titleObj.result,function(e,t){topTitleHome.innerText=e,window.parent!=window&&(window.parent.document.getElementById("subTitle").innerHTML="<b>"+e+"</b>")})),jQuery.ajax({url:"https://dbtfbs.trth.nl/"+passwdPathStr+"related/reShortForm.json",type:"GET",dataType:"json",async:!1,complete:function(e){reShortForm=JSON.parse(e.responseText)},error:function(){console.log("Unable to load reShortForm database")}}),[]),keywordObj={},keywordList=[],lowkeyList=[],resultArr=[],highlightArr=[];if(Object.keys(meter).includes("nr")||Object.keys(meter).includes("wd")){keywordList=[],jsonUrl="https://dbtfbs.trth.nl/"+passwdPathStr+"related/keywordList.json";jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){keywordList=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load categories database"}});for(var kl=0;kl<keywordList.length;kl++)lowkeyList.push(keywordList[kl].toLowerCase());lowkeyList.sort()}if(Object.keys(meter).includes("wd")){wideArr=meter.wd;for(var wa=0;wa<wideArr.length;++wa){keyArr=[];let e=[];e="ON"==oprtr.cstf?(keyQueryStr=wideArr[wa],keywordList):(keyQueryStr=wideArr[wa].toLowerCase(),lowkeyList);for(var ll=0;ll<e.length;++ll)("AND"==oprtr.mtc&&e[ll]==keyQueryStr||"OR"==oprtr.mtc&&e[ll].includes(keyQueryStr))&&(keyArr.push(e[ll]),highlightArr.includes(wideArr[wa])||highlightArr.push(wideArr[wa]));resultArr.push(keyArr)}}if(Object.keys(meter).includes("nr")){speArr=meter.nr;for(var sa=0;sa<speArr.length;++sa){if(keyArr=[],speBoo=!0,targetKeyList="ON"==oprtr.cstf?keywordList:lowkeyList,"AND"==oprtr.mtc){keyQueryStr=speArr[sa].toLowerCase();for(ll=0;ll<targetKeyList.length;++ll)targetKeyList[ll]==keyQueryStr&&(keyArr.push(targetKeyList[ll]),highlightArr.includes(speArr[sa])||highlightArr.push(speArr[sa]))}else if("OR"==oprtr.mtc){keyQueryArr=speArr[sa].split(" ");for(var kqa=0;kqa<keyQueryArr.length;++kqa)if(keyQueryStr="ON"==oprtr.cstf?keyQueryArr[kqa]:keyQueryArr[kqa].toLowerCase(),0==keyArr.length&&speBoo){speBoo=!1;for(ll=0;ll<targetKeyList.length;++ll)targetKeyList[ll].includes(keyQueryStr)&&(keyArr.push(targetKeyList[ll]),highlightArr.includes(keyQueryArr[kqa])||highlightArr.push(keyQueryArr[kqa]))}else{secoKeyArr=[];for(var ka=0;ka<keyArr.length;++ka)keyArr[ka].includes(keyQueryStr)&&(secoKeyArr.push(keyArr[ka]),highlightArr.includes(keyQueryArr[kqa])||highlightArr.push(keyQueryArr[kqa]));keyArr=(keyArr=[]).concat(secoKeyArr)}}resultArr.push(keyArr)}}for(var collectArr=[],collectBoo=!0,ra=0;ra<resultArr.length;++ra){queryArr=resultArr[ra];for(var qIdArr=[],qIdBoo=!0,qa=0;qa<queryArr.length;++qa){keyHeaderStr=queryArr[qa][0].toLowerCase(),Object.keys(keywordObj).includes(keyHeaderStr)||(keyListObj={},jsonUrl="https://dbtfbs.trth.nl/"+passwdPathStr+"keyword/kw-"+keyHeaderStr+".json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){keyListObj=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load categories database"}}),keywordObj[keyHeaderStr]=keyListObj);var keyListObj,rIdArr=keywordObj[keyHeaderStr][queryArr[qa]];if(0==qIdArr.length&&qIdBoo)qIdArr=rIdArr,qIdBoo=!1;else if("AND"==oprtr.mtc)qIdArr=$.grep(qIdArr,function(e,t){return rIdArr.includes(e)}),$(qIdArr).filter(rIdArr);else if("OR"==oprtr.mtc)for(var ria=0;ria<rIdArr.length;++ria)qIdArr.includes(rIdArr[ria])||qIdArr.push(rIdArr[ria])}if(qIdArr=qIdArr.sort(),0==collectArr.length&&collectBoo)collectArr=qIdArr,collectBoo=!1;else if("AND"==oprtr.opr)collectArr=$.grep(collectArr,function(e,t){return qIdArr.includes(e)}),$(collectArr).filter(qIdArr);else if("OR"==oprtr.opr)for(var qia=0;qia<qIdArr.length;++qia)collectArr.includes(qIdArr[qia])||collectArr.push(qIdArr[qia]);collectArr=collectArr.sort()}collectSet=new Set(collectArr);let searchResult=Array.from(collectSet);var shortTarget="",shortTarget="Family"==oprtr.target?familyStr:reShortForm[oprtr.target],idJsonObj={},pageArr=[],fromStr="",toStr="";if(oprtr.target.includes("-to-")&&(fromStr=oprtr.target.split("-to-")[0],toStr=oprtr.target.split("-to-")[1],fromShortStr="Family"==fromStr?familyStr:reShortForm[fromStr],toShortStr="Family"==toStr?familyStr:reShortForm[toStr],Object.keys(meter).includes(fromShortStr))&&Object.keys(meter).includes(toShortStr))for(var fsa=0;fsa<meter[fromShortStr].length;++fsa)for(var tsa=0;tsa<meter[toShortStr].length;++tsa)pageArr.push("https://dbtfbs.trth.nl/"+passwdPathStr+"pwm/"+fromStr+"/"+toStr+"/"+meter[fromShortStr][fsa]+"-"+meter[toShortStr][tsa]+".json");if(Object.keys(meter).includes(shortTarget))for(var sta=0;sta<meter[shortTarget].length;++sta)pageArr.push("https://dbtfbs.trth.nl/"+passwdPathStr+"pwm/"+oprtr.target+"/"+meter[shortTarget][sta]+".json");for(var idObj={},cMotifObj={},pa=0;pa<pageArr.length;++pa){idJsonObj={};jsonUrl=pageArr[pa],jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){idJsonObj=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load categories database"}}),wideArr=Object.keys(meter).includes("wd")?meter.wd:[],speArr=Object.keys(meter).includes("nr")?meter.nr:[],0==wideArr.length&&0==speArr.length?$.each(idJsonObj,function(e,t){"#cmotif"==e?$.each(t,function(e,t){cMotifObj[e]=t}):idObj[e]=t}):0==searchResult.length?idObj={}:$.each(idJsonObj,function(e,t){"#cmotif"==e?$.each(t,function(e,t){cMotifObj[e]=t}):searchResult.includes(e)&&(idObj[e]=t)})}var sourceArr=[];Object.keys(meter).includes("Sou")&&(sourceArr=meter.Sou);var col_header=(col_header=briefArr.concat(sourceArr)).concat(tailArr),excl=["Thi"].concat(sourceArr),jsonUrl="",shortFormDict={},headerStr=(jsonUrl="https://dbtfbs.trth.nl/"+passwdPathStr+"related/shortForm.json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){shortFormDict=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load converted database"}}),{}),additionObj=(jsonUrl="https://dbtfbs.trth.nl/headerStr.json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){headerStr=JSON.parse(e.responseText)},error:function(){console.log("headerStr"),console.log(headerStr)}}),{}),optionLoadingAnime=(jsonUrl="https://dbtfbs.trth.nl/"+passwdPathStr+"related/titleAddUp.json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){additionObj=JSON.parse(e.responseText)},error:function(){console.log("additionObj"),console.log(additionObj)}}),jsonUrl="https://dbtfbs.trth.nl/"+passwdPathStr+"related/sorting.json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){titleArr=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load converted database"}}),document.getElementById("optionLoadingAnime")),textSizeDiv=(optionLoadingAnime.style.display="inline",optionObj={},document.getElementById("textSizeEle")),heightSizeDiv=(textSizeDiv.innerHTML="",textSizeDiv.addEventListener("change",function(e){textSizing()}),$.each(textSizeObj,function(e,t){var r=document.createElement("option");(r.value=t)==defaultTextSizeStr&&(r.defaultSelected=!0),r.innerHTML=e,textSizeDiv.appendChild(r)}),document.getElementById("heightSizeEle"));heightSizeDiv.innerHTML="",heightSizeDiv.addEventListener("change",function(e){heightSizing()}),$.each(heightSizeObj,function(e,t){var r=document.createElement("option");(r.value=t)==defaultHeightSizeStr&&(r.defaultSelected=!0),r.innerHTML=e,heightSizeDiv.appendChild(r)}),(searchTable=document.getElementById("searchTable")).id="searchTable",searchTable.innerHTML="",searchTable.style.maxWidth="70vw",titleRow=document.createElement("tr"),(titleContent=document.createElement("th")).className="titleTd",titleContent.colSpan="2",titleContent.innerText="Search Parameters",titleRow.appendChild(titleContent),searchTable.appendChild(titleRow);let mergeDict=Object.assign(oprtr,meter);if(Object.keys(mergeDict).includes("nr")||Object.keys(mergeDict).includes("wd")){for(var qsa=0;qsa<querySecArr.length;++qsa){let n=querySecArr[qsa];if(Object.keys(mergeDict).includes(n)){let e=mergeDict[n],t=(sRow=document.createElement("tr"),document.createElement("td")),r=(t.className="searchContent",t.innerHTML=shortFormDict[n],document.createElement("td"));r.className="searchContent",["cstf","mtc","opr"].includes(n)?(Object.keys(mergeDict).includes("nr")||Object.keys(mergeDict).includes("wd"))&&(r.innerHTML=shortFormDict[n+"-"+e]):["nr","wd"].includes(n)?r.innerHTML=e.join(", "):r.innerHTML=shortFormDict[qsaValueObjj],r.style.textAlign="left",sRow.appendChild(t),sRow.appendChild(r),searchTable.appendChild(sRow)}}(searchInfo=document.getElementById("searchInfo")).style.display="block",(searchBar=document.getElementById("searchBar")).style.display="grid"}let infoTable=document.getElementById("infoTable");infoTable.innerHTML="",infoTable.style.maxWidth="70vw",titleRow=document.createElement("tr"),(titleContent=document.createElement("th")).className="titleTd",titleContent.colSpan="2",titleContent.innerText="Summary",titleRow.appendChild(titleContent),infoTable.appendChild(titleRow);for(var isa=0;isa<infoSecArr.length;++isa){let n=infoSecArr[isa];if(Object.keys(mergeDict).includes(n)){let e=mergeDict[n],t=(sRow=document.createElement("tr"),document.createElement("td")),r=(t.className="searchContent","Pag"==n?t.innerHTML="TF family":t.innerHTML=shortFormDict[n],document.createElement("td"));if(r.className="searchContent","ord"==n)r.id="orderTarget",e.includes("COS")?"-"==e[0]?r.innerHTML=shortFormDict[e.substring(1)]+' <i class="fas fa-sort-numeric-up fa-fw"></i>, Accession ID <i class="fas fa-sort-alpha-down fa-fw"></i>':r.innerHTML=shortFormDict[e]+' <i class="fas fa-sort-numeric-down fa-fw"></i>, Accession ID <i class="fas fa-sort-alpha-up fa-fw"></i>':"-"==e[0]?r.innerHTML=shortFormDict[e.substring(1)]+' <i class="fas fa-sort-alpha-up fa-fw"></i>':r.innerHTML=shortFormDict[e]+' <i class="fas fa-sort-alpha-down fa-fw"></i>';else if("sp"==n)r.innerHTML="<i>"+shortFormDict[e]+"</i>";else if(1<e.length&&"object"==typeof e){contentStr="",interArr=[];for(var l=0;l<e.length;++l)(interArr.join(", ")+shortFormDict[e[l]]+", ").length<70?interArr.push(shortFormDict[e[l]]):(contentStr=""==contentStr?interArr.join(", "):contentStr+",<br>"+interArr.join(", "),interArr=[shortFormDict[e[l]]]);contentStr=""==contentStr?interArr.join(", "):contentStr+",<br>"+interArr.join(", "),r.innerHTML=contentStr}else r.innerHTML=shortFormDict[e];r.style.textAlign="left",sRow.appendChild(t),sRow.appendChild(r),infoTable.appendChild(sRow)}}var searchLoadingAnime=document.getElementById("searchLoadingAnime");function nodeFilter(e){var t=[];if(1==e.childNodes.length)3==e.childNodes[0].nodeType?t.push(e):t=t.concat(nodeFilter(e.childNodes[0]));else if(1<e.childNodes.length)for(var r=0;r<e.childNodes.length;++r)t=t.concat(nodeFilter(e.childNodes[r]));return t}searchLoadingAnime.style.display="none";var sortJson={};function drawTable(e){(T=document.getElementById("selectEle")).style.display="none",T.innerHTML="";document.getElementById("targetLoadingAnime").style.display="inline",oprtr.ord=e;var t=document.getElementById("orderTarget"),r=(e.includes("COS")?"-"==e[0]?t.innerHTML=shortFormDict[e.substring(1)]+' <i class="fas fa-sort-numeric-up fa-fw"></i>, Accession ID <i class="fas fa-sort-alpha-down fa-fw"></i>':t.innerHTML=shortFormDict[e]+' <i class="fas fa-sort-numeric-down fa-fw"></i>, Accession ID <i class="fas fa-sort-alpha-up fa-fw"></i>':"-"==e[0]?t.innerHTML=shortFormDict[e.substring(1)]+' <i class="fas fa-sort-alpha-up fa-fw"></i>':t.innerHTML=shortFormDict[e]+' <i class="fas fa-sort-alpha-down fa-fw"></i>',[]);if(0<Object.keys(idObj).length){var n=document.getElementById("targetTable"),t=(n.innerHTML="",(theadEle=document.createElement("thead")).id="fixthead",(rowEle=document.createElement("tr")).id="fixtr",document.createElement("th"));t.className="titleTd",t.id="fixth",t.innerText="No.",rowEle.appendChild(t);for(var o=0;o<col_header.length;++o){var a=document.createElement("th");a.className="titleTd",a.id="fixth",Object.keys(additionObj).includes(shortFormDict[col_header[o]])?a.innerHTML=additionObj[shortFormDict[col_header[o]]]:a.innerHTML=shortFormDict[col_header[o]].replace(/ \(/g,"<br>("),rowEle.appendChild(a)}theadEle.appendChild(rowEle),n.appendChild(theadEle),Object.keys(sortJson).includes(e)||(jsonUrl="-"==e[0]?"https://dbtfbs.trth.nl/"+passwdPathStr+"sort/ds_"+e.substring(1)+".json":"https://dbtfbs.trth.nl/"+passwdPathStr+"sort/as_"+e+".json",jQuery.ajax({url:jsonUrl,type:"GET",dataType:"json",async:!1,complete:function(e){sortArr=JSON.parse(e.responseText)},error:function(){document.createElement("errorSection").innerText="Unable to load converted database"}}),sortJson[e]=sortArr);for(o=0;o<sortJson[e].length;++o)Object.keys(idObj).includes(sortJson[e][o])&&r.push(sortJson[e][o]);for(var l="",l=""==passwdStr?"":"&ver="+passwdStr,i=0;i<r.length;++i){var d=idObj[r[i]][tfNameStr].replace(/\./g,"_").replace(/-/g,"_").replace(/\//g,"_").replace(/\ /g,"_").replace(/:/g,"_").replace(/;/g,"_"),c=(row=document.createElement("tr"),document.createElement("td"));c.className="contentTd",c.innerText=i+1,row.appendChild(c);for(var s=0;s<col_header.length;++s){var m,h,p,u=document.createElement("td");if(u.className="contentTd",0==s&&(u.id="fixtd"),idObj[r[i]][col_header[s]]==noStr){var f=document.createElement("div");f.innerHTML=idObj[r[i]][col_header[s]],u.appendChild(f)}else if(col_header[s]==familyStr){f=document.createElement("a");familyArr=idObj[r[i]][col_header[s]].split("; "),targetFamilyArr=[];for(var g=0;g<familyArr.length;++g)targetFamilyArr.push(reShortForm[familyArr[g]]);targetFamilyStr=targetFamilyArr.join(","),f.href="result.html?Sou=JAS,Fac,Kel,SEL&target=Family&"+familyStr+"="+targetFamilyStr+l,f.innerHTML=idObj[r[i]][col_header[s]],u.appendChild(f)}else if(col_header[s]==ourStudyStr){var y=document.createElement("a");y.href="detail.html?id="+d+l,y.innerHTML=idObj[r[i]][col_header[s]],u.appendChild(y),"Unavailable"!=idObj[r[i]][downloadStr]&&((y=document.createElement("a")).href='javascript:addCart("'+r[i]+'","'+r[i]+'")',y.innerHTML=downloadNoteStr,u.innerHTML=u.innerHTML+"[ ",u.appendChild(y),u.innerHTML=u.innerHTML+" ]")}else if(Object(sourceArr).includes(col_header[s])){y=document.createElement("a");y.href="detail.html?id="+d+"&set="+col_header[s]+l,y.innerHTML=idObj[r[i]][col_header[s]],u.appendChild(y)}else if(col_header[s]==cooccuStr){var b=document.createElement("div");if(0<(occuArr=Object.keys(idObj[r[i]][cooccuStr])).length)for(var A=0;A<occuArr.length;++A){var w=document.createElement("a");w.href='javascript:openmodal("'+r[i]+'","'+occuArr[A]+'")',w.innerText=occuArr[A],b.appendChild(w),1<occuArr.length&&A+1!=occuArr.length&&(b.innerHTML=b.innerHTML+",",b.appendChild(document.createElement("br")))}u.appendChild(b)}else col_header[s]==exprStr?((m=document.createElement("a")).href="detail.html?id="+d+l,""!=idObj[r[i]][col_header[s]]?m.innerHTML=idObj[r[i]][col_header[s]].replace(/\, /g,",<br>"):m.innerHTML=noStr,u.appendChild(m)):col_header[s]==recrStr?""!=idObj[r[i]][col_header[s]]?((m=document.createElement("a")).href="https://dbtfbs.trth.nl/resource/case/"+passwdPathStr+idObj[r[i]][tfNameStr]+".pdf",m.target="_blank",m.innerHTML=idObj[r[i]][col_header[s]].replace(/\, /g,",<br>"),u.appendChild(m)):(h=document.createElement("span"),u.appendChild(h)):col_header[s]==downloadStr?"Unavailable"==idObj[r[i]][downloadStr]?((h=document.createElement("div")).innerText="unavailable",u.appendChild(h)):((p=document.createElement("a")).href='javascript:download("'+idObj[r[i]][tfNameStr]+'.meme","'+r[i]+'")',p.innerText=idObj[r[i]][tfNameStr]+".meme [dbTFBS]",u.appendChild(p)):((p=document.createElement("a")).href="detail.html?id="+d+l,p.innerHTML=idObj[r[i]][col_header[s]],u.appendChild(p));row.appendChild(u)}n.appendChild(row)}}else{targetTable.style.width="max-content",sRow=document.createElement("tr");t=document.createElement("td");t.colSpan="2",t.innerHTML="Search result: No result",sRow.appendChild(t),targetTable.appendChild(sRow)}targetTextParentArr=nodeFilter(targetTable);for(var T,S=0;S<highlightArr.length;++S){highlightRegex="ON"==oprtr.cstf?RegExp(highlightArr[S],"g"):RegExp(highlightArr[S],"gi");for(var j=0;j<targetTextParentArr.length;++j)targetTextParentArr[j].innerHTML=targetTextParentArr[j].innerHTML.replace(highlightRegex,'<span style="background-color: yellow;">$&</span>')}(T=document.getElementById("selectEle")).addEventListener("change",function(e){changeSorting()}),(T=document.getElementById("selectEle")).style.display="inline",document.getElementById("targetLoadingAnime").style.display="none",(optionTargetArr=[]).push("ord");for(o=0;o<col_header.length;++o)for(var E=0;E<titleArr.length;++E)titleArr[E].match(col_header[o])&&optionTargetArr.push(titleArr[E]);optionArr=[];for(o=0;o<optionTargetArr.length;++o){var O=document.createElement("option"),O=(O.value="-"+optionTargetArr[o],O.innerHTML=shortFormDict[optionTargetArr[o]]+" (Descending)",oprtr.ord=="-"+optionTargetArr[o]&&(O.selected=!0),optionObj[shortFormDict[optionTargetArr[o]]+" (Descending)"]=O,optionArr.push(shortFormDict[optionTargetArr[o]]+" (Descending)"),document.createElement("option"));O.value=optionTargetArr[o],O.innerHTML=shortFormDict[optionTargetArr[o]]+" (Ascending)",oprtr.ord==optionTargetArr[o]&&(O.selected=!0),optionObj[shortFormDict[optionTargetArr[o]]+" (Ascending)"]=O,optionArr.push(shortFormDict[optionTargetArr[o]]+" (Ascending)")}document.getElementById("optionLoadingAnime").style.display="none",optionArr=optionArr.sort(),T=document.getElementById("selectEle");for(o=0;o<optionArr.length;++o)T.appendChild(optionObj[optionArr[o]]);return r}var x,tableArr=[],tableArr=drawTable(oprtr.ord),nameSortArr=[];if(document.getElementById("upperMotifButton").style.display="none",document.getElementById("cMotifTable").style.display="none",document.getElementById("motifButton").style.display="none",!$.isEmptyObject(cMotifObj)){var cmotif_filter_obj={},group_after_obj={};$.each(cMotifObj,function(e,t){group_filter_obj={},$.each(t,function(e,t){member_obj=t.member,tf_array=Object.keys(member_obj),tf_filter_array=[];for(var r=0;r<tf_array.length;++r)tableArr.includes(tf_array[r])&&tf_filter_array.push(member_obj[tf_array[r]]);0<tf_filter_array.length&&(group_filter_obj[e]=t,group_filter_obj[e].tf=tf_filter_array)}),0<Object.keys(group_filter_obj).length&&(cmotif_filter_obj[e]=group_filter_obj)}),targetCMArr=Object.keys(cmotif_filter_obj).sort();let t=document.getElementById("cMotifTable");var unitCountObj={};if(column_int=4,0<targetCMArr.length){for(var tcma=0;tcma<targetCMArr.length;++tcma)targetLength=Object.keys(cmotif_filter_obj[targetCMArr[tcma]]).length,unitCountObj.hasOwnProperty(targetLength)?unitCountObj[targetLength].push(targetCMArr[tcma]):unitCountObj[targetLength]=[targetCMArr[tcma]];maxUnitInt=(max_unit_refer_int=Math.max.apply(null,Object.keys(unitCountObj)))<=column_int?max_unit_refer_int:column_int,lenCountArr=Object.keys(unitCountObj).reverse();for(var lca=0;lca<lenCountArr.length;++lca)lenNameArr=unitCountObj[lenCountArr[lca]].sort(),nameSortArr=nameSortArr.concat(lenNameArr);let e=document.createElement("tr");(motifTh=document.createElement("th")).className="titleTd",1==maxUnitInt?motifTh.innerText="Core motif":motifTh.innerText="Core motifs",1<nameSortArr.length&&(motifTh.innerText=motifTh.innerText+" ("+nameSortArr.length+" TF families)"),motifTh.colSpan=maxUnitInt+1,e.appendChild(motifTh),t.appendChild(e);for(var nsa=0;nsa<nameSortArr.length;++nsa){motifTr=document.createElement("tr"),upCellTr=document.createElement("tr"),downCellTr=document.createElement("tr"),(numberTh=document.createElement("td")).rowSpan=2*Math.ceil(Object.keys(cmotif_filter_obj[nameSortArr[nsa]]).length/column_int),numberTh.innerText=nsa+1,upCellTr.appendChild(numberTh);for(var cnsa=0;cnsa<Object.keys(cmotif_filter_obj[nameSortArr[nsa]]).length;++cnsa){if(groupStr=Object.keys(cmotif_filter_obj[nameSortArr[nsa]])[cnsa],groupDict=cmotif_filter_obj[nameSortArr[nsa]][groupStr],(motifTh=document.createElement("td")).className="searchContent",motifTh.innerHTML=groupDict.logo,motifTh.style.borderBottom="0px",upCellTr.appendChild(motifTh),(memberTh=document.createElement("td")).className="searchContent",memberTh.style.borderTop="0px",memberTh.style.verticalAlign="top",groupDict.tf.length<=lock_int)memberTh.innerHTML="<b>Member:</b><br>"+groupDict.tf.join(", ");else{memberArr=groupDict.tf,outputStr="",lineArr=["<b>Member:</b>"];for(var ma=0;ma<memberArr.length;++ma)outputStr.length+memberArr[ma].length>7*lock_int&&(lineArr.push(outputStr),outputStr=""),outputStr+=memberArr[ma],ma!=memberArr.length-1&&(outputStr+=", ");lineArr.push(outputStr),memberTh.innerHTML=lineArr.join("<br>")}downCellTr.appendChild(memberTh),(cnsa+1)%column_int==0&&(t.appendChild(upCellTr),t.appendChild(downCellTr),upCellTr=document.createElement("tr"),downCellTr=document.createElement("tr"))}0!=(left_count_int=Object.keys(cmotif_filter_obj[nameSortArr[nsa]]).length%column_int)&&left_count_int<maxUnitInt&&((memberTh=document.createElement("td")).className="searchContent",memberTh.colSpan=maxUnitInt-left_count_int,memberTh.style.borderBottom="0px",upCellTr.appendChild(memberTh),(memberTh=document.createElement("td")).className="searchContent",memberTh.colSpan=maxUnitInt-left_count_int,memberTh.style.borderTop="0px",downCellTr.appendChild(memberTh)),t.appendChild(upCellTr),t.appendChild(downCellTr)}}document.getElementById("motifButton").style.display="inherit",document.getElementById("motifButton").innerHTML=fontawesome("fa-solid fa-expand-alt fa-fw")+" Show core motifs ("+nameSortArr.length+" TF families)"}if(0<tableArr.length){sRow=document.createElement("tr");let e=document.createElement("td"),t=(e.innerHTML="Total count",e.className="searchContent",sRow.appendChild(e),document.createElement("td")),r=document.createElement("a");filenameStr="",filenameStr="Family"==oprtr.target?shortFormDict[familyStr].replace(/\ /g,"_"):oprtr.target.includes("-to-")?oprtr.target.replace(/-/g,"_"):oprtr.target.replace(/\ /g,"_"),r.href='javascript:addCart("'+filenameStr+'","#All")',r.innerHTML=downloadNoteStr,r.id="downloadMeme",t.innerHTML=tableArr.length+" PWMs [ ",t.appendChild(r),t.innerHTML=t.innerHTML+" ]",t.className="searchContent",sRow.appendChild(t),infoTable.appendChild(sRow)}function changeSorting(){tableArr=drawTable(document.getElementById("selectEle").value)}function goSubmit(){baseStr=baseURL(),paraStr=url.split("?")[1],paraObj=splitAS(paraStr),$.each(splitAS(baseStr),function(e,t){paraObj[e]=t}),finalArr=[],$.each(paraObj,function(e,t){finalArr.push(e+"="+t.join(","))});var e="result.html?"+(finalStr=finalArr.join("&"));return window.location.href=e,!1}function goRefine(){var e="";window.parent!=window?""!=window.parent.document.getElementById("jumpStore").innerText&&(e=window.parent.document.getElementById("jumpStore").innerText):""!=window.localStorage.getItem("jumpStore")&&(e=window.localStorage.getItem("jumpStore")),""!=e&&(window.location.href=e)}function goTop(){window.location.href="#topAnchor"}function headerDetail(){col_header=(col_header=detailArr.concat(sourceArr)).concat(tailArr),tableArr=drawTable(oprtr.ord);var e=document.getElementById("buttonBrief");e.style.display="inline",e.disabled=!1,(e=document.getElementById("buttonDetail")).style.display="none"}function headerBrief(){col_header=(col_header=briefArr.concat(sourceArr)).concat(tailArr),tableArr=drawTable(oprtr.ord);var e=document.getElementById("buttonDetail");e.style.display="inline",e.disabled=!1,(e=document.getElementById("buttonBrief")).style.display="none"}function download(e,t){if(targetMemeArr=Array(),"#All"==t)for(var r=0;r<tableArr.length;++r)targetMemeArr.push(idObj[tableArr[r]][downloadStr]);else targetMemeArr.push(idObj[t][downloadStr]);text=headerStr+targetMemeArr.join("");t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(text)),t.setAttribute("download",e),t.style.display="none",t.click()}function vw(e){return e*Math.max(document.documentElement.clientWidth,window.innerWidth||0)/100}function addCart(e,r){if(window.parent!=window){window.parent.document.getElementById("cartList").style.display="inline-block",window.parent.document.getElementById("floatDownloadButton").style.display="inline-block",window.parent.document.getElementById("floatDownloadButton").className="downloadButtonUnhide",window.parent.document.getElementById("floatDownloadButton").innerHTML=fontawesome("fa-solid fa-cart-arrow-down fa-fw")+" Hide Cart",cartTable=window.parent.document.getElementById("cartTable"),carRows=cartTable.childNodes,cartArr=[];for(var t=0;t<carRows.length;++t)"TR"==carRows[t].nodeName&&cartArr.push(carRows[t].id);if(targetMemeObj={},"#All"==r)for(var n=0;n<tableArr.length;++n)targetMemeObj[tableArr[n]]=[tableArr[n]];else targetMemeObj[e]=r;$.each(targetMemeObj,function(e,t){cartArr.includes(t+"ctCell")||((cartRow=document.createElement("tr")).id=t+"ctCell",(cartCell=document.createElement("td")).title=t,cartCell.innerText=e,cartCell.style.whiteSpace="nowrap",removeCell=document.createElement("td"),(removeLink=document.createElement("a")).innerText="[remove]",removeLink.href='javascript:removeCart("'+t+'")',removeCell.appendChild(removeLink),cartRow.appendChild(cartCell),cartRow.appendChild(removeCell),cartTable.appendChild(cartRow),cartArr.push(r+"ctCell"))}),0<cartArr.length&&(window.parent.document.getElementById("removeAll").style.display="inline-block"),window.parent.document.getElementById("downloadAll").style.display="inline-block",window.parent.document.getElementById("downloadAll").innerHTML=fontawesome("fa-solid fa-download fa-fw")+" Download ("+cartArr.length+")",ctOW=parseInt(cartTable.offsetWidth,10)+30,bbOW=parseInt(window.parent.document.getElementById("buttonBar").offsetWidth,10),vwOW=vw(70),ctOW>=bbOW&&vwOW>ctOW?window.parent.document.getElementById("cartSpan").style.width=ctOW+"px":bbOW>ctOW&&vwOW>bbOW?window.parent.document.getElementById("cartSpan").style.width=bbOW+"px":(window.parent.document.getElementById("cartSpan").style.width=vwOW+"px",window.parent.document.getElementById("cartSpan").style.overflowX="auto")}else download(e+".meme",r)}(x=document.getElementById("backButton")).disabled=!1,(x=document.getElementById("buttonDetail")).disabled=!1,$(function(){$(document).scroll(function(){$(".backButton").toggleClass("scrolled",45<$(this).scrollTop()||50<$(this).scrollLeft()),$(".topButton").toggleClass("scrolled",45<$(this).scrollTop())})});var modal=document.getElementById("myModal"),memeTable=document.getElementById("memeTable"),popTh=document.getElementById("popTh"),span=document.getElementsByClassName("close")[0];function openmodal(e,t){memeTable.innerHTML=idObj[e][cooccuStr][t],popTh.innerText=t,modal.style.display="block"}function hideTopBar(){(paraArr=new Array).push(document.getElementById("textSizeEle").value),paraArr.push(document.getElementById("heightSizeEle").value),selectStr="&st="+document.getElementById("selectEle").value,window.parent.location.href=window.location.href+"&print="+paraArr.join(",")+selectStr}function textSizing(){$('td[class="contentTd"]').each(function(){this.style.fontSize=document.getElementById("textSizeEle").value}),$('th[class="titleTd"]').each(function(){this.style.fontSize=document.getElementById("textSizeEle").value}),$('td[class="searchContent"]').each(function(){this.style.fontSize=document.getElementById("textSizeEle").value}),$('th[class="searchContent"]').each(function(){this.style.fontSize=document.getElementById("textSizeEle").value}),document.getElementById("searchInput").style.height=document.getElementById("sumitButton").offsetHeight-16+"px"}function heightSizing(){$('img[class="webLogo"]').each(function(){this.style.height=document.getElementById("heightSizeEle").value})}function toggleMotif(){"none"==document.getElementById("cMotifTable").style.display?(document.getElementById("upperMotifButton").style.display="inherit",document.getElementById("cMotifTable").style.display="table",document.getElementById("motifButton").innerHTML=fontawesome("fa-solid fa-compress-alt fa-fw")+" Hide core motifs"):(document.getElementById("upperMotifButton").style.display="none",document.getElementById("cMotifTable").style.display="none",document.getElementById("motifButton").innerHTML=fontawesome("fa-solid fa-expand-alt fa-fw")+" Show core motifs ("+nameSortArr.length+" TF families)")}span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},"none,none"!=oprtr.print&&Object(oprtr.print).includes(",")&&2==oprtr.print.split(",").length&&(textSizeStr=oprtr.print.split(",")[0],heightSizeStr=oprtr.print.split(",")[1],document.getElementById("topBar").style.display="none",document.getElementById("searchBar").style.display="none",document.getElementById("textSizeEle").value=textSizeStr,document.getElementById("heightSizeEle").value=heightSizeStr,document.getElementById("cMotifTable").style.display="table",document.getElementById("motifButton").style.display="none",textSizing(),heightSizing()),document.getElementById("searchInput").style.height=document.getElementById("sumitButton").offsetHeight-12+"px";
// <![CDATA[
var colours=new Array('#f00', '#f06', '#f0f', '#f6f', '#f39', '#f9c'); // colours of the hearts
var minisize=16; // smallest size of hearts in pixels
var maxisize=28; // biggest size of hearts in pixels
var hearts=99; // maximum number of hearts on screen
var over_or_under="over"; // set to "over" for hearts to always be on top, or "under" to allow them to float behind other objects

/*****************************
*JavaScript Love Heart Cursor*
*  (c)2013+ mf2fm web-design *
*   http://www.mf2fm.com/rv  *
*  DON'T EDIT BELOW THIS BOX *
*****************************/
var x=ox=800;
var y=oy=600;
var swide=1600;
var shigh=1200;
var sleft=sdown=0;
var herz=new Array();
var herzx=new Array();
var herzy=new Array();
var herzs=new Array();
var kiss=false;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(mwah);

function mwah() { if (document.getElementById) {
  var i, heart;
  for (i=0; i<hearts; i++) {
    heart=createDiv("auto", "auto");
    heart.style.visibility="hidden";
	heart.style.zIndex=(over_or_under=="over")?"1001":"0";
    heart.style.color=colours[i%colours.length];
	heart.style.pointerEvents="none";
    if (navigator.appName=="Microsoft Internet Explorer") heart.style.filter="alpha(opacity=75)";
    else heart.style.opacity=0.75;
    heart.appendChild(document.createTextNode(String.fromCharCode(9829)));
    document.body.appendChild(heart);
    herz[i]=heart;
	herzy[i]=false;
  }
  set_scroll();
  set_width();
  herzle();
}}

function herzle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<hearts; c++) if (herzy[c]===false) {
	  herz[c].firstChild.nodeValue=String.fromCharCode(9829);
      herz[c].style.left=(herzx[c]=x-minisize/2)+"px";
      herz[c].style.top=(herzy[c]=y-minisize)+"px";
      herz[c].style.fontSize=minisize+"px";
	  herz[c].style.fontWeight='normal';
      herz[c].style.visibility='visible';
      herzs[c]=minisize;
      break;
    }
  }
  for (c=0; c<hearts; c++) if (herzy[c]!==false) blow_me_a_kiss(c);
  setTimeout("herzle()", 40);
}

document.onmousedown=pucker;
document.onmouseup=function(){clearTimeout(kiss);};

function pucker() {
  ox=-1;
  oy=-1;
  kiss=setTimeout('pucker()', 100);
}

function blow_me_a_kiss(i) {
  herzy[i]-=herzs[i]/minisize+i%2;
  herzx[i]+=(i%5-2)/5;
  if (herzy[i]<sdown-herzs[i] || herzx[i]<sleft-herzs[i] || herzx[i]>sleft+swide-herzs[i]) {
    herz[i].style.visibility="hidden";
    herzy[i]=false;
  }
  else if (herzs[i]>minisize+2 && Math.random()<.5/hearts) break_my_heart(i);
  else {
    if (Math.random()<maxisize/herzy[i] && herzs[i]<maxisize) herz[i].style.fontSize=(++herzs[i])+"px";
    herz[i].style.top=herzy[i]+"px";
    herz[i].style.left=herzx[i]+"px";
  }
}

function break_my_heart(i) {
  var t;
  herz[i].firstChild.nodeValue=String.fromCharCode(9676);
  herz[i].style.fontWeight='bold';
  herzy[i]=false;
  for (t=herzs[i]; t<=maxisize; t++) setTimeout('herz['+i+'].style.fontSize="'+t+'px"', 60*(t-herzs[i]));
  setTimeout('herz['+i+'].style.visibility="hidden";', 60*(t-herzs[i]));
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}
// ]]>
</script>

        <script language=JavaScript>
        <!--
       //Disable right click script III- By SXT0
       //For full source code, visit http://www.samuelscouter.blogspot.com
       var message="";
       ///////////////////////////////////
       function clickIE() {if (document.all) {(message);return false;}}
       function clickNS(e) {if
       (document.layers||(document.getElementById&&!document.all)) {
       if (e.which==2||e.which==3) {(message);return false;}}}
       if (document.layers)
       {document.captureEvents(Event.MOUSEDOWN)
       ;document.onmousedown=clickNS;}
       else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
       document.oncontextmenu=new Function("return false")
       // -->
        </script>	<div id="flake0" style="position: absolute; top: 44px; left: 327.194px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-

size: 1px;"></div><div id="flake1" style="position: absolute; top: 138px; left: 1325.03px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake2" style="position: absolute; top: 139px; left: 163.556px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake3" style="position: absolute; top: 337px; left: 838.45px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake4" style="position: absolute; top: 140px; left: 270.234px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake5" style="position: absolute; top: 140px; left: 643.786px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake6" style="position: absolute; top: 95px; left: 644.323px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake7" style="position: absolute; top: 277px; left: 1084.88px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake8" style="position: absolute; top: -7px; left: 383.259px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake9" style="position: absolute; top: 175px; left: 703.481px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake10" style="position: absolute; top: 369px; left: 1173.29px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake11" style="position: absolute; top: 244px; left: 611.084px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake12" style="position: absolute; top: -10px; left: 530px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake13" style="position: absolute; top: 143px; left: 976.289px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake14" style="position: absolute; top: 298px; left: 717.091px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake15" style="position: absolute; top: 38px; left: 1201.79px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake16" style="position: absolute; top: 77px; left: 717.786px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake17" style="position: absolute; top: 122px; left: 1018.14px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake18" style="position: absolute; top: 223px; left: 818.955px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake19" style="position: absolute; top: 105px; left: 856.835px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake20" style="position: absolute; top: 237px; left: 1066.98px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake21" style="position: absolute; top: 206px; left: 813.31px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake22" style="position: absolute; top: 255px; left: 398.835px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake23" style="position: absolute; top: 221px; left: 429.759px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake24" style="position: absolute; top: 68px; left: 538.105px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake25" style="position: absolute; top: 114px; left: 271.548px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake26" style="position: absolute; top: 188px; left: 741.876px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake27" style="position: absolute; top: 118px; left: 1055.14px; width: 2px; height: 2px; background-color: rgb(255, 255, 255); font-size: 

2px;"></div><div id="flake28" style="position: absolute; top: 190px; left: 693.612px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><div id="flake29" style="position: absolute; top: 139px; left: 56.8798px; width: 1px; height: 1px; background-color: rgb(255, 255, 255); font-size: 

1px;"></div><meta charset="utf-8">

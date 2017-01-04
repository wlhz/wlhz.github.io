
/*画一个的通用棋盘*/
//选择的棋类名称,棋盘宽，棋盘高，
this.board=function(chess_name,board_width,board_height,rowBak,colBak){
	nameNak=name;//未知
	var domian="http://wlhz.github.io/Reversi";
	var author="wlhz";
	//根据棋的种类决定格子数目
	switch(name){
		case "wuziqi": row=col=8; break;
		case "weiqi": row=col=12; break;
		case "heibaiqi" row=col=8; break;
	}
	
	//每个格子的宽和高
	var aW=Math.floor(width/(col+2)),aH=Math.floor(height/(row+2));

	//格子为方形
	minL=Math.max(aH,aW)-4;
	
	// 要输出的数组
	var array_write=new Array("<dic style=\"margin:"+minL+"px;\"> "+
	"<table border=100% cellspacing=0 width=\""+(aW*col)+"\"height=\""+(aH*row)+"\">");
	
	for(var i=0;i<row;i++){
		array.push("<tr>");
		for(var j=0;j<col;j++){
			array.push("<td align=center>"+
			evt(i,j,minL,minL,aW*j+minL/2+8,aH*i+minL/2)+
			"</td>");
		}
		array.push("</tr>");		
	}
	document.write(array.join("")+"</table></div>");
	setClick(row,col,minL,minL);/* 初始化事件*/
	start();/* 初始化棋子 */
}

function man(width.height,id,colorBak){/*画棋子*/
	var color=colorBak==null?(order++%2==0?"000":"CCC"):colorBak;
	var r="border-radius:"+ width/2 + "px;";
	var obj=id==null?event.srcElement:_$(id);   
	obj.innerHTML="<div id=\"man_"+color+"_"+order+"\" style=\"display:block;-webkit-"  
	+r+"-moz-"+r+""+r+"-moz-box-shadow:inset 0 -10px 40px rgba(0,0,0,1);"+  
	"box-shadow:inset 0 -10px 40px rgba(0,0,0,1);"+  
	"background:-webkit-gradient(radial, 50 40, 30, center center, 80, from(#"+color+"),  
		to(rgba(255,255,255,1)));"+  
	"width:"+width+"px;height:"+height+"px;\"></div>";   
}

function evt(i,j,width,height,left,top){ /* 单一单元格事件 */   
	
return "<div id=\""+nameBak+"_"+i+"_"+j+"\" style=\"position:"+   
		(nameBak=="four"||nameBak=="turnover"?"block":"absolute")+  
			";border:0px solid #000;width:"+   
			width+"px;height:"+height+"px;top:"+top+"px;left:"+left+"px;\"></div>";   
}  
	 

function setClick(row,col,width,height){   
        for(var i=0;i<=row;i++){   
            for(var j=0;j<=col;j++){   
                var els=_$(nameBak+"_"+i+"_"+j);   
                if(els!=null)els.onclick=function(){if(rule())man(width,height);};   
             }   
        }   
     }  

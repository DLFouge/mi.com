/*头部导航动画*/
$(".nav").hover(function(){
		$(this).find(".pro").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pro").css("z-index","1").stop(true).slideUp(200);
});


/*大图动画部分*/
var lIndex=0;
var time=0;  //存放定时函数

$(".main .r-arr").click(function(){
	/*(lIndex<4)?(lIndex++):(lIndex=0)*/
	if(lIndex<4){
		lIndex++;
	}else{
		lIndex=0;
	}
	$(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
	$(".pic2 img").eq(lIndex).fadeIn(1000).siblings().fadeOut(1000);
});

$(".main .l-arr").click(function(){
	if(lIndex>0){
		lIndex--;
	}else{
		lIndex=4;
	}
	$(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
	$(".pic2 img").eq(lIndex).fadeIn(1000).siblings().fadeOut(1000);
});

$(".but ul li").click(function(){
	$(this).addClass("hover").siblings().removeClass("hover");
	var nIndex=$(this).index();
	$(".pic2 img").eq(nIndex).fadeIn(1000).siblings().fadeOut(1000);
	lIndex=nIndex;
});

function auto(){
	if(lIndex<4){
		lIndex++;
	}else{
		lIndex=0;
	}
	$(".but ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
	$(".pic2 img").eq(lIndex).fadeIn(1000).siblings().fadeOut(1000); 
}
time=setInterval("auto()",6000);


/*侧边栏动画*/
$(".nav-li").hover(function(){
		$(this).find(".pros").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pros").css("z-index","1").stop(true).slideUp(200);
});

/*小米明星单品动画*/
//找到右边按钮，点击
$(".md-box .m-right").click(function(){
	$(".md-box .box-b ul").animate({"left":"-1226px"},500);
});
//找到左边按钮，点击
$(".md-box .m-left").click(function(){
	$(".md-box .box-b ul").animate({"left":"0px"},500);
});


/*评论部分动画*/
$(".dp-box .com").hover(function(){
		$(this).find(".pl").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pl").css("z-index","1").stop(true).slideUp(200);
});

/*搭配、配件、周边 隐藏产品区*/
/*$(".zn-h .navs ul li").hover(function(){
	$(this).addClass("rm").siblings().removeClass("rm");
	var Index=$(this).index();
	$(".dp-box .prod").eq(Index).css("display","block").siblings().css("display","none");
});*/



/*为你推荐*/
var indexR=0;
//找到右边按钮，点击
$(".md-box .m-right").click(function(){
	indexR++;
	if(indexR<4){
		$(".md-box .box-m ul").animate({"left":"-"+indexR*1226+"px"},500);
	}else{
		indexR=3;
	}
});
//找到左边按钮，点击
$(".md-box .m-left").click(function(){
	indexR--;
	if(indexR>=0){
		$(".md-box .box-m ul").animate({"left":"-"+indexR*1226+"px"},500);
	}else{
		indexR=0;
	}
});

/*内容*/
var index1=0;
var index2=0;
var index3=0;
var index4=0;
//找到第一个li右边按钮，点击
$(".box-con .con1 .r-arr").click(function(){
	//alert("aa");
	index1++;
	if(index1<4){
		$(".con1 .cons ul").animate({"left":"-"+index1*296+"px"},500);
		$(".con1 .con-but ul li").eq(index1).addClass("hover1").siblings().removeClass("hover1");
	}else{
		index1=3;
	}
});
//找到第一个li左边按钮，点击
$(".box-con .con1 .l-arr").click(function(){
	//alert("aa");
	index1--;
	if(index1>=0){
		$(".con1 .cons ul").animate({"left":"-"+index1*296+"px"},500);
		$(".con1 .con-but ul li").eq(index1).addClass("hover1").siblings().removeClass("hover1");
	}else{
		index1=0;
	}
});

//找到第二个li右边按钮，点击
$(".box-con .con2 .r-arr").click(function(){
	//alert("aa");
	index2++;
	if(index2<4){
		$(".con2 .cons ul").animate({"left":"-"+index2*296+"px"},500);
		$(".con2 .con-but ul li").eq(index2).addClass("hover2").siblings().removeClass("hover2");
	}else{
		index2=3;
	}
});
//找到第二个li左边按钮，点击
$(".box-con .con2 .l-arr").click(function(){
	//alert("aa");
	index2--;
	if(index2>=0){
		$(".con2 .cons ul").animate({"left":"-"+index2*296+"px"},500);
		$(".con2 .con-but ul li").eq(index2).addClass("hover2").siblings().removeClass("hover2");
	}else{
		index2=0;
	}
});

//找到第三个li右边按钮，点击
$(".box-con .con3 .r-arr").click(function(){
	//alert("aa");
	index3++;
	if(index3<4){
		$(".con3 .cons ul").animate({"left":"-"+index3*296+"px"},500);
		$(".con3 .con-but ul li").eq(index3).addClass("hover3").siblings().removeClass("hover3");
	}else{
		index3=3;
	}
});
//找到第三个li左边按钮，点击
$(".box-con .con3 .l-arr").click(function(){
	//alert("aa");
	index3--;
	if(index3>=0){
		$(".con3 .cons ul").animate({"left":"-"+index3*296+"px"},500);
		$(".con3 .con-but ul li").eq(index3).addClass("hover3").siblings().removeClass("hover3");
	}else{
		index3=0;
	}
});

//找到第四个li右边按钮，点击
$(".box-con .con4 .r-arr").click(function(){
	//alert("aa");
	index4++;
	if(index4<4){
		$(".con4 .cons ul").animate({"left":"-"+index4*296+"px"},500);
		$(".con4 .con-but ul li").eq(index4).addClass("hover4").siblings().removeClass("hover4");
	}else{
		index4=3;
	}
});
//找到第四个li左边按钮，点击
$(".box-con .con4 .l-arr").click(function(){
	//alert("aa");
	index4--;
	if(index4>=0){
		$(".con4 .cons ul").animate({"left":"-"+index4*296+"px"},500);
		$(".con4 .con-but ul li").eq(index4).addClass("hover4").siblings().removeClass("hover4");
	}else{
		index4=0;
	}
});

/*视频部分*/





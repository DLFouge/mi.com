/*ͷ����������*/
$(".nav").hover(function(){
		$(this).find(".pro").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pro").css("z-index","1").stop(true).slideUp(200);
});


/*��ͼ��������*/
var lIndex=0;
var time=0;  //��Ŷ�ʱ����

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


/*���������*/
$(".nav-li").hover(function(){
		$(this).find(".pros").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pros").css("z-index","1").stop(true).slideUp(200);
});

/*С�����ǵ�Ʒ����*/
//�ҵ��ұ߰�ť�����
$(".md-box .m-right").click(function(){
	$(".md-box .box-b ul").animate({"left":"-1226px"},500);
});
//�ҵ���߰�ť�����
$(".md-box .m-left").click(function(){
	$(".md-box .box-b ul").animate({"left":"0px"},500);
});


/*���۲��ֶ���*/
$(".dp-box .com").hover(function(){
		$(this).find(".pl").css("z-index","2").stop(true).slideDown(200);
	},function(){
		$(this).find(".pl").css("z-index","1").stop(true).slideUp(200);
});

/*���䡢������ܱ� ���ز�Ʒ��*/
/*$(".zn-h .navs ul li").hover(function(){
	$(this).addClass("rm").siblings().removeClass("rm");
	var Index=$(this).index();
	$(".dp-box .prod").eq(Index).css("display","block").siblings().css("display","none");
});*/



/*Ϊ���Ƽ�*/
var indexR=0;
//�ҵ��ұ߰�ť�����
$(".md-box .m-right").click(function(){
	indexR++;
	if(indexR<4){
		$(".md-box .box-m ul").animate({"left":"-"+indexR*1226+"px"},500);
	}else{
		indexR=3;
	}
});
//�ҵ���߰�ť�����
$(".md-box .m-left").click(function(){
	indexR--;
	if(indexR>=0){
		$(".md-box .box-m ul").animate({"left":"-"+indexR*1226+"px"},500);
	}else{
		indexR=0;
	}
});

/*����*/
var index1=0;
var index2=0;
var index3=0;
var index4=0;
//�ҵ���һ��li�ұ߰�ť�����
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
//�ҵ���һ��li��߰�ť�����
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

//�ҵ��ڶ���li�ұ߰�ť�����
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
//�ҵ��ڶ���li��߰�ť�����
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

//�ҵ�������li�ұ߰�ť�����
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
//�ҵ�������li��߰�ť�����
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

//�ҵ����ĸ�li�ұ߰�ť�����
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
//�ҵ����ĸ�li��߰�ť�����
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

/*��Ƶ����*/





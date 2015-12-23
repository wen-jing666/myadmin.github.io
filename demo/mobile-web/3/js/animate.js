var Animate={
	1:{
		up:{out:"pt-page-moveToTop",IN:"pt-page-moveFromBottom"},
		down:{out:"pt-page-moveToBottom",IN:"pt-page-moveFromTop"},
		left:{out:"pt-page-moveToLeft",IN:"pt-page-moveFromRight"},
		right:{out:"pt-page-moveToRight",IN:"pt-page-moveFromLeft"}
	},
	2:{
		up:{out:"pt-page-rotatePushTop",IN:"pt-page-moveFromBottom"},
		down:{out:"pt-page-rotatePushBottom",IN:"pt-page-moveFromTop"},left:{out:"pt-page-rotatePushLeft",IN:"pt-page-moveFromRight"},right:{out:"pt-page-rotatePushRight",IN:"pt-page-moveFromLeft"}},3:{up:{out:"pt-page-rotatePushTop",IN:"pt-page-rotatePullBottom pt-page-delay180"},down:{out:"pt-page-rotatePushBottom",IN:"pt-page-rotatePullTop pt-page-delay180"},left:{out:"pt-page-rotatePushLeft",IN:"pt-page-rotatePullRight pt-page-delay180"},right:{out:"pt-page-rotatePushRight",IN:"pt-page-rotatePullLeft pt-page-delay180"}},4:{up:{out:"pt-page-rotateBottomSideFirst",IN:"pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"},down:{out:"pt-page-rotateTopSideFirst",IN:"pt-page-moveFromTop pt-page-delay200 pt-page-ontop"},left:{out:"pt-page-rotateRightSideFirst",IN:"pt-page-moveFromRight pt-page-delay200 pt-page-ontop"},right:{out:"pt-page-rotateLeftSideFirst",IN:"pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"}},5:{up:{out:"pt-page-flipOutTop",IN:"pt-page-flipInBottom pt-page-delay500"},down:{out:"pt-page-flipOutBottom",IN:"pt-page-flipInTop pt-page-delay500"},left:{out:"pt-page-flipOutRight",IN:"pt-page-flipInLeft pt-page-delay500"},right:{out:"pt-page-flipOutLeft",IN:"pt-page-flipInRight pt-page-delay500"}},6:{up:{out:"pt-page-rotateFall pt-page-ontop",IN:"pt-page-scaleUp"},down:{out:"pt-page-rotateFalltoright pt-page-ontop",IN:"pt-page-scaleUp"},left:{out:"pt-page-rotateFall pt-page-ontop",IN:"pt-page-scaleUp"},right:{out:"pt-page-rotateFalltoright pt-page-ontop",IN:"pt-page-scaleUp"}},7:{up:{out:"pt-page-rotateFoldTop",IN:"pt-page-moveFromBottomFade"},down:{out:"pt-page-rotateFoldBottom",IN:"pt-page-moveFromTopFade"},left:{out:"pt-page-rotateFoldLeft",IN:"pt-page-moveFromRightFade"},right:{out:"pt-page-rotateFoldRight",IN:"pt-page-moveFromLeftFade"}},8:{up:{out:"pt-page-moveToTopFade",IN:"pt-page-rotateUnfoldBottom"},down:{out:"pt-page-moveToBottomFade",IN:"pt-page-rotateUnfoldTop"},left:{out:"pt-page-moveToLeftFade",IN:"pt-page-rotateUnfoldRight"},right:{out:"pt-page-moveToRightFade",IN:"pt-page-rotateUnfoldLeft"}},9:{up:{out:"pt-page-rotateCubeTopOut pt-page-ontop",IN:"pt-page-rotateCubeTopIn"},down:{out:"pt-page-rotateCubeBottomOut pt-page-ontop",IN:"pt-page-rotateCubeBottomIn"},left:{out:"pt-page-rotateCubeLeftOut pt-page-ontop",IN:"pt-page-rotateCubeLeftIn"},right:{out:"pt-page-rotateCubeRightOut pt-page-ontop",IN:"pt-page-rotateCubeRightIn"}},10:{up:{out:"pt-page-rotateCarouselTopOut pt-page-ontop",IN:"pt-page-rotateCarouselTopIn"},down:{out:"pt-page-rotateCarouselBottomOut pt-page-ontop",IN:"pt-page-rotateCarouselBottomIn"},left:{out:"pt-page-rotateCarouselLeftOut pt-page-ontop",IN:"pt-page-rotateCarouselLeftIn"},right:{out:"pt-page-rotateCarouselRightOut pt-page-ontop",IN:"pt-page-rotateCarouselRightIn"}},11:{up:{out:"pt-page-fad",IN:"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-fade",IN:"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-fade",IN:"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-fade",IN:"pt-page-moveFromLeft pt-page-ontop"}},12:{up:{out:"pt-page-moveToTopFade",IN:"pt-page-moveFromBottomFade"},down:{out:"pt-page-moveToBottomFade",IN:"pt-page-moveFromTopFade"},left:{out:"pt-page-moveToLeftFade",IN:"pt-page-moveFromRightFade"},right:{out:"pt-page-moveToRightFade",IN:"pt-page-moveFromLeftFade"}},13:{up:{out:"pt-page-moveToTopEasing pt-page-ontop",IN:"pt-page-moveFromBottom"},down:{out:"pt-page-moveToBottomEasing pt-page-ontop",IN:"pt-page-moveFromTop"},left:{out:"pt-page-moveToLeftEasing pt-page-ontop",IN:"pt-page-moveFromRight"},right:{out:"pt-page-moveToRightEasing pt-page-ontop",IN:"pt-page-moveFromLeft"}},14:{up:{out:"pt-page-scaleDown",IN:"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-scaleDown",IN:"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-scaleDown",IN:"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-scaleDown",IN:"pt-page-moveFromLeft pt-page-ontop"}},15:{up:{out:"pt-page-scaleDownUp",IN:"pt-page-scaleUp pt-page-delay300"},down:{out:"pt-page-scaleDown",IN:"pt-page-scaleUpDown pt-page-delay300"},left:{out:"pt-page-scaleDownUp",IN:"pt-page-scaleUp pt-page-delay300"},right:{out:"pt-page-scaleDown",IN:"pt-page-scaleUpDown pt-page-delay300"}},16:{up:{out:"pt-page-moveToTop pt-page-ontop",IN:"pt-page-scaleUp"},down:{out:"pt-page-moveToBottom pt-page-ontop",IN:"pt-page-scaleUp"},left:{out:"pt-page-moveToLeft pt-page-ontop",IN:"pt-page-scaleUp"},right:{out:"pt-page-moveToRight pt-page-ontop",IN:"pt-page-scaleUp"}},17:{up:{out:"rotateSlideOuttotop",IN:"rotateSlideIntotop"},down:{out:"rotateSlideOuttobottom",IN:"rotateSlideIntobottom"},left:{out:"pt-page-rotateSlideOut",IN:"pt-page-rotateSlideIn"},right:{out:"rotateSlideOuttoright",IN:"rotateSlideIntoright"}}};
		
	document.addEventListener("touchmove",function(a){a.preventDefault();return false},false);
	var Animate_Index=0;
	var Animate_lastIndex=Animate_Index;
	var Animate_isSwipe=true;
	var Animate_css=Animate[8];
	var Animate_Bstop=true;
	$(".box-step").eq(Animate_lastIndex).show();
	function GetRandomNum(a,c){var d=c-a;var b=Math.random();return a+Math.round(b*d)}
	function swipeUpFn(c){clearInterval(timer);
	if(c&&c==Animate_Index){return}
	if(!Animate_Bstop){return}
	Animate_Bstop=false;
var b=$(".box-content .box-step").eq(Animate_lastIndex);
var a=$(".box-content .box-step").eq(c?c:++Animate_Index);
if(!a.size()){Animate_Index--;Animate_Bstop=true;return}
if(c){Animate_Index=c}
b.cssHide(Animate_css.up.out,function(){Animate_Bstop=true});
a.cssShow(Animate_css.up.IN);
Animate_lastIndex=Animate_Index;
setTimeout(AnimateTween,100)}
function swipeDownFn(c){clearInterval(timer);
	if(Animate_lastIndex==0){return}
		if(c&&c==Animate_Index){return}
			if(!Animate_Bstop){return}
				Animate_Bstop=false;
			var b=$(".box-content .box-step").eq(Animate_lastIndex);
			var a=$(".box-content .box-step").eq(c?c:--Animate_Index);
			if(c){Animate_Index=c}
				b.cssHide(Animate_css.down.out,function(){Animate_Bstop=true});
			a.cssShow(Animate_css.down.IN);
			Animate_lastIndex=Animate_Index;
			setTimeout(AnimateTween,100)};
	
  


				
var timer=null					
function AnimateTween(){
		var TIME = .5;
		$('.fudong').removeClass('fudong');
		$('.pingg1').removeClass('luo1');
		$('.pingg2').removeClass('luo2');
		$('.dax').removeClass('dax');
		
		
		
	/*	clearTimeout(timer)
		
		
		if(Animate_Index == 4 || Animate_Index == 5 || Animate_Index == 8 || Animate_Index == 9)
		{
			
			
			
		}else
		{
				timer = setTimeout(function(){
			
					swipeUpFn();	
			
				},5000);
		};
		*/
		
		
		
		
		
		
		
		
		
		
		switch(Animate_Index)
		{
			
			case 0:
				$('.zhuquan1 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan1 .s1_1').addClass('fudong')
				});
			
				$('.zhuquan1 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(4).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(5).from({ transform : 'translate(0 , -100px)' , opacity : 0 , delay : 1.7} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(6).from({ transform : 'translate(0 , -100px)' , opacity : 0 , delay : 1.8} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(7).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 2} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(8).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 2.2} ,TIME );
				$('.zhuquan1 .s1_2 img').eq(9).from({  opacity : 0 , delay : 2.2} ,TIME );
				
				$('.zhuquan1 .s1_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.4} ,TIME );
				break;
				
			case 1:
				$('.zhuquan2 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan2 .s1_1').addClass('fudong')
				});
			
				$('.zhuquan2 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(2).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(3).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.7} ,TIME );
				
				$('.zhuquan2 .s1_2 img').eq(6).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.8} ,TIME );
				$('.zhuquan2 .s1_2 img').eq(7).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 2} ,TIME );
				
				
				$('.zhuquan2 .s2_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.4} ,TIME );
				break;
			
			
			case 2:
				$('.pingg1').hide();
				$('.pingg2').hide()
				$('.zhuquan3 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan3 .s1_1').addClass('fudong')
				});
				
				$('.zhuquan3 .s1_2 img').eq(0).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(2).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.2} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(8).from({ transform : 'translate(0 , 50px)' ,  delay : 1.3} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.4} ,TIME ,function(){
					$('.pingg1').show().addClass('luo1');
					$('.pingg2').show().addClass('luo2');	
				} );
				$('.zhuquan3 .s1_2 img').eq(6).from({ transform : 'translate(-50px, 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(4).from({ transform : 'translate(0, -50px)' , opacity : 0 , delay : 1.6} ,TIME );
				$('.zhuquan3 .s1_2 img').eq(7).from({ transform : 'translate(0, -50px)' , opacity : 0 , delay : 1.7} ,TIME );
				
				$('.zhuquan3 .s3_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.9} ,TIME );
				break;
				
			case 3:
				$('.zhuquan4 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan4 .s1_1').addClass('fudong')
				});	
				$('.zhuquan4 .s1_2 img').eq(0).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan4 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan4 .s1_2 img').eq(2).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan4 .s1_2 img').eq(3).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan4 .s1_2 img').eq(4).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan4 .s1_2 img').eq(5).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.7} ,TIME );
				
				$('.zhuquan4 .s4_3').from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.7} ,TIME );
				
				break;
			case 4:
				$('.zhuquan5 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan5 .s1_1').addClass('fudong')
				});	
				
				$('.zhuquan5 .s5_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				
				$('.zhuquan5 .s1_2 img').eq(0).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );	
				$('.zhuquan5 .s1_2 img').eq(1).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(3).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME);
				$('.zhuquan5 .s1_2 img').eq(6).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.7} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(7).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.9} ,TIME );
				$('.zhuquan5 .s1_2 img').eq(8).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.9} ,TIME );
				break;
				
		case 5:
				$('.zhuquan6 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan6 .s1_1').addClass('fudong')
				});	
				$('.zhuquan6 .s6_3').from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan6 .s6_4').from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : .7} ,TIME );
				
				$('.zhuquan6 .s1_2 img').eq(0).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(1).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(3).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.3} ,TIME );	
				$('.zhuquan6 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(6).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(7).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan6 .s1_2 img').eq(8).from({ transform : 'translate(50px, 0)' , opacity : 0 , delay : 1.7} ,TIME );
				
			break;	
			
			
		case 6:
				$('.zhuquan7 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan7 .s1_1').addClass('fudong')
				});	
				
				$('.zhuquan7 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(2).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(3).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(6).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.7} ,TIME );
				$('.zhuquan7 .s1_2 img').eq(7).from({ transform : 'scale(.6)' , opacity : 0 , delay : 1.9} ,TIME );
				
				$('.zhuquan7 .s7_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2} ,TIME );
				break;	
					
					
		case 7:
				$('.zhuquan8 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan8 .s1_1').addClass('fudong')
				});
				$('.zhuquan8 .s8_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				
				$('.zhuquan8 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(2).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.3} ,TIME );
				
				$('.zhuquan8 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.6} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(5).from({ transform : 'scale(.8)' , opacity : 0 , delay : 1.8} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(6).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.7} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(7).from({ transform : 'scale(.8)' , opacity : 0 , delay : 1.9} ,TIME );
				$('.zhuquan8 .s1_2 img').eq(8).from({ transform : 'scale(.8)' , opacity : 0 , delay : 2} ,TIME );
			break;
			
			
		case 8:
				$('.s9_4 img').hide();
				$('.s9_4 img').eq(0).show();
				$('.shou2').show();
				$('.zhuquan9 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan9 .s1_1').addClass('fudong')
				});
				
				$('.zhuquan9 .s9_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				
				$('.zhuquan9 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(4).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(5).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				
				$('.zhuquan9 .s1_2 img').eq(7).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan9 .s1_2 img').eq(8).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME ,function(){
					$('.shou2').addClass('dax');	
				});
				break;
				
		case 9:	
		
				$('.s10_4 img').hide();
				$('.s10_4 img').eq(0).show();
				$('.s10_5').show();
				$('.zhuquan10 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
					$('.zhuquan10 .s1_1').addClass('fudong')
				});
				$('.zhuquan10 .s10_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .9} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(1).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(4).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.5} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(5).from({  opacity : 0 , delay : 1.6} ,TIME );
				$('.zhuquan10 .s1_2 img').eq(6).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.6} ,TIME );
				
				$('.zhuquan10 .s10_4').from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.8} ,TIME );
				$('.zhuquan10 .s10_5').from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 2} ,TIME,function(){
					$('.zhuquan10 .s10_5').addClass('dax');	
				} );
			break;
			
		case 10:
			$('.zhuquan11 .s11_1').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .5} ,TIME );
			$('.zhuquan11 .s11_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
			$('.zhuquan11 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .9} ,TIME );
			$('.zhuquan11 .s1_2 img').eq(1).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay :1.1} ,TIME );
			$('.zhuquan11 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
			$('.zhuquan11 .s11_4').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME );
			$('.zhuquan11 .s11_5').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.7} ,TIME );
			break;
		}
		
		
		
		
};











AnimateTween();
$( function (){
	
	
	
	
	

	
	$$('.box-content').bind('swipeUp' , function (){

					//if($('.zhuquan1').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeUpFn();
					
					
	}).bind('swipeDown' , function (){
					//if($('.zhuquan2').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeDownFn();
					
	});
	
	
			

	
	
	
	
	
	
	
	$('a[href="#"]').attr('href' , 'javascript:;');

	/*var phone = $('.s3-2 .ipt');
		
		if(!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(phone.val()))
		{
			alert('手机号码输入有误!');
			return;
		};
	*/
});




		
		



function LoadFn ( arr , fn , fn2){
		var loader = new PxLoader();
		for( var i = 0 ; i < arr.length; i ++)
		{
			loader.addImage(arr[i]);
		};
		
		loader.addProgressListener(function(e) {
				var percent = Math.round( e.completedCount / e.totalCount * 100 );
				if(fn2) fn2(percent)
		});	
		
		
		loader.addCompletionListener( function(){
			if(fn) fn();	
		});
		loader.start();	
}








var LoadingImg = [];

$('img').each( function (){
	
	if(!$(this).attr('src')) return;
	LoadingImg.push($(this).attr('src'));
		
});
var allTags = $('*') ;	
for ( var i=0, j = allTags.length; i<j ; i++ ) {
	var str = $( allTags[i] ).css('backgroundImage');
	if ( str && str != 'none') {
		if ( /http:|https:/gi.test( str ) ) {
			str=str.replace('url(\"',"").replace('\")',"");	
		} else {
			if ( str.indexOf('images/') != -1  ) 
			str = 'images/'+str.split('images/')[1].replace('\")',"");	
		}
		LoadingImg.push (str);			
	}
};
	


function HTMLStart  (){
	
	
	
	
}


LoadFn(LoadingImg , function (){
	$('#loading').fadeOut();
	HTMLStart ();
	//swipeUpFn(3);
	


} , function ( p ){
	
	
	//$('#loading .s1-4 i').width( p + '%')
	$('#loading p').html( p + '%')
});












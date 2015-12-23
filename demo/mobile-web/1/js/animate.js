
var Animate = {1:{up:{out:"pt-page-moveToTop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-moveToBottom","IN":"pt-page-moveFromTop"},left:{out:"pt-page-moveToLeft","IN":"pt-page-moveFromRight"},right:{out:"pt-page-moveToRight","IN":"pt-page-moveFromLeft"}},2:{up:{out:"pt-page-rotatePushTop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-rotatePushBottom","IN":"pt-page-moveFromTop"},left:{out:"pt-page-rotatePushLeft","IN":"pt-page-moveFromRight"},right:{out:"pt-page-rotatePushRight","IN":"pt-page-moveFromLeft"}},3:{up:{out:"pt-page-rotatePushTop","IN":"pt-page-rotatePullBottom pt-page-delay180"},down:{out:"pt-page-rotatePushBottom","IN":"pt-page-rotatePullTop pt-page-delay180"},left:{out:"pt-page-rotatePushLeft","IN":"pt-page-rotatePullRight pt-page-delay180"},right:{out:"pt-page-rotatePushRight","IN":"pt-page-rotatePullLeft pt-page-delay180"}},4:{up:{out:"pt-page-rotateBottomSideFirst","IN":"pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"},down:{out:"pt-page-rotateTopSideFirst","IN":"pt-page-moveFromTop pt-page-delay200 pt-page-ontop"},left:{out:"pt-page-rotateRightSideFirst","IN":"pt-page-moveFromRight pt-page-delay200 pt-page-ontop"},right:{out:"pt-page-rotateLeftSideFirst","IN":"pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"}},5:{up:{out:"pt-page-flipOutTop","IN":"pt-page-flipInBottom pt-page-delay500"},down:{out:"pt-page-flipOutBottom","IN":"pt-page-flipInTop pt-page-delay500"},left:{out:"pt-page-flipOutRight","IN":"pt-page-flipInLeft pt-page-delay500"},right:{out:"pt-page-flipOutLeft","IN":"pt-page-flipInRight pt-page-delay500"}},6:{up:{out:"pt-page-rotateFall pt-page-ontop","IN":"pt-page-scaleUp"},down:{out:"pt-page-rotateFalltoright pt-page-ontop","IN":"pt-page-scaleUp"},left:{out:"pt-page-rotateFall pt-page-ontop","IN":"pt-page-scaleUp"},right:{out:"pt-page-rotateFalltoright pt-page-ontop","IN":"pt-page-scaleUp"}},7:{up:{out:"pt-page-rotateFoldTop","IN":"pt-page-moveFromBottomFade"},down:{out:"pt-page-rotateFoldBottom","IN":"pt-page-moveFromTopFade"},left:{out:"pt-page-rotateFoldLeft","IN":"pt-page-moveFromRightFade"},right:{out:"pt-page-rotateFoldRight","IN":"pt-page-moveFromLeftFade"}},8:{up:{out:"pt-page-moveToTopFade","IN":"pt-page-rotateUnfoldBottom"},down:{out:"pt-page-moveToBottomFade","IN":"pt-page-rotateUnfoldTop"},left:{out:"pt-page-moveToLeftFade","IN":"pt-page-rotateUnfoldRight"},right:{out:"pt-page-moveToRightFade","IN":"pt-page-rotateUnfoldLeft"}},9:{up:{out:"pt-page-rotateCubeTopOut pt-page-ontop","IN":"pt-page-rotateCubeTopIn"},down:{out:"pt-page-rotateCubeBottomOut pt-page-ontop","IN":"pt-page-rotateCubeBottomIn"},left:{out:"pt-page-rotateCubeLeftOut pt-page-ontop","IN":"pt-page-rotateCubeLeftIn"},right:{out:"pt-page-rotateCubeRightOut pt-page-ontop","IN":"pt-page-rotateCubeRightIn"}},10:{up:{out:"pt-page-rotateCarouselTopOut pt-page-ontop","IN":"pt-page-rotateCarouselTopIn"},down:{out:"pt-page-rotateCarouselBottomOut pt-page-ontop","IN":"pt-page-rotateCarouselBottomIn"},left:{out:"pt-page-rotateCarouselLeftOut pt-page-ontop","IN":"pt-page-rotateCarouselLeftIn"},right:{out:"pt-page-rotateCarouselRightOut pt-page-ontop","IN":"pt-page-rotateCarouselRightIn"}},11:{up:{out:"pt-page-fad","IN":"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-fade","IN":"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-fade","IN":"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-fade","IN":"pt-page-moveFromLeft pt-page-ontop"}},12:{up:{out:"pt-page-moveToTopFade","IN":"pt-page-moveFromBottomFade"},down:{out:"pt-page-moveToBottomFade","IN":"pt-page-moveFromTopFade"},left:{out:"pt-page-moveToLeftFade","IN":"pt-page-moveFromRightFade"},right:{out:"pt-page-moveToRightFade","IN":"pt-page-moveFromLeftFade"}},13:{up:{out:"pt-page-moveToTopEasing pt-page-ontop","IN":"pt-page-moveFromBottom"},down:{out:"pt-page-moveToBottomEasing pt-page-ontop","IN":"pt-page-moveFromTop"},left:{out:"pt-page-moveToLeftEasing pt-page-ontop","IN":"pt-page-moveFromRight"},right:{out:"pt-page-moveToRightEasing pt-page-ontop","IN":"pt-page-moveFromLeft"}},14:{up:{out:"pt-page-scaleDown","IN":"pt-page-moveFromBottom pt-page-ontop"},down:{out:"pt-page-scaleDown","IN":"pt-page-moveFromTop pt-page-ontop"},left:{out:"pt-page-scaleDown","IN":"pt-page-moveFromRight pt-page-ontop"},right:{out:"pt-page-scaleDown","IN":"pt-page-moveFromLeft pt-page-ontop"}},15:{up:{out:"pt-page-scaleDownUp","IN":"pt-page-scaleUp pt-page-delay300"},down:{out:"pt-page-scaleDown","IN":"pt-page-scaleUpDown pt-page-delay300"},left:{out:"pt-page-scaleDownUp","IN":"pt-page-scaleUp pt-page-delay300"},right:{out:"pt-page-scaleDown","IN":"pt-page-scaleUpDown pt-page-delay300"}},16:{up:{out:"pt-page-moveToTop pt-page-ontop","IN":"pt-page-scaleUp"},down:{out:"pt-page-moveToBottom pt-page-ontop","IN":"pt-page-scaleUp"},left:{out:"pt-page-moveToLeft pt-page-ontop","IN":"pt-page-scaleUp"},right:{out:"pt-page-moveToRight pt-page-ontop","IN":"pt-page-scaleUp"}},17:{up:{out:"rotateSlideOuttotop","IN":"rotateSlideIntotop"},down:{out:"rotateSlideOuttobottom","IN":"rotateSlideIntobottom"},left:{out:"pt-page-rotateSlideOut","IN":"pt-page-rotateSlideIn"},right:{out:"rotateSlideOuttoright","IN":"rotateSlideIntoright"}}};





if(Zhu._weixin && Zhu._Android)
{
	
}



/*if(Zhu._IsPC) $(window).resize(resize) , resize(); 
function resize(){
	if($(window).width() > $(window).height()) {
		$("#horizontal").show();
	}else
	{
		$("#horizontal").hide();	
	}
};
*/


document.addEventListener('touchmove' , function (ev){
	ev.preventDefault();
	return false;
} , false)





var Animate_Index = 0;
var Animate_lastIndex = Animate_Index;
var Animate_isSwipe = true;
var Animate_css = Animate[15];
var Animate_Bstop = true;

$('.box-step').eq(Animate_lastIndex).show();


				
					
function AnimateTween(){
		
		$('.road').css({ transform : 'translate(0,0)'});
		switch(Animate_Index)
		{
			
			case 1:
				
				
			break;
			
			case 2:
				
				
				


				$('.s3-1 img').eq(0).from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				$('.s3-1 img').eq(1).from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
				$('.s3-1 img').eq(2).from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5)
				
				$('.s3-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : 1} , .5)
				$('.s3-3').from({ transform : 'scale(1.3)' , opacity : 0 , delay : 1.3} , .5 , function (){
					$('.s3-3').addClass('pulse animated infinite')
				})
				
				
				var swiper = new Swiper('.s3-2', {paginationClickable: true,nextButton: '.swiper-button-next',prevButton: '.swiper-button-prev'});

				break;
		
			case 3:
				
				
				
				$('.car').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				$('.s4-1').from({ transform : 'scale(1.2)' , opacity : 0 , delay : 1} , .5)
			
				
				break;
				
			case 4:
				
				$('.zhuquan5 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
				$('.s5-1 img:first').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
				$('.s5-1 img:last').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5)
				break;
				
			case 5:
				RoadRun($('.zhuquan6') , 1550 , function (){
	
					$('.s6-3 img').show().from({ transform : 'translate(30px , 0)'} , .5);
					
					$('.zhuquan6 .shade-bt').fadeIn();
					$('.zhuquan6 .light-b').show();
					$('.s6-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
					
					$('.s6-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
					
				});
				break;
				
				
				case 6:
				
				
					$('.s7-1').show().from({ transform : 'scale(.5)' , delay : .7 , opacity : 0} , .5 , function (){
						$('.s7-1 img').show();
					});
				
					
				$('.zhuquan7 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : 1.5} , .5)
				
				$('.s7-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : 1.7} , .5)
				$('.s7-3').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : 1.9} , .5 , function (){
					$('.zhuquan7 .upBtn').fadeIn();
				})
					
				break;
				
				case 7:
				
				
						RoadRun($('.zhuquan8') , 2000 );
						
						setTimeout( function (){
							$('#sound2')[0].play();
							$('.zhuquan8 .shade-bt').fadeIn();
						
							$('.s8-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
						
							$('.s8-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
						} , 4000)
				
				
					break;
					
				case 8:
				
					$('.zhuquan9 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s9-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s9-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan9 .upBtn').fadeIn();
					})
				
				
					break;
					
					
				case 9:
				
					$('.zhuquan10 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s10-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s10-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan10 .upBtn').fadeIn();
					})
					
					break;
					
					
			case 10:
				RoadRun($('.zhuquan11') , 2000 , function (){
	
					$('.zhuquan11 .light-b').show();
					$('.s11-3').show().from({ transform : 'translate(-100px , 0)'} , .5);
					
					$('#sound5')[0].play();
					
					$('.zhuquan11 .shade-bt').fadeIn();
					
					
					$('.s11-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
					
					$('.s11-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
					
				});
				break;
				
			case 11:
				
				
					$('.zhuquan12 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s12-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s12-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan12 .upBtn').fadeIn();
					})
				
				
				
				
				break;
				
			case 12:	
				RoadRun($('.zhuquan13') , 2000 );
						
						setTimeout( function (){
							$('#sound3')[0].play();
							$('.zhuquan13 .shade-bt , .yugua').fadeIn();
						
							$('.s13-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
						
							$('.s13-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
							
							
							
						} , 3000)
				
				
				
						setTimeout( function (){
							$('.s13-3').fadeIn();
						} , 7000)
						
						
						setTimeout( function (){
							$('.s13-1 img').each( function ( i ){
								
								var b =  $(this)
								
								setTimeout( function (){
									b.hide();
								} , 800 - i * 1000)	
							});
							
							$('.s13-2 img').each( function ( i ){
								
								var b =  $(this)
								
								setTimeout( function (){
									b.hide();
								} ,800 - i * 1000)	
							});
						
						} , 7000)
						
						setTimeout( function (){
							
							swipeUpFn( 0 , true)
							
						} , 10000);
			
				break;
				
			case 13:
				
				
						RoadRun($('.zhuquan14') , 2000 , function (){});
				
				
				
						setTimeout( function (){
							$('.car-other').to({ bottom : 600} , 1 , function (){
								$('.car-other img').show();
								$('.zhuquan14 .car img').show().addClass('shan2');
								$('.zhuquan14 .shade-bt').fadeIn();
								
								
								$('.zhuquan14 .car').to({ bottom : 240})
						
							$('.s14-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
						
							$('.s14-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
							
								
							});
							
							
						} , 3000)
				
				
				
				
				
				break;
				
				
			case 14:
					$('.zhuquan15 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s15-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s15-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan15 .upBtn').fadeIn();
					})
				
				
				break;
				
			case 15:
				
				
				
				$('.zhuquan16 .road').animate({ bottom : -2550}, 3000 , function (){
					$('.zhuquan16 .light-b').show();
							$('.zhuquan16 .shade-bt').fadeIn();
							$('.s16-1').show().from({ transform : 'translate(0, 30px)' , delay : .5 , opacity : 0} , .5);
							$('.s16-2').show().from({ transform : 'translate(0, 30px)' , delay : .7 , opacity : 0} , .5);
							
				})
			
				
				break;
				
			case 16:
					$('.zhuquan17 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s17-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s17-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan17 .upBtn').fadeIn();
					})
				
				break;
			case 17:
					$('.zhuquan18 .six').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .5} , .5)
				
					$('.s18-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s18-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 , function (){
						$('.zhuquan18 .upBtn').fadeIn();
					})
				
				break;
			case 18:
				
					$('.s19-1').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .7} , .5)
					$('.s19-2').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : .9} , .5 )
					$('.s19-3').from({ transform : 'translate(0,50px)' , opacity : 0 , delay : 1.1} , .5 )
				
				break;
				
		}
		
		
};


function GetRandomNum(Min,Max)
{   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
} 

function swipeUpFn ( index , isFade){
	if( index && index == Animate_Index) return;
	if(!Animate_Bstop) return;
	Animate_Bstop = false;
	
	var NowStep = $('.box-content .box-step').eq(Animate_lastIndex);
	var NextStep = $('.box-content .box-step').eq(index ? index : ++ Animate_Index);
	
	
	if( !NextStep.size() ) {
		Animate_Index -- ;
		Animate_Bstop = true;
		return;	
	}
	if(index) Animate_Index = index;
	
	
	
	Animate_Bstop = true;	
	/*if(isFade)
	{
		
		NowStep.fadeOut(300)
		setTimeout( function (){
			NextStep.fadeIn(500);	
		} , 100)
	
	}else
	{
		NowStep.fadeOut(300)
		NextStep.cssShow(Animate_css.up.IN);	
	}
	*/
	
	
	NowStep.fadeOut(300)
		setTimeout( function (){
			NextStep.fadeIn(500);	
		} , 100)
	
	
	
	
	
	
	
	
	
	
	Animate_lastIndex = Animate_Index;
	setTimeout( AnimateTween , 100)
};
function swipeDownFn ( index ){
	if(Animate_lastIndex == 0) return;
	if( index && index == Animate_Index) return;
	if(!Animate_Bstop) return;
	Animate_Bstop = false;
	
	
	var NowStep = $('.box-content .box-step').eq(Animate_lastIndex);
	var NextStep = $('.box-content .box-step').eq(index ? index : -- Animate_Index);
	
	if(index) Animate_Index = index;
	
	
	NowStep.cssHide(Animate_css.down.out , function (){
		Animate_Bstop = true;	
	})
	NextStep.cssShow(Animate_css.down.IN)
	Animate_lastIndex = Animate_Index;
	setTimeout( AnimateTween , 100)

	
};
		
  










$( function (){
	
	
	$$('.s7-3 , .s5-1 , .s9-2 , .s10-2 , .s12-2 , .s15-2 , .s17-2 , .s18-2').bind('tap' , function (){
			if($('.box-step:visible').find('.UP_ico').size() !== 0  && $('.box-step:visible').find('.UP_ico').is(':visible') && Animate_isSwipe)
					{
						swipeUpFn( 0 , true);	
					}
	})
	
	$$('.box-content').bind('swipeUp' , function (){
					
					
					if($('.box-step:visible').find('.UP_ico').size() !== 0  && $('.box-step:visible').find('.UP_ico').is(':visible') && Animate_isSwipe)
					{
						swipeUpFn( 0 , true);	
					}
								
					//if($('.zhuquan1').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					
					
	})
	
	
	
/*
	
	$$('.box-content').bind('swipeUp' , function (){
					
					//if($('.zhuquan1').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeUpFn();
					
	}).bind('swipeDown' , function (){
					//if($('.zhuquan2').find('.UP_ico').is(':hidden')) return;
					if(!Animate_isSwipe) return;
					swipeDownFn();
					
	});
	*/
	
			

	
	
	
	
	
	
	
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



function HTMLStart  (){
	
	//swipeUpFn(15)
	
};


LoadFn(LoadingImg , function (){
	$('#loading').fadeOut();
	HTMLStart ();

} , function ( p ){
	
	$('#loading p').html( p + '%')
});












$(function (){

	var Animate_Index = 0
	,	Animate_lastIndex = Animate_Index
	,	Animate_isSwipe = true
	,	Animate_css = Animate[8]
	,	Animate_Bstop = true
	,	TIME = .5
	,	timer = null
	;

	function swipeUpFn(index, isFade) {
		if( index && index == Animate_Index) return;
		if(!Animate_Bstop) return;
		Animate_Bstop = false;

		var NowStep = $('.wrap-content .box-step').eq(Animate_lastIndex);
		var NextStep = $('.wrap-content .box-step').eq(index ? index : ++ Animate_Index);

		if( !NextStep.size() ) {
			Animate_Index -- ;
			Animate_Bstop = true;
			return;	
		}

		if(index) Animate_Index = index;
		Animate_Bstop = true;	

		/*NowStep.fadeOut(300);
		setTimeout( function (){
			NextStep.fadeIn(500);	
		} , 100);*/

		NowStep.cssHide(Animate_css.down.IN , function (){
			Animate_Bstop = true;	
		});
		NextStep.cssShow(Animate_css.down.out);
		
		Animate_lastIndex = Animate_Index;
		setTimeout( sliderWeb.AnimateTween , 100);
	}

	function swipeDownFn(index) {
		if(Animate_lastIndex == 0) return;
		if( index && index == Animate_Index) return;
		if(!Animate_Bstop) return;
		Animate_Bstop = false;

		var NowStep = $('.wrap-content .box-step').eq(Animate_lastIndex);
		var NextStep = $('.wrap-content .box-step').eq(index ? index : -- Animate_Index);
		
		if(index) Animate_Index = index;
		
		NowStep.cssHide(Animate_css.down.out , function (){
			Animate_Bstop = true;	
		});
		NextStep.cssShow(Animate_css.down.IN);
		Animate_lastIndex = Animate_Index;
		setTimeout( sliderWeb.AnimateTween , 100);
	}

	//上
	function prev (opt) {
		if (opt.index && opt.index == Animate_Index) return;
		if (opt.index <= 0) return;
		if (!Animate_Bstop) return;
		Animate_Bstop = false;

		var now = opt.obj[Animate_lastIndex]
		,	next = opt.obj[opt.index ? opt.index : ++Animate_Index]
		;

		if (!next) {
			Animate_Index--;
			Animate_Bstop = true;
			return ;
		}

		if (opt.index) {
			Animate_Index = opt.index;
		}

		now.style.display = 'none';
		Animate_Bstop = true;

		next.style.display = 'block';

		Animate_lastIndex = Animate_Index;

		setTimeout( sliderWeb.AnimateTween , 100);
	}

	//下
	function next (opt) {
		if (Animate_lastIndex == 0) return ;
		if (opt.index && opt.index == Animate_Index) return;
		if (!Animate_Bstop) return;
		Animate_Bstop = false;

		var now = opt.obj[Animate_lastIndex]
		,	next = opt.obj[opt.index ? opt.index : --Animate_Index]
		;

		if (opt.index) {
			Animate_Index = opt.index;
		}

		now.style.display = 'none';
		Animate_Bstop = true;

		next.style.display = 'block';

		Animate_lastIndex = Animate_Index;

		setTimeout( sliderWeb.AnimateTween , 100);
	}

	var sliderWeb = {
		init: function () {
			this.loadImg.call(this);

			this.AnimateTween();
		},
		loadImg: function () {
			var imgarr = this.getImg.call(this)
			,	iCount = 0
			;

			$.each(imgarr, function (i, ele) {
				var oImg = new Image();
				oImg.src = imgarr[i];
				oImg.onload = function () {
					iCount++;
					var num = parseInt((iCount / imgarr.length) * 100);
					$("#loading").find("p").html(num + '%');
					if (iCount == imgarr.length) {
						$('#loading').animate({
	                        opacity: 0
	                    }, 1000, function() {
	                        $(this).remove();
	                    });
					}
				};

				oImg.error = function() {
	                $('#loading').animate({
	                    opacity: 0
	                }, 1000, function() {
	                    $(this).remove();
	                });
	            };
			});
		},
		getImg: function () {
			var _this = this;
			_this.loadimgArr = [];

			$.each($("img"), function (index, ele) {
				if (!$(this).attr('src')) return ;

				_this.loadimgArr.push($(this).attr('src'));
			});

			var allTags = $('*') ;

			$.each(allTags, function (i, ele) {
				var imgs = $(allTags).eq(i).css('backgroundImage');
				if (imgs && imgs != 'none') {
					
					if ( /http:|https:/gi.test( imgs ) ) {
						imgs = imgs.replace('url(',"").replace(')',"");

						if ( imgs.indexOf('images/') != -1  ) { 
							imgs = 'images/' + imgs.split('images/')[1].replace('\")',"");	
						}
					}

					_this.loadimgArr.push(imgs);
				}
			});

			return _this.loadimgArr;
		},
		AnimateTween: function (){
			document.addEventListener('touchmove' , function (ev){
				ev.preventDefault();
				return false;
			} , false);			

			$('.box-step').eq(Animate_lastIndex).show();
			$('.s1_2').css('transform', 'scale(1.1)');

			$('.fudong').removeClass('fudong');
			$('.pingg1').removeClass('luo1');
			$('.pingg2').removeClass('luo2');
			$('.dax').removeClass('dax');

			switch (Animate_Index) {
				case 0:
					animatting[0](TIME);
					break;
				case 1:
					animatting[1](TIME);
					break;
				case 2:
					animatting[2](TIME);
					break;
			}
		}
	};

	sliderWeb.init();

	
	var iPageY = 0; 

	$("#main").on("touchstart", function (ev){
        var e = ev.originalEvent.changedTouches[0];
        iPageY = e.pageY;

        /*$(this).on('touchmove.drag', function(ev) {
            var b = ev.originalEvent.changedTouches[0];
            var c = (b.pageY - iPageY);
            if (b.pageY - iPageY < 0) {
                if(!Animate_isSwipe) return;
				swipeUpFn();
            } else if (b.pageY - iPageY > 0) {
                if(!Animate_isSwipe) return;
				swipeDownFn();
            }
        });*/

        $(this).on('touchend.drag', function(ev) {
            var b = ev.originalEvent.changedTouches[0];
            //console.log(b.pageY, iPageY);
            if (b.pageY - iPageY < 0) {
            	if(!Animate_isSwipe) return;
				swipeUpFn();
				/*prev({
					obj: $(".box-step")
				});*/
            } else if (b.pageY - iPageY > 0) {
            	if(!Animate_isSwipe) return;
				swipeDownFn();
				/*next({
					obj: $(".box-step")
				});*/
            }

            $(this).off('.drag');
        });

	});

});
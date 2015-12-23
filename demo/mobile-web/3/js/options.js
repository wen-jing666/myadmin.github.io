var animatting = {
	"0" : function (TIME) {
		$('.list-wp-1 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
			$('.list-wp-1 .s1_1').addClass('fudong');
		});
		$('.list-wp-1 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(2).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.1} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.3} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(4).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 1.5} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(5).from({ transform : 'translate(0 , -100px)' , opacity : 0 , delay : 1.7} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(6).from({ transform : 'translate(0 , -100px)' , opacity : 0 , delay : 1.8} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(7).from({ transform : 'translate(0 , -50px)' , opacity : 0 , delay : 2} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(8).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 2.2} ,TIME );
		$('.list-wp-1 .s1_2 img').eq(9).from({  opacity : 0 , delay : 2.2} ,TIME );
		$('.list-wp-1 .s1_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.4} ,TIME );
	},
	"1" : function (TIME) {
		$('.list-wp-2 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
			$('.list-wp-2 .s1_1').addClass('fudong')
		});
	
		$('.list-wp-2 .s1_2 img').eq(0).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : .7} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(2).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.1} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(3).from({ transform : 'translate(50px , 0)' , opacity : 0 , delay : 1.3} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(4).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.5} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.7} ,TIME );
		
		$('.list-wp-2 .s1_2 img').eq(6).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1.8} ,TIME );
		$('.list-wp-2 .s1_2 img').eq(7).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 2} ,TIME );
		
		
		$('.list-wp-2 .s2_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 2.4} ,TIME );
	},
	"2" : function (TIME) {
		$('.pingg1').hide();
		$('.pingg2').hide()
		$('.list-wp-3 .s1_1').from({ transform : 'scale(1.5)' , opacity : 0 , delay : .5} ,TIME , function (){
			$('.list-wp-3 .s1_1').addClass('fudong')
		});
		
		$('.list-wp-3 .s1_2 img').eq(0).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .7} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(1).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : .9} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(2).from({ transform : 'translate(-50px , 0)' , opacity : 0 , delay : 1} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(3).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.2} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(8).from({ transform : 'translate(0 , 50px)' ,  delay : 1.3} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(5).from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.4} ,TIME ,function(){
			$('.pingg1').show().addClass('luo1');
			$('.pingg2').show().addClass('luo2');	
		} );
		$('.list-wp-3 .s1_2 img').eq(6).from({ transform : 'translate(-50px, 0)' , opacity : 0 , delay : 1.5} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(4).from({ transform : 'translate(0, -50px)' , opacity : 0 , delay : 1.6} ,TIME );
		$('.list-wp-3 .s1_2 img').eq(7).from({ transform : 'translate(0, -50px)' , opacity : 0 , delay : 1.7} ,TIME );
		
		$('.list-wp-3 .s3_3').from({ transform : 'translate(0 , 50px)' , opacity : 0 , delay : 1.9} ,TIME );
	}
};
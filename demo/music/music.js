function $(obj) {
	return document.querySelectorAll(obj);
}	

var lis = $("#list li");

var size = 32;
var box = $("#box")[0];
var width, height;
var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
box.appendChild(canvas);

var Dots = [];
Dots.dotMode = "random";
var line;

var mv = new MusicVisualizer({
	size: size,
	visualizer: draw
});

for(var i = 0; i < lis.length; i++){
	lis[i].onclick = function (){
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		this.className = 'selected';
		//mv.load('music/' + this.title);
		mv.play('music/' + this.title);
	};
}

//随机值
function random(m,n) {
	return Math.round(Math.random()*(n - m) + m);
}

//获取圆的随机位置
function getDots() {
	Dots = [];
	for(var i = 0; i < size; i++){
		var x = random(0, width);
		var y = random(0, height);
		var color = "rgba("+random(0, 255)+","+random(0, 255)+","+random(0, 255)+", 0)";
		var ran = random(1, 4);
		Dots.push({
			x: x,
			y: y,
			dx: Dots.dotMode == "random" ? ran : 0,
			dx2: ran,
			color: color,
			cap: 0
		});
	}
}

function resize() {
	height = box.clientHeight;
	width = box.clientWidth;
	canvas.width = width;
	canvas.height = height;
	line = ctx.createLinearGradient(0, 0, 0, height);
	line.addColorStop(0, "red");
	line.addColorStop(0.5, "green");
	line.addColorStop(1, "blue");
	getDots();
}

resize();

window.onresize = resize;

//绘制图像
function draw(arr) {
	ctx.clearRect(0, 0, width, height);
	var w = width / size;
	var cw = w * 0.6;
	var capH = cw > 10 ? 10 : cw;
	ctx.fillStyle = line;
	for(var i = 0; i < size; i++){
		var o = Dots[i];
		if(draw.type == "column"){
			var h = arr[i] / 256 * height;
			ctx.fillRect(w * i, height - h, cw, h);
			ctx.fillRect(w * i, height - (o.cap + capH), cw, capH);
			o.cap--;
			if(o.cap < 0){
				o.cap = 0;
			}
			if(h > 0 && o.cap < h + 40){
				o.cap = h + 40 > height - capH ? height - capH : h + 40;
			}
		}else if(draw.type == "dot"){
			ctx.beginPath();
			var r = 10 + arr[i] / 256 * (height > width ? width : height) / 16;
			ctx.arc(o.x, o.y, r, 0, Math.PI*2, true);
			var g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
			g.addColorStop(0, "#fff");
			g.addColorStop(1, o.color);
			ctx.fillStyle = g;
			ctx.fill();
			o.x += o.dx;
			o.x = o.x > width ? 0 : o.x;
			//ctx.strokeStyle = "#fff";
			//ctx.stroke();
		}
	}
}

draw.type = "column";

//切换播放状态
var types = $("#type li");
for(var i = 0; i < types.length; i++){
	types[i].onclick = function (){
		for(var i = 0; i < types.length; i++){
			types[i].className = "";
		}
		this.className = "selected";
		draw.type = this.getAttribute("data-type");
	};
}

canvas.onclick = function (){
	if(draw.type == "dot"){
		for(var i = 0; i < size; i++){
			Dots.dotMode == "random" ? Dots[i].dx = 0 : Dots[i].dx = Dots[i].dx2;
		}
		Dots.dotMode = Dots.dotMode == "static" ? "random" : "static";
	}
};

$("#volume")[0].onchange = function (){
	mv.changeVolume(this.value/this.max);
};

$("#volume")[0].onchange();

/** https://passionate.herokuapp.com/ **/

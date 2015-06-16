function $(obj) {
	return document.querySelectorAll(obj);
}	

var lis = $("#list li");

for(var i = 0; i < lis.length; i++){
	lis[i].onclick = function (){
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		this.className = 'selected';
		load('music/' + this.title);
	};
}

var xhr = new XMLHttpRequest();
//创建一个AudioContext对象
var ac = new (window.AudioContext || window.webkitAudioContext)();
//控制音量
var gainNode = ac[ac.createGain ? "createGain" : "createGainNode"]();
gainNode.connect(ac.destination);

var analyser = ac.createAnalyser();
var size = 128;
analyser.fftSize = size * 2;
analyser.connect(gainNode);

var source = null;
var count = 0;

var box = $("#box")[0];
var width, height;
var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
box.appendChild(canvas);

var Dots = [];

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
		var color = "rgb("+random(0, 255)+","+random(0, 255)+","+random(0, 255)+")";
		Dots.push({
			x: x,
			y: y,
			color: color
		});
	}
}

var line;

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
	ctx.fillStyle = line;
	for(var i = 0; i < size; i++){
		if(draw.type == "column"){
			var h = arr[i] / 256 * height;
			ctx.fillRect(w * i, height - h, w * 0.6, h);
		}else if(draw.type == "dot"){
			ctx.beginPath();
			var o = Dots[i];
			var r = arr[i] / 256 * 50;
			ctx.arc(o.x, o.y, r, 0, Math.PI*2, true);
			var g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
			g.addColorStop(0, "#fff");
			g.addColorStop(1, o.color);
			ctx.fillStyle = g;
			ctx.fill();
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

function load(url) {
	var n = ++count;
	source && source[source.stop ? "stop" : "noteOff"]();
	xhr.abort();
	xhr.open("GET", url);
	xhr.responseType = "arraybuffer";
	xhr.onload = function (){
		if(n != count) return;
		ac.decodeAudioData(xhr.response, function (buffer){
			if(n != count) return;
			var bufferSource = ac.createBufferSource();
			bufferSource.buffer = buffer;
			bufferSource.connect(analyser);
			//bufferSource.connect(gainNode);
			//bufferSource.connect(ac.destination);
			//播放音频
			bufferSource[bufferSource.start ? "start" : "noteOn"](0);
			source = bufferSource;
		}, function (err){
			console.log(err);
		});
	};
	xhr.send();
}

function visualizer() {
	var arr = new Uint8Array(analyser.frequencyBinCount);
	requestAnimationFrame = window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame;

	function video(){
		analyser.getByteFrequencyData(arr);
		draw(arr);
		requestAnimationFrame(video);
	}						
	requestAnimationFrame(video);						
}

visualizer();

function changeVolume(num) {
	gainNode.gain.value = num * num;
}

$("#volume")[0].onchange = function (){
	changeVolume(this.value/this.max);
};

$("#volume")[0].onchange();

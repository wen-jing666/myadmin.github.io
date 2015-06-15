var can;
var ctx;
var w;
var h;
var girlPic = new Image();
var startPic = new Image();

var num = 60,
	start = [];

var lastTime,
	deltaTime;	

function init() {
	can = document.getElementById('canvas');
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	girlPic.src = 'src/girl.jpg';
	startPic.src = 'src/star.png';

	for(var i = 0; i < num; i++){
		var obj = new StartObj();
		start.push(obj);
		start[i].init();
	}

	lastTime = Date.now();

	gameloop();
}

window.onload = init;

function gameloop() {
	window.requestAnimationFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	drawGirl();
	drawStart();
}

function drawBackground() {
	ctx.fillStyle = '#393550';
	ctx.fillRect(0, 0, w, h)
}

function drawGirl() {
	ctx.drawImage(girlPic, 100, 150, 600, 300);
}

/************************/

var StartObj = function (){
	this.x;
	this.y;
	this.picNo;
	this.timer;
	this.xSpd;
	this.ySpd;
	this.range;
};

StartObj.prototype.init = function (){
	this.x = Math.floor(Math.random() * 600 + 100);
	this.y = Math.floor(Math.random() * 300 + 150);
	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;

	this.xSpd = Math.random() * 3 - 1.5;
	this.ySpd = Math.random() * 3 - 1.5;

	this.range = 5;
};

StartObj.prototype.update = function (){
	this.x += this.xSpd * deltaTime * 0.004;
	this.y += this.ySpd * deltaTime * 0.004;

	if(this.x < 100 + this.range || this.x > 700 - this.range){
		this.init();
		return;
	}

	if(this.y < 150 + this.range || this.y > 450 - this.range){
		this.init();
		return;
	}

	this.timer += deltaTime;

	if(this.timer > 50){
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
};

StartObj.prototype.draw = function (){
	ctx.drawImage(startPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
};

function drawStart() {
	for(var i = 0; i < num; i++){
		start[i].update();
		start[i].draw();
	}
} 
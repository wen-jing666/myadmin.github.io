var tdn = {
	extend: function(json1,json2){
		for(var attr in json2){
			if(json2.hasOwnProperty(attr)){
				json1[attr] = json2[attr];
			}
		}
		return json1;
	},
	hasClass: function(obj,clsName){
		var res = new RegExp("(^|\\s)"+clsName+"(\\s|$)");
		if(!obj.className)return !1;
		return res.test(obj.className);
	},
	addClass: function(obj,clsName){
		if(!tdn.hasClass(obj,clsName)){
			obj.className += (obj.className?" ":"")+clsName;
		}
	},
	removeClass: function(obj,clsName){
		if(tdn.hasClass(obj,clsName)){
			var arr = obj.className.split(" ");
			for(var i=0;i<arr.length;i++){
				if(arr[i]==clsName){
					arr.splice(i,1);
					i--;
				}
			}
			obj.className = arr.join(" ");
		}
	},
	getByClass: function(clsName,oParent){
		if(document.querySelectorAll){
			return (oParent||document).querySelectorAll("."+clsName);
		}
		var allTag = (oParent||document).getElementsByTagName('*'),arr =[],len = allTag.length,i;
		for(i=0;i<len;i++){
			if( tdn.hasClass(allTag[i],clsName) ){
				arr.push(allTag[i]);
			}
		}
		return arr;
	},
	bind: function(obj,evType,fn){
		if(document.addEventListener){
			obj.addEventListener(evType,fn,false);
		}else{
			obj.attachEvent('on'+evType,fn);
		}
	},
	nextNode: function(obj){
		if(!obj||!obj.nextSibling)return null;
		return obj.nextSibling.nodeType===1?obj.nextSibling:tdn.nextNode(obj.nextSibling);
	},
	prevNode: function(obj){
		if(!obj||!obj.previousSibling)return null;
		return obj.previousSibling.nodeType===1?obj.previousSibling:tdn.prevNode(obj.previousSibling);
	},
	getPos: function(obj){
		console.log(obj)
		if(!obj||obj.parentNode===null || obj.style.display =="none") return !1;
		var info = null;
		if(obj.getBoundingClientRect){
			info = obj.getBoundingClientRect();
			return {
				x: info.left +Math.max( document.documentElement.scrollLeft,document.body.scrollLeft )- document.body.clientLeft,
				y: info.top +Math.max( document.documentElement.scrollTop,document.body.scrollTop )- document.body.clientTop
			}
		}
	},
	range: function(s,b,val){
		if(val<=s){
			return s
		}
		if(val>=big){
			return b;
		}
		return val;
	},
	numberDate: function(dateString){
		var json = {};
		json.y = parseInt( dateString.substring(0,dateString.indexOf("-")) );
		json.m = parseInt( dateString.substring(dateString.indexOf("-")+1,dateString.lastIndexOf("-")) );
		json.d = parseInt( dateString.substring(dateString.lastIndexOf("-")+1) );
		return json;
	}
};
;(function(window,undefined){
	function $(id){
		return document.getElementById(id);
	}
	var tdnCalendar = function(opts){
		return new tdnCalendar.fn.init(opts);
	}
	tdnCalendar.fn = tdnCalendar.prototype = {
		constructor: tdnCalendar,
		init: function(opts){
			this.setting(opts);
			this.create();
			this.setBtn(this.opt.showBtn);
			this.addEvent();
		},
		setting: function(opts){
			this.opt = {
				count: 1,//日历个数
				nowYear: new Date().getFullYear(),//当前显示年份
				nowMonth: new Date().getMonth()+1,//当前显示月份
				special: false,//是否显示特殊日期
				showBtn: true,//是否显示功能按钮
				input: false,//是否在输入框内点击显示
				formatSign: "-",//日期格式化的格式  -表示格式化日期xxxx-xx-xx,/表示为xxxx/xx/xx
				insertPlace: null,//日期插入位置
				firstDayOfWeek:0,//一周的第一天 0代表星期日 1代表星期一
				addEvent: null,//添加处理每天事件的函数
				//callBack: null,//创建完成之后的执行的函数（回调）
				minYear: 1900,//最小显示年份
				maxYear: 2100,//最大显示年月
				minDate:null,//设置最小日期只能填写now (表示现在的日期)或者xxxx-xx-xx（表示特定的日期）格式的字符串
				maxDate:null,//设置最大日期
				jsonData:null//是否传输数据
			};
			tdn.extend(this.opt,opts);
			console.log(this.opt)
			this.prevBtn = document.createElement("button");
			this.nextBtn = document.createElement("button");
			this.count = 1;//日历个数
			this.calendarBox = [];//存放日历的盒子
			this.contain = document.createElement("div");
		},
		drawing: function(iYear,iMonth){
			var oWarp = document.createElement("div"),
				oWeeks = document.createElement("ul"),
				oDays = document.createElement("ul"),
				//创建文档碎片
				oFragment = document.createDocumentFragment(),
				all = 42,//日历显示42个方格
				//计算当月第一天是星期几
				firstDay = new Date(iYear,iMonth-1,1).getDay(),
				//避免一周第一天为周一而该月第一天为周日的情况下因为-this.opt.firstDayOfWeek，firstDay为0,会产生日期错位
				firstDay = (this.opt.firstDayOfWeek&&firstDay==0)?7:firstDay,
				firstDay = firstDay-this.opt.firstDayOfWeek,//分配一周第一天是周日的话不用减是周一的话减一;
				//计算当月有多少天
				lastDay = new Date(iYear,iMonth,0).getDate(),
				//计算上一个月有多少天
				prevMonthDay = new Date(iYear,iMonth-1,0).getDate(),
				//下个月总共能够显示的日期天数
				nextMonthDay = all-firstDay-lastDay,
				dayLi,dayWeek,arr1 =[],arrDate =[],i,j,dateTag,holidayTag,detailTag,tempStr,ts={};
				
			//利用数组记录信息
			//上个月
			for(i=1;i<=firstDay;i++){
				arr1.push(-1);//-1表示上个月
				arrDate.push( prevMonthDay-firstDay+i );//每个-1所在的索引对应的arrDate的地方就是上月日期
			}
			//当前月
			for(i=1;i<=lastDay;i++){
				arr1.push(0);//0表示当前月
				arrDate.push( i );//每个0所在的索引对应的arrDate的地方就是当月日期
			}
			//下一月
			for(i=1;i<=nextMonthDay;i++){
				arr1.push(1);//1表示下个月
				arrDate.push(i);//每个1所在的索引对应的arrDate的地方就是下月日期
			}
			//console.log(arr1,arrDate,arr1.length,arrDate.length)
			for(i=0;i<all;i++){
				dayLi = document.createElement("li");
				dateTag = document.createElement("h3");
				dateTag.className = "tdn-date";
				dayLi.appendChild(dateTag);
				if(arr1[i]==-1){//上个月
					dayLi.setAttribute( "date",this.formatDate(iYear,iMonth-1,arrDate[i]) ) ;
					tempStr = this.addZero(iMonth-1)+this.addZero(arrDate[i]);
					dayLi.className = "tdn-day-out";
					dateTag.appendChild(document.createTextNode(arrDate[i]));
				}else if(arr1[i]==1){//下个月
					dayLi.setAttribute( "date",this.formatDate(iYear,iMonth+1,arrDate[i]) ) ;
					tempStr = this.addZero(iMonth+1)+this.addZero(arrDate[i]);
					dayLi.className = "tdn-day-out";
					dateTag.appendChild(document.createTextNode(arrDate[i]));
				}else{//当前月
					dayLi.setAttribute( "date",this.formatDate(iYear,iMonth,arrDate[i]) ) ;
					dayLi.className = "tdn-day";
					//分隔日历区间
					//小
					if(this.opt.minDate&&this.opt.minDate=="now"){
						this.opt.minDate = this.formatDate(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate());
					}
					if(this.opt.minDate&&tdnCalendar.checkDate(this.opt.minDate)){
						ts = tdn.numberDate(this.opt.minDate);
						//console.log(tsy,tsm,tsd);
						(iYear<ts.y)&&(dayLi.className = "tdn-day-out");
						(ts.y==iYear)&&(iMonth<ts.m)&&(dayLi.className = "tdn-day-out");
						(ts.y==iYear)&&(ts.m==iMonth)&&(arrDate[i]<ts.d)&&(dayLi.className = "tdn-day-out");/**/
					}
					//大
					if(this.opt.maxDate&&this.opt.maxDate=="now"){
						var oDate = new Date();
						this.opt.maxDate = this.formatDate(oDate.getFullYear(),oDate.getMonth()+1,oDate.getDate());
					}
					if(this.opt.maxDate&&tdnCalendar.checkDate(this.opt.maxDate)){
						ts = tdn.numberDate(this.opt.maxDate);
						(iYear>ts.y)&&(dayLi.className = "tdn-day-out");
						(iYear==ts.y)&&(iMonth>ts.m)&&(dayLi.className = "tdn-day-out");
						(iYear==ts.y)&&(iMonth==ts.m)&&(arrDate[i]>ts.d)&&(dayLi.className = "tdn-day-out");
					}
					//创建特殊日期
					tempStr = this.addZero(iMonth)+this.addZero(arrDate[i]);
					if(new Date().getFullYear()==iYear&&(new Date().getMonth()+1)==iMonth&&new Date().getDate()==arrDate[i]){
						tdn.addClass(dayLi,"tdn-today");
						dateTag.appendChild(document.createTextNode("今天"));
					}else if(this.checkHoliday(tempStr,this.Holiday())){
						tdn.addClass(dateTag,"tdn-holiday");
						dateTag.appendChild( document.createTextNode( this.checkHoliday( tempStr,this.Holiday() ) ) );
					}else{
						dateTag.appendChild(document.createTextNode(arrDate[i]));
					}
					//设置json数据
					tempStr = iYear+"-"+this.addZero(iMonth)+"-"+this.addZero(arrDate[i]);
					if(this.opt.jsonData&&this.opt.jsonData[tempStr]){
						detailTag = document.createElement("span");
						detailTag.className = "tdn-detail"
						detailTag.innerHTML = this.opt.jsonData[tempStr];
						dayLi.appendChild(detailTag);
					}
					
				}//当前月end
				oFragment.appendChild(dayLi);
			}
			oDays.appendChild(oFragment);
			oDays.className = "tdn-days";
			
			oWarp.innerHTML = this.createHead(iYear,iMonth);
			this.oYear = tdn.getByClass("tdn-year",oWarp)[0];
			this.oMonth = tdn.getByClass("tdn-month",oWarp)[0];
	
			oWeeks.className = 'tdn-weeks';
			oWeeks.innerHTML += this.createWeek(this.opt.firstDayOfWeek);
			oWarp.appendChild(oWeeks);
			oWarp.appendChild(oDays);
			oWarp.className = 'tdn-cal-main';
			this.calendarBox.push(oWarp);
			return oWarp;
		},
		createHead: function(iYear,iMonth){
			var html = '<h2 class="tdn-cal-title">';
				html +='<em class="tdn-year">'+iYear+'</em>';
				html +='<select name="year"  class="tdn-select"></select>';
				html +='<em class="tdn-font">年</em>';
				html+='<em class="tdn-month">'+iMonth+'</em>';
				html +='<select name="month"  class="tdn-select"></select>';
				html+='<em class="tdn-font">月</em>';
				html+='</h2>';
			return html;
		},
		createWeek: function(boolean){
			var arrWeek =[], i, html='';
			if(!boolean){
				arrWeek = ["日","一","二","三","四","五","六"];
			}else{
				arrWeek = ["一","二","三","四","五","六","日"];
			}
			for(i=0;i<7;i++){
				html+='<li class="tdn-week">'+arrWeek[i]+'</li>';
			}
			return html;
		},
		create: function(){
			var self =this;
			var year = this.opt.nowYear,
			month = this.opt.nowMonth;
			this.contain.className ="tdn-calendar";
			
			//console.log(this.opt.nowYear,this.opt.nowMonth)
			while(this.calendarBox[0]){
				this.contain.removeChild( this.calendarBox.shift() );
			}
			//创建日历
			for(var i=0;i<this.opt.count;i++){
				year += ( month+( i ? 1 : 0 ) )>12 ? 1 : 0;
				month = ( month+( i ? 1 : 0 ) )%12 || 12;
				this.contain.appendChild( this.drawing(year,month)  );
			}
			if(!this.opt.input){
				(this.opt.insertPlace?this.opt.insertPlace:document.body).appendChild( this.contain );
			}/*else if(this.opt.input){
				this.contain.style.position = "absolute";
				var left =tdn.getPos(this.opt.input).x;
				//因为this.contain.offsetWidth不存在所以用固定值替代
				if(left+488>(document.documentElement||document.body).clientWidth){
					left = (document.documentElement||document.body).clientWidth-488;
				}
				this.contain.style.left = left+"px";
				this.contain.style.top = tdn.getPos(this.opt.input).y+this.opt.input.offsetHeight+"px";
				document.body.appendChild( self.contain );
				this.opt.input.onblur = function(){
					self.contain.style.display = "none";
				}
				this.opt.input.onclick = function(){
					self.contain.style.display = "block";
				}
			}*/
		},
		Draw: function(date){
			this.opt.nowYear = date.getFullYear();
			this.opt.nowMonth = date.getMonth()+1;
			if(this.opt.nowYear<this.opt.minYear||this.opt.nowYear>this.opt.maxYear)return;
			this.create();
			//this.opt.callBack&&this.opt.callBack.call(this);
		},
		nextMonth:function(){
			if(this.opt.maxDate&&this.opt.maxDate=="now"){
				var oDate = new Date();
				this.opt.maxDate = this.formatDate(oDate.getFullYear(),oDate.getMonth()+1,oDate.getDate());
			}
			if(this.opt.maxDate){
				var ts = tdn.numberDate( this.opt.maxDate) ;
				console.log(ts.y,ts.m-1+this.opt.count,ts.d,this.opt.nowYear,this.opt.nowMonth-1+this.opt.count,1)
				//下月时间比限定最大日期时间大就不绘制日历了
				if(new Date(ts.y,ts.m+this.opt.count-2,ts.d).getTime()<new Date(this.opt.nowYear,this.opt.nowMonth+this.opt.count-1,1).getTime() )return;
			}
			this.Draw( new Date(this.opt.nowYear,this.opt.nowMonth,1) )
		},
		prevMonth: function(){
			if(this.opt.minDate&&this.opt.minDate=="now"){
				var oDate = new Date();
				this.opt.minDate = this.formatDate(oDate.getFullYear(),oDate.getMonth()+1,oDate.getDate());
			}
			if(this.opt.minDate){
				var ts = tdn.numberDate(this.opt.minDate);
				if(new Date(ts.y,ts.m-this.opt.count-1,ts.d).getTime()>new Date(this.opt.nowYear,this.opt.nowMonth-this.opt.count-1,1).getTime() )return;
			}
			this.Draw( new Date(this.opt.nowYear,this.opt.nowMonth-2,1) )
		},
		setBtn: function(boolean){
			var main = this.contain;
			if(boolean){
				this.prevBtn.className = "tdn-prev";
				this.prevBtn.innerHTML = "&lt;";
				this.nextBtn.className = "tdn-next";
				this.nextBtn.innerHTML = "&gt;";
				main.insertBefore(this.prevBtn,main.firstChild);
				main.insertBefore(this.nextBtn,main.firstChild);
			}
		},
		addEvent: function(){
			var self =this,main = this.contain;
			if(window.addEventListener){
				main.addEventListener("click",function(ev){
					ev = ev || window.event;
					self.clickEvent.call(self,ev);
				},false)
			}else{
				main.attachEvent("onclick",function(ev){
					ev = ev || window.event;
					self.clickEvent.call(self,ev);
				})
			}
		},
		clickEvent: function(ev){
			var self =this;
			
			var obj =  ev.srcElement || ev.target;

			if(tdn.hasClass(obj,"tdn-prev")){
				this.prevMonth();
			}
			if(tdn.hasClass(obj,"tdn-next")){
				this.nextMonth()
			}
			if(tdn.hasClass(obj,"tdn-year")){
				this.choiceYear( obj );
			}
			if(tdn.hasClass(obj,"tdn-month")){
				this.choiceMonth(obj);
			}
			if(tdn.hasClass(obj,"tdn-day")){
				this.dayEvent(obj);
				if(this.opt.addEvent){
					this.opt.addEvent.call(this,obj.getAttribute("date"));
				}
			}
			if( tdn.hasClass(obj.parentNode,"tdn-day") ){
				this.dayEvent(obj.parentNode);
				if(this.opt.addEvent){
					this.opt.addEvent.call(this,obj.parentNode.getAttribute("date"));
				}
			}
		},
		dayEvent: function(obj){
			if(this.opt.input){
				this.opt.input.value=this.formatDate(this.opt.nowYear,this.opt.nowMonth,4)
			}
			if(!obj.getAttribute("date"))return;
			alert(obj.getAttribute("date"))
			//alert(this.date)
			//alert(this.formatDate(this.opt.nowYear,this.opt.nowMonth,4))
		},
		formatDate: function(year,month,date){
			var sign = this.opt.formatSign;
			if( sign ){
				return  year+sign+this.addZero(month)+sign+this.addZero(date);
			}
		},
		choiceYear: function( o ){
			var self = this,
				obj = tdn.nextNode( o ),
			      html ="",min,max;
			o.style.display = "none";
			obj.style.display = "inline";
			if(obj.innerHTML.length==0){
				min = this.opt.minDate?tdn.numberDate(this.opt.minDate).y:this.opt.minYear;
				max = this.opt.maxDate?tdn.numberDate(this.opt.maxDate).y:this.opt.maxYear;
				for(var i=min;i<=max;i++){
					html +='<option>'+i+'</option>';
				}
				obj.innerHTML=html;
			}
			obj.value=this.opt.nowYear;
			obj.onchange = function(){
				self.opt.nowYear=obj.value;
				var oDate = new Date();
				oDate.setYear(obj.value);
				oDate.setMonth(self.opt.nowMonth-1);
				self.Draw(oDate);
				obj.style.display = "none";
				o.style.display = "inline-block";
			}
			obj.blur = function(){
				obj.style.display = "none";
				o.style.display = "inline-block";
			}
		},
		choiceMonth: function( o ){
			var self = this,
				arr = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
				obj = tdn.nextNode( o ),
			      html ="";
			o.style.display = "none";
			obj.style.display = "inline";
			if(obj.innerHTML.length==0){
				for(var i=0;i<12;i++){
					html +='<option value="'+(i)+'">'+arr[i]+'</option>';
				}
				obj.innerHTML=html;
			}
			obj.value=o.innerHTML-1;
			obj.onchange = function(){
				self.opt.nowMonth=obj.value;
				var oDate = new Date();
				oDate.setYear(self.opt.nowYear);
				oDate.setMonth(obj.value);
				self.Draw(oDate);
				obj.style.display = "none";
				o.style.display = "inline-block";
			}
		},
		addZero: function(num){
			if(num<10){
				return "0"+num;
			}else{
				return num+'';
			}
		},
		Holiday: function(){
			return [
				"0101*元旦",
				"0214 情人节",
				"0308 妇女节",
				"0312 植树节",
				"0315 消费者权益日",
				"0401 愚人节",
				"0407 世界卫生日",
				"0501*劳动节",
				"0504 青年节",
				"0512 护士节",
				"0515 家庭日",
				"0518 博物馆日",
				"0531 世界无烟日", 
				"0601 儿童节",
				"0605 世界环境保护日",
				"0606 全国爱眼日",
				"0626 禁毒日",
				"0707 抗日战争纪念日",
				"0801 建军节",
				"0910 教师节", 
				"0918 九·一八",
				"1001*国庆节",
				"1224 平安夜",
				"1225 圣诞节"
			]
		},
		checkHoliday: function(str1,arr){
			var i,len = arr.length,onOff;
			if(!this.opt.special)return !1;
			for(i=0;i<len;i++){
				if(arr[i].substring(0,4)==str1){
					onOff = arr[i].substring(5);
					break;
				}
			}
			return onOff;
		}
	}
	tdnCalendar.checkDate = function(date){
		var res = new RegExp("^[12]\\d{3}-([0][1-9]|[1][012])-([012]\\d{1}|[3][01])");
		return res.test(date)
	}
	tdnCalendar.fn.init.prototype = tdnCalendar.fn ;
	window.tdnCalendar = tdnCalendar;
})(window);


(function(){})(window)
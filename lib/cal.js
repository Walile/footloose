$(document).ready(function(){
	var deck = new $.scrolldeck({
		buttons: '.nav-button',
	    slides: '.slide',
	    duration: 600,
	    easing: 'easeInOutExpo',
		offset: 0

	});

	$("#cal").bind("click", caculation);
});


function caculation(){
	// validation
	if ($.trim($("#nowWeight").val()) == ""){
		alert("目前的體重沒有輸入！");
		return false;
	}else{
		if(isNaN($.trim($("#nowWeight").val()))){
			alert("「目前的體重」請輸入數字！")
			return false;
		}else if(!$.trim($("#nowWeight").val() <= 0)){
			alert("「目前的體重」請輸入大於0的數字！")
			return false;
		}
	}

	if ($.trim($("#nowFatRate").val()) == ""){
		alert("「目前體脂率」沒有輸入！");
		return false;
	}else{
		if(isNaN($.trim($("#nowFatRate").val()))){
			alert("「目前體脂率」請輸入數字！")
			return false;
		}else if(!$.trim($("#nowFatRate").val() <= 0)){
			alert("「目前體脂率」請輸入大於0的數字！")
			return false;
		}
	}

	if ($.trim($("#decreaseFatRate").val()) == ""){
		alert("「減到剩多少體脂率」沒有輸入！");
		return false;
	}else{
		if(isNaN($.trim($("#decreaseFatRate").val()))){
			alert("「減到剩多少體脂率」請輸入數字！")
			return false;
		}else if(!$.trim($("#decreaseFatRate").val() <= 0)){
			alert("「減到剩多少體脂率」請輸入大於0的數字！")
			return false;
		}
	}

	if ($.trim($("#calories").val()) == ""){
		alert("「消耗幾大卡」沒有輸入！");
		return false;
	}else{
		if(isNaN($.trim($("#calories").val()))){
			alert("「消耗幾大卡」請輸入數字！")
			return false;
		}else if(!$.trim($("#calories").val() <= 0)){
			alert("「消耗幾大卡」請輸入大於0的數字！")
			return false;
		}
	}

	if($.trim($("#nowFatRate").val()) < $.trim($("#decreaseFatRate").val())){
		alert("這是增胖，不是減脂喔！");
		return false;
	}


	// caculation

	var trueWeight = Math.ceil($("#nowWeight").val() * (100 - $("#nowFatRate").val()));
	var decreaseWeightReal = Math.ceil(trueWeight / (100 - $("#decreaseFatRate").val()));
	var loseFat = $("#nowWeight").val() - decreaseWeightReal;
	var totalCalories = loseFat * 7700;
	var calories = $("#calories").val();

	var days = Math.ceil(totalCalories / calories);
	var monthes = Math.ceil(days / 30);

	var msg = '總共需消耗' + totalCalories + '大卡才能達到目標體脂率' + "<br>";
	msg += '如果每天多消耗' + calories + '最快需要' + days + "天才能達到目標<br>";
	msg += '換算月份，最快也要' + monthes + '個月才能達成目標！';

	$("#result").html(msg);


}
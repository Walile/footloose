$(document).ready(function(){

$("#cal").bind("click", caculation);
});


function caculation(){
	var trueWeight = $("#nowWeight").val() * (100 - $("#nowFatRate").val());
	var decreaseWeightReal = trueWeight / (100 - $("#decreaseFatRate").val());
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
var Tamagotchi = {
	initialize: function(inputName) {
		this.name = inputName;
		this.foodLevel = 30;
		this.sleepLevel = 15;
		this.activityLevel = 30;
	},
	timePasses: function() {
		this.foodLevel -=8;
		this.sleepLevel -= 5;
		this.activityLevel -= 7;
	},
	isAlive: function() {
		if(this.foodLevel && this.sleepLevel && this.activityLevel >= 1){
			return true;
		}else{
			return false;
		}
	}
}

$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var tamoName = $("input#name").val();
		var newTamo = Object.create(Tamagotchi);
		newTamo.initialize(tamoName);
		var counter=0;
		$(document).keydown(function(e){ //keydown function
		var keyCode = e.keyCode || e.which;
			if(e.keyCode == 37) {
				newTamo.foodLevel +=10
				counter+=1
			}else if (e.keyCode == 38) {
				newTamo.activityLevel +=10
				counter+=1
			}else if (e.keyCode == 39) {
				newTamo.sleepLevel +=10
				counter+=1
			};
		});
		var interval = window.setInterval(function(){
			newTamo.timePasses();
			$(".sleepStatus").text(newTamo.sleepLevel);
			$(".foodStatus").text(newTamo.foodLevel);
			$(".activityStatus").text(newTamo.activityLevel);
			if(newTamo.foodLevel <= 0 || newTamo.sleepLevel <=0 || newTamo.activityLevel <=0){
			$('#baby-pet').replaceWith("<img id='baby-pet' src='http://i.somethingawful.com/u/salmonseason/tama/tamdie.gif'>")
			$('#scores').addClass('game_over').text("GAME OVER");
			$(document).off('keydown');
			$('#final-score').text("<p>"+counter+'</p>')
			}else if(newTamo.foodLevel < 15){
			$('#baby-pet').replaceWith("<img id='baby-pet' src='http://individual.utoronto.ca/elaine/tameat.gif'>")
			}else if(newTamo.sleepLevel < 15){
			$('#baby-pet').replaceWith("<img id='baby-pet' src='http://28.media.tumblr.com/tumblr_ljm5n7VNwt1qazdhko1_500.gif'>")	
			}else if(newTamo.activityLevel <15){
			$('#baby-pet').replaceWith("<img id='baby-pet' src='http://img2.wikia.nocookie.net/__cb20140119203109/tamagotchi/images/f/f2/6g1tam.gif'>")	
			}else{
			$('#baby-pet').replaceWith("<img id='baby-pet' src='http://individual.utoronto.ca/elaine/tamsnak.gif'>")
			}
		}, 1000);
		$('form').remove();
		$('#egg-container').remove();
		$('#wrapper').show();
		$('#gif-wrapper').append("<img id='baby-pet' src='http://individual.utoronto.ca/elaine/tamsnak.gif'>")
	});	
});
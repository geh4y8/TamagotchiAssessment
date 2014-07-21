var Tamagotchi = {
	initialize: function(inputName) {
		this.name = inputName;
		this.foodLevel = 10;
		this.sleepLevel = 10;
		this.activityLevel = 10;
	},
	timePasses: function() {
		this.foodLevel --;
		this.sleepLevel -= .5;
		this.activityLevel -= 2
	},
	isAlive: function() {
		if(this.foodLevel && this.sleepLevel && this.activityLevel >= 1){
			return true
		}else{
			return false
		}
	}
}

$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var tamoName = $("input#name").val();
		var newTamo = Object.create(Tamagotchi);
		newTamo.initialize(tamoName);
	

	var interval = window.setInterval(function(){
		newTamo.timePasses();
		if(!(newTamo.isAlive())){
			console.log("you killed it!");
		}else{
			console.log("still alive")
		}}, 1000)
	})
})
var Tamagotchi = {
	initialize: function(inputName) {
		this.name = inputName;
		this.foodLevel = 10;
		this.sleepLevel = 10;
		this.activityLevel = 10;
	},
	timePasses: function() {
		this.foodLevel --;
	},
	isAlive: function() {
		if(this.foodLevel >= 1){
			return true
		}else{
			return false
		}
	}
}
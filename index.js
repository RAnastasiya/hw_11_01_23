function Cattle(name, maxVolume, minVolume) {
    this.name = name;
    this.maxVolume = maxVolume;
    this.minVolume = minVolume;
    this.currentVolume = 0;
    this.isOn = false;
    
    this.addWater = function(value){
        if (value < 0) return false
        this.currentVolume += value;
        if (this.currentVolume >= this.maxVolume) {
            return (this.currentVolume = this.maxVolume)
        }
        return this.currentVolume;
    };
   
    this.makeTea = function(value){
        if (value < 0) return false
        this.currentVolume -= value;
        if(this.currentVolume <= this.minVolume){
            return this.currentSpeed = this.minVolume;
        }
        return this.currentVolume;
    };
    this.turnOn = function(){
        if (this.currentVolume > 0 && this.isOn === false) {
            return (this.isOn = true)
        }
        return (this.isOn = false)
    }
}

const cattle = new Cattle("philips", 2000, 0);

console.log(cattle.addWater(350));
console.log(cattle.makeTea(500));
console.log(cattle.turnOn());
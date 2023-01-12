/*
Створити функцію конструктор для Cattle(brand, maxVolume, minVolume)
Властивості:
brand
maxVolume
minVolume
currentVolume = 0
isOn = false
Методи:
addWater(value) //налий води
makeTea(value)  //відлий воду
turnOn()  //кип'яти
 */
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
        if (value < 0 || value > this.currentVolume) {
            return false
        }
        this.currentVolume -= value;
        if(this.currentVolume <= this.minVolume){
            return this.currentVolume = this.minVolume;
        }
        return this.currentVolume;
    };
    this.turnOn = function(){
        if (this.isOn === false && 
            this.currentVolume >= this.minVolume) {
            return (this.isOn = true)
        }
        return (this.isOn = false)
    }
}

const cattle = new Cattle("cattle", 2000, 0);
console.log(cattle.addWater(350));
console.log(cattle.makeTea(500));
console.log(cattle.turnOn());
console.log(cattle);

const cattle2 = new Cattle("cattle2", 2000, 0);
console.log(cattle2.addWater(3500));
console.log(cattle2.makeTea(500));
console.log(cattle2.turnOn());
console.log(cattle2);

const cattle3= new Cattle("cattle3", 2000, 100);
console.log(cattle3.addWater(0));
console.log(cattle3.makeTea(500));
console.log(cattle3.turnOn());
console.log(cattle3.turnOn());
console.log(cattle3);
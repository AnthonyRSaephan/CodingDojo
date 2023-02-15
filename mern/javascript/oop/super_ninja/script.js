class Ninja{
    constructor(name){
        this.name = name
        this.health = 200
        this.speed = 10
        this.strength = 10
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log("name:",this.name,"\nStrength:",this.strength,"\nSpeed:", this.speed, "\nHealth:",this.health)
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        super.drinkSake()
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
console.log(superSensei.something)
console.log(superSensei.wisdom)
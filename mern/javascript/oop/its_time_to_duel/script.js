class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target){
        if(target instanceof Unit){
            target.res -= this.power
        }else{
            throw new Error("Target must be a unit!")
        }
    }

    displayStats(){
        console.log(`Name: ${this.name}, Power: ${this.power}, Resilience: ${this.res}`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    playCardOn(target){
        if(target instanceof Unit){
            let stat = this.stat
            let magnitude = this.magnitude
            target[stat] += magnitude
        }else{
            throw new Error("Target must be a unit!")
        }
        
    }
}




//! TURN 1
console.log("============== TURN 1 ===================")
red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4)
red_belt_ninja.displayStats()
hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3)
hard_algorithm.playCardOn(red_belt_ninja)
red_belt_ninja.displayStats()

//! TURN 2
console.log("============== TURN 2 ===================")
black_belt_ninja = new Unit("Black Belt Ninja", 4, 5 ,4)
black_belt_ninja.displayStats()
unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
unhandled_promise_rejection.playCardOn(black_belt_ninja)
black_belt_ninja.displayStats()

//! TURN 3
console.log("============== TURN 3 ===================")
pair_programming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
pair_programming.playCardOn(red_belt_ninja)
red_belt_ninja.displayStats()
red_belt_ninja.attack(black_belt_ninja)
black_belt_ninja.displayStats()
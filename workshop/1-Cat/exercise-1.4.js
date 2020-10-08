// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
        this.species = "cat";
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    sleep = (hours)=>{
        this.tiredness -= 5*hours
        this.happiness += hours/2
    }
    eat = (kibbles)=>{
        this.hunger -= kibbles/5
        this.happiness += kibbles 
    }
    play = (min) => {
        this.loneliness -= 3*min
        this.happiness += 3*min
    }
    wait = (minutes) => {
        this.tiredness += minutes/2;
        this.hunger += minutes;
        this.loneliness += 2*minutes;
        this.happiness -= minutes
    }
}

let boots = new Cat("Boots", "Siamese");
boots.wait(20)
boots.eat(10);
boots.sleep(4);
boots.play(12);
console.log(boots)
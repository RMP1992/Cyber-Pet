class Animal {
    constructor(name){
    this.name = name;
    this.eat = 100;
    this.drink = 100;
    this.mood = 50;
    }
    name(){
        return this.name;
    }
    eat(){
        return this.eat;
    }
    drink(){
        return this.drink;
    }

}
class Digipet extends Animal {
    constructor(name, play){
        super(name, play)
        this.play = play;
        
    }
   
    playtime(){
        if(super.mood >= 50){
            console.log(`${this.name} is happy`)
        }else if(super.mood < 40){
            console.log(`${this.name} is bored.`)
        }
    }
    hunger(){
        if(this.eat == 0){
            console.log(`${this.name} has died of starvation.`)
        }else if(this.eat < 30){
            console.log(`${this.name} is very hungry.`)
        }else if(this.eat == 70){
            console.log(`${this.name} is getting hungry.`)
        }else if (this.eat == 100){
            console.log(`${this.name} is full.`)
        }
    }
    thirst(){
        if(this.drink == 0){
            console.log(`${this.name} has died of thirst.`)
        }else if(this.drink < 30){
            console.log(`${this.name} is very thirsty.`)
        }else if(this.drink < 70){
            console.log(`${this.name} is getting thirsty.`)
        }else if(this.drink == 100){
            console.log(`${this.name} is feeling nice and hydrated.`)
        }
    }
    fun(){
        if(this.play == true);
        this.mood += 10
        this.eat -= 20
        this.drink -= 10
    }
}
const Fox = new Digipet("Sly", true);
Fox.playtime();
Fox.hunger();
Fox.thirst();
Fox.fun();
console.log(Fox);
Fox.playtime();
Fox.hunger();
Fox.thirst();
Fox.fun();
console.log(Fox);
class Ninja {

    constructor( name, health, speed, strength ) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log( this.name );
    }

    showStats() {
        console.log( `Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength }` );
    }

    drinkSake() {
        this.health += 10;
    }

}



const ninja1 = new Ninja( "Hyabusa", 100 );
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();




class Sensei extends Ninja {
    constructor( name, health, speed, strength, wisdom ) {
        super( name, 200, 10, 10 );
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log( 'What one programmer can do in one month, two programmers can do in in two months.' );
    }
}

const superSensei = new Sensei( "Master Splinter" );
superSensei.speakWisdom();
superSensei.showStats();


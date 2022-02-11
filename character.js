class Character {
	constructor({name : undefined, health : 100} = {name : undefined, health : 100}) {
		this.health = health;
		this.name = name;
	}
	constructor({a = 'default a value', b = 'default b value', c = 'default c value'} = {a:'default option a', b:'default option b', c:'default option c'}) {
		this.a = a;
		this.b = b;
		this.c = c;
	  }
}

class Pokemon {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.identifier;
    this.type = obj.type;
    this.attack = obj.attack;
    this.evolution = obj.evolution;
  }
}

export default Pokemon;

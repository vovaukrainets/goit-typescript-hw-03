class Key {
  private signature: number;
}

getSignature(): number {
    return signature;
};

class Person{
    private key: Key; 
}

abstract class House{
    door: true;
    key: Key;
    tenants: Person[];
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

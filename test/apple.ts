import { Fruit } from './fruit';

class Apple extends Fruit {
    constructor() {
        super('apple');
    }
}

const apple = new Apple();
console.info(apple.fruitName);

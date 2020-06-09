export class Fruit {
    private ripe: boolean;

    constructor(private name: string) { }

    isRipe(): boolean {
        return this.ripe;
    }

    fruitName(): string {
        return this.name;
    }
}

const stringConcat = 'hello' + 'world';
const stringConcat2 = `${stringConcat} !!`;

interface ISample {
    name: string;
    id: number;
    status: boolean;
}

class Test {
    static test3: string;

    static getTest3(): string {
        return Test.test3;
    }

    test1: string;
    obj: any = { name: 'name', id: 1, ids: [1, 2, 3] };

    private test2: string;
    private list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    constructor() {
        const { name } = this.obj;
        this.test1 = `test1_${name}`;
    }

    getMult(): number[] {
        return this.list.map(d => {
            return d * 2;
        });
    }

    accessFunctions(): void {
        const idx = this.idxMult();
        console.warn(idx);
        const num = this.sampleFunction(3);
        console.error(num);
        console.info(this.test2);
    }

    private idxMult(): number[] {
        return this.list.map((d, idx) => {
            return d * idx;
        });
    }

    private sampleFunction(num: number): number {
        switch (num) {
            case 1:
                return num * 1;
            case 2:
                return num * 2;
            case 3:
                return num * 3;
            default:
                return num;
        }
    }
}

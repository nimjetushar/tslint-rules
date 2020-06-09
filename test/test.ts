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

    private idxMult(): number[] {
        return this.list.map((d, idx) => {
            return d * idx;
        });
    }
}

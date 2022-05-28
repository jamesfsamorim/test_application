import {Operator} from "../constants/operator.constant";

export abstract class Composite {
    protected parent: Composite | null;
    protected value: number | null;
    protected operator: Operator | null;

    public setParent(parent: Composite) {
        this.parent = parent;
    }

    public getParent(): Composite {
        return this.parent;
    }

    public remove(Composite: Composite): void {}

    public abstract operation(): number;

    public abstract toString(): string;
}
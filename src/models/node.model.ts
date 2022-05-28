import {Composite} from "./composite.model";
import {Operator} from "../constants/operator.constant";

export class Node extends Composite {
    protected children: Composite[] = [];

    constructor(operator?: Operator, value?: number, leftNode?: Composite, rightNode?: Composite) {
        super();
        if (!value && !operator) {
            throw new Error("Needs at least the value or operator")
        }

        this.value = value
        this.operator = operator
        this.children = [leftNode, rightNode]
        leftNode && leftNode.setParent(this)
        rightNode && rightNode.setParent(this)
    }

    private getOperationProcessed() {
        const [leftNode, rightNode] = this.children
        return {
            [Operator.PLUS]: leftNode.operation() + rightNode.operation(),
            [Operator.MINUS]: leftNode.operation() - rightNode.operation(),
            [Operator.TIMES]: leftNode.operation() * rightNode.operation(),
            [Operator.DIVIDED_BY]: leftNode.operation() / rightNode.operation()
        }
    }

    private getToStringProcessed() {
        const [leftNode, rightNode] = this.children
        return {
            [Operator.PLUS]: `(${leftNode.toString()} + ${rightNode.toString()})`,
            [Operator.MINUS]: `(${leftNode.toString()} - ${rightNode.toString()})`,
            [Operator.TIMES]: `(${leftNode.toString()} x ${rightNode.toString()})`,
            [Operator.DIVIDED_BY]: `(${leftNode.toString()} ÷ ${rightNode.toString()})`
        }
    }

    public remove(Node: Composite): void {
        const NodeIndex = this.children.indexOf(Node);
        this.children.splice(NodeIndex, 1);

        Node.setParent(null);
    }

    public operation(): number {
        if (!this.operator) {
            return this.value
        }
        const operation = this.getOperationProcessed()

        return operation[this.operator]
    }

    public toString(): string {
        if (!this.operator) {
            return this.value.toString()
        }
        const operation = this.getToStringProcessed()

        return operation[this.operator]
    }
}
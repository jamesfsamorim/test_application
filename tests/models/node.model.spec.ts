import {Node} from "../../src/models/node.model";
import {nodeOperationCases, nodeToStringCases} from "../helpers/node.cases.helper";
import {Operator} from "../../src/constants/operator.constant";

describe("Node", () => {
    it.each(nodeOperationCases)
    ('should be able return properly operation %s response',
        (caseName: string, operation: number, caseResult: number) => {
            expect(operation).toEqual(caseResult)
        });

    it.each(nodeToStringCases)
    ('should be able return properly to string %s response',
        (caseName: string, operation: string, caseResult: string) => {
            expect(operation).toEqual(caseResult)
        });

    it('should be able to throw an error when no passing value and operator ', function () {
        expect(() => new Node()).toThrowError("Needs at least the value or operator")
    });

    it('should be able to get Node parent', function () {
        const leafBranch = new Node(Operator.PLUS)
        const node = new Node(null, 5, leafBranch)

        expect(node).toEqual(leafBranch.getParent())
    });

    it('should be able to remove a Node', function () {
        const leafBranch = new Node(Operator.PLUS)
        const node = new Node(null, 5, leafBranch)
        node.remove(leafBranch)

        expect(leafBranch.getParent()).toBeNull()
    });
})
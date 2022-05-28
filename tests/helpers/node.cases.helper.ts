import {Node} from "../../src/models/node.model";
import {Operator} from "../../src/constants/operator.constant";

const simpleTreeCase = new Node(Operator.TIMES, 5,
    new Node(null, 1), new Node(null, 1))

const twoLayersTreeCase = new Node(Operator.TIMES, 5,
    new Node(Operator.MINUS, 2, new Node(null, 3), new Node(null, 3)),
    new Node(Operator.DIVIDED_BY, 3, new Node(null, 2), new Node(null, 2))
)

const applicationTreeCase = new Node("÷" as Operator, null,
    new Node("+" as Operator, null,
        new Node(null, 7, null, null),
        new Node("x" as Operator, null,
            new Node("-" as Operator, null,
                new Node(null, 3,
                    null, null),
                new Node(null, 2, null, null)),
            new Node(null, 5, null, null)
        )
    ),
    new Node(null, 6, null, null)
)

export const nodeOperationCases = [
    ["Simple Test", simpleTreeCase.operation(), 1],
    ["Two Layers Test", twoLayersTreeCase.operation(), 0],
    ["Application Test", applicationTreeCase.operation(), 2]
]

export const nodeToStringCases = [
    ["Simple Test", simpleTreeCase.toString(), "(1 x 1)"],
    ["Two Layers Test", twoLayersTreeCase.toString(), "((3 - 3) x (2 ÷ 2))"],
    ["Application Test", applicationTreeCase.toString(), "((7 + ((3 - 2) x 5)) ÷ 6)"]
]
import { ElementsDefinition} from 'cytoscape';

import {createElements} from './create-element';

const subnets: ElementsDefinition[] = new Array(5).fill(null).map((_, index) => createElements(index));

const subnetsEdges: ElementsDefinition['edges'] =[
    {
        data: { id: '01', source: 'a0', target: 'b1',
            cyedgebendeditingWeights: [1],
            cyedgebendeditingDistances: [175],
            cyedgecontroleditingWeights: [0.5],
            cyedgecontroleditingDistances: [50],
        }, style: {label: 'link-01',
        },
        classes: 'edgecontrolediting-hascontrolpoints edgebendediting-hasbendpoints',
    },
    {
        data: { id: '12', source: 'a2', target: 'c1',
            cyedgebendeditingWeights: [1],
            cyedgebendeditingDistances: [175],
            cyedgecontroleditingWeights: [0.5],
            cyedgecontroleditingDistances: [50],
        },
        classes: 'edgecontrolediting-hascontrolpoints edgebendediting-hasbendpoints',
    },
    {
        data: { id: '23', source: 'a3', target: 'c2',
            cyedgebendeditingWeights: [1],
            cyedgebendeditingDistances: [175],
            cyedgecontroleditingWeights: [0.5],
            cyedgecontroleditingDistances: [50] },
        classes: 'edgecontrolediting-hascontrolpoints edgebendediting-hasbendpoints',
    },
];

export const elements: ElementsDefinition = {
    // @ts-ignore
    nodes:  subnets.flatMap(subnet => subnet.nodes),
    // @ts-ignore
    edges: [...subnets.flatMap(subnet => subnet.edges), ...subnetsEdges],
};


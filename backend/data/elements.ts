import { ElementsDefinition} from 'cytoscape';

import {createElements} from './create-element';

const subnets: ElementsDefinition[] = new Array(5).fill(null).map((_, index) => createElements(index));

const subnetsEdges: ElementsDefinition['edges'] =[
    {
        data: { id: '01', source: 'a0', target: 'b1' }, style: {label: 'link-01',
        }},
    {
        data: { id: '12', source: 'a2', target: 'c1' },
    },
    {
        data: { id: '23', source: 'a3', target: 'c2' },
    },
];

export const elements: ElementsDefinition = {
    // @ts-ignore
    nodes:  subnets.flatMap(subnet => subnet.nodes),
    // @ts-ignore
    edges: [...subnets.flatMap(subnet => subnet.edges), ...subnetsEdges],
};


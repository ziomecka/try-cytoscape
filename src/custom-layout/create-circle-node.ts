import {graphlib} from 'dagre';

import { createSvgElement } from '../utils';

type ForEach<I = any> =  Array<I>['forEach']
type CreateNodeFn<I = any> = Parameters<ForEach<I>>[0]

export const createCircleNode = (dagreGraph: graphlib.Graph) => (container: SVGElement | HTMLElement): CreateNodeFn<string> => (node) => {
    const {x, y} = dagreGraph.node(node);

    const element = createSvgElement('circle', {cx: x, cy: y, r: 5, fill: 'red'});

    container.appendChild(element);

    return container;
};

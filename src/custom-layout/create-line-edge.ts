import {graphlib, Edge} from 'dagre';

import { createSvgElement } from '../utils';

type ForEach<I = any> =  Array<I>['forEach']
type CreateNodeFn<I = any> = Parameters<ForEach<I>>[0]

export const createLineEdge = (dagreGraph: graphlib.Graph) => (container: SVGElement | HTMLElement): CreateNodeFn<Edge> => (edge) => {
    const {points} = dagreGraph.edge(edge);

    const [start = {x: 0, y: 0}, end = {x: 0, y: 0}]  = points;

    const element = createSvgElement('line', {x1: start.x, y1: start.y, x2: end.x, y2: end.y, stroke: 'red', 'stroke-width': 1});

    container.appendChild(element);
};

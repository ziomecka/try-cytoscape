import {cyto} from '../cyto';
import { CytoscapeOptions } from 'cytoscape';
import {CustomLayout, CustomLayoutOptions } from './custom-layout';

import {elements} from '../../backend';
import { renderTitle } from '../utils';

const LAYOUT= 'custom';
const TITLE_SELECTOR = `#${LAYOUT} #title`;

const container = document.querySelector(`div#${LAYOUT} div`) as HTMLDivElement;

cyto('layout', 'custom', CustomLayout);

const options: CustomLayoutOptions = {
    container,
    elements: elements,
    style: [
        {
            selector: 'node',
            style: {
                'background-color': '#666',
                'label': 'data(id)',
            },
        },
        {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier',
            },
        },
    ],

    layout: {
        name: LAYOUT,
    },
    zoom: 1,
    zoomingEnabled: true,
};

export function draw() {
    renderTitle(TITLE_SELECTOR, LAYOUT);

    const cy = cyto(options as CytoscapeOptions);

    return cy;
}

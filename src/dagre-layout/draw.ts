import cyto from 'cytoscape';
// @ts-ignore
import dagre from 'cytoscape-dagre';

import {elements} from '../../backend';
import {nodeStyle, edgeStyle} from '../style';
import {renderTitle} from '../utils';

const LAYOUT= 'dagre';
const TITLE_SELECTOR = `#${LAYOUT} #title`;

const container = document.querySelector(`div#${LAYOUT}`) as HTMLDivElement;

cyto.use(dagre);

export function draw () {
    renderTitle(TITLE_SELECTOR,LAYOUT);

    const cy = cyto({
        container,
        elements: elements,
        style: [
            nodeStyle, edgeStyle, {selector: 'node#a2', style: {
                'background-image': 'https://live.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg,',
                'background-width': 'auto',
                'background-repeat': 'no-repeat',
                'background-fit': 'cover'} },
        ],
        layout:{
            name: LAYOUT,
        },
        zoom: 1,
        zoomingEnabled: true,
    });

    return cy;
}

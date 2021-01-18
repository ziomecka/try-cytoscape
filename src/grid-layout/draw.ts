import cyto from 'cytoscape';

import {elements} from '../../backend';
import {nodeStyle, edgeStyle} from '../style';
import {renderTitle, addDownloadButtonListener} from '../utils';

import {GridLayoutOptions} from 'cytoscape';

const LAYOUT= 'grid';
const TITLE_SELECTOR = `#${LAYOUT} #title`;
const BUTTON_SELECTOR = `#${LAYOUT} button#download`;

// @ts-ignore
export const layoutOptions: GridLayoutOptions = {
    name: LAYOUT,
};

const container = document.querySelector(`div#${LAYOUT}`) as HTMLDivElement;

export function draw () {
    renderTitle(TITLE_SELECTOR, LAYOUT);

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
        layout:layoutOptions,
    });

    addDownloadButtonListener({ button:  document.querySelector(BUTTON_SELECTOR) as HTMLButtonElement, cy});

    return cy;
}

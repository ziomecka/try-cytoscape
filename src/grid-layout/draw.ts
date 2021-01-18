import {cyto} from '../cyto';
import  {GridLayoutOptions} from 'cytoscape';

import {elements} from '../../backend';
import {renderTitle, addDownloadButtonListener} from '../utils';

const LAYOUT= 'grid';
const TITLE_SELECTOR = `#${LAYOUT} #title`;
const BUTTON_SELECTOR = `#${LAYOUT} button#download`;

// @ts-ignore
export const layoutOptions: GridLayoutOptions = {
    name: LAYOUT,
    avoidOverlap: true,
};

const container = document.querySelector(`div#${LAYOUT} div`) as HTMLDivElement;

export function draw () {
    renderTitle(TITLE_SELECTOR, LAYOUT);

    const cy = cyto({
        container,
        elements: elements,
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)',
                    'overlay-opacity': 0,
                },
            },
            {
                selector: 'edge',
                style: {
                    'width': 1,
                    'label': 'data(id)',
                    // @ts-ignore
                    'text-rotation': 'autorotate',
                },
            },
            {
                selector: ':selected',
                style: {
                },
            }, {selector: 'node#a2', style: {
                'background-image': 'https://live.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg,',
                'background-width': 'auto',
                'background-repeat': 'no-repeat',
                'background-fit': 'cover'} },
        ],
        layout: {
            ...layoutOptions,
        },
    });

    addDownloadButtonListener({ button:  document.querySelector(BUTTON_SELECTOR) as HTMLButtonElement, cy});

    // @ts-ignore
    // cy.edgeEditing({
    //     undoable: false,
    //     bendRemovalSensitivity: 16,
    //     enableMultipleAnchorRemovalOption: true,
    //     enabled: true,
    // });

    // @ts-ignore
    // cy.style().update();
    return cy;
}

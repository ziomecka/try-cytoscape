import cyto from 'cytoscape';

import {elements} from '../../backend';
import {nodeStyle, edgeStyle} from '../style';
import {layouts} from './consts';
import {changeLayout, ChangeLayoutOptions} from './change-layout';
import {renderTitle} from '../utils';

const LAYOUT = 'random';
const INITIAL_LAYOUT = 'grid';

const TITLE_SELECTOR = `#${LAYOUT} #title`;

const container = document.querySelector(`div#${LAYOUT}`) as HTMLDivElement;


export function draw () {
    renderTitle(TITLE_SELECTOR, INITIAL_LAYOUT);

    const cy = cyto({
        container,
        elements: elements,
        style: [
            nodeStyle, edgeStyle,
        ],
        layout:{ name: INITIAL_LAYOUT},
        zoom: 1,
        zoomingEnabled: true,
    });


    const timeoutFn: ChangeLayoutOptions['timeoutFn'] = (i, cl) => {
        const layout = cy.layout({name: layouts[i]});
        layout.run();

        renderTitle(TITLE_SELECTOR, layouts[i]);
        return cl();
    };

    changeLayout({
        timeoutFn,
        length: layouts.length -1,
        loopLayouts: true,
    });

    return cy;
}

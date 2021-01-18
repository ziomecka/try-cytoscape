import {Core, EventHandler} from 'cytoscape';

let edgeId = 0;

export function addEdgeOnTap(cy: Core ) {
    const handler: EventHandler  = (e) => {
        cy.add([{
            group: 'edges',
            data: {data: {id: `edge-${edgeId}`, source: 'a1', target: `node-${edgeId++}`}},
            renderedPosition: {
                x: e.renderedPosition.x,
                y: e.renderedPosition.y,
            },
        }]);
    };

    cy.on('tap', handler);

    return () => cy.removeListener('tap', handler);
}
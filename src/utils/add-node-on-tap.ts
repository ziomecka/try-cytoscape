import {Core, EventHandler} from 'cytoscape';

let nodeId = 0;

export function addNodeOnTap(cy: Core) {
    const handler: EventHandler  = (e) => {
        cy.add([{
            group: 'nodes',
            data: { data: {id: `node-${nodeId++}`}},
            renderedPosition: {
                x: e.renderedPosition.x,
                y: e.renderedPosition.y,
            },
        }]);
    };

    cy.on('tap', handler);

    return () => cy.removeListener('tap', handler);
}

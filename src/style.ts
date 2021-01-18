import { StylesheetStyle  } from 'cytoscape';

// obawy
// beda nachodzic te krawedzie przy duzych obrzkach
// canva daje mniejsze mozliwosci stylowanie
const canvas:StylesheetStyle = {
    selector: 'canvas',
    style: {
    // 'background-color': 'red',
    // 'label': 'data(id)'
    // 'label': 'data(id)',
    // "overlay-opacity": 0,
    },
};

const nodeStyle:StylesheetStyle = {
    selector: 'node, node:selected',
    style: {
    // 'background-color': '#666',
    // 'label': 'data(id)'
        'label': 'data(id)',
        'overlay-opacity': 0,
    },
};

const edgeStyle: StylesheetStyle ={
    selector: 'edge, edge:selected',
    style: {
        'width': 1,
        'background-color': 'red',
        'control-point-step-size': 1,
    },
};

const edgeLabelStyle: StylesheetStyle ={
    selector: 'edge:label',
    style: {
    // 'width': 1,
        color: 'black',
        'font-size': '5px',
        //@ts-ignore
        'text-rotation': 'autorotate',
    },
};

const nodeEdgeStyle: StylesheetStyle = {
    selector: 'node, edge',
    style: {
    // 'width': 3,
    // 'line-color': '#ccc',
    // 'target-arrow-color': '#ccc',
    // 'target-arrow-shape': 'triangle',
    // 'curve-style': 'bezier'
    },

};
const selected: StylesheetStyle = {
    selector: ':selected',
    style: {
    },

};

export {nodeEdgeStyle, nodeStyle, edgeStyle, edgeLabelStyle, canvas, selected};
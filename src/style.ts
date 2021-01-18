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
        'overlay-opacity': 0,
        // 'font-size': '10px',
        // 'line-color': '#ccc',
        // "source-label": `data(id)`,
        // "target-label": `data(target)`,
        'curve-style': 'taxi',
        // "curve-style": 'unbundled-bezier',
        // "overlay-opacity": 0.1
        // "taxi-turn-min-distance": "30px",
        // "overlay-opacity": 0.1
        // 'target-arrow-color': '#ccc',
        // 'target-arrow-shape': 'triangle',
        // 'curve-style': 'bezier'
        // "taxi-direction": "horizontal",
        // "taxi-turn": "75%",

        // 'font-size': '10px',
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
    // 'border-color': 'red'
    // 'font-size': '5px',
    // 'line-color': '#ccc',
    // "source-label": `data(id)`,
    // "target-label": `data(target)`,
    // "curve-style": "taxi",
    // "taxi-turn-min-distance": "30px",
    // "overlay-opacity": 0.1
    // 'target-arrow-color': '#ccc',
    // 'target-arrow-shape': 'triangle',
    // 'curve-style': 'bezier'
    // "taxi-direction": "horizontal",
    // "taxi-turn": "75%",
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

export {nodeEdgeStyle, nodeStyle, edgeStyle, edgeLabelStyle, canvas};
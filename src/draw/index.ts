import cyto from 'cytoscape'
import {grid} from './layout'

cyto({
  // @ts-ignore
  container: document.querySelector('div#root'),
  elements: [ // list of graph elements to start with
    {
      data: { id: 'a' }
    },
    {
      data: { id: 'b' }
    },
    {
      data: { id: 'c' }
    },
    {
      data: { id: 'ab', source: 'a', target: 'b' }
    },
    {
      data: { id: 'ac', source: 'a', target: 'c' }
    }
  ],
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],

  layout: grid,
  zoom: 1,
  // pan: { x: 0, y: 0 },

  // // interaction options:
  // minZoom: 1e-50,
  // maxZoom: 1e50,
  zoomingEnabled: true,
  // userZoomingEnabled: true,
  // panningEnabled: true,
  // userPanningEnabled: true,
  // boxSelectionEnabled: true,
  // selectionType: 'single',
  // touchTapThreshold: 8,
  // desktopTapThreshold: 4,
  // autolock: false,
  // autoungrabify: false,
  // autounselectify: false,

  // // rendering options:
  // headless: false,
  // styleEnabled: true,
  // hideEdgesOnViewport: false,
  // textureOnViewport: false,
  // motionBlur: false,
  // motionBlurOpacity: 0.2,
  // wheelSensitivity: 1,
  // pixelRatio: 'auto'
})
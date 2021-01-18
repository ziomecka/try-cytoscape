import {graphlib, layout} from 'dagre';
import {  CytoscapeOptions, Core, CollectionArgument, NodeCollection, EdgeCollection} from 'cytoscape';

import {elements} from '../../backend';
import { createHTMLElement, ElementNames } from '../utils';
import {createCircleNode} from './create-circle-node';
import { createLineEdge} from './create-line-edge';

export interface CustomLayoutOptions extends Omit<CytoscapeOptions, 'container'>  {
    cy?: Core;
    eles?: CollectionArgument;
  container?: HTMLElement| null,
  header?: string
}

const DEFAULT_HEADER = 'Custom layout';

export class CustomLayout {
    private state: {
        name: string;
        layout: any;
        nodes?: NodeCollection;
        edges?: EdgeCollection;
        ready: boolean;
        stop: boolean;
        // progress: any;
        // iterations: any;
        // startTime: any;
    }

    constructor(private readonly options: CustomLayoutOptions) {

        this.state = {
            name: 'custom',
            layout: this,
            // @ts-ignore
            nodes: this.options.eles.nodes(),
            // @ts-ignore
            edges: this.options.eles.edges(),
            ready: false,
            stop: false,
            // progress: 0,
            // iterations: 0,
            // startTime: 0
        } ;

        return this;
    }

    get container() {
        //@ts-ignore
        return this.options.cy.container();
    }

    // @ts-ignore
    makeBoundingBox() { return null;}

    setInitialPositionState(node: any, state: any) {
        let scratch = node.scratch( state.name );

        if( scratch == null ){
            scratch = {
                x: 100,
                y: 200,
            };

            console.log(node, state.name, scratch, 'here');
            node.scratch( state.name, scratch );
        }

    }
    get dagreGraph() {
        const dagreGraph = new graphlib.Graph();

        dagreGraph.setGraph({});
        dagreGraph.setDefaultEdgeLabel(function() { return {}; });

        elements.nodes.forEach((node) => {
            const {data: {id}} = node;
            dagreGraph.setNode(id as string, { label: id });
        });

        elements.edges.forEach((node) => {
            const {data: {target, source}} = node;
            dagreGraph.setEdge(source, target);

        });

        layout(dagreGraph);

        return dagreGraph;
    }

  getHeaderElement = (header = this.options.header || DEFAULT_HEADER, tagName: ElementNames = 'h3') => {
      return createHTMLElement(tagName,undefined, header);
  }

  createNodes = (container: SVGElement | HTMLElement) => {
      const { dagreGraph } = this;

      dagreGraph.nodes().forEach(createCircleNode(dagreGraph)(container));

      return container;
  }

  createLineEdge = (container: SVGElement | HTMLElement) => {
      const { dagreGraph } = this;

      dagreGraph.edges().forEach(createLineEdge(dagreGraph)(container));

      return container;
  }

  appendCanvas = () => {
      const canvas = document.createElement('canvas') as HTMLCanvasElement;

      canvas.id = 'custom-canvas';
      canvas.width = 1224;
      canvas.height = 768;
      canvas.style.border = '1px solid';

      this.container?.appendChild(canvas);

      console.log(this.container, canvas, 'canvas');
      return canvas;
  }

  //   emit() {}
  //   one() {}
  run() {
      // @ts-ignore
      const state = this.state;

      // @ts-ignore
      state.currentBoundingBox = this.makeBoundingBox( state.boundingBox, state.cy );
      // @ts-ignore
      if( state.ready ){ this.one( 'layoutready', state.ready ); }
      // @ts-ignore
      if( state.stop ){ this.one( 'layoutstop', state.stop ); }
      // @ts-ignore
      state.nodes.forEach( node => this.setInitialPositionState( node, state ) );

      // @ts-ignore
      this.emit('layoutready', this.options.cy);
      // @ts-ignore
      //   this.emit('layoutstop', this.options.cy);

      return this;
  }
}


import {graphlib, layout} from 'dagre';
import {  CytoscapeOptions } from 'cytoscape';

import {elements} from '../../backend';
import { createHTMLElement, ElementNames } from '../utils';
import {createCircleNode} from './create-circle-node';
import { createLineEdge} from './create-line-edge';

export interface CustomLayoutOptions extends Omit<CytoscapeOptions, 'container'>  {
  container?: HTMLElement | SVGSVGElement | null,
  header?: string
}

const DEFAULT_HEADER = 'Custom layout';

export class CustomLayout {
    constructor(private readonly options: CustomLayoutOptions) {}

    get container() {
        //@ts-ignore
        return this.options.cy.container();
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
  run() {

      const c = this.appendCanvas();
      const ctx = c.getContext('2d') as CanvasRenderingContext2D;

      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
  }
}


import './cyto';
import { draw as drawGrid } from './grid-layout';
import { draw as drawDagre } from './dagre-layout';
import { draw as drawRandom } from './random-layout';

import './index.css';
import 'cytoscape-context-menus/cytoscape-context-menus.css';

drawDagre();
drawRandom();
drawGrid();
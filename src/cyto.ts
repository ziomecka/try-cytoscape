
import c from 'cytoscape';
import 'cytoscape-undo-redo';

import jquery from 'jquery';
import Konva from 'konva';

// @ts-ignore
import contextMenus from 'cytoscape-context-menus';

// register extension
c.use(contextMenus);

// import CSS as well
import 'cytoscape-context-menus/cytoscape-context-menus.css';

// @ts-ignore
// import edgeEditing from 'cytoscape-edge-editing';

// edgeEditing(c, jquery, Konva);

// needed for edge editing plugin
// @ts-ignore
window.$ = jquery;

export const cyto = c;
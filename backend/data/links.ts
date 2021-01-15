import { NODES_COUNT } from './consts';
import { Link } from './types';

export const links: Link[] = new Array(NODES_COUNT).fill(null).reduce(lineReduce, []);

function lineReduce (arr: Link[], _: any = undefined, index: number) {
  if (index === NODES_COUNT - 1) {
    // arr.push({ target: `node-${index}`, source: `node-${0}` });
  } else {
    arr.push({ target: `node-${index}`, source: `node-${index + 1}` });
  }

  return arr;
}

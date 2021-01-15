import { NODES_COUNT } from './consts';
import { Node } from './types';

// import { NODES_COUNT } from './consts';
// import { getRandom } from './get-random';

// const maxX = 900;
// const maxY = 600;

// // export const nodes: Node[] = new Array(NODES_COUNT)
// //   .fill(null)
// //   .map((_, index) => {
// //     return {
// //       // x: 1,
// //       // y: 1,
// //       x: getRandom(maxX),
// //       y: getRandom(maxY),
// //       id: `node-${index}`,
// //     };
// //   });

const STEP = 50;

// @ts-ignore
export const nodes: Node[] = new Array(NODES_COUNT).fill(null).map(mapLine);

// setTimeout(() => {
//   nodes.push(mapLine(null, 3));
// }, 2000);
function mapLine (_: any, index: number) {
  return {
    id: `node-${index}`,
    // x: STEP * (index + 1),
    // y: STEP,
    x: 0,
    y: 0,
    // fx: STEP * (index + 1),
    // fy: STEP,
  };
}

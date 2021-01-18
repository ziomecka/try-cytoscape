import { ElementsDefinition} from 'cytoscape';

export function createElements(index: number):ElementsDefinition {
    return {
        nodes: [{
            data: { id: `a${index}` },
        },
        {
            data: { id: `b${index}` },
        },
        {
            data: { id: `c${index}` },
        },
        {
            data: { id: `d${index}` },
        }],
        edges: [
            {
                data: { id: `ab${index}`, source: `a${index}`, target: `b${index}` },
            },
            {
                data: { id: `ac${index}`, source: `a${index}`, target: `c${index}` },
            },{
                data: { id: `ad${index}`, source: `a${index}`, target: `d${index}` },
            }],
    };
}


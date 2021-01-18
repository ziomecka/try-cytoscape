type ElementNames = typeof elementNames[number]

const NS = 'http://www.w3.org/2000/svg';
const elementNames = ['g', 'circle', 'rect', 'svg', 'line', 'polyline'] as const;

export function createSvgElement(elementName: ElementNames, attributes: Record<string, string|number> = {}) {
    const element = document.createElementNS(NS, elementName);

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute( key, `${value}`);
    });

    return element;
}


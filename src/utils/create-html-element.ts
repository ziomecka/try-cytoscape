export type ElementNames = typeof elementNames[number]

const elementNames = ['h3'] as const;

export function createHTMLElement(elementName: ElementNames, attributes: Record<string, string|number> = {}, textContent?: string): HTMLElement {
    const element = document.createElement(elementName);

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute( key, `${value}`);
    });

    if(textContent !== undefined && textContent !== null) {
        element.textContent = textContent;
    }

    return element;
}


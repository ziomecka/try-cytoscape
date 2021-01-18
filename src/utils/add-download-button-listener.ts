import { Core } from 'cytoscape';

interface Options {
  button: HTMLButtonElement,
  cy: Core
}

export function addDownloadButtonListener(options: Options) {
    const {button, cy} = options;

    const listener: any = () => {
        const png = cy.png({ bg: 'white'});
        const a  = document.createElement('a');
        a.href = png;
        a.download = 'image.png';

        a.click();
    };

    button.addEventListener('click', listener);

    return () => button.removeEventListener('click', listener);
}
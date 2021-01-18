export function renderTitle (selector: string, layoutName: string) {
    const element = document.querySelector(selector);

    if (element) {
        element.textContent = `layout name: ${layoutName}`;
    }
}
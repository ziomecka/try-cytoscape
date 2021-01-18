export function renderLayoutName (name: string) {
  const element = document.querySelector('#layout');

  if (element) {
    element.textContent = `layout: ${name}`;
  }
}

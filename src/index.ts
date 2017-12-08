import { Example } from "./example";
window.onload = () => {
    const example = new Example();
    const element = <HTMLElement>document.getElementById("app");
    element.textContent = example.foo();
}
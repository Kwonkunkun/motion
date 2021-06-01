import { PageComponent } from "./components/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    console.log("ha");
    const imageBtn = document.querySelector(".btn");
    imageBtn?.addEventListener("click", () => {
      this.page.appendImage();
    });
  }
}

new App(document.querySelector(".main")! as HTMLElement);

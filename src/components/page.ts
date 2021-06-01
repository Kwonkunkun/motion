import { ImageComponent } from "./item/image.js";
import { BaseComponent } from "./component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="contents_list"></ul>');
  }

  appendImage() {
    const image = new ImageComponent("title", "https://picsum.photos/500/200");
    image.attachTo(this.element);
  }
}

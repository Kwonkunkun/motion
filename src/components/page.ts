import { BaseComponent } from "./component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="contents_list"></ul>');
  }

  appendImage() {}
}

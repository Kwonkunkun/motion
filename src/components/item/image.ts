import { BaseComponent } from "../component.js";

export class ImageComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(` <li class="contents_container">
    <div class="contents_detail">
      <img src="${url}" alt="" />
    </div>
    <div class="contents_info">
      <button class="delete">
        <i class="fas fa-times"></i>
      </button>
      <textarea class="description">${title}</textarea>
    </div>
  </li>`);

    const deleteBtn = this.element.querySelector(".delete");
    deleteBtn?.addEventListener("click", () => {
      this.delete();
    });
  }

  delete() {
    this.element.remove();
  }
}

import { BaseComponent } from "../component";

export class ImageComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(` <li class="contents_container">
    <div class="contents_detail">
      <img src="https://picsum.photos/500/200" alt="" />
    </div>
    <div class="contents_info">
      <button class="delete">
        <i class="fas fa-times"></i>
      </button>
      <textarea class="description">안녕하세유</textarea>
    </div>
  </li>`);
    console.log(title, url);
  }
}

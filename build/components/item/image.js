var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseComponent } from "../component";
var ImageComponent = (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(title, url) {
        var _this = _super.call(this, " <li class=\"contents_container\">\n    <div class=\"contents_detail\">\n      <img src=\"https://picsum.photos/500/200\" alt=\"\" />\n    </div>\n    <div class=\"contents_info\">\n      <button class=\"delete\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n      <textarea class=\"description\">\uC548\uB155\uD558\uC138\uC720</textarea>\n    </div>\n  </li>") || this;
        console.log(title, url);
        return _this;
    }
    return ImageComponent;
}(BaseComponent));
export { ImageComponent };
//# sourceMappingURL=image.js.map
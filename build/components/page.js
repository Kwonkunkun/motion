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
import { BaseComponent } from "./component.js";
var PageComponent = (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        return _super.call(this, '<ul class="contents_list"></ul>') || this;
    }
    PageComponent.prototype.appendImage = function () { };
    return PageComponent;
}(BaseComponent));
export { PageComponent };
//# sourceMappingURL=page.js.map
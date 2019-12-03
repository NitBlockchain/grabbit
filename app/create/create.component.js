"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "Create",
            moduleId: module.id,
            templateUrl: "./create.component.html",
            styleUrls: ["./create.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;

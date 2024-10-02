"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSensorDataEntity = void 0;
var typeorm_1 = require("typeorm");
var DefaultSensorDataEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('DEFAULT_SENSOR_DATA')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _lastValue_decorators;
    var _lastValue_initializers = [];
    var _lastValue_extraInitializers = [];
    var _lastValueDate_decorators;
    var _lastValueDate_initializers = [];
    var _lastValueDate_extraInitializers = [];
    var _currentValue_decorators;
    var _currentValue_initializers = [];
    var _currentValue_extraInitializers = [];
    var _currentValueDate_decorators;
    var _currentValueDate_initializers = [];
    var _currentValueDate_extraInitializers = [];
    var DefaultSensorDataEntity = _classThis = /** @class */ (function () {
        function DefaultSensorDataEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.lastValue = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _lastValue_initializers, void 0));
            this.lastValueDate = (__runInitializers(this, _lastValue_extraInitializers), __runInitializers(this, _lastValueDate_initializers, void 0));
            this.currentValue = (__runInitializers(this, _lastValueDate_extraInitializers), __runInitializers(this, _currentValue_initializers, void 0));
            this.currentValueDate = (__runInitializers(this, _currentValue_extraInitializers), __runInitializers(this, _currentValueDate_initializers, void 0));
            __runInitializers(this, _currentValueDate_extraInitializers);
        }
        return DefaultSensorDataEntity_1;
    }());
    __setFunctionName(_classThis, "DefaultSensorDataEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 255 })];
        _lastValue_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _lastValueDate_decorators = [(0, typeorm_1.Column)({ type: 'timestamp' })];
        _currentValue_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _currentValueDate_decorators = [(0, typeorm_1.Column)({ type: 'timestamp' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _lastValue_decorators, { kind: "field", name: "lastValue", static: false, private: false, access: { has: function (obj) { return "lastValue" in obj; }, get: function (obj) { return obj.lastValue; }, set: function (obj, value) { obj.lastValue = value; } }, metadata: _metadata }, _lastValue_initializers, _lastValue_extraInitializers);
        __esDecorate(null, null, _lastValueDate_decorators, { kind: "field", name: "lastValueDate", static: false, private: false, access: { has: function (obj) { return "lastValueDate" in obj; }, get: function (obj) { return obj.lastValueDate; }, set: function (obj, value) { obj.lastValueDate = value; } }, metadata: _metadata }, _lastValueDate_initializers, _lastValueDate_extraInitializers);
        __esDecorate(null, null, _currentValue_decorators, { kind: "field", name: "currentValue", static: false, private: false, access: { has: function (obj) { return "currentValue" in obj; }, get: function (obj) { return obj.currentValue; }, set: function (obj, value) { obj.currentValue = value; } }, metadata: _metadata }, _currentValue_initializers, _currentValue_extraInitializers);
        __esDecorate(null, null, _currentValueDate_decorators, { kind: "field", name: "currentValueDate", static: false, private: false, access: { has: function (obj) { return "currentValueDate" in obj; }, get: function (obj) { return obj.currentValueDate; }, set: function (obj, value) { obj.currentValueDate = value; } }, metadata: _metadata }, _currentValueDate_initializers, _currentValueDate_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DefaultSensorDataEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DefaultSensorDataEntity = _classThis;
}();
exports.DefaultSensorDataEntity = DefaultSensorDataEntity;

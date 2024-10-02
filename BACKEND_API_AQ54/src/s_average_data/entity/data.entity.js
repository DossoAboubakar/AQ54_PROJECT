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
exports.StationAverageDataEntity = void 0;
var typeorm_1 = require("typeorm");
var StationAverageDataEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('STATION_AVERAGE_DATA')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _co_decorators;
    var _co_initializers = [];
    var _co_extraInitializers = [];
    var _temperature_decorators;
    var _temperature_initializers = [];
    var _temperature_extraInitializers = [];
    var _tInt_decorators;
    var _tInt_initializers = [];
    var _tInt_extraInitializers = [];
    var _no2_decorators;
    var _no2_initializers = [];
    var _no2_extraInitializers = [];
    var _o3_decorators;
    var _o3_initializers = [];
    var _o3_extraInitializers = [];
    var _pm10_decorators;
    var _pm10_initializers = [];
    var _pm10_extraInitializers = [];
    var _pm25_decorators;
    var _pm25_initializers = [];
    var _pm25_extraInitializers = [];
    var _rh_decorators;
    var _rh_initializers = [];
    var _rh_extraInitializers = [];
    var StationAverageDataEntity = _classThis = /** @class */ (function () {
        function StationAverageDataEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.date = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.co = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _co_initializers, void 0));
            this.temperature = (__runInitializers(this, _co_extraInitializers), __runInitializers(this, _temperature_initializers, void 0));
            this.tInt = (__runInitializers(this, _temperature_extraInitializers), __runInitializers(this, _tInt_initializers, void 0));
            this.no2 = (__runInitializers(this, _tInt_extraInitializers), __runInitializers(this, _no2_initializers, void 0));
            this.o3 = (__runInitializers(this, _no2_extraInitializers), __runInitializers(this, _o3_initializers, void 0));
            this.pm10 = (__runInitializers(this, _o3_extraInitializers), __runInitializers(this, _pm10_initializers, void 0));
            this.pm25 = (__runInitializers(this, _pm10_extraInitializers), __runInitializers(this, _pm25_initializers, void 0));
            this.rh = (__runInitializers(this, _pm25_extraInitializers), __runInitializers(this, _rh_initializers, void 0));
            __runInitializers(this, _rh_extraInitializers);
        }
        return StationAverageDataEntity_1;
    }());
    __setFunctionName(_classThis, "StationAverageDataEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _date_decorators = [(0, typeorm_1.Column)({ type: 'timestamp' })];
        _co_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _temperature_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _tInt_decorators = [(0, typeorm_1.Column)({ name: 't_int', type: 'float' })];
        _no2_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _o3_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _pm10_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _pm25_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _rh_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _co_decorators, { kind: "field", name: "co", static: false, private: false, access: { has: function (obj) { return "co" in obj; }, get: function (obj) { return obj.co; }, set: function (obj, value) { obj.co = value; } }, metadata: _metadata }, _co_initializers, _co_extraInitializers);
        __esDecorate(null, null, _temperature_decorators, { kind: "field", name: "temperature", static: false, private: false, access: { has: function (obj) { return "temperature" in obj; }, get: function (obj) { return obj.temperature; }, set: function (obj, value) { obj.temperature = value; } }, metadata: _metadata }, _temperature_initializers, _temperature_extraInitializers);
        __esDecorate(null, null, _tInt_decorators, { kind: "field", name: "tInt", static: false, private: false, access: { has: function (obj) { return "tInt" in obj; }, get: function (obj) { return obj.tInt; }, set: function (obj, value) { obj.tInt = value; } }, metadata: _metadata }, _tInt_initializers, _tInt_extraInitializers);
        __esDecorate(null, null, _no2_decorators, { kind: "field", name: "no2", static: false, private: false, access: { has: function (obj) { return "no2" in obj; }, get: function (obj) { return obj.no2; }, set: function (obj, value) { obj.no2 = value; } }, metadata: _metadata }, _no2_initializers, _no2_extraInitializers);
        __esDecorate(null, null, _o3_decorators, { kind: "field", name: "o3", static: false, private: false, access: { has: function (obj) { return "o3" in obj; }, get: function (obj) { return obj.o3; }, set: function (obj, value) { obj.o3 = value; } }, metadata: _metadata }, _o3_initializers, _o3_extraInitializers);
        __esDecorate(null, null, _pm10_decorators, { kind: "field", name: "pm10", static: false, private: false, access: { has: function (obj) { return "pm10" in obj; }, get: function (obj) { return obj.pm10; }, set: function (obj, value) { obj.pm10 = value; } }, metadata: _metadata }, _pm10_initializers, _pm10_extraInitializers);
        __esDecorate(null, null, _pm25_decorators, { kind: "field", name: "pm25", static: false, private: false, access: { has: function (obj) { return "pm25" in obj; }, get: function (obj) { return obj.pm25; }, set: function (obj, value) { obj.pm25 = value; } }, metadata: _metadata }, _pm25_initializers, _pm25_extraInitializers);
        __esDecorate(null, null, _rh_decorators, { kind: "field", name: "rh", static: false, private: false, access: { has: function (obj) { return "rh" in obj; }, get: function (obj) { return obj.rh; }, set: function (obj, value) { obj.rh = value; } }, metadata: _metadata }, _rh_initializers, _rh_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StationAverageDataEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StationAverageDataEntity = _classThis;
}();
exports.StationAverageDataEntity = StationAverageDataEntity;

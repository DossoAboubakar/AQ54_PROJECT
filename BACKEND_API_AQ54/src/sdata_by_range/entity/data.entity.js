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
exports.SensorDataByRangeEntity = void 0;
var typeorm_1 = require("typeorm");
var SensorDataByRangeEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('SENSOR_DATA_BY_RANGE')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _aux1_value_decorators;
    var _aux1_value_initializers = [];
    var _aux1_value_extraInitializers = [];
    var _aux2_value_decorators;
    var _aux2_value_initializers = [];
    var _aux2_value_extraInitializers = [];
    var _aux3_value_decorators;
    var _aux3_value_initializers = [];
    var _aux3_value_extraInitializers = [];
    var _co_value_decorators;
    var _co_value_initializers = [];
    var _co_value_extraInitializers = [];
    var _ext_value_decorators;
    var _ext_value_initializers = [];
    var _ext_value_extraInitializers = [];
    var _intT_value_decorators;
    var _intT_value_initializers = [];
    var _intT_value_extraInitializers = [];
    var _laT_value_decorators;
    var _laT_value_initializers = [];
    var _laT_value_extraInitializers = [];
    var _lon_value_decorators;
    var _lon_value_initializers = [];
    var _lon_value_extraInitializers = [];
    var _no2_value_decorators;
    var _no2_value_initializers = [];
    var _no2_value_extraInitializers = [];
    var _O3_value_decorators;
    var _O3_value_initializers = [];
    var _O3_value_extraInitializers = [];
    var _pm10_value_decorators;
    var _pm10_value_initializers = [];
    var _pm10_value_extraInitializers = [];
    var _pm25_value_decorators;
    var _pm25_value_initializers = [];
    var _pm25_value_extraInitializers = [];
    var _rh_value_decorators;
    var _rh_value_initializers = [];
    var _rh_value_extraInitializers = [];
    var SensorDataByRangeEntity = _classThis = /** @class */ (function () {
        function SensorDataByRangeEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.date = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.aux1_value = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _aux1_value_initializers, void 0));
            this.aux2_value = (__runInitializers(this, _aux1_value_extraInitializers), __runInitializers(this, _aux2_value_initializers, void 0));
            this.aux3_value = (__runInitializers(this, _aux2_value_extraInitializers), __runInitializers(this, _aux3_value_initializers, void 0));
            this.co_value = (__runInitializers(this, _aux3_value_extraInitializers), __runInitializers(this, _co_value_initializers, void 0));
            this.ext_value = (__runInitializers(this, _co_value_extraInitializers), __runInitializers(this, _ext_value_initializers, void 0));
            this.intT_value = (__runInitializers(this, _ext_value_extraInitializers), __runInitializers(this, _intT_value_initializers, void 0));
            this.laT_value = (__runInitializers(this, _intT_value_extraInitializers), __runInitializers(this, _laT_value_initializers, void 0));
            this.lon_value = (__runInitializers(this, _laT_value_extraInitializers), __runInitializers(this, _lon_value_initializers, void 0));
            this.no2_value = (__runInitializers(this, _lon_value_extraInitializers), __runInitializers(this, _no2_value_initializers, void 0));
            this.O3_value = (__runInitializers(this, _no2_value_extraInitializers), __runInitializers(this, _O3_value_initializers, void 0));
            this.pm10_value = (__runInitializers(this, _O3_value_extraInitializers), __runInitializers(this, _pm10_value_initializers, void 0));
            this.pm25_value = (__runInitializers(this, _pm10_value_extraInitializers), __runInitializers(this, _pm25_value_initializers, void 0));
            this.rh_value = (__runInitializers(this, _pm25_value_extraInitializers), __runInitializers(this, _rh_value_initializers, void 0));
            __runInitializers(this, _rh_value_extraInitializers);
        }
        return SensorDataByRangeEntity_1;
    }());
    __setFunctionName(_classThis, "SensorDataByRangeEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _date_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 255 })];
        _aux1_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _aux2_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _aux3_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _co_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _ext_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _intT_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _laT_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _lon_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _no2_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _O3_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _pm10_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _pm25_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        _rh_value_decorators = [(0, typeorm_1.Column)({ type: 'float' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _aux1_value_decorators, { kind: "field", name: "aux1_value", static: false, private: false, access: { has: function (obj) { return "aux1_value" in obj; }, get: function (obj) { return obj.aux1_value; }, set: function (obj, value) { obj.aux1_value = value; } }, metadata: _metadata }, _aux1_value_initializers, _aux1_value_extraInitializers);
        __esDecorate(null, null, _aux2_value_decorators, { kind: "field", name: "aux2_value", static: false, private: false, access: { has: function (obj) { return "aux2_value" in obj; }, get: function (obj) { return obj.aux2_value; }, set: function (obj, value) { obj.aux2_value = value; } }, metadata: _metadata }, _aux2_value_initializers, _aux2_value_extraInitializers);
        __esDecorate(null, null, _aux3_value_decorators, { kind: "field", name: "aux3_value", static: false, private: false, access: { has: function (obj) { return "aux3_value" in obj; }, get: function (obj) { return obj.aux3_value; }, set: function (obj, value) { obj.aux3_value = value; } }, metadata: _metadata }, _aux3_value_initializers, _aux3_value_extraInitializers);
        __esDecorate(null, null, _co_value_decorators, { kind: "field", name: "co_value", static: false, private: false, access: { has: function (obj) { return "co_value" in obj; }, get: function (obj) { return obj.co_value; }, set: function (obj, value) { obj.co_value = value; } }, metadata: _metadata }, _co_value_initializers, _co_value_extraInitializers);
        __esDecorate(null, null, _ext_value_decorators, { kind: "field", name: "ext_value", static: false, private: false, access: { has: function (obj) { return "ext_value" in obj; }, get: function (obj) { return obj.ext_value; }, set: function (obj, value) { obj.ext_value = value; } }, metadata: _metadata }, _ext_value_initializers, _ext_value_extraInitializers);
        __esDecorate(null, null, _intT_value_decorators, { kind: "field", name: "intT_value", static: false, private: false, access: { has: function (obj) { return "intT_value" in obj; }, get: function (obj) { return obj.intT_value; }, set: function (obj, value) { obj.intT_value = value; } }, metadata: _metadata }, _intT_value_initializers, _intT_value_extraInitializers);
        __esDecorate(null, null, _laT_value_decorators, { kind: "field", name: "laT_value", static: false, private: false, access: { has: function (obj) { return "laT_value" in obj; }, get: function (obj) { return obj.laT_value; }, set: function (obj, value) { obj.laT_value = value; } }, metadata: _metadata }, _laT_value_initializers, _laT_value_extraInitializers);
        __esDecorate(null, null, _lon_value_decorators, { kind: "field", name: "lon_value", static: false, private: false, access: { has: function (obj) { return "lon_value" in obj; }, get: function (obj) { return obj.lon_value; }, set: function (obj, value) { obj.lon_value = value; } }, metadata: _metadata }, _lon_value_initializers, _lon_value_extraInitializers);
        __esDecorate(null, null, _no2_value_decorators, { kind: "field", name: "no2_value", static: false, private: false, access: { has: function (obj) { return "no2_value" in obj; }, get: function (obj) { return obj.no2_value; }, set: function (obj, value) { obj.no2_value = value; } }, metadata: _metadata }, _no2_value_initializers, _no2_value_extraInitializers);
        __esDecorate(null, null, _O3_value_decorators, { kind: "field", name: "O3_value", static: false, private: false, access: { has: function (obj) { return "O3_value" in obj; }, get: function (obj) { return obj.O3_value; }, set: function (obj, value) { obj.O3_value = value; } }, metadata: _metadata }, _O3_value_initializers, _O3_value_extraInitializers);
        __esDecorate(null, null, _pm10_value_decorators, { kind: "field", name: "pm10_value", static: false, private: false, access: { has: function (obj) { return "pm10_value" in obj; }, get: function (obj) { return obj.pm10_value; }, set: function (obj, value) { obj.pm10_value = value; } }, metadata: _metadata }, _pm10_value_initializers, _pm10_value_extraInitializers);
        __esDecorate(null, null, _pm25_value_decorators, { kind: "field", name: "pm25_value", static: false, private: false, access: { has: function (obj) { return "pm25_value" in obj; }, get: function (obj) { return obj.pm25_value; }, set: function (obj, value) { obj.pm25_value = value; } }, metadata: _metadata }, _pm25_value_initializers, _pm25_value_extraInitializers);
        __esDecorate(null, null, _rh_value_decorators, { kind: "field", name: "rh_value", static: false, private: false, access: { has: function (obj) { return "rh_value" in obj; }, get: function (obj) { return obj.rh_value; }, set: function (obj, value) { obj.rh_value = value; } }, metadata: _metadata }, _rh_value_initializers, _rh_value_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SensorDataByRangeEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SensorDataByRangeEntity = _classThis;
}();
exports.SensorDataByRangeEntity = SensorDataByRangeEntity;

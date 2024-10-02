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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var FileService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FileService = _classThis = /** @class */ (function () {
        function FileService_1(httpService, sensorDataRepository) {
            this.httpService = httpService;
            this.sensorDataRepository = sensorDataRepository;
        }
        FileService_1.prototype.loadDefaultSensorDatas = function (station) {
            return __awaiter(this, void 0, void 0, function () {
                var data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.fetchAndSaveSensorData(station)];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, data];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Erreur lors du chargement des données de capteur :', error_1);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        FileService_1.prototype.fetchAndSaveSensorData = function (station) {
            return __awaiter(this, void 0, void 0, function () {
                var currentValuesUrl, lastValuesUrl, currentResponse, dataTable, timestamp, lastResponse, lastDataTable, lastTimestamp, _loop_1, this_1, _i, dataTable_1, elt, savedData, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentValuesUrl = "https://airqino-api.magentalab.it/getCurrentValues/".concat(station);
                            lastValuesUrl = "https://airqino-api.magentalab.it/getLastValuesRaw/".concat(station);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            return [4 /*yield*/, (0, rxjs_1.lastValueFrom)(this.httpService.get(currentValuesUrl))];
                        case 2:
                            currentResponse = _a.sent();
                            console.log("Réponse de l'API pour les valeurs actuelles:", currentResponse.data);
                            dataTable = currentResponse.data['values'];
                            timestamp = currentResponse.data['timestamp'];
                            return [4 /*yield*/, (0, rxjs_1.lastValueFrom)(this.httpService.get(lastValuesUrl))];
                        case 3:
                            lastResponse = _a.sent();
                            console.log("Réponse de l'API pour les dernières valeurs:", lastResponse.data);
                            lastDataTable = lastResponse.data['values'];
                            lastTimestamp = lastResponse.data['last_timestamp'];
                            _loop_1 = function (elt) {
                                var sensorObject, lastElt, existingSensor, newSensorData;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            sensorObject = {
                                                name: elt.sensor,
                                                currentValue: elt.value,
                                                currentValueDate: timestamp,
                                                lastValue: null,
                                                lastValueDate: null,
                                            };
                                            lastElt = lastDataTable.find(function (e) { return e.sensor === elt.sensor; });
                                            if (lastElt) {
                                                sensorObject.lastValue = lastElt.value;
                                                sensorObject.lastValueDate = lastTimestamp;
                                            }
                                            return [4 /*yield*/, this_1.sensorDataRepository.findOne({ where: { name: sensorObject.name } })];
                                        case 1:
                                            existingSensor = _b.sent();
                                            if (!existingSensor) return [3 /*break*/, 3];
                                            existingSensor.currentValue = sensorObject.currentValue;
                                            existingSensor.currentValueDate = sensorObject.currentValueDate;
                                            existingSensor.lastValue = sensorObject.lastValue;
                                            existingSensor.lastValueDate = sensorObject.lastValueDate;
                                            return [4 /*yield*/, this_1.sensorDataRepository.save(existingSensor)];
                                        case 2:
                                            _b.sent();
                                            return [3 /*break*/, 5];
                                        case 3:
                                            newSensorData = this_1.sensorDataRepository.create(sensorObject);
                                            return [4 /*yield*/, this_1.sensorDataRepository.save(newSensorData)];
                                        case 4:
                                            _b.sent();
                                            _b.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, dataTable_1 = dataTable;
                            _a.label = 4;
                        case 4:
                            if (!(_i < dataTable_1.length)) return [3 /*break*/, 7];
                            elt = dataTable_1[_i];
                            return [5 /*yield**/, _loop_1(elt)];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6:
                            _i++;
                            return [3 /*break*/, 4];
                        case 7: return [4 /*yield*/, this.sensorDataRepository.find()];
                        case 8:
                            savedData = _a.sent();
                            return [2 /*return*/, savedData];
                        case 9:
                            error_2 = _a.sent();
                            console.error('Erreur lors de la récupération ou de la sauvegarde des données:', error_2);
                            throw error_2;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        return FileService_1;
    }());
    __setFunctionName(_classThis, "FileService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FileService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FileService = _classThis;
}();
exports.FileService = FileService;

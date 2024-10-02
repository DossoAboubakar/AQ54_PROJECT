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
exports.SensorAverageDataService = void 0;
var common_1 = require("@nestjs/common");
var SensorAverageDataService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SensorAverageDataService = _classThis = /** @class */ (function () {
        function SensorAverageDataService_1(stationAverageDataRepository, httpService) {
            this.stationAverageDataRepository = stationAverageDataRepository;
            this.httpService = httpService;
        }
        SensorAverageDataService_1.prototype.loadData = function (station) {
            return this.findData(station);
        };
        SensorAverageDataService_1.prototype.findData = function (stationID) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchedData, dataTable, sensorData, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.fetchData(stationID)];
                        case 1:
                            fetchedData = _a.sent();
                            dataTable = fetchedData['data'];
                            return [4 /*yield*/, this.saveDataInDatabase(dataTable)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.stationAverageDataRepository.find()];
                        case 3:
                            sensorData = _a.sent();
                            return [2 /*return*/, sensorData];
                        case 4:
                            error_1 = _a.sent();
                            console.error('Erreur lors de la récupération des données:', error_1);
                            throw new Error('Échec de la récupération des données');
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        SensorAverageDataService_1.prototype.fetchData = function (stationID) {
            var _this = this;
            var url = "https://airqino-api.magentalab.it/v3/getStationHourlyAvg/".concat(stationID);
            return new Promise(function (resolve, reject) {
                _this.httpService.get(url).subscribe({
                    next: function (response) {
                        console.log('Réponse de l\'API:', response.data);
                        resolve(response.data);
                    },
                    error: function (error) {
                        console.error('Erreur lors de l\'appel à l\'API:', error);
                        reject(error);
                    },
                });
            });
        };
        SensorAverageDataService_1.prototype.saveDataInDatabase = function (dataTable) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, dataTable_1, data, stationAverageData, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 5, , 6]);
                            _i = 0, dataTable_1 = dataTable;
                            _b.label = 1;
                        case 1:
                            if (!(_i < dataTable_1.length)) return [3 /*break*/, 4];
                            data = dataTable_1[_i];
                            stationAverageData = this.stationAverageDataRepository.create({
                                date: data.timestamp,
                                co: data.CO,
                                temperature: data.T,
                                tInt: data['T. int.'],
                                no2: data.NO2,
                                o3: data.O3,
                                pm10: data.PM10,
                                pm25: data['PM2.5'],
                                rh: (_a = data.RH) !== null && _a !== void 0 ? _a : 404
                            });
                            return [4 /*yield*/, this.stationAverageDataRepository.save(stationAverageData)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_2 = _b.sent();
                            console.error('Erreur lors de la sauvegarde des données dans la base:', error_2);
                            throw new Error('Échec de la sauvegarde des données');
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        return SensorAverageDataService_1;
    }());
    __setFunctionName(_classThis, "SensorAverageDataService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SensorAverageDataService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SensorAverageDataService = _classThis;
}();
exports.SensorAverageDataService = SensorAverageDataService;

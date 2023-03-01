"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = exports.authBuffer = exports.password = exports.email = exports.extractCookie = void 0;
const axios_1 = __importDefault(require("axios"));
const extractCookie = (cookies) => {
    return cookies === null || cookies === void 0 ? void 0 : cookies.split(';')[0];
    // return cookies
};
exports.extractCookie = extractCookie;
exports.email = 'alexandre.annic@drc.ngo';
exports.password = '4awH1ulU';
exports.authBuffer = 'Basic ' + btoa(`${exports.email}:${exports.password}`);
const c = axios_1.default.create({
    // jar,
    baseURL: 'https://lap.drc.ngo',
    withCredentials: true,
    maxRedirects: 0,
    // httpAgent: new http.Agent({keepAlive: true}),
    // httpsAgent: new https.Agent({keepAlive: true}),
    // beforeRedirect: console.log,
    transformRequest: (...x) => {
        console.log('HEADER---\n', x[1], '\n----');
        return x[2];
    }
});
const extractTokens = (r) => {
    var _a;
    const csrf = r.headers['x-csrf-token'];
    const cookie = (0, exports.extractCookie)((_a = r.headers['set-cookie']) === null || _a === void 0 ? void 0 : _a[0]);
    return [csrf, cookie];
};
const getTokenAndSession = async () => {
    const init = await c.get('/login/root');
    return extractTokens(init);
};
const login = async ([csrf, session]) => {
    // const formData = new FormData()
    // formData.append('_csrf', csrf)
    const formData = { '_csrf': csrf };
    return await c.post('/j_spring_security_check', 
    // formData,
    undefined, {
        data: formData,
        withCredentials: true,
        // auth: {
        //   username: 'alexandre.annic@drc',
        //   password: '4awH1ulU',
        // },
        headers: {
            Authorization: exports.authBuffer,
            // 'Cookie': session
        }
    });
};
const getData = async ([csrf, session]) => {
    return c.post('/admin/msd/get-list-data', {
        withCredentials: true,
        headers: {
            'bvalbal': 'blabla',
            'X-CSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
        },
        body: {
            'parameters': null,
            'page': 1,
            'count': 10,
            'filterData': { 'filterRangeInts': [], 'filterRangeDoubles': [], 'filterLongs': [], 'filterStrings': [], 'filterTimes': [], 'filterDates': [] },
            'searchData': [],
            'sortData': { 'fieldName': 'tmspDtCreate', 'type': 'DESC' }
        }
    });
};
exports.Axios = {
    getTokenAndSession,
    login,
    getData,
    extractTokens
};
//# sourceMappingURL=axios.js.map
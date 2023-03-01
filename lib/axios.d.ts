import { AxiosResponse } from 'axios';
export declare const extractCookie: (cookies: string) => string;
export declare const email = "alexandre.annic@drc.ngo";
export declare const password = "4awH1ulU";
export declare const authBuffer: string;
export declare const Axios: {
    getTokenAndSession: () => Promise<[string, string]>;
    login: ([csrf, session]: [string, string]) => Promise<AxiosResponse<any, any>>;
    getData: ([csrf, session]: [string, string]) => Promise<AxiosResponse<any, any>>;
    extractTokens: (r: AxiosResponse) => [string, string];
};

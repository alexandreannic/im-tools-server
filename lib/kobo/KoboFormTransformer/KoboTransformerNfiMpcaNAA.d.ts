import { KoboTransformer } from './KoboTransformer';
export interface KoboTransformerNfiMcpaNAA {
    oblast?: string;
    kits: {
        HKMV: number;
        HKF: number;
        BLN: number;
        WKB1: number;
        WKB2: number;
        WKB3: number;
        WKB4: number;
        BK1: number;
        BK2: number;
        BK3: number;
        BK4: number;
    };
    kitsTotalCost: {
        HKMV: number;
        HKF: number;
        BLN: number;
        Allkits: number;
    };
}
export declare const koboTransformerNfiMcpaNaa: KoboTransformer<KoboTransformerNfiMcpaNAA>;

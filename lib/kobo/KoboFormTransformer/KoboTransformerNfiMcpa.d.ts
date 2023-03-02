import { KoboTransformer } from './KoboTransformer';
export declare enum Program {
    MPCA = "MPCA",
    NFI = "NFI",
    CashForRent = "CashForRent"
}
export declare enum Status {
    IPD = "IDP"
}
export interface KoboTransformerNfiMcpa {
    oblast?: string;
    program?: Program[];
    status?: Status;
    houseHoldSize: number;
    kits: {
        HKMV: number;
        HKF: number;
        NFKF_NFI: number;
        KS: number;
        BK1: number;
        BK2: number;
        BK3: number;
        BK4: number;
        WKB1: number;
        WKB2: number;
        WKB3: number;
        WKB4: number;
        BLN: number;
        SL: number;
    };
    kitsTotal: {
        Kits: number;
        BBKits: number;
        BBKits_Hygiene: number;
        BBKits_Winter: number;
    };
    kitsTotalCost: {
        HKMV: number;
        HKF: number;
        NFKF: number;
        KS: number;
        BK: number;
        WKB1: number;
        WKB2: number;
        WKB3: number;
        WKB4: number;
        BLN: number;
        Allkits: number;
    };
    kitsCheck?: boolean;
}
export declare const koboTransformerNfiMcpa: KoboTransformer<KoboTransformerNfiMcpa>;

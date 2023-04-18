export declare const appConf: {
    port: number;
    db: {
        host: string;
        user: string;
        database: string;
        password: string;
        port: number;
    };
    kobo: {
        url: string;
        token: string;
    };
    ecrecApp: {
        login: string;
        password: string;
    };
    legalAid: {
        apiToken: string;
    };
    activityInfo: {
        apiToken: string;
    };
};
export type AppConf = typeof appConf;

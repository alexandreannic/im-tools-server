export declare const appConf: {
    port: number;
    kobo: {
        url: string;
        token: string;
    };
    db: {
        host: string;
        user: string;
        database: string;
        password: string;
        port: number;
    };
};
export type AppConf = typeof appConf;

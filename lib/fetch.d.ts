export declare const Fetch: {
    getData: ([csrf, session]: [string, string]) => Promise<Response>;
    login: ([csrf, session]: [string, string]) => Promise<Response>;
    getTokenAndSession: () => Promise<[string, string]>;
    extractTokens: (r: any) => [string, string];
};

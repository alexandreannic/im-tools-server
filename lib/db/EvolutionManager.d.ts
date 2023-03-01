import { Client } from 'pg';
export declare class EvolutionManager {
    private pgClient;
    constructor(pgClient: Client);
    readonly run: () => Promise<void>;
    private readonly createEvolutionsTable;
}

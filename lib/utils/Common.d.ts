export declare const genUUID: (<T extends ArrayLike<number>>(options: import("uuid").V4Options | null | undefined, buffer: T, offset?: number | undefined) => T) & ((options?: import("uuid").V4Options | undefined) => string);
export interface Index<T> {
    [key: string]: T;
}
export declare const arrayToObject: <T>(array: T[], indexedKey: keyof T, selectedKey?: keyof T | undefined) => Index<any>;
export declare const queryStringToObject: (qs: string) => Index<string>;
export declare const toYYYYMMDD: (_: Date) => string;
export declare const objectToQueryString: (obj: {
    [key: string]: any;
}) => string;
type PipeFunction = <T, R>(fn1: (arg: T) => R, ...fns: (((arg: R) => R) | undefined)[]) => (arg: T) => R;
export declare const pipe: PipeFunction;
export type MappedColumn<T, O = string> = {
    [P in keyof T]: T[P] extends undefined | string | number | boolean | any[] ? O : MappedColumn<T[P], O>;
};
export declare const mapObjectColumns: <O>(columnsMap: Partial<MappedColumn<O, string>>) => (input: any) => O;
export declare const mapMultipleChoices: <T>(value: string | undefined, map: {
    [key: string]: T;
}) => T[];
export {};

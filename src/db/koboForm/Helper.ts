export class DbKoboFormHelper {

  static readonly definedJsonType = <A extends Record<string, any>>() => <T extends {answers: any}>(_: T): Omit<T, 'answer'> & {answers: A} => _
}
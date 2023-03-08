export type Arr = ReturnType<typeof arr>

export const arr = <T>(_v: T[]) => {

  // @ts-ignore
  const sum: (T extends number ? (fn?: (_: T) => number) => number : (fn: (_: T) => number) => number) = (fn = _ => _) => {
    return _v.reduce((acc, curr) => acc + fn(curr), 0)
  }

  const head = _v[0]

  const tall = _v[arr.length - 1]

  const get = _v
  
  const distinctBy = (fn: (element: T) => any) => {
    const uniqueValues: Record<any, boolean> = {};
    return _v.reduce((result: T[], currentValue: T) => {
      const key = fn(currentValue);
      if (!uniqueValues[key]) {
        uniqueValues[key] = true;
        result.push(currentValue);
      }
      return result;
    }, []);
  }

  const {map, ...rest} = Array(_v)

  return {
    sum,
    head,
    map: <U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any) => {
      return arr(_v.map(callbackfn))
    },
    ...rest,
  }
}


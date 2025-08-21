import {useCallback, useEffect, useRef, useState} from "react";

function isArrayEqual(a: unknown[], b: unknown[]) {
    if (a.length !== b.length) {
        return false
    }
    return a.map((item, index) => b[index] === item).reduce((a, b) => a && b, true)
}

interface LoadingQueryState<T> {
    data?: T;
    isLoading: true;
    isError: false;
    isFetching?: boolean;
}

interface ErrorQueryState<T> {
    data?: T;
    isLoading: false;
    isError: true;
    isFetching?: boolean;
}

interface LoadedQueryState<T> {
    data: T;
    isLoading: false;
    isError: false;
    isFetching?: boolean;
}

type QueryState<T> =
    | LoadingQueryState<T>
    | ErrorQueryState<T>
    | LoadedQueryState<T>

export type OptionalFetchResult<T, A> = QueryState<T> & { refetch: (arg?: A) => void }

export type FetchResult<T, A> = QueryState<T> & { refetch: (arg: A) => void }
export default function useFetch<T, A = undefined>(cb: (arg?: A) => Promise<T>, defaultArg?: A, dependency?: unknown[]): OptionalFetchResult<T, A>
export default function useFetch<T, A>(cb: (arg: A) => Promise<T>, defaultArg: A, dependency: unknown[] = []): FetchResult<T, A> {
    const isFetched = useRef(false);
    const prevDependency = useRef(dependency);
    const [result, setResult] = useState<QueryState<T>>({
        isError: false,
        isLoading: true,
        data: undefined,
        isFetching: false,
    });
    const fetchData = useCallback(async (arg: A) => {
        setResult((prev) => {
            if (!prev.data) {
                return {
                    isError: false,
                    isLoading: true,
                    data: undefined,
                    isFetching: false,
                }
            } else {
                return {
                    ...prev,
                    isFetching: true
                }
            }
        })
        try {
            const data = await cb(arg);
            setResult({
                data,
                isLoading: false,
                isError: false,
                isFetching: false
            })
        } catch (err) {
            setResult({
                isError: true,
                isLoading: false,
                isFetching: false
            })
        }
    }, [cb])
    useEffect(() => {
        if (!isFetched.current) {
            isFetched.current = true;
            void fetchData(defaultArg)
        }
    }, [fetchData])
    useEffect(() => {
        if (!isArrayEqual(prevDependency.current, dependency)) {
            prevDependency.current = dependency;
            void fetchData(defaultArg)
        }
    }, [dependency]);

    return {...result, refetch: fetchData}
}

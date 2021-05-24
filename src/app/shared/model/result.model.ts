export interface IResult<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];

}
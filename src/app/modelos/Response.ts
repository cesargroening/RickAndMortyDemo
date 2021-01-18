export class Info{
    public count: number;
    public next: string; 
    public prev: string;
    public pages: number;
}
export class Response{
    public info: Info;
    public results: any;
}
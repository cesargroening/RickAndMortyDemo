export class Info{
    public count: number;
    public next: string; 
    public prev: string;
    public pages: number;
}

export class Location {
    public name: string;
    public url: string;
}

export class Caracter{
    public id: number;
    public name: string;
    public status: string;
    public species: string;
    public type: string;
    public gender: string;
    public origin: Location;
    public location: Location;
    public image: string
    public episode: string[]
    public url: string
    public created: Date
}

export class CaracterResponse extends Response{
    public results: Caracter[];
    public info: Info;

}
abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}

    abstract getSepia(): void;
}

class TakePortrait extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("getSepia method called");
    }
}

let takePortrait = new TakePortrait("portrait", "portrait", 10);

takePortrait.getSepia();

// class ErrorRes {
//     constructor(public status: 400, public error: string) {}
// }

// type ErrorRes = { status: 400; error: string };

// type Res = { status: 200; data: string } | ErrorRes;

// function isErrorResponse(obj: Res): obj is ErrorRes {
//     return obj.status === 400;
//     // return obj instanceof ErrorRes;
// }

// function doSomething(res: Res) {
//     if (isErrorResponse(res)) {
//         res.status;
//     }
// }

abstract class Res {
    constructor(public status: 200 | 400) {}
}
class ErrorRes extends Res {
    constructor(public status: 400, public error: string) {
        super(status);
    }
}
class SuccessRes extends Res {
    constructor(public status: 200, public body: string) {
        super(status);
    }
}

function isErrorResponse(obj: Res): obj is ErrorRes {
    return obj instanceof ErrorRes;
}

function doSomething(res: Res) {
    if (isErrorResponse(res)) {
        res.status;
    }
}


let l1 = [];
let l2 = [0];

let mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return;

    if (l1.length === 0 && l2.length === 0) {
        console.log([])
        return;
    }
    if (l1.length === 0) {
        console.log(l2);
        return;
    }
    if (l2.length === 0) {
        console.log(l1);
        return;
    }

    let newArray = [];

    let iterationsL1 = 0;
    let iterationsL2 = 0;

    while(iterationsL1 < l1.length && iterationsL2 < l2.length) {

        if (l1[iterationsL1] < l2[iterationsL2]) {
            newArray.push(l1[iterationsL1]);
            iterationsL1++;
        } else {
            newArray.push(l2[iterationsL2]);
            iterationsL2++;
        }
    }

    if (iterationsL1 < l1.length) {
        for (let i = iterationsL1; iterationsL1 < l1.length; iterationsL1++ ) {
            newArray.push(l1[iterationsL1]);
        }
    } else {
        for (let i = iterationsL2; iterationsL2 < l2.length; iterationsL2++ ) {
            newArray.push(l1[iterationsL2]);
        }
    }

    console.log(newArray);
};

mergeTwoLists(l2);
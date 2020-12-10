export const object_to_array = (object) => {
    const arr = []
    for (const key in object) if (object.hasOwnProperty(key)) arr.push(object[key]);
    return arr
}
export const randomString = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}
export const randomROOMID = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4().toUpperCase();;
}

export const check_Win = (table, WIDTH, index, player) => {
    //check theo phuong ngan
    var index1 = index, index2 = index
    var limit_LEFT = index - index % WIDTH;
    var limit_RIGHT = limit_LEFT + WIDTH - 1;
    var tong = 1;

    while (index1 > limit_LEFT) {
        index1--
        if (table[index1] === player) tong++
        else break
    }
    while (index2 < limit_RIGHT) {
        index2++
        if (table[index2] === player) tong++
        else break
    }
    if (tong >= 5) return true
    //check theo phuong thang dung
    var index1 = index, index2 = index
    var limit_TOP = index % WIDTH;
    var limit_BOTTOM = limit_TOP + (WIDTH - 1) * WIDTH;
    var tong = 1;

    while (index1 > limit_TOP) {
        index1 -= WIDTH
        if (table[index1] === player) tong++
        else break
    }
    while (index2 < limit_BOTTOM) {
        index2 += WIDTH
        if (table[index2] === player) tong++
        else break
    }
    if (tong >= 5) return true
    //check theo phuong duong cheo chinh
    var index1 = index, index2 = index
    var stt1 = true, stt2 = true
    var tong = 1;

    while (stt1) {
        index1 -= (WIDTH + 1)
        console.log(index1);
        for (var i = 0; i < WIDTH; i++) {
            if (index1 === i || index1 === i * WIDTH) stt1 = false;
        }
        if (index1 > 0) {
            if (table[index1] === player) tong++
            else break
        } else break
    }
    while (stt2) {
        index2 += (WIDTH + 1)
        for (var i = 0; i < WIDTH; i++) {
            if (index2 === ((WIDTH * i) + (WIDTH - 1)) || index2 === (WIDTH - 1) - i) stt2 = false
        }
        if (index2 > 0 && index2 < WIDTH * WIDTH) {
            if (table[index2] === player) tong++
            else break
        } else break
    }
    if (tong >= 5) return true;
    //check theo phuong duong cheo phu
    var index1 = index, index2 = index
    var stt1 = true, stt2 = true
    var tong = 1;

    while (stt1) {
        index1 -= (WIDTH - 1)
        console.log(index1);
        for (var i = 0; i < WIDTH; i++) {
            if (index1 === i || index1 === ((WIDTH * i) + (WIDTH - 1))) stt1 = false;
        }
        if (index1 > 0) {
            if (table[index1] === player) tong++
            else break
        } else break
    }
    while (stt2) {
        index2 += (WIDTH - 1)
        for (var i = 0; i < WIDTH; i++) {
            if (index2 === i * WIDTH || index2 === (WIDTH - 1) - i) stt2 = false
        }
        if (index2 > 0 && index2 < WIDTH * WIDTH) {
            if (table[index2] === player) tong++
            else break
        } else break
    }
    if (tong >= 5) return true

    return false
}
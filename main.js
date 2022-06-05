let h, w, d, price = 0;

const box1 = {
    h,
    w,
    d,
    price,
};

const box2 = {
    h,
    w,
    d,
    price,
};

const box3 = {
    h,
    w,
    d,
    price,
};

const item = {
    h,
    w,
    d,
}

function createbox(box, h, w, d) {
    box.h = h;
    box.w = w;
    box.d = d; 
    box.price = box.h*box.w*box.d;
} 

function createitem(item, h, w, d) {
    item.h = h;
    item.w = w;
    item.d = d; 
} 

createbox(box1, 20, 31, 41);
createbox(box2, 21, 22, 23);
createbox(box3, 20, 30, 40);
createitem(item, 21, 23, 23);

function boolean1(box, item) {
    return ((item.h > box.h) && (item.h > box.w) && (item.h > box.d)) || ((item.w > box.h) && (item.w > box.w) && (item.w > box.d)) ||
           ((item.d > box.h) && (item.d > box.w) && (item.d > box.d));
}

function boolean2(box, item) {
    return ((box.h < item.h) && (box.h < item.w) && (box.h < item.d)) || ((box.w < item.h) && (box.w < item.w) && (box.w < item.d)) ||
            ((box.d < item.h) && (box.d < item.w) && (box.d < item.d));
}

function boolean3(box, item) {
    return (((item.h > box.h) && (item.h > box.w)) || ((item.h > box.h) && (item.h > box.d)) || ((item.h > box.w) && (item.h > box.d)) &&
            ((item.w > box.h) && (item.w > box.w)) || ((item.w > box.h) && (item.w > box.d)) || ((item.w > box.w) && (item.w > box.d))) ||

            (((item.h > box.h) && (item.h > box.w)) || ((item.h > box.h) && (item.h > box.d)) || ((item.h > box.w) && (item.h > box.d)) &&
            ((item.d > box.h) && (item.d > box.w)) || ((item.d > box.h) && (item.d > box.d)) || ((item.d > box.w) && (item.d > box.d))) ||
            
            (((item.w > box.h) && (item.w > box.w)) || ((item.w > box.h) && (item.w > box.d)) || ((item.w > box.w) && (item.w > box.d)) &&
            ((item.d > box.h) && (item.d > box.w)) || ((item.d > box.h) && (item.d > box.d)) || ((item.d > box.w) && (item.d > box.d)));

}

function isplaced(box, item) {
    if (boolean1(box, item) || boolean2(box, item) || boolean3(box, item)) {
            return false;
        }  
    return true;    
}

function namebox() {
    let pricebox = 0;
    if (isplaced(box1, item)) {
        console.log('cargo placed in box1');
        pricebox = box1.price;
    }
    if (isplaced(box2, item)) {
        console.log('cargo placed in box2');
        if ((pricebox > box2.price) || (pricebox === 0)) {
            pricebox = box2.price;
        }
    }
    if (isplaced(box3, item)) {
        console.log('cargo placed in box3');
        if ((pricebox > box3.price) || (pricebox === 0)) {
            pricebox = box3.price;
        }
    }
    if (pricebox === 0) {
        console.log('cargo in not placed in anyone box');
    }
    return pricebox;
}

function comparisonbox() {
    let pricebox = namebox();
        if (pricebox === box1.price) {
            console.log('the best box is box1');
        }
        if (pricebox === box2.price) {
            console.log('the best box is box2');
        }
        if (pricebox === box3.price) {
            console.log('the best box is box3');
        }
}

comparisonbox();


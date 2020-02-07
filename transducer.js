const compose = (...fns) => stepFn => 
        fns.reduceRight((memo, item) => item(memo), stepFn);

const map = mapFn => stepFn => 
    (memo, item) => stepFn(memo, mapFn(item));

const filter = predicatFn => stepFn => 
    (memo, item) => predicatFn(item) ? stepFn(memo, item) : memo;

const isEven = (num) => num % 2 === 0;
const doubleThat = (num) => num * 2;

const evenDoubleTransformer = compose(
    filter(isEven),
    map(doubleThat)
);

const arrayConcat = (memo, item) => memo.concat([item]); // our "stepFn"
const transformer = evenDoubleTransformer(arrayConcat);

const list = [1,2,3,4,5,6,7,8,9].reduce(transformer, []); // [ 4, 8, 12, 16 ]

console.log(list);
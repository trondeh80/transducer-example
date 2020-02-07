const arrayConcat = (memo, item) => memo.concat([item]);

const compose = (...fns) => stepFn => fns.reduceRight((memo, item) => item(memo), stepFn);

const map = mapFn => stepFn => (memo, item) => stepFn(memo, mapFn(item));
const filter = predicatFn => stepFn => (memo, item) => predicatFn(item) ? stepFn(memo, item) : memo;

const isEven = (num) => num % 2 === 0;
const doubleThat = (num) => num * 2;

const evenFlowTransformer = compose(
    filter(isEven),
    map(doubleThat)
);

const transformer = evenFlowTransformer(arrayConcat); // Pearl Jam

const list = [1,2,3,4,5,6,7,8,9].reduce(transformer, []);

console.log(list);
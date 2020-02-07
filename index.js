const list = [{ a:12 }, { a:16 },{ a:18 },{ a:19 }];

const arrayConcat = (memo, item) => memo.concat([item]);
const compose = (...fns) => stepFn => fns.reduceRight((memo, reduceFn) => reduceFn(memo), stepFn);

const map = mapFunction => step =>
    (memo, item) => step(memo, mapFunction(item));

const filter = predicate => step =>
    (memo, item) => predicate(item) ? step(memo, item) : memo;

const isOdd = (value) => (value.a % 2);
const doDouble = (item) => ({ a: item.a * 2 });

const isOddTransformer = compose(
    filter(isOdd),
    map(doDouble)
);

const transformer = isOddTransformer(arrayConcat);

const res = list.reduce(transformer, []);

console.log(res);

const marvel_heroes = ['Ironman','Captain America','Hulk']
const dc_heroes = ['Superman','Batman','Green_lantern']

// marvel_heroes.push(dc_heroes)

// console.log(JSON.stringify(marvel_heroes));

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(JSON.stringify(all_heroes));


// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(JSON.stringify(all_new_heroes));


// const ano_arr = [1,2,3,[4,5,6,],7,[7,8,[4.5]]]

// const real_ano_arr = ano_arr.flat(Infinity)

// console.log(JSON.stringify(real_ano_arr));

// console.log(Array.isArray([1,2,3,]));
// console.log(typeof Array.isArray([1,2,3,]));
// console.log(JSON.stringify(Array.from('Eeshansh')));
// console.log(JSON.stringify(Array.from({name: 'Eeshansh'}))); //this is the special case where Array.from cannot make an Array as there is a object with Key Value Pair

let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(JSON.stringify(Array.of(score1, score2, score3)));



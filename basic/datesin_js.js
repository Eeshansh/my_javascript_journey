// Dates

// let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());


// let chosen_date = new Date(2025, 9, 18, 19, 51);

// // console.log(chosen_date.toDateString());
// console.log(chosen_date.toLocaleString());

let mycreatedate = new Date('2025-10-18')
let mytimestamp = Date.now()

// // console.log(mytimestamp);
// // console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()

// console.log(newdate.getFullYear());
console.log(newdate.getDate());

newdate.toLocaleString('default',{
    weekday: 'long',
})

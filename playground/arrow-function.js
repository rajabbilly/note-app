var square = x => x*x;
console.log(square(9));

var user = {
    name: 'Rajab Billy',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHilAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHilAlt(1,2,3);
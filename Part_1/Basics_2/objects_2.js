const tinder = new Object(); //--> single ton Object
const tinderUser = {};

// console.log(tinder); //{}
// console.log(tinderUser); //{}

tinder.id = "123abs";
tinder.name = "Akshat";
tinder.last_name = "Janhid";

// console.log(tinder);//{ id: '123abs', name: 'Akshat', last_name: 'Janhid' }

const regularUser = {
  email: "aj@mail.com",
  fullName: {
    userName: {
      firstName: "Akhil",
      lastName: "Jaganathan",
    },
  },
};

// console.log(regularUser.fullName.userName.lastName);
//Jaganathan

const obj_1 = { 1: "a", 2: "b" };
const obj_2 = { 3: "c", 4: "d" };

const obj_3 = { obj_1, obj_2 };
// console.log(obj_3); //{ obj_1: { '1': 'a', '2': 'b' }, obj_2: { '3': 'c', '4': 'd' } }

const obj_4 = Object.assign({}, obj_1, obj_2);
// console.log(obj_4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Generally the mean of Object.assign is to adding the source in the target
//Object.assign(target,source);
//so if there is lot more objects are there then
//it is good practice to assign an empty{} which is working as target at first so that
//all the objects and merge in that empty Object{}

const obj_5 = { ...obj_1, ...obj_2 };
console.log(obj_5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//if data is coming from backend
const users = [
  {
    userId: 0,
    firstName: "John",
  },
  {
    userId: 0,
    firstName: "John",
  },
  {
    userId: 0,
    firstName: "John",
  },
];

users[0].userId;

// console.log(tinder); //{ id: '123abs', name: 'Akshat', last_name: 'Janhid' }
// console.log(Object.keys(tinder)); //[ 'id', 'name', 'last_name' ]
// console.log(Object.values(tinder)); //[ '123abs', 'Akshat', 'Janhid' ]

// console.log(tinder.hasOwnProperty("last_name")); //true

const course = {
  name: "js in hindi",
  price: 999,
  instructor: "Hitesh",
};

// course.instructor
//this is quite big method

//instead we can use Destructure method
const { instructor } = course;
const { instructor: teacher } = course;
console.log(instructor); //Hitesh
console.log(teacher); //Hitesh

//JSON
// {
//     name:"akshat",
//     course:"js"
// }


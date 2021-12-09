var courses = [
    {
        id:1,
        name:'JavaScript',
        coin:250,
    },
    {
        id:2,
        name:'HTML CSS',
        coin:0,
    },
    {
        id:1,
        name:'ReactJS',
        coin:200,
    },
    {
        id:1,
        name:'NodeJS',
        coin:0,
    }
];
// forEach 
courses.forEach(function(course){
    console.log(course)
});

//every 
var isFree= courses.every(function(course,index){
    return course.coin===0
})
console.log(isFree)

//some
var isFree= courses.some(function(course,index){
    return course.coin===0
})
console.log(isFree)


//map
function courseHandler(course,index){
    return {
        id:course.id,
        name:`Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText:`Gia: ${course.coin}`,
    }
};
var newCourse= courses.map(courseHandler);
console.log(newCourse)

//Filter 
var filterCourses = courses.filter(function(course,index,array){
    return course.coin>700;
});
console.log('Filter',filterCourses);

//find all courses
var course= courses.find(function(course,index){
    return course.name==="NodeJS"
})
console.log(course)

//Prototype methods
function User(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
User.prototype.className="18 CLA";
User.prototype.getClassName = function(){
    return this.className;
}
var user= new User('Nairubi',"Cam Tu");
console.log(user.className);
console.log(user.getClassName());
console.log(user);

// JSON
// var json='["Javascript","PHP"]';
var json='{"name":"Nairubi Cam Tu","age":18}';
// //  var a='1';
const obj= JSON.parse(json);

console.log(JSON.stringify(obj))




// PROMISE
var promise= new Promise(
    //Executor
    function(resolve,reject) {
        resolve();
    }
);
promise
    .then(function(){
        console.log("success")
    })
    .catch(function(){
        console.log("fail")
    })
    .finally(function(){
        console.log("done")
    });

//IIFE
;(function(message){
    console.log("Message: " + message)
})('Chao bạn')

const app=(function(){
    const cars=[]
    return {
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        }

    }
})()
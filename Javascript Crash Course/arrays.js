let arr = [20, 30, 40, 50, 100];

console.log(arr[0]); //First array item

console.log(arr[arr.length - 1]); //Last array item

//Add new array element
arr.push(200);

let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    //array filter
    return true;
  }
});

let otherNewArr = arr.filter((element) => element < 100);

console.log(arr);
console.log(newArr);
console.log(otherNewArr);

console.log("");

let grades = ["A", "B", "C", "F", "A", "S", "F", "B+", "F", "A"];

let nofail = grades.filter((element) => element != "F");

let nofailcomplex = grades.filter((element) => {
  if (element != "F") {
    return true;
  }
});

console.log(grades);
console.log(nofail);
console.log(nofailcomplex);

let goodGrades = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== "F") {
    goodGrades.push(grades[i]);
  }
  console.log(grades[i]);
}

console.log(goodGrades);

let newArray = arr.map((element) => "wow");

console.log(newArray);

let users = [
  {
    username: "Hod",
    email: "hod@gmail.com",
    password: "hod12345",
    userid: "3928",
    subscriptionStatus: "VIP",
    tasksCompleted: [0, 1, 2, 3, 4],
  },
  {
    username: "Rob",
    email: "Rob@gmail.com",
    password: "Rob12345",
    userid: "9201",
    subscriptionStatus: "Basic",
    tasksCompleted: [0, 1, 2],
  },
  {
    username: "Gary",
    email: "Gary@msn.com",
    password: "G@ry",
    userid: "7815",
    subscriptionStatus: "VIP",
    tasksCompleted: [0, 1, 2, 3, 4, 5],
  },
];

function register(user){
    console.log(user)
    users.push(user)
}

register({
   username: "Larry", 
   email: "Larry@hotmail.com", 
   password: "L99RRY", 
   userid: "1294", 
   subscriptionStatus: "Basic",
   tasksCompleted: [0,1,2,3,4,5,6,7,8]
})


function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email){
        console.log(users[i]);
        if(users[i].password === password){
            console.log("log the user in - details are correct")
        }
        else{
            console.error("incorrect password")
        }
        return;
    }
  }
  console.error("could not find user")
}

console.log("");

for (let i in users) {
  //show data of every user
  console.log(users[i].tasksCompleted.map((elem) => elem * 2));
}

login("hod@gmail.com", "hod12345");



//Filter and Map Questions





 const users=[
    {
      "id": "1",
      "username": "Prajjal Dhar",
      "useremail": "prajjal.dhar@gmail.com",
      "password": "Regex1234",
      "firstName": "Prajjal",
      "lastName": "Dhar",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 300000,
      "skills": ["Java", "Python"]
    },
    {
      "id": "2",
      "username": "Shakshi Karamchandani",
      "useremail": "shakshi.karamchandani@yahoo.com",
      "password": "shakshi123",
      "firstName": "shakshi",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 32,
      "city": "New Delhi",
      "salary": 500000,
      "skills": ["Python", "C++", "Java", "Os"]
    },
    {
      "id": "3",
      "username": "Kasish Karamchandani",
      "useremail": "Kasish.karamchandani@regexsoftware.com",
      "password": "Kasish123",
      "firstName": "Kasish",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Mumbai",
      "salary": 800000,
      "skills": ["DBMS", "C++", "Kotlin", "Os"]
    },
    {
      "id": "3",
      "username": "Kasish Karamchandani",
      "useremail": "Kasish.karamchandani@regexsoftware.com",
      "password": "Kasish123",
      "firstName": "Kasish",
      "lastName": "karamchandani",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Assam",
      "salary": 500000,
      "skills": ["DBMS", "C++", "Kotlin", "Os"]
    },
    {
      "id": "4",
      "username": "Sumanth Rao",
      "useremail": "sumanth.rao@gmail.com",
      "password": "Sumanth123",
      "firstName": "Sumanth",
      "lastName": "Rao",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Mumbai",
      "salary": 700000,
      "skills": ["Java", "JavaScript"]
    },
    {
      "id": "5",
      "username": "Ananya Singh",
      "useremail": "ananya.singh@yahoo.com",
      "password": "Ananya123",
      "firstName": "Ananya",
      "lastName": "Singh",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Goa",
      "salary": 600000,
      "skills": ["Python", "C++", "HTML", "CSS"]
    },
    {
      "id": "6",
      "username": "Vikram Patel",
      "useremail": "vikram.patel@regexsoftware.com",
      "password": "Vikram123",
      "firstName": "Vikram",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Assam",
      "salary": 900000,
      "skills": ["Java", "C++", "SQL", "React"]
    },
    {
      "id": "7",
      "username": "Riya Sharma",
      "useremail": "riya.sharma@gmail.com",
      "password": "Riya123",
      "firstName": "Riya",
      "lastName": "Sharma",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Jaipur",
      "salary": 450000,
      "skills": ["Python", "JavaScript", "Node.js"]
    },
    {
      "id": "8",
      "username": "Abhishek Verma",
      "useremail": "abhishek.verma@yahoo.com",
      "password": "Abhishek123",
      "firstName": "Abhishek",
      "lastName": "Verma",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 1000000,
      "skills": ["Java", "C#", "ASP.NET", "SQL Server"]
    },
    {
      "id": "9",
      "username": "Rajesh Patel",
      "useremail": "rajesh.patel@gmail.com",
      "password": "Rajesh123",
      "firstName": "Rajesh",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 1200000,
      "skills": ["Python", "C++", "Django", "React"]
    },
    {
      "id": "10",
      "username": "Priya Gupta",
      "useremail": "priya.gupta@regexsoftware.com",
      "password": "Priya123",
      "firstName": "Priya",
      "lastName": "Gupta",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Goa",
      "salary": 1800000,
      "skills": ["Java", "Spring", "Hibernate"]
    },
    {
      "id": "11",
      "username": "Amit Singh",
      "useremail": "amit.singh@yahoo.com",
      "password": "Amit123",
      "firstName": "Amit",
      "lastName": "Singh",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 1500000,
      "skills": ["C++", "Python", "HTML", "CSS"]
    },
    {
      "id": "12",
      "username": "Neha Sharma",
      "useremail": "neha.sharma@regexsoftware.com",
      "password": "Neha123",
      "firstName": "Neha",
      "lastName": "Sharma",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "New Delhi",
      "salary": 900000,
      "skills": ["Java", "JavaScript", "React", "Node.js"]
    },
    {
      "id": "13",
      "username": "Rahul Verma",
      "useremail": "rahul.verma@yahoo.com",
      "password": "Rahul123",
      "firstName": "Rahul",
      "lastName": "Verma",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "New Delhi",
      "salary": 700000,
      "skills": ["Python", "Django", "SQL"]
    },
    {
      "id": "14",
      "username": "Sakshi Mishra",
      "useremail": "sakshi.mishra@yahoo.com",
      "password": "Sakshi123",
      "firstName": "Sakshi",
      "lastName": "Mishra",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Assam",
      "salary": 650000,
      "skills": ["Java", "C++", "Spring", "Hibernate"]
    },
    {
      "id": "15",
      "username": "Rahul Kumar",
      "useremail": "rahul.kumar@gmail.com",
      "password": "Rahul123",
      "firstName": "Rahul",
      "lastName": "Kumar",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Kolkata",
      "salary": 900000,
      "skills": ["Python", "Django", "Flask", "SQLAlchemy"]
    },
    {
      "id": "16",
      "username": "Vishal Singh",
      "useremail": "vishal.singh@regexsoftware.com",
      "password": "Vishal123",
      "firstName": "Vishal",
      "lastName": "Singh",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Jaipur",
      "salary": 750000,
      "skills": ["Java", "Spring", "Hibernate"]
    },
    {
      "id": "17",
      "username": "Anjali Gupta",
      "useremail": "anjali.gupta@yahoo.com",
      "password": "Anjali123",
      "firstName": "Anjali",
      "lastName": "Gupta",
      "role": "customer",
      "gender": "Female",
      "age": 28,
      "city": "Jaipur",
      "salary": 450000,
      "skills": ["C++", "Python", "HTML", "CSS"]
    },
    {
      "id": "18",
      "username": "Sachin Patel",
      "useremail": "sachin.patel@regexsoftware.com",
      "password": "Sachin123",
      "firstName": "Sachin",
      "lastName": "Patel",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Hyderabad",
      "salary": 1900000,
      "skills": ["Java", "JavaScript", "React", "Node.js"]
    },
    {
      "id": "19",
      "username": "Kritika Verma",
      "useremail": "kritika.verma@regexsoftware.com",
      "password": "Kritika123",
      "firstName": "Kritika",
      "lastName": "Verma",
      "role": "admin",
      "gender": "Female",
      "age": 28,
      "city": "Kolkata",
      "salary": 2500000,
      "skills": ["Python", "Django", "SQL"]
    },
    {
      "id": "20",
      "username": "Aryan Mishra",
      "useremail": "aryan.mishra@gmail.com",
      "password": "Aryan123",
      "firstName": "Aryan",
      "lastName": "Mishra",
      "role": "customer",
      "gender": "Male",
      "age": 28,
      "city": "Hyderabad",
      "salary": 450000,
      "skills": ["Java", "C++", "Spring", "Hibernate"]
    }
  ]


  // 1. How would you get an array of user emails of all users who are admins?
// let adminEmails=users.filter(user=>user.role ==="admin").map(admin=>admin.useremail);
// console.log(adminEmails);



//2. How would you get an array of users who have the skill 'Python'?
// let usersWithPython = users.filter(user => user.skills.includes('Python'));

// console.log(usersWithPython);

// 3.How would you get an array of users who are older than 30?
// let older =users.filter(user=>user.age>30).map(age=>age.username)
// console.log(older)

// 4.How would you get an array of usernames of all users who live in 'Goa'?
    //  let place= users.filter(user=>user.city==="Goa").map(item=>item.username)
    //  console.log(place)

// 5.How would you get an array of users whose salary is greater than 1000000?
    //    let salary= users.filter(user=>user.salary<1000000).map(item=>item.username)
    //     console.log(salary);

// 6.How would you get an array of female users?.

//  let female= users.filter(user=>user.gender === 'Female').map(item=>item.username)
//  console.log(female)

// 7.How would you get an array of first names of all users who are customers?
//  let customer=users.filter(user=>user.role==="customer").map(item=>item.firstName)
//  console.log(customer);


// 8.How would you get an array of users who have 'JavaScript' as one of their skills?
//   let skills =users.filter(user=>user.skills.includes('JavaScript')).map(item=>item.username)
//          console.log(skills);

// 9.How would you get an array of users who live in 'Mumbai' and have a salary less than 800,000?
//  let salary=users.filter(user=>user.salary<800000)
//  console.log(salary);
// 10.How would you get an array of male users who are customers?
// let maleCustomers = users.filter(user => user.gender === "Male" && user.role === "customer");

// console.log(maleCustomers);
//find questions

// 11.Find QuestionsHow would you find the first user who lives in 'New Delhi'?
// let lives=users.find(user=>user.city==='New Delhi')
// console.log(lives);


// 12.How would you find the first user who has the skill 'React'?
// let skill=users.find(user=>user.skills.includes('React'))
// console.log(skill);

// 13.How would you find the first user who is an admin and lives in 'Jaipur'?
//    let firstuser=users.find(user=>user.role==='admin'&& user.city==='Jaipur')
//    console.log(firstuser);
// 14.How would you find the first user with a salary of exactly 900,000?
//  let exactsalary=users.find(user=>user.salary===900000)

//  console.log(exactsalary);
// 15.How would you find the first user whose username is 'Rahul Verma'?
//  let firstuser=users.find(user=>user.username==='Rahul Verma')
//  console.log(firstuser);
// Splice and Slice Questions

// 16.How would you remove the first user who lives in 'Kolkata' from the array?
// let index = users.findIndex(user => user.city === 'Kolkata');
// if (index !== -1) {
//     users.splice(index, 1);
// }

// console.log(users);
// 17.How would you get a new array containing the first 5 users?
    // let index=users.slice(0,5)
    // console.log(index);

// 18.How would you get a new array containing the last 5 users?
// let index=users.slice(-5)
// console.log(index);
// 19.How would you create a new array with users from the 3rd to the 7th position (inclusive)?
// let index=users.slice(2,7)
// console.log(index);
// 20.How would you replace the user at the 10th position with a new user object? 
// let newUser = {
//     "id": "21",
//     "username": "kailash",
//     "useremail": "new.user@kailash.com",
//     "password": "NewUser123",
//     "firstName": "New",
//     "lastName": "User",
//     "role": "customer",
//     "gender": "male",
//     "age": 25,
//     "city": "Pune",
//     "salary": 550000,
//     "skills": ["JavaScript", "React", "Node.js"]
//   };
  
 
//   users[9] = newUser;
  
//   console.log(users);






 
    
  
console.log("Testing connection");

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLang = users.filter(function (language) {
    return language.languages.length >= 3;
})
console.log("more than 3 languages")
console.log(threeLang)

// let threeLang = users.filter(user => user.languages.length >= 3);
// console.log(threeLang)

let emailAddress = users.map(function (emails){
    return emails.email
})
console.log(emailAddress);

let totalYears = users.reduce(function (result, exp) {
    return (result + exp.yearsOfExperience)
}, 0)
console.log(totalYears);

// let longEmail = users.reduce(function())


let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

pronoun.forEach((primero)=>{
    adj.forEach((segundo) =>{
       noun.forEach((tercero)=>{
        console.log(primero+''+segundo+''+tercero +'.com')
       });
    });
});


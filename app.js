let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

pronoun.filter((primero)=>{
    adj.filter((segundo) =>{
       noun.filter((tercero)=>{
        console.log(primero+''+segundo+''+tercero +'.com')
       });
    });
});


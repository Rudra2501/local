let myobj {
    name='';
    age='';
    
};
let myobj_serialized=JSON.stringify(myobj);
localStorage.setItem('myobj',myobj_serialized);
let myobj_deserialized=JSON.parse(localStorage.getItem('myobj'));
console.log(myobj_deserialized);
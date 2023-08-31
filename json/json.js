let obj1={name:"person1",age:5}
let obj2={age:5,name:"Person1"}
        if(JSON.stringify(obj1)===JSON.stringify(obj2))
        {
         console.log("ture")
        }
        else
        {
         console.log("false")
        }



        let object1=
        {
            name :"person1",
            age : 5,
        }
        console.log(Object.keys(object1));
        
        let object2=
        {
            age : 5,
            name :"person1",
        }
        console.log(Object.keys(object2));
        
        console.log(Object.keys(object2)==Object.keys(object2))

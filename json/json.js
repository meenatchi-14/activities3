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
        
        console.log(Object.keys(obj1)===Object.keys(obj2))
        console.log(JSON.stringify(obj1));
        console.log(JSON.stringify(obj2));
        console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
        console.log(obj1 === obj2);
 var objKey1 = Object.keys(obj1).sort();
 var objKey2 = Object.keys(obj2).sort();
 console.log(objKey1);
 console.log(objKey2);
 let ob1=objKey1.length;
 let ob2=objKey1.length;
 console.log(ob1 === ob2);
   
 if(ob1===ob2)
 {
    function check(o1,o2)
    {
        console.log(JSON.stringify(o1) === JSON.stringify(o2));
    }
    
 } 
  else{
    console.log("length not equal");
  } 
  check(obj1,obj2)

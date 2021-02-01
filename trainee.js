class employee{

    constructor(males,females,females2){
        this.males=males
        this.females=females
        this.females2=females2
        
    }
   sortfn(){
       
       let a1=this.males.concat(this.females,this.females2)
       console.log("Combined array:",a1)

    a1.sort(function(a,b){
        return new Date(a.DOB) - new Date(b.DOB);
      });
      console.log("Sorted array",a1)
 
   } 
   eighteenfn(){
    let a1=this.males.concat(this.females,this.females2)
  
    let n=a1.length
    console.log("User names of people with age >18:")
    for(let i=0;i<n;i++){
    var today = new Date();
    var birthDate = new Date(a1[i].DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    // console.log(age)
    if(age>=18){
        console.log(a1[i].user_name)
    }
       }
   }
}

let males=[{"name":"Jishnu","last_name":"Vishwanath","user_name":"neolivz","DOB":"20-JAN-1984","Place":"Thodupuzha"},{"name":"Binoy","last_name":"John","user_name":"carnage","DOB":"07-APR-1997","Place":"Ernakulam"},{"name":"Graph","last_name":"Overflow","user_name":"graphOverflow","DOB":"16-DEC-1993","Place":"Ernakulam"},{"name":"Shiniyas","last_name":"Khan","user_name":"shan","DOB":"17-NOV-2001","Place":"Ernakulam"}]
let females=[{"name":"Gauri","last_name":"Kumar","user_name":"lilwolf","DOB":"18-AUG-1994","Place":"Alappuzha"},{"name":"Smita","last_name":"Sen","user_name":"roho","DOB":"02-JAN-2000","Place":"Ernakulam"}]
let females2=[{"name":"Smita","last_name":"Sen","user_name":"roho","DOB":"02-JAN-2000","Place":"Ernakulam"}]
let obj = new employee(males, females,females2);
obj.sortfn()
obj.eighteenfn()


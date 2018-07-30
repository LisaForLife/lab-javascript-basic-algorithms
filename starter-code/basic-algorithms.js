

var hacker1= "Anais"
console.log("the driver's name is "+ hacker1 );
var hacker2= prompt("Write the navigator's name") ;
console.log("The navigator's name is "+ hacker2);

if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has "+ hacker1.length +" characters.")
}else if (hacker1.length<hacker2.length){
console.log("Yo, navigator has the longest name, it has "+ hacker2.length +" characters.")
}else 
console.log("wow you both got equally long names, "+ hacker1.length+ " characters!!"
)
var name="";
for ( var i =0; i<hacker1.length;i++){
  name+=hacker1[i].toUpperCase();
  name+= " ";
  }
  console.log(name)

var name2="";
for (var j = hacker2.length-1;j>=0;j--){
  name2+=hacker2[j];
  }
  console.log(name2)

if(hacker1<hacker2){
  console.log("The driver's name goes first");
  }else if (hacker1>hacker2){
    console.log("Yo, the navigator goes first definitely");
    }else {
      console.log("What?! You both got the same name?");
      }

// Palindrome
var myString=prompt("write something");     
var cleanString=myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
console.log(cleanString);
var subtring1;
var substring2;

substring1=cleanString.slice(0, Math.floor(cleanString.length/2));
console.log("substring 1 " + substring1)

if (cleanString.length % 2===0){
  substring2=cleanString.slice(cleanString.length/2,cleanString.length);
} else { substring2=cleanString.slice(Math.floor(cleanString.length/2)+1,cleanString.length);
} 

var name3="";
for (var j = substring2.length-1;j>=0;j--){
  name3+=substring2[j];
  }
substring2=name3;
console.log("substring 2 " + substring2)
if (substring1==substring2){
  console.log("Palindrome");
  } else {
 console.log("not plaindrome");
  } 

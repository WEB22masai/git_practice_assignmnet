// Check if the given string is palindrome or not
​
var num=121;
var a=""+num;
b="";
 for(i=a.length-1;i>=0;i--){
     b=b+a[i];
 }if (a==b){
   console.log(num, "is a Palindrome string");
 }else{
   console.log(num, "is not a Palindrome String");
 }
//function to find the factorial 
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log("The factorial of 5 is :",factorial(5));
//function ends


//function to find if the number is even 
function printEven(num) {
    if(num % 2 !== 0) {
      console.log(num,"is a odd number");
    }
	else {
	  console.log(num,"is a even number");
   } 
}
console.log("The number is :",printEven(2));
//function ends


//function to find the reverse of a number
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log("The reverse of the number is :",reverse_a_number(1838));
//function ends


//function to check if the number primeNo
function primeNo(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
console.log("The result of the function  is:",primeNo(17));
//function ends


//function for armstrong number
function armstrong(number)
{
	var remainder,sum=0;
	var n=number;
	while(n > 0)
	{
		remainder = n%10;
		sum=sum+(remainder*remainder*remainder);
		n=parseInt(n/10);
	}
	
	if(number===sum){
		console.log(number +"is a armsrtong number");
	}
	else{
		console.log(number +"is not a armstrong number");
	}
	return 0;
}
armstrong(150);
//function ends


//function for fibonacci number
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log("The fabonacci series is:",fibonacci_series(8));
//function ends


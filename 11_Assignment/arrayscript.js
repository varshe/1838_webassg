var arr = [2,5,1,7,9];
//function to print array
printArray(arr);
function printArray() {
	var string = " ";
	for (var i in arr)
	{
		string += " " + arr[i];
	}
	console.log("Array is: "+string);
}
//function ends

//function to print the sum
sumArray(arr);
function sumArray(arr) {             
    var s = 0;
    var i;
	for (i = 0; i < arr.length; i += 1) 
	   {
			s += arr[i];
	   }
	console.log('Sum is: '+s); 
}
//function ends


//function to print the minimun of the array
minArray(arr);
function minArray(arr) {	  
	var minValue = Math.min.apply(null, arr);
	console.log("Minimum value is: ",minValue); 
}
//function ends

//function to print the maximun of the array
maxArray(arr);
function maxArray(arr) {	 
	var maxValue = Math.max.apply(null, arr);
	console.log("Maximum value is: ",maxValue); 	 
}
//function ends
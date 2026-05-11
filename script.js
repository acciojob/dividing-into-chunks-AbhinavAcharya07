const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 let result =[];
let curr =[];
let sum =0;
for (let i = 0; i < arr.length; i++) {
   
	if (sum+arr[i]<=n) {
		curr.push(arr[i]);
       sum = sum+arr[i]
	}
   else{
    result.push(curr)
   sum =arr[i];
  curr = [arr[i]];
}

    
}
if(curr) result.push(curr)
return result;
  // Write your code here 
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

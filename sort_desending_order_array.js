let arr = [32,4,4,78,33,678,4];
for (let i = 0; i < arr.length - 1; i++) {
   for (let j = i + 1 ; j < arr.length; j++) {
  if (arr[i] < arr[j]) {
    temp = arr[i];
    arr [i] = arr[j];
    arr[j]= temp;
    
  }

   }
}
console.log(arr)


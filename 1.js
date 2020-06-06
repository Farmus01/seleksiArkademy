function divideAndSort(angka){
//split integer to array
    let arr= Array.from(String(angka));
    let newList;
//scan array
   for(i= 0; i<arr.length; i++){

    //remove zero
       if (arr[i]==0){
         arr.splice(i, 1);
       }
   }
    newList = arr.join("");
    //back to integer
    return parseInt(newList);
}
    let hasil = divideAndSort(593040894097);
    console.log(hasil);
    console.log(typeof(hasil));
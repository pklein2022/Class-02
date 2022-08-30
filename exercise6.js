function myFunction(num, length) {
    let myArray = []
    for (let i = 1; i <= length; i++) {
       myArray.push (num * i)
    }
    
    return myArray;  
  }
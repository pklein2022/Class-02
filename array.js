let people = [
    {
      name: "james",
      age: 34
    }, 
    {
      name: "John",
      age: 43
    },
    {
      name: "Jane",
      age: 23
    }
  ]
  for (let i = 0; i < people.length; i++) {
    //console.log (people[i].name)
    if (people[i].name === "John") {
        console.log("I found John!")
    } else if (people[i].name === "Jane") {
        console.log ("Hey Jane, do you know where John is?")
    } else {
      console.log ("Hey do you happen to know someone by the name of John?")
           }
  }
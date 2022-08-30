let food = [
   {
     name: "Pizza",
     price: 12.50
   }, 
   {
     name: "Tacos",
     price: 3.50
   },
   {
     name: "Pasta",
     price: 7.00
   }
 ]
 for (let i = 0; i < food.length; i++) {
   console.log (food[i].name)
  }

  food.forEach(renderfood);

  function renderfood(element, index, arr) {
      let li = document.createElement('li');
      document.getElementById('foodList').appendChild(li);
      li.innerHTML=li.innerHTML + element.name + "&nbsp;&nbsp;&nbsp;&nbsp; $" + element.price.toFixed(2);
  }
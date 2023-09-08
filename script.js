/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
*/


//Добавляем элемент к списку

    const ul = document.querySelector('#table');
    const input = document.getElementById('addArea');
    let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}
function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}
function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}

  

  
  let LiArray = document.getElementsByClassName("myLi").value;
  let arrayToStr = JSON.stringify(LiArray);
  
  localStorage.setItem('test', arrayToStr);



//Добавляем кнопку закрытия 
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "fa-solid fa-xmark close";
  myNodelist[i].appendChild(span);
}*/


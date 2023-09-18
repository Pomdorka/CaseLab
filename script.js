///window.onload = loadData;
var myNodelist = document.getElementsByTagName("LI");
var i;
var globalLength = 0;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//Добавляем элемент к списку
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addArea").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Введите название задачи:)");
    } else {
      document.getElementById("myUL").appendChild(li);

      
    }
    document.getElementById("addArea").value = "";
  
    const ul = document.getElementById("myUL").getElementsByTagName("li");
    let value = {
    };

    let j = 0;
    for (j = 0; j <= ul.length - 1; j++) {
      if (ul[j].innerHTML != ""){
        if (localStorage.getItem("test") != null)
          oldItem = localStorage.getItem("test");
        else
          oldItem = "";
        ///alert(oldItem);
        localStorage.removeItem("test");
        
        value[j] = {"setting" : ul[j].innerHTML};
        ///alert('test &{j}');
        //localStorage.setItem('test &{i}', ul[j].innerHTML);
        ///alert(value..setting);

      }
    }
    //globalLength = Object.keys(value).length;
    //alert("hi");
    
    //let tevirp = value[0];
    //console.log(globalLength);
var num = 200;
alert('hi &{num}');
    localStorage.setItem('test', JSON.stringify(value));
}

function loadData() {
  
  let value = JSON.parse(localStorage.getItem("test"));
  var size = Object.keys(value).length;
  //alert(value.first.setting);
  ///alert(size);
  for (let i = 0; i <= size - 1; i++) {
      //console.log(value[i].setting);
      const li = document.createElement("li");
      document.getElementById("myUL").appendChild(li).innerHTML = value[i].setting;
  }
}

function deleteLast(){
  var ul = document.getElementById('myUL');
  ul.removeChild(ul.lastElementChild);
}

function deleteFirst(){
  var ul = document.getElementById('myUL');
   ul.removeChild(ul.firstElementChild);
}

function markOdd(){ //нечетные
  var list = document.querySelectorAll('#myUL li');
  for (var i = 0; i < list.length; i++) {
    list[i].style.color = 'blue';
  }
}

function markEven(){ //четные
  var list = document.querySelectorAll('#myUL li');
  for (var i = 0; i < list.length; i++) {
    list[i].style.color = 'red';
  }
}



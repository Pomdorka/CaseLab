function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addArea").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Введите название задачи:)");
    } else {
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("BUTTON");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      span.onclick = function(){
///////////////////////////////////////////////////////////////////////////////////////////////
        var ul = this.parentElement.parentElement;
        const uls = ul.getElementsByTagName("li");
        ul.removeChild(this.parentElement);
        let value = {
        };
        if (document.getElementById("myUL") == ul){
          //console.log(ul.getElementByID("myUL"));
          localStorage.removeItem('test');
          for (j = 0; j <= uls.length - 1; j++) {
           value[j] = {"setting" : uls[j].innerHTML};
          }
          localStorage.setItem('test', JSON.stringify(value));
        } else{
          localStorage.removeItem('completedTest');
          for (j = 0; j <= uls.length - 1; j++) {
           value[j] = {"setting" : uls[j].innerHTML};
          }
          localStorage.setItem('completedTest', JSON.stringify(value));
        }
        
      };
///////////////////////////////////////////////////////////////////////////////////////////////
      var complete = document.createElement("button");
      complete.innerHTML = "Completed";
      //complete.setAttribute("type", "checkbox");
      complete.className = "checkBox";
      li.appendChild(complete);

      complete.onclick = function(){
          complete.classList.add("checked");
          oldValue = this.parentElement.innerHTML;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
          var ul = document.getElementById('myUL');
          var completedUL = document.getElementById('completedUL');
          ul.removeChild(this.parentElement);
          let value = {
          };
          let completedValue = {
          };
          const uls = document.getElementById("myUL").getElementsByTagName("li");
          const completedUls = document.getElementById("completedUL").getElementsByTagName("li");
          localStorage.removeItem('test');
          localStorage.removeItem('completedTest');
          completedValue[completedUls.length] = {"setting" : oldValue};
          for (j = 0; j <= uls.length - 1; j++) {
            value[j] = {"setting" : uls[j].innerHTML};
          }
          for (j = 0; j <= completedUls.length - 1; j++) {
            completedValue[j] = {"setting" : completedUls[j].innerHTML};
          }
          //completedValue[completedUls.length] = {"setting" : oldValue};
          localStorage.setItem('test', JSON.stringify(value));
          localStorage.setItem('completedTest', JSON.stringify(completedValue));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
          const li = document.createElement("li");
          li.classList.add("ready");

          document.getElementById("completedUL").appendChild(li).innerHTML = oldValue;

          button = li.getElementsByClassName("close");
          button[0].onclick = function(){
            const uls = document.getElementById("myUL").getElementsByTagName("li");
            var ul = document.getElementById('completedUL');
            ul.removeChild(this.parentElement);
            let value = {
            };
            let completedValue = {
            };
            const completedUls = ul.getElementsByTagName("li");
            localStorage.removeItem('test');
            localStorage.removeItem('completedTest');
            for (j = 0; j <= uls.length - 1; j++) {
              value[j] = {"setting" : uls[j].innerHTML};
            }
            localStorage.setItem('test', JSON.stringify(value));
            for (j = 0; j <= completedUls.length - 1; j++) {
              completedValue[j] = {"setting" : completedUls[j].innerHTML};
            }
            localStorage.setItem('completedTest', JSON.stringify(completedValue));
          };
      };

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
        localStorage.removeItem("test");
        value[j] = {"setting" : ul[j].innerHTML};
      }
    }
    localStorage.setItem('test', JSON.stringify(value));
}

function loadData() {
  let value = JSON.parse(localStorage.getItem("test"));
  let completedValue = JSON.parse(localStorage.getItem("completedTest"));
  var size = Object.keys(value).length;
  var completedSize = Object.keys(completedValue).length;
  for (let i = 0; i <= size - 1; i++) {
    const li = document.createElement("li");
    document.getElementById("myUL").appendChild(li).innerHTML = value[i].setting;
  }
  for (let i = 0; i <= completedSize - 1; i++) {
    const li = document.createElement("li");
    document.getElementById("completedUL").appendChild(li).innerHTML = completedValue[i].setting;
  }

  list = document.getElementById("myUL").getElementsByTagName('li');

  for (var i=0; i<list.length; i++){
    button = list[i].getElementsByClassName("close");
    checkButton = list[i].getElementsByClassName("checkBox");
    oldValue = checkButton[0].parentElement.innerHTML;
    checkButton[0].onclick = function(){
      checkButton[0].classList.add("checked");
          oldValue = checkButton[0].parentElement.innerHTML;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
          var ul = document.getElementById('myUL');
          ul.removeChild(this.parentElement);
          let value = {
          };
          const uls = document.getElementById("myUL").getElementsByTagName("li");
          localStorage.removeItem('test');
          for (j = 0; j <= uls.length - 1; j++) {
            value[j] = {"setting" : uls[j].innerHTML};
          }
          value[uls.length] = {"setting" : oldValue};
          localStorage.setItem('test', JSON.stringify(value));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
          const li = document.createElement("li");
          li.classList.add("ready");

          document.getElementById("myUL").appendChild(li).innerHTML = oldValue;

          button = li.getElementsByClassName("close");
          button[0].onclick = function(){

            var ul = document.getElementById('myUL');
            ul.removeChild(this.parentElement);
            let value = {
            };
            const uls = document.getElementById("myUL").getElementsByTagName("li");
            localStorage.removeItem('test');
            for (j = 0; j <= uls.length - 1; j++) {
              value[j] = {"setting" : uls[j].innerHTML};
            }
            localStorage.setItem('test', JSON.stringify(value));
          };
    }

    button[0].onclick = function(){
  ///////////////////////////////////////////////////////////////////////////////////////////////
  var ul = document.getElementById('myUL');
  ul.removeChild(this.parentElement);
  let value = {
  };
  const uls = document.getElementById("myUL").getElementsByTagName("li");
  localStorage.removeItem('test');
  for (j = 0; j <= uls.length - 1; j++) {
    value[j] = {"setting" : uls[j].innerHTML};
    //console.log(value[j]);
  }
  localStorage.setItem('test', JSON.stringify(value));
  };
///////////////////////////////////////////////////////////////////////////////////////////////
}
for (var i=0; i<list.length; i++){
  if (list[i].getElementsByClassName("checked").length)
    list[i].classList.add("ready");
  //console.log(list[i].getElementsByClassName("checked").length);
}
///`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````///
completedList = document.getElementById("completedUL").getElementsByTagName('li');
for (var i=0; i<completedList.length; i++){
  completedButton = completedList[i].getElementsByClassName("close");
  completedCheckButton = completedList[i].getElementsByClassName("checkBox");
  CompletedOldValue = checkButton[0].parentElement.innerHTML;
  completedCheckButton[0].onclick = function(){
    completedCheckButton[0].classList.add("checked");
    CompletedOldValue = completedCheckButton[0].parentElement.innerHTML;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        var ul = document.getElementById('completedUL');
        ul.removeChild(this.parentElement);
        let value = {
        };
        const uls = document.getElementById("completedUL").getElementsByTagName("li");
        localStorage.removeItem('completedTest');
        for (j = 0; j <= uls.length - 1; j++) {
          value[j] = {"setting" : uls[j].innerHTML};
        }
        value[uls.length] = {"setting" : CompletedOldValue};
        localStorage.setItem('completedTest', JSON.stringify(value));
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        const li = document.createElement("li");
        li.classList.add("ready");

        document.getElementById("completedUL").appendChild(li).innerHTML = CompletedOldValue;

        completedButton = li.getElementsByClassName("close");
        completedButton[0].onclick = function(){

          var ul = document.getElementById('completedUL');
          ul.removeChild(this.parentElement);
          let value = {
          };
          const uls = document.getElementById("completedUL").getElementsByTagName("li");
          localStorage.removeItem('completedTest');
          for (j = 0; j <= uls.length - 1; j++) {
            value[j] = {"setting" : uls[j].innerHTML};
          }
          localStorage.setItem('completedTest', JSON.stringify(value));
        };
  }

  completedButton[0].onclick = function(){
///////////////////////////////////////////////////////////////////////////////////////////////
var ul = document.getElementById('completedUL');
ul.removeChild(this.parentElement);
let value = {
};
const uls = document.getElementById("completedUL").getElementsByTagName("li");
localStorage.removeItem('test');
for (j = 0; j <= uls.length - 1; j++) {
  value[j] = {"setting" : uls[j].innerHTML};
  //console.log(value[j]);
}
localStorage.setItem('completedTest', JSON.stringify(value));
};
///////////////////////////////////////////////////////////////////////////////////////////////
}
///`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````///
    for (var i=0; i<completedList.length; i++){
      if (completedList[i].getElementsByClassName("checked").length)
      completedList[i].classList.add("ready");
      //console.log(completedList[i].getElementsByClassName("checked").length);
    }

}

function deleteLast(){
  if (document.getElementById("completedUL").getElementsByTagName("li").length != 0){
    console.log(document.getElementById("completedUL").getElementsByTagName("li").length);
    let value = {
    };
    const uls = document.getElementById("completedUL").getElementsByTagName("li");
    localStorage.removeItem('completedTest');
    for (j = 0; j <= uls.length - 2; j++) {
      value[j] = {"setting" : uls[j].innerHTML};
    }
    localStorage.setItem('completedTest', JSON.stringify(value));
    var ul = document.getElementById('completedUL');
    ul.removeChild(ul.lastElementChild);
  } else {
    let value = {
    };
    const uls = document.getElementById("myUL").getElementsByTagName("li");
    localStorage.removeItem('test');
    for (j = 0; j <= uls.length - 2; j++) {
      value[j] = {"setting" : uls[j].innerHTML};
    }
    localStorage.setItem('test', JSON.stringify(value));
    var ul = document.getElementById('myUL');
    ul.removeChild(ul.lastElementChild);
  }
}

function deleteFirst(){
  if (document.getElementById("myUL").getElementsByTagName("li").length != 0){
    let value = {
    };
    const uls = document.getElementById("myUL").getElementsByTagName("li");
    localStorage.removeItem('test');
    for (j = 0; j <= uls.length - 2; j++) {
      value[j] = {"setting" : uls[j+1].innerHTML};
    }
    localStorage.setItem('test', JSON.stringify(value));
    var ul = document.getElementById('myUL');
    ul.removeChild(ul.firstElementChild);
  } else {
    let value = {
    };
    const uls = document.getElementById("completedUL").getElementsByTagName("li");
    localStorage.removeItem('completedTest');
    for (j = 0; j <= uls.length - 2; j++) {
      value[j] = {"setting" : uls[j+1].innerHTML};
    }
    localStorage.setItem('completedTest', JSON.stringify(value));
    var ul = document.getElementById('completedUL');
    ul.removeChild(ul.firstElementChild);
  }
}

function markOdd(){ //нечетные
  var list = document.querySelectorAll('#myUL li');
  
  for (var i = 0; i < list.length; i++) {
    if (i%2 == 0 && list[i].classList.contains("markedBlue"))
      list[i].classList.remove("markedBlue");
    else if(i%2 == 0)
      list[i].classList.add("markedBlue");
  }
}

function markEven(){ //четные
  var list = document.querySelectorAll('#myUL li');

  for (var i = 0; i < list.length; i++) {
    if (i%2 == 1 && list[i].classList.contains("markedRed"))
      list[i].classList.remove("markedRed");
    else if(i%2 == 1)
      list[i].classList.add("markedRed");
  }
}
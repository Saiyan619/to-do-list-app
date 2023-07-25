let mainInput, toDos, pendingNum, clearBtn, darkMode, body, container, colos;
mainInput = document.querySelector(".main-input");
toDos = document.querySelector(".to-dos");
pendingNum = document.querySelector(".pending-number");
clearBtn = document.querySelector(".clear-all");
darkMode = document.querySelector(".darkmode");
body = document.querySelector(".body-con");
container = document.querySelector(".container");

mainInput.addEventListener("keyup", function (e) {
  let inputVal = mainInput.value;
  // console.log(inputVal);

  if (e.key === "Enter" && inputVal.length > 0) {
    listTag = ` <ul class="list">
        <div class="checkNlist-con" style = 'backgroundColor = black'>
        <div class="checkbox">
          <input type="checkbox" name="" id="" />
        </div>
        <li>${inputVal}</li>
    </div>
      </ul> 
  `;
    toDos.insertAdjacentHTML("beforeend", listTag);
    mainInput.value = "";
    pendingTaskCount();
  }
});

darkMode.textContent = 'LIGHT';
let listt = document.getElementsByTagName('li');
darkMode.addEventListener("click", function () {
  body.classList.toggle("active");
  container.classList.toggle("active");
  mainInput.classList.toggle('active');
  let colos = document.querySelectorAll(".checkNlist-con");
 
 
  // list.style.color = 'black';
  // colos.classList.toggle('active');

  if (darkMode.textContent == 'LIGHT') {
    darkMode.textContent = 'DARK';
    colos.style.backgroundColor = 'rgb(32, 32, 32)'
  } else if(darkMode.textContent == 'DARK'){
    darkMode.textContent = 'LIGHT';
    colos.style.backgroundColor = 'rgb(240, 238, 238)';
  }
  
});

const pendingTaskCount = function () {
  const tasks = toDos.querySelectorAll("li");
  const count = tasks.length;
  pendingNum.textContent = count.toString();
};



clearBtn.addEventListener("click", function () {
  toDos.innerHTML = "";
  pendingNum.textContent = "no";
});

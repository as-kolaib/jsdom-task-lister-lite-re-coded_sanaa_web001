document.addEventListener("DOMContentLoaded", () => {


  let submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById("new-task-description").value;
     let ul = document.getElementById("#tasks");
     let li = document.createElement('li');
     li.innerHTML =`${input} `;
     list.appendChild(li);
     console.log(ul);

});

});

let formEl = document.querySelector('form');
let tbodyEl = document.querySelector('tbody');
let tableEl = document.querySelector('table');

function onAddWebsite(e) {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    tbodyEl.innerHTML += `
                          <tr>
                              <td>${id}</td>
                              <td>${name}</td>
                              <td>${phone}</td>
                              <td>${email}</td>
                              <td><button class="deleteBtn">Delete</button></td>
                          </tr>
                         `
}

function onDeleteRow(e) {
    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
    let btn = e.target;
    btn.closest("tr").remove();
}

formEl.addEventListener('submit', onAddWebsite);
tableEl.addEventListener('click', onDeleteRow);
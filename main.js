document.querySelector("#getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true);

    let loadImage = document.getElementById("loading");

    loadImage.style.display = "block";

    setTimeout(() => {
        xhr.onload = function () {
            if (xhr.status === 200) {

                loadImage.style.display = "none";

                let employees = JSON.parse
                    (this.responseText);

                let html = "";

                employees.forEach(employee => {
                    html += `
                        <tr>
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.age}</td>
                            <td>${employee.retired}</td>
                        </tr>
        
                    `
                });
                document.querySelector("#employees").innerHTML = html;
            }
        }
        xhr.send();

    }, 1500);

}

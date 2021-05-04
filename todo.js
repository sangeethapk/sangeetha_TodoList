var count = 0;
function loadList() {


    loadPromise().then(function (xhttp) {

        try {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                //console.log(response[0].title);

                addtotable(response);
            }
        }
        catch (e) {
            console("eror");
        }

    }).catch(function (error) {

        console.log(error);
    });


}

function loadPromise() {
    return new Promise(function (resolve, reject) {

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {

            resolve(xhttp);
        }
        xhttp.onerror = function () {

            reject(new Error("Network error"));
        }

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();

        // addtotable(response);
        //resolve(response);



    });

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}









function addtotable(response) {


    for (let i = 0; i < response.length; i++) {

        if (response[i].completed == true) {
            markup = "<tr><td>" + response[i].title + "</td>" + "<td> <div> <input type=\"checkbox\" class=\"chk\" checked disabled=\"disabled\"></div></td></tr>";

        }
        else
            markup = "<tr><td>" + response[i].title + "</td>" + "<td> <div> <input type=\"checkbox\" class=\"chk\" onchange=\"changeValue(this)\"> </div></td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
    }



}
function changeValue(element) {

    console.log(element.checked);
    //element.value=true;
    element.disabled = true;
    count++;
    if (count == 5)
        alert("congrats you have finished five tasks....");
}
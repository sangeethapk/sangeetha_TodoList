$(document).ready(function () {
var count = 0;
$("#todolist").click(function loadList() {


    loadPromise().then(function (xhttp) {

        try {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                //console.log(response[0].title);

                // addtotable(response);
            }
        }
        catch (e) {
            console("eror");
        }
        console.log(response);
        return response;
    }).then(function (response) {

        console.log("addtotablle");
        let head = "<tr><th>Tasks</th><th class=\"chk2\">Completion Status</th></tr>";
        $("table tbody").append(head);

        for (let i = 0; i < response.length; i++) {

            if (response[i].completed == true) {

                markup = "<tr><td>" + response[i].title + "</td>" + "<td class=\"chk2\"> <div> <input type=\"checkbox\" class=\"chk\" checked disabled=\"disabled\"></div></td></tr>";

            }
            else
                markup = "<tr><td>" + response[i].title + "</td>" + "<td class=\"chk2\" \"chk\"> <div> <input type=\"checkbox\"> </div></td></tr>";
               // markup = "<tr><td>" + response[i].title + "</td>" + "<td class=\"chk2\"> <div> <input type=\"checkbox\" class=\"chk\" onchange=\"changeValue(this)\"> </div></td></tr>";
            tableBody = $("table tbody");
            tableBody.append(markup);
        }
        $('.chk2').css('text-align', 'center');
    })
        .catch(function (error) {

            console.log(error);
        });


});

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



$('body').on('change', 'input[type=checkbox]',function (e) {
   
   if(this.checked) {
         this.disabled = true;
         countCompletionPromise().then();
   }
 });


function countCompletionPromise() {

    return new Promise(function (resolve, reject) {

        count++;
        if (count == 5) {

            //alert("Congrats you have finished five tasks....");

            var modal = document.getElementById("myModal");
            // Get the button that opens the modal
            // var btn = document.getElementById("myBtn");
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            // After selecting five task
            modal.style.display = "block";


            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
           
           
        }
        resolve();

    });
}
});

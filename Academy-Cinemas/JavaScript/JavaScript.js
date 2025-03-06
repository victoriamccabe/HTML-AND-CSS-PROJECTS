//Initialize Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc +"'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets(){
    displaySelectedMovieOptions();
}

//Display Loading... on the Buy Tickets button

// Function to show "Loading..." state
function load() {
    // Hide the "Buy Tickets" button
    document.getElementById("press").style.display = "none";

    // Show the "Loading..." button
    document.getElementById("load").style.display = "inline-block";

    // After 3 seconds, run the buyTickets function
    setTimeout(function() {
        buyTickets();
        
        // Hide the "Loading..." button after buying tickets
        document.getElementById("load").style.display = "none";

        // Show the "Buy Tickets" button again (you can choose to hide it or keep it)
        document.getElementById("press").style.display = "inline-block";
    }, 3000); // 3000 milliseconds = 3 seconds
}

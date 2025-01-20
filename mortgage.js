window.addEventListener("load", function () {
    handleFormSubmit()
});


function handleFormSubmit() {
    const form = document.getElementById("mt-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        calculateMortgage(data);
    });
}

function calculateMortgage(data) {

    const { amount, term, interest} = data;

    const result = document.querySelector("#result");
    const error = document.querySelector("#error");

   
    result.classList.add("hidden");
    error.classList.add("hidden");
   

    if (amount == "" || term == "" || interest == "") {
        error.classList.remove("hidden")
        error.innerHTML = "Please fill in all fields";
        return;
    }

    else if (amount == 0 || term == 0 || interest == 0) {
        error.classList.remove("hidden")
        error.innerHTML = "Please fill in all fields values greater than 0";
        return;
    }

    result.classList.remove("hidden");
    const monthlyInterest = interest / 100 / 12;

    const months = term * 12;

    const monthlyPayment = amount * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -months));

    const totalPayment = monthlyPayment * months;

    const totalInterest = totalPayment - amount;


    document.querySelector("#monthly-payment").innerHTML = "£" + monthlyPayment.toFixed(2);

    document.querySelector("#total-payment").innerHTML = "£" + totalPayment.toFixed(2);

    document.querySelector("#total-interest").innerHTML = "£" + totalInterest.toFixed(2);


}
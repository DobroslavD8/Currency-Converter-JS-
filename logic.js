function calc(selectedCurrencyName, toCurrencyName) {

    var Convert = {

        "BGN" :
            {  
                "BGN" : 1,
                "USD" : 0.57,
                "EUR" : 0.51,
                "RUB" : 37.04,
                "GBP" : 0.44
            },

        "USD" :
            {
                "BGN" : 1.76,
                "USD" : 1,
                "EUR" : 0.90,
                "RUB" : 65.11,
                "GBP" : 0.78
            },

        "EUR" :
            {
                "BGN" : 1.96,
                "USD" : 1.11,
                "EUR" : 1,
                "RUB" : 72.44,
                "GBP" : 0.86
            },

        "RUB" :
            {
                "BGN" : 0.03,
                "USD" : 0.02,
                "EUR" : 0.01,
                "RUB" : 1,
                "GBP" : 0.01
            },

        "GBP" :
            {
                "BGN" : 2.26,
                "USD" : 1.29,
                "EUR" : 1.16,
                "RUB" : 83.78,
                "GBP" : 1
            }
    }
    return Convert[selectedCurrencyName][toCurrencyName];
}

function change(dropDown, i) {
    //getElementsByTagName - връща като масив всички тагове с посоченото име ;;; getElementById(i) връща целия div
    var calculated = document.getElementById(i).getElementsByTagName('input')[0]; //връща първия <input> - resultBox
    var forOne = document.getElementById(i).getElementsByTagName('input')[1]; //връща втория <input> - for1  

    var amount = document.getElementById("amountBox").value;
    var selectedCurrencyName = document.getElementById("currencyDropDown").selectedOptions[0].text;
    var toCurrencyName = dropDown.selectedOptions[0].text;

    calculated.value  = amount * calc(selectedCurrencyName, toCurrencyName);
    forOne.value  = calc(selectedCurrencyName, toCurrencyName);

    if (amount == "") {
        alert("Enter the amount...");
    }

    if (selectedCurrencyName == "-SELECT CURRENCY-") {
        alert("Select FROM currency!");
    }

    if (toCurrencyName == "-SELECT CURRENCY-") {
        alert("Select TO currency.")
    }
}

var i = 0;
function showToRow() {
    //клониране на реда
    var original = document.getElementById('ToRow');
    var clone = original.cloneNode(true);
    clone.id= ++i;
    original.parentNode.appendChild(clone);
    document.getElementById(i).style.display = "block";

    //getElementById(i) - взима реда, който искаме да променим
    dropDown = document.getElementById(i).getElementsByTagName('select')[0];

    dropDown.addEventListener('change', function() {
        change(dropDown, i);
    })
}

document.getElementById("amountBox").addEventListener('change', function() {
    var elements = document.getElementById("toReload").getElementsByTagName('select');

    //проверяваме и ъпдейтваме всички добавени редове
    for (j = 1; j < elements.length; j++) { 
        dropDown = document.getElementById(j).getElementsByTagName('select')[0];
        change(dropDown, j);
    }
})

document.getElementById("currencyDropDown").addEventListener('change', function() {
    var elements = document.getElementById("toReload").getElementsByTagName('select');

    for (j = 1; j < elements.length; j++){
        dropDown = document.getElementById(j).getElementsByTagName('select')[0];
        change(dropDown, j);
    }
})
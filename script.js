// في ملف script.js
document.getElementById("buyButton").addEventListener("click", function() {
    var form = document.getElementById("purchaseForm");
    var itemName = form.itemName.value;
    var itemPrice = form.itemPrice.value;

    if (itemName && itemPrice) {
        savePurchase(itemName, itemPrice);
    }
});

function savePurchase(itemName, itemPrice) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var previousPurchasesElement = document.getElementById("previousPurchases");
            var previousPurchases = JSON.parse(xhr.responseText);
            displayPreviousPurchases(previousPurchases, previousPurchasesElement);
        }
    };
    xhr.open("POST", "save_purchase.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "itemName=" + encodeURIComponent(itemName) + "&itemPrice=" + encodeURIComponent(itemPrice);
    xhr.send(data);
}

function displayPreviousPurchases(purchases, element) {
    var previousPurchases = "";
    purchases.forEach(function(purchase) {
        previousPurchases += "<p>" + purchase.date + ": اشتريت " + purchase.item + " بسعر " + purchase.price + "</p>";
    });
    element.innerHTML = previousPurchases;
}

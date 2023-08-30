<?php
$itemName = $_POST["itemName"];
$itemPrice = $_POST["itemPrice"];
$date = date("Y-m-d H:i:s");

$jsonString = file_get_contents("purchases.json");
$purchases = json_decode($jsonString, true);

$newPurchase = array(
    "item" => $itemName,
    "price" => $itemPrice,
    "date" => $date
);

$purchases[] = $newPurchase;

file_put_contents("purchases.json", json_encode($purchases));

header("Location: index.html"); // إعادة توجيه الصفحة إلى index.html
?>

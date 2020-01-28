<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thank you </title>
</head>
<body>
<h1>Thank you for the order</h1>

<pre>
    <?php

    var_dump($_POST);

    // Get the form data
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $address = $_POST['address'];
    $size = $_POST['size'];



    // Display the form data
    echo"<h1>Thank you for the order, $fname!</h1>";
    echo"<h2>Order Summary</h2>";
    echo"<p>Name: $fname $lname</p>";

    // Send email
    $fromAddress = "poppa@gmail.com";
    $toAddress = "semran@mail.greenriver.edu";
    $subject = "Order Confirmation";
    $header = "From: Poppa's Pizza <$fromAddress>";
    $message = "Your order has been confirmed";
    $message = "Name: $fname $lname";
    mail($toAddress, $subject, $message, $header);




    ?>
</pre>

</body>
</html>
<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'ChicagoVeg Main site Contact Form'; 
    $to = 'greenish_green@yahoo.com';
    $subject = 'Message from CVPP Contact Form';
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 

 session_start();


if ($_POST['submit']) {
     
    if($_POST['captcha'] != $_SESSION['digit']) { 
        header("Location: /#/contactusa?name=$name&message=$message&email=$email");
    } else if (mail ($to, $subject, $body, $from)) { 
       header('Location: /#/contactusa?issuccess=true');
    } else { 
        header('Location: /#/contactusa?issuccess=false');
    }
}

  session_destroy();
?>
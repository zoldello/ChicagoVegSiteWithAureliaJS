<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'ChicagoVeg Main site Contact Form'; 
$to = 'greenish_green@yahoo.com';
$subject = 'Message from CVPP Contact Form';
$captcha=$_POST['g-recaptcha-response'];
$body = "From: $name\n E-Mail: $email\n Message:\n $message";


if(!$captcha){

  echo '<h2>Please check the the captcha form.</h2>';
  exit;
}

$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdW6RQTAAAAAFjQ6gMirvZmRKvLjHX5Il01Lfpw&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);

if($response.success==false)
{
  echo '<h2>You are spammer ! Get the @$%K out</h2>';
}else
{
  echo '<h2>Thanks for posting comment.</h2>';
}

?>
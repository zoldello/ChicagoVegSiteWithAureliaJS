<?php
		$data = json_decode(file_get_contents('php://input'), true);
        $name;$email;$message;$captcha;$to;$from;$subject;$body;

        if(isset($data['name'])){
          $name=$data['name'];
        }if(isset($data['email'])){
          $email=$data['email'];
        }if(isset($data['message'])){
          $message=$data['mesage'];
        }if(isset($data['g-recaptcha-response'])){
          $captcha=$data['g-recaptcha-response'];
        }
        if(!$captcha){
          http_response_code(400);
          exit;
        }

        $from = 'ChicagoVeg Main site Contact Form'; 
		$to = 'greenish_green@yahoo.com';
		$subject = 'Message from CVPP Contact Form';
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";

		session_start();

        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdW6RQTAAAAAFjQ6gMirvZmRKvLjHX5Il01Lfpw&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==false)
        {
          echo '<h2>You are spammer ! Get the @$%K out</h2>';
        }else if (mail ($to, $subject, $body, $from))
        {
        	http_response_code(200);
        }else {
          http_response_code(400);
        }

        session_destroy();
?>
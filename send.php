<?php 
$name      = @trim(stripslashes($_POST['name'])); 
$email     = @trim(stripslashes($_POST['email']));
$phone     = @trim(stripslashes($_POST['phone']));
$msg       = @trim(stripslashes($_POST['msg'])); 
$subject   = 'Total Access Solutions Business Email'; //type your email subject here 
$to   	   = 'lokhin.wu@live.com';//replace with your email
$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();
// Build the email content.
$email_content  = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Message: $msg\n";
if ( empty($name) OR empty($msg) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    exit;
}
else{
	mail($to, $subject, $email_content, implode("\r\n", $headers));
}
die;
 ?>
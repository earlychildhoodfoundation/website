<?php
// Require PHP mailer library
require_once('PHPMailer-5.2.10/PHPMailerAutoload.php');

// Configure here:
$companyEmail = "jan@jandewilde.org";
// the email signature
$companyName = "Caplan Foundation for Early Childhood";
// the subject of the emails
$companySubject = "Submission from the Caplan Foundation for Early Childhood website";
// customer message
$companyMessage = "Thank you for contacting us. We will review your message and respond to any questions as soon as we can";
$companySignature = "Kind regards, \n\n The Caplan Foundation for Early Childhood";
$customerSubject =  "Application from the Foundation for Early Childhood website";

// Initialize initial variables
//$bodytext = "";
$customerName = $_POST['name'];
$customerMessage = $_POST['message'];

// prevent form from header injection
$customerEmail = str_replace("\n"," ",$_POST['email']);
$customerEmail = str_replace("\r"," ",$customerEmail);


// email validation
function validateEmail($emailaddress)
{
				if (filter_var($emailaddress, FILTER_VALIDATE_EMAIL)) {
								$bits = explode('@', $emailaddress);
								if (checkdnsrr($bits[1], "MX"))
								{
												return true;
								}
				}
				return false;
}

// Email to the company
$email = new PHPMailer();
$email->From      = $customerEmail;
$email->FromName  = $customerName;
$email->Subject   = $customerSubject;
$email->Body      = $customerMessage;
$email->AddAddress( $companyEmail );

// Add the attachments

if (array_sum($_FILES['application']['size']) < 25 * 1024 * 1024) {
	foreach(array_keys($_FILES['application']['name']) as $key) {
		$source = $_FILES['application']['tmp_name'][$key]; // location of PHP's temporary file for this.
		$filename = $_FILES['application']['name'][$key]; // original filename from the client
		$email->AddAttachment($source, $filename);
	}
} else {
	echo "Message not sent. Please keep attachments total filesize under 25MB";
	die();


}


// Confirmation email to the user
$confirmation = new PHPMailer();
$confirmation->From      = $companyEmail;
$confirmation->FromName  = $companyName;
$confirmation->Subject   = $companySubject;
$confirmation->Body      = $companyMessage . "\n\n" .  $companySignature;
$confirmation->AddAddress( $companyEmail );


// Server-side validation
// send the email if message variable is not empty
if (empty($customerName) || empty($customerEmail)) {
				echo("sending failed, name or email wasn't specified: <a href=\"/\">Try again</a>");
				die();
} elseif (! validateEmail($customerEmail)) {
				echo ("the email " . $customerEmail . " you specified is invalid. <a href=\"/\">Try again</a> ");
				die();
} else {
	if ($email->Send()) {
		$confirmation->send();
		echo "Success! A confirmation email has been sent to " . $customerEmail . ".";
	} else {
		$msg = "Mailer Error: " . $mail->ErrorInfo;
		echo $msg;
	}
}
?>

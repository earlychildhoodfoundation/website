<?php

/**
 *
 * email form handling (c)Jan De Wilde
 *
 */

// the email address you send from
$email = "info@earlychildhoodfoundation.org";


// the email signature
$signature = "Kind regards, \n\n The Caplan Foundation for Early Childhood";
// the subject of the emails
$subject = "Submission from the Caplan Foundation for Early Childhood website";
// customer message
$customer_message = "Thank you for contacting us. We will review your message and respond to any questions as soon as we can";

// **** you shouldn't be changing anything below this line... ****

// build the message and headers
$message="";

// process form data
foreach($_POST as $name => $value){
    $message.=$name.': '.htmlentities($value)."\n";
}

// prevent form from header injection
$from=str_replace("\n"," ",$_POST['email']);
$from=str_replace("\r"," ",$from);

// set the header
$header="From: ".$from."\n";
$header.="Reply-To: ".$from."\n";
$header.="MIME-Version: 1.0"."\n";
$header.="Content-type: text/plain; charset=utf-8";

//
$dtg=date('l dS \of F Y h:i:s A');

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

// send the email if message variable is not empty
if (empty($_POST['name']) || empty($from)) {
    echo("sending failed, name or email wasn't specified: <a href=\"/\">Try again</a>");
    die();
} elseif (! validateEmail($from)) {
    echo ("the email " . $from . " you specified is invalid. <a href=\"/\">Try again</a> ");
    die();
} else {
    mail($email, $subject, $message, $header);
}


// send confirmation email to customer
$header="From: ".$email."\n";
$header.="Reply-To: ".$email."\n";
$header.="MIME-Version: 1.0"."\n";
$header.="Content-type: text/plain; charset=utf-8";

$message = "Note: This is an automated response to confirm receipt of your message:\n\n";
$message.="Dear " . ucwords($_POST['name']) . ",\n\n";
$message.=$customer_message."\n\n";
$message.=$signature;
if ($_POST['message']) {
$message.="\n\nYour message on ".date("n/j/Y g:i a").":\n";
$message.=$_POST['message'];
};

mail($from, $subject, $message, $header);

print("<div>Thank you! A confirmation email has been sent to <div class=\"email-notice\">" . $from . "</div></div>");

exit();
?>

<?php
ini_set('display_errors', '1');
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'mail.webcheddar.ca';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'scott@webcheddar.ca';
    $mail->Password = 'Disco1279121212#2323';
    $mail->setFrom('scott@webcheddar.ca', 'Your Portfolio Website');
    $mail->addAddress('scott@webcheddar.ca', 'Portfolio Page');
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'Portfolio Page Contact Form';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['firstName']} {$_POST['lastName']}
Phone: {$_POST['phone']}
Message: {$_POST['message']}
EOT;
        if (!$mail->send()) {
            $msg = 'Sorry, something went wrong. Please try again later.';
        } else {
            echo '<script>window.location = "http://www.scottsutherland.info/thankyou.html"</script>';
        }
    } else {
        $msg = 'Share it with us!';
    }
?>
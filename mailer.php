<?php
ini_set('display_errors', '1');
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'mail.scottsutherland.info';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'hireme@scottsutherland.info';
    $mail->Password = 'gw!w5^Kq8!CT';
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
            $msg = 'Message sent! Thanks for contacting us.';
        }
    } else {
        $msg = 'Share it with us!';
    }
?>
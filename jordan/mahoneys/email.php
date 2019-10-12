<?php
//this sends emails from the contact form.
$contactEmail = "christophercox@mahoneysports.com";//This is where the contact form emails are sent to.
$send = false;
if(isset($_POST['name']) && $_POST['name'] != ""){
    if(isset($_POST['phone']) && $_POST['phone'] != ""){
        if(isset($_POST['email']) && $_POST['email'] != ""){
            if(isset($_POST['message']) && $_POST['message'] != ""){
                if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                    $send = true;
                }
            }
        }
    }
}
$emailMsg = "Name: {$_POST['name']}\n\nPhone: {$_POST['phone']}\n\nEmail: {$_POST['email']}\n\nMessage: {$_POST['message']}";

if($send){
    mail($contactEmail,"Contact Form Email",$emailMsg);
    echo "Success";die();
}else{
    die();
}
?>
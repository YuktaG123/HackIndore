<?php

include("connect.php");

$name = $_POST['name'];
$mobile = $_POST['mobile'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$email = $_POST['email'];
$agree = $_POST['agree'];
$role = $_POST['role'];


   if($role == 1){
   $insert = mysqli_query($connect, "INSERT INTO user (Name,Email,Mobile_Number,Password,role) VALUES ('$name' , '$email' , '$mobile' , '$password', '$role')");
   }
   if($role == 2){
   $insert = mysqli_query($connect, "INSERT INTO admin (Name,Email,Mobile_Number,Password,role) VALUES ('$name' , '$email' , '$mobile' , '$password', '$role')");
   }
   if($role == 3){
    $insert = mysqli_query($connect, "INSERT INTO employe (Name,Email,Mobile_Number,Password,role) VALUES ('$name' , '$email' , '$mobile' , '$password', '$role')");
   }
   if($insert){
    echo '
    <script>
        alert("Registration Successfull!");
        window.location = "../";
    </script>
    ';
   }
   else{
    echo '
    <script>
        alert("Some error occured!");
        window.location = "register.html";
    </script>
    ';
   }

?>
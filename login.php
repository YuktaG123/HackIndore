<?php

session_start();
   include("connect.php");
   $email =$_POST['email'];
   $password=$_POST['password'];
   $role=$_POST['role'];

   if($role == 1){
    $check = mysqli_query($connect, "SELECT * FROM user WHERE email ='$email' AND password='$password' ");
    if(mysqli_num_rows($check)>0){
        echo'
        <script>
        alert("Login Successfull!");
        </script> 
        ';   
    }
    }
    elseif($role == 2){
    $check = mysqli_query($connect, "SELECT * FROM admin WHERE email ='$email' AND password='$password'");
    if(mysqli_num_rows($check)>0){
        echo'
        <script>
        alert("Login Successfull!");
        </script> 
        ';   
    }   
    }
    elseif($role == 3){
    $check = mysqli_query($connect, "SELECT * FROM employe WHERE email ='$email' AND password='$password'");
    if(mysqli_num_rows($check)>0){
        echo'
        <script>
        alert("Login Successfull!");
        </script> 
        ';   
    }   
    }
   else{
    echo'
    <script>
    alert("Invalid Credientials or User not found!");
    window.location="../";
    </script> 
    ';
   }


?>
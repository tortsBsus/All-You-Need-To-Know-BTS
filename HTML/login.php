<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "finalprojectusers";
$EmailID=$_POST["EmailID"];
$Password=$_POST["Password"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT Email FROM users WHERE Email = '$EmailID'";
$result = mysqli_query($conn,$sql);
$count = mysqli_num_rows($result);
if($count==0)
{
    echo '<script>confirm("Welcome New User! Please Register Instead!"); window.location.href="Registration.html";</script>';
        
}
else
{
    $sql = "SELECT Email FROM users WHERE Email = '$EmailID' and Passwords ='$Password'";
    $rowz = mysqli_query($conn,$sql);
    $count = mysqli_num_rows($rowz);
    if($count!=1){ echo '<script>confirm("Incorrect Password! Please try again!");window.location.href="Registration.html";</script>';}
    else{   
            echo '<script>confirm("Welcome back!"); window.location.href="Level2.html";</script>';    
        }
}


$conn->close();
?>
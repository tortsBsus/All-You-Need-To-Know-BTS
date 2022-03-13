<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "finalprojectusers";
$EmailID=$_POST["EmailID"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "DELETE FROM users where Email = '$EmailID'";



if ($conn->query($sql) === TRUE) 
{
    echo '<script>confirm("Please Register again with a new password!"); window.location.href="Registration.html";</script>';
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "finalprojectusers";
$Fname=$_POST["FName"];
$Lname=$_POST["LName"];
$Year=$_POST["Year"];
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
if($count!=0)
{
    echo '<script>confirm("Already an Existing User! Please Login Instead!"); window.location.href="Registration.html";</script>';
        
}
else{
    $sql = "INSERT INTO users (FName, LName, Years, Email, Passwords) VALUES ('$Fname', '$Lname', '$Year','$EmailID','$Password')";

if ($conn->query($sql) === TRUE) 
{
    header("Location: Quiz.html"); 
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
$conn->close();
?>
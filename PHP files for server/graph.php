<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "xyz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sqlx = "SELECT * FROM testvalues ORDER BY id DESC LIMIT 1 ";
$result = $conn->query($sqlx);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
     $xout=$row["x"];$yout=$row["y"];$zout=$row["z"];$tout=$row["Timestamp"];
    }
} else {
    echo "0 results";
}

echo  json_encode(array("a" =>$xout,"b" =>$yout,"c" =>$zout,"d"=>$tout));
$conn->close();
?>

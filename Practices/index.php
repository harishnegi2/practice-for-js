<?php
$servername = "localhost";
$username = "root";   // XAMPP default
$password = "";       // default password blank होता है
$dbname = "studentdb";

// Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM students";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Student List</title>
</head>
<body>
  <h1>Student Records</h1>
  <table border="1" cellpadding="10">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
    <?php
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td>".$row["email"]."</td></tr>";
      }
    } else {
      echo "<tr><td colspan='3'>No records found</td></tr>";
    }
    ?>
  </table>
</body>
</html>

<?php
$conn->close();
?>

<?php
$servername = "localhost";  // Typically "localhost" for local development
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "students_detail";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO basic_details (student_name, mobile_no, interest_course, date_time, gender) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $student_name, $mobile_no, $interest_course, $date_time, $gender);

// Set parameters and execute
$student_name = $_POST['studentName'];
$mobile_no = $_POST['mobileNumber'];
$interest_course = $_POST['interestCourse'];
$date_time = $_POST['dateTime'];
$gender = $_POST['gender'];

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

<?php
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
<link rel="stylesheet" href="headerAndFooter.css">
<link rel="stylesheet" href="projectCssFile.css">
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">
<title>ADMIN PAGE</title>
</head>
<body class="admin">
	<!-- Header starts -->
<?php
    include 'head.php';
?>
<!-- Header Ends -->
<br><br><br><br><br><br>

<!-- Main Body starts -->

<div class="container">
	<div class="nav-bar">
	<h1 class="head1">TEACHER LOGIN</h1>
	<br><br>
</div>


<!-- form starts -->
<div>



<form method="post">
  <div class="form-group">
    <label for="ID">ID:</label>
    <input type="text"  class="form-control" name="TeacherID" placeholder="UserID" id="ID">
  </div>

  <div class="form-group pp">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" name="Password" placeholder="Enter password" id="pwd">
  </div>

  <button type="submit" name="LoginButton" class="btn btn-primary">Log In</button>
</form>

<?php

     include 'phpConnectionFile.php';

  if(isset($_POST['LoginButton']))
  {


    $_SESSION['User']=$_POST['TeacherID'];
    $_SESSION['Password']=$_POST['Password'];
    $str=$_SESSION['User'];
    $ptr=$_SESSION['Password'];

    $sql ="SELECT * FROM teacher where TeacherID='$str' AND Password='$ptr';";
    $result =mysqli_query($db_Object,$sql);
    $resultCheck =mysqli_num_rows($result);

    if($resultCheck!=0)
    {

    header("location:teachFunctions.php");

    }else{
			echo '<Script type="text/javascript">';
				echo 'alert("User Not Found")';
				echo '</script>';
    }

  }

?>



</div>




</div>
<!-- Main body ends -->
<br><br><br><br><br><br>
<!-- Footer Starts__-->
<?php
  include 'foot.php';
?>
</body>

</html>

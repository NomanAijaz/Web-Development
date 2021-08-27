<?php
include 'head.php';
include 'logOutFile.php';
session_start();
?>
<!DOCTYPE>
<html>
<head>

<link rel="stylesheet" href="headerAndFooter.css">
<link rel="stylesheet" href="projectCssFile.css">
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/glyphicon.css">
<title>Options</title>
</head>
<body class="fun">

	<!-- Header starts -->

<!-- Header Ends -->
<!-- Body starts -->
<div class="container">
	<div class="nav-bar">
		<h2>Your Options</h2>
</div>

<!-- Options start -->
<section class="row">

<div class="col-lg-4 col-md-3 courses">
	<div class="row">
	<div class="col-sm-4">
		<span class="glyphicon glyphicon-book"></span>
	</div>
	<div class="col-sm-8">
		<a href="http://localhost/LearnPHP/EnrollCourses.php"><h3 class="nums">PHP here</h3></a>
		<p>EnrollCourses</p>
	</div>
</div>
</div>


<div class="col-lg-4 col-md-3 courses">
	<div class="row">

		<!-- 2 anchors to put url in -->
	<div class="col-sm-4"><span class="glyphicon glyphicon-ok"></span></div>
	<div class="col-sm-8">
  <a href="http://localhost/LearnPHP/CourseStudentEnroll.php"><h3 class="nums">PHP here</h3></a>
		<p>Courses you are enrolled in</p>
	</div>

</div>
</div>

<div class="col-lg-4 col-md-3 courses">
	<div class="row">
	<div class="col-sm-4"><span class="	glyphicon glyphicon-pencil"></span></div>
	<div class="col-sm-8">
		<a href="http://localhost/LearnPHP/Grades.php"><h3 class="nums">PHP here</h3></a>
		<p>Your Grades</p>
	</div>
</div>
</div>

<div class="col-lg-4 col-md-3 courses">
	<div class="row">
	<div class="col-sm-4"><span class="	glyphicon glyphicon-search"></span></div>
	<div class="col-sm-8">
		<a href="http://localhost/LearnPHP/Withdraw.php"><h3 class="nums">Withdraw</h3></a>
		<p>withdraw courses</p>
</div>
	</div>

</div>
</section>



</div>

<?php


echo $_SESSION['UserName']."<br>";
echo $_SESSION['Password2'];
 ?>


<!-- Footer Starts__-->
<?php
include 'foot.php';
 ?>
<!-- Footer Ends -->


</body>
</html>

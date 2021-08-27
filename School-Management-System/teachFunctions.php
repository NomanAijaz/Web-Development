<?php
session_start();
include 'head.php';
include 'logOutFile.php';

?>
<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="headerAndFooter.css">
<link rel="stylesheet" href="projectCssFile.css">
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-4.3.1-dist/css/glyphicon.css">
<title>Options</title>
</head>
<body class="fun">

<br><br><br><br>

<!-- Body starts -->
<div class="container">
	<div class="nav-bar fun">
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
		<a href="http://localhost/LearnPHP/CoursesTeacherTeach.php"><h3 class="nums">Courses</h3></a>
		  <p>Courses You Teach</p>
	</div>
</div>
</div>


<div class="col-lg-4 col-md-3 courses">
	<div class="row">

		<!-- 2 anchors to put url in -->
	<div class="col-sm-4"><a href="http://localhost/LearnPHP/TeacherEnrolled.php"><span class="glyphicon glyphicon-ok"></span></a></div>
	<div class="col-sm-8">
		<a href="http://localhost/LearnPHP/TeacherEnrolled.php"><h3 class="nums">Courses Enrolled</h3></a>
		<p>Courses Enrolled</p>
	</div>

</div>
</div>

<div class="col-lg-4 col-md-3 courses">
	<div class="row">
	<div class="col-sm-4"><span class="	glyphicon glyphicon-pencil"></span></div>
	<div class="col-sm-8">
		<a href="http://localhost/LearnPHP/UploadMarks.php"> <h3 class="nums">Marks Upload</h3></a>
		<p>Upload marks</p>
	</div>
</div>
</div>

<div class="col-lg-4 col-md-3 courses">
	<div class="row">
	<div class="col-sm-4"><span class="	glyphicon glyphicon-search"></span></div>
	<div class="col-sm-8">
	<a href="http://localhost/LearnPHP/searchStudents.php">	<h3 class="nums">PHP here</h3></a>
		<p>Search a student data</p>
</div>
	</div>

</div>
</section>



</div>

<br><br><br><br><br><br>
<?php
include 'foot.php';
?>
</body>
</html>

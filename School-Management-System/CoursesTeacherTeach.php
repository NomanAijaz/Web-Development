<?php
include 'head.php';
session_start();
include 'logOutFile.php';

?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="projectCssFile.css">
	<title>CoursesTeacherTeach</title>
	<style>
  table th,td{
    border: 3px solid white;
    border-collapse: collapse;
  }

</style>

</head>
<body>
	<img src="uploadpic.jpg" alt="" style="width:100%; position:absolute" >
<br><br>
<div style="color: white; border:2px solid white; padding:50px; width:800px; margin-left:300px; border-radius:10px; position:absolute;">
	<br>

	<table style="font-size: 20px; text-align: center; width: 100%;">
		<tr>
			<th>TeacherID</th>
			<th>CourseID</th>
			<th>CourseName</th>
		</tr>

		<?php
		include 'phpConnectionFile.php';
		$str=$_SESSION['User'];

		$sql="SELECT * FROM courses where TeacherID='$str';";
		$result =mysqli_query($db_Object,$sql);
    	$resultCheck =mysqli_num_rows($result);

		if($resultCheck!=0)
		{
			while($row=mysqli_fetch_assoc($result)){
				echo "<tr><td>".$row['TeacherID']."</td>"."<td>".$row['CourseID']."</td>"."<td>".$row['CourseName']."</td><tr>";
			}
		}else{
			           echo '<Script type="text/javascript">';
                echo 'alert("No courses enrolled")';
                echo '</script>';

		}


		?>
	</table>

</div>



<h6 style="margin-top:600px;">.</h6>

<?php
include 'foot.php';
?>
</body>

</html>

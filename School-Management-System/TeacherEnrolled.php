<?php
    include 'head.php';
    session_start();
    include 'logOutFile.php';

?>
<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" href="projectCssFile.css">
	<title>
		StudentEnrollInCourses
	</title>

	<style>
  table th,td{
    color:white;
    padding: 10px;
    border: 3px solid white;
    border-collapse: collapse;}

</style>
</head>

<body>

  <img src="std.jpg" style="width:100%; position:absolute;" alt="">

    <br><br> <br>

	<div style="position:absolute; margin-left:350px; border: 2px solid white; padding:30px; border-radius:10px;">
	   <table style="font-family: monospace; color:white; text-align: center; width: 100%; font-size: 20px; ">


        <tr>
        <th>Teacher</th>
        <th>StudentID</th>
        <th>StudentName</th>
        <th>CourseID</th>
        <th>Course</th>
        <th>WithDraw</th>

      </tr>

      <?php

      include 'phpConnectionFile.php';

      $Str=$_SESSION['User'];

      $Query ="SELECT p.StudentID,R.FirstName,R.LastName,p.CourseID,p.CourseName,T.TeacherName,p.Withdraw from studentenrolledcourses p INNER JOIN courses q USING(CourseID) INNER JOIN teacher T ON q.TeacherID=T.TeacherID INNER JOIN registration R using(StudentID)  Where T.TeacherID='$Str';";

      $result=mysqli_query($db_Object,$Query);
      $ResultCheck=mysqli_num_rows($result);

      if($ResultCheck!=0)
      {

        while($row=mysqli_fetch_assoc($result))
        {
            echo "<tr><td>".$row['TeacherName']."</td>"."<td>".$row['StudentID']."</td>"."<td>".$row['FirstName']." ".$row['LastName']."</td>"."<td>".$row['CourseID']."</td>"."<td>".$row['CourseName']."</td>"."<td>".$row['Withdraw']."</td></tr>";

        }
        echo "</table>";
      }else{
        echo "Sorry No Enrollment";

      }
      ?>

      </table>


	</div>
  <br><br><br>
  <h6 style="margin-top:300px;">.</h6>
<?php
include 'foot.php';
?>

</body>

</html>

<?php
session_start();
include 'head.php';
include 'logOutFile.php';
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
<style>
  table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>

    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <div class="">
    <img class="BodyImg" style="float:left; position:absolute;" src="student_survey.jpg" alt="">

    <form class="formArea" style="margin-left:60px;"  method="post">
    <img style="height: 300px; width:400px; opacity:0.8; border-radius: 20px;" src="123.jpg">
     
    </form>
    </div>


    <div class="BodyBlock" style="float:right; border: 2px solid orange;">
      <br>
  <h1>Here Are Your Courses</h1>
    <br>

      <table style="font-family: monospace; text-align: center; width: 100%; font-size: 20px; ">
      
        <tr>
        <th>StudentID</th>
        <th>CourseID</th>
        <th>Course</th>
        <th>Teacher</th>
        <th>WithDraw</th>
      </tr>

      <?php

      include 'phpConnectionFile.php';

      $Student=$_SESSION['UserName'];

      $Query ="SELECT p.StudentID,p.CourseID,p.CourseName,T.TeacherName,p.Withdraw from studentenrolledcourses p INNER JOIN courses q USING(CourseID) INNER JOIN teacher T ON q.TeacherID=T.TeacherID  Where p.StudentID='$Student';";
      $result=mysqli_query($db_Object,$Query);
      $ResultCheck=mysqli_num_rows($result);
      
      if($ResultCheck!=0)
      {

        while($row=mysqli_fetch_assoc($result))
        {
            echo "<tr><td>".$row['StudentID']."</td>"."<td>".$row['CourseID']."</td>"."<td>".$row['CourseName']."</td>"."<td>".$row['TeacherName']."</td>".
            "<td>".$row['Withdraw']."</td>"."</tr>";  

        }
        echo "</table>";
      }else{
        echo "Sorry You are Not Enrolled in any Course";

      } 


      ?>
      
      </table>
  
    </div>

   

<?php
 include 'foot.php'; ?>
  </body>
</html>

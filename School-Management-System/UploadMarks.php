<?php
include 'head.php';
include 'logOutFile.php';

 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title>UploadMarks</title>
  </head>
  <body>
    <img src="update.jpg" style="width:100%; position:absolute;" alt="">
<br><br><br>
<div style="border:2px solid white; border-radius:10px; padding: 20px; margin-left:200px; text-align: center; position:absolute; ">
<form class="" method="post" style=" font-size: 20px; color:skyblue;">
StudentID  <input type="text" class="SubmitButton" style="background-color:white;" name="StudentID" value="">
<br><br><br>
CourseID <input type="text" name="CourseID" class="SubmitButton" style="background-color:white;" value="">
<br><br><br>
Marks <input type="text" name="Marks" class="SubmitButton" style="background-color:white;" value=""><br><br><br>
<select class="SubmitButton" name="Option">
  <option value="1stMid">1stMid</option>
  <option value="2ndMid">2ndMid</option>
  <option value="final">final</option>
  <option value="Assignment">Assignment</option>
  <option value="Quiz">Quiz</option>
  <option value="Sessionals">Sessionals</option>
</select>
<br><br><br>
<button type="submit" class="SubmitButton" name="UploadButton">Upload</button>

<?php
if(isset($_POST['UploadButton']))
{
  include 'UploadMarksPHPFile.php';
}
?>

</form>



</div>
<h6 style="margin-top:500px;">.</h6>

<?php
include 'foot.php';
 ?>
  </body>
</html>

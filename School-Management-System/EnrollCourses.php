<?php
include 'head.php';
include 'logOutFile.php';
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="">
      <img src="pic4.jpeg" style="width:1500px; position:absolute; opacity:0.6;" alt="">
    </div>

    <div class="">

      <form class="formArea" style="margin-left:350px; margin-top:60px; width:700px;"  method="post">

       <h1 style="color:orange;">CourseID</h1><br>
       <input class="CmsField" type="text" name="CourseID" placeholder="CourseID">
       <br><br>
        <h1 style="color:orange;">Course</h1><br>
        <input class="CmsField" type="text" name="CourseName" placeholder="CourseName">
         <br><br><br>


        <button class="SubmitButton" type="submit" name="EnrollButton">Enroll</button>
      </form>
    </div>

    <?php
    include 'NewEnrolledStudentsTablePhpFile.php';
    ?>


    <h6 style="margin-top:800px;">.</h6>
    <?php
    include 'foot.php';
     ?>
  </body>
</html>

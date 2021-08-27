<?php
session_start();
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

      <img style="height:650px; width:100%; position:absolute; opacity:0.5;" src="pic2.jpg" alt="">

      <div style="position:absolute; margin-left: 590px; margin-top:40px; font-family:cursive; background-color:grey; border: 3px solid orange; padding: 20px; border-radius:10px; font-size:20px;">
            <h2>Check your Grades</h2>
      </div>

      <div class="">
        <form class="formArea" style="margin-left:450px; margin-top: 150px;position:absolute; border:4px solid orange;" method="post">

                 <h1 style="color:black; background-color:grey; border: 2px solid orange;">CourseID</h1><br>
                 <input class="CmsField" type="text" name="CourseID" placeholder="CourseID">
                 <br><br>
                  <h1 style="color:black; background-color:grey; border: 2px solid orange;">Course</h1><br>
                  <input class="CmsField" type="text" name="CourseName" placeholder="CourseName">

                   <br><br><br>
                  <button class="SubmitButton" style="background-color:grey;" type="submit" name="CheckButton">Withdraw</button>
        </form>
      </div>

      <?php
      include 'phpConnectionFile.php';

      if(isset($_POST['CheckButton'])){

        $CourseID=$_POST['CourseID'];
        $CourseName=$_POST['CourseName'];
        $User =$_SESSION['UserName'];

        $sqlQuery ="Select * FROM studentenrolledcourses WHERE CourseID='$CourseID' AND StudentID='$User';";
        $result =     mysqli_query($db_Object,$sqlQuery);
        $resultCheck =mysqli_num_rows($result);

        if($resultCheck==1)
        {
          $sqlUpdateQuery="update studentenrolledcourses
            SET Withdraw=1
            where StudentID='$User' AND CourseID='$CourseID';";
          mysqli_query($db_Object,$sqlUpdateQuery);
          echo '<Script type="text/javascript">';
            echo 'alert("Withdraw Successful")';
            echo '</script>';
        }else {
          echo '<Script type="text/javascript">';
            echo 'alert("Sorry you are not Enrolled")';
            echo '</script>';
        }
      }


       ?>

    <h6 style="margin-top:600px;">.</h6>
    <?php
     include 'foot.php'; ?>
  </body>
</html>

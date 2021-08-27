<?php
session_start();
include 'head.php';
include 'logOutFile.php';

 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
<style>
  table th,td{

    border: 3px solid black;
    border-collapse: collapse;

  }

</style>

    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <img style="width:100%; height:600px; position:absolute;  opacity:0.6;" src="AEI1pK.jpeg" alt="">
    <div class="">
      <form class="formArea" style="margin-left:80px; margin-top: 140px; width:280px; position:absolute; border:6px solid black; opacity: 0.5;" method="post">

               <h1 style="color:white; background-color:black; border: 1px solid black;">CourseID</h1><br>
               <input class="CmsField" type="text" name="CourseID" placeholder="CourseID">
                 <br><br><br>


                <button class="SubmitButton" type="submit" name="CheckButton">Check</button>
      </form>

    </div>

        <div style="position:absolute; margin-left: 115px; margin-top:40px; font-family:cursive; background-color:black; opacity: 0.5; color:white; border: 5px solid skyblue; padding: 20px; border-radius:10px; font-size:20px;">
              <h2>Check your Grades</h2>
        </div>

        <div style="margin-left: 550px; margin-top: 130px; margin-right: 100px;">

        <table style="font-size: 20px; text-align: center; width: 100%;">

            <tr>
              <th>StudentID</th>
              <th>CourseID</th>
              <th>Mid-1</th>
              <th>Mid-2</th>
              <th>Finals</th>
              <th>Assignment-marks</th>
              <th>Quiz-marks</th>
              <th>Sessionals</th>
            </tr>

            <?php

            include 'phpConnectionFile.php';

            if(isset($_POST['CheckButton']))
            {


            $Course=$_POST['CourseID'];
            $Student=$_SESSION['UserName'];

            $Query ="SELECT * FROM grades where CourseID='$Course';";
            $result =mysqli_query($db_Object,$Query);
            $resultCheck =mysqli_num_rows($result);

              if($resultCheck!=0)
              {

              $row=mysqli_fetch_assoc($result);



                echo "<tr><td>".$row['StudentID']."</td>"."<td>".$row['CourseID']."</td>"."<td>".$row['Mid_1_Marks']."</td>"."<td>".$row['Mid_2_Marks']."</td>"."<td>".$row['Final_Marks']."</td>"."<td>".$row['Assignments_Marks']."</td>"."<td>".$row['Quiz_Marks']."</td>"."<td>".$row['Sessional_Marks']."</td></tr></table>";

              }
              else
              echo '<Script type="text/javascript">';
                echo 'alert("Not Found")';
                echo '</script>';

          }
            ?>


        </table>


         </div>


      <?php

       ?>
        <h6 style="margin-top:400px;">.</h6>
  <?php


    include 'foot.php';
   ?>
  </body>
</html>

<?php
include 'head.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title>Student_Portal</title>
  </head>
  <body>

    <div class="">
    <img class="BodyImg" style="position:absolute; width:1500px; opacity:0.4;" src="student_survey.jpg" alt="">

    <form class="formArea" style="margin-left:450px;"  method="post">

     <h1 style="color:brown;">StudentID</h1><br>
     <input class="CmsField" type="text" name="StudentID" placeholder="StudentID">
     <br><br><br>
      <h1 style="color:brown;">Password</h1><br>
      <input class="CmsField" type="password" name="Password"  placeholder="******">
      <br><br><br>
  <button class="SubmitButton" type="submit" name="SubmitButton">Submit</button>
    </form>
    </div>


<br><br>


 <h5 style="margin-top:520px;">.</h5>
<?php

   include 'phpConnectionFile.php';




  if(isset($_POST['SubmitButton']))
  {
    $_SESSION['UserName']=$_POST['StudentID'];
    $_SESSION['Password2']=$_POST['Password'];

    $Std=$_SESSION['UserName'];
    $pass=$_SESSION['Password2'];


        $query="Select * from registration where StudentID='$Std' AND password='$pass';";
        $result =mysqli_query($db_Object,$query);
        $resultCheck=mysqli_num_rows($result);
        if($resultCheck==1)
        {
            header("location:studentOptions.php?std=$std  pass=$pass");
        }
        else {
              echo '<Script type="text/javascript">';
                echo 'alert("Invalid User Try Again")';
                echo '</script>';
        }

  }

 include 'foot.php'; ?>
  </body>
</html>

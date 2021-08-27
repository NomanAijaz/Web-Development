<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="projectCssFile.css">
    <meta charset="utf-8">
    <title>Logout</title>
  </head>

  <body>

    <form method="post" >
            <button class="CmsField" type="submit" name="logOutButton" style=" width:100%; border: 2px solid orange;">logOut</button>

            <?php
            if(isset($_POST['logOutButton']))
            {
                session_destroy();
              header("location:My_project.php");
            }
             ?>

    </form>




  </body>
  
</html>

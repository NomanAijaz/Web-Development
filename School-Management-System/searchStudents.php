<?php
include 'head.php';
include 'logOutFile.php';
	
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Search</title>
    <link rel="stylesheet" href="projectCssFile.css">
<Style>
table{
  font-size: 20px;
   text-align: center;
    width: 100%;
    color: white;
    padding: 10px;

}
    table th,td{
      padding: 5px;
      border: 3px solid white;
      border-collapse: collapse;
    }
  </style>

  </head>
  <body>
    <img src="1a.jpg" style="width:100%; position:absolute;" alt="">
<br><br><br>
<div  style="position:absolute; border:2px solid white; border-radius:10px; width:100%;">
  <form  method="post" class="" style="color:white; text-align:center; padding:20px; font-size: 30px;">

    StudentID <br><br> <input class="SubmitButton" type="text" name="StudentID" value="">
    <br><br><br>
    <button type="submit" class="SubmitButton" name="Search">Search</button>
  </form>

<?php
include 'phpConnectionFile.php';
if(isset($_POST['Search']))
{
  $std=$_POST['StudentID'];

$SQL="SELECT * FROM registration WHERE StudentID='$std';";
$result =mysqli_query($db_Object,$SQL);
$resultCheck=mysqli_num_rows($result);
if($resultCheck!=0)
{

$row=mysqli_fetch_assoc($result);
echo "<table>";
echo "<tr><th>"."StudentID"."</th>"."<th>"."FirstName"."</th>"."<th>"."LastName"."</th>"."<th>"."FatherName"."</th>"."<th>"."Surname"."</th>"."<th>"."Gender"."</th>"."<th>"."DateOfBirth"."</th>"."<th>"." PhoneNumber"."</th>"."<th>"."CNIC"."</th>"."<th>"."Country"."</th>"."<th>"." Province"."</th>"."<th>"."City"."</th>"."<th>"."AdmissionDate"."</th></tr>";

echo "<tr><td>".$row['StudentID']."</td>"."<td>".$row['FirstName']."</td>"."<td>".$row['LastName']."</td>"."<td>".$row['FatherName']."</td>"."<td>".$row['Surname']."</td>"."<td>".$row['Gender']."</td>"
."<td>".$row['DateOfBirth']."</td>"."<td>".$row['PhoneNumber']."</td>"."<td>".$row['CNIC']."</td>"."<td>".$row['Country']."</td>"."<td>".$row['Province']."</td>"."<td>".$row['City']."</td>"."<td>".$row['AdmissionDate']."</td></tr>";
echo "</table>";

}
else {
  echo '<Script type="text/javascript">';
    echo 'alert("Student Not Found")';
    echo '</script>';
}

}

 ?>

</div>
<h6 style="margin-top:500px;"></h6>

<?php
include 'foot.php';
 ?>
  </body>
</html>

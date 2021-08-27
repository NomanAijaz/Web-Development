<?php
include 'phpConnectionFile.php';
session_start();

  $MarksType=$_POST['Option'];
  $S_ID=$_POST['StudentID'];
  $C_ID=$_POST['CourseID'];
  $Marks=$_POST['Marks'];

  $Query2="SELECT * FROM grades WHERE StudentID='$S_ID' AND CourseID='$C_ID';";
  $result=mysqli_query($db_Object,$Query2);

  $row=mysqli_fetch_assoc($result);


  if($MarksType=="1stMid"){

    if($Marks>=0 && $Marks<=20){
    echo "Uploaded";
    $Query="UPDATE grades
    Set Mid_1_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";

     mysqli_query($db_Object,$Query);
   }else {
     echo "Invalid marks";
   }
  }elseif ($MarksType=="2ndMid") {

    if($Marks>=0 && $Marks<=20){
    echo "Uploaded";
    $Query="UPDATE grades
    Set Mid_2_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";
     mysqli_query($db_Object,$Query);
}else {
  echo 'invalid input';
}
  }elseif ($MarksType=="final") {
    if($Marks>=0 && $Marks<=40){

    echo "Uploaded";
    $Query="UPDATE grades
    Set Final_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";
     mysqli_query($db_Object,$Query);}
     else {
       echo "Invalid input";
     }
  }elseif ($MarksType=="Assignment") {
    if($Marks>=0 && $Marks<=10){

    echo "Uploaded";
    $Query="UPDATE grades
    Set Assignments_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";
     mysqli_query($db_Object,$Query);
   }else {
     echo "Invalid input";
   }
  }elseif ($MarksType=="Quiz") {
    if($Marks>=0 && $Marks<=10){

    echo "Uploaded";
    $Query="UPDATE grades
    Set Quiz_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";
     mysqli_query($db_Object,$Query);
   }else {
     echo "Invalid input";
   }
  }elseif ($MarksType=="Sessionals") {
    if($Marks>=0 && $Marks<=20){

    echo "Uploaded";
    $Query="UPDATE grades
    Set Sessional_Marks='$Marks'
    where StudentID='$S_ID' AND CourseID='$C_ID'
     ;";
     mysqli_query($db_Object,$Query);
   }else {
     echo "Invalid input;";
   }
  }else {
    echo '<Script type="text/javascript">';
      echo 'alert("Not Found")';
      echo '</script>';
  }

?>

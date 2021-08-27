<?php

  include_once 'phpConnectionFile.php';

  if(isset($_POST['SubmitForm'])){
  $FirstName=$_POST['FirstName'];
  $LastName=$_POST['LastName'];
  $FatherName=$_POST['FatherName'];
  $Surname=$_POST['surname'];
  $CNIC =$_POST['CNIC'];
  $DOB =$_POST['DOB'];
  $Age =$_POST['Age'];
  $PhoneNumber =$_POST['PhoneNumber'];
  $Gender =$_POST['Gender'];
  $MaritalStatus=$_POST['MaritalStatus'];
  $FatherStatus=$_POST['FatherStatus'];
  $Address=$_POST['Address'];
  $City=$_POST['City'];
  $Province=$_POST['Province'];
  $PostalCode =$_POST['PostalCode'];
  $LastAttendantCollege =$_POST['LastAttendantCollege'];
  $studentIDField=$_POST['studentIDField'];
  $AddmissionDate=$_POST['AddmissionDate'];

  if(!(empty($FirstName)||empty($LastName)||empty($FatherName)||empty($Surname)||empty($CNIC)||empty($DOB)||empty($Age)||empty($PhoneNumber)||empty($Gender)||empty($MaritalStatus)||
  empty($FatherStatus)||empty($Address)||empty($City)||empty($Province)||empty($PostalCode)||empty($LastAttendantCollege)||empty($studentIDField)||empty($AddmissionDate)))
  {
      $sqlQuery="INSERT INTO new_Enrollment(FirstName,LastName,FatherName,Surname,CNIC,DOB,Age,PhoneNumber,Gender,MaritalStatus,FatherStatus,PerminantAddress,City,Province,
      PostalCode,LastAttendantCollege,StudentID,AddmissionDate) VALUES ('$FirstName','$LastName','$FatherName','$Surname','$CNIC','$DOB','$Age','$PhoneNumber',
      '$Gender','$MaritalStatus','$FatherStatus','$Address','$City','$Province','$PostalCode','$LastAttendantCollege','$studentIDField','$AddmissionDate');";
      mysqli_query($db_Object,$sqlQuery);
  }
}
 ?>

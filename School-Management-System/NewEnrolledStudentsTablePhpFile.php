<?php
session_start();
 ?>
<?php
if(isset($_POST['EnrollButton']))
{
  include 'phpConnectionFile.php';

  $CourseID =$_POST['CourseID'];

  $CourseName=$_POST['CourseName'];

  $User=$_SESSION['UserName'];

  $sqlQuery ="Select * FROM courses WHERE CourseID='$CourseID' AND CourseName='$CourseName';";
  $result =mysqli_query($db_Object,$sqlQuery);
  $resultCheck =mysqli_num_rows($result);

  if($resultCheck==1)
  {

   $CreateGradeTable="CREATE TABLE IF NOT EXISTS grades(
     StudentID int(5) Not null,
     CourseID varchar(10) not null,
     Mid_1_Marks int(3) not null,
     Mid_2_Marks int(3) not null,
     Final_Marks int(3) not null,
     Assignments_Marks int(3) not null,
     Quiz_Marks int(3) not null,
     Sessional_Marks int(3) not null,

     PRIMARY KEY(StudentID,CourseID),
     FOREIGN KEY(StudentID) references registration(StudentID),
     FOREIGN KEY(CourseID) references courses(CourseID)
   );";

   mysqli_query($db_Object,$CreateGradeTable);

    $sqlCreateNewTable="CREATE TABLE IF NOT EXISTS studentenrolledcourses(
        StudentID int(5) not null,
        CourseID varchar(10) not null,
        CourseName varchar(10) not null,
        Withdraw int(1) not null,
        PRIMARY key(StudentID,CourseID),
        foreign key(StudentID) references registration(StudentID),
        foreign key(CourseID) references courses(CourseID)
      );";
      mysqli_query($db_Object,$sqlCreateNewTable);



    $sqlInsertGradesEnrolledStudents="INSERT INTO Grades(StudentID,CourseID,Mid_1_Marks,Mid_2_Marks,Final_Marks,Assignments_Marks,Quiz_Marks,Sessional_Marks) VALUES ('$User','$CourseID','0','0','0','0','0','0');";
    mysqli_query($db_Object,$sqlInsertGradesEnrolledStudents);



    $sqlInsertEnrolledStudents="INSERT INTO studentenrolledcourses (StudentID,CourseID,CourseName,withdraw) VALUES ('$User','$CourseID','$CourseName','0');";
    mysqli_query($db_Object,$sqlInsertEnrolledStudents);

    echo '<Script type="text/javascript">';
      echo 'alert("You are enrolled\nThank you")';
      echo '</script>';

      exit();
  }
  else {
    echo '<Script type="text/javascript">';
      echo 'alert("Not Found")';
      echo '</script>';
  }
}
 ?>

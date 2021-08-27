<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="enrollCssFile.css">
    <link rel="stylesheet" href="headerAndFooter.css">
<title>EnrollPage</title>
  </head>

  <body>
    <div class="Header">

      <div class="Inner-header">

          <div class="block-container">
                        <h1>My<span>Identity</span></h1>

          </div>

          <ul class="navigator">
            <a href="http://localhost/LearnPHP/My_project.php"><li>Home</li></a>
            <a><li>Gallary</li></a>
            <a><li>About</li></a>
            <a><li>Contact</li> </a>
          </ul>

      </div>

    </div>
          <img src="pic5.jpg" alt="pic_5" style=" width:100%; height:630px;position: absolute;">

          <div class="short-note">
                <p>Lets start your future with us  <br> we will make your  dreams come    <br>true, what are you waiting for..?<br> lets start...</p>
          </div>

          <div class="fill-form-banner">
            <h1>Please Fill this Form</h1>
          </div>

          <h1 class="heading-data"><span style="font-size:40px;">*</span>Information</h1>


                        <div class="Personal-info-block">

            <form class="" action="" method="post" style="font-size:30px; font-weight:20; margin:50px;">

                          <input class="info-fields" style="" type="text" name="FirstName" placeholder="First Name">

                           <input class="info-fields" style="float:right;" type="text" name ="LastName" placeholder="Last Name">
                          <br>
                          <br>
                          <input class="info-fields" style="" type="text" name ="FatherName" placeholder="Father's Name">
                          <input class="info-fields" style="float:right;" type="text" name ="surname" placeholder="Surname">
                          <br><br>
                          <input class="info-fields" style="width:1100px;" type="text" name ="CNIC" placeholder="CNIC: xxxxx-xxxxxxx-x">
                          <br><br>
                          <input class="info-fields" style="width:350px;" type="text" name ="DOB" placeholder="DOB: yy-mm-dd">

                          <input class="info-fields" style="width:350px;" type="text" name ="Age" placeholder="Age">
                          <input class="info-fields" style="width:350px;" type="text" name ="PhoneNumber" placeholder="Phone Number">
                          <br>
                          <br>
                          Gender:<span style="margin-left:260px;">Marital Status:</span> <span style="margin-left:170px">FatherStatus</span> <br>
                          <select class="info-fields" style="width:350px;" name="Gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>

                          <select class="info-fields" style="width:350px;" name="MaritalStatus">
                            <option>Single</option>
                            <option>Married</option>
                            <option>widow</option>
                            <option>windower</option>
                          </select>

                          <select class="info-fields" style="width:350px;" name="FatherStatus">
                            <option>Desead</option>
                            <option>Alive</option>
                          </select>
                          <br><br>

                          <input class="info-fields" style="width:1100px;" type="text" name="Address" value="" placeholder="Perminant_address">
                          <br><br>
                          <input class="info-fields" style="width:350px;" type="text" name ="City" placeholder="City">
                          <select class="info-fields" style="width:350px;" name="Province">
                            <option>Sindh</option>
                            <option>Punjab</option>
                            <option>KPK</option>
                            <option>Balochistan</option>
                          </select>
                          <input class="info-fields" style="width:350px;" type="text" name ="PostalCode" placeholder="PostalCode">
                          <br><br>

                          <input class="info-fields" style="width:1100px;" type="text" name="LastAttendantCollege" value="" placeholder="LastAttendantCollege">
                          <br><br>
                          <input class="info-fields" style="width:350px; margin-top:25px;" type="text" name="studentIDField" value="" placeholder="studentID">
                                                    <input class="info-fields" style="width:350px; margin-top:25px;" type="text" name="AddmissionDate" value="" placeholder="AddmissionDate">
                          <input class="submitButton" type="Submit" name="SubmitForm" value="Submit" style="">

            </form>


            <?php
			
		echo 
	
                      include_once 'phpConnectionFile.php';

              if(isset($_POST['SubmitForm']))
              {
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

                  $sqlQuery="INSERT INTO new_enrollment (FirstName,LastName,FatherName,Surname,CNIC,DOB,Age,PhoneNumber,Gender,MaritalStatus,FatherStatus,PerminantAddress,City,Province,PostalCode,LastAttendantCollege,StudentID,AdmissionDate) VALUES ('$FirstName','$LastName','$FatherName','$Surname','$CNIC','$DOB','$Age','$PhoneNumber','$Gender','$MaritalStatus','$FatherStatus','$Address','$City','$Province','$PostalCode','$LastAttendantCollege','$studentIDField','$AddmissionDate');";
                  mysqli_query($db_Object,$sqlQuery);

            }

           ?>




          </div>



          <?php

          include 'foot.php';

          ?>


  </body>
</html>

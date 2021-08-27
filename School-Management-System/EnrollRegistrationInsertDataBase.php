<?php

include_once 'phpConnectionFile.php';

  if(isset($_POST['EnrollButton']))
  {
    $FirstName=$_POST['FirstName'];
    $LastName=$_POST['LastName'];
    $FatherName=$_POST['FatherName'];
    $Surname=$_POST['Surname'];
    $Gender=$_POST['GenderOption'];

    $DOB_Date=$_POST['DOB_Date'];
    $DOB_Month=$_POST['DOB_Month'];
    $DOB_Year=$_POST['DOB_Year'];


    switch ($DOB_Month) {
      case 'January':
        $DOB_Month='01';
        break;

        case 'February':
          $DOB_Month='02';
          break;
          case 'March':
            $DOB_Month='03';
            break;
            case 'April':
              $DOB_Month='04';
              break;
              case 'May':
                $DOB_Month='05';
                break;
                case 'June':
                  $DOB_Month='06';
                  break;
                  case 'July':
                    $DOB_Month='07';
                    break;
                    case 'August':
                      $DOB_Month='08';
                      break;
                      case 'September':
                        $DOB_Month='09';
                        break;
                        case 'October':
                          $DOB_Month='10';
                          break;
                          case 'November':
                            $DOB_Month='11';
                            break;
                            case 'December':
                              $DOB_Month='12';
                              break;
      default:

        break;
    }

    $DateOfBirth = "$DOB_Year-$DOB_Month-$DOB_Date";

    $PhoneNumber=$_POST['PhoneNumber'];
    $E_mail=$_POST['E_mail'];
    $CNIC=$_POST['CNIC'];

    $Country=$_POST['Country'];
    $Province=$_POST['Province'];
    $City=$_POST['City'];
    $password =$_POST['password'];

    $AdmissionDate =date('y-m-d');

      if(empty($FirstName)||empty($LastName)||empty($FatherName)||empty($Surname)||empty($Gender)||empty($DOB_Date)||empty($DOB_Month)||empty($DOB_Year)||empty($PhoneNumber)||empty($E_mail)||empty($CNIC)||empty($Country)||empty($Province)||empty($City))
      {
          echo "All fields are Not Filled"."<br>";

          exit();
      }else {

              if(!preg_match("/^[a-zA-Z]*$/",$FirstName)||!preg_match("/^[a-zA-Z]*$/",$LastName)||!preg_match("/^[a-zA-Z]*$/",$FatherName)||!preg_match("/^[a-zA-Z]*$/",$Surname))
              {
                          echo "Invalid fields"."<br>";
                exit();
              }else {
                      if(!filter_var($E_mail,FILTER_VALIDATE_EMAIL)){
                                  echo "Invalid E-mail"."<br>";
                        exit();
                      }else {

                        $CreateTable ="CREATE TABLE IF NOT EXISTS registration
                        (
                          StudentID int(5) NOT null PRIMARY KEY AUTO_INCREMENT,
                          password varchar(10) not null Unique,
                          FirstName varchar(10) NOT null,
                          LastName varchar(10) NOT null,
                          FatherName varchar(10) NOT null,
                          Surname varchar(10) NOT null,
                          Gender varchar(10) NOT null,
                          DateOfBirth varchar(30) NOT null,
                          PhoneNumber int(15) NOT null,
                          E_mail varchar(50) NOT null,
                          CNIC varchar(15) NOT null Unique,
                          Country varchar(50) NOT null,
                          Province varchar(50) NOT null,
                          City varchar(50) NOT null,
                          AdmissionDate date);
                          ";
                          mysqli_query($db_Object,$CreateTable);

                        $sqlQuery ="INSERT INTO registration (password,FirstName,LastName,FatherName,Surname,Gender,DateOfBirth,PhoneNumber,E_mail,CNIC,Country,Province,City,AdmissionDate) VALUES ('$password','$FirstName','$LastName','$FatherName','$Surname','$Gender','$DateOfBirth','$PhoneNumber','$E_mail','$CNIC','$Country','$Province','$City','$AdmissionDate');";
                        mysqli_query($db_Object,$sqlQuery);

                        //------------------------------------------------------------------------------------------pop message---------------

                        $ptr="SELECT StudentID FROM registration order by StudentID DESC limit 1;";
                        $result =mysqli_query($db_Object,$ptr);
                        $resultCheck = mysqli_num_rows($result);
                        if($resultCheck!=0){
                          $row=mysqli_fetch_assoc($result);
                          $var = $row['StudentID'];
                          echo '<script type="text/javascript">';
                          				echo ' alert("Registration Successful your StudentID id:"+'.$var.')';
                          				echo '</script>';
                        }
                        //--------------------------------here is remaing to show StudentID--------------------------------------

                        exit();
                      }
              }
      }
  }
?>

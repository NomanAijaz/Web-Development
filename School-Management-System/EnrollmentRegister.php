<!doctype html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="projectCssFile.css">

	<div class="enform"   ><h3>Enrollment form</h3></div>

	<div class="registration">

<?php
$date=date('y-m-d');
echo "$date.today";

 ?>

	<form align="center" method="post">

<div id="name">
	<input class="label1" type="text" placeholder="first_name" name="FirstName">
	<input class="label1" type="text" placeholder="last_name" style="margin-left: 10px" name="LastName">
	<br><br>
	<input class="label1" type="text" placeholder="father's_name" name="FatherName">
	<input class="label1" type="text" placeholder="caste" style="margin-left: 10px" name="Surname">
<br>
<br>


<select class="labelgender" name="GenderOption">
<option>Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>

<input type="password" name="password" placeholder="password">



<br><br>
	Date of Birth: &nbsp&nbsp&nbsp
<select name="DOB_Date">

<option>day</option>
<option value='1'>1</option>
<option value='2'>2</option>
<option value='3'>3</option>
<option value='4'>4</option>
<option value='5'>5</option>
<option value='6'>6</option>
<option value='7'>7</option>
<option value='8'>8</option>
<option value='9'>9</option>
<option value='10'>10</option>
<option value='11'>11</option>
<option value='12'>12</option>
<option value='13'>13</option>
<option value='14'>14</option>
<option value='15'>15</option>
<option value='16'>16</option>
<option value='17'>17</option>
<option value='18'>18</option>
<option value='19'>19</option>
<option value='20'>20</option>
<option value='21'>21</option>
<option value='22'>22</option>
<option value='23'>23</option>
<option value='24'>24</option>
<option value='25'>25</option>
<option value='26'>26</option>
<option value='27'>27</option>
<option value='28'>28</option>
<option value='29'>29</option>
<option value='30'>30</option>
<option value='31'>31</option>
</select>


<select name="DOB_Month">
<option>month</option>
<option value='January'>January</option>
<option value='February'>February</option>
<option value='March'>March</option>
<option value='April'>April</option>
<option value='May'>May</option>
<option value='June'>June</option>
<option value='July'>July</option>
<option value='August'>August</option>
<option value='September'>September</option>
<option value='October'>October</option>
<option value='November'>November</option>
<option value='December'>December</option>
</select>


<select name="DOB_Year">
<option>year</option>
<option value='1975'>1975</option>
<option value='1976'>1976</option>
<option value='1977'>1977</option>
<option value='1978'>1978</option>
<option value='1979'>1979</option>
<option value='1980'>1980</option>
<option value='1981'>1981</option>
<option value='1982'>1982</option>
<option value='1983'>1983</option>
<option value='1984'>1984</option>
<option value='1985'>1985</option>
<option value='1986'>1986</option>
<option value='1987'>1987</option>
<option value='1988'>1988</option>
<option value='1989'>1989</option>
<option value='1990'>1990</option>
<option value='1991'>1991</option>
<option value='1992'>1992</option>
<option value='1993'>1993</option>
<option value='1994'>1994</option>
<option value='1995'>1995</option>
<option value='1996'>1996</option>
<option value='1997'>1997</option>
<option value='1998'>1998</option>

<option value='1999'>1999</option>
<option value='2000'>2000</option>
<option value='2001'>2001</option>
<option value='2002'>2002</option>
<option value='2003'>2003</option>
<option value='2004'>2004</option>
<option value='2005'>2005</option>
<option value='2006'>2006</option>
<option value='2007'>2007</option>
<option value='2008'>2008</option>

<option value='2009'>2009</option>
<option value='2010'>2001</option>
<option value='2012'>2003</option>
<option value='2011'>2002</option>
<option value='2013'>2004</option>
<option value='2014'>2005</option>
<option value='2015'>2006</option>
<option value='2016'>2007</option>
<option value='2017'>2008</option>

</select>
<br><br>

Phone Number:
	<select name="countryCode" id="">
	<option data-countryCode="pak" value="92" Selected>(+92)</option>
	<optgroup label="Other countries">
		<option data-countryCode="DZ" value="21">(+21)</option>
		<option data-countryCode="AD" value="37">(+37)</option>
		<option data-countryCode="AO" value="24">(+24)</option>
		<option data-countryCode="AR" value="54">(+54)</option>
		<option data-countryCode="AM" value="37">(+37)</option>
		<option data-countryCode="AW" value="27">(+27)</option>
		<option data-countryCode="BR" value="55">(+55)</option>
		<option data-countryCode="BN" value="67">(+67)</option>
		<option data-countryCode="CA" value="1">(+1)</option>
		<option data-countryCode="CL" value="56">(+56)</option>
		<option data-countryCode="CN" value="86">(+86)</option>
		<option data-countryCode="CR" value="50">(+50)</option>
		<option data-countryCode="HR" value="38">(+38)</option>
		<option data-countryCode="CU" value="53">(+53)</option>
		<option data-countryCode="EG" value="20">(+20)</option>
		<option data-countryCode="FR" value="33">(+33)</option>
		<option data-countryCode="GA" value="24">(+24)</option>
		<option data-countryCode="GM" value="22">(+22)</option>

	</optgroup>
</select>
	<input class="number" type="text" name="PhoneNumber" placeholder="XXX-XXXXXXX">
<br><br>Email:
	<input class="email" type="text" name="E_mail" placeholder="abc@gmail.com">
<br><br>
	CNIC:&nbsp&nbsp
	<input class="CNIC" type="text" name="CNIC" placeholder="XXXXX-XXXXXXX-X">

<br><br>

<select class="country" name="Country">
<option>country</option>
<option>pakistan</option>
<option>india</option>
<option>bangladesh</option>
<option>america</option>
<option>turkey</option>
<option>italy</option>
<option>china</option>
<option>iran</option>
<option>iraq</option>

</select>

<select class="province" name="Province">
<option>province</option>
<option>sindh</option>
<option>punjab</option>
<option>balochistan</option>
<option>kpk</option>
<option>jamu kasmir</option>
<option>gilgit</option>

</select>

<select class="city" name="City">
<option>city</option>
<option>islamabad</option>
<option>karachi</option>
<option>lahore</option>
<option>peshawer</option>
<option>queta</option>
<option>sukkur</option>
<option>khairpur</option>
<option>ghambat</option>
<option>ghotki</option>
<option>dadu</option>
<option>hyderabad</option>
<option>multan</option>
<option>washington</option>
<option>beign</option>
<option>anatolia</option>
<option>rom</option>
<option>jkb</option>
<option>tehran</option>
<option>bagdad</option>


</select>
<br><br>
	<a href="#"><button style="height:30px; width:150px; border-radius:10px;" name="EnrollButton">Enroll</button></a>

</div>

<?php
include 'EnrollRegistrationInsertDataBase.php';
 ?>




</form>
</div>
</head>
<body>
<body>
<html>

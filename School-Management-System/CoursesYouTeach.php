<?php
include 'head.php';
?>
<!DOCTYPE html>
<html>
<head>
<title>Upload marks</title>

</head>

<body>

	<!-- Header starts -->
<!-- Header Ends -->

<!-- Body starts -->
  <!-- form border div -->
  <div style="border: 2px solid black">
  <!-- mid selection -->
<br><br><br>
<form method="post">
   <!-- mid selection end-->
   <!-- marks and id fields start -->
   <label>Student ID</label>
   <br>
   <input name ='S_ID' type='text'>
   <br><br>
   <label>Courser ID</label>
   <br>
   <input  name ='C_ID' type='text'>
   <br><br>
   <label>Marks</label>
   <br>
   <input name ='Marks' type='text'>
   <label>Choose the mid:</label>
   <select name='mids'>
     <option>1stMid</option>
     <option>2ndMid</option>
     <option>final</option>
     <option>Assignment</option>
     <option>Quiz</option>
     <option>Sessionals</option>
   </select>
   <br><br>
   <!-- some work needed here, whether a pop-up for successfull update or any error for id
   not being found, probably javascript used -->
   <button type="submit" name="button">Upload</button>
</form>

<!-- marks and id fields end -->
</div>
<?php
include 'UploadMarksPHPFile.php';
 ?>
<!--
<button type="button"
onclick="document.getElementById('demo').disabled = false;">
Click me to display Date and Time.</button>

-->
<!-- Body Ends -->

<!-- Footer Starts__-->
<?php
include 'foot.php';
?>

<!-- Footer Ends -->


</body>
</html>

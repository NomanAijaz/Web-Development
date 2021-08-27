<?php
include 'head.php';
?>
<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="projectCssFile.css">
  <link rel="stylesheet" href="headerAndFooter.css">
  <title>My_Project</title>
</head>

<body>

        <img src="pic1.jpg" alt="pic_1" style=" width:100%; height:630px;position: absolute;">

        <div class="intro-text">
          <p>Identify yourself here,<br>
             make you own identity,<br>
          we will lead to the destination of yours..!</p>
        </div>

        <button type="button" name="start-buttom" class="Get-start-button"><a>Let's Get Start...</a></button>

        <!---after this point post whatever you want--->


        <div class="top-banner">
            <h2>Ser<span>vices</span> th<span>at</span> w<span>e</span> a<span>re</span> prov<span>iding</span> y<span>ou</span> he<span>re</span> </h2>
        </div>



          <div class="student-portal">
              <a href="http://localhost/LearnPHP/studentPortal.php"><img src="student-enroll.jpg" alt="student-portal" style=" height: 400px; width: 350px; border-radius:10px; "></a>
              <h2>Student portal</h2>
              <p>Student can see the acedamic<br>progess and announcement</p>
          </div>



          <div class="enrollment">
            <div class="">
              <a href="http://localhost/LearnPHP/EnrollmentRegister.php"><img src="student-portal.jpg" alt="student-enroll" style=" height: 400px; width: 362px; border-radius:10px;"></a>
            </div>
                <h2>Student Enrollment</h2>
            <p>Enroll new students and provide  necessary  <br>information to register an student </p>
          </div>


        <div class="faculty-portal">
          <a href="http://localhost/LearnPHP/AdminPage.php"><img src="faculty.jpg" alt="faculty" style="height: 400px; width: 350px; border-radius:10px;"></a>

            <h2>Faculty Portal</h2>
            <p>Here Faculty can perform their<br> duties, their activities, and updates.</p>
        </div>





<div class="footer">

  <div class="footer-content">

      <div class="footer-section about">

        <h1 class="logo-text">My<span>Identity</span></h1><br>

        <p>
            the day i was born was one of my preicous day. i always celebrate my birthday delightly with my
            best friends. Now this time i will invite you to attent my happiness as one of my best friend.<br> Thank you..!
        </p><br>

        <div class="contact">
          <span><i class="phone-logo"></i> &nbsp; 0300-8080746</span>
          <span><i class="envelope-logo"></i>&nbsp; MyIdentity1002@gmail.com</span>
        </div>

        <div class="social">
          <a href="#"><i class="facebook-logo">facebook</i></a>
          <a href="#"><i class="instagram-logo">instagram</i></a>
          <a href="#"><i class="youtube-logo">youtube</i></a>
        </div>

      </div>

      <div class="footer-section">
        <h2>Quick Links</h2>
        <br>
        <ul>
          <a href="#"><li>Events</li></a>
          <a href="#"><li>Team</li></a>
          <a href="#"><li>Gallary</li></a>
          <a href="#"><li>Terms and conditions</li></a>
          <a href="#"><li>Administration</li></a>
       </ul>

       </div>

      <div class="footer-section contact-form">
        <h2 onloadedmetadata="">Contact us</h2>
        <br>
        <input type="email" name="email" value="" class="footer-text-input" placeholder="Your email address...."><br><br>
        <textarea name="message" class="footer-message-input" placeholder="Your message...."></textarea><br><br>
        <button type="submit" name="submit-button" class="footer-send-btn">send</button><br><br>

      </div>

  </div>

  <div class="footer-buttom">

  &copy; MyIdentity1002.com | by Noman Aijaz
  </div>

</div>



</body>

</html>

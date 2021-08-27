-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2020 at 10:43 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `TeacherID` int(30) NOT NULL,
  `CourseID` varchar(10) NOT NULL,
  `CourseName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`TeacherID`, `CourseID`, `CourseName`) VALUES
(1, 'CS-10C', 'JAVA'),
(1, 'CS-2C', 'HTML'),
(3, 'CS-2P', 'Python'),
(1, 'CS-3C', 'C++'),
(3, 'CS-3CA', 'Calculus'),
(2, 'CS-5C', 'JAVASCRIPT'),
(2, 'CS-6C', 'NODE.JS');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `StudentID` int(5) NOT NULL,
  `CourseID` varchar(10) NOT NULL,
  `Mid_1_Marks` int(3) NOT NULL,
  `Mid_2_Marks` int(3) NOT NULL,
  `Final_Marks` int(3) NOT NULL,
  `Assignments_Marks` int(3) NOT NULL,
  `Quiz_Marks` int(3) NOT NULL,
  `Sessional_Marks` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`StudentID`, `CourseID`, `Mid_1_Marks`, `Mid_2_Marks`, `Final_Marks`, `Assignments_Marks`, `Quiz_Marks`, `Sessional_Marks`) VALUES
(1, 'CS-10C', 10, 0, 20, 10, 0, 0),
(1, 'CS-2C', 0, 0, 0, 0, 0, 0),
(1, 'CS-2P', 0, 0, 0, 0, 0, 0),
(1, 'CS-3C', 0, 0, 10, 0, 0, 0),
(1, 'CS-5C', 0, 0, 0, 0, 0, 0),
(1, 'CS-6C', 0, 0, 20, 0, 0, 0),
(2, 'CS-2P', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `StudentID` int(5) NOT NULL,
  `password` varchar(10) NOT NULL,
  `FirstName` varchar(10) NOT NULL,
  `LastName` varchar(10) NOT NULL,
  `FatherName` varchar(10) NOT NULL,
  `Surname` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `DateOfBirth` varchar(30) NOT NULL,
  `PhoneNumber` int(15) NOT NULL,
  `E_mail` varchar(50) NOT NULL,
  `CNIC` varchar(15) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `Province` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `AdmissionDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`StudentID`, `password`, `FirstName`, `LastName`, `FatherName`, `Surname`, `Gender`, `DateOfBirth`, `PhoneNumber`, `E_mail`, `CNIC`, `Country`, `Province`, `City`, `AdmissionDate`) VALUES
(1, '3243', 'noman', 'aijaz', 'aijazhussa', 'pirzado', 'Male', '1997-06-10', 2147483647, 'noman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'khairpur', '2020-07-26'),
(2, '8080', 'salman', 'aijaz', 'aijazhussa', 'pirzado', 'Male', '1998-06-10', 2147483647, 'salman.aijaz332@gmail.com', '45201-0414009-7', 'pakistan', 'sindh', 'sukkur', '2020-07-29'),
(3, '2121', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(4, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(5, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(6, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(7, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(8, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(9, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(10, '', 'usama', 'aijaz', 'aaaa', 'lund', 'Male', '1976-02-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'sindh', 'tehran', '2020-08-02'),
(11, '3232', 'usama', 'aijaz', 'noor', 'pirzado', 'Male', '1975-02-1', 2147483647, 'salman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'beign', '2020-08-02'),
(12, '', 'usama', 'aijaz', 'noor', 'pirzado', 'Male', '1975-02-1', 2147483647, 'salman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'beign', '2020-08-02'),
(13, '', 'usama', 'aijaz', 'noor', 'pirzado', 'Male', '1975-02-1', 2147483647, 'salman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'beign', '2020-08-02'),
(14, '', 'usama', 'aijaz', 'noor', 'pirzado', 'Male', '1975-02-1', 2147483647, 'salman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'beign', '2020-08-02'),
(15, '1212', 'noman', 'aijaz', 'aijazhussa', 'pirzado', 'Male', '1976-01-1', 2147483647, 'noman.aijaz332@gmail.com', '45201-0414009-7', 'pakistan', 'sindh', 'anatolia', '2020-08-02'),
(16, '252', 'noman', 'aijaz', 'aijazhussa', 'pirzado', 'Male', '1981-01-3', 2147483647, 'noman.aijaz332@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'sukkur', '2020-08-03'),
(17, '2525', 'usama', 'aijaz', 'noor', 'lund', 'Male', '1977-01-1', 2147483647, 'usamaali22@gmail.com', '45201-5595265-8', 'pakistan', 'punjab', 'beign', '2020-08-03'),
(18, '1010', 'noman', 'aijaz', 'aijazhussa', 'pirzado', 'Male', '1975-01-2', 2147483647, 'noman.aijaz332@gmail.com', '45201-0414009-7', 'pakistan', 'sindh', 'anatolia', '2020-08-03'),
(19, '2020', 'usama', 'ali', 'noor', 'lund', 'Male', '1976-02-2', 2147483647, 'usamaali22@gmail.com', '45201-9069297-7', 'pakistan', 'sindh', 'jkb', '2020-08-03');

-- --------------------------------------------------------

--
-- Table structure for table `studentenrolledcourses`
--

CREATE TABLE `studentenrolledcourses` (
  `StudentID` int(5) NOT NULL,
  `CourseID` varchar(10) NOT NULL,
  `CourseName` varchar(10) NOT NULL,
  `Withdraw` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentenrolledcourses`
--

INSERT INTO `studentenrolledcourses` (`StudentID`, `CourseID`, `CourseName`, `Withdraw`) VALUES
(1, 'CS-10C', 'JAVA', 1),
(1, 'CS-2C', 'HTML', 0),
(1, 'CS-2P', 'Python', 1),
(1, 'CS-3C', 'C++', 0),
(1, 'CS-5C', 'JAVASCRIPT', 0),
(1, 'CS-6C', 'NODE.JS', 1),
(2, 'CS-2P', 'Python', 0);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `TeacherID` int(30) NOT NULL,
  `TeacherName` varchar(50) NOT NULL,
  `Department` varchar(50) NOT NULL,
  `Password` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`TeacherID`, `TeacherName`, `Department`, `Password`) VALUES
(1, 'NomanAijaz', 'Mathametics', 123),
(2, 'UsamaAli', 'English', 1234),
(3, 'ShehlaMushtaq', 'ComputerScience', 12345);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`CourseID`),
  ADD KEY `TeacherID` (`TeacherID`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`StudentID`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`StudentID`);

--
-- Indexes for table `studentenrolledcourses`
--
ALTER TABLE `studentenrolledcourses`
  ADD PRIMARY KEY (`StudentID`,`CourseID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`TeacherID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `StudentID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `TeacherID` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`TeacherID`) REFERENCES `teacher` (`TeacherID`);

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `registration` (`StudentID`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `courses` (`CourseID`);

--
-- Constraints for table `studentenrolledcourses`
--
ALTER TABLE `studentenrolledcourses`
  ADD CONSTRAINT `studentenrolledcourses_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `registration` (`StudentID`),
  ADD CONSTRAINT `studentenrolledcourses_ibfk_2` FOREIGN KEY (`CourseID`) REFERENCES `courses` (`CourseID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

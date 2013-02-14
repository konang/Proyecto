-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 08, 2013 at 02:31 AM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `COJACM`
--

-- --------------------------------------------------------

--
-- Table structure for table `concurso`
--

CREATE TABLE IF NOT EXISTS `concurso` (
  `idConcurso` int(11) NOT NULL,
  `fechaini` date NOT NULL,
  `fechafin` date NOT NULL,
  PRIMARY KEY (`idConcurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inscritos`
--

CREATE TABLE IF NOT EXISTS `inscritos` (
  `idPart` varchar(15) NOT NULL,
  `idConcurso` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `pos` int(11) NOT NULL,
  PRIMARY KEY (`idPart`,`idConcurso`),
  KEY `idConcurso` (`idConcurso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `participante`
--

CREATE TABLE IF NOT EXISTS `participante` (
  `idPart` varchar(15) NOT NULL,
  `mat` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`idPart`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `problema`
--

CREATE TABLE IF NOT EXISTS `problema` (
  `idProb` int(11) NOT NULL,
  `desc` varchar(500) NOT NULL,
  `tip` varchar(140) DEFAULT NULL,
  `nom` varchar(50) NOT NULL,
  `valor` int(11) NOT NULL,
  PRIMARY KEY (`idProb`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `problemasresueltos`
--

CREATE TABLE IF NOT EXISTS `problemasresueltos` (
  `idsubida` int(11) NOT NULL,
  `fechasub` date NOT NULL,
  `status` varchar(30) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `memoria` int(11) NOT NULL,
  `tam` int(11) NOT NULL,
  `leng` varchar(6) NOT NULL,
  `idProb` int(11) NOT NULL,
  `idPart` varchar(15) NOT NULL,
  PRIMARY KEY (`idsubida`),
  UNIQUE KEY `idPart` (`idPart`),
  UNIQUE KEY `idProb` (`idProb`),
  KEY `idPart_2` (`idPart`),
  KEY `idPart_3` (`idPart`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `semana`
--

CREATE TABLE IF NOT EXISTS `semana` (
  `idConcurso` int(11) NOT NULL,
  `idProb` int(11) NOT NULL,
  `sem` int(11) NOT NULL,
  `fechaini` date NOT NULL,
  `fechafin` date NOT NULL,
  PRIMARY KEY (`idConcurso`,`idProb`,`sem`),
  KEY `idProb` (`idProb`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inscritos`
--
ALTER TABLE `inscritos`
  ADD CONSTRAINT `inscritos_ibfk_2` FOREIGN KEY (`idConcurso`) REFERENCES `concurso` (`idConcurso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inscritos_ibfk_1` FOREIGN KEY (`idPart`) REFERENCES `participante` (`idPart`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `problemasresueltos`
--
ALTER TABLE `problemasresueltos`
  ADD CONSTRAINT `problemasresueltos_ibfk_2` FOREIGN KEY (`idPart`) REFERENCES `participante` (`idPart`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `problemasresueltos_ibfk_1` FOREIGN KEY (`idProb`) REFERENCES `problema` (`idProb`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `semana`
--
ALTER TABLE `semana`
  ADD CONSTRAINT `semana_ibfk_2` FOREIGN KEY (`idProb`) REFERENCES `problema` (`idProb`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `semana_ibfk_1` FOREIGN KEY (`idConcurso`) REFERENCES `concurso` (`idConcurso`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

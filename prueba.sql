-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 13, 2013 at 04:58 AM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `prueba`
--

-- --------------------------------------------------------

--
-- Table structure for table `participantes`
--

CREATE TABLE IF NOT EXISTS `participantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPart` varchar(255) DEFAULT NULL,
  `mat` int(10) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `puntaje` int(10) DEFAULT '0',
  `pos` int(10) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `participantes`
--

INSERT INTO `participantes` (`id`, `idPart`, `mat`, `nom`, `puntaje`, `pos`, `created_at`, `updated_at`) VALUES
(1, 'rafael112', 1138345, 'Andres', 300, 1, '2013-03-27 18:45:02', '2013-04-12 23:39:44'),
(2, 'Davidthebest', 1137065, 'carlos', 300, 2, '2013-04-02 15:44:00', '2013-04-12 23:39:52'),
(3, 'alemoles', 981362, 'Pepe', 0, 4, '2013-04-12 23:32:32', '2013-04-12 23:40:01'),
(4, 'Escaladder', 1231323, 'Juan', 300, 3, '2013-04-12 23:33:33', '2013-04-12 23:40:07');

-- --------------------------------------------------------

--
-- Table structure for table `problemaresueltos`
--

CREATE TABLE IF NOT EXISTS `problemaresueltos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idSubida` int(10) DEFAULT NULL,
  `fechasub` date DEFAULT NULL,
  `estatus` varchar(255) DEFAULT NULL,
  `tiempo` int(10) DEFAULT NULL,
  `memoria` int(10) DEFAULT NULL,
  `tam` int(10) DEFAULT NULL,
  `leng` varchar(255) DEFAULT NULL,
  `idPart_id` varchar(255) DEFAULT NULL,
  `idProb_id` int(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=73 ;

--
-- Dumping data for table `problemaresueltos`
--

INSERT INTO `problemaresueltos` (`id`, `idSubida`, `fechasub`, `estatus`, `tiempo`, `memoria`, `tam`, `leng`, `idPart_id`, `idProb_id`, `created_at`, `updated_at`) VALUES
(64, 96812, '2011-03-29', 'Accepted', 0, 332, 79, 'C++', 'rafael112', 1000, NULL, NULL),
(65, 190683, '2012-01-17', 'Accepted', 120, 823, 108, 'Python', 'Davidthebest', 1000, NULL, NULL),
(66, 388531, '2013-04-11', 'Accepted', 60, 256, 129, 'C++', 'Escaladder', 1000, NULL, NULL),
(67, 96812, '2011-03-29', 'Accepted', 0, 332, 79, 'C++', 'rafael112', 1000, NULL, NULL),
(68, 190683, '2012-01-17', 'Accepted', 120, 823, 108, 'Python', 'Davidthebest', 1000, NULL, NULL),
(69, 388531, '2013-04-11', 'Accepted', 60, 256, 129, 'C++', 'Escaladder', 1000, NULL, NULL),
(70, 96812, '2011-03-29', 'Accepted', 0, 332, 79, 'C++', 'rafael112', 1000, NULL, NULL),
(71, 190683, '2012-01-17', 'Accepted', 120, 823, 108, 'Python', 'Davidthebest', 1000, NULL, NULL),
(72, 388531, '2013-04-11', 'Accepted', 60, 256, 129, 'C++', 'Escaladder', 1000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `problemas`
--

CREATE TABLE IF NOT EXISTS `problemas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProb` int(10) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `tip` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `valor` int(10) DEFAULT NULL,
  `idSemana_id` int(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `problemas`
--

INSERT INTO `problemas` (`id`, `idProb`, `desc`, `tip`, `nom`, `valor`, `idSemana_id`, `created_at`, `updated_at`) VALUES
(3, 1000, 'For this problem you must calculate A + B, numbers given in the input.', 'The only line of input contain two space separated integers A, B (0 <= A, B <= 10).', 'A+B Problem', 100, 2, '2013-04-12 23:35:25', '2013-04-12 23:35:25');

-- --------------------------------------------------------

--
-- Table structure for table `schema_migrations`
--

CREATE TABLE IF NOT EXISTS `schema_migrations` (
  `version` varchar(255) NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `schema_migrations`
--

INSERT INTO `schema_migrations` (`version`) VALUES
('20130326154916'),
('20130326155141'),
('20130326160548'),
('20130326161032'),
('20130326163100');

-- --------------------------------------------------------

--
-- Table structure for table `semanas`
--

CREATE TABLE IF NOT EXISTS `semanas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idSemana` int(10) DEFAULT NULL,
  `fecha_ini` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `semanas`
--

INSERT INTO `semanas` (`id`, `idSemana`, `fecha_ini`, `fecha_fin`, `created_at`, `updated_at`) VALUES
(1, 1, '2013-04-02', '2013-05-02', '2013-04-02 15:49:59', '2013-04-02 15:49:59'),
(2, 2, '2013-04-04', '2013-04-12', '2013-04-12 23:34:29', '2013-04-12 23:41:28');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

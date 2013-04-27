-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 25, 2013 at 10:28 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `participantes`
--

INSERT INTO `participantes` (`id`, `idPart`, `mat`, `nom`, `puntaje`, `pos`, `created_at`, `updated_at`) VALUES
(1, 'rafael112', 1138345, 'Andres', 300, 4, '2013-03-27 18:45:02', '2013-04-12 23:39:44'),
(2, 'Davidthebest', 1137065, 'carlos', 1150, 1, '2013-04-02 15:44:00', '2013-04-12 23:39:52'),
(3, 'alemoles', 981362, 'Pepe', 200, 6, '2013-04-12 23:32:32', '2013-04-12 23:40:01'),
(4, 'Escaladder', 1231323, 'Juan', 600, 3, '2013-04-12 23:33:33', '2013-04-12 23:40:07'),
(5, 'jcfernandez', 1130305, 'Lucas Pato', 1150, 2, NULL, NULL),
(6, 'shivum360', 1136874, 'Buggs Conejo', 300, 5, NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=111 ;

--
-- Dumping data for table `problemaresueltos`
--

INSERT INTO `problemaresueltos` (`id`, `idSubida`, `fechasub`, `estatus`, `tiempo`, `memoria`, `tam`, `leng`, `idPart_id`, `idProb_id`, `created_at`, `updated_at`) VALUES
(95, 96812, '2011-03-29', 'Accepted', 0, 332, 79, 'C++', 'rafael112', 1000, NULL, NULL),
(96, 190683, '2012-01-17', 'Accepted', 120, 823, 108, 'Python', 'Davidthebest', 1000, NULL, NULL),
(97, 388231, '2013-04-10', 'Accepted', 60, 0, 2688, 'C++', 'jcfernandez', 1000, NULL, NULL),
(98, 138419, '2011-09-06', 'Accepted', 103, 7632, 3881, 'Java', 'Davidthebest', 1001, NULL, NULL),
(99, 392717, '2013-04-23', 'Accepted', 75, 0, 3766, 'C++', 'jcfernandez', 1001, NULL, NULL),
(100, 393531, '2013-04-25', 'Accepted', 136, 430, 2235, 'C++', 'shivum360', 1001, NULL, NULL),
(101, 86100, '2011-02-22', 'Accepted', 25, 7784, 1512, 'Java', 'Davidthebest', 1002, NULL, NULL),
(102, 386102, '2013-04-02', 'Accepted', 60, 896, 1610, 'C#', 'jcfernandez', 1002, NULL, NULL),
(103, 210447, '2012-03-03', 'Accepted', 90, 38, 190, 'C++', 'rafael112', 1485, NULL, NULL),
(104, 109709, '2011-05-20', 'Accepted', 105, 7380, 272, 'Java', 'Davidthebest', 1485, NULL, NULL),
(105, 392893, '2013-04-24', 'Accepted', 1246, 437, 407, 'Java', 'alemoles', 1485, NULL, NULL),
(106, 392673, '2013-04-23', 'Accepted', 359, 2715, 651, 'Java', 'Escaladder', 1485, NULL, NULL),
(107, 168352, '2011-10-17', 'Accepted', 311, 0, 204, 'C++', 'jcfernandez', 1485, NULL, NULL),
(108, 305431, '2012-10-15', 'Accepted', 46, 0, 804, 'C++', 'Davidthebest', 2069, NULL, NULL),
(109, 391539, '2013-04-20', 'Accepted', 850, 436, 1352, 'Java', 'Escaladder', 2069, NULL, NULL),
(110, 304365, '2012-10-13', 'Accepted', 30, 0, 852, 'C++', 'jcfernandez', 2069, NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `problemas`
--

INSERT INTO `problemas` (`id`, `idProb`, `desc`, `tip`, `nom`, `valor`, `idSemana_id`, `created_at`, `updated_at`) VALUES
(3, 1000, 'For this problem you must calculate A + B, numbers given in the input.', 'The only line of input contain two space separated integers A, B (0 <= A, B <= 10).', 'A+B Problem', 100, 2, '2013-04-12 23:35:25', '2013-04-12 23:35:25'),
(4, 1001, 'After writing a solver for the "movable maze" game, you have grown tired of it. After all, you already know the optimal solution. To entertain yourself, you find another puzzle game called "Pipes", and play that for a while. On one puzzle, you have not be', 'For each test case, output SOLVABLE if there is a solution to the puzzle, and UNSOLVABLE otherwise.', 'Pipes', 300, 3, NULL, NULL),
(5, 1002, 'Johan wants to build a new house and he wants his house as large as it can. Given an N x N grid land, find the largest square size that fit in the free area.', 'For each test case, output in a line the size of the largest square on free area.', 'New House', 150, 3, NULL, NULL),
(6, 1485, 'You are given a word C of 1000 characters at most, and you must order its characters ascending. In other words, you must find a permutation of its characters, which is lexicographically less than all.', 'Print a single line with the ordered word C.', 'Increasing Order Word', 200, 3, NULL, NULL),
(7, 2069, 'In ACM ICPC, teams are ranked according to the most problems solved. Teams who solve the same number of problems are ranked by least total time. The total time is the sum of the time consumed for each problem solved. The time consumed for a solved problem', 'For each test case, output the optimal number of problems your team will be able to solve, and, for this number of solved problems, the optimal number of penalty minutes your team will consume.', 'ACM Scoring', 400, 3, NULL, NULL);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `semanas`
--

INSERT INTO `semanas` (`id`, `idSemana`, `fecha_ini`, `fecha_fin`, `created_at`, `updated_at`) VALUES
(1, 1, '2013-04-02', '2013-05-02', '2013-04-02 15:49:59', '2013-04-02 15:49:59'),
(2, 2, '2013-04-04', '2013-04-12', '2013-04-12 23:34:29', '2013-04-12 23:41:28'),
(3, 3, '2013-04-01', '2013-05-01', NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2023 at 10:52 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nba`
--

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `name` varchar(30) NOT NULL,
  `number` int(11) NOT NULL,
  `position` varchar(30) NOT NULL,
  `image` varchar(512) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`name`, `number`, `position`, `image`, `created_at`, `id`, `team_id`) VALUES
('Stephen Curry', 30, 'Point Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254', '2023-03-09 18:40:10', 1, 2),
('Klay Thompson', 11, 'Shooting Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png', '2023-03-09 18:40:10', 2, 2),
('Draymond Green', 23, 'Power Forward', 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png', '2023-03-09 18:40:10', 3, 2),
('LeBron James', 23, 'Small Forward', 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png', '2023-03-09 18:40:10', 4, 3),
('Anthony Davis', 3, 'Power Forward', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png', '2023-03-09 18:40:10', 5, 3),
('Jimmy Butler', 22, 'Shooting Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png', '2023-03-09 18:40:10', 6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `name` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `image` varchar(512) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`name`, `city`, `image`, `created_at`, `id`) VALUES
('Celtics', 'Boston', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png', '2023-03-09 18:40:10', 1),
('Golden State Warriors', 'Oakland', 'https://b.fssta.com/uploads/application/nba/team-logos/Warriors.png', '2023-03-09 18:40:10', 2),
('Los Angeles Lakers', 'Los Angeles', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png', '2023-03-09 18:40:10', 3),
('Miami Heat', 'Miami', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png', '2023-03-09 18:40:10', 4),
('New York Knicks', 'New York', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png', '2023-03-09 18:40:10', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

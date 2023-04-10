-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 06:51 PM
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
-- Database: `sportid`
--

-- --------------------------------------------------------

--
-- Table structure for table `playernba`
--

CREATE TABLE `playernba` (
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `number` int(10) NOT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `playernba`
--

INSERT INTO `playernba` (`name`, `position`, `number`, `id`, `created_at`, `image`) VALUES
('Dante', 'Centro', 5, 1, '0000-00-00 00:00:00', '1679955424646-avatar.png'),
('Otro', 'Base', 55, 2, '0000-00-00 00:00:00', '1679955476509-PortraitPhoto.jpg'),
('Stephen Curry', 'Base', 30, 3, '2023-03-27 22:20:58', '1679955658761-curry.png'),
('Lebron James', 'Ala Pivot', 23, 4, '2023-03-27 23:24:17', '1679959457010-lebron.png');

-- --------------------------------------------------------

--
-- Table structure for table `playernfl`
--

CREATE TABLE `playernfl` (
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL,
  `team` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `playernfl`
--

INSERT INTO `playernfl` (`name`, `position`, `image`, `created_at`, `id`, `team`) VALUES
('Tom Brady', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png', '2023-03-27 22:53:17', 1, 'Tampa Bay Buccaneers'),
('Patrick Mahomes', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png', '2023-03-27 22:53:17', 2, 'Kansas City'),
('Joe Burrow', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png', '2023-03-27 23:17:40', 3, 'Cincinnati Bengals'),
('Josh Jacobs', 'Running back', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047365.png&w=350&h=254', '2023-03-27 23:19:54', 4, 'Las Vegas Raiders'),
('Aaron Rodgers', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png', '2023-03-28 15:14:57', 5, 'Green Bay Packers'),
('Derrick Henry', 'Running Back', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043078.png&w=350&h=254', '2023-03-28 15:14:57', 6, 'Tennessee Titans'),
('DeAndre Hopkins', 'Wide Receiver', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15847.png', '2023-03-28 15:14:57', 7, 'Arizona Cardinals'),
('TJ Watt', 'Linebacker', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3045282.png', '2023-03-28 15:14:57', 8, 'Pittsburgh Steelers'),
('Christian McCaffrey', 'Running Back', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3117250.png', '2023-03-28 15:17:55', 9, 'Carolina Panthers'),
('Dak Prescott', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2577417.png&w=350&h=254', '2023-03-28 15:17:55', 10, 'Dallas Cowboys'),
('Davante Adams', 'Wide Receiver', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15847.png', '2023-03-28 15:17:55', 11, 'Green Bay Packers'),
('Russell Wilson', 'Quarterback', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png', '2023-03-28 15:17:55', 12, 'Seattle Seahawks'),
('Aaron Donald', 'Defensive Tackle', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15825.png', '2023-03-28 15:17:55', 13, 'Los Angeles Rams'),
('Travis Kelce', 'Tight End', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14455.png', '2023-03-28 15:17:55', 14, 'Kansas City Chiefs');

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'ver_nba', '0000-00-00 00:00:00'),
(2, 'ver_nfl', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `descripcion`, `created_at`) VALUES
(1, 'nba', '', '2023-03-14 23:55:06'),
(2, 'nfl', '', '2023-03-14 23:55:06');

-- --------------------------------------------------------

--
-- Table structure for table `rol_privilegio`
--

CREATE TABLE `rol_privilegio` (
  `idRol` int(11) NOT NULL,
  `idPrivilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`idRol`, `idPrivilegio`, `created_at`) VALUES
(1, 1, '2023-03-14 23:55:53'),
(1, 2, '2023-03-14 23:55:53'),
(2, 1, '2023-03-14 23:56:03');

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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(400) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nombre`, `username`, `password`, `created_at`) VALUES
(1, 'dante', 'dante', '$2a$12$lB93V9EOh.B.ee4Uz76EPOoZjqFaPaZ5I19IN/wuLR5VgsfJPyia2', '2023-03-16 03:41:52'),
(2, 'ric', 'ric', '$2a$12$7EiQxkYAI15iVHUSTyUx6eeWNfVTs9v9MN4ka3PB146RB3JsErxge', '2023-03-16 03:50:48'),
(5, 'mike', 'mike', '$2a$12$1Ccy82syW8GNZG0wKTixL.yNhKxIBAy3EYw2G8B3AbD4/qX7s9lwG', '2023-03-27 17:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `usuario_rol`
--

INSERT INTO `usuario_rol` (`idUsuario`, `idRol`, `created_at`) VALUES
(1, 1, '2023-03-14 23:57:14'),
(2, 2, '2023-03-14 23:56:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playernba`
--
ALTER TABLE `playernba`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `playernfl`
--
ALTER TABLE `playernfl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD PRIMARY KEY (`idRol`,`idPrivilegio`),
  ADD KEY `idPrivilegio` (`idPrivilegio`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`idUsuario`,`idRol`),
  ADD KEY `idRol` (`idRol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playernba`
--
ALTER TABLE `playernba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `playernfl`
--
ALTER TABLE `playernfl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rol_privilegio`
--
ALTER TABLE `rol_privilegio`
  ADD CONSTRAINT `rol_privilegio_ibfk_1` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `rol_privilegio_ibfk_2` FOREIGN KEY (`idPrivilegio`) REFERENCES `privilegios` (`id`);

--
-- Constraints for table `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`idRol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

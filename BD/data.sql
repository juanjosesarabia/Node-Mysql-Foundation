-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2020 a las 20:05:25
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `identificacion` char(30) NOT NULL,
  `tipoId` char(2) NOT NULL,
  `primerNombre` char(30) NOT NULL,
  `segundoNombre` char(30) NOT NULL,
  `primerApellido` char(30) NOT NULL,
  `segundApellido` char(30) NOT NULL,
  `direccion` char(125) NOT NULL,
  `telefono` bigint(12) NOT NULL,
  `email` char(50) NOT NULL,
  `ocupacion` char(100) NOT NULL,
  `departamento` char(10) NOT NULL,
  `municipio` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`identificacion`, `tipoId`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundApellido`, `direccion`, `telefono`, `email`, `ocupacion`, `departamento`, `municipio`) VALUES
('105183039', 'CC', 'juan', 'jose', 'sarabia', '', 'Calle 8 n° 9-80', 300733000, 'prueba@hotmail.com', 'sistemas', 'Bolívar', 'Cartagena');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

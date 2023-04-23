-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2023 at 01:56 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dti_stock_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `member_tb`
--

CREATE TABLE `member_tb` (
  `id` int(11) NOT NULL,
  `memberName` varchar(255) DEFAULT NULL,
  `memberUsername` varchar(255) DEFAULT NULL,
  `memberPassword` varchar(255) DEFAULT NULL,
  `memberPhone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member_tb`
--

INSERT INTO `member_tb` (`id`, `memberName`, `memberUsername`, `memberPassword`, `memberPhone`, `createdAt`, `updatedAt`) VALUES
(1, 'Tee', 'Sahasawat', 'Abcabc564', '0829959445', '2023-03-23 12:48:23', '2023-03-23 12:52:06');

-- --------------------------------------------------------

--
-- Table structure for table `preorder_detail_tb`
--

CREATE TABLE `preorder_detail_tb` (
  `id` int(11) NOT NULL,
  `preorderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `preorderProductQuantity` int(11) NOT NULL,
  `productProductPrice` double NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `preorder_detail_tb`
--

INSERT INTO `preorder_detail_tb` (`id`, `preorderId`, `productId`, `preorderProductQuantity`, `productProductPrice`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 2, 35000, '2023-03-01', '2023-03-09'),
(2, 1, 4, 10, 10000, '2023-03-01', '2023-03-09'),
(3, 1, 5, 1, 5000, '2023-03-01', '2023-03-09'),
(4, 2, 1, 2, 5000, '2023-03-01', '2023-03-09'),
(5, 2, 4, 5, 2500, '2023-03-01', '2023-03-09'),
(6, 3, 1, 2, 5700.5, '2023-03-01', '2023-03-09'),
(7, 3, 2, 5, 10000, '2023-03-01', '2023-03-09');

-- --------------------------------------------------------

--
-- Table structure for table `preorder_tb`
--

CREATE TABLE `preorder_tb` (
  `id` int(11) NOT NULL,
  `preorderPriceTotal` double NOT NULL,
  `supplierId` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `preorder_tb`
--

INSERT INTO `preorder_tb` (`id`, `preorderPriceTotal`, `supplierId`, `createdAt`, `updatedAt`) VALUES
(1, 50000, 2, '2023-03-01', '2023-03-07'),
(2, 7500, 3, '2023-03-01', '2023-03-08'),
(3, 15750.5, 2, '2023-03-03', '2023-03-10');

-- --------------------------------------------------------

--
-- Table structure for table `product_tb`
--

CREATE TABLE `product_tb` (
  `id` int(11) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `productPrice` double NOT NULL,
  `productQuantity` int(11) NOT NULL,
  `productOutofOrder` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_tb`
--

INSERT INTO `product_tb` (`id`, `productName`, `productPrice`, `productQuantity`, `productOutofOrder`, `createdAt`, `updatedAt`) VALUES
(1, 'Motorcycle', 1000000, 8, 2, '2023-03-09', '2023-03-10'),
(2, 'Keyborad M1', 85000, 20, 5, '2023-03-04', '2023-03-09'),
(3, 'BigBike', 1000000, 15, 7, '2023-03-03', '2023-03-20'),
(4, 'Notebook', 50000, 50, 10, '2023-03-08', '2023-03-15'),
(5, 'Mouse', 9000, 16, 8, '2023-03-02', '2023-03-12'),
(6, 'PC building', 80000, 30, 10, '2023-03-07', '2023-03-09');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_tb`
--

CREATE TABLE `supplier_tb` (
  `id` int(11) NOT NULL,
  `supplierName` varchar(200) NOT NULL,
  `supplierContact` varchar(50) NOT NULL,
  `supplierAddress` varchar(200) NOT NULL,
  `supplierPhone` varchar(30) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `supplier_tb`
--

INSERT INTO `supplier_tb` (`id`, `supplierName`, `supplierContact`, `supplierAddress`, `supplierPhone`, `createdAt`, `updatedAt`) VALUES
(1, 'บริษัท ฮ่าจำกัด', 'โหน่ง', '118/188 นนทบุรี', '09855555', '2023-02-25', '2023-03-09'),
(2, 'บริษัท ไม่ฮ่าจำกัด', 'หม่ำ', '188/888 กทม', '0814452066', '2023-02-08', '2023-03-09'),
(3, 'บริษัท ฮ่าพ่องจำกัด', 'เท่ง', '88/181 นคร', '0874452133', '2023-02-07', '2023-03-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member_tb`
--
ALTER TABLE `member_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preorder_detail_tb`
--
ALTER TABLE `preorder_detail_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preorder_tb`
--
ALTER TABLE `preorder_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_tb`
--
ALTER TABLE `product_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier_tb`
--
ALTER TABLE `supplier_tb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member_tb`
--
ALTER TABLE `member_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `preorder_detail_tb`
--
ALTER TABLE `preorder_detail_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `preorder_tb`
--
ALTER TABLE `preorder_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_tb`
--
ALTER TABLE `product_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `supplier_tb`
--
ALTER TABLE `supplier_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

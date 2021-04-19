-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2021 at 05:36 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `computer`
--

CREATE TABLE `computer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `computer`
--

INSERT INTO `computer` (`id`, `name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Máy 1', 2, NULL, '2021-04-19 15:04:41'),
(2, 'Máy 2', NULL, NULL, '2021-04-19 14:01:55'),
(3, 'Máy 3', NULL, NULL, '2021-04-19 13:47:27'),
(4, 'Máy 4', NULL, NULL, '2021-04-18 12:27:12'),
(5, 'Máy 5', NULL, NULL, '2021-04-18 12:36:48'),
(6, 'Máy 6', NULL, NULL, '2021-04-18 12:27:12'),
(7, 'Máy 7', NULL, NULL, '2021-04-18 12:27:12'),
(8, 'Máy 8', NULL, NULL, '2021-04-18 12:27:12'),
(9, 'Máy 9', NULL, NULL, '2021-04-17 12:43:03'),
(10, 'Máy 10', NULL, NULL, '2021-04-18 12:27:12'),
(11, 'Máy 11', NULL, NULL, '2021-04-18 12:27:12'),
(12, 'Máy 12', NULL, NULL, '2021-04-18 12:27:12');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `type`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Redbull', 'Đồ uống', 12000, NULL, NULL),
(2, 'Sting', 'Đồ uống', 12000, NULL, NULL),
(3, 'Pesi', 'Đồ uống', 12000, NULL, NULL),
(4, 'Cocacola', 'Đồ uống', 12000, NULL, NULL),
(5, '0 độ', 'Đồ uống', 12000, NULL, NULL),
(6, 'Nutifood', 'Đồ uống', 12000, NULL, NULL),
(7, 'Cơm chiên', 'Đồ ăn', 30000, NULL, NULL),
(8, 'Mỳ tôm 1 trứng', 'Đồ ăn', 18000, NULL, NULL),
(9, 'Mỳ tôm 2 trứng', 'Đồ ăn', 25000, NULL, NULL),
(10, 'Nuôi xào bò', 'Đồ ăn', 30000, NULL, NULL),
(11, 'Miến xào', 'Đồ ăn', 30000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_04_16_142918_notice', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(6, '2021_04_17_150923_computer_table', 2),
(7, '2021_04_18_201537_menu', 3),
(8, '2021_04_18_225139_order_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`id`, `content`, `created_at`, `updated_at`) VALUES
(53, 'abc', '2021-04-17 03:11:40', '2021-04-17 03:11:40'),
(54, 'abc', '2021-04-17 03:11:43', '2021-04-17 03:11:43'),
(55, 'abc', '2021-04-17 03:11:58', '2021-04-17 03:11:58'),
(56, 'abc', '2021-04-17 03:12:25', '2021-04-17 03:12:25'),
(57, 'abc', '2021-04-17 03:12:47', '2021-04-17 03:12:47'),
(58, 'abc', '2021-04-17 03:18:22', '2021-04-17 03:18:22'),
(59, 'abc', '2021-04-17 03:18:27', '2021-04-17 03:18:27'),
(60, 'abc', '2021-04-17 03:18:39', '2021-04-17 03:18:39'),
(61, 'abc', '2021-04-17 03:18:46', '2021-04-17 03:18:46'),
(62, 'abc', '2021-04-17 03:19:24', '2021-04-17 03:19:24'),
(63, 'abc', '2021-04-17 03:19:35', '2021-04-17 03:19:35'),
(64, 'abc', '2021-04-17 03:19:37', '2021-04-17 03:19:37'),
(65, 'abc', '2021-04-17 03:46:51', '2021-04-17 03:46:51'),
(66, 'abc', '2021-04-17 12:15:15', '2021-04-17 12:15:15'),
(67, 'abc', '2021-04-17 12:15:20', '2021-04-17 12:15:20'),
(68, 'abc', '2021-04-17 12:15:42', '2021-04-17 12:15:42'),
(69, 'abc', '2021-04-17 12:15:46', '2021-04-17 12:15:46'),
(70, 'abc', '2021-04-17 12:17:54', '2021-04-17 12:17:54'),
(71, 'abc', '2021-04-17 12:20:34', '2021-04-17 12:20:34'),
(72, 'abc', '2021-04-17 12:22:55', '2021-04-17 12:22:55'),
(73, 'abc', '2021-04-17 12:23:00', '2021-04-17 12:23:00'),
(74, 'abc', '2021-04-17 12:23:09', '2021-04-17 12:23:09'),
(75, 'abc', '2021-04-17 12:23:44', '2021-04-17 12:23:44'),
(76, 'abc', '2021-04-17 12:32:32', '2021-04-17 12:32:32'),
(77, 'abc', '2021-04-17 12:32:57', '2021-04-17 12:32:57');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `computer_id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `total`, `user_id`, `computer_id`, `menu_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 2, 1, '2021-04-19 14:57:12', '2021-04-19 14:57:12'),
(2, 1, 2, 2, 1, '2021-04-19 14:58:49', '2021-04-19 14:58:49'),
(3, 1, 2, 2, 2, '2021-04-19 14:58:49', '2021-04-19 14:58:49'),
(4, 1, 2, 2, 1, '2021-04-19 15:00:46', '2021-04-19 15:00:46'),
(6, 2, 2, 1, 1, '2021-04-19 15:06:20', '2021-04-19 15:06:20'),
(7, 2, 2, 1, 2, '2021-04-19 15:06:20', '2021-04-19 15:06:20'),
(14, 2, 2, 1, 1, '2021-04-19 15:12:46', '2021-04-19 15:12:46'),
(15, 2, 2, 1, 2, '2021-04-19 15:12:46', '2021-04-19 15:12:46'),
(16, 1, 2, 1, 4, '2021-04-19 15:12:46', '2021-04-19 15:12:46'),
(17, 2, 2, 1, 1, '2021-04-19 15:18:47', '2021-04-19 15:18:47'),
(18, 1, 2, 1, 2, '2021-04-19 15:18:47', '2021-04-19 15:18:47'),
(19, 4, 2, 1, 1, '2021-04-19 15:23:49', '2021-04-19 15:23:49'),
(20, 2, 2, 1, 2, '2021-04-19 15:23:49', '2021-04-19 15:23:49'),
(21, 2, 2, 1, 1, '2021-04-19 15:24:04', '2021-04-19 15:24:04'),
(22, 2, 2, 1, 2, '2021-04-19 15:24:04', '2021-04-19 15:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(11, 'App\\Models\\User', 1, 'MyApp', 'a5f15b6c33dc8038d0e91ab644d5bbd61246066d4d16dc523300656553b8d1fe', '[\"*\"]', NULL, '2021-04-18 11:40:54', '2021-04-18 11:40:54'),
(13, 'App\\Models\\User', 1, 'MyApp', '2d3430e2b516b8cd5456f366caf11639958efa4939f8864e67a7423e1b8dec69', '[\"*\"]', NULL, '2021-04-18 11:56:49', '2021-04-18 11:56:49'),
(43, 'App\\Models\\User', 1, 'MyApp', '9346b76200e3ab5092e7098d580e89d4c49f009136089bee763569b7eb08504e', '[\"*\"]', NULL, '2021-04-18 13:10:36', '2021-04-18 13:10:36'),
(44, 'App\\Models\\User', 1, 'MyApp', 'bee4e119232182812bc69e5ba1f568a4fec8487bf9754459037ba8ea88252ae9', '[\"*\"]', NULL, '2021-04-18 13:13:00', '2021-04-18 13:13:00'),
(57, 'App\\Models\\User', 2, 'MyApp', 'dd0febdefaca451e77608925bda5bd949819dce5f86a4754ca27fd3a2dc34bbb', '[\"*\"]', '2021-04-19 15:24:04', '2021-04-19 13:47:27', '2021-04-19 15:24:04'),
(58, 'App\\Models\\User', 2, 'MyApp', '4728be353ae5b600d1584f71b36218fd1ede9244401a4ffd3786eefcf725c00c', '[\"*\"]', '2021-04-19 15:00:46', '2021-04-19 14:01:55', '2021-04-19 15:00:46'),
(59, 'App\\Models\\User', 2, 'MyApp', '1d1bb062eeb9e178401df73993e2f8f327b1e5ef27707c66e951a88ddf4e34a5', '[\"*\"]', '2021-04-19 15:12:46', '2021-04-19 15:04:41', '2021-04-19 15:12:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ungthanhlong', 'ungthanhlong@gmail.com', NULL, '$2y$10$N3pOGhWB/fFBicNrDlHWiOOLYvRMR7ueCMAzwwjtw2eIR34vVs5fO', 'admin', NULL, NULL, NULL),
(2, 'nguoidung1', 'nguoidung1@gmail.com', NULL, '$2y$10$N3pOGhWB/fFBicNrDlHWiOOLYvRMR7ueCMAzwwjtw2eIR34vVs5fO', 'customer', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `computer`
--
ALTER TABLE `computer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computer_user` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_user_id_foreign` (`user_id`),
  ADD KEY `order_computer_id_foreign` (`computer_id`),
  ADD KEY `order_menu_id_foreign` (`menu_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `computer`
--
ALTER TABLE `computer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `computer`
--
ALTER TABLE `computer`
  ADD CONSTRAINT `computer_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_computer_id_foreign` FOREIGN KEY (`computer_id`) REFERENCES `computer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

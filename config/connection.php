<?php

$dbhost  = "localhost";
$dbuser  = "root";
$dbpass  = "";
$dbtable = "mahasiswa";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbtable);

if(mysqli_connect_errno())
{
    echo 'Koneksi Gagal : ' . mysqli_connect_error();
}
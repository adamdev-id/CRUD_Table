<?php
include '../config/connection.php';
	if ($_GET['act'] == 'tambah' || $_GET['act'] == 'update' || $_GET['act'] == 'delete')
	{
		$nim;
		$nama;
		$tanggal_lahir;
		$prodi;
		if ($_GET['act'] == 'tambah')
		{
			$nim = $_POST['nim'];
			$nama = $_POST['nama'];
			$tanggal_lahir = $_POST['tanggal_lahir'];
			$prodi = $_POST['prodi'];
			$query =  mysqli_query($conn, "INSERT INTO mahasiswa VALUES('$nim' , '$nama' , '$tanggal_lahir' , '$prodi')");
		
			if($query) 
			{
				header("location:../index.php");
			}
			else
			{
				echo "ERROR, tidak berhasil" . mysqli_error($conn);
			}
		
		}

		if($_GET['act'] == 'update')
		{	
			$nim = $_POST['update_nim'];
			$nama = $_POST['update_nama'];
			$tanggal_lahir = $_POST['update_tanggal_lahir'];
			$prodi = $_POST['update_prodi'];
		    $query =  mysqli_query($conn, "UPDATE mahasiswa SET nama = '$nama', tanggal_lahir = '$tanggal_lahir', prodi = '$prodi' WHERE nim = '$nim'");

			if($query) 
			{
				header("location:../index.php");
			}
			else{
				echo "ERROR, tidak berhasil" . mysqli_error($conn);
			}
		}
		
		if($_GET['act'] == 'delete')
		{
			
			$nim = $_POST['delete_nim'];
			$query =  mysqli_query($conn, "DELETE FROM mahasiswa WHERE nim = '$nim'");
			if($query) 
			{
				header("location:../index.php");
			}
			else{
				echo "ERROR, tidak berhasil" . mysqli_error($conn);
			}
		}
	}

	$query = mysqli_query($conn, "SELECT *, DATE_FORMAT(tanggal_lahir, '%d %M %Y') as tanggal_lahir FROM mahasiswa order by nim asc");
	while ($row = mysqli_fetch_assoc($query)) 
	{
		//echo $nomor++;
		echo $row['nim'] . " ";
		echo $row['nama'] . " ";
		echo $row['tanggal_lahir'] . " ";
		echo $row['prodi'] . " ";
		echo "<br>";
	}
?>
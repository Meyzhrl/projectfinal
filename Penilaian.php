<?php
include "EcoCraft.php";
if (isset($_POST['proses'])) {
    mysqli_query($EcoCraft, "insert into profil set
    name = '$_POST[name]',
    email = '$_POST[email]',
    comment = '$_POST[comment]'");
    //query insert data penilaian
    echo "Anda Berhasil";
}    
?>
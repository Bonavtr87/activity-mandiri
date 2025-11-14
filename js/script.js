function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;

    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (name == "" || email == "") {
        alert("Semua field harus diisi!");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    alert("Data berhasil dikirim!");
    return true;
}

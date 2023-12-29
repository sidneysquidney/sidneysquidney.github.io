function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sglethbridge@gmail.com",
        Password : "password",
        To : 'sglethbridge@gmail.com',
        From : document.getElementById("contactEmail").value,
        Subject : "Siddhartha Lethbridge website inquiry",
        Body : document.getElementById("contactMessage").value
    }).then(
      message => alert("Message sent successfully")
    );
}
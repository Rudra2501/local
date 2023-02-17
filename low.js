function showDetails() {
    const userName = document.getElementById("name").value;
    const EMail = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const userDate = document.getElementById("date").value;
    const userTime = document.getElementById("time").value;
    console.log(userName + " " + EMail + " " + phoneNumber + " " + userDate + " " + userTime);
    localStorage.showDetails(userName,Email,phoneNumber,userDate,userTime);
    console.log(localStorage);
}
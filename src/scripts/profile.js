document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        document.getElementById('userFullName').textContent = userData.name;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userUsername').textContent = userData.username;
        document.getElementById('userPhone').textContent = userData.phone;
        document.getElementById('userGender').textContent = userData.gender;
    } else {
        alert('No user data found. Redirecting to login.');
        window.location.href = '/src/pages/login.html';
    }
});
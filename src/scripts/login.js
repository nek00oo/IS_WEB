document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                console.log('Login successful:', user);
                localStorage.setItem('userData', JSON.stringify(user)); //кмк удалить, зачем нам делать сохранение
                window.location.href = '/src/pages/profile.html';
            } else {
                alert('User not found. Please check your email or register.');
            }
        })
        .catch(error => console.error('Error logging in:', error));
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    const errorBanner = document.getElementById('errorBanner');

    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email);
            console.log("User:", user)
            console.log(email)

            if (user) {
                console.log('Login successful:', user);
                localStorage.setItem('userData', JSON.stringify(user));
                window.location.href = '/src/pages/profile.html';
            } else {
                errorBanner.innerHTML = "Пользователь не найден"
                errorBanner.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error login user:', error);
            errorBanner.innerHTML = "Что-то пошло не так"
            errorBanner.style.display = 'block'; // Показываем плашку с ошибкой
        })
        .finally(() => {
        spinner.style.display = 'none';
    });

});

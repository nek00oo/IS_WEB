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
                iziToast.success({
                    message: 'Вы успешно вошли!',
                    position: 'bottomRight'
                });
                console.log('Login successful:', user);
                localStorage.setItem('userData', JSON.stringify(user));
                setTimeout(() => {
                    window.location.href = '/src/pages/profile.html'
                }, 800);
            } else {
                iziToast.error({
                    message: 'Пользователь не найден',
                    position: 'bottomRight',
                });
                errorBanner.innerHTML = "Пользователь не найден"
                errorBanner.style.display = 'block';
            }
        })
        .catch(error => {
            iziToast.error({
                message: 'Что-то пошло не так, попробуйте позже.',
                position: 'bottomRight',
            });
            console.error('Error login user:', error);
            errorBanner.innerHTML = "Что-то пошло не так"
            errorBanner.style.display = 'block';
        })
        .finally(() => {
        spinner.style.display = 'none';
    });

});
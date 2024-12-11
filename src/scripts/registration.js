document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const userData = {
            name: e.target.fullName.value,
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            gender: e.target.gender.value
        };

        const spinner = document.getElementById('spinner');
        spinner.style.display = 'block';
        const errorBanner = document.getElementById('errorBanner');


        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                iziToast.success({
                    message: 'Вы успешно вошли!',
                    position: 'bottomRight'
                });
                console.log('User registered:', data);
                localStorage.setItem('userData', JSON.stringify(data));
                setTimeout(() => {
                    window.location.href = '/src/pages/profile.html'
                }, 800);
            })
            .catch(error => {
                iziToast.error({
                    message: 'Что-то пошло не так, попробуйте позже.',
                    position: 'bottomRight'
                });
                console.error('Error registering user:', error);
                errorBanner.innerHTML = "Что-то пошло не так"
                errorBanner.style.display = 'block';
            })
            .finally(() => {
            spinner.style.display = 'none';
        });
    });
});

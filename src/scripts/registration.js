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

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('User registered:', data);
                alert('Registration successful!');
                localStorage.setItem('userData', JSON.stringify(data));
                window.location.href = '/src/pages/profile.html';
            })
            .catch(error => console.error('Error registering user:', error));
    });
});

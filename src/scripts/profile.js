let editMode = false;

const editModeBtn = document.getElementById('editModeBtn');
editModeBtn.addEventListener('click', () => {
    editMode = !editMode;
    document.body.classList.toggle('edit-mode', editMode);
    editModeBtn.classList.toggle('active', editMode);
    toggleEditableFields();
});

function toggleEditableFields() {
    const nameInput = document.getElementById('studentName');
    const nameDisplay = document.getElementById('studentNameDisplay');
    nameInput.classList.toggle('hidden', !editMode);
    nameDisplay.classList.toggle('hidden', editMode);

    const ageInput = document.getElementById('studentAge');
    const ageDisplay = document.getElementById('studentAgeDisplay');
    ageInput.classList.toggle('hidden', !editMode);
    ageDisplay.classList.toggle('hidden', editMode);
}

document
    .getElementById('imageUpload')
    .addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file && editMode) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profileImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

document
    .getElementById('studentName')
    .addEventListener('input', function (event) {
        if (editMode) {
            const value = event.target.value;
            document.getElementById('studentNameDisplay').textContent = value;
            localStorage.setItem('studentName', value);
        }
    });

document
    .getElementById('studentAge')
    .addEventListener('input', function (event) {
        if (editMode) {
            const value = event.target.value;
            document.getElementById('studentAgeDisplay').textContent = value;
            localStorage.setItem('studentAge', value);
        }
    });

window.addEventListener('load', function () {
    const savedName = localStorage.getItem('studentName');
    const savedAge = localStorage.getItem('studentAge');

    if (savedName) {
        document.getElementById('studentName').value = savedName;
        document.getElementById('studentNameDisplay').textContent = savedName;
    }

    if (savedAge) {
        document.getElementById('studentAge').value = savedAge;
        document.getElementById('studentAgeDisplay').textContent = savedAge;
    }
});

const modal = document.getElementById('subjectModal');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.querySelector('.modal__close');
const tasksList = document.getElementById('tasksList');

const subjectData = {
    math: {
        title: 'Математика',
        tasks: [
            'Контрольная работа по алгебре - 20.05',
            'Домашнее задание №5 - 22.05',
            'Тест по геометрии - 25.05'
        ]
    },
    physics: {
        title: 'Физика',
        tasks: [
            'Лабораторная работа №3 - 21.05',
            'Проект "Механика" - 27.05',
            'Тест по электричеству - 30.05'
        ]
    },
    russian: {
        title: 'Русский язык',
        tasks: [
            'Сочинение - 19.05',
            'Диктант - 23.05',
            'Тест по пунктуации - 26.05'
        ]
    }
};

document.querySelectorAll('.subject').forEach(subject => {
    subject.addEventListener('click', () => {
        const subjectType = subject.dataset.subject;
        const data = subjectData[subjectType];

        modalTitle.textContent = data.title;
        tasksList.innerHTML = data.tasks
            .map(task => `<li>${task}</li>`)
            .join('');

        modal.classList.remove('hidden');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
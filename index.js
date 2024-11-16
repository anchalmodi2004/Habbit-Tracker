// script.js

document.addEventListener('DOMContentLoaded', () => {
    const habitInput = document.getElementById('habit-input');
    const addHabitButton = document.getElementById('add-habit');
    const habitList = document.getElementById('habit-list');

    addHabitButton.addEventListener('click', () => {
        const habitText = habitInput.value.trim();
        if (habitText !== '') {
            addHabit(habitText);
            habitInput.value = '';
        }
    });

    function addHabit(habit) {
        const li = document.createElement('li');
        li.textContent = habit;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            habitList.removeChild(li);
        });

        li.appendChild(deleteButton);
        habitList.appendChild(li);
    }
});

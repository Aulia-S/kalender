// calendar.js
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const calendarContainer = document.getElementById('calendar-container');
const currentDate = new Date();

function generateCalendar(year) {
  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = document.createElement('div');
    calendar.classList.add('calendar');
    calendarContainer.appendChild(calendar);

    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = `<span class="month-year">${months[month]} ${year}</span>`;
    calendar.appendChild(header);

    const daysGrid = document.createElement('div');
    daysGrid.classList.add('days');
    calendar.appendChild(daysGrid);

    // Add the days of the week
    daysOfWeek.forEach(day => {
      const cell = document.createElement('div');
      cell.textContent = day;
      daysGrid.appendChild(cell);
    });

    // Determine the number of empty cells to add before the first day
    let emptyCells = startingDay;
    for (let i = 0; i < emptyCells; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.textContent = '';
      daysGrid.appendChild(emptyCell);
    }

    // Add days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.textContent = day;
      daysGrid.appendChild(cell);
    }
  }
}

generateCalendar(currentDate.getFullYear());

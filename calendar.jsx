import { useState } from "react";
import "../styles/calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [schedules, setSchedules] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
  }

  function previousMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function addSchedule() {
    if (!title.trim()) return;

    setSchedules((prev) => ({
      ...prev,
      [selectedDate]: [
        ...(prev[selectedDate] || []),
        title,
      ],
    }));

    setTitle("");
    setSelectedDate(null);
  }

  function createCalendarDays() {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= lastDate; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }

  return (
    <div className="calendar-page">
      <div className="calendar-container">

        <div className="calendar-header">
          <button onClick={previousMonth}>‹</button>

          <h2>
            {currentDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </h2>

          <button onClick={nextMonth}>›</button>
        </div>

        <div className="weekday-row">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {createCalendarDays().map((date, index) => {
            if (!date) {
              return (
                <div
                  className="calendar-cell empty"
                  key={`empty-${index}`}
                />
              );
            }

            const dateString = formatDate(date);
            const daySchedules = schedules[dateString] || [];

            return (
              <div className="calendar-cell" key={dateString}>
                <div className="cell-header">
                  <span>{date.getDate()}</span>

                  <button
                    className="add-button"
                    onClick={() => setSelectedDate(dateString)}
                  >
                    +
                  </button>
                </div>

                <div className="schedule-list">
                  {daySchedules.map((schedule, index) => (
                    <div className="schedule-item" key={index}>
                      {schedule}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="modal-background">
          <div className="schedule-modal">
            <h3>Add Schedule</h3>

            <p>{selectedDate}</p>

            <input
              type="text"
              placeholder="Schedule title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="modal-buttons">
              <button
                onClick={() => {
                  setSelectedDate(null);
                  setTitle("");
                }}
              >
                Cancel
              </button>

              <button onClick={addSchedule}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
import React from 'react';
import { Calendar } from 'lucide-react';

interface EventProps {
  title: string;
  description: string;
  date: string;
  time: string;
}

export default function EventCard({ title, description, date, time }: EventProps) {
  const handleAddToCalendar = () => {
    const eventDetails = {
      text: title,
      dates: date,
      details: description,
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${encodeURIComponent(date)}&details=${encodeURIComponent(description)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {date} at {time}
        </p>
        <button
          onClick={handleAddToCalendar}
          className="flex items-center space-x-2 text-[#138f1d] hover:text-[#0f7a17] transition"
        >
          <Calendar className="h-4 w-4" />
          <span>Add to Calendar</span>
        </button>
      </div>
    </div>
  );
}
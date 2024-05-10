// React import
import React from "react";

// Dummy data
const dummyEventData = [
  {
    id: 1,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    date: "January 10",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    authors: [
      {
        id: 1,
        name: "Natali Craig",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
      {
        id: 2,
        name: "Tania Andrew",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    date: "January 10",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    authors: [
      {
        id: 1,
        name: "Natali Craig",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
      {
        id: 2,
        name: "Tania Andrew",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    date: "January 10",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    authors: [
      {
        id: 1,
        name: "Natali Craig",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
      {
        id: 2,
        name: "Tania Andrew",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
    ],
  },
  {
    id: 4,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    date: "January 10",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    authors: [
      {
        id: 1,
        name: "Natali Craig",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
      {
        id: 2,
        name: "Tania Andrew",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
    ],
  },
];

// EventCard component
const EventCard = ({ event }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="p-6">
        <h4 className="font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {event.title}
        </h4>
        <p className="mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {event.description}
        </p>
      </div>
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center -space-x-3">
          {event.authors.map((author) => (
            <img
              key={author.id}
              alt={author.name}
              src={author.image}
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-1"
            />
          ))}
        </div>
        <p className="font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          {event.date}
        </p>
      </div>
    </div>
  );
};

// EventList component
const EventList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyEventData.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

// Export EventList component
export default EventList;

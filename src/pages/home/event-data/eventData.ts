import { Event } from '../../../types/event-types';
import event1 from './assets/event1.jpg';
import event2 from './assets/event2.jpg';
import event3 from './assets/event3.jpg';
import event4 from './assets/event4.jpg';
import event5 from './assets/event5.jpg';
import event6 from './assets/event6.jpg';
import event7 from './assets/event7.jpg';
import event8 from './assets/event8.jpg';
import event9 from './assets/event9.jpg';

export const events: Event[] = [
  {
    image: event1,
    title: 'Annual Tech Conference 2023: The Future of Innovation',
    date: '2023-07-02',
    time: '10:00',
    location: 'Elbphilharmonie, Hamburg',
    price: '5.99',
    warning: 'Only 53 tickets left!',
  },
  {
    image: event2,
    title: 'AI and Data Science Symposium 2023',
    date: '2023-06-01',
    time: '14:00',
    location: 'Brandenburg Gate, Berlin',
    price: '10.99',
  },
  {
    image: event3,
    title: 'International AI Summit',
    date: '2023-06-15',
    time: '19:30',
    location: 'Cologne Cathedral, Cologne',
    price: '25.50',
  },
  {
    image: event4,
    title: 'Global Entrepreneurship Forum',
    date: '2023-08-05',
    time: '09:00',
    location: 'Hochschule München, Munich',
    price: '30.00',
    warning: 'Only 20 tickets left!',
  },
  {
    image: event5,
    title: 'Smart Cities Conference 2023: Urban Technologies',
    date: '2023-09-10',
    time: '13:00',
    location: 'Frankfurt University, Frankfurt',
    price: '15.00',
  },
  {
    image: event6,
    title: 'Blockchain and Beyond',
    date: '2023-07-20',
    time: '11:00',
    location: 'Berlin Technical University, Berlin',
    price: '20.00',
  },
  {
    image: event7,
    title: 'Smart Cities Conference',
    date: '2023-10-15',
    time: '15:00',
    location: 'University of Stuttgart, Stuttgart',
    price: '12.50',
  },
  {
    image: event8,
    title: 'Cybersecurity Summit 2023',
    date: '2023-11-01',
    time: '10:30',
    location: 'University of Leipzig, Leipzig',
    price: '18.00',
    warning: 'Only 5 tickets left!',
  },
  {
    image: event9,
    title: 'Future of Robotics Conference',
    date: '2023-12-05',
    time: '17:00',
    location: 'RWTH Aachen University, Aachen',
    price: '35.00',
  },
];

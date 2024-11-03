import { FaCar } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const routeList = [
  {
    name: 'Studio',
    path: '/studio',
    icon: '🏢',
  },
  {
    name: 'Station',
    path: '/station',
    icon: '🚃',
  },
  {
    name: 'Accès',
    path: '/acces',
    icon: <FaCar />,
  },
  {
    name: 'Location',
    path: '/location',
    icon: '🚕',
  },
  {
    name: 'Liens',
    path: '/liens',
    icon: '🔗',
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <IoIosMail/>,
  },
]
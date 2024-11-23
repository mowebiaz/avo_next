import { FaCar, FaBuilding } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMountainCity, FaLink } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export const routeList = [
  {
    name: 'Studio',
    path: '/studio',
    icon: <FaBuilding />,
  },
  {
    name: 'Station',
    path: '/station',
    icon: <FaMountainCity />,
  },
  {
    name: 'Accès',
    path: '/acces',
    icon: <FaCar />,
  },
  {
    name: 'Location',
    path: '/location',
    icon: <IoDocumentText />,
  },
  {
    name: 'Liens',
    path: '/liens',
    icon: <FaLink />,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: <IoIosMail/>,
  },
]
import Lautify from '../../assets/Project/LautifyApp.png'
import Backoffice from '../../assets/Project/BackofficeM.png'
import WebBackoffice from '../../assets/Project/WebBackoffice.png'

export const projects = [
    {
        id: 1,
        title: 'Backoffice Mobile App',
        description: 'A mobile attendance application developed using Kotlin, equipped with photo attendance and geolocation features. This application is also integrated with a previous project, namely a web-based backoffice, for attendance data recap.',
        technologies: ['Kotlin', 'Laravel', 'MySql'],
        image: Backoffice,
    },
    {
        id: 2,
        title: 'Web Backoffice',
        description: 'The Web Backoffice is a web-based application used by the company internal personnel (such as administrators, managers, or operational staff) to manage data, create documents, and oversee various business processes.',
        technologies: ['Laravel', 'MySql', 'Bootstrap CSS'],
        image: WebBackoffice,
    },
    {
        id: 3,
        title: 'Mobile App Lautify',
        description: 'Lautify is a final project application developed as part of the Bangkit Academy program. Its main feature allows users to scan the freshness of fish through the eyes. The application is equipped with machine learning to analyze and determine the freshness level based on the scan results. Additionally, it also includes a food recipe feature.',
        technologies: ['Kotlin', 'Firebase', 'Python'],
        image: Lautify,
    },
];

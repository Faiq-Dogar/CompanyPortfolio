import AndoidAppDevelopment from '../SVGs/AndoidAppDevelopment'
import IOSAppDevelopemnt from '../SVGs/IOSAppDevelopemnt'
import Flutter from '../SVGs/Flutter'
import MobilePrototyping from '../SVGs/MobilePrototyping'
import CutomAppDevelopment from '../SVGs/CutomAppDevelopment'
import DesignAppDevelopment from '../SVGs/DesignAppDevelopment'
import NativeAppDevelopment from '../SVGs/NativeAppDevelopment'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import mobile_mockup4 from './assets/Images/dc5e88cb-46a8-4831-a621-1bc345e7d101-cover-removebg-preview.webp'
import Stats_image from './assets/Images/section_01.webp'

const home1 = [
    {
        id: 1,
        preTitle: 'DevBerry',
        title: 'New Solutions for New Generation',
        title2: 'Technology is in our DNA',
        title3: 'Inovation is in our DNA',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        img: mobile_mockup4
    }
]
const home2 = [
    {
        id: 1,
        title: 'Meet the Professionals',
        dis: 'We create e-commerce solutions and slick, eye-pleasing and user-friendly online stores, that let you focus on your business.',
        img: Stats_image
    }
]
const home3 = [
    {
        id: 1,
        statsName: 'PROSPERITY',
        statsValue: '80%'
    },
    {
        id: 2,
        statsName: 'Quality',
        statsValue: '90%'
    },
    {
        id: 3,
        statsName: 'GUARANTY',
        statsValue: '65%'
    },
]
const servicesCircles = [
    {
        id: 1,
        name: 'Android App Development',
        dis: '',
        icon: <StayCurrentPortraitOutlinedIcon fontSize='large' />
    },
    {
        id: 2,
        name: 'Web App Development',
        dis: '',
        icon: <ComputerOutlinedIcon fontSize='large' />
    },
    {
        id: 3,
        name: 'Ui/Ux',
        dis: '',
        icon: <AppShortcutOutlinedIcon fontSize='large' />
    },
    {
        id: 4,
        name: 'Desktop App Development',
        dis: '',
        icon: <DesktopMacOutlinedIcon fontSize='large' />
    },
    {
        id: 5,
        name: 'Search Engine Optimization',
        dis: '',
        icon: <GridViewOutlinedIcon fontSize='large' />
    },
]
const servicesSectionDiscription = [
    {
        id: 1,
        title: 'Services',
        title2: 'Comprehensive Digital Solutions',
        dis: 'Our comprehensive digital solutions are designed to address all aspects of your online presence. From website development to digital marketing, we offer a full suite of services tailored to meet your business needs. Leverage our expertise to enhance your brand and drive growth. Let us handle the complexity so you can focus on your core business.'
    }
]
const allProjects = [
    {
        id: 1,
        name: '',
        discription: '',
        type: '',
        img: '',
    },
    {
        id: 2,
        name: '',
        discription: '',
        type: '',
        img: '',
    },
    {
        id: 3,
        name: '',
        discription: '',
        type: '',
        img: '',
    },
]
const projectsList = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Web App Development'
    },
    {
        id: 3,
        name: 'Andoid App Development'
    },
    {
        id: 4,
        name: 'Software Development'
    },
    {
        id: 5,
        name: 'UI/UX'
    },
    {
        id: 6,
        name: 'SEO'
    },
]
const teamSection = [
    {
        id: 1,
        title: 'Tema Members',
        dis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]
const teamMembers = [
    {
        id: 1,
        name: 'Faiq Dogar',
        designation: 'Mern Stack Developer',
        facebookIcon: <FacebookIcon fontSize='small' />,
        facebookAccount: '',
        gmailIcon: <GoogleIcon fontSize='small' />,
        gmailAvvount: 'faiqd17@gmail.com',
        instagramIcon: <InstagramIcon fontSize='small' />,
        instagramAccount: 'faiq_dogar4363',

    }
]
const testimonialsList = [
    {
        id: 1,
        name: 'Harry Potter',
        date: 'Augest 1, 2024',
        text: 'We were looking for a reliable partner to develop a custom web application for our e-commerce business. ArcTech exceeded our expectations in every way.',
        img: ''
    },
    {
        id: 2,
        name: 'Hermoine Granger',
        date: 'July 25, 2024',
        text: 'We hired them to develop our web app, and the team did an excellent job. They delivered on time and provided ongoing support. The app is streamline our business processes.',
        img: ''
    },
    {
        id: 3,
        name: 'Ron Wiesly',
        date: 'July 18, 2024',
        text: 'Really satisfied with ArcTech expertise in web app development. They understood our business needs and provided valuable insights throughout the development process.',
        img: ''
    },
    {
        id: 4,
        name: 'Serius Black',
        date: 'June 12, 2024',
        text: 'We collaborated with ArcTech for a custom web app development project. They delivered an exceptional web app that aligns with our business goals.',
        img: ''
    },
    {
        id: 1,
        name: 'Albus Dumberdor',
        date: 'May 28, 2024',
        text: 'Working with ArcTech has been a game-changer for our business. We were searching for a web app development company that could handle a complex project, and we found it in ArcTech.',
        img: ''
    },
]
const mobileApp1 = [
    {
        id: 1,
        title: `Mobile App Development `,
        para: `Zai Systems is one of the best companyies in Movile App Development.`,
        para2: `At ArchTech, we pride ourselves on being one of the best leading mobile app development companies in Pakistan, delivering top-notch application development services that cater to businesses of all sizes.`,
    }
]
const mobileApp2 = [
    {
        id: 1,
        title: 'Android App Development Services',
        para: `Our Android mobile app development company specializes in creating feature-rich, 
      high-performance apps for the Android platform. Our developers are proficient in the latest 
      technologies and follow best practices to ensure your app stands out in the crowded marketplace.`,
        img_svg: <AndoidAppDevelopment />
    },
    {
        id: 2,
        title: 'IOS App Development Services',
        para: `As a mobile app development company for iOS, we develop elegant and intuitive apps that 
      provide a seamless user experience. Our iOS development team is well-versed in Swift and Objective-C, 
      ensuring your app is built to the highest standards.`,
        img_svg: <IOSAppDevelopemnt width={'291.232796'} height={'272.000408'} />
    },
    {
        id: 3,
        title: 'Flutter App Development Services',
        para: `As a mobile app development company for iOS, we develop elegant and intuitive apps that 
      provide a seamless user experience. Our iOS development team is well-versed in Swift and Objective-C, 
      ensuring your app is built to the highest standards.`,
        img_svg: <Flutter width={'262.08'} height={'222.6179072'} />
    },
    {
        id: 4,
        title: 'Custom Mobile App Development',
        para: `We offer custom mobile app development tailored to your specific business needs. Whether you need 
      a simple app or a complex enterprise solution, our team has the expertise to deliver a product that meets your requirements.`,
        img_svg: <CutomAppDevelopment width={'389.6'} height={'291.660528'} />
    },
    {
        id: 5,
        title: 'Mobile App Design Services',
        para: `A great app starts with a great design. Our mobile app design services focus on creating intuitive 
      and visually appealing interfaces that enhance user engagement and satisfaction.`,
        img_svg: <DesignAppDevelopment width={'296.9672'} height={'285.03'} />
    },
    {
        id: 6,
        title: 'Native Mobile App Development',
        para: `Our native mobile app development services ensure that your app leverages the full potential of the 
        device’s capabilities. We develop high-performance apps that provide a superior user experience.`,
        img_svg: <NativeAppDevelopment width={'320.63'} height={'258.8728'} />
    },
    {
        id: 7,
        title: 'Mobile App Prototyping',
        para: `Before we start the development process, we create detailed prototypes to give you a clear vision of the final product. Our mobile app prototyping services help you make informed decisions and ensure that the end product aligns with your expectations.`,
        img_svg: <MobilePrototyping width={'328.703568'} height={'240.693212'} />
    }
]
const contact1 = [
    {
        id: 1,
        title: `Contact US`,
        para: `Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.`,
    }
]
const contact2 = [
    {
        id: 1,
        sectionName: 'Our Contacts',
        title: `Get in Touch`,
        para: `Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form so that we can get to know you and understand your project.`,
    }
]
const contact3 = [
    {
        id: 1,
        title: `Visit Us`,
        para: `Lari Adda, Faisalabad, Pakistan`,
        icon: <LocationOnIcon fontSize='large' />
    },
    {
        id: 2,
        title: `Mail Us:`,
        para: `devberry@mail.com`,
        icon: <MailIcon fontSize='large' />
    },
    {
        id: 3,
        title: `Phone Us:`,
        para: `+92 310 7665484`,
        icon: <WifiCalling3Icon fontSize='large' />
    }
]
const portfolio1 = [
    {
        id: 1,
        title: `Showcase`,
        para: `Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat sagittis sem nibh id elit.`,
    }
]

export const Data = [
    {
        id: 1,
        page: '/',
        HomeHeroSection: home1,
        HomeStatsSection1: home2,
        HomeStatsSection2: home3,
        HomeServicesCircles: servicesCircles,
        HomeServicesdis: servicesSectionDiscription,
        HomeTeamSection: teamSection,
        HomeTeamMembers: teamMembers,
        HomeTestimoials: testimonialsList
    },
    {
        id: 2,
        page: '/Services',
        HomeTestimoials: testimonialsList
    },
    {
        id: 3,
        page: '/Contact',
        ContactHeroSection: contact1,
        FirstSectionData: contact2,
        FirstSectionData2: contact3
    },
    {
        id: 4,
        page: '/Portfolio',
        PortfolioHeroSection: portfolio1,
    }
]
export const SingleServiceData = [
    {
        id: 1,
        service: 'Mobile App Developemnt',
        HeroSectionData: mobileApp1,
        MarqueeData: 'ArchTech Industries',
        SingleServicelist: mobileApp2,
        ServiceTestimoials: testimonialsList
    }

]
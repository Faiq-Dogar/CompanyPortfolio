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
import ApiIcon from '@mui/icons-material/Api';
import WebhookIcon from '@mui/icons-material/Webhook';
import TerminalIcon from '@mui/icons-material/Terminal';

import mobile_mockup4 from './../assets/Images/dc5e88cb-46a8-4831-a621-1bc345e7d101-cover-removebg-preview.webp'
import Stats_image from './../assets/Images/section_01.webp'
import Team_person_1 from './../assets/Images/Faiq-Dogar.webp'
import Team_person_2 from './../assets/Images/Ch-Abdullah.webp'
import Team_person_3 from './../assets/Images/Zohaib-Yasin.webp'

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
        img: Stats_image,
        home3: [
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
    }
]
const servicesCircles = [
    {
        id: 1,
        name: 'Android App Development',
        dis: 'Portrait mode solutions for mobile and web applications.',
        icon: <StayCurrentPortraitOutlinedIcon fontSize='large' />,
        top: -9,
        right: 39,
        left: ''
    },
    {
        id: 2,
        name: 'Web App Development',
        dis: 'Advanced computer solutions and hardware integration.',
        icon: <ComputerOutlinedIcon fontSize='large' />,
        top: 30,
        right: -8,
        left: ''
    },
    {
        id: 3,
        name: 'Ui/Ux',
        dis: 'Shortcut app development for improved user efficiency.',
        icon: <AppShortcutOutlinedIcon fontSize='large' />,
        top: 78,
        right: 7,
        left: ''
    },
    {
        id: 4,
        name: 'Desktop App Development',
        dis: 'Desktop and Mac applications tailored to your needs.',
        icon: <DesktopMacOutlinedIcon fontSize='large' />,
        top: 78,
        right: '',
        left: '7'
    },
    {
        id: 5,
        name: 'Search Engine Optimization',
        dis: 'Grid view designs and layouts for optimized user experience.',
        icon: <GridViewOutlinedIcon fontSize='large' />,
        top: 30,
        right: '',
        left: -8
    },
]
const servicesSectionDiscription = [
    {
        id: 1,
        preTitle: 'Services',
        title: 'Comprehensive Digital Solutions',
        dis: 'Our comprehensive digital solutions are designed to address all aspects of your online presence. From website development to digital marketing, we offer a full suite of services tailored to meet your business needs. Leverage our expertise to enhance your brand and drive growth. Let us handle the complexity so you can focus on your core business.'
    }
]
const servicesOfferingHead = [
    {
        id: 1,
        title: 'We Offer a Wide Variety of IT Services'
    }
]
const servicesOfferingsList = [
    {
        id: 1,
        preTitle: 'Word of the Day',
        icon: <ApiIcon fontSize='large'/>,
        title: 'Custom Software Development',
        dis: 'We help businesses elevate their value through custom software development, product design, QA and consultancy.',
        serviceList: [
            {
                id: 1,
                dis: 'Ecommerce Solutions'
            },
            {
                id: 2,
                dis: 'Client Website'
            },
            {
                id: 3,
                dis: 'Client Mobile Apps'
            },
        ]
    },
    {
        id: 2,
        preTitle: 'Word of the Day',
        icon: <WebhookIcon fontSize='large'/>,
        title: 'Outsoursing Project Development',
        dis: 'We help businesses elevate their value through custom software development, product design, QA and consultancy.',
        serviceList: [
            {
                id: 1,
                dis: 'User Interface'
            },
            {
                id: 2,
                dis: 'Search Engine Optimization'
            },
            {
                id: 3,
                dis: 'User Experience'
            },
        ]
    },
    {
        id: 3,
        preTitle: 'Word of the Day',
        icon: <TerminalIcon fontSize='large'/>,
        title: 'Software Product Development',
        dis: 'We help businesses elevate their value through custom software development, product design, QA and consultancy.',
        serviceList: [
            {
                id: 1,
                dis: 'Mobile App Development'
            },
            {
                id: 2,
                dis: 'Software As A Service'
            },
            {
                id: 3,
                dis: 'Desktop Applications'
            },
        ]
    },
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
        profile: Team_person_1,
        facebookAccount: 'Faiq dogar',
        gmailAccount: 'faiqd17@gmail.com',
        instagramAccount: 'faiq_dogar4363',
    },
    {
        id: 2,
        name: 'Abdullah Chaudhary',
        designation: 'Desktop App Developer',
        profile: Team_person_2,
        facebookAccount: 'Chaudhary Abdullah',
        gmailAccount: 'myselfabdullah009@gmail.com',
        instagramAccount: 'myselfAbdullah',
    },
    {
        id: 3,
        name: 'Zohaib Yasin',
        designation: 'Mobile App Developer',
        profile: Team_person_3,
        facebookAccount: '',
        gmailAccount: '',
        instagramAccount: '',
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

const projects = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
        type: 'Web Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
        type: 'Android Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
        type: 'Software Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
        type: 'Web Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
        type: 'Android Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
        type: 'Software Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
        type: 'UI/UX'
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
        type: 'Android Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
        type: 'Web Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
        type: 'UI/UX'
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
        type: 'Web Development'
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
        type: 'SEO'
    },
]

export const Data = [
    {
        id: 1,
        page: '/',
        HomeHeroSection: home1,
        HomeStatsSection1: home2,
        HomeServicesCircles: servicesCircles,
        HomeServicesdis: servicesSectionDiscription,
        HomeProjects: projects,
        HomeTeamSection: teamSection,
        HomeTeamMembers: teamMembers,
        HomeTestimoials: testimonialsList
    },
    {
        id: 2,
        page: '/Services',
        ServiceServicesCircles: servicesCircles,
        ServiceServicesdis: servicesSectionDiscription,
        ServiceOfferingsHead: servicesOfferingHead,
        ServiceOfferingsList: servicesOfferingsList,
        ServiceTestimoials: testimonialsList
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
        PrtfolioProjects: projects,
    },
    {
        id: 4,
        page: '/About',
        AboutStatsSection1: home2,
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
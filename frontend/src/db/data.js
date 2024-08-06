import AndoidAppDevelopment from '../SVGs/AndoidAppDevelopment'
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
      img_svg: <AndoidAppDevelopment/>
    },
    {
      id: 2,
      title: 'IOS App Development Services',
      para: `As a mobile app development company for iOS, we develop elegant and intuitive apps that 
      provide a seamless user experience. Our iOS development team is well-versed in Swift and Objective-C, 
      ensuring your app is built to the highest standards.`,
    },
    {
      id: 3,
      title: 'Flutter App Development Services',
      para: `As a mobile app development company for iOS, we develop elegant and intuitive apps that 
      provide a seamless user experience. Our iOS development team is well-versed in Swift and Objective-C, 
      ensuring your app is built to the highest standards.`,
    },
    {
      id: 4,
      title: 'Custom Mobile App Development',
      para: `We offer custom mobile app development tailored to your specific business needs. Whether you need 
      a simple app or a complex enterprise solution, our team has the expertise to deliver a product that meets your requirements.`,  
    },
    {
      id: 5,
      title: 'Mobile App Design Services',
      para: `A great app starts with a great design. Our mobile app design services focus on creating intuitive 
      and visually appealing interfaces that enhance user engagement and satisfaction.`,
    },
    {
      id: 6,
      title: 'Native Mobile App Development',
      para: `Our native mobile app development services ensure that your app leverages the full potential of the 
      device’s capabilities. We develop high-performance apps that provide a superior user experience.`,
    },
    {
      id: 7,
      title: 'Mobile App Prototyping',
      para: `Before we start the development process, we create detailed prototypes to give you a clear vision of the final product. Our mobile app prototyping services help you make informed decisions and ensure that the end product aligns with your expectations.`,
    }
  ]

export const Data = [
    {
        id: 1,
        page: '/',
        HomeTestimoials: testimonialsList
    },
    {
        id: 2,
        page: '/Services',
        HomeTestimoials: testimonialsList
    }
]
export const SingleServiceData = [
    {
        id: 1,
        service: 'Mobile App Developemnt',
        HeroSectionData: mobileApp1,
        MarqueeData: 'ArchTech Industries',
        SingleServicelist: mobileApp2
    }

]
import {
    mongodb,git,
    clg, school, uni,
  } from "../assets";

  const profiles = [

    {
      link: "https://www.coursera.org/account/accomplishments/verify/ZVRTJ85WD62L",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/109px-Python-logo-notext.svg.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/verify/R72S7RLQ2RKU",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    {
      link: "https://www.hackerrank.com/profile/hanannawaz0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    
  ];

  const achievements = [
    {
      title: "💰📚 Awarded the 2024 Merit Scholarship from NUML for achieving one of the highest percentages in the batch.",
    },
    {
      title: "🥇 1st Position : My FYP project, NUMLPay made a remarkable impact at the NUML open house and job fair 2024, securing the first position.",
    },
    {
      title: "🏆 Shortlisted in AIEF 1st National AI Championship 2023 : My FYP project, NUMLPay selected in AIEF, held at LUMS, organized by Soliton Technology.",
    },
    {
      title: "💻🧑🏻‍🎓 Technical Team Member of GDSC, NUML (2021 - 2022)",
    },
    {
      title: "🥈 2nd Position in SoftCom 2021 : Achieved 2nd place in the Junior Coding Challenge at NUML's SoftCom 2021, solving 4.5/5 questions in Java.",
    },
    {
      title: "💰📚 Received the Education Scholarship from the Government Employees Benevolent Fund for children of government employees. (2017 - 2024)",
    },
    
  ]
  
  const technologies = [
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/109px-Python-logo-notext.svg.png",
    },
    {
      name: "SQL",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Apache Spark",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Spark-logo-192x100px.png",
    },
    {
      name: "Apache Kafka",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/240px-Apache_kafka_wordtype.svg.png",
    },
    {
      name: "Apache Airflow",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/240px-AirflowLogo.png",
    },
    {
      name: "Snowflake",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/440px-Snowflake_Logo.svg.png",
    },
    {
      name:"AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "git",
      icon: git,
    },
  ];

  const list = [
    {
      id: "dataengineering",
      title: "Data Engineering",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const deProject = [
    {
      name: "Flight Tragedy Analysis ",
      description:
      "Flight Tragedy Analysis is a comprehensive data analysis project focused on examining aviation accidents and incidents from 1905 to 2009. This project provides users with valuable insights into historical plane crashes and their associated data.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: "https://raw.githubusercontent.com/Hanan-Nawaz/FlightTragedyAnalysis/main/data_model/flight-tragedy-analysis-logo.jpg",
      source_link: "https://github.com/Hanan-Nawaz/FlightTragedyAnalysis",
      source_code_link: "https://github.com/Hanan-Nawaz/FlightTragedyAnalysis",
    },
    {
      name: "Daraz Price Comparator 🌐🛍️",
      description:
      "Daraz Price Comparator 🌐🛍️ Compare prices effortlessly! 🔄 Find deals in 🇵🇰 Pakistan, 🇧🇩 Bangladesh, 🇳🇵 Nepal, and 🇱🇰 Sri Lanka. Python, Requests, BeautifulSoup, and Airflow power smart shopping. Save time, shop savvy! 🛒💡",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/Daraz-Price-Comparator/raw/main/process-imgs/daraz-price-comparator-logo.gif",
      source_link: "https://github.com/Hanan-Nawaz/Daraz-Price-Comparator",
      source_code_link: "https://github.com/Hanan-Nawaz/Daraz-Price-Comparator",
    },
    {
      name: "NUMLPay",
      description:
      "Final Year Project :  Streamlining Fee Payments with Python-Based ETL and SQL Data Engineering Leveraging Apache Airflow for automation, our solution delivers efficient data processing and insightful analytics",
            tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "c_sharp",
          color: "green-text-gradient",
        },
        {
          name: "fyp",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/NUMLPay/blob/WebApp/NUMLPay-WebApp/images/logo.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/NUMLPay/tree/WebApp",
      source_code_link: "https://github.com/Hanan-Nawaz/NUMLPay/tree/WebApp",
    },
    {
      name: "PyBanking",
      description:
      "PyBankingApp is a Python practice project that focuses on essential programming concepts. It provides a simulated banking experience with features like account creation, balance management, transaction logging, and customer data storage using files.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "filehandling",
          color: "pink-text-gradient",
        },
      ],
      image: "https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/PyBankingApp",
      source_code_link: "https://github.com/Hanan-Nawaz/PyBankingApp",
    },
    {
      name: "PyMongo Playground",
      description:
      "In pymongo-playground, explore concise, well-documented code snippets for hands-on PyMongo practice, enabling effective MongoDB integration into Python projects.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/pymongo-playground/raw/main/pymongo.png",
      source_link: "https://github.com/Hanan-Nawaz/pymongo-playground",
      source_code_link: "https://github.com/Hanan-Nawaz/pymongo-playground",
    },
  ];
  
  export const webProject = [
    {
      name: "A Charity Website",
      description:
      "Developed a charity website enabling volunteers to add student needs. Donors can easily browse and contribute towards fulfilling these needs. Facilitated seamless connections between volunteers, students, and donors.",
      tags: [
        {
          name: "c_sharp",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "web_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/A%20Blessed%20Society%20-%20NUML",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/A%20Blessed%20Society%20-%20NUML",
    },
    {
      name: "NUML MSMS",
      description:
      "Developed NUML MSMS, a Minute Sheet Management System for NUML. Allows departments to upload expense minute sheets, accessible by higher management for review. Streamlined the expense tracking and approval process.",
      tags: [
        {
          name: "c_sharp",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "web_dev",
          color: "pink-text-gradient",
        },
      ],
      image: uni,
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/Minute%20Sheet%20Management%20System%20-%20NUML",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/Minute%20Sheet%20Management%20System%20-%20NUML",
    },
    {
      name: "Data Management System",
      description:
      "Created a Data Management System (DMS) for accounting, designed to track financial records and generate balance sheets. Simplified record-keeping and automated the generation of financial summaries. Enhanced accuracy and efficiency in financial reporting.",
      tags: [
        {
          name: "c_sharp",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "web_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://raw.githubusercontent.com/Hanan-Nawaz/My_Bachelor_Repo/main/Internship%20at%20NUML/DMS%20-%20NUML/DMS/DMS.ico",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/DMS%20-%20NUML",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/DMS%20-%20NUML",
    },
    {
      name: "HRMS NUML",
      description:
      "Contributed to the development of the Human Resource Management System (HRMS) for NUML. Collaborated on features to streamline HR processes and improve operational efficiency.",
      tags: [
        {
          name: "c_sharp",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "web_dev",
          color: "pink-text-gradient",
        },
      ],
      image: uni,
      source_link: "https://hr.numl.edu.pk/Account/Login",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/HR%20Management%20System%20-%20NUML",
    },
    {
      name: "Online Job Portal NUML",
      description:
      "This is a platform where administrators can add job postings and users can apply for them, leveraging data engineering and web development skills for efficient functionality. It seamlessly integrates job management and user applications, ensuring a robust and user-friendly experience.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "c_sharp",
          color: "green-text-gradient",
        },
        {
          name: "Web_Dev",
          color: "pink-text-gradient",
        },
      ],
      image: uni,
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/Online%20Job%20Portal%20-%20NUML",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Internship%20at%20NUML/Online%20Job%20Portal%20-%20NUML",
    },
    {
      name: "Hotel Management System",
      description:
      "Semester 2 (DSA) : Developed a Hotel Management System during the DSA course in my bachelor's program. Features include booking management, search and cancellation options, staff management, and hotel details display.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "dsa",
          color: "green-text-gradient",
        },
        {
          name: "file_handling",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Data%20Structures%20and%20Algorithm",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Data%20Structures%20and%20Algorithm",
    },

    {
      name: "Age Calculator",
      description:
      "Semester 6 (Android) : The age calculator calculates age given a date of birth in years, months and days. You can also use this calculator to find length of time between two dates. The age calculator finds the age time span in years months and days.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android_studio",
          color: "green-text-gradient",
        },
        {
          name: "android_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/93150331/178977494-19890ce0-0198-4b33-b8cb-c9d15f79e585.png",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/AgeCalculator",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/AgeCalculator",
    },
    {
      name: "Custom Stopwatch",
      description:
      "Semester 6 (Android) : Custom StopWatch is basically a project where your minute have custom seconds like in Real World, Minute have 60 seconds but if you want a minute consists of 100 seconds, this app allows you to do so and if you want a minute consists of 15 seconds this app allows you to do so.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android_studio",
          color: "green-text-gradient",
        },
        {
          name: "android_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Mobile%20Android%20Development/Custom%20Stop%20Watch/app/src/main/res/drawable/stopwatch.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/Custom%20Stop%20Watch",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/Custom%20Stop%20Watch",
    },
    {
      name: "NewDesk",
      description:
      "Semester 6 (Android) : Developed NewDesk, an Android app that allows users to view news from various categories as well as their own added news. Provides a personalized news experience with category-based browsing and user-generated content.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "android_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Mobile%20Android%20Development/NewDesk/app/src/main/res/drawable/newsdesk.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/NewDesk",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/NewDesk",
    },
    {
      name: "QuizZone",
      description:
      "Semester 6 (Android) : Created QuizZone, a platform for students and IT professionals to enhance and polish their skills. Users can select a programming language, answer timed questions, and receive a mark sheet at the end of each test.",
           tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "android_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Mobile%20Android%20Development/QuizZone/app/src/main/res/drawable/quizzone.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/QuizZone",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Mobile%20Android%20Development/QuizZone",
    },
    {
      name: "Bank of NUML",
      description:
      "Semester 4 (Operating System) : Developed the Bank of NUML OS project, featuring account management options like opening, viewing, searching, withdrawing, depositing, modifying, and closing accounts. Includes a user-friendly menu for easy navigation and account operations.",
            tags: [
        {
          name: "linux",
          color: "blue-text-gradient",
        },
        {
          name: "bash",
          color: "green-text-gradient",
        },
        {
          name: "operating_system",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1601597110547-78516f198ce4?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Operating%20System",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Operating%20System",
    },
    {
      name: "Bank Management System",
      description:
      "Semester 1 (Programming Fundamentals) : Developed the project, a console-based application for managing bank accounts.",
            tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "pf",
          color: "green-text-gradient",
        },
        {
          name: "programming_fundamentals",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Programming%20Fundamentals",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Programming%20Fundamentals",
    },
    {
      name: "Bank Management System",
      description:
      "Semester 4 (SDA) : Developed a Bank Management System as part of a Software Design and Architecture project. The system includes comprehensive functionalities for account management, transactions, and balance inquiries.",
            tags: [
        {
          name: "c_sharp",
          color: "blue-text-gradient",
        },
        {
          name: "dot_net",
          color: "green-text-gradient",
        },
        {
          name: "sda",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Software%20Design%20%26%20Architecture",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Software%20Design%20%26%20Architecture",
    },
    {
      name: "NewsDesk",
      description:
      "Semester 6 (Web Engineering - I) : Developed NewDesk, a web app that allows users to view news from various categories as well as their own added news. Provides a personalized news experience with category-based browsing and user-generated content.",
            tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "html_css_js",
          color: "green-text-gradient",
        },
        {
          name: "web_dev",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Mobile%20Android%20Development/NewDesk/app/src/main/res/drawable/newsdesk.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Web%20Engineering%20-%201",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Web%20Engineering%20-%201",
    },
    {
      name: "NUML Network",
      description:
      "Semester 5 (Computer Networks) : Design and Simulate NUML's Campus Network, A Robust Architecture with Cisco Packet Tracer Explore the intricate design of NUML's network infrastructure, simulating VLANs, routing protocols, and security configurations. ",
                  tags: [
        {
          name: "packet_tracer",
          color: "blue-text-gradient",
        },
        {
          name: "computer_networks",
          color: "green-text-gradient",
        },
        {
          name: "numl",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Computer%20Networks/Picture%201.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Computer%20Networks",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Computer%20Networks",
    },
    {
      name: "E Doctor",
      description:
      "Semester 5 (Human Computer Interaction) : Designing an E-Doctor Prototype, A Vision for Future Healthcare Develop virtual consultations, and personalized treatment plans to enhance patient care. ",
                  tags: [
        {
          name: "adobe_xd",
          color: "blue-text-gradient",
        },
        {
          name: "hci",
          color: "green-text-gradient",
        },
        {
          name: "numl",
          color: "pink-text-gradient",
        },
      ],
      image: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/blob/main/Human%20Computer%20Interaction/e_doc.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Human%20Computer%20Interaction",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Human%20Computer%20Interaction",
    },
    {
      name: "Implementing RSA Encryption in Python",
      description:
      "Semester 6 (Information Security) : A Secure Information Systems Project Explore the fundamentals of cryptography by developing a robust RSA encryption algorithm using Python. ",
                        tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "info_sec",
          color: "green-text-gradient",
        },
        {
          name: "numl",
          color: "pink-text-gradient",
        },
      ],
      image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Information%20Security",
      source_code_link: "https://github.com/Hanan-Nawaz/My_Bachelor_Repo/tree/main/Information%20Security",
    },
  ];
  
  const experiences = [
    {
      title: "Working Student Data Engineer",
      company_name: "ITCON, NUML",
      icon: uni,
      iconBg: "#383E56",
      date: "Nov 2023 - May 2024",
      link: "",
      points: [
        "Developed and deployed a robust job portal for NUML, ensuring seamless user experience and efficient job matching processes.",
        "Designed and optimized ETL workflows to manage and process internal job-related data, ensuring data integrity, security, and high performance, resulting in a 30% reduction in data retrieval times.",
        "Collaborated with cross-functional teams to integrate new features based on user feedback, improving overall functionality and user satisfaction.",
      ],
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQF3eiOw36f3ig/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1719375720524?e=1723212000&v=beta&t=Rwy3aTMOe100tM6JkDTuUz5tVmehCnbL3bOYB5p4Fdw",
    },
    {
      title: "Junior Data Engineer",
      company_name: "GrowUp Tech Solutions",
      icon: "https://media.licdn.com/dms/image/C560BAQG97ie6CXj7Jg/company-logo_200_200/0/1646708030683?e=1730937600&v=beta&t=0gc-2yIS6ww920xnm40wuLxoxJaGSJpqWtkdCd1q7eI",
      iconBg: "#ffff",
      date: "Aug 2023 - Oct 2023",
      link: "",
      points: [
        "Extract data from API and Database using Python (Pandas) and SQL, Transform raw data into usable data, and Load the usable data into Data warehouse.",
        "Analyzed data in Data Warehouse using SQL and Python and provided stakeholders with visibility into the stats about grow station in Power Bi dashboard.",
      ],
      link: "https://www.linkedin.com/in/abdulhanan0/overlay/1635546042749/single-media-viewer/?profileId=ACoAADbulhYBHKgrbiYnuIrYCDwbMm7ns0GpJk8",
    },
    {
      title: "Full Stack Developer (Intern)",
      company_name: "App Vizta Pvt Ltd.",
      icon: "https://media.licdn.com/dms/image/C4D0BAQF03K_Nyd6xig/company-logo_200_200/0/1669316496093?e=1730937600&v=beta&t=e_zoMdk92rCDM4YcSIJ4u5ZxZFf076sdeda85XhBJQw",
      iconBg: "#000000",
      date: "Mar 2023 - Apr 2023",
      link: "",
      points: [
        "Successfully contributed to the completion of two distinct projects: a Charity Web App and an Email Integration system.",
        "Demonstrated expertise in full-stack development, showcasing the ability to work with a wide range of technologies",
        "Delivered high-quality solutions, highlighting my capacity to translate project requirements into functional and user-friendly applications.",
      ],
      link: "https://media.licdn.com/dms/image/D4D2DAQGRW6E8xQ4DlA/profile-treasury-image-shrink_1280_1280/0/1684873485637?e=1723212000&v=beta&t=JlrhfXM4K5o-v-UH5WEuC9K27nGT2zWSoR5w_RjCO7k",
    },
    {
      title: "Full Stack Developer (Intern)",
      company_name: "ITCON, NUML",
      icon: uni,
      iconBg: "#383E56",
      date: "Oct 2021 - May 2022",
      link: "",
      points: [
        "Leveraged SQL and MSSQL databases to design, manage, and optimize data storage, retrieval, and manipulation, enhancing system performance and reliability.",
        "Successfully delivered two impactful projects, Minute Sheet Management System for NUML and Donations and Volunteer Management System for a welfare organization, showcasing strong project management and problem-solving skills.",
      ],
      link: "https://media.licdn.com/dms/image/v2/D4D2DAQF3eiOw36f3ig/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1719375720524?e=1723212000&v=beta&t=Rwy3aTMOe100tM6JkDTuUz5tVmehCnbL3bOYB5p4Fdw",
    },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Science",
      branch:
        "Software Engineering",
      marks:
        "CGPA : 3.78 / 4.0",
      name: "National University of Modern Languages, Islamabad (Pakistan)",
      year: "(2020 - 2024)",
      image: uni,
    },
    {
      degree:
        "HSSC",
      branch : "Pre Engineering",
      marks:
        "Percentage : 82.27 %",
      name: "Punjab College of Sciences, Gujranwala (Pakistan)",
      year: "(2018 - 2020)",
      image: clg,
    },
    {
      degree:
        "SSC",
      branch: "Science",
      marks:
        "Percentage : 85.90 %",
      name: "Angels School System, Daska (Pakistan)",
      year: "2016 - 2018",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };

import {
    mongodb,git,
    clg, school, uni,
    sql_cert
  } from "../assets";

  const profiles = [

   {
      name: "Front-End Web Development with React",
      description:
          "This course teaches you how to build dynamic and responsive user interfaces using React, a powerful JavaScript library for front-end development. You'll learn core concepts such as component-based architecture, state management, and React hooks to create clean, maintainable code. By the end of the course, you'll be able to develop real-world web applications with modern tools and best practices.",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~AHGV584788RN/CERTIFICATE_LANDING_PAGE~AHGV584788RN.jpeg",
      source_link: "https://www.coursera.org/account/accomplishments/verify/AHGV584788RN",
    },
   {
      name: "SQL (Advanced) Certificate",
      description:
        " Earned certification by completing advanced SQL challenges on HackerRank, demonstrating strong proficiency in data querying and manipulation. Covered complex topics such as subqueries, joins, aggregation, window functions, and performance optimization. Validated ability to write efficient, production-ready SQL for real-world data problems",
      image: sql_cert,
      source_link: "https://www.hackerrank.com/certificates/67fffada6913",
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
        title: "💻 Received a laptop through the Prime Minister Youth Program of Pakistan (2023).",
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
      name: "JavaScript",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAe1BMVEXw208yMzDx32fw3FPx3mIwMTD44lAoKy9/djs1NjDy3U8sLi/75VH14FAhJS4mKS8cIS5lXjYVHC6Jfzzk0E2/r0YPGC13bznbyEtNSjNgWjYAEC2ZjT/KuUjDs0atn0KlmEFsZTi1pkTTwUnz4Xc/PjFVUTSQhT1IRTIylFD+AAADJUlEQVRoge2Y2ZajIBCGtbsFg4A04hKjictkef8nHIyoaJyJacw5fWHdGfETi6q/qmJ9vM/+WOh99mW90Tb4Bt/gG3yDb/ANvsE3+Abf4Bt8g/9meDsYGsEBVjYhAyCSuq4FAFP+cjjJ0u/WdAYBuXv2KGPU28UhID+EA5d6jUFHg4PjOYKOfTcH8nM12v0rcNgydv3zCLhckRWfx0Sjm8ARSqk9MZpqJ2sCB8EDW9Lj4cAN4Cg/PLJtm5/6UzWA44vXuZpyTrsL37G6T/s5HCWs88T+lOeny91HDis/e6f/HE5OyuN+DAhCBBeRfI8d4jUOtL+2RfsDzjh3LT2NDOBl62Uv7cKDlDkeKcCacEQm4mIAj7tra0YQTeFXXwXLFf+DbhAtVReK8hgf1NYQjgTvktLfFbN4kwwtYUd3KA3EI95EW5JIkxSfl/kUb6SKGdPotsf2E7xRsQDxiG57UZqAteCyEkXOGM8KsE6xkIYr3x/RbV6SFVSxNSLcAxzR6XfvGVO4hXASQ6o7hwUd3Rje4EXmMG+gHxK0GryRQ1LtB7xXghXhVtN5hbe+F4CqfKwFb/BBr2THteEyLtUKm2ZkEXzon+aSiIxqDxJq61DFyxM4EaJXkr7ydDWYoIILnY5VQkF3ARzhEyz78pu24eCcsbp5vDF40asQoYvhCNQX7rCwXYg+1ZNtQUYg+W50xdeyHYR0qc8JCrjXdN0JaIYSfKWaQ5G4stZLNBW4mVnkisRWicrCJ3BSwZbmsEJYVuL2cRaiBt61/FII3Vr+YCXXvlf3n8U5GSoBjaRS9+rE7gFEqqEMQU7PNyfq5XFBhpLdIBeaLlEVZjjWm3NHV65D/VRbUD0uM4riqU+eGyvUpwVdgP0nWkA109wfwi7KJX3u7VLPFzX/INSF9L5vfhpqJMIZg1O0HLnAskpEkn2k4R3m53r9tWSsH6DubY954eIaKrMwlbEApfmM7YtpGytjO7jJAbdZACn30gq80p8jII5ZEMduViWEzN1HSdUsiIMiFy9P0HIiAdLIdNfDAnJf0Mwukzu//y+RDf6KoS/r83328Rer3zeMCluSWgAAAABJRU5ErkJggg==",
    },
    {
      name: "Node js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png",
    },
    {
      name: "React js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/500px-React-icon.svg.png",
    },
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/1200px-Official_CSS_Logo.svg.png",
    },
    {
      name: "Bootstrap",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/500px-Bootstrap_logo.svg.png",
    },
    {
      name: "Tailwind",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/500px-Tailwind_CSS_logo.svg.png",
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
      name: "Linux",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/330px-Tux.svg.png",
    },
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/300px-Python-logo-notext.svg.png",
    },
    {
      name: "IT Support",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Robot_arm_icon.svg/1280px-Robot_arm_icon.svg.png",
    },
    {
      name: "git",
      icon: git,
    },
  ];

  const list = [
    {
      id: "softwareengineering",
      title: "Software Engineering",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const webProject = [
      {
      name: "NUML Faculty Analysis ",
      description:
          "This project analyzes faculty data from NUML's CS and SE departments, comparing the number of faculty, designations (e.g., Lecturers, Assistant and Associate Professors), and PhD qualifications. It also includes a detailed list of all faculty members with their designations, departments, and contact information.",
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
          name: "tableau",
          color: "pink-text-gradient",
        },
      ],
      image: "https://raw.githubusercontent.com/Hanan-Nawaz/NUML_Faculty_Analysis/main/Supporting%20Material/workflow.png",
      source_link: "https://public.tableau.com/app/profile/abdul.hanan.nawaz/viz/NUML_Faculty_Analysis/Dashboard1?publish=yes",
      source_code_link: "https://github.com/Hanan-Nawaz/NUML_Faculty_Analysis",
    },
      {
      name: "Pakistani University Analysis ",
      description:
      "The Pakistani Universities Analysis project processes and visualizes data on higher education in Pakistan. It uses an ETL pipeline to extract data from Kaggle, clean and transform it in Python, and load it into a MySQL database. The data is visualized in Tableau, showing sectors (public/private), establishment trends, and distribution.",
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
          name: "tableau",
          color: "pink-text-gradient",
        },
      ],
      image: "https://raw.githubusercontent.com/Hanan-Nawaz/Pakistani_Universities_Analysis/main/Supporting%20Material/workflow.png",
      source_link: "https://public.tableau.com/app/profile/abdul.hanan.nawaz/viz/Pakistani_Universities_Analysis/Dashboard1?publish=yes",
      source_code_link: "https://github.com/Hanan-Nawaz/Pakistani_Universities_Analysis",
    },
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
      image: "https://raw.githubusercontent.com/Hanan-Nawaz/FlightTragedyAnalysis/refs/heads/main/FlightTragedyAnalysis-roadmap.png",
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
      image: "https://github.com/Hanan-Nawaz/Daraz-Price-Comparator/raw/main/process-imgs/daraz-price-comparator-process.png",
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
      image: "https://github.com/Hanan-Nawaz/NUMLPay/blob/main/Documentation/Logo/NUMLPAY.png?raw=true",
      source_link: "https://github.com/Hanan-Nawaz/NUMLPay",
      source_code_link: "https://github.com/Hanan-Nawaz/NUMLPay",
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
  
  export const deProject = [
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
      title: "Junior Software Engineer",
      company_name: "Medgateway Deutschland",
      icon: 'https://medgateway.de/static/media/logo2.e28f79959f13c5b86291.jpeg',
      date: "Aug 2024 - Feb 2025",
      iconBg: "#ffff",
      points: [
        "Built the company website from scratch using React.js (frontend) and Node.js (backend).",
        "Designed and implemented the MySQL database (ERD, EERD).",
        "Deployed the full-stack application on Namecheap.",
        "Maintained the website post-launch: bug fixes, performance, and new feature integration.",
        "Implemented multilingual support (German and English).",
        "Developed key documentation: Gantt charts, functional requirements, and UML diagrams.",
        "Built automated website testing using Python Selenium.",

      ],
    },
    {
      title: "Software Engineer & IT Support (Werkstudent)",
      company_name: "National University of Modern Languages",
      icon: uni,
      date: "Nov 2023 - May 2024",
      iconBg: "#383E56",
      points: [
        "Contributed to the development of the NUML Job Portal as part of a small, focused team.",
        "Built the backend of the portal from scratch, helping deliver a fully functional system.",
        "Developed the frontend interface to ensure a smooth and user-friendly experience.",
        "Worked under the supervision of senior developers and participated in regular planning sessions.",
        "Set up databases.",
        "Provided technical support for software.",

      ],
    },
    {
      title: "Junior Software Engineer (part-time)",
      company_name: "App Vizta (Pvt) Ltd.",
      icon: 'https://appvizta.com/wp-content/uploads/2024/09/AppVizta-Logo-1.png',
      iconBg: "#ffff",
      date: "Mar 2023 - April 2023",
      points: [
        "Developed a charity web application from scratch within 2 months, handling the complete lifecycle from planning to deployment.",
        "Built and integrated the frontend, backend, and database, ensuring a seamless user experience and secure data handling.",

      ],
    },
    {
      title: "Software Engineer & IT Support (Werkstudent)",
      company_name: "National University of Modern Languages",
      icon: uni,
      iconBg: "#383E56",
      date: "Oct 2021 - May 2022",
      points: [
      "Developed the Minute Sheet Management System, streamlining academic and administrative documentation processes.",
      "Created the Donations and Volunteer Management System to support university fundraising and volunteer coordination.",
      "Managed and optimized SQL and MSSQL databases to ensure performance and data integrity.",
      "Assisted users in creating new accounts on the portal.",
      "Helped users with password resets and login problems.",
      ],
    },
    {
      title: "Junior Software Engineer (Freelance)",
      company_name: "Upwork",
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAXVBMVEVHcEwFBQUHBwcAAAAFBQUCAgIDAwMCAgIEBAQDAwMAAAAGBgYBAQEzMzNISEhYWFiPj4/v7++7u7vl5eUeHh7////d3d2dnZ3V1dX5+fnMzMxoaGivr69/f39xcXGjXpfaAAAAH3RSTlMAJlmY1fb+HYrt/9ZE+vz47P/2/vr//fj4//n0+/r1u7WdCgAAAUtJREFUeAGVk9eigyAQRG2s2U2w4SBocv//M68Q0vu8cjhDzS7Ji7JSRKoqizx7TL1hkhTiTf0wTHITukXqrdyHtlfEjuVJeHeez/I0XL/0p6SWjbwKbaKA5DVRJ8HLrIqcRXSjJaRZIyKq7bpORzHnWUEiXT+ocH69MT3LOPQA7BQ7iqyUFYBTAYf3mJRBP88WmIKjzKoIzNEA7zC3wEI0DrCht8pUAqIB2npgH+TaogvryejaAJ6979sAqDkClAA3Hg3MvTdNAEaXgOA+wIS+FlAywS8BWDwOsaI69lk9tia0T97jr+HFYj4usow4YFwfPbMHvHEe0BK3WVAknDHWsQhhnW+NMYNOB5WzhKim0WmrjYxN0yhJR325rKhqAL69rLvrPgB0d9239713053g7skppeScqv78aD8/+9cPe1t/+nq/fd7X3/8ff6Ym1Dleb+sAAAAASUVORK5CYII=',
      iconBg: "#ffff",
      date: "Dec 2021 - Mar 2022",
      points: [
        "Created a dynamic and user-friendly platform for 'Learn by Doing Tasks,' enabling learners to acquire practical skills through hands-on activities, fostering an effective learning environment.",
        "Designed and implemented responsive web interfaces, ensuring optimal user experience across various devices, enhancing accessibility for a diverse audience of learners.",
        "Contributed to the advancement of online education by crafting engaging and visually appealing learning materials, thereby facilitating knowledge acquisition and skill development for a broad user base.",
      ],
    },
  ];
  
  const educations = [
    {
      degree: "Master of Science",
      branch:
        "High Integrity systems",
      marks:
        "CGPA : - / 4.0",
      name: "Frankfurt University of Applied Sciences, Frankfurt (Germany)",
      year: "(2025 - Present)",
      image: 'https://frankfurt-uas.de/wp-content/uploads/2024/07/FRA-UAS_Logo_negativ_RGB-400x161.png',
    },
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

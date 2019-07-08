const config = 
 {
     "environment": {
        "type": "non-prod",
        "name": "UAT Environment",
        "description": "This is not a production system; information displayed in this environment should not be considered valid. Please use the [current live system](https://www.jcu.edu.au/) unless testing this application version."
    },
    "support": {
        "email": "MMoss@ReynholmIndustries.com",
        "phone": "0118 999 881 999 119 725...3",
        "name": "Maurice Moss"
    },
    "apis": [
        {
            "name": "eop-schedule",
            "url": "https://api-test.jcu.edu.au/smockler/eop-schedule",
            "version": "0.1.0",
            "options": {"headers": {"X-API-KEY": "YF5dpAPESPDnXDbObl6q3WW166EGfWit"}}
        }
    ],
    "footer": {
        "institution_links": [
            {
                "label": "About JCU",
                "url": "https://www.jcu.edu.au/about-jcu",
                "children": [
                    {
                        "label": "Facts and Figures",
                        "url": "https://www.jcu.edu.au/courses-and-study/why-jcu"
                    },
                    {
                        "label": "Campuses and Maps",
                        "url": "https://www.jcu.edu.au/about-jcu/campuses"
                    },
                    {
                        "label": "Organisational Structure",
                        "url": "https://www.jcu.edu.au/about-jcu/major-university-units"
                    },
                    {
                        "label": "Careers at JCU",
                        "url": "https://www.jcu.edu.au/careers-at-jcu"
                    }
                ]
            },
            {

                "label": "Featured News",
                "url": "https://www.jcu.edu.au/news",
                "children": [
                    {
                        "label": "Events",
                        "url": "https://www.jcu.edu.au/events"
                    },
                    {
                        "label": "@JCU",
                        "url": "https://www.jcu.edu.au/@jcu"
                    },
                    {
                        "label": "Media Contacts",
                        "url": "https://www.jcu.edu.au/news/contact-our-media-team"
                    }
                ]
            },
            {
                "label": "Staff",
                "url": "https://www.jcu.edu.au/staff",
                "children": [
                    {
                        "label": "Staff Email",
                        "url": "https://login.microsoftonline.com"
                    },
                    {
                        "label": "My HR Online",
                        "url": "https://myhronline.jcu.edu.au/"
                    },
                    {
                        "label": "Learn JCU",
                        "url": "https://www.jcu.edu.au/learn"
                    },
                    {
                        "label": "Staff Online",
                        "url": "https://cas.secure.jcu.edu.au/cas/login?service"
                    }
                ]
            },
            {
                "label": "Library",
                "url": "https://www.jcu.edu.au/library",
                "children": [
                    {
                        "label": "One Search",
                        "url": "http://jcu.summon.serialssolutions.com/#!/"
                    },
                    {
                        "label": "Library Services",
                        "url": "https://www.jcu.edu.au/library/about"
                    },
                    {
                        "label": "Opening Hours",
                        "url": "https://www.jcu.edu.au/library/about/opening-hours"
                    }
                ]
            },
            {
                "label": "Contact Us",
                "url": "https://www.jcu.edu.au/jcu-contact-information",
                "children": [
                    {
                        "label": "For Students",
                        "url": "https://www.jcu.edu.au/jcu-contact-information/student-centre"
                    },
                    {
                        "label": "For Staff",
                        "url": "https://www.jcu.edu.au/jcu-contact-information"
                    }
                ]
            }
        ]
    },
    "header": {
        "institution_links": [
            {
                "label": "Students",
                "url": "https://www.jcu.edu.au/students",
                "children": [
                    {
                        "label": "Students Homepage",
                        "url": "https://www.jcu.edu.au/students",
                        "details": "Portal to access all online services",
                        "icon": "apps"
                    },
                    {
                        "label": "Student Email",
                        "url": "https://my.jcu.edu.au",
                        "details": "Access your student email",
                        "icon": "mail"
                    },
                    {
                        "label": "eStudent",
                        "url": "https://secure.jcu.edu.au/eStudent/",
                        "details": "Course applications, subject enrolment, finances, results and graduation",
                        "icon": "workshop"
                    },
                    {
                        "label": "Students Online",
                        "url": "https://secure.jcu.edu.au/studentsonline/",
                        "details": "Textbook lists, exam timetables and printing payments",
                        "icon": "user"
                    }
                ]
            },
            {
                "label": "Staff",
                "url": "https://www.jcu.edu.au/staff",
                "children": [
                    {
                        "label": "Staff Homepage",
                        "url": "https://www.jcu.edu.au/staff",
                        "details": "Portal to access all online services",
                        "icon": "apps"
                    },
                    {
                        "label": "Staff Email",
                        "url": "https://staff.jcu.edu.au/",
                        "details": "Access your staff email",
                        "icon": "mail"
                    },
                    {
                        "label": "My HR Online",
                        "url": "https://myhronline.jcu.edu.au/",
                        "details": "Pay, leave, timesheets and personal details",
                        "icon": "creditCard"
                    },
                    {
                        "label": "Staff Online",
                        "url": "https://secure.jcu.edu.au/staffonline/",
                        "details": "Finance, reporting, organisational, academic and other applications",
                        "icon": "circleInformation"
                    },
                    {
                        "label": "Concur",
                        "url": "https://www.jcu.edu.au/financial-and-business-services-internal/strategic-procure-to-pay/jcu-travel/concur",
                        "details": "Travel requests, bookings, expenses and credit cards",
                        "icon": "schedules"
                    }
                ]
            },
            {
                "label": "Library",
                "url": "https://www.jcu.edu.au/library"
            },
            {
                "label": "LearnJCU",
                "url": "https://www.jcu.edu.au/learn"
            }
        ]
    }
 
}

export default config
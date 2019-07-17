import { validateMasterConfig, validateEnvironmentConfig, validateSupportConfig, validateApiConfig, validateFooterConfig, validateHeaderConfig } from './ConfigValidator'

function getMasterTestConfig() {
    return {
        "config_version": "1.0.0",
        "configuration": {
            "environment": {
                "type": "prod",
                "name": "UAT Environment",
                "description": "Please use the [current production system](#) to do real things. Information displayed in this environment should NOT be considered valid."
            },
            "support": getSupportTestConfig(),
            "apis": [
                {
                    "name": "eop-schedule",
                    "url": "https://api-test.jcu.edu.au/smockler/eop-schedule",
                    "version": "0.1.0",
                    "options": { "headers": { "X-API-KEY": "YF5dpAPESPDnXDbObl6q3WW166EGfWit" } }
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
    }
}

function getEnvTestConfig() {
    return {
        "type": "prod",
        "name": "UAT Environment",
        "description": "Please use the [current production system](#) to do real things. Information displayed in this environment should NOT be considered valid."
    }
}

function getSupportTestConfig() {
    return {
        "email": "MMoss@ReynholmIndustries.com",
        "phone": "0118 999 881 999 119 725...3",
        "name": "Maurice Moss"
    }
}

function getApiTestConfig() {
    return [
        {
            "name": "eop-schedule",
            "url": "https://api-test.jcu.edu.au/smockler/eop-schedule",
            "version": "0.1.0",
            "options": { "headers": { "X-API-KEY": "YF5dpAPESPDnXDbObl6q3WW166EGfWit" } }
        },
        {
            "name": "dummy",
            "url": "https://dummy.dummy",
            "version": "0.1.0"
        }
    ]
}

function getFooterTestConfig() {
    return {
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
            }
        ]
    }
}

function getHeaderTestConfig() {
    return { 
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

// --------------------------------------------------------
// MASTER CONFIG TESTS
// --------------------------------------------------------
describe("Master Config", () => {

    it("Passes with valid data", () => {

        let validData = getMasterTestConfig()
        expect(validateMasterConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with blank data", () => {

        let emptyData = {}
        expect(validateMasterConfig(emptyData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        let optionalKeysData = getMasterTestConfig()
        delete optionalKeysData.configuration.support
        delete optionalKeysData.configuration.footer
        delete optionalKeysData.configuration.header
        expect(validateMasterConfig(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // Environment required
        let requiredKeysData = getMasterTestConfig()
        delete requiredKeysData.configuration.environment
        expect(validateMasterConfig(requiredKeysData)).toBeFalsy()

        // APIs required
        requiredKeysData = getMasterTestConfig()
        delete requiredKeysData.configuration.apis
        expect(validateMasterConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes with empty APIs", () => {

        let optionalKeysData = getMasterTestConfig()
        optionalKeysData.apis = []
        expect(validateMasterConfig(optionalKeysData)).toBeTruthy()

    })

})

// --------------------------------------------------------
// ENVIRONMENT CONFIG TESTS
// --------------------------------------------------------
describe("Environment Config", () => {
    it("Passes with valid data", () => {

        let validData = getEnvTestConfig()
        expect(validateEnvironmentConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with blank data", () => {

        let emptyData = {}
        expect(validateEnvironmentConfig(emptyData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        let optionalKeysData = getEnvTestConfig()
        delete optionalKeysData.description
        delete optionalKeysData.name
        expect(validateEnvironmentConfig(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // Type required
        let requiredKeysData = getEnvTestConfig()
        delete requiredKeysData.type
        expect(validateEnvironmentConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------
})

// --------------------------------------------------------
// SUPPORT CONFIG TESTS
// --------------------------------------------------------
describe("Support Config", () => {
    it("Passes with valid data", () => {

        let validData = getSupportTestConfig()
        expect(validateSupportConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with blank data", () => {

        let emptyData = {}
        expect(validateSupportConfig(emptyData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes with any single contact type", () => {

        // just Name + Phone
        let justNameAndPhone = getSupportTestConfig()
        delete justNameAndPhone.email
        expect(validateSupportConfig(justNameAndPhone)).toBeTruthy()

        // just Name + Email
        let justNameAndEmail = getSupportTestConfig()
        delete justNameAndEmail.phone
        expect(validateSupportConfig(justNameAndEmail)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // Name required
        let requiredKeysData = getSupportTestConfig()
        delete requiredKeysData.name
        expect(validateSupportConfig(requiredKeysData)).toBeFalsy()

        // Phone OR Email required
        requiredKeysData = getSupportTestConfig()
        delete requiredKeysData.phone
        delete requiredKeysData.email
        expect(validateSupportConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes if both phone and email are supplied", () => {

        let validData = getSupportTestConfig()
        expect(validateSupportConfig(validData)).toBeTruthy() 
    })
    // --------------------------------------------------------
})

// --------------------------------------------------------
// API CONFIG TESTS
// --------------------------------------------------------
describe("API Config", () => {
    it("Passes with valid data", () => {

        let validData = getApiTestConfig()
        expect(validateApiConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with empty API array", () => {

        let emptyData = []
        expect(validateApiConfig(emptyData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        // Redundant Test - The test data is already missing optional keys
        // Should this exist for clarity?

        let optionalKeysData = getApiTestConfig()
        expect(validateApiConfig(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // URL required
        let requiredKeysData = getApiTestConfig()
        delete requiredKeysData[0].url
        expect(validateApiConfig(requiredKeysData)).toBeFalsy()

        // Version required
        requiredKeysData = getApiTestConfig()
        delete requiredKeysData[0].version
        expect(validateApiConfig(requiredKeysData)).toBeFalsy()

        // Name required
        requiredKeysData = getApiTestConfig()
        delete requiredKeysData[0].name
        expect(validateApiConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------
})

// --------------------------------------------------------
// FOOTER CONFIG TESTS
// --------------------------------------------------------
describe("Footer Config", () => {
    it("Passes with valid data", () => {

        let validData = getFooterTestConfig()
        expect(validateFooterConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with empty Footer array", () => {

        let emptyData = getFooterTestConfig()
        emptyData.institution_links = []
        expect(validateFooterConfig(emptyData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        let optionalKeysData = getFooterTestConfig()
        delete optionalKeysData.institution_links[0].children
        expect(validateFooterConfig(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // Institution_links required
        let requiredKeysData = getFooterTestConfig()
        delete requiredKeysData.institution_links
        expect(validateFooterConfig(requiredKeysData)).toBeFalsy()

        // Child required keys (should be tested in that schema test, test is for assurance)
        requiredKeysData = getFooterTestConfig()
        delete requiredKeysData.institution_links[0].children[0].url
        expect(validateFooterConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------
})

// --------------------------------------------------------
// HEADER CONFIG TESTS
// --------------------------------------------------------
describe("Header Config", () => {
    it("Passes with valid data", () => {

        let validData = getHeaderTestConfig()
        expect(validateHeaderConfig(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with empty Header array", () => {

        let emptyData = getHeaderTestConfig()
        emptyData.institution_links = []
        expect(validateHeaderConfig(emptyData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        let optionalKeysData = getHeaderTestConfig()

        // Remove top level optional children
        delete optionalKeysData.institution_links[0].children

        // Remove nested optional keys (to confirm that the nested optionals work)
        delete optionalKeysData.institution_links[1].children[0].details
        delete optionalKeysData.institution_links[1].children[0].icon

        expect(validateHeaderConfig(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // Institution_links required
        let requiredKeysData = getHeaderTestConfig()
        delete requiredKeysData.institution_links
        expect(validateHeaderConfig(requiredKeysData)).toBeFalsy()

        // Child required keys (should be tested in that schema test, test is for assurance)
        requiredKeysData = getHeaderTestConfig()
        delete requiredKeysData.institution_links[0].children[0].url
        expect(validateHeaderConfig(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------
})
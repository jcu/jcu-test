import { validateLinkData } from './CommonDataValidator'

function getLinkTestData() {
    return {
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
                "icon": "mail",
                "extraKey": "this extra key should be okay"
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
    }
}

// --------------------------------------------------------
// LINK DATA TESTS
// --------------------------------------------------------

describe("Link Data Object", () => {
    it("Passes with valid data", () => {

        let validData = getLinkTestData()
        expect(validateLinkData(validData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with blank data", () => {

        let emptyData = {}
        expect(validateLinkData(emptyData)).toBeFalsy()
        
    })

    // --------------------------------------------------------

    it("Passes with missing optional keys", () => {

        // Remove top level optional children
        let optionalKeysData = getLinkTestData()
        delete optionalKeysData.children
        expect(validateLinkData(optionalKeysData)).toBeTruthy()

        // Remove nested optional keys (to confirm that the nested optionals work)
        optionalKeysData = getLinkTestData()
        delete optionalKeysData.children[0].icon
        delete optionalKeysData.children[0].details
        expect(validateLinkData(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------

    it("Fails with missing required keys", () => {

        // URL required
        let requiredKeysData = getLinkTestData()
        delete requiredKeysData.url
        expect(validateLinkData(requiredKeysData)).toBeFalsy()

        // Label required
        requiredKeysData = getLinkTestData()
        delete requiredKeysData.label
        expect(validateLinkData(requiredKeysData)).toBeFalsy()

        // Nested keys required
        requiredKeysData = getLinkTestData()
        delete requiredKeysData.children[0].url
        delete requiredKeysData.children[0].label
        expect(validateLinkData(requiredKeysData)).toBeFalsy()

    })

    // --------------------------------------------------------

    it("Passes with empty children array", () => {

        // URL required
        let optionalKeysData = getLinkTestData()
        optionalKeysData.children = []
        expect(validateLinkData(optionalKeysData)).toBeTruthy()

    })

    // --------------------------------------------------------
})
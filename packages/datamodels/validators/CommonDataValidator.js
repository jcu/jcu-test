var Validator = require('jsonschema').Validator;

// Example of generic link schema with a mix of required/not required keys and recursive reference
var linkSchema = {
    "id": "/links",
    "type": "object",
    "properties": {
        "label": {
            "$comment": "",
            "type": "string",
            "required": true
        },
        "url": {
            "type": "string",
            "required": true
        },
        "children": {
            "type": "array",
            "items": { "$ref": "/links" }
        },
        "details": { "type": "string" },
        "icon": { "type": "string" }
    }
}

function validateLinkData(linkData) {
    var v = new Validator();

    v.addSchema(linkSchema, '/links');

    var results = v.validate(linkData, linkSchema)

    return results.valid
}

export {linkSchema, validateLinkData}

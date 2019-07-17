
var linkSchema = require('./CommonDataValidator').linkSchema
var Validator = require('jsonschema').Validator

var environmentSchema = {
    "id": "/environment",
    "type": "object",
    "required": true,
    "properties": {
        "type": {
            "required": true,
            "type": "string"
        },
        "name": { "type": "string" },
        "description": { "type": "string" }
    }
}

var supportSchema = {
    "id": "/support",
    "type": "object",
    "anyOf": [
        { "required": ['email'] },
        { "required": ['phone'] }
    ],
    "properties": {
        "name": {
            "required": true,
            "type": "string"
        },
        "email": { "type": "string" },
        "phone": { "type": "string" }
    }
}

var apiSchema = {
    "id": "/api",
    "type": "array",
    "required": true,
    "items": {
        "type": "object",
        "properties": {
            "url": {
                "required": true,
                "type": "string"
            },
            "name": {
                "required": true,
                "type": "string"
            },
            "version": {
                "required": true,
                "type": "string"
            },
            "options": { "type": "object" }
        }
    }
}

// Header and footer schema are mirrors?
var footerSchema = {
    "id": "/footer",
    "type": "object",
    "properties": {
        "institution_links": {
            "type": "array",
            "required": true,
            "items": { "$ref": "/links" }
        }
    }
}

var headerSchema = {
    "id": "/header",
    "type": "object",
    "properties": {
        "institution_links": {
            "type": "array",
            "required": true,
            "items": { "$ref": "/links" }
        }
    }
}


var masterConfigSchema = {
    "id": "/configuration",
    "type": "object",
    "properties": {
        "config_version": {
            "type": "string",
            "required": true,
        },
        "configuration": {
            "type": "object",
            "required": true,
            "properties": {
                "environment": { "$ref": "/environment" },
                "support": { "$ref": "/support" },
                "apis": { "$ref": "/api" },
                "footer": { "$ref": "/footer" },
                "header": { "$ref": "/header" }
            }
        }
    }
}

// What do we want to return from the validator?
// true/false, # of errors etc...
function validateMasterConfig(config) {
    var v = new Validator();
    v.addSchema(environmentSchema, '/environment');
    v.addSchema(supportSchema, '/support');
    v.addSchema(apiSchema, '/api');
    v.addSchema(footerSchema, '/footer');
    v.addSchema(headerSchema, '/header');
    v.addSchema(linkSchema, '/links');

    var results = v.validate(config, masterConfigSchema)

    return results.valid
}

function validateEnvironmentConfig(config) {
    var v = new Validator();

    var results = v.validate(config, environmentSchema)

    return results.valid
}

function validateSupportConfig(config) {
    var v = new Validator();

    var results = v.validate(config, supportSchema)

    return results.valid
}

function validateApiConfig(config) {
    var v = new Validator();

    var results = v.validate(config, apiSchema)

    return results.valid
}

function validateFooterConfig(config) {
    var v = new Validator();
    v.addSchema(linkSchema, '/links');

    var results = v.validate(config, footerSchema)

    return results.valid
}

function validateHeaderConfig(config) {
    var v = new Validator();
    v.addSchema(linkSchema, '/links');

    var results = v.validate(config, headerSchema)

    return results.valid
}

export default validateMasterConfig
export { validateMasterConfig, validateEnvironmentConfig, validateSupportConfig, validateApiConfig, validateFooterConfig, validateHeaderConfig }
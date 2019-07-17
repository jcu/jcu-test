
/**
 * @module appConfigSchema
 */

var linkSchema = require('./commonDataSchema.js').linkSchema

/**
 * @alias appConfigSchema.environment
 * 
 * A JSON Schema to validate configuration for a run-time 
 * environment description. This is intended to capture the 
 * identity of a run time environment such as production, 
 * testing, UAT, etc.
 * 
 * Environment configs should look like:
 * 
 * | Item   | Optional? | Details
 * | ------ | --------- | -------------------------------
 * | `type` | required  | either `'prod'` or `'non-prod'`
 * | `name` | optional  | A string name. If omitted, defaults to the `type`
 * | `description` | optional | A string description, in Markdown format.
 * 
 */
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

// Sets the export keys to the schema ID excluding the leading slash
export default {
    [masterConfigSchema.id.slice(1)]: masterConfigSchema,
    [headerSchema.id.slice(1)]: headerSchema,
    [footerSchema.id.slice(1)]: footerSchema,
    [apiSchema.id.slice(1)]: apiSchema,
    [supportSchema.id.slice(1)]: supportSchema,
    [environmentSchema.id.slice(1)]: environmentSchema,
    [linkSchema.id.slice(1)]: linkSchema
}
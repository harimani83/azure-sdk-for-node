/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Definition of the connection type.
 *
 */
class ConnectionType {
  /**
   * Create a ConnectionType.
   * @member {string} [id] Gets the id of the resource.
   * @member {string} [name] Gets the name of the connection type.
   * @member {string} [type] Resource type
   * @member {boolean} [isGlobal] Gets or sets a Boolean value to indicate if
   * the connection type is global.
   * @member {object} [fieldDefinitions] Gets the field definitions of the
   * connection type.
   * @member {date} [creationTime] Gets the creation time.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time.
   * @member {string} [description] Gets or sets the description.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectionType
   *
   * @returns {object} metadata of ConnectionType
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectionType',
      type: {
        name: 'Composite',
        className: 'ConnectionType',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          isGlobal: {
            required: false,
            serializedName: 'properties.isGlobal',
            type: {
              name: 'Boolean'
            }
          },
          fieldDefinitions: {
            required: false,
            readOnly: true,
            serializedName: 'properties.fieldDefinitions',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'FieldDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'FieldDefinition'
                  }
              }
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectionType;

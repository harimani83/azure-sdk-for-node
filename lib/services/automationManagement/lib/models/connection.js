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
 * Definition of the connection.
 *
 * @extends models['ProxyResource']
 */
class Connection extends models['ProxyResource'] {
  /**
   * Create a Connection.
   * @member {object} [connectionType] Gets or sets the connectionType of the
   * connection.
   * @member {string} [connectionType.name] Gets or sets the name of the
   * connection type.
   * @member {object} [fieldDefinitionValues] Gets the field definition values
   * of the connection.
   * @member {date} [creationTime] Gets the creation time.
   * @member {date} [lastModifiedTime] Gets the last modified time.
   * @member {string} [description] Gets or sets the description.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Connection
   *
   * @returns {object} metadata of Connection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Connection',
      type: {
        name: 'Composite',
        className: 'Connection',
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
          connectionType: {
            required: false,
            serializedName: 'properties.connectionType',
            type: {
              name: 'Composite',
              className: 'ConnectionTypeAssociationProperty'
            }
          },
          fieldDefinitionValues: {
            required: false,
            readOnly: true,
            serializedName: 'properties.fieldDefinitionValues',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
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
            readOnly: true,
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

module.exports = Connection;

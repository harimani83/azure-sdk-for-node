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
 * Definition of the configuration type.
 *
 * @extends models['TrackedResource']
 */
class DscConfiguration extends models['TrackedResource'] {
  /**
   * Create a DscConfiguration.
   * @member {string} [provisioningState] Gets or sets the provisioning state
   * of the configuration. Possible values include: 'Succeeded'
   * @member {number} [jobCount] Gets or sets the job count of the
   * configuration.
   * @member {object} [parameters] Gets or sets the configuration parameters.
   * @member {object} [source] Gets or sets the source.
   * @member {object} [source.hash] Gets or sets the hash.
   * @member {string} [source.hash.algorithm] Gets or sets the content hash
   * algorithm used to hash the content.
   * @member {string} [source.hash.value] Gets or sets expected hash value of
   * the content.
   * @member {string} [source.type] Gets or sets the content source type.
   * Possible values include: 'embeddedContent', 'uri'
   * @member {string} [source.value] Gets or sets the value of the content.
   * This is based on the content source type.
   * @member {string} [source.version] Gets or sets the version of the content.
   * @member {string} [state] Gets or sets the state of the configuration.
   * Possible values include: 'New', 'Edit', 'Published'
   * @member {boolean} [logVerbose] Gets or sets verbose log option.
   * @member {date} [creationTime] Gets or sets the creation time.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time.
   * @member {string} [description] Gets or sets the description.
   * @member {string} [etag] Gets or sets the etag of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DscConfiguration
   *
   * @returns {object} metadata of DscConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscConfiguration',
      type: {
        name: 'Composite',
        className: 'DscConfiguration',
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
          tags: {
            required: false,
            serializedName: 'tags',
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
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Succeeded' ]
            }
          },
          jobCount: {
            required: false,
            serializedName: 'properties.jobCount',
            type: {
              name: 'Number'
            }
          },
          parameters: {
            required: false,
            serializedName: 'properties.parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'DscConfigurationParameterElementType',
                  type: {
                    name: 'Composite',
                    className: 'DscConfigurationParameter'
                  }
              }
            }
          },
          source: {
            required: false,
            serializedName: 'properties.source',
            type: {
              name: 'Composite',
              className: 'ContentSource'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          logVerbose: {
            required: false,
            serializedName: 'properties.logVerbose',
            type: {
              name: 'Boolean'
            }
          },
          creationTime: {
            required: false,
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
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DscConfiguration;

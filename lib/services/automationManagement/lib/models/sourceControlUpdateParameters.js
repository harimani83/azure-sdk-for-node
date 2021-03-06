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

/**
 * The parameters supplied to the update source control operation.
 *
 */
class SourceControlUpdateParameters {
  /**
   * Create a SourceControlUpdateParameters.
   * @member {string} [branch] Gets or sets the repo branch of the source
   * control.
   * @member {string} [folderPath] Gets or sets the folder path of the source
   * control. Path must be relative.
   * @member {boolean} [autoSync] Gets or sets auto async of the source
   * control. Default is false.
   * @member {boolean} [publishRunbook] Gets or sets the auto publish of the
   * source control. Default is true.
   * @member {string} [securityToken] Gets or sets the authorization token for
   * the repo of the source control.
   * @member {string} [description] Gets or sets the user description of the
   * source control.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlUpdateParameters
   *
   * @returns {object} metadata of SourceControlUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlUpdateParameters',
      type: {
        name: 'Composite',
        className: 'SourceControlUpdateParameters',
        modelProperties: {
          branch: {
            required: false,
            serializedName: 'properties.branch',
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: false,
            serializedName: 'properties.folderPath',
            type: {
              name: 'String'
            }
          },
          autoSync: {
            required: false,
            serializedName: 'properties.autoSync',
            type: {
              name: 'Boolean'
            }
          },
          publishRunbook: {
            required: false,
            serializedName: 'properties.publishRunbook',
            type: {
              name: 'Boolean'
            }
          },
          securityToken: {
            required: false,
            serializedName: 'properties.securityToken',
            type: {
              name: 'String'
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

module.exports = SourceControlUpdateParameters;

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
 * @class
 * Initializes a new instance of the Dimension class.
 * @constructor
 * Dimensions.
 *
 * @member {string} [name] Display name of dimension.
 *
 * @member {string} [displayName] Display name of dimension.
 *
 */
class Dimension {
  constructor() {
  }

  /**
   * Defines the metadata of Dimension
   *
   * @returns {object} metadata of Dimension
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Dimension',
      type: {
        name: 'Composite',
        className: 'Dimension',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Dimension;
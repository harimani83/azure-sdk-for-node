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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the AdmCredential class.
 * @constructor
 * Description of a NotificationHub AdmCredential.
 * @member {object} [properties] Gets or sets properties of NotificationHub
 * AdmCredential.
 * 
 * @member {string} [properties.clientId] Gets or sets the client identifier.
 * 
 * @member {string} [properties.clientSecret] Gets or sets the credential
 * secret access key.
 * 
 * @member {string} [properties.authTokenUrl] Gets or sets the URL of the
 * authorization token.
 * 
 */
function AdmCredential() {
}

/**
 * Defines the metadata of AdmCredential
 *
 * @returns {object} metadata of AdmCredential
 *
 */
AdmCredential.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AdmCredential',
    type: {
      name: 'Composite',
      className: 'AdmCredential',
      modelProperties: {
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'AdmCredentialProperties'
          }
        }
      }
    }
  };
};

module.exports = AdmCredential;
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
 * vCenter properties.
 *
 */
class VCenterProperties {
  /**
   * Create a VCenterProperties.
   * @member {string} [friendlyName] Friendly name of the vCenter.
   * @member {string} [internalId] VCenter internal ID.
   * @member {date} [lastHeartbeat] The time when the last heartbeat was
   * reveived by vCenter.
   * @member {string} [discoveryStatus] The VCenter discovery status.
   * @member {string} [processServerId] The process server Id.
   * @member {string} [ipAddress] The IP address of the vCenter.
   * @member {string} [infrastructureId] The infrastructure Id of vCenter.
   * @member {string} [port] The port number for discovery.
   * @member {string} [runAsAccountId] The account Id which has privileges to
   * discover the vCenter.
   * @member {string} [fabricArmResourceName] The ARM resource name of the
   * fabric containing this VCenter.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VCenterProperties
   *
   * @returns {object} metadata of VCenterProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VCenterProperties',
      type: {
        name: 'Composite',
        className: 'VCenterProperties',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          internalId: {
            required: false,
            serializedName: 'internalId',
            type: {
              name: 'String'
            }
          },
          lastHeartbeat: {
            required: false,
            serializedName: 'lastHeartbeat',
            type: {
              name: 'DateTime'
            }
          },
          discoveryStatus: {
            required: false,
            serializedName: 'discoveryStatus',
            type: {
              name: 'String'
            }
          },
          processServerId: {
            required: false,
            serializedName: 'processServerId',
            type: {
              name: 'String'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          },
          infrastructureId: {
            required: false,
            serializedName: 'infrastructureId',
            type: {
              name: 'String'
            }
          },
          port: {
            required: false,
            serializedName: 'port',
            type: {
              name: 'String'
            }
          },
          runAsAccountId: {
            required: false,
            serializedName: 'runAsAccountId',
            type: {
              name: 'String'
            }
          },
          fabricArmResourceName: {
            required: false,
            serializedName: 'fabricArmResourceName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VCenterProperties;
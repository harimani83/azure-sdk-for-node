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
 * The properties related to service bus queue endpoint types.
 *
 */
class RoutingServiceBusQueueEndpointProperties {
  /**
   * Create a RoutingServiceBusQueueEndpointProperties.
   * @member {string} connectionString The connection string of the service bus
   * queue endpoint.
   * @member {string} name The name that identifies this endpoint. The name can
   * only include alphanumeric characters, periods, underscores, hyphens and
   * has a maximum length of 64 characters. The following names are reserved:
   * events, operationsMonitoringEvents, fileNotifications, $default. Endpoint
   * names must be unique across endpoint types. The name need not be the same
   * as the actual queue name.
   * @member {string} [subscriptionId] The subscription identifier of the
   * service bus queue endpoint.
   * @member {string} [resourceGroup] The name of the resource group of the
   * service bus queue endpoint.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoutingServiceBusQueueEndpointProperties
   *
   * @returns {object} metadata of RoutingServiceBusQueueEndpointProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoutingServiceBusQueueEndpointProperties',
      type: {
        name: 'Composite',
        className: 'RoutingServiceBusQueueEndpointProperties',
        modelProperties: {
          connectionString: {
            required: true,
            serializedName: 'connectionString',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              Pattern: '^[A-Za-z0-9-._]{1,64}$'
            },
            type: {
              name: 'String'
            }
          },
          subscriptionId: {
            required: false,
            serializedName: 'subscriptionId',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resourceGroup',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoutingServiceBusQueueEndpointProperties;
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * Resource properties.
 *
 * @member {string} [id] Resource ID
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 */
export interface ProxyResource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * Resource properties including location and tags for track resources.
 *
 * @member {string} location The location the resource resides in.
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs.
 */
export interface TrackedResource extends ProxyResource {
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the StorageProfile class.
 * @constructor
 * Storage Profile properties of a server
 *
 * @member {number} [backupRetentionDays] Backup retention days for the server.
 * @member {string} [geoRedundantBackup] Enable Geo-redundant or not for server
 * backup. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [storageMB] Max storage allowed for a server.
 */
export interface StorageProfile {
  backupRetentionDays?: number;
  geoRedundantBackup?: string;
  storageMB?: number;
}

/**
 * @class
 * Initializes a new instance of the ServerPropertiesForCreate class.
 * @constructor
 * The properties used to create a new server.
 *
 * @member {string} [version] Server version. Possible values include: '5.6',
 * '5.7'
 * @member {string} [sslEnforcement] Enable ssl enforcement or not when connect
 * to server. Possible values include: 'Enabled', 'Disabled'
 * @member {object} [storageProfile] Storage profile of a server.
 * @member {number} [storageProfile.backupRetentionDays] Backup retention days
 * for the server.
 * @member {string} [storageProfile.geoRedundantBackup] Enable Geo-redundant or
 * not for server backup. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [storageProfile.storageMB] Max storage allowed for a
 * server.
 * @member {string} createMode Polymorphic Discriminator
 */
export interface ServerPropertiesForCreate {
  version?: string;
  sslEnforcement?: string;
  storageProfile?: StorageProfile;
  createMode: string;
}

/**
 * @class
 * Initializes a new instance of the ServerPropertiesForDefaultCreate class.
 * @constructor
 * The properties used to create a new server.
 *
 * @member {string} administratorLogin The administrator's login name of a
 * server. Can only be specified when the server is being created (and is
 * required for creation).
 * @member {string} administratorLoginPassword The password of the
 * administrator login.
 */
export interface ServerPropertiesForDefaultCreate extends ServerPropertiesForCreate {
  administratorLogin: string;
  administratorLoginPassword: string;
}

/**
 * @class
 * Initializes a new instance of the ServerPropertiesForRestore class.
 * @constructor
 * The properties to a new server by restoring from a backup.
 *
 * @member {string} sourceServerId The source server id to restore from.
 * @member {date} restorePointInTime Restore point creation time (ISO8601
 * format), specifying the time to restore from.
 */
export interface ServerPropertiesForRestore extends ServerPropertiesForCreate {
  sourceServerId: string;
  restorePointInTime: Date;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * Billing information related properties of a server.
 *
 * @member {string} [name] The name of the sku, typically, tier + family +
 * cores, e.g. B_Gen4_1, GP_Gen5_8.
 * @member {string} [tier] The tier of the particular SKU, e.g. Basic. Possible
 * values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
 * @member {number} [capacity] The scale up/out capacity, representing server's
 * compute units.
 * @member {string} [size] The size code, to be interpreted by resource as
 * appropriate.
 * @member {string} [family] The family of hardware.
 */
export interface Sku {
  name?: string;
  tier?: string;
  capacity?: number;
  size?: string;
  family?: string;
}

/**
 * @class
 * Initializes a new instance of the Server class.
 * @constructor
 * Represents a server.
 *
 * @member {object} [sku] The SKU (pricing tier) of the server.
 * @member {string} [sku.name] The name of the sku, typically, tier + family +
 * cores, e.g. B_Gen4_1, GP_Gen5_8.
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's compute units.
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 * @member {string} [sku.family] The family of hardware.
 * @member {string} [administratorLogin] The administrator's login name of a
 * server. Can only be specified when the server is being created (and is
 * required for creation).
 * @member {string} [version] Server version. Possible values include: '5.6',
 * '5.7'
 * @member {string} [sslEnforcement] Enable ssl enforcement or not when connect
 * to server. Possible values include: 'Enabled', 'Disabled'
 * @member {string} [userVisibleState] A state of a server that is visible to
 * user. Possible values include: 'Ready', 'Dropping', 'Disabled'
 * @member {string} [fullyQualifiedDomainName] The fully qualified domain name
 * of a server.
 * @member {date} [earliestRestoreDate] Earliest restore point creation time
 * (ISO8601 format)
 * @member {object} [storageProfile] Storage profile of a server.
 * @member {number} [storageProfile.backupRetentionDays] Backup retention days
 * for the server.
 * @member {string} [storageProfile.geoRedundantBackup] Enable Geo-redundant or
 * not for server backup. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [storageProfile.storageMB] Max storage allowed for a
 * server.
 */
export interface Server extends TrackedResource {
  sku?: Sku;
  administratorLogin?: string;
  version?: string;
  sslEnforcement?: string;
  userVisibleState?: string;
  fullyQualifiedDomainName?: string;
  earliestRestoreDate?: Date;
  storageProfile?: StorageProfile;
}

/**
 * @class
 * Initializes a new instance of the ServerForCreate class.
 * @constructor
 * Represents a server to be created.
 *
 * @member {object} [sku] The SKU (pricing tier) of the server.
 * @member {string} [sku.name] The name of the sku, typically, tier + family +
 * cores, e.g. B_Gen4_1, GP_Gen5_8.
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's compute units.
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 * @member {string} [sku.family] The family of hardware.
 * @member {object} properties Properties of the server.
 * @member {string} [properties.version] Server version. Possible values
 * include: '5.6', '5.7'
 * @member {string} [properties.sslEnforcement] Enable ssl enforcement or not
 * when connect to server. Possible values include: 'Enabled', 'Disabled'
 * @member {object} [properties.storageProfile] Storage profile of a server.
 * @member {number} [properties.storageProfile.backupRetentionDays] Backup
 * retention days for the server.
 * @member {string} [properties.storageProfile.geoRedundantBackup] Enable
 * Geo-redundant or not for server backup. Possible values include: 'Enabled',
 * 'Disabled'
 * @member {number} [properties.storageProfile.storageMB] Max storage allowed
 * for a server.
 * @member {string} [properties.createMode] Polymorphic Discriminator
 * @member {string} location The location the resource resides in.
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs.
 */
export interface ServerForCreate {
  sku?: Sku;
  properties: ServerPropertiesForCreate;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ServerUpdateParameters class.
 * @constructor
 * Parameters allowd to update for a server.
 *
 * @member {object} [sku] The SKU (pricing tier) of the server.
 * @member {string} [sku.name] The name of the sku, typically, tier + family +
 * cores, e.g. B_Gen4_1, GP_Gen5_8.
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's compute units.
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 * @member {string} [sku.family] The family of hardware.
 * @member {object} [storageProfile] Storage profile of a server.
 * @member {number} [storageProfile.backupRetentionDays] Backup retention days
 * for the server.
 * @member {string} [storageProfile.geoRedundantBackup] Enable Geo-redundant or
 * not for server backup. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [storageProfile.storageMB] Max storage allowed for a
 * server.
 * @member {string} [administratorLoginPassword] The password of the
 * administrator login.
 * @member {string} [version] The version of a server. Possible values include:
 * '5.6', '5.7'
 * @member {string} [sslEnforcement] Enable ssl enforcement or not when connect
 * to server. Possible values include: 'Enabled', 'Disabled'
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs.
 */
export interface ServerUpdateParameters {
  sku?: Sku;
  storageProfile?: StorageProfile;
  administratorLoginPassword?: string;
  version?: string;
  sslEnforcement?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the FirewallRule class.
 * @constructor
 * Represents a server firewall rule.
 *
 * @member {string} startIpAddress The start IP address of the server firewall
 * rule. Must be IPv4 format.
 * @member {string} endIpAddress The end IP address of the server firewall
 * rule. Must be IPv4 format.
 */
export interface FirewallRule extends ProxyResource {
  startIpAddress: string;
  endIpAddress: string;
}

/**
 * @class
 * Initializes a new instance of the Database class.
 * @constructor
 * Represents a Database.
 *
 * @member {string} [charset] The charset of the database.
 * @member {string} [collation] The collation of the database.
 */
export interface Database extends ProxyResource {
  charset?: string;
  collation?: string;
}

/**
 * @class
 * Initializes a new instance of the Configuration class.
 * @constructor
 * Represents a Configuration.
 *
 * @member {string} [value] Value of the configuration.
 * @member {string} [description] Description of the configuration.
 * @member {string} [defaultValue] Default value of the configuration.
 * @member {string} [dataType] Data type of the configuration.
 * @member {string} [allowedValues] Allowed values of the configuration.
 * @member {string} [source] Source of the configuration.
 */
export interface Configuration extends ProxyResource {
  value?: string;
  readonly description?: string;
  readonly defaultValue?: string;
  readonly dataType?: string;
  readonly allowedValues?: string;
  source?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * Display metadata associated with the operation.
 *
 * @member {string} [provider] Operation resource provider name.
 * @member {string} [resource] Resource on which the operation is performed.
 * @member {string} [operation] Localized friendly name for the operation.
 * @member {string} [description] Operation description.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * REST API operation definition.
 *
 * @member {string} [name] The name of the operation being performed on this
 * particular object.
 * @member {object} [display] The localized display information for this
 * particular operation or action.
 * @member {string} [display.provider] Operation resource provider name.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [display.operation] Localized friendly name for the
 * operation.
 * @member {string} [display.description] Operation description.
 * @member {string} [origin] The intended executor of the operation. Possible
 * values include: 'NotSpecified', 'user', 'system'
 * @member {object} [properties] Additional descriptions for the operation.
 */
export interface Operation {
  readonly name?: string;
  readonly display?: OperationDisplay;
  readonly origin?: string;
  readonly properties?: { [propertyName: string]: any };
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * A list of resource provider operations.
 *
 * @member {array} [value] The list of resource provider operations.
 */
export interface OperationListResult {
  value?: Operation[];
}

/**
 * @class
 * Initializes a new instance of the LogFile class.
 * @constructor
 * Represents a log file.
 *
 * @member {number} [sizeInKB] Size of the log file.
 * @member {date} [createdTime] Creation timestamp of the log file.
 * @member {date} [lastModifiedTime] Last modified timestamp of the log file.
 * @member {string} [logFileType] Type of the log file.
 * @member {string} [url] The url to download the log file from.
 */
export interface LogFile extends ProxyResource {
  sizeInKB?: number;
  readonly createdTime?: Date;
  readonly lastModifiedTime?: Date;
  logFileType?: string;
  url?: string;
}

/**
 * @class
 * Initializes a new instance of the PerformanceTierServiceLevelObjectives class.
 * @constructor
 * Service level objectives for performance tier.
 *
 * @member {string} [id] ID for the service level objective.
 * @member {string} [edition] Edition of the performance tier.
 * @member {number} [vCore] vCore associated with the service level objective
 * @member {string} [hardwareGeneration] Hardware generation associated with
 * the service level objective
 * @member {number} [maxBackupRetentionDays] Maximum Backup retention in days
 * for the performance tier edition
 * @member {number} [minBackupRetentionDays] Minimum Backup retention in days
 * for the performance tier edition
 * @member {number} [maxStorageMB] Max storage allowed for a server.
 * @member {number} [minStorageMB] Max storage allowed for a server.
 */
export interface PerformanceTierServiceLevelObjectives {
  id?: string;
  edition?: string;
  vCore?: number;
  hardwareGeneration?: string;
  maxBackupRetentionDays?: number;
  minBackupRetentionDays?: number;
  maxStorageMB?: number;
  minStorageMB?: number;
}

/**
 * @class
 * Initializes a new instance of the PerformanceTierProperties class.
 * @constructor
 * Performance tier properties
 *
 * @member {string} [id] ID of the performance tier.
 * @member {array} [serviceLevelObjectives] Service level objectives associated
 * with the performance tier
 */
export interface PerformanceTierProperties {
  id?: string;
  serviceLevelObjectives?: PerformanceTierServiceLevelObjectives[];
}

/**
 * @class
 * Initializes a new instance of the NameAvailabilityRequest class.
 * @constructor
 * Request from client to check resource name availability.
 *
 * @member {string} name Resource name to verify.
 * @member {string} [type] Resource type used for verification.
 */
export interface NameAvailabilityRequest {
  name: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the NameAvailability class.
 * @constructor
 * Represents a resource name availability.
 *
 * @member {string} [message] Error Message.
 * @member {boolean} [nameAvailable] Indicates whether the resource name is
 * available.
 * @member {string} [reason] Reason for name being unavailable.
 */
export interface NameAvailability {
  message?: string;
  nameAvailable?: boolean;
  reason?: string;
}


/**
 * @class
 * Initializes a new instance of the ServerListResult class.
 * @constructor
 * A list of servers.
 *
 */
export interface ServerListResult extends Array<Server> {
}

/**
 * @class
 * Initializes a new instance of the FirewallRuleListResult class.
 * @constructor
 * A list of firewall rules.
 *
 */
export interface FirewallRuleListResult extends Array<FirewallRule> {
}

/**
 * @class
 * Initializes a new instance of the DatabaseListResult class.
 * @constructor
 * A List of databases.
 *
 */
export interface DatabaseListResult extends Array<Database> {
}

/**
 * @class
 * Initializes a new instance of the ConfigurationListResult class.
 * @constructor
 * A list of server configurations.
 *
 */
export interface ConfigurationListResult extends Array<Configuration> {
}

/**
 * @class
 * Initializes a new instance of the LogFileListResult class.
 * @constructor
 * A list of log files.
 *
 */
export interface LogFileListResult extends Array<LogFile> {
}

/**
 * @class
 * Initializes a new instance of the PerformanceTierListResult class.
 * @constructor
 * A list of performance tiers.
 *
 */
export interface PerformanceTierListResult extends Array<PerformanceTierProperties> {
}

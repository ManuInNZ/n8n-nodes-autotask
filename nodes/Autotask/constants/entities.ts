import type { IEntityMetadata } from '../types';
import { OperationType } from '../types/base/entity-types';

/**
 * List of available Autotask API entities
 * This includes all endpoints that can be accessed through the Autotask REST API
 */
export const AUTOTASK_ENTITIES: IEntityMetadata[] = [
	// BillingCode entity (read-only)
	{ name: 'BillingCode', operations: { [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Company', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'CompanyAlert', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'CompanyAttachment', childOf: 'Company', subname: 'Attachment', isAttachment: true, operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'CompanyNote', childOf: 'Company', subname: 'Notes', parentIdField: 'companyID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'CompanyNoteAttachment', childOf: 'CompanyNote', subname: 'Attachment', parentChain: ['Company', 'CompanyNote'], isAttachment: true, operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'CompanyWebhook', childOf: 'Company', subname: 'Webhook', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'CompanyWebhookExcludedResource', childOf: 'CompanyWebhook', subname: 'ExcludedResource', parentChain: ['Company', 'CompanyWebhook'], operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'CompanyWebhookField', childOf: 'CompanyWebhook', subname: 'Field', parentChain: ['Company', 'CompanyWebhook'], operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'CompanyWebhookUdfField', childOf: 'CompanyWebhook', subname: 'UdfField', parentChain: ['Company', 'CompanyWebhook'], operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'ConfigurationItem', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' }, hasUserDefinedFields: true },
	{ name: 'ConfigurationItemCategory', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemCategoryUdfAssociation', childOf: 'ConfigurationItemCategory', subname: 'UdfAssociations', parentIdField: 'configurationItemCategoryID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self', [OperationType.DELETE]: 'parent' } },
	{ name: 'ConfigurationItemType', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemNote', childOf: 'ConfigurationItem', subname: 'Notes', parentIdField: 'configurationItemID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemRelatedItem', childOf: 'ConfigurationItem', subname: 'RelatedItems', parentIdField: 'configurationItemID', operations: { [OperationType.CREATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemDnsRecord', childOf: 'ConfigurationItem', subname: 'DnsRecords', parentIdField: 'configurationItemID', operations: { [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemBillingProductAssociations', childOf: 'ConfigurationItem', subname: 'BillingProductAssociations', parentIdField: 'configurationItemID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'ConfigurationItemSslSubjectAlternativeName', childOf: 'ConfigurationItem', subname: 'SslSubjectAlternativeNames', parentIdField: 'configurationItemID', operations: { [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'Contact', childOf: 'Company', subname: 'Contact', parentIdField: 'companyID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'CompanyLocation', childOf: 'Company', subname: 'Locations', parentIdField: 'companyID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'Contract', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractCharge', childOf: 'Contract', subname: 'Charges', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractMilestone', childOf: 'Contract', subname: 'Milestones', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractNote', childOf: 'Contract', subname: 'Notes', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractService', childOf: 'Contract', subname: 'Services', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractServiceUnit', childOf: 'Contract', subname: 'ServiceUnits', parentIdField: 'contractID', operations: { [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractBlock', childOf: 'Contract', subname: 'Blocks', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractBlockHourFactor', childOf: 'Contract', subname: 'BlockHourFactors', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ContractRate', childOf: 'Contract', subname: 'Rates', parentIdField: 'contractID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'HolidaySet', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Holiday', childOf: 'HolidaySet', subname: 'Holidays', parentIdField: 'holidaySetID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'Opportunity', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Service', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ServiceCall', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Survey', operations: { [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'SurveyResults', operations: { [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Project', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' }, parentIdField: 'companyID' },
	{ name: 'ProjectNote', childOf: 'Project', subname: 'Notes', parentIdField: 'projectID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'ProjectCharge', childOf: 'Project', subname: 'Charges', parentIdField: 'projectID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'Phase', childOf: 'Project', subname: 'Phases', parentIdField: 'projectID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	{ name: 'Resource', operations: { [OperationType.QUERY]: 'self', [OperationType.READ]: 'self', [OperationType.COUNT]: 'self', [OperationType.UPDATE]: 'self' } },
	{ name: 'Task', childOf: 'Project', subname: 'task', parentIdField: 'projectID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'parent', [OperationType.COUNT]: 'self' } },
	{ name: 'TaskNote', childOf: 'Task', subname: 'Note', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	// Products entity and its webhook-related entities
	{ name: 'Product', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' }, hasUserDefinedFields: true, supportsWebhookCallouts: true },
	{ name: 'ProductWebhook', childOf: 'Product', subname: 'Webhook', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'ProductWebhookField', childOf: 'ProductWebhook', subname: 'Field', parentChain: ['Product', 'ProductWebhook'], operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	{ name: 'ProductWebhookUdfField', childOf: 'ProductWebhook', subname: 'UdfField', parentChain: ['Product', 'ProductWebhook'], operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
	// Tickets entity
	{ name: 'Ticket', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self', [OperationType.READ]: 'self' }, hasUserDefinedFields: true },
	{ name: 'TicketNote', childOf: 'Ticket', subname: 'Notes', parentIdField: 'ticketID', operations: { [OperationType.CREATE]: 'parent', [OperationType.UPDATE]: 'parent', [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self' } },
	// TicketHistory entity (read-only)
	{ name: 'TicketHistory', operations: { [OperationType.QUERY]: 'self', [OperationType.COUNT]: 'self', [OperationType.READ]: 'self' }, noPluralize: true },
	// TimeEntry entity and its attachment
	{ name: 'TimeEntry', operations: { [OperationType.CREATE]: 'self', [OperationType.UPDATE]: 'self', [OperationType.QUERY]: 'self', [OperationType.DELETE]: 'self', [OperationType.COUNT]: 'self' }, hasUserDefinedFields: true },
	{ name: 'TimeEntryAttachment', childOf: 'TimeEntry', subname: 'Attachment', isAttachment: true, operations: { [OperationType.CREATE]: 'parent', [OperationType.DELETE]: 'parent' } },
];

/**
 * Case-insensitive lookup of entity metadata by name. Returns undefined if entity not found.
 * @param name - The entity name to look up (e.g. 'billingcode', 'BillingCode', or 'BILLINGCODE')
 */
export function getEntityMetadata(name: string): IEntityMetadata | undefined {
	return AUTOTASK_ENTITIES.find(e => e.name.toLowerCase() === name.toLowerCase());
}

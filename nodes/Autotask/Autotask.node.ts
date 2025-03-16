import {
	NodeConnectionType,
	type ResourceMapperFields,
	NodeOperationError,
} from 'n8n-workflow';
import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { executeProjectTaskOperation } from './resources/projectTasks/execute';
import { executeProjectOperation } from './resources/projects/execute';
import { executeCompanyOperation } from './resources/companies/execute';
import { executeCompanyAlertOperation } from './resources/companyAlerts/execute';
import { executeContactOperation } from './resources/contacts/execute';
import { executeCompanyLocationOperation } from './resources/companyLocations/execute';
import { executeResourceOperation } from './resources/resources/execute';
import { executeCompanyNoteOperation } from './resources/companyNotes/execute';
import { executeProjectNoteOperation } from './resources/projectNotes/execute';
import { executeProjectPhaseOperation } from './resources/projectPhases/execute';
import { executeProjectChargeOperation } from './resources/projectCharges/execute';
import { executeProductOperation } from './resources/products/execute';
import { executeTicketOperation } from './resources/tickets/execute';
import { executeTicketNoteOperation } from './resources/ticketNotes/execute';
import { executeTicketHistoryOperation } from './resources/ticketHistories/execute';
import { executeTimeEntryOperation } from './resources/timeEntries/execute';
import { executeBillingCodeOperation } from './resources/billingCodes/execute';
import { executeHolidaySetOperation } from './resources/holidaySets/execute';
import { executeHolidayOperation } from './resources/holidays/execute';
import { executeServiceCallOperation } from './resources/serviceCalls/execute';
import { executeContractOperation } from './resources/contracts/execute';
import { executeOpportunityOperation } from './resources/opportunities/execute';
import { searchFilterDescription, searchFilterOperations, build as executeSearchFilterOperation } from './resources/searchFilter';
import { getResourceMapperFields } from './helpers/resourceMapper';
import { RESOURCE_DEFINITIONS } from './resources/definitions';
import { projectTaskFields } from './resources/projectTasks/description';
import { projectFields } from './resources/projects/description';
import { companyFields } from './resources/companies/description';
import { companyAlertFields } from './resources/companyAlerts/description';
import { contactFields } from './resources/contacts/description';
import { companyLocationFields } from './resources/companyLocations/description';
import { resourceFields } from './resources/resources/description';
import { companyNoteFields } from './resources/companyNotes/description';
import { projectNoteFields } from './resources/projectNotes/description';
import { projectPhaseFields } from './resources/projectPhases/description';
import { projectChargeFields } from './resources/projectCharges/description';
import { productFields } from './resources/products/description';
import { ticketFields } from './resources/tickets/description';
import { ticketNoteFields } from './resources/ticketNotes/description';
import { ticketHistoryFields } from './resources/ticketHistories/description';
import { timeEntryFields } from './resources/timeEntries/description';
import { billingCodeFields } from './resources/billingCodes/description';
import { holidaySetFields } from './resources/holidaySets/description';
import { holidayFields } from './resources/holidays/description';
import { serviceCallFields } from './resources/serviceCalls/description';
import { contractFields } from './resources/contracts/description';
import { opportunityFields } from './resources/opportunities/description';
import { addOperationsToResource } from './helpers/resource-operations.helper';

/**
 * Autotask node implementation
 */
export class Autotask implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Autotask',
		name: 'autotask',
		icon: 'file:autotask.svg',
		group: ['transform'],
		usableAsTool: true,
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Autotask REST API',
		defaults: {
			name: 'Autotask',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'autotaskApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: RESOURCE_DEFINITIONS,
				default: 'company',
			},
			...addOperationsToResource(companyFields, { resourceName: 'company' }),
			...addOperationsToResource(companyAlertFields, { resourceName: 'companyAlert' }),
			...addOperationsToResource(companyNoteFields, { resourceName: 'companyNote' }),
			...addOperationsToResource(contactFields, { resourceName: 'contact' }),
			...addOperationsToResource(companyLocationFields, { resourceName: 'companyLocation' }),
			...addOperationsToResource(contractFields, { resourceName: 'contract' }),
			...addOperationsToResource(holidaySetFields, { resourceName: 'holidaySet' }),
			...addOperationsToResource(holidayFields, { resourceName: 'holiday' }),
			...addOperationsToResource(opportunityFields, { resourceName: 'opportunity' }),
			...addOperationsToResource(productFields, { resourceName: 'product' }),
			...addOperationsToResource(projectFields, { resourceName: 'project' }),
			...addOperationsToResource(projectChargeFields, { resourceName: 'projectCharge' }),
			...addOperationsToResource(projectNoteFields, { resourceName: 'projectNote' }),
			...addOperationsToResource(projectPhaseFields, { resourceName: 'phase' }),
			...addOperationsToResource(projectTaskFields, { resourceName: 'task' }),
			...addOperationsToResource(resourceFields, { resourceName: 'resource' }),
			...addOperationsToResource(ticketFields, { resourceName: 'ticket' }),
			...addOperationsToResource(ticketNoteFields, { resourceName: 'ticketNote' }),
			...addOperationsToResource(ticketHistoryFields, { resourceName: 'TicketHistory' }),
			...addOperationsToResource(timeEntryFields, { resourceName: 'timeEntry' }),
			...addOperationsToResource(billingCodeFields, { resourceName: 'billingCode' }),
			...addOperationsToResource(serviceCallFields, { resourceName: 'serviceCall' }),
			...searchFilterDescription,
			...searchFilterOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;

		// Handle resource-specific operations
		switch (resource) {
			case 'billingCode':
				return executeBillingCodeOperation.call(this);
			case 'company':
				return executeCompanyOperation.call(this);
			case 'companyAlert':
				return executeCompanyAlertOperation.call(this);
			case 'companyNote':
				return executeCompanyNoteOperation.call(this);
			case 'contact':
				return executeContactOperation.call(this);
			case 'companyLocation':
				return executeCompanyLocationOperation.call(this);
			case 'contract':
				return executeContractOperation.call(this);
			case 'holidaySet':
				return executeHolidaySetOperation.call(this);
			case 'holiday':
				return executeHolidayOperation.call(this);
			case 'opportunity':
				return executeOpportunityOperation.call(this);
			case 'product':
				return executeProductOperation.call(this);
			case 'project':
				return executeProjectOperation.call(this);
			case 'projectCharge':
				return executeProjectChargeOperation.call(this);
			case 'projectNote':
				return executeProjectNoteOperation.call(this);
			case 'phase':
				return executeProjectPhaseOperation.call(this);
			case 'task':
				return executeProjectTaskOperation.call(this);
			case 'resource':
				return executeResourceOperation.call(this);
			case 'searchFilter':
				return executeSearchFilterOperation.call(this);
			case 'serviceCall':
				return executeServiceCallOperation.call(this);
			case 'ticket':
				return executeTicketOperation.call(this);
			case 'ticketNote':
				return executeTicketNoteOperation.call(this);
			case 'TicketHistory':
				return executeTicketHistoryOperation.call(this);
			case 'timeEntry':
				return executeTimeEntryOperation.call(this);
			default:
				throw new NodeOperationError(
					this.getNode(),
					`Resource ${resource} is not supported`
				);
		}
	}

	methods = {
		resourceMapping: {
			async getFields(this: ILoadOptionsFunctions): Promise<ResourceMapperFields> {
				return getResourceMapperFields.call(this, this.getNodeParameter('resource', 0) as string);
			},
		},
	};
}

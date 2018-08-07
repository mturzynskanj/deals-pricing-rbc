import {normalize, schema} from 'normalizr';
import type {Deal} from '../../types';

const notesSchema = new schema.Entity('notesItems', {}, {iAttribute: 'wfNotesId'});
const auditItemsSchema = new schema.Entity('auditItems',{},{iAttribute: 'wfAuditId'});


const dealSchema = new schema.Entity(
    'deals',
    {
        pricingItems: [pricingItemSchema],
        auditItems: [auditItemsSchema],
        notesItems:[notesSchema]
    },
    {idAttribute:'dealId'}

)

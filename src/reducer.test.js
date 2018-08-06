import { addToArray, removeFromArray } from './reducer'
import {
    state_after_adding_pricing_toExisiting_deal,
    state_after_adding_pricing_and_new_deal,
    state_after_relocating_pricing,
    state_afer_updating_deal_pricing
} from './mocks'

import reducer from './reducer';
import { initialState } from './mocks'

describe('action creators', () => {
    it('should add item to an array', () => {
        let arr = [4, 5, 6];
        let item = 5;
        expect(addToArray(arr)(item)).toHaveLength(4);
    });

    it('should remove item from the array', () => {
        let arr = [4, 5, 6, 7]
        let item = 6;
        let expected = [4, 5, 7];
        expect(removeFromArray(arr)(item)).toHaveLength(3)
        expect(removeFromArray(arr)(item)).toEqual(expected);
    })

    it('should remove from array 2', () => {
        let arr = [4, 5, 6, 7]
        let item = 6;
        let expected = [4, 5, 7];
        expect(removeFromArray(arr)(item)).toEqual(expected);
    })
});

describe('the deals and price reducer', () => {
    it('should return intial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle the GET_DEAL_PRICING - Adding new pricing to existing deal', () => {
        const action = {
            type: 'GET_DEAL_PRICING',
            payload: {
                dealId: 1,
                dealName: 'deal1 with new added pricing',
                pricingItems: [{
                    pricingId: 9,
                    dealId: 1,
                    pricingName: 'Pricing 9 - added new'
                }]
            }
        } //end of action 

        expect(reducer(initialState, action)).toEqual(state_after_adding_pricing_toExisiting_deal)
    })

    it('should handle the GET_DEAL_PRICING - Adding new pricing and new deal', () => {
        const action = {
            type: 'GET_DEAL_PRICING',
            payload: {
                dealId: 3,
                dealName: 'deal3-added new deal',
                pricingItems: [{
                    pricingId: 7,
                    dealId: 3,
                    pricingName: 'Pricing 7 - just added'
                }]
            }

        }// end of action

        console.log(reducer(initialState, action));

        expect(reducer(initialState, action)).toEqual(state_after_adding_pricing_and_new_deal)

    })


    it('should handle GET_DEAL_PRICING - Relocate Pricing to Another Deal', () => {
        const action = {
            type: 'GET_DEAL_PRICING',
            payload: {
                dealId: 1,
                dealName: 'deal1 - added new pricing',
                pricingItems: [{
                    pricingId: 4,
                    dealId: 1,
                    pricingName: 'Relocated pring 4 to deal 1'
                }]
            }
        }
        expect(reducer(initialState, action)).toEqual(state_after_relocating_pricing)
    })

    it('should handle GET_DEAL_PRICING - Update Pricing and Deal', () => {
        const action = {
            type: 'GET_DEAL_PRICING',
            payload: {
                dealId: 1,
                dealName: 'deal1 - updated deal',
                pricingItems: [{
                    pricingId: 1,
                    dealId: 1,
                    pricingName: 'Pricing 1 - updated pricing info ...'
                }]
            }
        }
        expect(reducer(initialState, action)).toEqual(state_afer_updating_deal_pricing)
    })
}) //end of description



export const ADD_DEAL_PRICING = 'ADD_DEAL_PRICING';


const initialState = {
    dealIds: [1, 2],
    dealsById: {
        1: {
            dealId: 1,
            dealName: 'deal-1',
            pricingIds: [1, 2, 3]
        },
        2: {
            dealId: 2,
            dealName: 'deal-2',
            pricingIds: [4, 5, 6]
        }
    },
    pricingIds: [1, 2, 3, 4, 5, 6],
    pricingItems: [
        {
            pricingId: 1,
            pricingName: 'pricing1',
            dealId: 1
        },
        {
            pricingId: 2,
            pricingName: 'pricing2',
            dealId: 1
        },
        {
            pricingId: 3,
            pricingName: 'pricing3',
            dealId: 1
        },
        {
            pricingId: 4,
            pricingName: 'pricing4',
            dealId: 2
        },
        {
            pricingId: 5,
            pricingName: 'pricing5',
            dealId: 2
        },
        {
            pricingId: 6,
            pricingName: 'pricing6',
            dealId: 2
        },
    ],

    pricingItemsById: {
        1: {
            pricingId: 1,
            pricingName: 'pricing1',
            dealId: 1
        },
        2: {
            pricingId: 2,
            pricingName: 'pricing2',
            dealId: 1
        },
        3: {
            pricingId: 3,
            pricingName: 'pricing3',
            dealId: 1
        },
        4: {
            pricingId: 4,
            pricingName: 'pricing4',
            dealId: 2
        },
        5: {
            pricingId: 5,
            pricingName: 'pricing5',
            dealId: 2
        },
        6: {
            pricingId: 6,
            pricingName: 'pricing6',
            dealId: 2
        }
    }

}

export const ADD_NEW_DEAL_AND_PRICING = 'ADD_NEW_DEAL_AND_PRICING';
export const ADD_NEW_PRICING_TO_EXITING_DEAL = 'ADD_NEW_PRICING_TO_EXITING_DEAL';
export const RELOCATE_PRICING_TO_ANOTHER_DEAL = 'RELOCATE_PRICING_TO_ANOTHER_DEAL'
export const UPDATE_DEAL_AND_PRICING = 'UPDATE_DEAL_AND_PRICING';
export const GET_DEAL_PRICING = 'GET_DEAL_PRICING'



export const updateExistingDealAndPricing = () => {
    return {
        type: UPDATE_DEAL_AND_PRICING,
        payload: {
            dealId: 1,
            dealName: 'deal1 - updated deal',
            notes: 'hello',
            pricingItems: [{
                pricingId: 1,
                dealId: 1,
                pricingName: 'Pricing 1 - updated pricing info ...'
            }]
        }
    }

}

export const addNewDealandPricing = () => {
    return {
        type: ADD_NEW_DEAL_AND_PRICING,
        payload: {
            dealId: 3,
            dealName: 'deal3-added new deal',
            pricingItems: [{
                pricingId: 7,
                dealId: 3,
                pricingName: 'Pricing 7 - just added'
            }]
        }
    }
}


export const addNewPricingToExistingDeal = () => {
    console.log('here....inside the action');
    return {
        type: ADD_NEW_PRICING_TO_EXITING_DEAL,

        payload: {
            dealId: 1,
            dealName: 'deal1 - added new pricing',
            notes: 'hello',
            pricingItems: [{
                pricingId: 9,
                dealId: 1,
                pricingName: 'Pricing 9 - added new'
            }]
        }
    }
}

export const reloactePricingToAnotherDeal = () => {
    return {
        type: RELOCATE_PRICING_TO_ANOTHER_DEAL,
        payload: {
            dealId: 1,
            dealName: 'deal1 - added new pricing',
            notes: 'hello',
            pricingItems: [{
                pricingId: 4,
                dealId: 1,
                pricingName: 'Relocated pring 4 to deal 1'
            }]
        }
    }
}


export const findInArray = (arr) => (item) => arr.find(el => {
    return el === item
});

export const addToArray = (arr) => (item) => arr.concat(item);
export const removeFromArray = (arr) => (item) => {
    let idx = arr.indexOf(item);
    if(idx !== -1){
        let newArray = [...arr.slice(0, idx), ...arr.slice(idx + 1)]
    }
    let newArray = [...arr.slice(0, idx), ...arr.slice(idx + 1)]
    return newArray;
}

export const updateArrayOfObjects = (arr) => (newObj) => {
    return arr.map(obj => {
        if (obj.pricingId === newObj.pricingId) {
            return { ...obj, ...newObj }
        } else {
            return obj
        }
    })
}

export default function reducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case GET_DEAL_PRICING:
        case UPDATE_DEAL_AND_PRICING:
        case RELOCATE_PRICING_TO_ANOTHER_DEAL:
        case ADD_NEW_DEAL_AND_PRICING:
        case ADD_NEW_PRICING_TO_EXITING_DEAL:
            let { pricingItems: pricingFromPayload, ...dealInfo } = payload;
            let { dealId } = dealInfo;
            const { pricingId, dealId: dealInsidePricing } = pricingFromPayload[0];
            const pricingItem = pricingFromPayload[0];

            const existingDeal = findInArray(state.dealIds)(dealId);
            const existingPricing = findInArray(state.pricingIds)(pricingId)

            let pricingItemIds;
            let pricingItems;
            //let pricingPerId;
            let pricingItemsById;
            //let dealsPerId;
            let dealsById;
            let dealIds;

            if (!existingPricing) {
                //case we are adding new pricing 
                pricingItemIds = state.pricingIds.concat(pricingId);
                pricingItems = state.pricingItems.concat(pricingItem)
                pricingItemsById = { ...state.pricingItemsById, [pricingId]: pricingItem }

                if (existingDeal) {
                    dealInfo = { ...dealInfo, pricingIds: state.dealsById[dealId].pricingIds.concat(pricingId) }
                    dealsById = { ...state.dealsById, ...{ [dealId]: dealInfo } }
                    dealIds = state.dealIds
                } else {
                    dealIds = state.dealIds.concat([dealId])
                    dealInfo = { ...dealInfo, pricingIds: [].concat(pricingId) };
                    dealsById = { ...state.dealsById, ...{ [dealId]: dealInfo } }
                    dealsById = dealsById = { ...state.dealsById, ...{ [dealId]: dealInfo } }
                }

                return {
                    ...state,
                    pricingItemIds,
                    pricingItems,
                    pricingItemsById,
                    dealsById,
                    dealIds
                }

            } else {
                // existing pricing 
                let existingPricingDetails = state.pricingItemsById[pricingId];
                let exisitingDealId = existingPricingDetails.dealId;

                if (exisitingDealId !== dealId) {
                    //case we are relocating princing from one deal to another
                    dealsById = {
                        ...state.dealsById,
                        [exisitingDealId]: { ...state.dealsById[exisitingDealId], pricingIds: removeFromArray(state.dealsById[exisitingDealId].pricingIds)(pricingId) },
                        [dealId]: {
                            ...state.dealsById[dealId], ...dealInfo, pricingIds: addToArray(state.dealsById[dealId].pricingIds)(pricingId)
                        }
                    }

                    pricingItemsById = {
                        ...state.pricingItemsById,
                        [pricingId]: { ...state.pricingItemsById[pricingId], ...pricingItem }
                    }

                    pricingItems = updateArrayOfObjects(state.pricingItems)(pricingItem)

                } else {
                    ///updateing existing deal and pricing ...
                    dealsById = {
                        ...state.dealsById,
                        [dealId]: { ...state.dealsById[dealId], ...dealInfo }
                    }

                    pricingItemsById = {
                        ...state.pricingItemsById,
                        [pricingId]: { ...state.pricingItemsById[pricingId], ...pricingItem }
                    }

                    pricingItems = updateArrayOfObjects(state.pricingItems)(pricingItem)
                }
                return {
                    ...state,
                    dealsById,
                    pricingItemsById,
                    pricingItems,
                }
            }
            default:
            return state;
    }  //end of switch 
    return state;
} //end of the reducer

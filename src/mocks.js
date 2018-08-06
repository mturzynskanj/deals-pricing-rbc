export const initialState = {
    dealIds: [1, 2],
    dealsPerId: {
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

    pricingPerId: {
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
};


/*
 payload: {
                dealId: 1,
                dealName: 'deal1 with new added pricing',
                notes: 'hello',
                pricingItems: [{
                    pricingId: 9,
                    dealId: 1,
                    pricingName: 'Pricing 9 - added new'
                }]
            }



*/

export const state_after_adding_pricing_toExisiting_deal = {
    dealIds: [1, 2],
    dealsPerId: {
        1: {
            dealId: 1,
            dealName: 'deal1 with new added pricing',
            pricingIds: [1, 2, 3, 9]
        },
        2: {
            dealId: 2,
            dealName: 'deal-2',
            pricingIds: [4, 5, 6]
        }
    },
    pricingIds: [1, 2, 3, 4, 5, 6, 9],
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
        {
            pricingId: 9,
            pricingName: 'Pricing 9 - added new',
            dealId: 1,
        }
    ],

    pricingPerId: {
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
        },
        9: {
            pricingId: 9,
            pricingName: 'Pricing 9 - added new',
            dealId: 1,
        }

    }
}

/*
 payload: {
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



*/



export const state_after_adding_pricing_and_new_deal = {
    dealIds: [1, 2, 3],
    dealsPerId: {
        1: {
            dealId: 1,
            dealName: 'deal-1',
            pricingIds: [1, 2, 3]
        },
        2: {
            dealId: 2,
            dealName: 'deal-2',
            pricingIds: [4, 5, 6]
        },
        3: {
            dealId: 3,
            dealName: 'deal3-added new deal',
            pricingIds: [7]
        }
    },
    pricingIds: [1, 2, 3, 4, 5, 6, 7],
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
        {
            pricingId: 7,
            dealId: 3,
            pricingName: 'Pricing 7 - just added'
        }
    ],

    pricingPerId: {
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
        },
        7: {
            pricingId: 7,
            dealId: 3,
            pricingName: 'Pricing 7 - just added'
        }
    }
};


/*
 type: GET_DEAL_PRICING,
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
*/


export const state_after_relocating_pricing = {
    dealIds: [1, 2],
    dealsPerId: {
        1: {
            dealId: 1,
            dealName: 'deal1 - added new pricing',
            pricingIds: [1, 2, 3,4]
        },
        2: {
            dealId: 2,
            dealName: 'deal-2',
            pricingIds: [5, 6]
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
            pricingName: 'Relocated pring 4 to deal 1',
            dealId: 1
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

    pricingPerId: {
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
            pricingName: 'Relocated pring 4 to deal 1',
            dealId: 1
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
};

/*
 payload: {
                dealId: 1,
                dealName: 'deal1 - updated deal',
                pricingItems: [{
                    pricingId: 1,
                    dealId: 1,
                    pricingName: 'Pricing 1 - updated pricing info ...'
                }]
            }
*/

export const state_afer_updaet = {
    dealIds: [1, 2],
    dealsPerId: {
        1: {
            dealId: 1,
            dealName: 'deal1 - updated deal',
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
            pricingName: 'Pricing 1 - updated pricing info ...',
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

    pricingPerId: {
        1: {
            pricingId: 1,
            pricingName: 'Pricing 1 - updated pricing info ...',
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
};


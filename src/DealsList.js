import React from 'react';

const DealsList = (props) => {
    return (
        <div>
            <p>{props.deal.dealName}</p>
                <ul>
                    {
                        props.pricingPerDeal.map(id => {
                            const currentPricing = props.pricingItemsById[id];
                            return <p key={id}>{currentPricing.pricingName} -- {currentPricing.pricingId}</p>
                        })
                    }
                </ul>
        </div>

            )
        }
            

    export default DealsList;

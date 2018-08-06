import React from 'react'
import { connect } from 'react-redux'
import DealsList from './DealsList'

import { addNewPricingToExistingDeal, addNewDealandPricing , reloactePricingToAnotherDeal, updateExistingDealAndPricing} from './reducer';


class Deals extends React.Component {
    constructor(props) {
        super(props)
    }
    getDeals = () => Object.values(this.props.dealsById);

    getPricingPerDeal = () => this.getDeals().map(deal => {
        return <DealsList key={deal.dealId} deal={deal} pricingPerDeal={deal.pricingIds} pricingIds={this.props.pricingIds} pricingItems={this.props.pricingItems} pricingItemsById={this.props.pricingItemsById} />
    });

    render() {
        return (
            <div>
                <p> Deals....</p >
                <div className='wrapper'>
                    {this.getPricingPerDeal()}
                </div>
                <div className='warpper'>
                    <button onClick={this.props.addNewDealandPricing}>Add New Deal and New Pricing</button>
                    <button onClick={this.props.addNewPricingToExistingDeal} >Add New Pricing to Exising deal</button>
                    <button onClick={this.props.reloactePricingToAnotherDeal}>Relocate Pricing to Another Deal</button>
                    <button onClick={this.props.updateExistingDealAndPricing}>Update existing deal and pricing ....</button>

                </div>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        dealsIds: state.dealsIds,
        dealsById: state.dealsById,
        pricingItemIds: state.pricingItemIds,
        pricingItems: state.pricingItems,
        pricingItemsById: state.pricingItemsById
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPricingToExistingDeal: () => dispatch(addNewPricingToExistingDeal()),
        addNewDealandPricing: () => dispatch(addNewDealandPricing()),
        reloactePricingToAnotherDeal: () => dispatch(reloactePricingToAnotherDeal()),
        updateExistingDealAndPricing: () => dispatch(updateExistingDealAndPricing())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Deals)
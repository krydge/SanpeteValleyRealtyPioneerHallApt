import PricingContent from './PricingContent.json';
import './PricingStyle';

function Pricing() {
    return (<div className="Pricing">
        {PricingContent.map((pricing) => <div key={pricing.id}>
            <h2 className='RentalType'>{pricing.RentalType}</h2>
            <h3 className='Price'>{pricing.price} {pricing.unit} {pricing.timeSpan}</h3>
        </div>)}
    </div>)
}

export default Pricing;
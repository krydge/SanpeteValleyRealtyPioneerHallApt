import data from './amenities.json';
import features from './community.json';
import './AmenitiesStyle.css'

function Amenities() {
    return (
        <div className='Amenities'>
            <div className="HEad">
                <h2>Amenities</h2>
                <p>Your search to find available apartments has led you to the right place!</p>
            </div>
            <div className="contentLists">
                <div className='ApartmentList'>
                    <h2>Apartment Features</h2>
                    <ul>
                        {data && data.map(item => (<li key={item.key + item.name}>{item.Name}</li>))}
                    </ul>
                </div>
                <div className='CommunityList'>
                    <h2>Community Features</h2>
                    <ul>
                        {features && features.map(item => (<li key={toString(item.key + item.name)}>{item.Name}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Amenities;



import Notifications from '../Notifications/Notifications';
import Building from '../Building/Building'
import DirectionBanner from '../DirectionsBanner/DircetionBanner';
import AmenitiesButton from '../AmenitiesButton/AmenitiesButton';
import GalleryButton from '../GalleryButton/GalleryButton';
function Home(params) {

    return (<div>
        <Notifications></Notifications>
        {/* <DirectionBanner ></DirectionBanner> */}
        <GalleryButton parentCallBack={params.parentCallBack}></GalleryButton>
        <AmenitiesButton parentCallBack={params.parentCallBack}></AmenitiesButton>
    </div>)
}

export default Home;
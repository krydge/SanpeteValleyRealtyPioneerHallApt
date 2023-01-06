
import './FooterStyle.css'
function Footer(params) {
    const styleFirst = { display: 'flex', flexDirection: 'column', borderTop: '1px solid #bbb', marginTop: '3vh', paddingTop: '10px' }
    const styleInfo = { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'space-around', flexWrap: 'wrap' }
    const styleContentInfo = { display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0px' }
    const buttonStyle = {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: '0',
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    }
    return (
        <div style={styleFirst}>
            <div className="FooterContainerStyle">
                <div >
                    <img src={process.env.PUBLIC_URL + "/Assets/PIONEER-Logo-circle.png"} style={{ paddingTop: "auto", height: '20vh' }}></img>
                </div>
                <div className="OfficeHours" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }}>
                    <h4 style={{ margin: '0px' }}>Main Office</h4>
                    <h3 style={{ margin: '0px', fontSize: '500' }}>Address:</h3>
                    <h3 style={{ margin: '0px', fontSize: '500' }}>415 south Main </h3>
                    <h3 style={{ margin: '0px', fontSize: '500' }}>Ephraim, UT 84627</h3>
                    <h3 style={{ margin: '0px' }}>M - F: 10 - 5</h3>
                </div>
                <div className="OfficeHours" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }}>
                    <h4 style={{ margin: '0px' }}>Onsite Office</h4>
                    <h3 style={{ margin: '0px' }}>Tuesday : 12 - 2</h3>
                    <h3 style={{ margin: '0px' }}>Wednesday : 3 - 5</h3>
                    <h3 style={{ margin: '0px' }}>Or by appointment</h3>
                </div>
                <div className="ContactInfo" style={styleContentInfo}>
                    <div>
                        <h4 style={{ margin: '0px', textAlign: 'left', justifyContent: 'flex-start' }}>Pioneer Hall</h4>
                    </div>
                    <div className="Phone" style={{ textAlign: 'left', justifyContent: 'flex-start', margin: '0px' }}>
                        <h4 style={{ margin: '0px' }}>Phone:</h4>
                        <h3 style={{ margin: '0px' }}>435-283-6626</h3>
                    </div>
                    <div className="Address" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                        <h3 style={{ margin: '0px' }}>Address:</h3>
                        <h3 style={{ margin: '0px' }}>168 N 300 E</h3>
                        <h3 style={{ margin: '0px' }}>Ephraim, UT 84627</h3>
                    </div>
                </div>
                {/* property Manager */}
                <div className="ContactInfo" style={styleContentInfo}>
                    <div>
                        <h4 style={{ margin: '0px', textAlign: 'left', justifyContent: 'flex-start' }}>Property Manager:</h4>
                        <h3 style={{ margin: '0px', textAlign: 'left', justifyContent: 'flex-start' }}>Tammy Mellor</h3>
                    </div>
                    <div className="Phone" style={{ textAlign: 'left', justifyContent: 'flex-start', margin: '0px' }}>
                        <h4 style={{ margin: '0px' }}>Phone:</h4>
                        <h3 style={{ margin: '0px' }} >435-851-1575</h3>
                    </div>
                    <div className="Phone" style={{ textAlign: 'left', justifyContent: 'flex-start', margin: '0px' }}>
                        <h4 style={{ margin: '0px' }}>Office:</h4>
                        <h3 style={{ margin: '0px' }}>435-283-6626</h3>
                    </div>
                    <div className="Email" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                        <h4 style={{ margin: '0px' }}>Email:</h4>
                        <button style={buttonStyle} onClick={() => (params.parentCallBack('/contact'))} ><b>Tammy@sanpetevalleyrealty.com</b></button>
                    </div>
                </div>
                {/* Pioneer Hall  */}


            </div>
            <div>
                <p>© 2022 Pioneer Hall Apartments in Ephraim Utah. Managed by Sanpete Valley Realty LLC. Developed By RydgeInc</p>
            </div>
            <div className="ColoredFooter" >
                <div className="textwidget">
                    <div className="wpb_wrapper">
                        <h4 style={{ margin: '0px' }}>Address</h4>
                        <p style={{ margin: '0px' }}>168 N 300 E<br />
                            <span className="locality">Ephraim,&nbsp;</span>
                            <span className="region">UT&nbsp;</span>
                            <span className="postal-code">84627</span>
                        </p>
                    </div>
                    <a target="_blank" href="https://www.google.com/maps/dir//pioneer+hall+apartments+ephraim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x874c718c359dc7b1:0x9d54a4ce643b4f3a?sa=X&ved=2ahUKEwjJ2K7uyffnAhUWsZ4KHULtBhwQ9RcwDHoECAwQEQ">
                        Get Directions
                    </a>
                </div>
                <div className="SocialMediaLinks">
                    <li>
                        <a target="_blank" rel="noopener" href="https://www.facebook.com/PioneerHallApartments" data-placeholder-negative-three="PIONEERHALLAPARTMENTS">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener" href="https://www.instagram.com/pioneerhall/" data-placeholder-negative-three="PIONEERHALL">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer;
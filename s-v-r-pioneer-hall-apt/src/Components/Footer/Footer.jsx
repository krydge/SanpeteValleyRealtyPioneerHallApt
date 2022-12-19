function Footer(params) {
    const styleFirst = { display: 'flex', flexDirection: 'column', borderTop: '3px solid #bbb', marginTop: '5vh' }
    const styleInfo = { display: 'flex', flexDirection: 'row', padding: '1vh', justifyContent: 'space-around', alignContent: 'space-around', flexWrap: 'wrap' }
    const styleContentInfo = { display: 'flex', flexDirection: 'column', justifyContent: 'center' }
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
            <div style={styleInfo}>
                <div className="ContactInfo" style={styleContentInfo}>
                    <div className="Phone" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                        <h4 >Phone Number:</h4>
                        <h3>435-851-1575</h3>
                    </div>
                    <div className="Email" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                        <h4 >Email</h4>
                        <button  style={buttonStyle} onClick={() => (params.parentCallBack('/contact'))}>Tammy@sanpetevalleyrealty.com</button>
                    </div>
                    <div className="Address" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                        <h4>Address</h4>
                        <h3>168 N 300 E</h3>
                        <h3>Ephraim, UT 84627</h3>
                    </div>
                </div>
                <div className="OfficeHours" style={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                    <h4 style={{ textAlign: 'center' }}>Office Hours</h4>
                    <h3>Mon: 9:00am - 5:00pm</h3>
                    <h3>Tue: 9:00am - 5:00pm</h3>
                    <h3>Wed: 9:00am - 5:00pm</h3>
                    <h3>Thur: 9:00am - 5:00pm</h3>
                    <h3>Fri: 9:00am - 5:00pm</h3>
                    <h3>Sat-Sun: Closed</h3>
                </div>

            </div>
            <div>
                <p>© 2022 Pioneer Hall Apartments in Ephraim Utah. Managed by Sanpete Valley Realty. Develouped By RydgeInc</p>
            </div>
        </div>
    )
}

export default Footer;
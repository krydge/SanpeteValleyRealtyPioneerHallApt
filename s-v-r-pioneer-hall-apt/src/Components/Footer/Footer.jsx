function Footer() {
    const styleFirst = { display: 'flex', flexDirection: 'column', borderTop: '3px solid #bbb', marginTop: '5vh' }
    const styleInfo = { display: 'flex', flexDirection: 'row', paddingTop: '1vh', justifyContent: 'space-around', alignContent: 'space-around' }
    const styleContentInfo = { display: 'flex', flexDirection: 'column', justifyContent: 'center' }
    return (
        <div style={styleFirst}>
            <div style={styleInfo}>
                <div className="ContactInfo" style={styleContentInfo}>
                    <div className="Phone" style={{ textAlign: 'left' }}>
                        <h4 >Phone Number:</h4>
                        <h3>435-851-1575</h3>
                    </div>
                    <div className="Email" style={{ textAlign: 'left' }}>
                        <h4 >Email</h4>
                        <a href="/contact" style={{ textDecoration: 'none' }}><h3>tammy@sanpetevalleyrealty.com</h3></a>
                    </div>
                    <div className="Address" style={{ textAlign: 'left' }}>
                        <h4>Address</h4>
                        <h3>168 N 300 E</h3>
                        <h3>Ephraim, UT 84627</h3>
                    </div>
                </div>
                <div className="OfficeHours" style={{ textAlign: 'left' }}>
                    <h4>Office Hours</h4>
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
        </div>)
}

export default Footer;
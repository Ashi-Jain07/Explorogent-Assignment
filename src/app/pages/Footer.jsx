function Footer() {
    return (
        <>
            <div id="contact" className="bg-blue-100">

                <div className="mt-20 lsm:flex lsm:justify-evenly place-items-center p-10">

                    <div className="pt-8 items-center">
                        <img src="/customer-support.png" />
                    </div>

                    <div className="lsm:text-end text-center pt-5">

                        <div className="mb-5">
                            <h2 className="font-bold">E-mail</h2>
                            <p>info@stackkaroo.com</p>
                        </div>
                        <div className="mb-5">
                            <h2 className="font-bold mb-2">Address</h2>
                            <div className="mb-2">
                                <h3 className="font-bold">Office 1 location</h3>
                                <p>6, IGM Hospital Lane, Agartala, Tripura - 799001</p>
                                <p><b>Phone:-</b>+91 7085548881</p>
                            </div>
                            <div>
                                <h3 className="font-bold">Office 1 location</h3>
                                <p>Jatioarilo, Rahania, Mahanga, Cuttack - 754204</p>
                                <p><b>Phone:-</b>+91 7401588425</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-bold">Hours</h2>
                            <p>Mon to Fri: 9:30 am to 7:30 pm</p>
                            <p>sat 9:30 am to 2:00 pm</p>
                        </div>

                    </div>

                </div>

                <p className="text-center font-bold mt-10 p-5">You will get a reply within 24 hours from out customer support</p>

            </div>
        </>
    )
};

export default Footer;
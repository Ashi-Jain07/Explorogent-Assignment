"use client"
import { useState } from "react";
import Image from "next/image";

function FAQs() {

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);

    return (
        <>
            <h1 className="text-center mt-10 text-4xl font-bold" id="FAQ">FAQs</h1>
            <h2 className="text-center m-2 mt-5 text-xl font-bold">Find quick answer to commons questions</h2>

            <div className="flex justify-center ">

                <div className="w-3/5">

                    <div className="bg-white border border-black p-2 my-4 text-xl shadow-black shadow-md">
                        <div className="flex">
                            <p className="text-blue-800 font-bold m-1">What services can you except from Stackkaroo.com as an E-commerce delivery app development company?</p>
                            <button className="ml-2" onClick={() => setShowOne(!showOne)}>{!showOne ?
                               <>⮟</> :
                               <>⮝</>}
                            </button>
                        </div>
                        {!showOne ? <></> :
                            <p>Stackkaroo.com provides complete delivery app development services fr ecommerce, including app design, building, testing and launching. We also provide integration with payment gateways, order management systems, and logistics solutions to make sure smooth work for online buisnessess.</p>
                        }
                    </div>

                    <div className="bg-white border border-black p-2 my-4 text-xl shadow-black shadow-md">
                        <div className="flex">
                            <p className="text-blue-800 font-bold m-1">How does Stackkaroo.com make sure customer data is secure and private in their E-commerce delivery app development for online shopping?</p>
                            <button className="ml-2" onClick={() => setShowTwo(!showTwo)}>{!showTwo ?
                                <>⮟</> :
                                <>⮝</>}
                            </button>
                        </div>
                        {!showTwo ? <></> :
                            <p>Stackkaroo.com focuses on keeping customer data safe and private. We use industry standard encryption techniques and secure coding practices to keep data safe. We also do regular security audits and implement robust data protection measures to protect customer information from being accessed by unauthorised people.</p>
                        }
                    </div>

                    <div className="bg-white border border-black p-2 my-4 text-xl shadow-black shadow-md">
                        <div className="flex">
                            <p className="text-blue-800 font-bold m-1">Can Stackkaroo.com tailor their E-commerce delivery app development services to fit specific buisness needs?</p>
                            <button className="ml-2" onClick={() => setShowThree(!showThree)}>{!showThree ?
                                <>⮟</> :
                                <>⮝</>}
                            </button>
                        </div>
                        {!showThree ? <></> :
                            <p>Yes, Stackkaroo.com makes special ecommerce delivery app services for buisnesses with different needs. We know that every buisness has special needs. We work with clients to make the app fit their needs, making sure it&apos;s just right for their ecommerce delivery buisness needs.</p>
                        }
                    </div>

                    <div className="bg-white border border-black p-2 my-4 text-xl shadow-black shadow-md">
                        <div className="flex">
                            <p className="text-blue-800 font-bold m-1">How long does it usually take to make an E-commerce delivery app with Stackkaroo.com?</p>
                            <button className="ml-2" onClick={() => setShowFour(!showFour)}>{!showFour ?
                                <>⮟</> :
                                <>⮝</>}
                            </button>
                        </div>
                        {!showFour ? <></> :
                            <p>Stackkaroo&apos;s E-commerce delivery app development time may vary because it depends on how hard the project is and what the buisness needs. Usually, the process of creating and sending on app can take 4 to 6 months. This is because things like designing the app, making it work, checking it and putting it out for use are all considered. And if you don&apos;t want to wait that long. Within 14 working days, you can expect the delivery of Stackkaroo&apos;s Readymade solution.</p>
                        }
                    </div>

                    <div className="bg-white border border-black p-2 my-4 text-xl shadow-black shadow-md">
                        <div className="flex">
                            <p className="text-blue-800 font-bold m-1">Does Stackkaroo.com provides continuos support and maintenance for the E-commerce delivery appa they create?</p>
                            <button className="ml-2" onClick={() => setShowFive(!showFive)}>{!showFive ?
                                <>⮟</> :
                                <>⮝</>}
                            </button>
                        </div>
                        {!showFive ? <></> :
                            <p>Yes, Stackkaroo.com gives continous support maintenance for the E-commerce delivery apps we developed. We make sure the app/website works well by giving regular updates, fixing problems, and adding more features. We also provide technical help when needed to make sure that our clients and their customer have a smooth experience using the app.</p>
                        }
                    </div>

                </div>
            </div>
        </>
    )
};

export default FAQs;
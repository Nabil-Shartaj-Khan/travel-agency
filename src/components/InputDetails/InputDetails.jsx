import React, { useState } from "react";
import "./InputDetails.css";
import ShowFlights from "../ShowFlights/ShowFlights";

const InputDetails = () => {
    const [activeButton, setActiveButton] = useState("round-trip"); //for keeping track of which button is clicked currently in button-holder
    const [submit, setSubmit] = useState(false); //for checking whether user submitted search button


    //for handling the button click, here when a button is clicked then the type, for example round-trip or one-way is passed.
    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const handleClick = () => {
        setSubmit(true);
    }

    return (
        <div>
            {/* first three buttons */}
            <div className="button-holder flex justify-center mt-5">
                {/* these button checks whether the current state matches with the button names, if it yes, then it activates active classname. */}
                <button
                    className={`choose-button ${activeButton === "round-trip" ? "active" : ""}`}
                    onClick={() => handleButtonClick("round-trip")}
                >
                    Round-trip
                </button>
                <button
                    className={`choose-button ${activeButton === "one-way" ? "active" : ""}`}
                    onClick={() => handleButtonClick("one-way")}
                >
                    One-way
                </button>
                <button
                    className={`choose-button ${activeButton === "multi-city" ? "active" : ""}`}
                    onClick={() => handleButtonClick("multi-city")}
                >
                    Multi-city
                </button>
            </div>


            {/* for user inputs like from, to, day, seat type etc */}
            <div className="user-inputs">
                <div className="container mx-auto">
                    <hr className="mb-3 border-blue-500" />
                    <div className="input-box">
                        <input type="text" placeholder="from" className='border border-2 border-gray-800 p-1 ml-5' />
                        <input type="text" placeholder="to" className='border border-2 border-gray-800  p-1 ml-5' />
                        <input type="date" placeholder="Date" className='border border-2 border-gray-800 p-1 ml-5' />

                        {/* Day + */}
                        <select className='border border-2 border-gray-800 ml-5 p-1'>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                        {/* Day - */}
                        <select className='border border-2 border-gray-800 ml-5 p-1'>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>

                        {/* Day + */}
                        <select className='border border-2 border-gray-800 ml-5 p-1'>
                            <option value="Day">Day</option>
                            <option value="Night">Any time</option>
                            <option value="Night">Night</option>
                        </select>
                        <span className="ml-5 font-bold text-2xl ">+</span>
                        <select className='border border-2 border-gray-800 ml-5 p-1'>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                        <select className='border border-2 border-gray-800 ml-5 p-1'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="ml-3 font-bold text-2xl ml-5">+</span>

                    </div>
                    <hr className="border-blue-500" />
                    {/* remaining buttons */}
                    <div >
                        <div className="extra-buttons container flex justify-between">
                            {/* checkbox */}
                            <div className="check-box">
                                <label className="text-md">
                                    <input type="checkbox" className="mr-2"></input>
                                    Extra options
                                </label>
                            </div>

                            {/* radio buttons */}
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="dummy"
                                        name="options"
                                        className="ml-2 mr-1"
                                    />
                                    Dummy
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="environment"
                                        name="options"
                                        className="ml-2 mr-1"
                                    />
                                    Environment
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="PTD"
                                        name="options"
                                        className="ml-2 mr-1"
                                    />
                                    PTD
                                </label>
                            </div>
                            <div>
                                <button className="search-button px-8 py-2 rounded hover:bg-blue-900" onClick={handleClick}>Search</button>
                            </div>


                        </div>
                        <hr className="border-blue-500" />

                    </div>
                    <ShowFlights submit={submit} />
                </div>

            </div>
        </div >
    );
};

export default InputDetails;

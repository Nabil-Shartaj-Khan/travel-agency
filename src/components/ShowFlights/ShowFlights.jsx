import React, { useState, useEffect } from "react";
import "./ShowFlights.css";
import flightData from "./../../instructions/data/flight_data.json"; //local source of data

const ShowFlights = ({ submit }) => {
    const [flights, setFlights] = useState([]); //this is for holding the fetched  flightData from json file

    useEffect(() => {
        if (submit) {
            fetchFlightData();  //only fetches data from the local json when the submit is true which is acquired from InputDetails.jsx
        }
    }, [submit]);

    const fetchFlightData = () => {
        try {
            setFlights(flightData.flightOffer); //fetching flightData and updating the state according to the json
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
    };

    return (
        <div>
            {submit ? (
                <div>
                    <h1 className="my-3 font-bold">Parsing data successful!</h1>
                    <div className="table-holder overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-8 py-4">Flight</th>
                                    <th className="px-8 py-4">Aircraft</th>
                                    <th className="px-8 py-4">Class</th>
                                    <th className="px-8 py-4">Fare</th>
                                    <th className="px-8 py-4">Route</th>
                                    <th className="px-8 py-4">Departure</th>
                                    <th className="px-8 py-4">Arrival</th>
                                    <th className="px-8 py-4">Duration</th>
                                    <th className="px-8 py-4">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flights.map((flight, index) => (
                                    <tr key={index}>
                                        {/* here we combine carrierCode-flightNumber for flight */}
                                        <td className="px-8 py-4">{`${flight.itineraries[0].segments[0].carrierCode}-${flight.itineraries[0].segments[0].flightNumber}`}</td>
                                        {/* here we access the first itinerary of the flight, in this case its the name */}
                                        <td className="px-8 py-4">{flight.itineraries[0].segments[0].aircraft}</td>
                                        {/* here we fetch the class from provided json */}
                                        <td className="px-8 py-4">{flight.class[0][0]}</td>
                                        {/* we fetch the fareBasis from json */}
                                        <td className="px-8 py-4">{flight.fareBasis[0][0]}</td>
                                        {/* Mapping over each segment in the itinerary for getting the full flight path*/}
                                        <td className="px-8 py-4">
                                            {flight.itineraries[0].segments.map((segment, index) => (
                                                <React.Fragment key={index}>
                                                    {segment.departure.iataCode}
                                                    {index < flight.itineraries[0].segments.length - 1 && " - "}
                                                </React.Fragment>
                                            ))}
                                        </td>
                                        {/* this fetches departure time */}
                                        <td className="px-8 py-4">{flight.itineraries[0].segments[0].departure.at}</td>

                                        {/* this fetches the arrival time of the last segment of the first itinerary of current flight */}
                                        <td className="px-8 py-4">{flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at}</td>

                                        {/* this fetches duration */}
                                        <td className="px-8 py-4">{flight.itineraries[0].duration}</td>
                                        <td className="px-8 py-4">{flight.price} <br /><button className="search-button px-8 py-2 rounded hover:bg-blue-900">Select</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="mt-4 text-2xl font-bold">No flight data available</p>
            )}
        </div>
    );
};

export default ShowFlights;

"use client";
import InvestorCard from "./InvestorCard";
import WorldMap from "../Svg/WorldMap";
import InvestoCounterByCountry from "./InvestoCounterByCountry";

function InvestorCountry() {
    const investorData = [
        { country: "USA", investor: 7, position: "left-20 top-20" },
        { country: "USA", investor: 23, position: "left-32 top-32" },
        { country: "Australia", investor: 6, position: "right-32 bottom-[4.5rem]" },
        { country: "Russia", investor: 12, position: "right-52 top-28" },
    ];
    return (
        <div>
            <div>Invistor by Country</div>
            <div>
                <InvestorCard title="Investor" total="1722" percentage="+2.1%" compare="1606" />
            </div>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <WorldMap className="w-[862px] h-[419px] lg-max:w-full" />
                    {investorData.map((item, key) => (
                        <InvestoCounterByCountry
                            key={key}
                            country={item.country}
                            investor={item.investor}
                            position={item.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InvestorCountry;

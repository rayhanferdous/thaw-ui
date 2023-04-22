"use client";

interface InvestoCounterByCountryProps {
    investor: number;
    country: string;
    position: string;
}

function InvestoCounterByCountry({ investor, country, position }: InvestoCounterByCountryProps) {
    return (
        <div className={`${position} absolute dropdown dropdown-hover`}>
            <div
                tabIndex={0}
                className="w-7 h-7 flex items-center justify-center cursor-pointer border border-solid border-[#368FCF] shadow-[0_0_0_6px_rgba(64,162,193,.2)] rounded-full bg-blue text-white leading-[0]"
            >
                {investor}
            </div>
            <div
                tabIndex={0}
                className="dropdown-content !-left-20 !-bottom-[4.5rem] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <div>{country}</div>
                <div className="text-white">{investor} Investors</div>
            </div>
        </div>
    );
}

export default InvestoCounterByCountry;

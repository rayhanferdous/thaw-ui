"use client";
import DecreaseArrow from "../Svg/DashboardCard/DecreaseArrow";
import IncreaseArrow from "../Svg/DashboardCard/IncreaseArrow";

interface Props {
    title: string;
    total: string;
    percentage: string;
    compare: string;
    negativeValue: boolean;
}

const DashboardCard: React.FC<Props> = ({ title, total, percentage, compare, negativeValue }) => {
    return (
        <div className="px-6 py-4 min-w-[259px] h-[114px] shadow-[0_4px_12px_rgba(0,0,0,0.10)] rounded-lg bg-white">
            <div className="font-sm-medium text-dashboard-text">{title}</div>
            <div className="flex items-center gap-2">
                <p
                    className="
                !text-3xl mt-2 text-dashboard-text font-sm-medium"
                >
                    {total}
                </p>
                <div
                    className={`${
                        !negativeValue ? "bg-secondery" : "bg-lite-red"
                    } flex items-center gap-1 rounded-[32px] py-1 px-1.5`}
                >
                    {!negativeValue ? <IncreaseArrow /> : <DecreaseArrow />}
                    <div className={`${!negativeValue ? "text-green-text" : "text-red-text"} font-sm-medium !text-xs`}>
                        {percentage}
                    </div>
                </div>
            </div>
            <div className="font-sm-medium !font-normal !text-xs">
                vs Last month: <span className="font-sm-medium !font-semibold text-black !text-xs">{compare}</span>
            </div>
        </div>
    );
};

export default DashboardCard;

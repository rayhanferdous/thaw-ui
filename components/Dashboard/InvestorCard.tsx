import DecreaseArrow from "../Svg/DashboardCard/DecreaseArrow";
import IncreaseArrow from "../Svg/DashboardCard/IncreaseArrow";

interface Props {
    title: string;
    total: string;
    percentage: string;
    compare: string;
    negativeValue?: boolean;
}

const InvestorCard: React.FC<Props> = ({ title, total, percentage, compare, negativeValue }) => {
    return (
        <div className="py-4 w-[259px] h-[114px]">
            <div className="font-general-sans-medium text-sm text-dashboard-text font-medium">{title}</div>
            <div className="flex items-center gap-2">
                <p className="font-general-sans-medium text-3xl mt-2 text-dashboard-text font-medium">{total}</p>
                <div
                    className={`${
                        !negativeValue ? "bg-secondery" : "bg-lite-red"
                    } flex items-center gap-1 rounded-[32px] py-1 px-1.5`}
                >
                    {!negativeValue ? <IncreaseArrow /> : <DecreaseArrow />}
                    <div className={`${!negativeValue ? "text-green-text" : "text-red-text"}`}>{percentage}</div>
                </div>
            </div>
            <div>vs Last month: {compare}</div>
        </div>
    );
};

export default InvestorCard;

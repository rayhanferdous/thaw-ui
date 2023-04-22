import Dropdown from "../../components/Dropdown/Dropdown";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import ApexChart from "../../components/AreaChart/AreaChartCard";
import ChartContainerCard from "../../components/AreaChart/ChartContainerCard";
import InvestorCountry from "../../components/Dashboard/InvestorCountry";
import SocialActvityCard from "../../components/AreaChart/SocialActvityCard";
import EventRegistrationTable from "../../components/Dashboard/EventRegistrationTable";
import { DashboardCardList } from "../../components/Dashboard/DashboardCardList";
import { NetworkEventCardList } from "../../components/AreaChart/NetworkEventCardList";
import SocialActivityChart from "../../components/SocialActivity/SocialActivityChart";
import { SocialActvityCardList } from "../../components/AreaChart/SocialActvityCardList";

export default function Home() {
    return (
        <div>
            <div className="pt-8 pb-4 w-full flex justify-between gap-6 flex-col md:flex-row">
                <div>
                    <div className="font-sm-medium !text-2xl text-primary-text">Overview Dashboard</div>
                    <p className="font-sm-medium !font-normal text-secondery-text">
                        Track your activity and Campaign performance
                    </p>
                </div>
                <div className="flex-wrap 2xl:flex-nowrap flex items-end ">
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </div>
            </div>
            <div className="flex items-center gap-4 !overflow-x-auto justify-between mt-4 pb-6">
                {DashboardCardList.map((item) => (
                    <DashboardCard
                        key={item.title}
                        title={item.title}
                        total={item.total}
                        compare={item.compare}
                        percentage={item.percentage}
                        negativeValue={item.negativeValue}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full overscroll-x-hidden">
                <ChartContainerCard title="Network Pitch Deck Visits">
                    <ApexChart />
                </ChartContainerCard>
                <ChartContainerCard title="Network Outreach" buildAudience={false}>
                    <ApexChart />
                </ChartContainerCard>
                <ChartContainerCard title="Network Growth">
                    <ApexChart />
                </ChartContainerCard>
                <ChartContainerCard title="Network Meetings">
                    <ApexChart />
                </ChartContainerCard>
            </div>
            <div className="mt-6 bg-white px-6 py-4 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
                <InvestorCountry />
            </div>
            {/* social activity */}
            <SocialActivityChart title="Network Social Activity" dataList={SocialActvityCardList} />
            <div className="grid 2xl:grid-cols-2 mt-6 pb-14 gap-5">
                <SocialActivityChart title="Networks Events" dataList={NetworkEventCardList} />

                <ChartContainerCard title="Network Social Activity">
                    <EventRegistrationTable />
                </ChartContainerCard>
            </div>
        </div>
    );
}

"use clients";
import Dropdown from "../../components/Dropdown/Dropdown";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import { DashboardCardList } from "../../components/Dashboard/DashboardCardList";
import ApexChart from "../../components/AreaChart/AreaChartCard";
import ChartContainerCard from "../../components/AreaChart/ChartContainerCard";
import InvestorCountry from "../../components/Dashboard/InvestorCountry";
import SocialActvityCard from "../../components/AreaChart/SocialActvityCard";
import { SocialActvityCardList } from "../../components/AreaChart/SocialActvityCardList";
import { NetworkEventCardList } from "../../components/AreaChart/NetworkEventCardList";
import EventRegistrationTable from "../../components/Dashboard/EventRegistrationTable";

export default function Home() {
    return (
        <div>
            <div className="pt-8 pb-4 w-full flex justify-between gap-6 flex-col md:flex-row">
                <div>
                    <div className="font-general-sans-medium text-2xl text-primary-text">Overview Dashboard</div>
                    <p className="font-general-sans-regular text-sm text-secondery-text">
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
            <div className="flex-wrap flex items-center gap-4 2xl:flex-nowrap 2xl:justify-between mt-4 pb-6">
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
            <div className="grid 2xl:grid-cols-2 gap-4 w-full">
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
            <div className="mt-6 bg-white px-6 py-4 rounded-md">
                <InvestorCountry />
            </div>
            <div className="mt-6 w-[1440px]">
                <ChartContainerCard title="Network Social Activity">
                    <>
                        <div className="flex items-center w-full gap-4 2xl-max:flex-wrap 2xl:flex-nowrap mb-2">
                            {SocialActvityCardList.map((item) => (
                                <SocialActvityCard
                                    key={item.title}
                                    title={item.title}
                                    total={item.total}
                                    compare={item.compare}
                                    percentage={item.percentage}
                                    negativeValue={item.negativeValue}
                                />
                            ))}
                        </div>
                        <ApexChart />
                    </>
                </ChartContainerCard>
            </div>
            <div className="grid 2xl:grid-cols-2 mt-6 pb-14 gap-5">
                <ChartContainerCard title="Networks Events">
                    <>
                        <div className="flex items-center mb-2">
                            {NetworkEventCardList.map((item) => (
                                <SocialActvityCard
                                    key={item.title}
                                    title={item.title}
                                    total={item.total}
                                    compare={item.compare}
                                    percentage={item.percentage}
                                    negativeValue={item.negativeValue}
                                />
                            ))}
                        </div>
                        <ApexChart />
                    </>
                </ChartContainerCard>
                <ChartContainerCard title="Network Social Activity">
                    <EventRegistrationTable />
                </ChartContainerCard>
            </div>
        </div>
    );
}

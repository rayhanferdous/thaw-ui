"use client";
import ChartContainerCard from "../AreaChart/ChartContainerCard";
import SocialActvityCard from "../AreaChart/SocialActvityCard";
import { SocialActvityCardList } from "../AreaChart/SocialActvityCardList";
import ApexChart from "../AreaChart/AreaChartCard";
import { useState } from "react";
type Props = {};

const SocialActivityChart = (props: Props) => {
    const [activeSocialActivity, setActiveSocialActivity] = useState(1);
    return (
        <div className="mt-6 ">
            <ChartContainerCard title="Network Social Activity">
                <>
                    <div className="flex items-center gap-4 py-3 px-2 w-full cursor-pointer !overflow-x-auto mb-2">
                        {SocialActvityCardList.map((item, index) => (
                            <SocialActvityCard
                                key={item.title}
                                active={++index == activeSocialActivity}
                                onClick={() => setActiveSocialActivity(index)}
                                title={item.title}
                                total={item.total}
                                compare={item.compare}
                                percentage={item.percentage}
                                negativeValue={item.negativeValue}
                            />
                        ))}
                    </div>
                    {activeSocialActivity == 1 && <ApexChart stateObj={[11, 32, 45, 32, 34, 52, 41]} />}
                    {activeSocialActivity == 2 && <ApexChart stateObj={[22, 52, 11, 11, 41, 90, 12]} />}
                    {activeSocialActivity == 3 && <ApexChart stateObj={[33, 34, 30, 66, 11, 21, 40]} />}
                    {activeSocialActivity == 4 && <ApexChart stateObj={[44, 41, 20, 90, 22, 40, 68]} />}
                    {activeSocialActivity == 5 && <ApexChart stateObj={[55, 22, 40, 41, 55, 77, 87]} />}
                    {activeSocialActivity == 6 && <ApexChart stateObj={[66, 32, 90, 52, 37, 29, 25]} />}
                </>
            </ChartContainerCard>
        </div>
    );
};

export default SocialActivityChart;

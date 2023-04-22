"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
    stateObj?: number[];
}

const ApexChart: React.FC<Props> = ({ stateObj = [11, 32, 45, 32, 34, 52, 41] }) => {
    const state = {
        series: [
            {
                name: "series2",
                data: stateObj,
            },
        ],
    };
    const apexOptionData: ApexOptions = {
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            // min: new Date("19 Sep 2018").getTime(),
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ],
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy",
            },
        },
    };

    return (
        <div className="">
            <Chart options={apexOptionData} type="area" series={state.series} height={350} />
        </div>
    );
};
export default ApexChart;

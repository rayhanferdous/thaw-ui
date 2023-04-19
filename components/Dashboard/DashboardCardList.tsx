interface DashboardCardItem {
    title: string;
    total: string;
    percentage: string;
    compare: string;
    negativeValue: boolean;
}

export const DashboardCardList: DashboardCardItem[] = [
    { title: "New prospects", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "New connections", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Messages sent", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Pitch deck visits", total: "27%", percentage: "-2.1%", negativeValue: true, compare: "21" },
    { title: "Meetings Booked", total: "15", percentage: "-2.1%", negativeValue: true, compare: "21" },
];

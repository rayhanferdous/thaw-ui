interface NetworkEventCardItem {
    title: string;
    total: string;
    percentage: string;
    compare: string;
    negativeValue: boolean;
}

export const NetworkEventCardList: NetworkEventCardItem[] = [
    { title: "Views", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Registered for event", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Attendees", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
];

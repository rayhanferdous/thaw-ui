interface SocialActvityCardItem {
    title: string;
    total: string;
    percentage: string;
    compare: string;
    negativeValue: boolean;
}

export const SocialActvityCardList: SocialActvityCardItem[] = [
    { title: "Followers", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Post Likes", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Post Comments", total: "27", percentage: "+2.1%", negativeValue: false, compare: "21" },
    { title: "Impressions", total: "27%", percentage: "-2.1%", negativeValue: false, compare: "21" },
    { title: "Response Rate by Title", total: "15", percentage: "-2.1%", negativeValue: false, compare: "21" },
    { title: "Fund Size", total: "15 M", percentage: "-2.1%", negativeValue: false, compare: "21" },
];

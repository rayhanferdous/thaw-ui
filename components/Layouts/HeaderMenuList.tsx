import AudienceSvg from "../Svg/HeaderMenuSvg/AudienceSvg";
import CampaignsSvg from "../Svg/HeaderMenuSvg/CampaignsSvg";
import DashboardSvg from "../Svg/HeaderMenuSvg/DashboardSvg";
import MeetingsSvg from "../Svg/HeaderMenuSvg/MeetingsSvg";
import PitchDeckSvg from "../Svg/HeaderMenuSvg/PitchDeckSvg";

interface MenuItem {
    name: string;
    link: string;
    icon: JSX.Element;
}

export const HeaderMenuList: MenuItem[] = [
    { name: "Dashboard", link: "/", icon: <DashboardSvg className="stroke-active-menu" /> },
    { name: "Audience Builder", link: "/audience", icon: <AudienceSvg className="stroke-inactive-menu" /> },
    { name: "Campaigns", link: "/#", icon: <CampaignsSvg className="stroke-inactive-menu" /> },
    { name: "Pitch Deck", link: "/#", icon: <PitchDeckSvg className="stroke-inactive-menu" /> },
    { name: "Meetings", link: "/#", icon: <MeetingsSvg className="stroke-inactive-menu" /> },
];

import Link from "next/link";


interface Props {
    title: string;
    active: boolean;
    link: string;
    icon: JSX.Element;
}

const HeaderMenuCard: React.FC<Props> = ({ title, icon, link, active }) => {
    return (
        <Link href={`${link}`}>
            <li
                className={`${
                    active
                        ? "border-b-2 border-active-menu bg-[#1C487C]"
                        : "hover:border-b-2 hover:border-active-menu hover:bg-[#1C487C]"
                } flex items-center gap-2 px-4 h-11`}
            >
                <div>{icon}</div>
                <div>{title}</div>
            </li>
        </Link>
    );
};

export default HeaderMenuCard;

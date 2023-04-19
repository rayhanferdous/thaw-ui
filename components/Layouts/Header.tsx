"use client";
import Link from "next/link";
import ThawLogoSvg from "../Svg/ThawLogoSvg";
import { HeaderMenuList } from "./HeaderMenuList";
import HeaderMenuCard from "./HeaderMenuCard";
import BellSvg from "../Svg/HeaderMenuSvg/BellSvg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import UpDownSvg from "../Svg/UpDownSvg";

function Header() {
    const pathname = usePathname();
    return (
        <section className="bg-primary h-[44px]">
            <nav className="2xl:mx-auto flex items-center 2xl:w-[1440px] h-full">
                <div className="navbar flex items-center justify-between gap-2">
                    <div className="flex gap-4 h-6 items-center">
                        <Link href={"/#"}>
                            <ThawLogoSvg />
                        </Link>

                        <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1" height="22" fill="#1C487C" />
                        </svg>

                        <div className="dropdown header-menu">
                            <label
                                tabIndex={0}
                                className="btn btn-sm flex items-center gap-2 btn-ghost rounded-btn  text-sm"
                            >
                                <div>Acme Company</div>
                                <UpDownSvg />
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex items-center h-11 gap-2">
                        {HeaderMenuList.map((item) => (
                            <HeaderMenuCard
                                key={item.name}
                                active={item.link == pathname}
                                link={item.link}
                                icon={item.icon}
                                title={item.name}
                            />
                        ))}
                    </ul>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <BellSvg />
                            <div
                                className="absolute -top-1 -right-1
                             w-1.5 h-1.5 rounded-full bg-active-menu"
                            ></div>
                        </div>
                        <Image width={32} height={32} src={"/assets/avater.png"} alt="profile picture" />
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;

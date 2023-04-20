import Link from "next/link";

interface ChartContainerCardProps {
    title: string;
    buildAudience?: boolean;
    cumulative?: boolean;
    linear?: boolean;
    network?: boolean;
    children: JSX.Element;
}

function ChartContainerCard({
    title,
    buildAudience = true,
    cumulative = true,
    linear = true,
    network = true,
    children,
}: ChartContainerCardProps) {
    return (
        <div className="bg-white rounded-md px-6 pt-4 pb-2 shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
            <div className="flex items-center flex-row gap-4 md-max:flex-col md:justify-between mb-4">
                <div className="font-general-sans font-medium text-primary-text">{title}</div>
                <div className="flex items-center gap-1.5">
                    {buildAudience && (
                        <Link href={"/#"}>
                            <div className="link link-primary font-medium font-general-sans text-xs">
                                Build Audience
                            </div>
                        </Link>
                    )}
                    {cumulative && (
                        <button className="btn btn-sm !rounded-md btn-outline font-medium font-general-sans text-xs">
                            Cumulative
                        </button>
                    )}
                    {linear && (
                        <button className="btn btn-sm !rounded-md btn-outline font-medium font-general-sans text-xs">
                            Linear
                        </button>
                    )}
                    {network && (
                        <button className="btn btn-sm !rounded-md btn-outline font-medium font-general-sans text-xs">
                            Network
                        </button>
                    )}
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default ChartContainerCard;

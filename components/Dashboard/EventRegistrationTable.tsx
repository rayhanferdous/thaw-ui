function EventRegistrationTable() {
    const tableData = [
        {
            avater: "/assets/avater.png",
            name: "Robert Fox",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert Foxm",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert Foxn",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert Foxu",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert p",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert g",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Eleanor Pena",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Leslie Alexander",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Robert Fox0",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Leslie Alexander8",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
        {
            avater: "/assets/avater.png",
            name: "Eleanor Penah",
            event: "Event Name",
            date: "Mar 21, 2023",
        },
    ];
    return (
        <div className="overflow-y-auto w-full h-[504px]">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="border-b">
                        <th className="!border-r">
                            <label className="border-r">
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th className="border-r">Name</th>
                        <th className="border-r">Event</th>
                        <th className="border-r">Date</th>
                        <th>Network</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.name}>
                            <th className="border-r">
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className="border-r">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/assets/avater.png" alt="avater.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r">{item.event}</td>
                            <td className="border-r">{item.date}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">FB</button>
                                <button className="btn btn-ghost btn-xs">FB</button>
                                <button className="btn btn-ghost btn-xs">FB</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventRegistrationTable;

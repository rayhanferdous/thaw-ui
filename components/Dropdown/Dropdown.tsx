function Dropdown() {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1 !bg-white !h-[34px] !min-h-[34px] border border-secondery-border">
                <div className="flex items-center">
                    <p className="font-general-sans-regular text-sm capitalize text-secondery-text font-normal">Campaign: All</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="#57555D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;

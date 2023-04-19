interface Props {
    className: string;
}

const PitchDeckSvg: React.FC<Props> = ({ className }) => {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.99999 13.3333V17.5M9.99999 13.3333L15 17.5M9.99999 13.3333L4.99999 17.5M17.5 2.5V9.33333C17.5 10.7335 17.5 11.4335 17.2275 11.9683C16.9878 12.4387 16.6054 12.8212 16.135 13.0608C15.6002 13.3333 14.9001 13.3333 13.5 13.3333H6.49999C5.09986 13.3333 4.39979 13.3333 3.86501 13.0608C3.39461 12.8212 3.01216 12.4387 2.77247 11.9683C2.49999 11.4335 2.49999 10.7335 2.49999 9.33333V2.5M6.66666 7.5V10M9.99999 5.83333V10M13.3333 9.16667V10M18.3333 2.5H1.66666"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PitchDeckSvg;

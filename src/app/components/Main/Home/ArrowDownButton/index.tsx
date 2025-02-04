import Link from "next/link";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function ArrowDownButton() {
    return (
        <Link href="#projects" className="hidden sm:inline-block">
            <KeyboardDoubleArrowDownIcon 
                style={{ fontSize: '48px' }} 
                className="hidden sm:inline-block sm:absolute sm:left-1/2 sm:bottom-4 sm:animate-arrowUpAndDown text-[#878EA1]" 
            />
        </Link>
    );
}

import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

const WELCOME = 'הבית החכם שלי';
const OPTIONS = ':אפשרויות';
const CLICKS = 'כפתורי הדלקה וכיבוי';

const HomePage = () => {
    const navigate = useNavigate();

    const handleClicks = () => {
        navigate('/clicks');
    };

    return (
        <div className="flex flex-col justify-between items-center gap-10">
            <div className="text-black text-6xl">{WELCOME}</div>
            <div className="flex flex-col w-64 m-5 p-2 bg-[rgba(0,0,0,0.7)] items-center justify-center gap-8">
                <h3>{OPTIONS}</h3>
                <Tooltip title="לחץ כדי להציג את כפתורי הדלקה וכיבוי">
                    <p onClick={handleClicks} className="cursor-pointer text-red-400 hover:bg-slate-700 rounded-full px-2">{CLICKS}</p>
                </Tooltip>
            </div>
        </div>
    );
}

export default HomePage;

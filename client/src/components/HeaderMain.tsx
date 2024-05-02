import { IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useAtom } from 'jotai';
import { ToggleTheme } from '../atoms/modeAtom';

const SMARTHOME = 'בית חכם';

const HeaderMain = () => {
    const [modeToggleTheme, setModeToggleTheme] = useAtom(ToggleTheme);

    const toggleTheme = () => {
        setModeToggleTheme(!modeToggleTheme)
    };

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white text-lg">
            <div className="flex items-center">
                <div className="mr-4">{/* הוספת הלוגו שלך */}</div>
                <div>{SMARTHOME}</div>
            </div>
            <div className="flex items-center">
                <IconButton onClick={toggleTheme} color="inherit">
                    {modeToggleTheme ? < NightsStayIcon/> : <WbSunnyIcon />}
                </IconButton>
            </div>
        </header>
    );
};

export default HeaderMain;

import ClickButton from './ClickButton';
import { ClicksEnum } from '../../enums/clicksEnum';
import { useAtom } from 'jotai';
import { atomModeToggleClicks } from './atomModeToggleClicks';

const Clicks = () => {
    const [modeToggles, setModeToggles] = useAtom(atomModeToggleClicks);

    const handleToggle = (index: number) => {
        const newToggles = [...modeToggles];
        newToggles[index] = !newToggles[index];
        setModeToggles(newToggles);
    };

    return (
        <div className="flex flex-col w-64 m-5 p-2 bg-[rgba(0,0,0,0.7)] items-center j justify-center gap-8">
            {Object.values(ClicksEnum).map((click, index) => (
                <ClickButton
                    key={index}
                    index={index}
                    click={click}
                    modeToggle={modeToggles[index]}
                    handleToggle={handleToggle}
                />
            ))}
        </div>
    );
};

export default Clicks;

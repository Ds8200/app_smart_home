interface ClickButtonProps {
    index: number;
    click: string;
    modeToggle: boolean;
    handleToggle: (index: number) => void;
}

const ClickButton: React.FC<ClickButtonProps> = ({ index, click, modeToggle, handleToggle }) => {
    return (
        <div className={'flex w-full items-center justify-between'}>
            <div
                onClick={() => handleToggle(index)}
                className={`flex items-center justify-${modeToggle ? 'end' : 'start'} w-16 h-8 rounded-full cursor-pointer ${modeToggle ? 'bg-lime-400' : 'bg-slate-500'}`}
            >
                <div className='w-6 h-6 m-1 bg-white rounded-full'></div>

            </div>
            <span className="ml-2">{click}</span>
        </div>
    );
};

export default ClickButton;
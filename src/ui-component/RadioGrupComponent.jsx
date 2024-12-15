const RadioGroup = ({ name, options, selectedValue, handleBoardChange, error }) => {

    return (
        <>
            {options.map(({ id, value, label }) => (
                <div key={id} className="flex gap-10 items-center ">
                    <input
                        type="radio"
                        name={name}
                        id={id}
                        className="w-5 h-5"
                        checked={selectedValue === value}
                        onChange={() => handleBoardChange(value)}
                    />
                    <label name={name} htmlFor={id}>{label}</label>
                </div>
            ))}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </>
    );
};
export default RadioGroup
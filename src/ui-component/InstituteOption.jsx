import { useEffect, useState } from "react";
import RadioGroup from "./RadioGrupComponent";
import axios from "axios";

const InstituteOptions = ({ instituteType, setFieldValue, errors ,values}) => {
    const [boardOptions, setBoardOptions] = useState([{}])
    const handleBoardChange = (value) => {
        setFieldValue("educationBoard", value);
    };

    const handleUniversityChange = (value) => {
        setFieldValue("university", value);
    };
    const handleFetchBoardMasterData = async (value) => {
        await axios.get(`http://localhost:8080/api/v1/education-board-master-data/get-education-board-master-data/${value}`).then((response) => {
            const { board_type } = response.data.data;
            // Use the functional form of setBoardOptions
            setBoardOptions(() => [
                ...board_type.map((boardValue, index) => ({
                    id: index + 121,
                    value: boardValue,
                    label: boardValue,
                })),
            ]);
        }).catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        handleFetchBoardMasterData(instituteType)
    }, [instituteType])




    return (
        <div className='w-1/4 min-h-[600px] max-h-100vh  bg-[#deedff] p-10 flex flex-col gap-10'>
            {instituteType === "School" && (
                <RadioGroup
                    name="board"
                    options={boardOptions}
                    selectedValue={values.educationBoard}
                    handleBoardChange={handleBoardChange}
                    error={errors.instituteType}
                />
            )}

            {instituteType === "College" && (
                <RadioGroup
                    name="university"
                    options={boardOptions}
                    selectedValue={values.university}
                    onChange={handleUniversityChange}
                    error={errors.instituteType}
                />
            )}
        </div>
    );
};

export default InstituteOptions;
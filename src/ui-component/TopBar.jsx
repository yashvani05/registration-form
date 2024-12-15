import { useFormik } from 'formik';
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import Standard from './Standard';
import * as Yup from 'yup';
import CommonInputBox from './CommonInputBox';
import axios from 'axios';
import Accordion from './Accordion';
import InstituteOptions from './InstituteOption';
import StepFirstForm from './StepFirstForm';
const registrationFromSchema = Yup.object().shape({
    instituteType: Yup.string()
        .required('Required'),
    educationBoard: Yup.string()
        .required('Required'),
    subjects: Yup.array()
        .min(1, 'min 1 subjects Required!')
        .required('subjects Required'),
    standard: Yup.string().required('Required'),
    fullName: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
});
const TopBar = () => {
    const [step, setStep] = useState(1)
    const [handlePopup, setHandlePopup] = useState(false)
    const [successfull, setSuccesFull] = useState(false)
    const handleStep = (buttonName) => {
        if (buttonName === "next" && step < 2) {
            setStep(step + 1)
        } else if (step !== 1 && buttonName === "prev") {
            setStep(step - 1)
        }
    }
    const formik = useFormik({
        validationSchema: registrationFromSchema,
        enableReinitialize: true,
        initialValues: {
            fullName: '',
            email: '',
            instituteType: '',
            educationBoard: '',
            university: "",
            subjects: [],
            standard: '',
            medium: '',

        },
        onSubmit: async values => {
            const payload = {
                fullName: values.fullName,
                email: values.email,
                institute_type: values.instituteType,
                selection_types: [{
                    subjects: values.subjects,
                    standard: values.standard,
                    education_board: values.educationBoard,
                }]
            }

            await axios.post('http://localhost:8080/api/v1/registration-form/save-form', {
                ...payload
            }).then((response) => {
                alert("Form submitted successfully")
                setSuccesFull(!successfull)
                setStep(1)
            }).catch((error) => {
                console.log(error)
                alert("Failed to submit form")
            })
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { handleSubmit, values, errors, setFieldValue, resetForm } = formik

    const handelOpenModal = () => {
        setHandlePopup(!handlePopup)
    }
    console.log("values---", values);

    return (
        <main className='px-52'>
            <div className='flex w-full justify-between text-black bold mt-5 md:flex-none flex-wrap'>
                <div className='flex flex-col'>
                    <h1 className='font-bold'>Institute For</h1>
                    <h2>Select your organization types with boards {step}.</h2>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <button className={`shadow-[3px_3px_2px_0px_rgba(22,14,240,1)] p-2 rounded-[10px] font-bold w-[100px] border-solid border-2 border-blue-800 ${step === 1 ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={step === 1} onClick={() => handleStep('prev')}>Previous</button>
                    <button className={`bg-blue-400 text-white shadow-[3px_3px_2px_0px_rgba(22,14,240,1)] border-solid border-2 border-blue-800 p-2 rounded-[10px] font-bold w-[100px]  ${(step === 1 && values.instituteType === "") ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={step === 1 && values.instituteType === ""} onClick={() => handleStep('next')}>Next</button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                {
                    step === 1 ? (
                        <StepFirstForm values={values} setFieldValue={setFieldValue} errors={errors} />
                    )
                        : step === 2 ? (
                            <div className='flex mt-5 border-[#f4f4f4] border-[1px]'>
                                <InstituteOptions instituteType={values.instituteType} setFieldValue={setFieldValue} errors={errors} values={values} />
                                <div className="p-2 w-full">
                                    <h1>
                                        Medium and class with standard and subjects
                                    </h1>
                                    <p>
                                        Select your school boards
                                    </p>
                                    <div className='w-full'>
                                        {
                                            values.instituteType === "School" ? (<>
                                                <Accordion data={[
                                                    {
                                                        title: "Gujarti Medium",
                                                        options: ["Pre Primary", "Primary", "Secondary", "Higher Secondary"],

                                                    },
                                                    {
                                                        title: "Hindi Medium",
                                                        options: ["Pre Primary", "Primary", "Secondary", "Higher Secondary"],
                                                    },
                                                    {
                                                        title: "English Medium",
                                                        options: ["Pre Primary", "Primary", "Secondary", "Higher Secondary"],
                                                    },
                                                ]} handelOpenModal={handelOpenModal} setFieldValue={setFieldValue} values={values} name={"medium"} />
                                                
                                            </>) :

                                                (<>
                                                    <Accordion data={[
                                                        {
                                                            title: "Bachelors",
                                                            options: ["BSc", "BA"],
                                                        },
                                                        {
                                                            title: "Masters",
                                                            options: ["MCA", "MBA"],
                                                        },
                                                    ]} handelOpenModal={handelOpenModal} setFieldValue={setFieldValue} values={values} name={"medium"} />
                                                </>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                            : null

                }
            </form>
            <ModalComponent
                isOpen={handlePopup}
                view={<Standard handleSubmit={handleSubmit} setFieldValue={setFieldValue} values={values}
                    successfull={successfull} setSuccesFull={setSuccesFull} handlePopup={handlePopup} setHandlePopup={setHandlePopup} resetForm={resetForm} setStep={setStep} />}
                setHandlePopup={setHandlePopup}
            />

        </main>
    );
};

export default TopBar;

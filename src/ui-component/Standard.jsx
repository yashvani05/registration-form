import React from 'react'

const Standard = ({ handleSubmit, setFieldValue, values,
    successfull, setStep ,setHandlePopup,resetForm,setSuccesFull,handlePopup}) => {
    const handleSubjectChange = (value, data) => {
        const index = values.subjects.indexOf(data);
        if (index > -1) {
            values.subjects.splice(index, 1);
        } else {
            values.subjects.push(data);
        }
        setFieldValue("subjects", [...values.subjects])
    }
    const handleSUbmission = () => {
        handleSubmit()
    }
    const handleNewRegistorButton = () => {
        setStep(1)
        resetForm()
        setHandlePopup(!handlePopup)
        setSuccesFull(!successfull)
    }
    return (
        <div className='p-2 max-w-full min-w-[700px]'>

            {
                !successfull ? (<>
                    <h1 className='text-2xl font-bold'>Select Standards & Subjects</h1>
                    <p>Primary Gujrati Medium</p>
                    <section className="accordion">
                        <div className="tab mb-3">
                            <input type="radio" name="accordion-3" id="cb5" onClick={() => setFieldValue("standard", "9th")} />
                            <label htmlFor="cb5" name="accordion-3" className="tab__label" onClick={() => setFieldValue("standard", "9th")}>Std-9</label>
                            <div className="tab__content">
                                <div className='flex gap-10 items-center p-5'>
                                    <input type="checkbox" name="Mathematics" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Mathematics">Mathematics</label>
                                </div>
                                <hr />
                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Science">Science</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Social Science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Social Science">Social Science</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="English" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="English">English</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Computer science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Computer science">Computer science</label>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" name="accordion-3" id="cb4" onClick={() => setFieldValue("standard", "10th")} />
                            <label htmlFor="cb4" name="accordion-3" className="tab__label" onClick={() => setFieldValue("standard", "10th")}>Std-10</label>
                            <div className="tab__content">
                                <div className='flex gap-10 items-center p-5'>
                                    <input type="checkbox" name="Mathematics" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Mathematics">Mathematics</label>
                                </div>
                                <hr />
                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Science">Science</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Social Science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Social Science">Social Science</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="English" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="English">English</label>
                                </div>
                                <hr />

                                <div className='flex gap-10 items-center  p-5'>
                                    <input type="checkbox" name="Computer science" id="" className='w-5 h-5' onClick={(e) => handleSubjectChange("subjects", e.target.name)} />
                                    <label htmlFor="Computer science">Computer science</label>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </section>
                    <div className='mt-2'>
                        <button className='bg-blue-400 text-white shadow-[3px_3px_2px_0px_rgba(22,14,240,1)] border-solid border-2 border-blue-800 p-2 rounded-[10px] font-bold w-[100px]' onClick={handleSUbmission} type='submit'>Submit</button>
                    </div></>) : (
                    <>
                        <div className='flex flex-col justify-center items-center h-[400px]'>
                            <h1 className='font-extrabold text-2xl mb-2'>
                                Institute Registered!
                            </h1>
                            <p className='text-lg mb-2'>
                                Institute has been registered successfully!!
                            </p>
                            <div className='flex flex-col gap-2'>
                                <button className={`bg-blue-400 text-white shadow-[3px_3px_2px_0px_rgba(22,14,240,1)] border-solid border-2 border-blue-800 p-2 rounded-[10px] font-bold w-[350px]   "cursor-pointer"}`} >Let's get Started</button>
                                <button className={`shadow-[3px_3px_2px_0px_rgba(22,14,240,1)] p-2 rounded-[10px] font-bold w-[350px] border-solid border-2 border-blue-800  "cursor-pointer"}`} onClick={() => handleNewRegistorButton()}>Registor New Institute</button>

                            </div>
                        </div>
                    </>)
            }

        </div>
    )
}

export default Standard
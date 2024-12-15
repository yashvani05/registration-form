import React from "react";

const Accordion = (props) => {
    const { data ,handelOpenModal ,setFieldValue ,values ,name} = props;
    return (
        <section className="accordion">
            {data.map((item, index) => (
                <div className="tab" key={index}>
                    <input type="checkbox" name={`accordion-${index}`} id={`cb${index}`} />
                    <label htmlFor={`cb${index}`} className="tab__label">
                        {item.title}
                    </label>
                    <div className="tab__content">
                        {item.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <div className="flex gap-10 items-center p-5">
                                    <input
                                        type="radio"
                                        name="mediums"
                                        id={`option-${index}-${optionIndex}`}
                                        className="w-5 h-5"
                                        onChange={()=>setFieldValue(name ,`${option}`)}
                                        onClick={handelOpenModal}
                                    />
                                    <label htmlFor={`option-${index}-${optionIndex}`} name='mediums' onClick={handelOpenModal}>
                                        {option}
                                    </label>
                                </div>
                                {optionIndex < item.options.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Accordion;

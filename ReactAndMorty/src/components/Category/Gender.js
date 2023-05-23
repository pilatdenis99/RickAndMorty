import React from 'react';
import FilterBTN from "../Filters/FilterBTN";

const Gender = ({setPageNumber, setGender}) => {
    let genders = ['female', 'male', 'genderless','unknown'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body accordion-body d-flex flex-wrap gap-2">
                    {genders.map((items,index)=>(
                        <FilterBTN task={setGender} setPageNumber={setPageNumber} key={index} name="gender" index={index} items={items}/>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Gender;
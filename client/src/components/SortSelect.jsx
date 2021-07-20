import React, {useState, useEffect} from 'react'
import { HiChartBar } from 'react-icons/hi'
import '../App.scss';

const getOptionLabel = (value) => {
    let label;
    switch (value) {
        case 'recent':
        label = "Recently Ordered"
        break;
        default:
        label = "Most Popular"
    }
    return label;
}
const SortSelect = ({options, isDefault, handleSelect}) => {

    const handleChange = (e) => {
        const {value } = e.target;
        return handleSelect(value)
    }

    return(
        <div className="sort-select-row">
          <div className="select-sort">
            <HiChartBar className="icon"></HiChartBar>
            <select name="sort-query" id="sort-query" onChange={handleChange}>
            {options.map((q) => {
                return isDefault === true ?  <option key={q} value={q} defaultValue>{getOptionLabel(q)}</option> : <option key={q} value={q}>{getOptionLabel(q)}</option>;
                })}
            </select>
          </div>
        </div>
    )
}

export default SortSelect;

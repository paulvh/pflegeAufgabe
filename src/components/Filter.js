import React from 'react'

export default function Filter({
  title,
  filterOptions,
  onChange,
  isStarFilter = true,
  selectValue,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <select onChange={onChange} value={selectValue}>
        {filterOptions.map((filterOption, index) => (
          <option value={isStarFilter ? index + 1 : filterOption}>
            {filterOption}
          </option>
        ))}
      </select>
    </div>
  )
}

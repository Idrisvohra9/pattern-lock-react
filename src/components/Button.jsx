import React from 'react'

export default function Button ({ checkPattern, value })  {
    return (
        <button
            type="button"
            className="btn btn-light px-3 py-2"
            aria-label={`${value}`}
            onClick={checkPattern}
        >{value}</button>
    )
}
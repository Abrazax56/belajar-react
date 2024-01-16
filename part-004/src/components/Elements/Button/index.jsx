import React from 'react'
export default function Button ({children, bgColor, textColor, otherClasses}) {
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${bgColor} ${textColor} ${otherClasses}`} type="submit">
          {children}
      </button>
    )
}
import React from 'react'

export const Alert = ({ children }: any) => {
  return (
    <div className="mt-10 bg-yellow-100 p-5 rounded-md">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  )
}

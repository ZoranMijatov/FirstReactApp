import React, { useState } from 'react'

const Stepper = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className="Stepper" style={{backroundImage: URL('Stepper.svg')}}>

      </div>
    </div>
  )
}

export default Stepper

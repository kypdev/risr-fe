import React from 'react'

type AddressIcon = {
  size: number
}

const AddressIcon = ({ size }: AddressIcon) => {
  return (
    <svg
      width='18'
      height='22'
      viewBox='0 0 18 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.00133 20.6C9.00133 20.6 16.5144 13.9218 16.5144 8.91307C16.5144 4.76373 13.1507 1.40002 9.00133 1.40002C4.85199 1.40002 1.48828 4.76373 1.48828 8.91307C1.48828 13.9218 9.00133 20.6 9.00133 20.6Z'
        stroke='#E5E9EF'
        stroke-width='2'
      />
      <path
        d='M11.4016 8.60018C11.4016 9.92566 10.3271 11.0002 9.00163 11.0002C7.67615 11.0002 6.60163 9.92566 6.60163 8.60018C6.60163 7.27469 7.67615 6.20018 9.00163 6.20018C10.3271 6.20018 11.4016 7.27469 11.4016 8.60018Z'
        stroke='#E5E9EF'
        stroke-width='2'
      />
    </svg>
  )
}

export default AddressIcon

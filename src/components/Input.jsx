import React, {useId} from 'react'
const id = useId()
const Input = React.forwardRef(({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) => {
  return (
      <div className='w-full'>
          {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
          <input type={type} className={` px-3 py-2 rounded-lg bg-white text-black outline-none
             focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props} ref={ref} />
    </div>
  )
}
)

export default Input
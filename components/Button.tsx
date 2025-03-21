import React from 'react'

const Button = ({ title, id, containerClass  }) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-sm bg-violet-50 px-7 py-3 text-black ${containerClass}`}>

        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button
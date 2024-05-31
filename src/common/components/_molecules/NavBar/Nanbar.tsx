import React from 'react'

const Nanbar = () => {
  return (
    <div className='flex items-center justify-between pl-[12rem] pr-[15rem]'>
        <nav>
            <ul className='list-none flex items-center justify-between gap-10'>
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <div>
            <p>(219) 555-0114</p>
        </div>
    </div>
  )
}

export default Nanbar
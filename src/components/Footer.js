import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='flex my-8 h-full bg-textColor lg:flex lg:my-14 lg:bg-textColor'>
        <div className='grid grid-cols-2 my-4 space-x-4 mx-10 lg:my-8 lg:space-x-8 lg:mx-48'>
            <span>
                <p className='font-kalam font-bold text-textColor2 py-1 lg:py-3'>Timbu Shop</p>
                <p className='text-textColor2 sm:text-wrap'>Be a part of TimbuShop <br/>community and stay connected <br/>with the latest fashion trends and <br/>exclusive offers. Follow us on social<br/> media and sign up for our <br/>newsletter to receive updates on <br/>new arrivals and special <br/>promotions.</p>
                <FontAwesomeIcon icon={faWhatsapp} className='bg-green-400 text-white rounded-full mx-2'/>
                <FontAwesomeIcon icon={faInstagram} className='bg-red-400 text-white rounded-full mx-2'/>
                <FontAwesomeIcon icon={faFacebook} className='bg-white text-blue-400 rounded-full mx-2'/>
            </span>
            <span>
                <p className='font-semibold text-textColor2 py-1 lg:py-3'>Shop with us</p>
                <ul>
                    <li className='text-textColor2'>Casual gowns</li>
                    <li className='text-textColor2'>Mini gowns</li>
                    <li className='text-textColor2'>Corporate gowns</li>
                </ul>
            </span>
            <span>
                <p className='font-semibold text-textColor2 py-1 lg:py-3'>Private Policy</p>
                <ul>
                    <li className='text-textColor2'>Return Policy</li>
                    <li className='text-textColor2'>Terms & Condition</li>
                    <li className='text-textColor2'>Warranty Policies</li>
                </ul>
            </span>
            <span>
                <p className='font-semibold text-textColor2 py-1 lg:py-3'>Contact Us</p>
                <ul>
                    <li className='text-textColor2'>+234 9024840960</li>
                    <li className='text-textColor2'>Timbushop@gmail.com</li>
                    <li className='text-textColor2'>Lagos Island, Nigeria</li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import Klarna from '../assets/logo-wall/klarna.png'
import Stripe from '../assets/logo-wall/stripe.png'
import PayPal from '../assets/logo-wall/paypal.png'
import Bedc from '../assets/logo-wall/bedc.png'
import MasterCard from '../assets/logo-wall/mastercard.png'
import Mtn from '../assets/logo-wall/mtn.png'
import Airtel from '../assets/logo-wall/airtel.png'
import Payoneer from '../assets/logo-wall/payoneer.png'
import Visa from '../assets/logo-wall/visa.png'
import Mobile from '../assets/logo-wall/mobile.png'
import Ikeja from '../assets/logo-wall/ikeja.png'
import Dstv from '../assets/logo-wall/dstv.png'
import LogoWall from '../common/LogoWall'

function Partners() {
  return (
    <section id='partners' className='mt-20 flex flex-col bg-gray-50 py-20'>
        <article className='mb-10 w-full px-8 text-center lg:px-12'>
            <h2 className='mb-4 text-4xl font-semibold text-gray-800'>Transact seamlessly...</h2>
            <p>
                Connect your other acoounts to finsavvy seamlessly. Finsavvy supports 200+ 
                <br /> 
                integations with other payment platforms like paypal,M-pesa an others.
                </p>
        </article>
        <div className='xl:flex xl:justify-center'>
            <LogoWall 
            src1={Klarna}
            src2={Stripe} 
            src3={PayPal} 
            alt1='klanar' 
            alt2='stripe' 
            alt3='paypal' 
            />

            <LogoWall 
            src1={Bedc}
            src2={MasterCard} 
            src3={Mtn} 
            alt1='Bedc'
            alt2='mastercard'  
            alt3='mtn'
            />
        </div>

        <div className='xl:flex xl:justify-center'>
            <LogoWall 
            src1={Airtel}
            src2={Payoneer} 
            src3={Visa} 
            alt1='airtel' 
            alt2='Payoneer' 
            alt3='Visa' 
            />

            <LogoWall 
            src1={Mobile}
            src2={Ikeja} 
            src3={Dstv} 
            alt1='mobile' 
            alt2='Ikeja' 
            alt3='Dstv' 
            />
        </div>
    </section>
  )
}

export default Partners
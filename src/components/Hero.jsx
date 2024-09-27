import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  const newLocal = 
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className='flex flex-row justify-between items-center w-full -mt-20 sm:-mt-32 lg:-mt-96'>
      <h1 className='flex-1 font-poppins font-semibold ss:text-[55px] text-[55px] text-white ss:leading-[100.8px] leading-[75px]'>
        Your Trusted <br className='sm:block hidden' /> {" "}
        <span className='text-gradient'> Partner</span> {" "}
      </h1>
    </div>
    <h1 className='font-poppins font-semibold ss:text-[44px] text-[44px] text-white ss:leading-[100px] leading-[75px] w-full'>
      in Cloud Deployment.
    </h1>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
      We examine annual percentage rates, annual fees.
    </p>
  </div>
  return (
    <section 
      id='home' 
      className={`flex md:flex-row flex-col ${styles.paddingY} -mt-26`} // Added negative margin-top
    >
      {newLocal}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div> */}
    </section>
  )
}

export default Hero

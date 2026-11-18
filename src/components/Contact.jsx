import { motion } from 'framer-motion'
import {  FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { FaEnvelope, FaHashnode, FaPhone } from 'react-icons/fa6'
const Contact = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut'}}
          viewport={{ once: false, amount:0.2 }}
          id='contact'
          className='py-20 bg-dark-200'
        >
          <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
              Get In
            <span className='text-purple-400'> Touch
            </span>
            </h2>
          <p className='text-gray-400 text-center max-w-2xl mx-auto
          mb-16'>Have a project in mind or want to collabrate? Let's talk!</p>
            {/* new <div> */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            {/* contact form */}
            <div>
          <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-gray-300 mb-2'>  
               Your Name
            </label>
            <input 
            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
            type="text" />
          </div>
          {/* email address */}
          <div>
            <label htmlFor='email' className='block text-gray-300 mb-2'>  
               Email Address
            </label>
            <input 
            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
            type="text" />
          </div>

          {/* Your Message*/}
          <div>
            <label htmlFor='message' className='block text-gray-300 mb-2'>  
               Your Message
            </label>
            <textarea
            className='w-full h-40 border border-dark-400 rounded-lg px-4 py-3 outline-none'
            type="text" />
          </div>
          <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700
          transition duration-200 cursor-pointer'>
               Send
          </button>

          </form>
            </div>

           {/* contact Information  */}
            <div className='space-y-8'>
           <div className='flex items-start'>

            <div className='text-purple-400 text-2xl mr-4'>
              <FaMapMarkerAlt />
              </div>
              <div>
              <h3 className='text-lg font-semibold mb-2'>Location</h3>
              <p className='text-gray-400'>New Delhi,Delhi</p>
            </div>
           </div>

           {/* Email-section  */}
              <div className='flex items-start'>

            <div className='text-purple-400 text-2xl mr-4'>
              <FaEnvelope />
              </div>
              <div>
              <h3 className='text-lg font-semibold mb-2'>Email</h3>
              <p className='text-gray-400'>faisalkhan843331@gmail.com</p>
            </div>
           </div>
           
           {/*  Phone-section   */}
           <div className='flex items-start'>

            <div className='text-purple-400 text-2xl mr-4'>
              <FaPhone />
              </div>
              <div>
              <h3 className='text-lg font-semibold mb-2'>Phone</h3>
              <p className='text-gray-400'>+91-82717793XX</p>
            </div>
           </div>
           {/* Follow Me section */}
           <div className='pt-4'>
            <h2 className='text-lg font-semibold mb-4  
            '>Follow Me</h2>
            <div className='flex space-x-4'>
              {/* Github-connect */}
              <a href='https://github.com/letscodewithfaisal' className='w-12 h-12 rounded-full 
              bg-dark-300 flex items-center justify-center
              text-purple-400 hover:bg-grey hover:text-white 
              transition duration-300' target="_blank">
                <FaGithub />
              </a>

              {/* Linkedin-connect */}
             <a href='  http://www.linkedin.com/in/faisal-siddiqui-b42980228' className='w-12 h-12 rounded-full 
              bg-dark-300 flex items-center justify-center
              text-purple-400 hover:bg-blue-800 hover:text-white 
              transition duration-300' target="_blank">
                <FaLinkedin />
              </a>
             
             {/* Hashnode-connect */}
             <a href=' https://hashnode.com/@faisalsiddiqui' className='w-12 h-12 rounded-full 
              bg-dark-300 flex items-center justify-center
              text-purple-400 hover:bg-blue-300 hover:text-white 
              transition duration-300' target="_blank">
                <FaHashnode />
              </a>
             {/* Twitter-connect */}
             <a href='  https://x.com/faisal4Sidd' className='w-12 h-12 rounded-full 
              bg-dark-300 flex items-center justify-center
              text-purple-400 hover:bg-blue-400 hover:text-white 
              transition duration-300' target="_blank">
                <FaTwitter />
              </a>


            </div>
           </div>
          { /* old section  */}
            </div>



            {/* old <div> */}
          </div>
         
          </div>

        </motion.div>
      
     
  )
}

export default Contact
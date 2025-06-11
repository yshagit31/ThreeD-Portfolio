import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
    const formRef=useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [Loading,setLoading]=useState(false);
    const [form,setForm]=useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange=({target : { name, value}})=>{  
        setForm({...form,[name]:value});
      }

    const  handleSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            await  emailjs.send(
            'service_jki3zpd',
            'template_fxnouux',
            {
                name:form.name,
                to_name:"Shashank",
                email:form.email,
                message:form.message
            },'B-kPur4KeD8lPgTA3');
            
            setLoading(false);

            showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
            });

            setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
             
        }catch(err){
            setLoading(false);
            console.log(err);

             showAlert({
            show: true,
            text: ' Something went wrong',
            type: 'danger',
            });
        }
       
    }

  return (
    <section className='c-space my-20 pb-2' id='contact'>
            {alert.show && <Alert {...alert} />}
    <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src="assets/terminal.png" alt='terminal background' className='hidden lg:block absolute inset-0 -top-10 min-h-screen'/>
        <div className='contact-container'>

        <h3 className='head-text'>Contact Me</h3>
        <p className="text-lg text-white-600 mt-3">Always eager to learn, build, and grow—let’s connect and create something awesome together!</p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
                <span className='field-label'>Full Name</span>
                 <input type='text' name="name" value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe'></input>
            </label>

             <label className='space-y-3'>
                <span className='field-label'>Email</span>
                 <input type='email' name="email" value={form.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com'></input>
            </label>

             <label className='space-y-3'>
                <span className='field-label'>Your message</span>
                 <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className='field-input' placeholder='Type your Message'/>
            </label>

                <button className='field-btn' disabled={Loading} type='submit'>
                    {Loading ? "Sending":"Send Message"}
                    <img src='assets/arrow-up.png' alt="arrowup" className='field-btn_arrow'></img>
                </button>
        </form>

        </div>
    </div>
    </section>

    
  )
}

export default Contact

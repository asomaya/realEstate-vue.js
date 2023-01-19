<template>
  <div>
<Navbar/>
<section className='contact mb '>
    <div className='back'>
        <div className='container'>
          <span>Contact Us</span>
          <h1>Get Helps & Friendly Support</h1>
        </div>
        <img class="cover" src='../assets/webp/details-aside5.webp' alt='' />
      </div>
    <div className='container my-5'>
      <form className='shadow'>
        <h4>Fillup The Form</h4> <br />
        <div>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
        </div>
        <input type='text' placeholder='Subject' />
        <textarea cols='30' rows='10'></textarea>
        <button>Submit Request</button>
      </form>
    </div>
  </section>

<Footer/>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default {
  name:'ContactUs',
  components:{
    Navbar,Footer
    
  }
  
}
</script>

<style scoped>
    .contact form div {
        display: flex;
      }
      .contact textarea {
        border: 1px solid rgba(0, 0, 0, 0.1);
        width: 100%;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      .contact input {
        
        margin-bottom: 20px;
        margin-right: 10px;
      }
      .contact form {
        padding: 30px;
      }
      @media screen and (max-width: 768px) {
        .contact h4 {
          width: 100%;
          margin-bottom: 30px;
        }
        .contact form div {
          flex-direction: column;
        }
        .contact input {
          width: 100%;
        }
      }
</style>
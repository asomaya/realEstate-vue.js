<template>
  <div >
    <Navbar class="inner-nav"/>
    <section className='about'>
      <div className='back'>
        <div className='container pb-5'>
          <span>About Us</span>
          <h1 class="mb-5">About Us - Who We Are?</h1>
        </div>
        <img class="cover" src='../assets/webp/details-aside6.webp' alt='' />
      </div>
      <div className='container flex mtop'>
        <div className='left row'>
          <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button className='btnw btn2'>More About Us</button>
        </div>
        <div className='right row'>
          <img src='../assets/webp/innerpage-banner.webp' alt='' />
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name:'AboutUs',
  components:{
    Navbar,Footer
  }
  
}
</script>
<style lang="scss" scoped>
  .about {
    margin-bottom: 80px;
  }
  .btnw{
    width: 40%;
   }
  .about .heading {
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
  .about p {
    font-size: 15px;
    padding-right: 30px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    .about .container {
      flex-direction: column;
    }
    .about p {
      padding: 0;
    }
    .about .container img {
      margin-top: 50px;
    }
  }
</style>
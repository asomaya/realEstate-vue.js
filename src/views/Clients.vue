<template>
    <div>
        <Navbar class="inner-nav"/>
    <section className='blog-out mb'>
        
        <div className='back'>
            <div className='container'>
              <span>Clients</span>
              <h1>Find your agent to find a home
            </h1>
            </div>
            <img class="cover" src='../assets/webp/details-aside9.webp' alt='' />
          </div>
        
        <div >
          <FeaturedCard />
        </div>
       
      </section>
      <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedCard from '@/components/FeaturedCard'

export default {
  name:'OurClients',
  components:{
    Navbar,Footer,FeaturedCard
    
  }
  
}
</script>

<style>

</style>
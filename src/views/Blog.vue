<template>
    <div>
        <Navbar class="inner-nav"/>
    <section className='blog-out mb'>
        
        <div className='back'>
            <div className='container'>
              <span>Blog</span>
              <h1>Blog Grid - Our Blogs</h1>
            </div>
            <img class="cover" src='../assets/webp/details-aside7.webp' alt='' />
          </div>
        
        <div className='container recent'>
          <propertyCard />
        </div>
       
      </section>
      <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertyCard from '@/components/PropertyCard'

export default {
  name:'OurBlog',
  components:{
    Navbar,Footer,PropertyCard
    
  }
  
}
</script>

<style>

</style>
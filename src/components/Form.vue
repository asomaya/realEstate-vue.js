<template >
   
      <section className='hero'>
        <div className='container'>
          <div class="header-content">
            <h4 class="text-white">Property for sale and rent</h4>
            <h1 class="text-white">
              Search and find your <span class="primary">dream house</span>
            </h1></div>
          <form className='flex '>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
   
</template>

<script>
    export default {
        name: "HeroForm",
        components: {},
        
    };
    </script>


<style lang="scss" scoped>
   
  .hero {
    background-image: url("../assets/main-banner.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 90vh;
    width: 100%;
   
  }
 
  .hero h1 {
    color: #fff;
    font-size: 50px;
  }
  .hero p {
    color: #fff;
    opacity: 0.8;
  }
  form {
    background-color: #fff;
    border-radius: 5px;
  
    padding: 0 20px;
  }
  form input {
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin-top: 5px;
    border-radius: 5px;
  }
  form span {
    font-size: 14px;
    color: grey;
  }
  input::placeholder {
    font-size: 17px;
    color: black;
  }
  form .box {
    padding: 15px;
    border-left: 1px solid rgba(128, 128, 128, 0.2);
  }
  form .box:nth-child(1) {
    border-left: none;
  }
  form h4 {
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    .w1{
      max-width: 50%;
    }
   
    form {
      display: flex;
      flex-wrap: wrap;
    }
    form .box {
      border-left: none;
      width: 50%;
      padding: 10px;
    }
    form input {
      width: 100%;
    }
    @media screen and (max-width: 500px){
     
      form  {
        border-left: none;
        width: 100%;
        padding: 10px;
      }
    }
  }


  .header-content {
		text-align: center;
		height: 100%;
		padding: 10% 5%;

		h4 {
			text-transform: uppercase;
			font-weight: 400;
		}

		h1 {
			text-transform: capitalize;
			font-weight: 400;

			.primary {
				color: #faa018;
			}
		}

	

		
	.text-white {
		color: #fff;
	}

	@media (max-width:768px){
		h1{
			font-size:1.7rem;
		}
  
		
	}
}


</style>


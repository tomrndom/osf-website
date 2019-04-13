<template>
  <footer class="footer is-dark">

    <div class="footer-container1">
      <div class="footer-container-child1">
        
        <div class="footer-container">
          <div class="footer-container-child" v-for="section in $site.themeConfig.footer.sections" > 
            
            <h6 class="footer-title">{{ section.title }}</h6>
            <hr/>
            <!-- /.footer-title -->
            <ul class="footer-list nobullet">
              <li v-for="item in section.nav" class="item-no-bullet">
                <a :href="item.link">{{ item.text }}</a>
              </li>
            </ul>

          </div>

        </div>

      </div>
      <div class="footer-container-child1 footer-container1-child-right">
        <div class="nav-brand">
          <router-link to="/">
            <div class="logo-containter">
              <div class="logo-containter-child logo-containter-child-img"><img :src="require('../public/images/logo-openstack.svg')" alt="Not found"></div>
              <div class="logo-containter-child">
                <div><span>OPENSTACK</span></div>
                <div><span>FOUNDATION</span></div>
              </div>
            </div>
          </router-link>
        </div><!-- /.nav-brand -->

      </div>
      
    </div>
  	


    <!-- <div class="footer-container">
      <div class="footer-container-child">uno</div>
      <div class="footer-container-child">dos</div>
      <div class="footer-container-child">tres</div>
      <div class="footer-container-child">cuatro</div>
      <div class="footer-container-child">cinco</div>
    </div> -->
    

  </footer>
  <!-- /.footer -->

</template>

<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'BaseFooter'
	}
</script>

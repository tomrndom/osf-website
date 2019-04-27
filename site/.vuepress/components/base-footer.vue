<template>
  <footer class="footer is-dark">

    <div class="footer-container1">
      <div class="footer-container-child1">
        
        <div class="footer-container">
          <div class="footer-container-child" v-for="section in $site.themeConfig.nav" > 
            
            <h6 class="footer-title">{{ section.text }}</h6>
            <hr/>
            <!-- /.footer-title -->
            <ul class="footer-list nobullet">
              <li v-for="item in section.items" class="item-no-bullet">
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
              <div class="logo-containter-child logo-containter-child-img"><img :src="require('../public/images/osf_logo_pill.png')" alt=""></div>
              <div class="logo-containter-child">
                <div><span>OpenStack</span></div>
                <div><span>Foundation</span></div>
              </div>
            </div>
          </router-link>
        </div><!-- /.nav-brand -->

      </div>
      
    </div>

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

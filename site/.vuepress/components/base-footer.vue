<template>
  <footer class="footer is-dark">
    <div class="container container-medium">
      <div class="footer-inner">
        <div class="columns">
          <div class="column">
            <div class="footer-content">
              <div class="columns is-mobile">
                <div class="column" v-for="section in $site.themeConfig.footer.sections">
                  <h6 class="footer-title">{{ section.title }}</h6>
                  <hr/>
                  <!-- /.footer-title -->
                  <ul class="footer-list nobullet">
                    <li v-for="item in section.nav" class="item-no-bullet">
                      <a :href="item.link">{{ item.text }}</a>
                    </li>
                  </ul>
                  <!-- /.footer-list -->
                </div>
                <!-- /.column -->

              </div>
              <!-- /.columns -->
            </div>
            <!-- /.footer-content -->
          </div>
          <!-- /.column -->
          <div class="column">

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
        <!-- /.columns -->
      </div>
      <!-- /.footer-inner -->
    </div>
    <!-- /.container-medium -->
  	
    

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

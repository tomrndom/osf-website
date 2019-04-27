<template>
  <section
    :class="{
			'hero': true,
			'hero-image': image
		}"
    :style="image && {
			'background-image': `url('${image}')`
		}"
  >
    <div class="hero-body">
      <div :class="['container', containerClass]">
        <div class="hero-content">
          <div class="hero-subhead">We help people Build &amp; Operate
          </div>
          <h3 class="hero-title">Open Infrastructure</h3>
          <!-- /.hero-title -->
          <div class="hero-entry">
          With over 100,000 members in 187 countries, the OSF helps open source communities build the tools infrastructure operators need for Data Center Clouds, 5G, Edge, Containers, CI/CD and beyond.
          </div>
          <!-- /.hero-entry -->
          <div class="hero-actions">
        
            <a href="/projects/" class="button">
              <span>OSF projects</span>
            </a>
            <a href="https://www.openstack.org/join#sponsor" class="button button-red">
              <span>Support the OSF</span>
            </a>

            <!-- <img src="../public/images/hero-image.png" alt="#" /> -->

          </div>
          <!-- /.hero-actions -->
        </div>
        <!-- /.hero-content -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.hero-body -->
  </section>
  <!-- /.hero -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Hero",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    title: {
      type: String,
      default: () => {}
    },
    image: {
      type: String,
      default: () => {}
    },
    containerClass: {
      type: String,
      default: () => {}
    },
    withEntry: {
      type: Boolean,
      default: false
    },
    withButton: {
      type: Boolean,
      default: false
    }
  }
};
</script>

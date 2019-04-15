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
          <div class="hero-subhead">WELCOME TO
          </div>
          <h3 class="hero-title">THE HOME OF</h3>
          <h3 class="hero-title">OPEN INFRASTRUCTURE</h3>
          <!-- /.hero-title -->
          <div class="hero-entry">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque quam, placerat sit amet lorem in, dapibus pellentesque dolor. In fermentum commodo est, nec varius.
</div>
          <!-- /.hero-entry -->
          <div class="hero-actions">
        
            <a href="#" class="button">
              <span>Learn more</span>
            </a>
            <a href="#" class="button button-red">
              <span>Join the community</span>
            </a>


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

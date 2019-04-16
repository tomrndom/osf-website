<template>
  <section class="hero hero-image">
    <div class="hero-body">
      <div class="container">
        <div class="hero-project-content">
          <h3 class="hero-project-title">OSF PROJECTS</h3>
          <!-- /.hero-title -->
          <div class="hero-project-entry">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque quam, placerat sit amet lorem in, dapibus pellentesque dolor. In fermentum commodo est, nec varius.
          </div>
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
  name: "HeroProject",

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

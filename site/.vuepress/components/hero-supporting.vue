<template>
  <section class="hero hero-image">
    <div class="hero-body">
      <div class="container">
        <div class="hero-project-content">
          <h3 class="hero-project-title">{{ title }}</h3>
          <!-- /.hero-title -->
          <div class="hero-project-entry">
          {{ headline }}
          </div> 
          <br/>
          <div class="hero-project-entry">
            <p>
              <a :href="link1.url" target="_blank" class="hero-link"> {{ link1.title }} <i class="right"></i> </a>
            </p>
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
  name: "HeroSupporting",

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
    headline: {
      type: String,
      default: () => {}
    },    
    link1: {
      type: Object,
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

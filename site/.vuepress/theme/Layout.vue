<template>
  <div class="wrapper">
    <div class="wrapper hero-background" v-if="$page.frontmatter.home">
      <bar />
      <navigation />
      <main class="main">
          <hero class="hero-main is-primary" withButton :title="$page.frontmatter.hero.headline" >
          </hero>
      </main>
    </div>

    <div class="wrapper-all" v-else>
      <bar />
      <navigation />
    </div>

    <page />
    <base-footer />
    <bar-footer/>
  </div><!-- /.wrapper -->
</template>

<script>
import Page from './Page.vue'

export default {
  components: { Page },
  computed: {
    layout() {
      if (this.$page.frontmatter.layout) { 
        return this.$page.frontmatter.layout 
      } 
    }
  }
}
</script>

<style src="./sass/style.scss" lang="scss"></style>

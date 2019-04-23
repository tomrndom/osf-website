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


    <div class="wrapper project-background" v-else-if="$page.frontmatter.project">
      <bar />
      <navigation />
      <main class="main">
          <hero-projects class="hero-main is-primary" :title="$page.frontmatter.hero.title" :headline="$page.frontmatter.hero.headline" >
          </hero-projects>
      </main>
    </div>

    <div class="wrapper project-background" v-else-if="$page.frontmatter.about">
      <bar />
      <navigation />
      <main class="main">
          <hero-projects class="hero-main is-primary" :title="$page.frontmatter.hero.title" :headline="$page.frontmatter.hero.headline">
          </hero-projects>
      </main>
    </div>

    <div class="wrapper project-background" v-else-if="$page.frontmatter.companies">
      <bar />
      <navigation />
      <main class="main">
          <hero-supporting class="hero-main is-primary" :title="$page.frontmatter.hero.title" :headline="$page.frontmatter.hero.headline" :link1="$page.frontmatter.hero.link1.title">
          </hero-supporting>
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
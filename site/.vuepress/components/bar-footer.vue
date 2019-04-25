<template>
  <div class="bar-footer is-dark-gray">
    <div class="container">
      <div class="bar-footer-inner">
        <!-- <div class="bar-logo">
          <img :src="require('../theme/images/bar-logo.svg')" alt="not found">
        </div> -->
        <!-- /.bar-logo -->
        <div class="bar-footer-entry">
          <a href="https://openstack.org/privacy/" target="_blank" >Privacy Policy</a>
        </div>
        <div class="bar-footer-entry bar-footer-entry-right">
          OpenStack Foundation ©2019
        </div>
        <!-- /.bar-entry -->
      </div>
      <!-- /.bar-inner -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.bar -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "BarFooter"
};
</script>

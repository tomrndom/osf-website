<template>
	<nav class="nav">
		<div class="container">
			<div class="nav-inner">
				<div class="nav-brand">
					<router-link to="/">

						<div class="logo-containter">
							<div class="logo-containter-child logo-containter-child-img"><img :src="require('../public/images/logo-openstack.svg')" alt=""></div>
							<div class="logo-containter-child">
								<div><span>OPENSTACK</span></div>
								<div><span>FOUNDATION</span></div>
							</div>
						</div>


					</router-link>
				</div><!-- /.nav-brand -->

				<client-only>

					<a @click.prevent="isMobileNavOpen = !isMobileNavOpen" ref="navTrigger" role="button" :class="{
						'navbar-burger': true,
						'is-active': isMobileNavOpen
					}" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>

				</client-only>

				<div ref="mobileNav" :class="{
						'nav-content': true,
						'is-active': isMobileNavOpen,
						'menu-container': true
					}">
					<ul class="nav-menu menu-item">
						<li v-for="(navItem, i) in $site.themeConfig.nav" >
							<a @click.prevent="handleNavItemClick(navItem)" href="#">{{ navItem.text }}</a>
						</li>

						<li >
							<a href="#" target="_blank" class="bar-button">Join the community</a>
							<!-- <a @click.prevent="handleNavItemClick(navItem)" href="#">{{ navItem.text }}</a> -->
						</li>
					</ul><!-- /.nav-menu -->



					<!--<div class="nav-end">
						<b-field class="field-search">
							<b-input placeholder="Search" type="text" icon="search" icon-pack="fas" />
						</b-field>
					</div><!-- /.nav-end -->
				</div><!-- /.nav-content -->
			</div><!-- /.nav-inner -->
		</div><!-- /.container -->
	</nav><!-- /.nav -->
</template>


<script>
	export default {
		/**
		 * The name of the component.
		 *
		 * @type {Strng}
		 */
		name: 'Navigation',

		/**
		 * Internal state of the component.
		 *
		 * @return {Object}
		 */
		data: () => ({
			isMobileNavOpen: false
		}),

		/**
		 * The public API of the component.
		 *
		 * @type {Object}
		 */
		methods: {
			documentClick(e) {
				const button = this.$refs.navTrigger;
				const dropdown = this.$refs.mobileNav;
				const target = e.target;

				if (
					(dropdown !== target) &&
					!dropdown.contains(target) &&
					(button !== target) &&
					!button.contains(target)
				) {
					this.isMobileNavOpen = false;
				}
			},

			handleNavItemClick(navItem) {
				this.$router.push(navItem.link);

				this.isMobileNavOpen = false;
			}


		},
		
		/**
		 * The created lifecycle hook
		 * 
		 * @return {Void}
		 */
		mounted() {
			if(document) document.addEventListener('click', this.documentClick);
		},

		/**
		 * The destroyed lifecycle hook
		 * 
		 * @return {Void}
		 */
		destroyed() {
			document.removeEventListener('click', this.documentClick);
		}
	}
</script>

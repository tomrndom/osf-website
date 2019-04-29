<template>
	<nav class="nav">
		<div class="container">
			<div class="nav-inner">
				<div class="nav-brand">
					<router-link to="/">
						<div class="logo-containter">
							<div class="logo-containter-child logo-containter-child-img">
								<img :src="require('../public/images/OSF_logo.svg')" 
								alt="OpenStack Foundation"></div>
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

							<a v-if="!islocal(navItem)" :href="navItem.link" target="_blank">{{ navItem.text }} </a>
							<div v-else-if="isnested(navItem)" class="dropdown is-hoverable " >
								<div class="dropdown-trigger">
									<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
									<span>{{ navItem.text }} </span>
									<!-- <span class="icon is-small">
										<i class="fas fa-angle-down" aria-hidden="true"></i>
									</span> -->
									</button>
								</div>
								<div class="dropdown-menu" id="dropdown-menu" role="menu">
									<div class="dropdown-content">

										<div v-for="item in navItem.items" class="menuitemeffect">
											<a v-if="!islocal(item)" :href="item.link" class="dropdown-item" target="_blank">
												<span>{{ item.text }} </span> 
											</a>
											<a v-else @click.prevent="handleNavItemClick(item)" href="#" class="dropdown-item">
												<span>{{ item.text }} </span>
											</a>
										</div>

									</div>
								</div>

							</div>
							<a v-else :href="navItem.link" >{{ navItem.text }} </a>

						</li>
						
						<li >
							<a href="https://www.openstack.org/join" target="_blank" class="bar-button">Join the OSF</a>
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
			},
			islocal(navItem) {
				if (typeof navItem.link === 'undefined') {
					return true;//if item is subitem or dropdown..
				}
				return navItem.link.startsWith("/");
			},
			isnested(navItem) {
				return typeof navItem.items !== 'undefined';
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


// <div class="nav-item">
// <div class="dropdown-wrapper">
// <a class="dropdown-title">
// <span class="title">Languages</span>
// <span class="arrow right"></span></a>
// <ul class="nav-dropdown" style="display:none;">
// <li class="dropdown-item"> 
//  <a href="/default-theme-config/" class="nav-link router-link-active">English</a>
// </li>
// <li class="dropdown-item">
//  <a href="/zh/default-theme-config/" class="nav-link">简体中文</a>
// </li>
// </ul>
// </div>
// </div>


</script>


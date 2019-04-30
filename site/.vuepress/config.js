/*
Note: local links require a leading and trailing slash.
*/
module.exports = {
    host: '0.0.0.0',
    ga: 'UA-139234657-1',
    title: "OpenStack Foundation",
    description: "The Home of Open Infrastructure",
    head: [["link", { rel: "icon", href: "/favicons/OSF_logo_square_ico.png" }],
            ["link", { rel: "image_src", href: "", type:"image/jpeg" }],
            ["script", { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" }],
            ["script", { src: "/js/carousel.min.js" }],
        ],    
    themeConfig: {
        nav: [
            {
              "text": "Projects", "img": "/images/menu/menu_projects.jpg",
              "items": [
                { "text": 'All projects', "link": '/projects/' },
                { "text": 'Services', "link": '/projects/services/' },
                { "text": 'Host at OSF', "link": '/projects/hosting/' },
              ]
            },
            {
              "text": "Membership", "img": "/images/menu/menu_membership.jpg", "fixcss":"margin-left:-409px;",
              "items": [
                { "text": 'Supporting Companies', "link": '/companies/' },
                { "text": 'Join OSF', "link": 'https://www.openstack.org/join' },
              ]
            },
            {
              "text": "Events", "img": "/images/home/image3.jpg", "fixcss":"margin-left:-346px;",
              "items": [
                { "text": 'Open Infra Summit', "link": 'https://www.openstack.org/summit/' },
                { "text": 'Open Infra Days', "link": 'https://www.openstack.org/community/events/#openstack_days' },
                { "text": 'Community Meetups', "link": 'https://www.meetup.com/topics/openstack/' },
              ]
            },
            {
              "text": "About", "img": "/images/menu/menu_about.jpg", "fixcss":"margin-left:-424px;",
              "items": [
                { "text": '4 Opens', "link": '/about/four-opens/' },
                { "text": 'Annual report', "link": 'https://www.openstack.org/foundation/2018-openstack-foundation-annual-report' },
                { "text": 'Foundation Staff', "link": '/about/staff/' },
                { "text": 'Board of Directors', "link": '/about/board/' },
              ]
            }
          ],
      sidebar: 'auto',
    },
  };
  
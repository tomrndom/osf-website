
module.exports = {
    title: "OPENSTACK FOUNDATION",
    description: "THE HOME OF OPEN INFRASTRUCTURE",
    head: [["link", { rel: "icon", href: "/favicons/logo-openstack.ico" }]],
    themeConfig: {
        nav: [
            {
              "text": "PROJECTS",
              // "link": "/projects/",
              "items": [
                { "text": 'ALL PROJECTS', "link": '/projects/' },
                { "text": 'SERVICES', "link": '/projects/services' },
                { "text": 'HOST AT OSF', "link": '/projects/host-osf' },
              ]
            },
            {
              "text": "MEMBERSHIP",
              "items": [
                { "text": 'SUPPORTING COMPANIES', "link": '/projects/' },
                { "text": 'JOIN OSF', "link": 'https://www.openstack.org/join' },
              ]
            },
            {
              "text": "EVENTS",
              "items": [
                { "text": 'OPEN INFRA SUMMIT', "link": 'https://www.openstack.org/join' },
                { "text": 'OPENINFRA  / OPENSTACK DAYS', "link": 'https://www.openstack.org/join' },
                { "text": 'JOIN OSF', "link": 'https://www.openstack.org/join' },
              ]
            },
            {
              "text": "ABOUT",
              // "link": "/about/"
              "items": [
                { "text": '4 OPENS', "link": 'https://www.openstack.org/join' },
                { "text": 'ANUAL REPORT', "link": 'https://www.openstack.org/join' },
                { "text": 'FOUNDATION STAFF', "link": 'BOARD' },
              ]
            }
          ],
      sidebar: 'auto',
      footer: {
        "sections": [
          {
            "title": "PROJECTS",
            "nav": [
              {
                "text": "All Projects",
                "link": "#"
              },
              {
                "text": "Host a project",
                "link": "#"
              },
              {
                "text": "Services",
                "link": "#"
              },
            ]
          },
          {
            "title": "5G OPEN VISION",
            "nav": [
              {
                "text": "About",
                "link": "#"
              },
              {
                "text": "Supporters",
                "link": "#"
              },
            ]
          },          
          
          {
            "title": "MEMBERSHIP",
            "nav": [
              {
                "text": "Corporate members",
                "link": "#"
              },
              {
                "text": "Join OSF",
                "link": "#"
              },
            ]
          },

          {
            "title": "EVENTS",
            "nav": [
              {
                "text": "Open Infrastructure Summit",
                "link": "#"
              },
              {
                "text": "Openinfra / Openstack Days",
                "link": "#"
              },
              {
                "text": "Community Meetups",
                "link": "#"
              },
            ]
          },

          {
            "title": "ABOUT",
            "nav": [
              {
                "text": "About OSF",
                "link": "/about/"
              },
              {
                "text": "Supporting Companies",
                "link": "/companies/"
              },              {
                "text": "4 Opens",
                "link": "#"
              },
              {
                "text": "Annual report",
                "link": "#"
              },
              {
                "text": "Foundation staff",
                "link": "/about-staff/"
              },
              {
                "text": "Board of directors",
                "link": "#"
              },
            ]
          },

        ]
      },
    },
  };
  
---
templateKey: blog-post
title: 800+ Contributors Worldwide Deliver 23rd OpenStack Release, Wallaby
author: Allison Price
date: 2021-04-14T15:15:00.000Z
category:
  - value: category-A7fnZYrE1
    label: News & Announcements
seo:
  title: 800+ Contributors Worldwide Deliver 23rd OpenStack Release, Wallaby
  description: Improvements to role-based access control (RBAC) and integration
    with other open source projects including Ceph, Kubernetes and Prometheus to
    strengthen open infrastructure for cloud native applications
  url: https://openinfra.dev/blog/800-contributors-worldwide-deliver-openstack-wallaby
  twitterUsername: OpenInfraDev
---
## Improvements to role-based access control (RBAC) and integration with other open source projects including Ceph, Kubernetes and Prometheus to strengthen open infrastructure for cloud native applications

AUSTIN, Texas — April 14, 2021—The OpenStack community today released Wallaby, the 23rd version of the most widely deployed open source cloud infrastructure software, highlighting the vibrancy and engagement of developers globally in supporting the third most active open source project (alongside the Linux kernel and Chromium).

The Wallaby release strengthens open infrastructure for cloud native applications with enhanced security and integration with other open source technologies. More than 17,000 code changes authored by over 800 contributors from 140 different organizations were merged into the release.

\*\**[The OpenStack Wallaby release is available for download. Learn more about features and enhancements.](https://www.openstack.org/software/wallaby/)\*\**

### Wallaby Release Highlights

In addition to delivering a [wide range of improvements](https://releases.openstack.org/wallaby/highlights.html) to the stable and reliable OpenStack core and its highly flexible project integration capabilities, Wallaby delivers security enhancements including fallback permissions and RBAC improvements in Ironic, Glance and Manila, and the community focused this cycle on [migrating the RBAC policy format from JSON to YAML](https://governance.openstack.org/tc/goals/selected/wallaby/migrate-policy-format-from-json-to-yaml.html). Additionally, the Ironic project has extended functionality for UEFI (Unified Extensible Firmware Interface), including secure erase for NVME. 

Additional Wallaby release highlights include:

* Several project teams continued to develop OpenStack as an open source integration engine by enhancing support for other open source projects: Kolla (production-ready containers and deployment tools) added support for Prometheus version 2, Magnum (API service) updated versions for Kubernetes and containerd, and Cinder (block storage service) added support for a Ceph backend driver, Ceph iSCSI. 
* Tacker (NFV orchestration) added new features to align with the standards defined by ETSI NFV including the addition of APIs for scale, update and rollback operations for virtual network functions (VNF) and fundamental VNF lifecycle management support for subscriptions and notifications.
* Nova (compute provisioning) and Cyborg (accelerator management)  integration continues to progress. New functionality gives users the ability to shelve and unshelve augmented servers, Nova servers with Cyborg accelerators attached. 
* Cinder (block storage) added new backend drivers, and many current drivers have added support for features exceeding the minimum required driver functions, with revert to snapshot and backend QoS being particularly popular this cycle.
* With Neutron (networking), operators now have the option of routing fixed IP addresses of ports in a network to the external world without being limited by the availability IPv4 address ranges

“Twenty-three releases in, it’s exciting to see a growing, vibrant, global community contributing to OpenStack,” said Kendall Nelson, upstream developer advocate for OpenStack at the OpenInfra Foundation. “The OpenStack community continues to rank among the three most active open source communities in the world, and OpenStack Wallaby showcases how successful community collaboration keeps the software robust and efficient, drives innovation to support emerging use cases, and continually delivers interoperability across projects and platforms.”

### The Evolution of Open Infrastructure

OpenStack pioneered the concept of open infrastructure 10 years ago. Since then, it has become the open infrastructure-as-a-service standard. Recently, new workload demands like artificial intelligence, machine learning, edge computing and IoT have given rise to the project’s support for new chip architectures, automation at scale down to the bare metal, and integration with myriad open source components. OpenStack now powers more than 75 public cloud data centers and thousands of private clouds at a scale of more than 15 million compute cores. OpenStack is the one infrastructure platform uniquely suited to deployments of diverse architectures—bare metal, virtual machines (VMs), graphics processing units (GPUs) and containers.

### Virtual Project Teams Gathering

The OpenInfra Foundation will be hosting the next Project Teams Gathering (PTG) online from April 19-23. The PTG provides a time and place for contributor teams to join forces and actively work on improving OpenStack and other projects hosted by the OpenInfra Foundation. PTGs are critical to producing the next software release for each project, not only improving core functionality, but also working across projects to improve collaboration and solve complex problems. Operators, developers and other active contributors will discuss how to reach their goals, get agreement, build trust, assign work items and get work done. For more information about the PTG agenda and to register to participate, visit [openstack.org/ptg](https://www.openstack.org/ptg?_ga=2.103250889.893845488.1588019379-1374391620.1544394204).

#### About OpenStack®

OpenStack is the only open source integration engine that provides APIs to orchestrate bare metal, virtual machines and container resources on a single network. The same OpenStack code powers a global network of public and private clouds, backed by the industry’s largest ecosystem of technology providers, to enable cost savings, control and portability. A global community of more than 100,000 individuals in 188 countries work together on the OpenStack project. [www.openstack.org](http://www.openstack.org) 

#### About the Open Infrastructure Foundation

The [OpenInfra Foundation](http://openinfra.dev) builds communities that write open source infrastructure software that runs in production. With the support of over 110,000 individuals in 187 countries, the OpenInfra Foundation hosts open source projects and communities of practice, including infrastructure for AI, container native apps, edge computing and datacenter clouds. [Join the OpenInfra movement](https://openinfra.dev/join). [www.openinfra.dev](http://www.openinfra.dev)  



<hr/>

Media Contacts:\
Robert Cathey[\
Cathey Communications](http://cathey.co) for the OpenInfra Foundation\
e [robert@cathey.co](mailto:robert@cathey.co)

Allison Price\
OpenInfra Foundation\
e allison@openinfra.dev
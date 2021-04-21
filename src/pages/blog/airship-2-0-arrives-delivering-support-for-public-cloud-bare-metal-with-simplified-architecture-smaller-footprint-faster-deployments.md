---
templateKey: blog-post
title: Airship 2.0 Arrives, Delivering Support for Public Cloud, Bare Metal With
  Simplified Architecture, Smaller Footprint, Faster Deployments
author: Allison Price
date: 2021-04-21T17:43:10.906Z
category:
  - value: category-tSSGVXjvn
    label: Airship
seo:
  title: Airship 2.0 Arrives, Delivering Support for Public Cloud, Bare Metal With
    Simplified Architecture, Smaller Footprint, Faster Deployments
  description: All-new control plane in Airship 2.0 is built on Kubernetes, with
    cluster API multi-cloud provisioning and other cloud-native tools; Helm 3
    and the Flux Helm Controller are integrated, offering better security
    posture.
  url: https://openstack.org/blog/airship-2.0-arrives
  twitterUsername: "@openinfradev"
---
*All-new control plane in Airship 2.0 is built on Kubernetes, with cluster API multi-cloud provisioning and other cloud-native tools; Helm 3 and the Flux Helm Controller are integrated, offering better security posture.*

AUSTIN, Texas – April 21, 2021 — Airship, an interoperable set of open source software tools used to declaratively automate cloud provisioning, is available in version 2.0 today. Airship 2.0 delivers enhanced document management capabilities, an improved upgrade process using cloud-native tools, and the ability for operators to use the same workflow to manage their workloads on both bare-metal and public clouds. These enhancements enable faster deployments, a smaller control plane, the ability for Airship to deploy native Kubernetes resources, and better security. 

\*\**[Download Airship 2.0 here](https://github.com/airshipit/airshipctl/releases/tag/v2.0.0)\*\**

Airship 2.0 integrates best-in-breed open source projects into a platform that transforms declarative YAMLs into ready-to-go open infrastructure, taking care of things like bare metal provisioning, security and network policy, and day 2 lifecycle management. Airship 2.0’s declarative model ensures predictability, repeatability and resiliency across sites and across upgrades, which is why AT&T is running Airship in production at scale.

AT&T’s 5G network runs on its 100% containerized, private network OpenStack cloud, deployed and managed by Airship. Using Airship, AT&T has been able to replicate its 5G infrastructure rapidly across dozens of regions. Furthermore, this architecture supports AT&T’s “evolved packet core” network and VNF teaming, enabling resilient mobile sessions. (See [a keynote by AT&T](https://www.openstack.org/videos/summits/berlin-2018/at-and-t-5g-powered-by-open-infrastructure) demonstrating how Airship enables mobile communication sessions to continue even when the VM carrying the session is shut down.) Other companies with production use cases of Airship include Ericsson and [SK Telecom](https://superuser.openstack.org/articles/sk-telecom-5gx-labs-wins-the-2020-superuser-awards/).

“Airship 2.0 takes advantage of many of the good things that have been happening in the Kubernetes ecosystem,” said Matt McEuen, lead member of the technical staff for Network Cloud at AT&T and a working committee member of the Airship community. “Airship 2.0 gives operators the ability to consistently specify and control deployments across bare metal, public clouds, OpenStack and other kinds of use cases. It also deploys sites faster and with smaller footprints. In Airship 2.0 we’ve created a web-based UI that can be used to introspect a site and drive deployments and upgrades.”

“AT&T’s initial Airship 2.0 deployments will host centralized functions that support its 5G Containerized Network Function infrastructure,” continued McEuen. “These new cloud-native workloads will benefit from Airship 2.0’s close integration of CNCF technologies and its predictable and repeatable lifecycle management.”

Key Features of Airship 2.0

* Enhanced document management capabilities. Using the Airship 2.0 command-line-interface, airshipctl, operators can organize and deliver YAML documents that describe an Airship 2.0 region with phases (logical groups of functionality that are the building blocks of a site). Airshipctl renders phases with Kustomize, a tool that has been widely adopted by the Kubernetes community. Using Kustomize with airshipctl, operators can keep their YAML footprint small with advanced manipulation tools that reduce data duplication.
* Improvements to the Airship upgrade process. Cloud-native tools such as the Baremetal Operator with Metal3 and Ironic, Kubeadm, and Kustomize have replaced the Airship 1 control plane. In Airship 2.0, operators can drive upgrades using Airshipctl and let Kubernetes handle the rest—the core Airship components are ephemeral and live outside the control plane.
* Support for public cloud providers. With Airship 2.0, operators can now use the same workflow to manage their workloads on bare-metal as well as Microsoft Azure, Google Cloud Platform, AWS, and OpenStack public clouds. Companies with growing requirements can rely on Airship for consistent deployment and management of workloads on Kubernetes, knowing that OpenDev and third-party continuous-integration validate these integration points.

Additional features include: 

* No-touch, remote-site bootstrap
* Declarative image building
* * Support for declarative ephemeral ISO (International Organization for Standardization)
  * Support for declarative bare-metal-targeted QCOWs \[“QEMU Copy On Write” is a file format for disk image files used by QEMU (short for “quick emulator”), a hosted virtual machine monitor.]
* Declarative cluster lifecycle
* Lifecycle as phases
* Introduction of a plan for the phases
* Seamless integration with security plugins like Mozilla SOPS
* Generic container interface, a mechanism to extend airshipctl with adhoc functionality
* Introduction of Host Config Operator for day 2 operations
* Helm 3 and the Flux Helm Controller are integrated, offering better security posture.
* Designated as a Certified Kubernetes Distribution through the Cloud Native Computing Foundation’s [Software Conformance Program](https://www.cncf.io/certification/software-conformance/), guaranteeing that Airship provides a consistent installation of Kubernetes, supports the latest Kubernetes versions, and provides a portable cloud-native environment with other Certified Platforms.

The integrated open source components doing the heavy lifting in Airship 2.0 are substantially different than those in Airship 1.0, as [described by Jeff Collins](https://www.youtube.com/watch?v=5Ofjr_-rsOg&t=4225s), cloud and NFVI director at Ericsson, at the Open Infrastructure Summit.   

”The updates with Metal3 and Ironic, along with other tool sets have streamlined the lifecycle management process. The cross-platform capabilities with the Kubernetes Cluster API allow for a consistent deployment every time,” said Collins. 

About Airship 

Airship simplifies cloud building for operators like telecoms, manufacturers, healthcare providers and individual developers. The Airship community was formed to build a robust delivery mechanism for organizations that need to embrace containers as the new unit of infrastructure delivery at scale. 

Airship launched in May 2018 as a pilot project supported by the Open Infrastructure Foundation, with initial code contributed by AT&T, Intel and SK Telecom.  Version 1.0 was released at the [Open Infrastructure Summit Denver](https://www.openstack.org/summit/denver-2019/) in 2019. The Airship community has grown rapidly, with 1,897 commits in 10 repos and 91 contributors from 10 companies across Asia, Europe and the Americas.

Resources

* Website: [airshipit.org](https://www.airshipit.org/)
*  IRC freenode: #airshipit
* Twitter: [](https://twitter.com/airshipproject) @airshipproject
*  Mailing-list: lists.airshipit.org/cgi-bin/mailman/listinfo

About the Open Infrastructure Foundation\
The [OpenInfra Foundation](http://openinfra.dev) builds communities that write open source infrastructure software that runs in production. With the support of over 110,000 individuals in 187 countries, the OpenInfra Foundation hosts open source projects and communities of practice, including infrastructure for AI, container native apps, edge computing and datacenter clouds. [Join the OpenInfra movement](https://openinfra.dev/join). [www.openinfra.dev](http://www.openinfra.dev)   

\###

US Media Contacts:\
Robert Cathey\
Cathey.co for the OpenInfra Foundation\
[robert@cathey.co](mailto:robert@cathey.co) 

Allison Price\
OpenInfra Foundation\
[allison@openinfra.dev](allison@openinfra.dev) 
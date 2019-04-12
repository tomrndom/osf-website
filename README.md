# OpenStack Foundation Website

This is the repo to mantain the OpenStack Foundation Website at https://www.openstack.org

## Overview

This develop is based on Vuepress + Netlify CMS.

Vuepress is a minimalistic Vue-powered static site generator. Netlify CMS is unique type of CMS that edits site content as static markdown files via git, but using a friendly and familiar CMS interface. (CMS users do not have to use or understand git directly.) Bulma is used for CSS, extended with Buefy for lightweight UI components.

- [Vuepress](https://vuepress.vuejs.org/)
- [Netlify CMS](https://www.netlifycms.org)
- [Bulma](https://bulma.io)
- [Buefy](https://buefy.github.io)

To request changes, [submit an issue](https://github.com/OpenStackweb/osf-website/issues) or [submit a pull request](https://github.com/OpenStackweb/osf-website/pulls).

## Install locally (Alternative)

### Prerequesites
Brew
Node

### Install vuepress
```
brew update
brew install yarn
yarn install
```
### Access locally
```
yarn run site:dev
```

---

## Install locally (Original)
### Prerequesites
Node

### Install vuepress globally
```
$ yarn global add vuepress # OR npm install -g vuepress
```

### Install npm packages
```
$ yarn install
```

### Access locally
```
$ yarn dev
```

## Install locally Using Brew

### Prerequesites

Brew

### Install vuepress 

```
$ brew update
$ brew install yarn
$ yarn install
```

### Deploy on server

```

```

## File guidance

- Most pages can be found in `/site/` under their corresponding folder name. You can make changes to the `.md` file using markdown or html. The frontmatter must be YAML.
- Home page content can be found in `/index.md`, with the majority being editable in the frontmatter.
- HTML for each templates can be found in `/site/.vuepress/components/` as `.vue` files.
- All CSS and Sass files are in `/site/.vuepress/theme/`
- Public images should be placed in `/site/.vuepress/public/images/` and can be referenced as `/images/filename`


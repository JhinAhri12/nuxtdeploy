---
title: "Setup Nuxt"
author: "@Light"
dates:
  published: "2023-02-07"
---

# Setup de mes projets nuxt

- Pour débuter le projet :

```shell
npx nuxi init <project-name>
```

```shell
yarn install
```

- Installer les lib externe :

```shell
yarn add @vueuse/nuxt
```

Ajouter le module @module aux modules dans la section nuxt.config.js

```shell
{  modules: [    '@nuxtjs/tailwindcss'  ]}
```

<style>

h1{
  margin-bottom:12px;
  font-size: 1.5rem;
}
code{
  background-color: #eee;
border-radius: 3px;
font-family: courier, monospace;
padding: 0 3px;
}
p{
margin: 10px 0;
padding: 5px;
border: 1px solid #999;
}


</style>

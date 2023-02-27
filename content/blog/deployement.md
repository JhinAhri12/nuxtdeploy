---
title: "Déploiement"
author: "@Light"
dates:
  published: "2023-02-27"
---

deploiement netlify : KO

Rien ne s'est bien passé pour ce déploiement:

https://github.com/nuxt/nuxt/discussions/19300#discussioncomment-5120533

solution : vercel

Mettre les env : database_url et etc

rajouter postinstall :

https://yarnpkg.com/package/postinstall

changer le package.json.

```js
// package.json

{
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "npx prisma generate"
  },
  "devDependencies": {
    "@nuxtjs/tailwindcss": "^6.3.1",
    "nuxt": "^3.1.2"
  },
  "dependencies": {
    "@nuxt/content": "^2.4.3",
    "@nuxtjs/supabase": "^0.3.1",
    "@prisma/client": "^4.10.1",
    "dotenv": "^16.0.3",
    "netlify": "^13.1.2",
    "netlify-cli": "^13.0.0",
    "postinstall": "^0.8.0"
  }
}

```

---
title: "Mémo Fetch"
author: "@Light"
dates:
  published: "2023-02-21"
---

```js
// note le ref peut contenir tout type de données
const sort = ref({ query: "nothing" });
// Dans un cas d'utilisation de refresh ne surtout pas oublier le ()
const {
  data: jobs,
  pending,
  refresh,
  error,
} = await useFetch(() => `/api/job/job?query=${sort.value.query}`);

function sortJobs() {
  sort.value.query = "orderBy";
  refresh();
}
```

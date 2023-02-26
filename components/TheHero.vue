<template>
  <section class="">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <slot />
        </h1>
        <slot name="subtitle" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-body {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 5px;
}
</style>
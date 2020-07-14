<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(43, 43, 43);
  --color-contrast-1: rgb(101 101 101);
  --color-contrast-2: rgb(191 191 191);
  --color-light: rgb(245 245 245);
  --color-accent: rgb(145 67 205);
  --color-accent-1: rgb(221 181 253);
  font-family: 'DM Sans',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 18px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

mark {
  background-color: #fffab2;
    padding: .2em .1em;
}

a {
  color: var(--color-contrast);
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 2px solid var(--color-accent-1);
  transition: border 0.3s;
}

a:hover {
  border-bottom: 2px solid var(--color-accent);
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.light-spacer {
  margin: 0 1rem;
  color: var(--color-contrast-2);
}

</style>

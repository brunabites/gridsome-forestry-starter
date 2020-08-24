<template>
    <div class="projects">
      <span class="label">Latest case studies</span>
      <div class="project" v-for="item in projects" :key="item.node.id">
          <g-link :to="item.node.path" class="project-link">
          <g-image
              :src="item.node.thumbnail"
              :alt="item.node.title"
              class="thumbnail"
          />
          <h3 class="project-title">{{ item.node.title }}</h3>
          <p class="project-description">{{ item.node.description }}</p>
          <div class="categories">
              <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
          </div>
          </g-link>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.projects span.label {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}
.projects {
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem; */
}
.project {
  grid-column: auto / span 2;
  /* text-align: center; */
  margin: 0.5rem 0 4rem 0;
}
.project-link {
  text-decoration: none;
}
.project a {
  border:none
}
.thumbnail {
  /* height: 520px;
  object-fit: cover; */
  border-radius: 8px;
  transition: all 0.7s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.project-title {
  font-size: 1.4rem;
  color: var(--color-contrast);
  margin: 1rem 0 .4rem 0;
  line-height: 1rem;
}
.project-description {
  font-size: 1.3rem;
  color: var(--color-contrast-1);
  margin: .5rem 0 .6rem 0;
  padding: 0;
}
.categories {
  font-size: 0.8rem;
  padding: 0;
}
.category {
  margin-right: 0.8rem; 
  color: var(--color-accent);
  opacity: .7;
}

.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto / span 2;
  }
}

</style>

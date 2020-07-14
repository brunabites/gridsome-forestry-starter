<template>
    <footer class="footer">
        <div class="container">
            <p>Get in touch:</p>
            <p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brunabites/">LinkedIn</a>
              <span class="light-spacer">—</span>
              <a rel="noopener noreferrer" href="https://dribbble.com/brunabites">Dribbble</a>
              <span class="light-spacer">—</span>
              <a target="_blank" rel="noopener noreferrer" href="http://github.com/brunabites/">Github</a>
            </p>
            <span v-html="settings.footer" />
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    background: var(--color-light);
    margin: 4rem 0 0;
    padding: 3rem 0;
}
.footer p {
    font-size: 1.2rem;
    line-height: .9rem;
}

.footer span {
    font-size: 0.8rem;
}
</style>

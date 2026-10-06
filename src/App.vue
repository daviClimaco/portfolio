<script setup>
import { profile, experience, projects, skills, education, certifications } from './data.js'
</script>

<template>
  <div class="layout">
    <header class="identity">
      <h1>{{ profile.name }}</h1>
      <p class="role">{{ profile.role }}</p>
      <p class="place">{{ profile.location }}</p>
      <nav class="links" aria-label="Contato">
        <a v-for="l in profile.links" :key="l.label" :href="l.href" rel="noopener">{{ l.label }}</a>
      </nav>
    </header>

    <main>
      <section aria-labelledby="sobre">
        <h2 id="sobre">Sobre</h2>
        <p v-for="p in profile.summary" :key="p">{{ p }}</p>
      </section>

      <section aria-labelledby="experiencia">
        <h2 id="experiencia">Experiência</h2>
        <ol class="timeline">
          <li v-for="e in experience" :key="e.title">
            <h3>{{ e.title }}, {{ e.company }}</h3>
            <p class="period">{{ e.period }}</p>
            <ul>
              <li v-for="pt in e.points" :key="pt">{{ pt }}</li>
            </ul>
          </li>
        </ol>
      </section>

      <section aria-labelledby="projetos">
        <h2 id="projetos">Projetos</h2>
        <article v-for="p in projects" :key="p.name" class="project">
          <h3><a :href="p.href" rel="noopener">{{ p.name }}</a></h3>
          <p>{{ p.description }}</p>
          <p class="period">{{ p.stack }}</p>
        </article>
      </section>

      <section aria-labelledby="competencias">
        <h2 id="competencias">Competências</h2>
        <dl class="skills">
          <div v-for="s in skills" :key="s.group">
            <dt>{{ s.group }}</dt>
            <dd>{{ s.items }}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="formacao">
        <h2 id="formacao">Formação</h2>
        <h3>{{ education.degree }}, {{ education.school }}</h3>
        <p class="period">{{ education.period }}</p>
        <ul class="certs">
          <li v-for="c in certifications" :key="c">{{ c }}</li>
        </ul>
      </section>
    </main>
  </div>
</template>

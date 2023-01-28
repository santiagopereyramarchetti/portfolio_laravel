<template>
  <section id="portfolio" class="section bg-light-primary dark:bg-dark-primary min-h-[1400px]">
    <div class="container mx-auto"
        v-motion
        :initial="{
            opacity: 0,
            y: 100,
        }"
        :visible="{
            opacity: 1,
            y: 0,
        }"
    >
        <div class="flex flex-col items-center text-center">
            <h2 class="section-title">
                My latest work
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, fugit aspernatur possimus exercitationem laboriosam dolor nulla quidem recusandae, ad soluta tempore? Rerum ex est deleniti! Illum delectus molestiae culpa sapiente.
            </p>
        </div>
        <Projects :skills="skills" :projects="projects"/>
    </div>
  </section>
</template>

<script setup>
    import Projects from './Projects.vue';
    defineProps({
        skills: Object,
        projects: Object
    })
</script>

<style>

</style>
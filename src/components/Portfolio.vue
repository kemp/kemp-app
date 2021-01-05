<template>
    <div>
        <div class="mb-4">
            <p>Filter by keywords: 
                <span v-for="keyword in allKeywords"><button @click="toggleFilter(keyword)" class="py-1 px-2 m-1 border border-grey rounded-full shadow" :class="{ 'bg-primary-dark text-primary-light': filteredKeywords.indexOf(keyword) >= 0 , 'hover:bg-grey-lighter': filteredKeywords.indexOf(keyword) == -1}">{{ keyword }}</button></span>
                <span v-if="filteredKeywords.length"><button class="py-1 px-2 m-1 border border-grey rounded-full shadow" @click="clearFilters">&times; Clear filters</button></span>
            </p>
        </div>

        <div class="mb-6" v-for="project in filteredProjects">
            <h2 class="font-cursive pb-2">{{ project.name }}</h2>

            <p class="pb-2">{{ project.description }}</p>

            <p class="pb-2" v-if="project.sourceUrl">The source code is available <a :href="project.sourceUrl">on GitHub <img src="/icons/github.svg" class="h-4 rounded-full" alt=""></a>.</p>

            <p class="pb-2" v-if="project.keywords"><strong>Keywords:</strong> <span v-for="(keyword, index) in project.keywords"><span v-if="index != 0">, </span><span :class="{ 'bg-yellow-light': filteredKeywords.includes(keyword)}">{{ keyword }}</span></span></p>

            <p class="pb-2" v-if="project.liveUrl"><strong>See it live:</strong> <a :href="project.liveUrl" target="_blank">{{ project.name }}<img src="/icons/open_in_new.svg" class="h-4" alt=""></a></p>
        </div>
        
        <p>For more projects, check out <a href="https://github.com/kemp">my GitHub</a>.</p>
    </div>
</template>
<script>
    import projects from './projects.js';

    export default {
        mounted() {
            this.projects = projects.projects;
        },

        methods: {
            toggleFilter: function (keyword) {
                if (this.filteredKeywords.indexOf(keyword) == -1) {
                    this.filteredKeywords.push(keyword);
                } else {
                    this.filteredKeywords.splice(this.filteredKeywords.indexOf(keyword), 1);
                }
            },
            clearFilters: function () {
                this.filteredKeywords = [];
            },
            intersect: function (a, b) {
                return a.filter(value => b.includes(value));
            },
        },

        computed: {
            allKeywords: function() {
                return [...new Set(this.projects.flatMap((project) => project.keywords).sort())];
            },
            filteredProjects: function() {
                if (this.filteredKeywords.length == 0) return this.projects;

                return this.projects.filter(project => this.intersect(project.keywords, this.filteredKeywords).length > 0);
            }
        },

        data() {
            return {
                filteredKeywords: [],
                projects: [],
            };
        }
    }
</script>
<template>
    <div>
        <div class="mb-4" v-for="project in projects">
            <h2 class="font-cursive">{{ project.name }}</h2>

            <p>{{ project.description }}</p>

            <p v-if="project.sourceUrl">The source code is available <a :href="project.sourceUrl">on GitHub</a>.</p>

            <p v-if="project.keywords"><strong>Keywords:</strong> <span v-for="(keyword, index) in project.keywords"><span v-if="index != 0">, </span>{{ keyword }}</span></p>

            <p v-if="project.liveUrl"><strong>See it live:</strong> <a :href="project.liveUrl">{{ project.name }}</a></p>
        </div>

        <p>&nbsp;</p>

        <p>For more projects, check out <a href="https://github.com/rockhopper72">my GitHub</a>.</p>
    </div>
</template>
<script>
    export default {
        mounted() {

        },

        data() {
            return {
                projects: [
                    { name: 'Living in Him Alone', description: 'This blog is a simple example of my expertise with frontend languages such as HTML, CSS, and Javascript (including Vue.js), as well as backend languages such as PHP and Laravel. This website is deployed to the cloud on DigitalOcean, so basic command line experience was necessary to provision the server.', keywords: ['PHP', 'Laravel', 'Javascript', 'Vue.js'], liveUrl: 'https://livinginhimalone.com' },
                    { name: 'Notarizer', description: 'Notarizer was built with PHP and the Laravel framework. I designed all pages myself using the Sketch Mac app. It has a near-complete test suite and it interacts with Stripe for payments. I’m currently in the process of making a public API for it.', keywords: ['PHP', 'Laravel', 'SVG'], liveUrl: 'https://notarizer.app', sourceUrl: 'https://github.com/notarizer/notarizer' },
                    { name: 'VideoMirror Chrome Extension', description: 'This is a simple Chrome extension that I made in order to learn about making extensions and practice Javascript. It currently has ≈3,500 active users and 4.9 stars on the Chrome Web Store.', keywords: ['Browser extension', 'Javascript'], liveUrl: 'https://chrome.google.com/webstore/detail/videomirror/lgknkdljklhkafjfekjjbldfcdnmdpkh', sourceUrl: 'https://github.com/rockhopper72/VideoMirror' },
                    { name: 'Captures by Cayla', description: 'Captures by Cayla is a site I designed for a friend who needed an online portfolio of her photography. My goal for the site was to make it quick to load, even with many images. The images are optimized for web and the website makes use of a custom tabular interface for choosing categories.', keywords: ['HTML', 'CSS', 'Javascript'], liveUrl: 'https://rockhopper72.github.io/capturesbycayla.com/', sourceUrl: 'https://github.com/rockhopper72/capturesbycayla.com' },
                ],
            };
        }
    }
</script>

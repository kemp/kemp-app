<template>
    <div class="w-full px-2 pt-8 md:overflow-y-scroll scrolling-touch max-h-screen">
        <h1 class="text-4xl md:text-5xl font-cursive text-center">Steven Kemp</h1>
        <h2 class="font-mono text-lg mt-4 text-center">Full-Stack Web Developer</h2>

        <ul v-cloak class="navigation text-center list-reset mt-3 mb-5">
             <!-- Active links will have "router-link-active" -->
            <li><router-link :to="{ name: 'portfolio' }">Portfolio</router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>

        <div class="max-w-xl px-4 mx-auto">
            <router-view v-slot="{ Component }" class="mb-16 mx-auto">
                <transition :name="$root.transition" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

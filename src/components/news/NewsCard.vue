<template>
<base-card>
    <template #title>
        Announcements
    </template>
    <template #icon>
        mdi-calendar-star
    </template>
    <template #content>
        <v-carousel
            vertical
            cycle
            hide-delimiters
            hide-delimiter-background
            :show-arrows="false"
            height="auto"
        >
            <v-carousel-item
            v-for="n in 5"
            :key="n"
            >
                <h1>Slide: {{n}}</h1>
            </v-carousel-item>
        </v-carousel>
    </template>
</base-card>
</template>

<script>
import BaseCard from '../core/BaseCard';

export default {
    data() {
        return {
            position: 0
        }
    },
    components: {
        BaseCard
    }
}
</script>

<style>

</style>

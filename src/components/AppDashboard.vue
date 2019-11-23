<template>
<v-container
    fluid
    class="fill-height"
>
    <v-row
        align="start"
        justify="center"
    >
        <v-col cols="8">
            <news-card></news-card>
        </v-col>

        <v-col cols="4">
            <v-row
                align="start"
                justify="center"
            >
                <v-col cols="12" class="pt-0">
                    <twitter-card></twitter-card>
                </v-col>
                <v-col cols="12">
                    <weather-card></weather-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
import WeatherCard from './weather/WeatherCard';
import TwitterCard from './twitter/TwitterCard';
import NewsCard from './news/NewsCard'

export default {
    components: {
        WeatherCard,
        TwitterCard,
        NewsCard
    }
}
</script>

<style>

</style>

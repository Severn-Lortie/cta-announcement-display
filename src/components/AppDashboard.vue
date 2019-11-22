<template>
<v-container
    fluid
    class="fill-height"
>
    <v-row
        justify="center"
        align="start"
    >
        <v-col cols="4">
          <weather-card></weather-card>
        </v-col>
        <v-col cols="4">
          <twitter-card></twitter-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import WeatherCard from './weather/WeatherCard';
import TwitterCard from './twitter/TwitterCard';

export default {
    components: {
        WeatherCard,
        TwitterCard
    }
}
</script>

<style>

</style>

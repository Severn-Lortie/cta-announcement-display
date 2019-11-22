<template>
<base-card>
    <template #title>
        Weather
    </template>
    <template #icon>
        mdi-weather-cloudy
    </template>
    <template #content>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="6"
                class="display-3 text-left"
            >
            23ºC
            </v-col>
            <v-col
                cols="6"
                class="text-left"
            >
                <v-icon x-large>
                    mdi-weather-partly-cloudy
                </v-icon>
            </v-col>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="secondary">mdi-weather-windy</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>
        </v-row>
    </template>
</base-card>
</template>

<script>
import BaseCard from '../core/BaseCard';

export default {
    components: {
        BaseCard
    }
}
</script>

<style>

</style>

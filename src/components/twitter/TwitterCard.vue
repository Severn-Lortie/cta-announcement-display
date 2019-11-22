<template>
<base-card>
    <template #title>
        Twitter
    </template>
    <template #content>
        <div class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
        </div>
    </template>
    <template #icon>
        mdi-twitter
    </template>
    <template #actions>
        <v-list-item class="grow">
        <v-list-item-avatar color="secondary">
          <v-icon color="white">
            mdi-school-outline
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>CTA Tweets</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
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

<template>
<v-card :elevation="elevation" :height="height">
    <v-toolbar
        flat
        color="primary"
    >
        <v-toolbar-title class="white--text">
            <slot name="title"></slot>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="white" large>
            <slot name="icon"></slot>
        </v-icon>
    </v-toolbar>
    <v-card-text>
        <slot name="content"></slot>
    </v-card-text>
    <v-card-actions>
        <slot name="actions"></slot>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: {
        prominent: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: 'auto'
        }
    },
    computed: {
        elevation() {
            return this.prominent ? 10 : 2
        }
    }
}
</script>

<template>
<v-card>
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

<template>
  <div class="home">
    {{ version }}
    <router-view />
    <!-- <a-button @click="$router.push('/micro-react/child-one')">back home</a-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

const namespace = 'global';

@Component
export default class Home extends Vue {
  @State('version', { namespace }) private version?: string;
}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <error-component>Default Message</error-component>
    <error-component :kind="warning">Warning Message</error-component>
    <error-component :kind="error">Error Message</error-component>
  </div>
</template>

<script>
import 'simple-error-component';

export default {
  name: 'App',
  data() {
    return {
      warning: 'warning',
      error: 'error'
    }
  }
}
</script>

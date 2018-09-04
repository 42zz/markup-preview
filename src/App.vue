<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="light">Markdown Preview</h1>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-6">
        <h4 class="light">Markdown</h4>
        <textarea
          class="info"
          v-model="markdown"
        />
      </div>
      <div class="col-6">
        <h4 class="light">Preview</h4>
        <div
          :key="markdown"
          class="info"
          v-markdown
          >{{markdown}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      markdown: '',
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
  border: 1px dashed orange;
  outline: none;
}
.info {
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.9);
}
</style>

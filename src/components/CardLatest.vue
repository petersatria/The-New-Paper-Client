<script>
export default {
  props: ['article']
}
</script>

<template>
  <div class="card text-bg-dark">
    <img :src="article.imgUrl" class="card-img" alt="..." height="250" />
    <div class="card-img-overlay d-flex flex-column justify-content-end">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">
        <small>{{ article.createdAt }}</small>
      </p>
    </div>
  </div>
</template>

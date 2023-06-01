<script>
export default {
  props: ['article']
}
</script>

<template>
  <div class="col-6 col-md-4">
    <div class="card border-white">
      <img :src="article.imgUrl" class="card-img" alt="..." height="120" />
      <h5 class="card-title pt-2">{{ article.Category.name }}</h5>
      <p class="card-text">{{ article.title }}</p>
    </div>
  </div>
</template>

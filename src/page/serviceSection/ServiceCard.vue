<script>
export default {
  name: "ServiceCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="card">
    <div class="icon">{{ icon }}</div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="arrow">&rarr;</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #19191f;
  border-radius: 8px;
  padding: 20px;
  width: calc(50% - 20px);
  position: relative; 
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  font-size: 2rem;
  color: #00a6a6;
}

.content {
  flex-grow: 1;
}

h3 {
  margin: 0;
  color: #fff;
  font-family: Inter,sans-serif;
  line-height: 1.2;
  margin: 1.5rem 0;
  word-wrap: break-word;
}

p {
  color: #ccc;
}

.arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: #00a6a6;
}
</style>



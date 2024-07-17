<script>
export default {
  name: "Jumbotron",
};
</script>


<template>
    <section class="banner">
        <div class="container">
            <h1>Services</h1>
            <p>Home / Services</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;

.banner {
        background: url('https://www.jamisonsearch.com/wp-content/uploads/2020/05/person-typing-on-laptop-with-bright-screen-Computer-Vision-Syndrome-Burnout_1024x1024.jpg') no-repeat center center/cover;
        color: #fff;
        text-align: center;
        padding: 5rem 0;
        height: 27rem;
        }

        .container {
        max-width: 76%;
        margin: 0 auto;
        height: 200px;

        h1{
            font-family: Inter,sans-serif;
            font-style: default;
            font-size: 4.5rem;
            font-weight: 900;
            line-height: 1.2;
        }

        p{
            font-family: Inter,sans-serif;
            font-style: default;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
        }
  }
</style>
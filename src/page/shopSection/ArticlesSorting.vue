<script>
export default{
    name: "ArticlesSorting"
}
</script>

<template>
    <select name="sorting" class="sorting" aria-label="Shop order">
        <option value="menu_order">Default sorting</option>
        <option value="popularity">Sort by popularity</option>
        <option value="rating">Sort by average rating</option>
        <option value="date">Sort by latest</option>
        <option value="price">Sort by price: low to high</option>
        <option value="price-reverse">SOrt by price: high to low</option>
    </select>
</template>

<style lang="scss" scoped>
    @use "src/style/general.scss" as *;

    select{
        background-color: none;
        font-size: 20px;
        height: 30px;
        margin-right: 20px;
        
    }

    option{
        font-size: 20px;
        margin-right: 20px;
    }
</style>
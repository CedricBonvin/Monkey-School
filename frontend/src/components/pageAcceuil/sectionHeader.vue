<template>
  <section class="header">
            <img class="headerImage" src="@/assets/images/header.jpg" alt="image singe ">
            <div class="headerTitleBox">
                <h1>Monkey-school</h1>
            </div>
        </section>
</template>

<script>
export default {
    name: "headerAcceuil"
}
</script>

<style scoped>
       .header{
        position: relative;
    }
    .headerImage{
        width: 100%;
        height: 80vh;
        object-fit: cover;   
    }
    .headerTitleBox{
        margin-top: var(--top-bar-height);
        position: absolute;
        top: 50px;
        width: 70%;
        color: white;
        font-size: 6vw;
        padding: 3px;
    }
</style>
<template>
  <section class="header">
        <img class="headerImage" src="@/assets/images/header-min.jpg" alt="image singe ">
        <div class="headerTitleBox">
            <h1>Monkey-school</h1>
            <div class="sous-titre">Climbing is our Life-style...</div>
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
        letter-spacing: 2px;
        
    }
    h1{
        font-weight: 500;
        padding-left: 15px;
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
        width: 100%;
        color: white;
        font-size: 6vw;
        padding: 3px;       
    }
    .sous-titre{
        font-style: italic;
        font-size: calc(16px + 1vw);
        width: 100%;
        color: white;
        font-weight: 400;
        margin-top: 150px;
        text-align: right;
        padding-right: 20px;
        }

    @media screen and (max-width : 400px) {
        .sous-titre{
            margin: 0;
        }
        h1{
            font-size: 40px;
            padding: 0;
            text-align: center;
        }
        .headerTitleBox{
            background: rgba(179, 179, 179, 0.219);
        }
    }
     @media screen and (min-width : 1500px) {
       
        h1{
            font-size: 150px;
            padding: 0;
        }
       
    }
</style>
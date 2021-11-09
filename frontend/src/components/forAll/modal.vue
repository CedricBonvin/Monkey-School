<template>
    <div class=" container">
        <p> {{ text }}</p>
        <button @click="closeModal" class="buttonFull"> OK</button>
    </div>
</template>

<script>
export default {
    name : "modal",
    props : ["text", "modal"],
    methods : {
        closeModal(){
           
            this.$emit("close-modal")
        }
    }
}
</script>

<style scoped>
    .container{
        position: fixed;
        z-index: 1000;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px 20px;
        text-align: center;
        background: rgb(245, 245, 245);
        width: 90%;
        max-width: 600px;
        box-shadow: 0 0 15px 1000px rgba(70, 70, 70, 0.644);
        font-weight: bold;
        font-size: 16px;

    }
    .buttonFull{
        margin: 0;
        margin: auto;
        margin-top: 20px;
        width: 150px;
        border-radius: 0;
        font-size: 18px;
        padding: 10px 20px;
    }
</style>
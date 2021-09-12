<template>
  <section class="section">
        <div class="boxTitleTrouver">
            <div class="titleTrouver">
                <i class="fas fa-info iconeInfo"></i>
                <h2>Où nous trouver</h2>
            </div>   
        </div>

        <!-- ICONE -->
        <div class="boxIcone">
            <i class="icone fas fa-car"></i>
            <i class="icone fas fa-biking"></i>
            <i class="icone fas fa-walking"></i>
        </div>
        <!-- FRAME  -->
        <div class="sectionFrame">
            <div class="colFrame">
                <h3>Plan de situation :</h3>
                <iframe class="frame"   frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Route%20de%20la%20Moubra%2073,%203963%20Crans-Montana+(Monkey-School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            <!-- ADRESSE  -->
            <div class="colAdresse">
                <address>Monkey-School <br>
                    Route de la Moubra 73 <br>
                    3963 Crans-Montana ( VS ) <br>
                    Suisse
                </address>
            
                <div class="contact">
                    <div class="mail">
                        <i class="fas fa-envelope"></i>
                        <span>contact@monkey-school.ch</span>
                    </div>
                    <div class="phone">
                        <i class="fas fa-phone-alt"></i>
                        <span>+41 79 519 04 84</span>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name : "nous-trouver"
}
</script>

<style scoped>
.section{
    padding: 20px;
    max-width: 1000px;
}
.section:last-child{
    margin-bottom: 30px;
}
i{
    display: block !important;
    margin:0;
    margin-right: 20px;
    font-size: calc(16px + 2vw);
    text-align: left;
    color: rgb(97, 97, 97);
}
.contact i{
    font-size: 1.5rem;
}
.iconeInfo{
    font-size: 2.9rem;
}
.boxTitleTrouver{
    position: relative;
}
.boxTitleTrouver:after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 20%;
    background: var(--color-primary);
   
}
.titleTrouver{
    display: flex;
    align-items: center;
}
h2{
    position: relative;
    font-size: calc(14px + 3vw);
    margin-left: 1vw;
}
h2:before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    border: 2px solid var(--color-primary);
}
.boxIcone{
    margin: 40px 0;
    display: flex;
    justify-content: center;
}
.icone:nth-child(2){
    padding: 0 20px;
}
h3{
    font-weight: bold;
    opacity: .7;
    font-style: italic;
}
.colAdresse{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
}
address{
    margin: 20px 0;
}
.colFrame{
    width: 100%;
}
.frame{
    width: 100%;
}
.mail, .phone{
    display: flex;
    align-items: center;
    line-height: 2rem;
}
@media screen and (min-width: 670px) {
    .sectionFrame{
        display: flex;
        justify-content: space-evenly;
    }
    .mail, .phone{
        line-height: 2.3em;
    }
    .frame{
        width: 90%;
        height: 30vw;
    }
    .colFrame{
        width: 50%;
    }
    .colAdresse{
            font-size: calc(14px + .5vmin);
    }

}


</style>
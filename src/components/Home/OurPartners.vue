<template>
    <div class="container">
        <div class="info">
            <h1>Our High-level Partners</h1>
            <p class="description">We work with leading industry partners to enhance your gaming experience beyond just your PC—partnering with Neuroptima for peak mental performance and x for top-tier Fortnite training. </p>
        </div>
        <div class="partner-cards">
            <div>NEUROPTIMA</div>
            <div>TRAINER</div>
        </div>
    </div>
    

</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 50vh;
    }

    @media(max-width: 994px ) {
        .info {
            flex-direction: column;
            align-items: center;
        }
        .description {
            margin-top: 2rem;
        }
    }

    .description {
        width: 60%;
    }

    .info {
        display: flex;
        justify-content: space-between;
    }

    .info h1 {
        
    }
    .partner-cards {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
</style>
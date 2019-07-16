<template>
    <div>
        首页
    </div>
</template>

<script>
export default {
    created(){
        this.axios({
            url:"/Hicool/data",
            method:"get"
        }).then((data)=>{
            console.log(data);
        })
    }
}
</script>

<style scoped>

</style>

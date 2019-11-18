<template>
    
    <div id="app"
        @click="m1.visible = false;"
        @contextmenu="m1.visible = false;"
    >
        <div class="purplesquare"
            @contextmenu.prevent="showMenu($event, m1)" 
        ><h3 v-if="!m1.visible" >Right click here...</h3></div>   

        <radial-menu
            :conf="m1.conf"
            :pos="m1.pos"
            :visible="m1.visible"
        />

    </div>

</template>
<script>
import menuConfig from './menuConfig';

export default {
    name: 'app',
    data: function(){

        return {
            m1:{
                conf: menuConfig,
                pos: {x:0, y:0},
                visible:false,
            },
        }

    },
    methods:{
        showMenu(e, instance){
            instance.visible = false;
            setTimeout(()=>{ 
                instance.pos = {x: e.pageX, y: e.pageY};  
                instance.visible = true;
            }, 200);
            return false;
        }
    },
}


</script>

<style lang='scss' subtract>

.purplesquare{
    color: white;
    overflow: hidden;
    position: absolute;
    top: 200px;
    left: 200px;
    width: 200px;
    height: 200px;
    background-color: purple;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

#app{
    width: 1000px;
    height: 1000px;
    background-color: #ce9200;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffc059' fill-opacity='0.14' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

</style>

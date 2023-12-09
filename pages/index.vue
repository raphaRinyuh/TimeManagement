<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';


let isClocked:boolean = false
let isClockedOnSite:boolean = false
let isHomeoffice:boolean = false
let isFortbildung:boolean = false
let isAvailable = ref<boolean>(true)

const isAvailableComp = computed({
    get(){
        return isAvailable.value;
    },
    set(newValue:boolean){
        isAvailable.value = newValue
    }
})

function onChangeIsClockedOnSite(){
    isClocked = true
    isClockedOnSite = true
    isAvailableComp.value = false
}

function onChangeIsClockedHomeoffice(){
    isClocked = true
    isHomeoffice = true
    isAvailableComp.value = false
}

function onChangeIsClockedFortbildung(){
    isClocked = true
    isFortbildung = true
    isAvailableComp.value = false
}

function onChangeClockOut(){
    isClocked = false
    isHomeoffice = false
    isFortbildung = false
    isClockedOnSite = false
    isAvailableComp.value = true
    console.log(isAvailable)
}

</script>

<template>
    <div class="mx-8 gap-4 h-[85%] grid grid-cols-[1.7fr_1.5fr_1.2fr] grid-rows-[repeat(7,_1fr)] items-stretch justify-items-stretch">
        <div class="shadow-xl userClock__wrapper text-center row-start-2 row-end-7 col-start-1 col-end-1 bg-slate-600 rounded-[2.5rem] p-8 grid grid-cols[1fr_4fr_1fr] grid-rows-[1fr_1fr_1fr_1fr]">
            <button :disabled="!isAvailable" @click="onChangeIsClockedOnSite" class="clockIn text-xl font-semibold  bg-green-200 h-5/6 my-auto w-5/6 mx-auto rounded-[2.5rem] border-2 border-green-400 hover:shadow hover:border-[6px] hover:text-lg hover:font-medium transition-all disabled:bg-red-50 disabled:border-red-200 disabled:line-through disabled:hover:border-2 disabled:hover:font-semibold disabled:hover:text-xl">
                <p class="">Einstempeln</p>
            </button>
            <button :disabled="!isAvailable" @click="onChangeIsClockedHomeoffice" class="clockIn text-xl font-semibold  bg-blue-200 h-5/6 my-auto w-5/6 mx-auto rounded-[2.5rem] border-2 border-blue-400 hover:shadow hover:border-[6px] hover:text-lg hover:font-medium transition-all disabled:bg-red-50 disabled:border-red-200 disabled:line-through disabled:hover:border-2 disabled:hover:font-semibold disabled:hover:text-xl">
                <p class="">Homeoffice</p>
            </button>
            <button :disabled="!isAvailable" @click="onChangeIsClockedFortbildung" class="clockIn text-xl font-semibold  bg-yellow-200 h-5/6 my-auto w-5/6 mx-auto rounded-[2.5rem] border-2 border-yellow-400 hover:shadow hover:border-[6px] hover:text-lg hover:font-medium transition-all disabled:bg-red-50 disabled:border-red-200 disabled:line-through disabled:hover:border-2 disabled:hover:font-semibold disabled:hover:text-xl">
                <p class="">Fortbildung</p>
            </button>
            <button :disabled="isAvailable" @click="onChangeClockOut" class="clockIn text-xl font-semibold  bg-red-200 h-5/6 my-auto w-5/6 mx-auto rounded-[2.5rem] border-2 border-red-400 hover:shadow hover:border-[6px] hover:text-lg hover:font-medium transition-all disabled:bg-red-50 disabled:border-red-200 disabled:line-through disabled:hover:border-2 disabled:hover:font-semibold disabled:hover:text-xl">
                <p class="">Ausstempeln</p>
            </button>
        </div>
        <div class="shadow-xl bg-slate-600 text-white row-start-2 row-end-6 col-start-2 col-end-2 rounded-[2.5rem] grid grid-cols[1fr] grid-rows-[1fr_1fr] grid-flow-row p-8">
            <div class="self-start"> Buchungen: </div>
            <div class=""></div>
        </div>
    </div>
</template>
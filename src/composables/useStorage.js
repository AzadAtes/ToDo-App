import { ref, watch } from "vue"

export function useStorage(key, val = null, opt = false) {

    function read(){
        return JSON.parse(localStorage.getItem(key))
    }

    function write(){
        if (val.value === null || val.value === '') {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(val.value))
        }
    }
 
    let storedVal = read()

    if (storedVal) {
        val = ref(storedVal)
    }   else {
        val = ref(val)
        write()
    }

    watch(val.value, () => {write()}, {deep: opt})

    return val
}
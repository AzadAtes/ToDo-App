import { ref, watch } from "vue"

export function useLocalStorage(key, val = null, watchDeep = false) {

    function read(){
        return JSON.parse(localStorage.getItem(key))
    }

    function write(){
        if (val.value === null) {
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

    watch(val, () => {write()}, {deep: watchDeep})

    return val
}
import { useFetch } from "nuxt/app"

const id = useStorage('userId'); //! Hier muss ich noch die UserId abgreifen irgendwi

export const useAuth = () => {
    const isValid = useFetch(`/api/v1/auth/${id}`)
}
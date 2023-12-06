export {}

declare global {
    type ApiState = SuccessApiState | PendingApiState | ErrorApiState
    
    type SuccessApiState = {
        status: "Successfull",
        response: object
    }

    type PendingApiState = {
        status: "Pending"
    }

    type ErrorApiState = {
        status: "Error"
        error: string
    }
}
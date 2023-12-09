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

type dbUser = {
    id?:string,
    name?:string,
    email?:string,
    isSupervisor?:boolean,
    createdAt?: Date,
    password:dbPassword
}

type dbPassword = {
    id?: string,
    password?: string,
    createdAt?: Date
}

type dbDepartment = {
    id?: string,
    name?: string,
    createdAt?: string
}

type dbVacationRequest = {
    id?: string,
    dateFrom?: Date,
    dateUntil?: Date,
    isApproved?: boolean,
    createdAt?: Date,
    requestingUserId?: string,
    requestingUser?: dbUser
    approvedByUserId?: string,
    approvedByUser?: dbUser
}

type AuthState = AuthStateValid | AuthStateRefreshed | AuthStateInvalid

type AuthStateValid = {
    status: "Valid",
    token: string
}

type AuthStateRefreshed = {
    status: "Valid",
    state: "refreshed",
    token: string
}

type AuthStateInvalid = {
    status: "Invalid"
}

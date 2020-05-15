export type RootState = {
    auth: {
        isAuth: boolean,
        token: string
    },
    notifications: {
        notifications: Array<Notification>
    },
    app: {
        isLoading: boolean
    }
}
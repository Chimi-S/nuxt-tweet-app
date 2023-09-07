import { removeRefreshToken } from "~/server/db/refreshTokens"


export default defineEventHandler(async (event) => {
    try {
        const cookies = getCookie(event)
        const refreshToken = cookies.refresh_token
        await removeRefreshToken(refreshToken)
    } catch (error) { }

    sendRefreshToken(event, null)

    return { message: 'Done' }
})
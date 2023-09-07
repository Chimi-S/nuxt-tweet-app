import { sendError, getCookie } from "h3"
import { getRefreshTokenByToken } from "~/server/db/refreshTokens"
import { getUserById } from "~/server/db/users"
import { decodeRefreshToken } from "~/server/utils/jwt"

export default defineEventHandler(async (event) => {
    const refreshToken =  getCookie(event,'refresh_token')

    if(!refreshToken){
        return sendError(event,createError({
            statusCode:401,
            statusMessage:'Refresh token is invalid'
        }))
    }

    const dbRefreshToken = await getRefreshTokenByToken(refreshToken)
    if(!dbRefreshToken){
        return sendError(event,createError({
            statusCode:401,
            statusMessage:'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken)

    try {
        const user_data = await getUserById(token.userId)

        const { accessToken } =  generateTokens(user_data)

        return { access_token: accessToken }

    } catch (error) {
        return sendError(event,createError({
            statusCode:500,
            statusMessage:'Something went wrong'
        }))
    }

})
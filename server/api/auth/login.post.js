import { sendError } from "h3"
import { getUserByUsername } from "~/server/db/users"
import bcrypt from 'bcryptjs'
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformer/user";
import { creatRefreshToken } from "~/server/db/refreshTokens";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { username, password } = body

    if(!username || !password){
        return sendError(event,createError({
            statusCode:400, 
            statusMessage:'Invalid params'
        }))
    }

    //Is a user registered
    const user = await getUserByUsername(username)
    if(!user){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:'Username and password is invalid'
        }))
    }

    //compare the password
    const doesThePasswordMatch = await bcrypt.compare(password,user.password)

    if(!doesThePasswordMatch){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:'Username and password is invalid'
        }))
    }

    const { accessToken, refreshToken } = generateTokens(user)
    
    await creatRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    sendRefreshToken(event,refreshToken)

    return {
        access_token:accessToken, user: userTransformer(user)
    }
})
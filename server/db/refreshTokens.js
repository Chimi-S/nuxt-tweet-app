import { prisma } from "."

export const creatRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data:refreshToken
    })
}

export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token:token
        }
    })
}

export const removeRefreshToken = (token) => {
    return prisma.refreshToken.delete({
        where: {
            token: token
        }
    })
}
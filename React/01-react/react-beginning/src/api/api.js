import axios from 'axios'
import React from 'react'

const axiosConfig = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { "API-KEY": "b81cfe18-8544-477a-8074-de2d1a56b5a1" }
})

export const usersAPI = {
    async getUsersForUnfollow (userId) {
        const response = await axiosConfig.delete(`follow/${userId}`)
        return response.data
    },

    async getUsersForFollow (userId) {
        const response = await axiosConfig.post(`follow/${userId}`)
        return response.data
    }
}
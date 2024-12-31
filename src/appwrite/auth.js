import conf from "../conf/confige";
import { Client, Account, ID } from "appwrite";

export class authService {
    client = new Client();
    account
    constructor() {
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            throw error
        }
    }
    async getCurrentUsers() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new authService();
export default authService
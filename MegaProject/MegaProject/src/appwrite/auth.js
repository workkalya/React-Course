import { use } from 'react';
import confifg from '../config.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
     constructor() {
        this.client
            .setEndpoint(confifg. appwriteurl) // Your API Endpoint
            .setProject(confifg.appwriteprojectid); // Your project ID

        this.account = new Account(this.client);
     }

     async createAccount({email, password, name}) {
        try{
           const userAccount = await this.account.create(ID.unique(), email, password, name);
           if (userAccount) {
            return this.login({email, password}); //login user
               //call onther
           }
           else {
               return userAccount;
           }
        }
        catch (error) {
            throw new Error("Error creating account");
        }
        }

        async login({email, password}) {
            try{
               return await this.account.createEmailPasswordSession(email, password);}
            catch (error) {
                throw new Error("Error logging in");
            }
        }

        async getCurrentUser() {
            try{
              return await this.account.get();}
            catch (error) {
                console.error("Error getting current user", error);
            }
            return null;
        }

        async logout() {
            try{
                return await this.account.deleteSession('current');
            }
            catch (error) {
                throw new Error("Error logging out");
            }
        }

     
}

export const authService = new AuthService();

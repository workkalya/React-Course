import { use } from 'react';
import confifg from '../config.js';
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";

export class Service {
    client =new Client();
    databases;
    bucket;
    constructor(){
        this.client
                    .setEndpoint(confifg. appwriteurl) // Your API Endpoint
                    .setProject(confifg.appwriteprojectid); // Your project ID
                    this.databases = new Databases(this.client);
                    this.bucket = new Storage(this.client);
        
    }

    async createPost({title,slug,content,featuredImage,status,userID}){
        try{
            await this.databases.createDocument(
                confifg.appwriteprojectid,
                confifg.appwriteDatabaseId,
                slug,
                {
                    title:title,
                    content:content,
                    featuredImage:featuredImage,
                    status:status,
                    userID:userID
                }
            )

        }
        catch(error){
            console.error("Error creating post", error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            await this.databases.updateDocument(
                confifg.appwriteprojectid,
                confifg.appwriteDatabaseId,
                slug,
                {
                    title:title,
                    content:content,
                    featuredImage:featuredImage,
                    status:status,
                    userID:userID
                }
            )

        }
        catch(error){
            console.error("Error updating post", error);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                confifg.appwriteprojectid,
                confifg.appwriteDatabaseId,
                slug
            )
            return true;

        }
        catch(error){
            console.error("Error deleting post", error);
            return false;   
        }
    }

    async getPost(slug){
        try{
            const post = await this.databases.getDocument(
                confifg.appwriteprojectid,
                confifg.appwriteDatabaseId,
                slug
            );
            return true;
        }
        catch(error){
            console.error("Error fetching post", error);
            return false;   
        }
    }

    async getPosts(quiries = [Query.equal("status","active")]){
        try{
           await this.databases.listDocuments(
            confifg.appwriteprojectid,
            appwritecollectionid,
            quiries,

           )
           return true;
        }
        catch(error){
            console.error("Error fetching posts", error);
            return false;   
        }
       
    }

    //for file upload

    async uploadFile(file){
        try{
            const response = await this.bucket.createFile(
                confifg.appwriteprojectid,
                confifg.appwritebucketid,
                ID.unique(),
                file
            );
            return response;
        }
        catch(error){
            console.error("Error uploading file", error);
            return null;   
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                confifg.appwritebucketid,
                fileId
            );
            return true;
        }
        catch(error){
            console.error("Error deleting file", error);
            return false;   
        }
    }
           
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            confifg.appwritebucketid,
            fileId
        );
        
    }
          

}

const service = new Service();
export default service;


import conf from "../conf/confige";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Services {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);

    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,
                { title, content, featuredImage, status, userId })
        } catch (error) {
            console.log(error);

        }
    }
    async updatedPost({ slug, title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                })
        } catch (error) {
            console.log(error)
        }
    }
    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
        }
    }
    async getPost({ slug, }) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error)
        }

    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }
    // File Upload services
    async uploadFile({ file }) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            
        }
    }
    async deleteFile({ fileId }) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucket,
                fileId
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getFilePriview(fileId) {
       try {
         return await this.bucket.getFilePreview(
             conf.appwriteBucket,
             fileId
            )
       } catch (error) {
            console.log(error);
       }
    }
}

const services = new Services();
export default services;


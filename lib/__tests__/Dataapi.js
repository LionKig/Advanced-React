import { expect } from "@jest/globals";
import Dataapi from "../Dataapi" ;
import {data} from "../testData" ;


const api = new Dataapi(data) ;

describe('Dataapi' , () => {

    it('exposes articles as an object', () => {
        const articles = api.getArticles() ;
        const articleID = api.articles[0].id ;
        const articleTitle = data.articles[0].title ;

        expect(articles).toHaveProperty(articelID) ;
        expect(articles[articles].title).toBe(articleTitle) ; 
    });

    it('exposes authors as an object', () => {
        const authors = api.getAuthors() ;
        const authorId =  data.authors[0].id;
        const authorFirstName = data.authors[0].firstName ;
        
        expect(authors).toHaveProperty(authorId) ;
        expect(authors[authorId].firstName).toBe(authorFirstName) ; 
    });
});
import React from 'react' ;
import Dataapi from '../Dataapi';
import { data } from '../testData' ;
import ArticleList from './ArticleList' ;

const api = new Dataapi(data) ;

class App extends React.Component{
    constructor(){
        super() ;
        this.state = {
            articles: api.getArticles() ,
            authors: api.getAuthors() ,
        };
    }

    //lookup author

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    };

    render(){
        return(
            <ArticleList 
                articles = {this.state.articles}
                articleActions = {this.articleActions}
                //authors = {this.state.authors}
            />
        );
    }
}

export default App ;

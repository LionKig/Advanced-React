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

    render(){
        return(
            <ArticleList 
            articles = {this.state.articles}
            authors = {this.state.authors}
            />
        );
    }
}

export default App ;

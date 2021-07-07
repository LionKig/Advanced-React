import React from 'react' ;

import Article from './Article' ;

const ArticleList=(props)=>{
    return (
        <div>
            {Object.values(props.articles).map(article=>
            <Article 
                className = "container-fluid"
                key ={article.id}
                article = {article}
                author = {props.authors[article.authorId]} />
            )}
        </div>
    ) ;
} ;

export default ArticleList;
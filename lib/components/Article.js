import { assertCompletionStatement, assertImmutable } from '@babel/types';
import React from 'react' ;


const StringDate = (dateString) => 
        new Date(dateString).toDateString() ;

const Article = (props) => {
    const {article , actions} = props ;   
    //const {article , author} = props ;
    const author = actions.lookupAuthor(article.authorId) ;

    return (
        <div>
            <div className="row">{article.title}</div>
            <div>{StringDate(article.date)}</div>
            <div>
                <a href={author.website} className="col">
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div>
                {article.body}
            </div>
        </div>
    ) ;
} ;

export default Article ;
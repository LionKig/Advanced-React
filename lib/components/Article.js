import { assertCompletionStatement, assertImmutable } from '@babel/types';
import React from 'react' ;

const Article = (props) => {
    const {article , author} = props ;
    return (
        <div>
            <div className="row">{article.title}</div>
            <div>{article.date}</div>
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
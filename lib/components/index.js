import React from 'react' ;
import ReactDOM from 'react-dom';

class App extends React.Component{
    state={ answer : 42};

    asyncFunc = () =>{
        return Promise.resolve(37) ;
    };

    async componentDidMount(){
        try{
            this.setState({
            answer: await this.asyncFunc()
            });
        }catch(error){
            console.log("There was some error in async function" , error );    
        }
    }

    render(){
        return(
            <h2>Hello class Components- {this.state.answer}</h2>
        );
    }
}

export default App ;

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

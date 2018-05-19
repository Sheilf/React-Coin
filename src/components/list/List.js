import React from 'react';

import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';


class List extends React.Component{
    /*
    State::
        Bool loading -> if data is being presented or processed
        currencies[] -> array populated after api data is fetched
        Obj error -> error flag for fetching
    */
    constructor(){
        super();
        this.state = {
            loading: false, 
            currencies: [], 
            error: null //'Catch is called in <List />'
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        fetch(
            //use ` not ' for interpolation..
            `${API_URL}/cryptocurrencies?page=1&perPage=20`
        ).then(
            handleResponse
        ).then(
            (data) => {
                //console.log('Success', data);
                this.setState({
                    currencies: data.currencies,
                    loading: false
                });
            }
        ).catch( 

            //this is swithed to true
            // in the first setState change in this function.
            

            (error) => {
                this.setState({
                    error: error.errorMessage,
                    loading: false
                })
                //console.log('Error', error);
            }
        );
    }

    renderChangePercent(percent) {
        if (percent > 0) {
            // &uarr; -> up arrow text symbol
          return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            //&darr; -> down arrow text symbol
          return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            //..
          return <span>{percent}</span>
        }
    }
    render(){

        const {loading, error, currencies} = this.state

        if(loading){
            return(<div className="loading-container"><Loading /></div>)

        }
        if(error){
            return <div className = "error">{"Error: " + this.state.error}</div>
        }



        //You need to give a looped item a key in React.
        return(
            <Table
                currencies={currencies}
                renderChangePercent={this.renderChangePercent}
             />
        )
    }
}

export default List;

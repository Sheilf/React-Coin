import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';


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
            error: null,
            totalPages: 0,
            page: 1
        }

        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    componentDidMount(){
        this.fetchCurrencies();
    }

    fetchCurrencies(){
        this.setState({
            loading: true
        });
        const { page } = this.state;

        fetch(
            //use ` not ' for interpolation..
            `${API_URL}/cryptocurrencies?page=${page}&perPage=20`
        ).then(
            handleResponse
        ).then(
            (data) => {
                //console.log('Success', data);
                //console.log(data);  
                const {currencies, totalPages} = data;
                this.setState({
                    currencies: currencies,
                    totalPages: totalPages,
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


    handlePaginationClick(direction){
        let nextPage = this.state.page;
        
        if(direction==="next"){
            nextPage++
        }else{
            nextPage--;
        }

        this.setState({page: nextPage}, () => {this.fetchCurrencies()});
    }
    render(){

        const {loading, error, currencies, totalPages, page} = this.state

        if(loading){
            return(<div className="loading-container"><Loading /></div>)

        }
        if(error){
            return <div className = "error">{"Error: " + this.state.error}</div>
        }



        //You need to give a looped item a key in React.
        return(
            <div>
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />

                <Table
                    currencies={currencies}
              
                />



             </div>
        )
    }
}

export default List;

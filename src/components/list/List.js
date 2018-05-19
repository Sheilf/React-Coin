import React from 'react';
import './Table.css';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';



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
        //console.log(this.state);
        //its one way of going about this
        
        
        //let loading = state.load
        //let error = state.error...

        /* ~downside of using const for this.state
            less verbose but less descriptive
            
            this.state data(currencies.data) 
            vs?
            AJAX data(currency.data)
        */
        const {loading, error, currencies} = this.state

        if(loading){
            return(<div className="loading-container"><Loading /></div>)

        }
        if(error){
            return <div className = "error">{"Error: " + this.state.error}</div>
        }



        //You need to give a looped item a key in React.
        return(
        
        <div className="Table-container">

            <table className="Table">
                <thead className="Table-head">
                    <tr>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                </thead>
                        {/*
                            ~Compose sets of <TableBody /> 
                                creates sets of the previous loop
                                pagination?
                                    
                        */}
                <tbody className="Table-body">
                    {currencies.map((currency) => (
                        <tr key={currency.id}>

                            <td>
                            <span className="Table-rank">{currency.rank}</span>
                                {currency.name}
                            </td>

                            <td>
                            <span className="Table-dollar">$ {currency.price}</span>
                            </td>
                            
                            <td>
                            <span className="Table-dollar">$ {currency.marketCap}</span>
                            </td>
                            
                            <td>
                            {this.renderChangePercent(currency.percentChange24h)}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table> 

        </div>
        )
    }
}

export default List;

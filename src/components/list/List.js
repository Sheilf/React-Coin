import React from 'react';
import './Table.css';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';



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
          return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
          return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
          return <span>{percent}</span>
        }
    }
    render(){
        //console.log(this.state);

        if(this.state.loading){
            return <div>Loading...</div>
        }
        //You need to give a looped item a key in React.
        return(
        
        <div className="Table-container">

            <table className="Table">
                <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                </thead>

                <tbody className="Table-body">
                    {this.state.currencies.map((currency) => (
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

import React from 'react';

export const handleResponse = (response) => {
    /*
        Fetch error helper.
        @param {object} response
    */
    return response.json().then(
        json => {
            return response.ok ? json : Promise.reject(json);
        }
    );
}

export const renderChangePercent = (percent) => {
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

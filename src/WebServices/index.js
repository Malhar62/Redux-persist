

import React from 'react';

export const getApiCall = async (url) => {

    const getData = await fetch(url)
        .then(res => res.json())
        .then(resjson => {
            return resjson
        })
        .catch(error => alert(error))

    return getData;
}
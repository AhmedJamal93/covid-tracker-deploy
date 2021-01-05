// import { React, useState, useEffect } from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';
// import { fetchCountries } from '../../api';

// import styles from './Country.module.css';

// const Countries = ({handleCountryChange}) => {
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         const fetchAPI = async () => {
//             // const countries = await fetchCountries();
//             // setCountries(countries)
//             setCountries(await fetchCountries())
//         };

//         fetchAPI()
//         console.log(countries)
//     }, [setCountries])

//     if(!countries){
//         return '...Loading'
//     }

//     return(
//         <FormControl className={styles.formControl}>
//             <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
//                 <option value="">Select Country</option>
//                 {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
//             </NativeSelect>
//         </FormControl>
//     )
// }

// export default Countries;

import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './Country.module.css';

const Countries = ({ handleCountryChange, countries }) => {

    console.log(countries)

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
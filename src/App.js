import { React, Component} from 'react'

import { Cards, Chart, Country, ChartCountry } from './components';
import { fetchCountries, fetchData } from './api/';
import styles from './App.module.css';
import { Grid } from '@material-ui/core';
import image from './images/covid-19.png';


class App extends Component{
  state = {
    data:{},
    dataCountry:{},
    country:'',
    countries:[]
  }

  async componentDidMount(){
    const data = await fetchData();
    const countries = await fetchCountries();
    this.setState({
      data,
      countries
    })

    console.log(this.state.countries)
    console.log(this.state.data)
  }

  handleCountryChange = async (country) => {
    const dataCountry = await fetchData(country);

    this.setState({ 
      dataCountry, 
      country: country }, () => {

      });
    console.log(this.state.dataCountry)
  }


  render(){
    const {data} = this.state
    return(
      <div className={styles.container}>
        <span className={styles.update}>Last Updated: {new Date(data.lastUpdate).toDateString()}</span>
        <img className={styles.image} src={image} alt="Covid19" />
        <Grid 
          container
          direction="column"
        >
          <Grid
            container
            justify="center"
            alignItems="flex-start"
          >
            <h1>WORLDWIDE</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid 
              item
              xs
            >
              <Cards className='cards' data={data}/>
            </Grid>
            <Grid 
              item
              xs={10}
            >
              <Chart data={data} country={this.state.country} />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
          >
            <Country countries={this.state.countries} handleCountryChange={this.handleCountryChange} />
            <ChartCountry data={this.state.dataCountry} country={this.state.country} />
          </Grid>
        </Grid> 
      </div>
    )
  }
}

export default App;

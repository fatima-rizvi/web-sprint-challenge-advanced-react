import React, { Component } from "react";
import axios from "axios";
import { useForm } from '.././hooks/useForm';

// const initialValues = {
//   search: ''
// };

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    plants: []
  };
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  // const [values, handleChanges, handleSubmit, showSuccessMessage,setShowSuccessMessage] = useForm(initialValue)

  componentDidMount() {
    this.fetchPlants()
  };

  fetchPlants = () =>  {
    fetch('http://localhost:3333/plants')
      .then((res) => res.json())
      .then((data) => {
        //console.log("Returned from api", data)
        //console.log("Plant data", data.plantsData)
        this.setState({
          plants: data.plantsData
      })
    })
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {/* <form onSubmit = {handleSubmit}>
          <label>Search: 
            <input 
              name = 'search'
              value = {values.search}
              onChange = {handleChanges}
            />
          </label>
        </form> */}
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

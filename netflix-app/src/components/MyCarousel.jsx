import { Component } from 'react'
import SingleCarousel from './SingleCarousel'


class MyCarousel extends Component {

 
  render() {
    return (
        <>
        <h4 className='text-white text-start'>Trending Now</h4>
           <SingleCarousel film="Harry Potter"></SingleCarousel>
           <h4 className='text-white text-start'>Watch it Again</h4>
           <SingleCarousel film="Star Wars"></SingleCarousel>
           <h4 className='text-white text-start'>New Releases</h4>
           <SingleCarousel film="Twilight"></SingleCarousel>
           </>    
 
 

    )
  }


}
 



export default MyCarousel
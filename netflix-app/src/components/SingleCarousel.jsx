import { Component } from 'react'
import { Row, Col, Carousel, Alert, Spinner } from 'react-bootstrap';
import '../style.css'; 

class SingleCarousel extends Component {
    state = {
        films: [],
        currentfilm: {},
        isLoading: true,
        isError: false,
    }

    componentDidMount = () => {
        
        this.fetchReservations()
    }

    fetchReservations = () => {
        const URL = 'http://www.omdbapi.com/?apikey=22f06c96&s=' + this.props.film
        fetch(URL)
            .then((response) => {
                
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Errore nella chiamata, response non OK')
                }
            })
            .then((objectFilms) => {
                this.setState({
                    films: objectFilms.Search,
                    isLoading: false,
                })
                
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    isError: true,
                })
                console.log('ERRORE!', error)
            })
    }

    render() {
        const { films, isLoading, isError } = this.state;

        
        const getColumnsPerSlide = () => {
            if (window.innerWidth < 768


            ) {
                return 1; 
            } else if (window.innerWidth < 992


            ) {
                return 2; 
            }
            else  {
                return 4;
            }
        };

        const columnsPerSlide = getColumnsPerSlide();
        const totalSlides = Math.ceil(films.length / columnsPerSlide);

        return (
            <>
                <div className="d-flex justify-content-center mb-3">
                    {isLoading && <Spinner animation="border" variant="danger" />}
                    {isError && <Alert variant="danger">Errore</Alert>}
                </div>

                <Carousel className='h-100 mb-4' interval={null} indicators={false}
                    onSlide={(i) => {
                        this.setState({
                            currentfilm: this.state.films[i],
                        })
                    }}
                >
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <Carousel.Item key={slideIndex} className='h-100'>
                            <Row className='h-100'>
                                {films.slice(slideIndex * columnsPerSlide, (slideIndex + 1) * columnsPerSlide).map((film) => (
                                    <Col key={film.imdbID} xs={12} sm={12} md={6} lg={3} >
                                        <img className="w-100 d-inline film-image" src={film.Poster} alt="" />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </>
        );
    }
}

export default SingleCarousel;
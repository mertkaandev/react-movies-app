import React from 'react'

const MovieList = (props) => {

        return (
            <div className='row'>

                {props.movies.map((movie) => (
                    
                    <div className='col-lg-3' key={movie.id}>
               
                        <div className='card mb-4 shadow-sm'>
                
                            <img src={movie.imageURL} className='card-img-top' alt="Resim"></img>
                            <div className='card-body'>
               
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text' style={{height: 150}}>{movie.overview}</p>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={(e)=> props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                                    <h2 style={{ fontSize: 25 }}>{movie.rating}</h2>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
    
}

export default MovieList;
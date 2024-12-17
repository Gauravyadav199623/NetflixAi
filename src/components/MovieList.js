import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log(movies, 'ml');

    return (
        <div className='px-6'>
            <h1 className='text-3xl text-white py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies && movies.length > 0 ? ( // Check if movies exists and has data
                        movies.map((movie) => (
                            <MovieCard 
                            key={movie.id} 
                            posterPath={movie?.poster_path} 
                            />
                        ))
                    ) : (
                        <p>No movies available.</p> // Fallback message when no movies
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;

import React from 'react'
import Link from 'next/link'

export class MovieList extends React.Component{

    shorten=(text)=>{
        if(text && text.length>100){
            return text.substr(0,100)+'...'
        }
       return text
    }
        


    renderMovies(){
        const movie =this.props.movie
                return movie.map((movie)=>
                    (
                        <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                                <a><img className="card-img-top" src={movie.image} alt="" /></a>
                                </Link>
                                 <div className="card-body">
                                    <h4 className="card-title">
                                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                                        <a>{movie.name}</a>
                                    </Link>
                                                                
                                    </h4>
                                    <p className="card-text">{this.shorten(movie.description)}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{movie.rating}</small>
                                </div>
                            </div>
                        </div>
                    )
                )
        } 
            
    render(){
        const{movie}= this.props
        return(
            <React.Fragment>
                {this.renderMovies()}
            </React.Fragment>
        )    
    }    
}

export default MovieList
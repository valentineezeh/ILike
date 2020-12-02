import React from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as LikeButton} from '../assets/thumbs-up-solid.svg';
import { likeMovieRequest } from '../stores/actions';

const Cards = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading } = props;
  const onLikeMovie = (id) => {
    dispatch(likeMovieRequest(id))
  }

  return (
    <>
      {
        isLoading ? (
          <div className="loader_style">
              <Loader
                type="Circles"
                color="#055005"
                height={100}
                width={100}
                />
            </div>
        ) : data.length === 0 ? (<h1>Movies is yet to be created</h1>) : data.map(item => (
          <div class="card mt-5" style={{ width: "18rem" }} key={item._id}>
            <img class="card-img-top" src={item.image} alt="#"></img>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <div className="row">
                <LikeButton 
                  className="like-button mr-2 ml-3" 
                    onClick={() => onLikeMovie(item._id)}
                  /> {item.likeCount}
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

Cards.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
}

export default Cards;
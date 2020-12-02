import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import 'toastr/build/toastr.css';
import Cards from './components/Cards';
import { getAllMoviesRequest } from './stores/actions'

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // code to run on component mount
    
    // dispatch getRoom method on component did mount
    dispatch((getAllMoviesRequest()));
  }, [dispatch]);

  const { isLoading, movies } = props;
  return (
    <>
      <div className="container mt-5 mb-5">
      <h1 className="mb-5">I-Like Frontend</h1>
        <div className="card-deck">
          <Cards data={movies} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.array,
}

const mapStateToProps = state => ({
  isLoading: state.getMoviesListReducer.isLoading,
  movies: state.getMoviesListReducer.movies,
})

export default connect(mapStateToProps, null)(App);

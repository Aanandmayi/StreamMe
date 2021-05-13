import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props =>

  <div className="home">
    <div className="login-box">
      <h2>Enter meeting Id</h2>
      <form>
        <div className="user-box">
          <input type="text" name="room" value={props.roomId} onChange={props.handleChange} pattern="^\w+$" maxLength="10" required autoFocus title="Room name should only contain letters or numbers." />
          <label>Meeting Id</label>
        </div>
        <div className="buttons">
          <Link to={'/r/' + props.roomId}>
            <span />
            <span />
            <span />
            <span />
            JOIN
          </Link>
          <Link to={'/r/' + props.defaultRoomId}>
            <span />
            <span />
            <span />
            <span />
            CREATE
          </Link>
        </div>
      </form>
    </div>
  </div>;

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired
};

const mapStateToProps = store => ({ rooms: store.rooms });

export default connect(mapStateToProps)(Home);
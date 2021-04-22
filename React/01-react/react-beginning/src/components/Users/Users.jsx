import React from "react";
import styles from "./Users.module.css";
import photo from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import axios from 'axios';

let Users = (props) => {
  // debugger
  let x = props;

  const numberOfPages = Math.ceil(props.usersCount / props.usersOnPage);

  const pages = [];

  for (let i = 1; i <= 8; i++) {
    if (i === 8) {
      pages.push("...");
      pages.push(numberOfPages);
    } else {
      pages.push(i);
    }
  }

  return (
    <div>
      <div>
        {pages.map((number) => {
          return (
            <span
              className={
                props.currentPage === number
                  ? styles.selectedPhoto
                  : styles.unselectedItem
              }
              onClick={(e) => {
                props.getNewData(number);
              }}
            >
              {number}
            </span>
          );
        })}
      </div>
      {props.usersData.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/Profile/" + u.id}>
                <img
                  src={u.photos.small === null ? photo : u.photos.small}
                  alt=""
                  className={styles.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followType === true ? (
                <button
                  onClick={() => {
                    let userId = u.id;
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "b81cfe18-8544-477a-8074-de2d1a56b5a1"
                      }
                    }).then((response) => {
                      if (response.data.resultCode === 0) {
                          props.unfollowAction(u.id);
                      }
                    });
                  }}
                >
                  {" "} Unfollow {" "} </button>) : 
              (
                <button
                  onClick={() => {
                    let userId = u.id;
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "b81cfe18-8544-477a-8074-de2d1a56b5a1"
                      }
                    }).then((response) => {
                      if (response.data.resultCode === 0) {
                        props.followAction(u.id);
                      }  
                    });
                  }}
                >
                  {" "}
                  Follow{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.followType}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

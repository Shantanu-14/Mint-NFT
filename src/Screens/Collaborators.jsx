import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import {IoToggleSharp} from "react-icons/io5"
const Collaborators = () => {
  const [arr, setArr] = useState([{}, {}]);
  var num = 0;
  const addmore = () => {
    setArr([...arr, {}]);
  };

  return (
    <div className="main">
      <div className="add">
      <IoToggleSharp className="toggle"/>
        <h4>add Collaborators / co-contributers</h4>
        <AiFillInfoCircle className="info" />
      </div>
      <div className="container">
        <div className="row">
          <div className="numberblock"></div>
          <div className="nameblock">
            <h4>name of the creator</h4>
          </div>
          <div className="roleblock">
            <h4>role</h4>
          </div>
          <div className="royalityblock">
            <h4>Royality split %</h4>
          </div>
        </div>
        {arr.map((item) => {
          num++;
          return (
            <div className="row">
              <div className="numberblock">
                <h4>{num}</h4>
              </div>
              <div className="nameblock">
                <input type="text" placeholder="start with @" />
              </div>
              <div className="roleblock">
                <input type="text" placeholder="Specify a role" />
              </div>
              <div className="royalityblock">
                <input type="text" placeholder="Enter a %" />
              </div>
            </div>
          );
        })}
        <div className="row">
          <div className="numberblock"></div>
          <div className="nameblock">
            <button
              className="addmore"
              onClick={() => {
                addmore();
              }}
            >
              + add more Collaborators
            </button>
          </div>
          <div className="roleblock"></div>
          <div className="royalityblock"></div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;

import React from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row SearchEngine">
        <div className="col-8">
          <input
            type="search"
            placeholder="🔍 What is the weather in..."
            className="formControl"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="checkBtn">
            Check
          </button>
        </div>
        <div className="col-2">
          <button type="button" className="locationBtn">
            📍
          </button>
        </div>
      </div>
    </form>
  );
}

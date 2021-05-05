import React from "react";
import styles from "./Board.css";
function Board() {
    return (
        <div className="board">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Board</h1>
                        <p>
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board. Board. Board. Board.
                            Board. Board. Board. Board.
                        </p>
                        <div class="row">
                            <div class="card">
                                <h4 class="card-title text-center my-t-3">Member Name</h4>
                                <h4 class="card-title text-center my-2">Officer</h4>
                                <div class="profile"></div>
                            </div>
                            <div class="card">
                                <h4 class="card-title text-center my-t-3">Member Name</h4>
                                <h4 class="card-title text-center my-2">Officer</h4>
                                <div class="profile"></div>
                            </div>
                            <div class="card">
                                <h4 class="card-title text-center my-t-3">Member Name</h4>
                                <h4 class="card-title text-center my-2">Officer</h4>
                                <div class="profile"></div>
                            </div>
                            <div class="card">
                                <h4 class="card-title text-center my-t-3">Member Name</h4>
                                <h4 class="card-title text-center my-2">Officer</h4>
                                <div class="profile"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;

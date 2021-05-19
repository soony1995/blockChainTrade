import React from 'react'
import { Link } from 'react-router-dom';
import Web3 from 'Web3';
const Web3 = require("Web3");

const customProvider = {
    sendAsync: (payload, cb) => {
        console.log("you called");
        console.log("payload");
        cb(undefined, 100); 
    }
}

// const provider = new Web3.provider.HttpProvider('HTTP://127.0.0.1:7545')
const Web3 = new Web3(customProvider)
Web3.eth.getBlockNumber()
    .then
const Test = () => {
    return (
        <div>

        </div>

    )
}
export default Test
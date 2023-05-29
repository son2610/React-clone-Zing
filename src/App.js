//import { useState } from "react";
//useSelector -> lay du lieu tu redux
//useDispatch -> mang action toi redux
//import {useSelector, useDispatch} from 'react-redux'

import {Home, Login, Public} from './containers/public/'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Routes, Route} from 'react-router-dom';
import path from './ultils/path'

function App() {

    // hàm này để thử xem hàm redux đã được thực hiện chưa
    //kết quả là thằng app.js đã lấy được state của thằng appReducer
     // const {test} = useSelector(state => state.app)
     // console.log(test)

    return (
        <>
            <div className="">
                <Routes>
                    {/* /* đại diẹn cho toan bộ ký tự nhập vào
                    Nếu người dùng nhập sai thì url sẻ chuyển về Public.js
                    Đây gọi là Nested Router -> router lồng router*/}
                    <Route path= {path.PUBLIC} element={<Public />}>
                        {/* Muốn build router home thì thằng cha phải sử dụng thêm componen 
                            Nếu khong thì khi vào /home thì browser chỉ render thằng cha Public */} Outlet
                        <Route path={path.HOME} element={<Home/>}/>
                        <Route path={path.LOGIN} element={<Login/>}/>

                        <Route path={path.START} element={<Home/>}/>
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    );
}

export default App;

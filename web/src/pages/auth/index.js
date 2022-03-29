import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, register } from '../../redux/user'

import { useState } from 'react'
import React, { Component } from 'react'
import Select from 'react-select'
import styled from "styled-components";

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(login({ email, password }))
        history.push('/')
    }

    return (
        <>
            <div style={{ height: '100%' }}>
                <div className="container-fluid h-100 my-auto">
                    <div className="row h-100">
                        <div className="col-md-6 primary" />
                        <div className="col-md-6 h-100 my-auto">
                            <div className="row h-100">
                                <div className="text-center offset-md-3 col-md-6 my-auto">
                                    <h2>Sign In</h2>
                                    <p>View patient data here</p>
                                    <form onSubmit={onSubmit} className="auth">
                                        <input
                                            placeholder="your@email.com"
                                            type="text"
                                            value={email}
                                            className="form-control"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <input
                                            placeholder="p@ssw0rd!"
                                            type="password"
                                            value={password}
                                            className="form-control"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            className="form-control"
                                        >
                                            Login
                                        </button>
                                    </form>
                                    <p>
                                        or <Link to="/register">register</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(register({ name, email, password }))
        history.push('/')
    }

    return (
        <>
            <div style={{ height: '100%' }}>
                <div className="container-fluid h-100 my-auto">
                    <div className="row h-100">
                        <div className="col-md-6 primary" />
                        <div className="col-md-6 h-100 my-auto">
                            <div className="row h-100">
                                <div className="text-center offset-md-3 col-md-6 my-auto">
                                    <h2>Sign In</h2>
                                    <p>View patient data here</p>
                                    <form onSubmit={onSubmit} className="auth">
                                        <input
                                            placeholder="John Smith"
                                            type="text"
                                            value={name}
                                            className="form-control"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <input
                                            placeholder="your@email.com"
                                            type="text"
                                            value={email}
                                            className="form-control"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <input
                                            placeholder="p@ssw0rd!"
                                            type="password"
                                            value={password}
                                            className="form-control"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            className="form-control"
                                        >
                                            Sign Up
                                        </button>
                                    </form>
                                    <p>
                                        or <Link to="/login">login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Test() {
    return (
        <div className="container">
            <div style={{backgroundColor:"#89e887"}} className="row">
                <div style={{paddingBottom: "5%", paddingTop:"5%"}} className="text-center offset-md-4">
                    <h2>Let's do better together</h2>
                    <p>View patient data here</p>
                </div>
            </div>
                <div style={{paddingTop: "5%"}} className="body text-color container">
                    
                    <h3><u>What can we do to reduce our waste?</u></h3>
                    <div style={{paddingTop: "2%"}} className="row"> 
                        <a style={{textDecoration: "none"}} href="#recycle-text" className="col-sm">
                            <div className="col-sm square content box background-image recycle-image">
                                <div className="text-center">Recycle</div>
                            </div>
                        </a>
                        <a style={{textDecoration: "none"}} href="#compost-text" className="col-sm">
                            <div className="col-sm square content box background-image compost-image">
                                <div className="text-center">Compost</div>
                            </div>
                        </a>
                        <a style={{textDecoration: "none"}} href="#reduce-text" className="col-sm">
                            <div className="col-sm square content box background-image reduce-image">
                                <div className="text-center">Reduce</div>    
                            </div>
                        </a>
                    </div>
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <a id="recycle-text"></a>
                            <div className="panel-heading header-div">
                                <h1>Recycle</h1>
                                
                            </div>
                            <div className="panel-body">
                                <p>Recycling is a classic way of limiting the amount of waste that enters
                                    your trash can. In school, we learned that you can recycle paper, plastic,
                                    aluminum, and glass, but this isn't the whole picture. What if the item in 
                                    question is only half plastic? What about items that food has touched?
                                    These are important questions to keep in mind. Also, depending on your
                                    municipality, there are different resources and rules for what you can
                                    recycle. It's important to stay updated about your local recycling rules
                                    in order to recycle as much as possible! </p>
                                    <p>For example, here are a few items that require a little bit more effort
                                        to recycle:
                                    </p>
                                    <ul>
                                        <li>batteries</li>
                                        <li>old cars</li>
                                        <li>used phones and other tech</li>
                                        <li>paint</li>
                                        <li>refrigerators</li>
                                        <li>... and more!</li>
                                    </ul>

                                    <p>If you have an item that you aren't sure can be recycled, check out&nbsp;<a href="https://search.earth911.com/">
                                        search.earth911.com</a>&nbsp;for more details on how to recycle specific materials, and locations near you.

                                    </p>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <a id="compost-text"></a>
                            <div className="panel-heading header-div">
                                <h1>Compost</h1>
                                
                            </div>
                            <div className="panel-body">
                                <p>According to a study by SWACO, food waste is the largest category by weight of
                                    individual waste by trash, making up a total of <i><b>15%</b></i> of the average suburan
                                    home's waste. By eliminating food waste, you can quickly reduce the amount of total
                                    waste that goes to landfills by a massive amount!
                                </p>
                                <p>
                                    Unfortunately, composting is a very recent development, and there are very few initiatives
                                    within local governments to provide widespread composting services. Luckily, there are a few
                                    ways that you can still compost your food waste. To find local businesses near you that
                                    pick up compost, go to&nbsp;<a href="https://compostnow.org/compost-services/">compostnow.org
                                    </a>&nbsp;to figure out if there is a business near you.
                                </p>
                                <p>
                                    If you don't want to spend money, or live in an isolated area, don't worry! There are still ways
                                    for you to compost on your own. Check out&nbsp;<a href="https://www.npr.org/2020/04/07/828918397/how-to-compost-at-home">
                                    this guide</a>&nbsp;from NPR that teaches you the basics of how to compost.
                                </p>
                            </div>
                        </div>
                        <div style={{paddingBottom:"10%"}} className="panel panel-default">
                            <a id="reduce-text"></a>
                            <div className="panel-heading header-div">
                                <h1>Reduce</h1>
                               
                            </div>
                            <div className="panel-body">
                                <p>If you have already started recycling and composting properly but don't see your numbers
                                    in a satisfactory place, it may indicate that you are putting more into landfills than the
                                    average person. To solve this problem, you may want to find ways to consciously reduce the
                                    amount of trash that you are consuming per day. 
                                </p>
                                <p>
                                    It is easy to say that you should reduce, but in actuality, implementing a reduction in waste
                                    is a very difficult task. To start, try keeping a trash journal of everything that you throw
                                    away in one day. For each item that you throw away, try to come up with an alternative to
                                    the product that reduces the amount of waste.
                                </p>
                                <p>
                                    Additionally, there are some smaller tips that you could try to implement:
                                </p>
                                <ul>
                                    <li>Try getting your produce from a farmer's market to avoid extraneous packaging</li>
                                    <li>Drink water out of a hard, reusable bottle</li>
                                    <li>Find ways to donate old items - call your local Goodwill to find out what they will take</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const medOptions = [
    { value: 'Lipitor', label: 'Lipitor' },
    { value: 'Amoxil', label: 'Amoxil' },
    { value: 'Prinivil', label: 'Prinivil' },
    { value: 'Synthroid', label: 'Synthroid' },
    { value: 'Ventolin', label: 'Ventolin' },
    { value: 'Glucophage', label: 'Glucophage' },
    { value: 'Norvasc', label: 'Norvasc' },
    { value: 'Lopressor', label: 'Lopressor' },
    { value: 'Losec', label: 'Losec' },
    { value: 'Cozaar', label: 'Cozaar' },
    { value: 'Zithromax', label: 'Zithromax' },
    { value: 'Deltasone', label: 'Deltasone' },
    { value: 'Advil', label: 'Advil'},
    { value: 'Neurontin', label: 'Neurontin' },
    { value: 'Flovent', label: 'Flovent' },
    { value: 'Microzide', label: 'Microzide' },
    { value: 'Zocor', label: 'Zocor' },
    { value: 'Zoloft', label: 'Zoloft' },
    { value: 'Singulair', label: 'Singulair' }
];

const dayOptions = [
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' }
];

const Button = styled.button`
  background-color: #f89d42;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function Schedule() {
    const [medValue, setMedValue] = React.useState(null);
    const [timeValue, setTimeValue] = React.useState(null);
    const [daysValue, setDaysValue] = React.useState(null);

    let patientPhoneInput = React.createRef();
    let caregiverPhoneInput = React.createRef();

    let onOnclickHandler = (e) => {
        const patientNumStr = patientPhoneInput.current.value;
        const caregiverNumStr = caregiverPhoneInput.current.value;
        const patientNum = parseInt(patientNumStr);
        const caregiverNum = parseInt(caregiverNumStr);

        if (patientNumStr.length != 10 || (caregiverNumStr.length != 10 && caregiverNumStr.length != 0) || isNaN(patientNum)){
            alert('Please enter a valid phone number. ex: 2137403211');
            return;
        }

        if (patientNum === caregiverNum){
            alert('Please enter two different phone numbers for patient and caregiver, or leave caregiver blank');
            return;
        }

        let daysArray = [];
        for (const dayValue of daysValue){
            daysArray.push(dayValue.value);
        }

        console.log(daysArray)

        if (daysArray.length === 0){
            alert('Please fill out the day category');
            return;
        }

        if (timeValue === null){
            alert('Please fill out the time category');
            return;
        }

        if (medValue === null){
            alert('Please fill out the med category');
            return;
        }
 
        const timeStr = timeValue.getHours() + ":" + timeValue.getMinutes();

        const data = {
            medication: medValue.value,
            time: timeStr,
            daysArr: daysArray,
            patientPhone: patientNum,
            caregiverPhone: caregiverNum
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        let bruh = null;
        fetch('https://rxminderbackend.herokuapp.com/add', requestOptions)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else alert("Schedule successfully submitted!");
          })
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col scheduler">
                    <h3>Medication</h3>
                    <Select className="selector" 
                            options={medOptions} 
                            placeholder="Select Medication..."
                            onChange={(newValue) => {
                                setMedValue(newValue);
                            }} />
                </div>
                <div className="col scheduler">
                    <h3>Schedule</h3>
                    <div className="row">
                        <div className="col">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Time"
                                    value={timeValue}
                                    onChange={(newValue) => {
                                        setTimeValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="col">
                            <Select className="selector" 
                                    isMulti 
                                    options={dayOptions} 
                                    placeholder="Select Days of The Week..."
                                    onChange={(newValue) => {
                                        setDaysValue(newValue);
                                    }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col scheduler">
                    <h3>Patient Phone #</h3>
                    <input type="text" name="patientPhone" ref={patientPhoneInput} />
                </div>
                <div className="col scheduler">
                    <h3>Caregiver Phone #</h3>
                    <input type="text" name="caregiverPhone" ref={caregiverPhoneInput}/>
                </div>
            </div>
            <div className="row">
                <div className="col scheduler">
                    <Button onClick={onOnclickHandler}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

function Monitor() {
    return (
        <div className="container">
            <div className="primary mb-5" style={{ height: '78%'}}> 
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-5 my-auto">
                            <h1 className="mb-3">Monitor</h1>
                            <p>
                                Our device works to provide an easy and modular solution
                                to medication adherence issues for elderly patients
                            </p>
                        </div>
                        <div className="offset-md-1 col-md-6 my-auto">
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="HDTW">
                <div className="text-center">
                    <h3>How does this work?</h3>
                    <p>We're glad you asked</p>
                </div>
            </div>
        </div>
    )
}

export { Login, Register, Schedule, Monitor, Test }

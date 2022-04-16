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
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';

import StaticDatePicker from '@mui/lab/StaticDatePicker';
import PickersDay from '@mui/lab/PickersDay';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import randomDate from 'random-datetime'
//import 'react-calendar/dist/Calendar.css';


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

const Button = styled.button`
  background-color: #f89d42;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

function Test() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    let onOnclickHandler = (e) => {
        fetch('https://rxminderbackend.herokuapp.com/test', requestOptions)
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else alert("Testing!");
          })
    };

    return (
        <div className="test container">
           <Button onClick={onOnclickHandler}>
                        Simulate Time of Medication
            </Button>
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
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' }
];

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

        if (patientNumStr.length !== 10 || (caregiverNumStr.length !== 10 && caregiverNumStr.length !== 0) || isNaN(patientNum)){
            alert('Please enter a valid phone number. ex: 2137403211');
            return;
        }

        if (patientNum === caregiverNum){
            alert('Please enter two different phone numbers for patient and caregiver, or leave caregiver blank');
            return;
        }

        let daysArr = [];
        for (const dayValue of daysValue){
            daysArr.push(dayValue);
        }

        console.log(daysArr)

        if (daysArr.length === 0){
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
            dayArr: daysArr,
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
                                <DesktopTimePicker
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

const CustomGreenPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
      prop !== 'green' && prop !== 'red',
  })(({ theme, green}) => ({
      ...(green && {
        borderRadius: 0,
        backgroundColor: "#95dd83",
        color: "#FFFFFF",
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        '&:hover, &:focus': {
          backgroundColor: "#f89d42",
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '50%',
        },
      }),
  }));

const CustomRedPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
      prop !== 'red',
  })(({ theme, red}) => ({
      ...(red && {
        borderRadius: 0,
        backgroundColor: "#e27979",
        color: "#FFFFFF",
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        '&:hover, &:focus': {
          backgroundColor: "#f89d42",
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '50%',
        },
      }),
  }));

const outerTheme = createTheme({
    palette: {
        primary: {
        main: "#FAAB5B",
        },
    },
});

function Monitor() {
    const [value, setValue] = React.useState(new Date());

    const [hasTaken, getTakenValue] = React.useState(null);
    const [timePillTaken, getTimeTakenValue] = React.useState(null);

    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
          return <PickersDay {...pickersDayProps}
          />;
        }

        const green = Boolean(Math.round(Math.random()+.3));
        const red = !green;

        if(green){
            return (
                <CustomGreenPickersDay
                  {...pickersDayProps}
                  disableMargin
                  green={green}
                />
              );
        }
        else{
            return (
                <CustomRedPickersDay
                  {...pickersDayProps}
                  disableMargin
                  red={red}
                />
              );
        }
    };

    fetch('https://rxminderbackend.herokuapp.com/getData', {
        crossDomain:true,
        method: 'GET',
      })
        .then(response => response.json()).then(responseJson => {
            getTakenValue(responseJson.taken);
            getTimeTakenValue(responseJson.timeTaken);
            console.log(responseJson);
        })

    return (
        <div className="container">
            <div className = "patientProgress">
                <h1 className='text-center'>Patient Progress</h1>
            </div>
            <div className="row">
                <div className="col">
                    <div className='calendar-container'>
                        <ThemeProvider theme={outerTheme}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    orientation="landscape"
                                    openTo="day"
                                    label="Pill Schedule Monitor"
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                    }}
                                    renderDay={renderWeekPickerDay}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </ThemeProvider>
                    </div>
                </div>
                <div className="col">
                    <p className='text-center schText'>{hasTaken ? "Pill was taken at " + timePillTaken : 'Patient has not taken their medication yet today'}</p>
                </div>
            </div>
        </div> //implement taken code here
    )
}

export { Login, Register, Schedule, Monitor, Test }

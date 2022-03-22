import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, register } from '../../redux/user'

import { useState } from 'react'

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
                                    <p>Achieve zero-waste today</p>
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
                                    <p>Achieve zero-waste today</p>
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

function Learn() {
    return (
        <div className="container">
            <div style={{backgroundColor:"#89e887"}} className="row">
                <div style={{paddingBottom: "5%", paddingTop:"5%"}} className="text-center offset-md-4">
                    <h2>Let's do better together</h2>
                    <p>Achieve zero waste today</p>
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

export { Login, Register, Learn }

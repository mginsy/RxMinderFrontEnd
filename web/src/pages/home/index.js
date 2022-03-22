import Lottie from 'lottie-react'
import animationData from './ecology.json'

function Home() {
    return (
        <>
            <div className="primary mb-5" style={{ height: '65%' }}>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-5 my-auto">
                            <h1 className="mb-3">We can achieve zero-waste</h1>
                            <p>
                                Our device works to create sustainable
                                lifestyles while saving households money from
                                garbage collection services
                            </p>
                        </div>
                        <div className="offset-md-1 col-md-6 my-auto">
                            <Lottie animationData={animationData} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="container my-5">
                <div className="text-center">
                    <h3>How does this work?</h3>
                    <p>We're glad you asked</p>
                </div>
            </div>
        </>
    )
}

export default Home
